from django.contrib.auth.hashers import make_password
from django.conf import settings
from django.core import signing
from django.db import connection
from django.test import TestCase
from rest_framework.test import APIClient
import unittest

from .models import Cliente, Motocicleta, Privilegio, Rol, Usuario


class Ciclo1ApiTests(TestCase):
	@classmethod
	def setUpClass(cls):
		super().setUpClass()
		tablas = set(connection.introspection.table_names())
		requeridas = {'rol', 'usuario', 'privilegio', 'cliente', 'motocicleta'}
		if not requeridas.issubset(tablas):
			raise unittest.SkipTest('Esquema no gestionado no disponible en la BD de pruebas.')

	def setUp(self):
		self.client = APIClient()

		self.admin_role, _ = Rol.objects.get_or_create(nombre='Administrador', defaults={'descripcion': 'Rol admin'})
		self.recep_role, _ = Rol.objects.get_or_create(nombre='Recepcionista', defaults={'descripcion': 'Rol recepcion'})
		self.cliente_role, _ = Rol.objects.get_or_create(nombre='Cliente', defaults={'descripcion': 'Rol cliente'})

		self.admin = Usuario.objects.create(
			id_rol=self.admin_role,
			nombre='Admin Test C1',
			email='admin.c1.test@laroca.com',
			contrasena=make_password('123456'),
			telefono='70000001',
			estado='Activo',
		)
		self.recep = Usuario.objects.create(
			id_rol=self.recep_role,
			nombre='Recep Test C1',
			email='recep.c1.test@laroca.com',
			contrasena=make_password('123456'),
			telefono='70000002',
			estado='Activo',
		)
		self.cliente = Usuario.objects.create(
			id_rol=self.cliente_role,
			nombre='Cliente Test C1',
			email='cliente.c1.test@laroca.com',
			contrasena=make_password(settings.CLIENT_TEMP_PASSWORD),
			telefono='70000003',
			estado='Activo',
		)

	def _login(self, email, password='123456'):
		response = self.client.post('/api/login/', {'email': email, 'password': password}, format='json')
		self.assertEqual(response.status_code, 200)
		self.assertTrue(response.data.get('exito'))
		return response.data['token']

	def test_cu03_cu04_roles_privilegios_get_ok(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		resp_roles = self.client.get('/api/roles/')
		resp_privilegios = self.client.get('/api/privilegios/')
		resp_relaciones = self.client.get('/api/roles-privilegios/')

		self.assertEqual(resp_roles.status_code, 200)
		self.assertEqual(resp_privilegios.status_code, 200)
		self.assertEqual(resp_relaciones.status_code, 200)
		self.assertIsInstance(resp_relaciones.data, list)

	def test_cu20_bitacora_solo_admin(self):
		token_admin = self._login(self.admin.email)
		token_recep = self._login(self.recep.email)

		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token_admin}')
		ok_response = self.client.get('/api/bitacora/')
		self.assertEqual(ok_response.status_code, 200)

		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token_recep}')
		forbidden_response = self.client.get('/api/bitacora/')
		self.assertEqual(forbidden_response.status_code, 403)

	def test_cu05_clientes_crud(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		crear = self.client.post(
			'/api/clientes/',
			{
				'cedula': 'C1-CLI-001',
				'nombre': 'Cliente Prueba',
				'telefono': '7771111',
				'direccion': 'Zona Centro',
				'email': 'cliente.prueba@example.com',
			},
			format='json',
		)
		self.assertEqual(crear.status_code, 201)

		listado = self.client.get('/api/clientes/?q=Cliente')
		self.assertEqual(listado.status_code, 200)
		self.assertGreaterEqual(len(listado.data), 1)

		cliente_id = Cliente.objects.get(cedula='C1-CLI-001').codigo
		actualizar = self.client.put(f'/api/clientes/{cliente_id}/', {'nombre': 'Cliente Editado'}, format='json')
		self.assertEqual(actualizar.status_code, 200)

		eliminar = self.client.delete(f'/api/clientes/{cliente_id}/')
		self.assertEqual(eliminar.status_code, 200)

	def test_cu06_motocicletas_crud(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		cliente = Cliente.objects.create(
			cedula='C1-CLI-002',
			nombre='Cliente Moto',
			telefono='7772222',
		)

		crear = self.client.post(
			'/api/motocicletas/',
			{
				'id_cliente': cliente.codigo,
				'placa': '777-ABC',
				'marca': 'Honda',
				'modelo': 'CB150',
				'anio': 2022,
			},
			format='json',
		)
		self.assertEqual(crear.status_code, 201)

		listado = self.client.get('/api/motocicletas/?q=777-ABC')
		self.assertEqual(listado.status_code, 200)
		self.assertGreaterEqual(len(listado.data), 1)

		moto_id = Motocicleta.objects.get(placa='777-ABC').codigo
		actualizar = self.client.put(f'/api/motocicletas/{moto_id}/', {'marca': 'Yamaha'}, format='json')
		self.assertEqual(actualizar.status_code, 200)

		eliminar = self.client.delete(f'/api/motocicletas/{moto_id}/')
		self.assertEqual(eliminar.status_code, 200)

	def test_cu17_perfil_actualizar_y_password(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		ver_perfil = self.client.get('/api/perfil/')
		self.assertEqual(ver_perfil.status_code, 200)
		self.assertEqual(ver_perfil.data['email'], self.admin.email)

		actualizar_perfil = self.client.put('/api/perfil/', {'nombre': 'Admin Editado', 'telefono': '7999999'}, format='json')
		self.assertEqual(actualizar_perfil.status_code, 200)

		cambiar_password = self.client.patch(
			'/api/perfil/',
			{
				'password_actual': '123456',
				'password_nueva': 'ClaveSegura@1',
				'password_confirmacion': 'ClaveSegura@1',
			},
			format='json',
		)
		self.assertEqual(cambiar_password.status_code, 200)

	def test_password_policy_rechaza_password_debil_en_perfil(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		resp = self.client.patch(
			'/api/perfil/',
			{
				'password_actual': '123456',
				'password_nueva': 'abc12345',
				'password_confirmacion': 'abc12345',
			},
			format='json',
		)

		self.assertEqual(resp.status_code, 400)
		self.assertIn('mayúscula', resp.data.get('error', ''))

	def test_password_policy_en_force_change_cliente(self):
		token = self._login(self.cliente.email, settings.CLIENT_TEMP_PASSWORD)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		resp_debil = self.client.post(
			'/api/password/force-change/',
			{
				'password_nueva': 'Debil123',
				'password_confirmacion': 'Debil123',
			},
			format='json',
		)
		self.assertEqual(resp_debil.status_code, 400)
		self.assertIn('especial', resp_debil.data.get('error', ''))

		resp_fuerte = self.client.post(
			'/api/password/force-change/',
			{
				'password_nueva': 'ClienteSeguro@1',
				'password_confirmacion': 'ClienteSeguro@1',
			},
			format='json',
		)
		self.assertEqual(resp_fuerte.status_code, 200)

	def test_password_policy_rechaza_password_debil_en_reset(self):
		token_reset = signing.dumps(
			{
				'purpose': 'password_reset',
				'uid': self.admin.codigo,
				'jti': 'jti-test-c1',
			},
			salt='password-reset',
		)

		resp = self.client.post(
			'/api/password/reset/',
			{
				'token': token_reset,
				'password_nueva': 'sinmayuscula@1',
				'password_confirmacion': 'sinmayuscula@1',
			},
			format='json',
		)

		self.assertEqual(resp.status_code, 400)
		self.assertIn('mayúscula', resp.data.get('error', ''))

	def test_cu03_asignar_y_revocar_privilegio(self):
		token = self._login(self.admin.email)
		self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

		privilegio = Privilegio.objects.create(nombre='C1_PRIV_TEST', descripcion='Privilegio de prueba C1')

		asignar = self.client.post(
			'/api/roles-privilegios/',
			{'id_rol': self.admin_role.codigo, 'id_privilegio': privilegio.codigo},
			format='json',
		)
		self.assertEqual(asignar.status_code, 201)

		revocar = self.client.delete(
			'/api/roles-privilegios/',
			{'id_rol': self.admin_role.codigo, 'id_privilegio': privilegio.codigo},
			format='json',
		)
		self.assertEqual(revocar.status_code, 200)
