import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

const Compras = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [compras, setCompras] = useState([]);
  const [error, setError] = useState('');
  const [nuevo, setNuevo] = useState({
    id_proveedor: '',
    numero_factura: '',
    fecha: '',
    subtotal: 0,
    impuesto: 0,
    total: 0,
    metodo_pago: '',
    estado: 'Pendiente',
    detalles: [{ id_producto: '', cantidad: 1, precio_compra: 0, subtotal: 0 }],
  });

  const IniciaRegistroCompra = () => {
    setNuevo({ id_proveedor: '', numero_factura: '', fecha: '', subtotal: 0, impuesto: 0, total: 0, metodo_pago: '', estado: 'Pendiente', detalles: [{ id_producto: '', cantidad: 1, precio_compra: 0, subtotal: 0 }] });
  };

  const SeleccionarProveedorYProductos = (proveedorId, detalles) => {
    setNuevo({ ...nuevo, id_proveedor: Number(proveedorId), detalles });
  };

  const IngresaDatos = (campo, valor) => {
    setNuevo({ ...nuevo, [campo]: valor });
  };

  const RecibeConfirmacionVisual = (mensaje) => mensaje;

  const headers = () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` });

  useEffect(() => {
    if (!usuarioLocal || !['Administrador', 'Recepcionista'].includes(usuarioLocal.rol)) {
      alert('Acceso denegado para gestión de compras.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }

    cargarProveedores();
    cargarProductos();
    cargarCompras();
  }, [navigate, usuarioLocal]);

  const cargarProveedores = async () => {
    const res = await fetch(`${API}/proveedores/`, { headers: headers() });
    const data = await res.json();
    if (res.ok) setProveedores(Array.isArray(data) ? data : []);
  };

  const cargarProductos = async () => {
    const res = await fetch(`${API}/productos/`, { headers: headers() });
    const data = await res.json();
    if (res.ok) setProductos(Array.isArray(data) ? data : []);
  };

  const cargarCompras = async () => {
    try {
      setError('');
      const res = await fetch(`${API}/compras/`, { headers: headers() });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar compras.');
      setCompras(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando compras.');
    }
  };

  const actualizarDetalle = (index, field, value) => {
    const detalles = [...nuevo.detalles];
    detalles[index] = { ...detalles[index], [field]: value };
    detalles[index].subtotal = Number(detalles[index].cantidad || 0) * Number(detalles[index].precio_compra || 0);
    setNuevo({ ...nuevo, detalles });
  };

  const agregarLinea = () => {
    setNuevo({ ...nuevo, detalles: [...nuevo.detalles, { id_producto: '', cantidad: 1, precio_compra: 0, subtotal: 0 }] });
  };

  const eliminarLinea = (index) => {
    const detalles = nuevo.detalles.filter((_, i) => i !== index);
    setNuevo({ ...nuevo, detalles: detalles.length ? detalles : [{ id_producto: '', cantidad: 1, precio_compra: 0, subtotal: 0 }] });
  };

  const calcularTotales = () => {
    const subtotal = nuevo.detalles.reduce((sum, item) => sum + Number(item.subtotal || 0), 0);
    const impuesto = Number(nuevo.impuesto || 0);
    const total = subtotal + impuesto;
    return { subtotal, total };
  };

  const crearCompra = async (e) => {
    e.preventDefault();
    setError('');
    const { subtotal, total } = calcularTotales();
    const payload = {
      ...nuevo,
      subtotal,
      total,
      detalles: nuevo.detalles,
    };
    const res = await fetch(`${API}/compras/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));
    setNuevo({ id_proveedor: '', numero_factura: '', fecha: '', subtotal: 0, impuesto: 0, total: 0, metodo_pago: '', estado: 'Pendiente', detalles: [{ id_producto: '', cantidad: 1, precio_compra: 0, subtotal: 0 }] });
    await cargarCompras();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Compras a Proveedores (CU12)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar Compra</h3>
          <form onSubmit={crearCompra}>
            <div className="input-group"><label>Proveedor</label><select value={nuevo.id_proveedor} onChange={(e) => setNuevo({ ...nuevo, id_proveedor: Number(e.target.value) })} required><option value="">Seleccione</option>{proveedores.map((p) => (<option key={p.codigo} value={p.codigo}>{p.empresa}</option>))}</select></div>
            <div className="input-group"><label>Número factura</label><input value={nuevo.numero_factura} onChange={(e) => setNuevo({ ...nuevo, numero_factura: e.target.value })} /></div>
            <div className="input-group"><label>Fecha</label><input type="date" value={nuevo.fecha} onChange={(e) => setNuevo({ ...nuevo, fecha: e.target.value })} required /></div>
            <div className="input-group"><label>Impuesto</label><input type="number" step="0.01" value={nuevo.impuesto} onChange={(e) => setNuevo({ ...nuevo, impuesto: Number(e.target.value) })} /></div>
            <div className="input-group"><label>Método de pago</label><input value={nuevo.metodo_pago} onChange={(e) => setNuevo({ ...nuevo, metodo_pago: e.target.value })} /></div>
            <div className="input-group"><label>Estado</label><select value={nuevo.estado} onChange={(e) => setNuevo({ ...nuevo, estado: e.target.value })}>
              <option value="Pendiente">Pendiente</option>
              <option value="Aprobado">Aprobado</option>
              <option value="Negado">Negado</option>
            </select></div>
            <div style={{ marginTop: '15px' }}>
              <h4>Detalles de compra</h4>
              {nuevo.detalles.map((detalle, index) => (
                <div key={index} style={{ backgroundColor: '#121212', padding: '12px', borderRadius: '8px', marginBottom: '10px' }}>
                  <div className="input-group"><label>Producto</label><select value={detalle.id_producto} onChange={(e) => actualizarDetalle(index, 'id_producto', Number(e.target.value))} required><option value="">Seleccione</option>{productos.map((prod) => (<option key={prod.codigo} value={prod.codigo}>{prod.nombre}</option>))}</select></div>
                  <div className="input-group"><label>Cantidad</label><input type="number" min="1" value={detalle.cantidad} onChange={(e) => actualizarDetalle(index, 'cantidad', Number(e.target.value))} required /></div>
                  <div className="input-group"><label>Precio compra</label><input type="number" step="0.01" value={detalle.precio_compra} onChange={(e) => actualizarDetalle(index, 'precio_compra', Number(e.target.value))} required /></div>
                  <div className="input-group"><label>Subtotal</label><input type="number" step="0.01" value={detalle.subtotal} disabled /></div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}><button type="button" onClick={() => eliminarLinea(index)} style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '5px', padding: '6px 10px', cursor: 'pointer' }}>Eliminar</button></div>
                </div>
              ))}
              <button type="button" onClick={agregarLinea} style={{ padding: '8px 12px', borderRadius: '5px', border: 'none', backgroundColor: '#2c5f8f', color: 'white', cursor: 'pointer' }}>Agregar línea</button>
            </div>
            <div style={{ marginTop: '12px' }}>
              <strong>Subtotal:</strong> ${calcularTotales().subtotal} <br />
              <strong>Total:</strong> ${calcularTotales().total}
            </div>
            <button type="submit" className="btn-login" style={{ marginTop: '16px' }}>Crear compra</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Compras registradas</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Código</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Proveedor</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Número factura</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Fecha</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Subtotal</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Impuesto</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Total</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Método de pago</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((c) => (
                <tr key={c.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                  <td style={{ padding: '8px' }}>#{c.codigo}</td>
                  <td style={{ padding: '8px' }}>{c.proveedor_empresa || '-'}</td>
                  <td style={{ padding: '8px' }}>{c.numero_factura || '-'}</td>
                  <td style={{ padding: '8px' }}>{c.fecha || '-'}</td>
                  <td style={{ padding: '8px' }}>${c.subtotal || 0}</td>
                  <td style={{ padding: '8px' }}>${c.impuesto || 0}</td>
                  <td style={{ padding: '8px' }}>${c.total || 0}</td>
                  <td style={{ padding: '8px' }}>{c.metodo_pago || '-'}</td>
                  <td style={{ padding: '8px' }}>{c.estado || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compras;