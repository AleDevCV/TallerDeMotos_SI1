import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';
import { validarPermisoModulo } from './permissions';

const API = `${API_BASE_URL}/api`;

const Productos = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [incluirInactivos, setIncluirInactivos] = useState(false);
  const [nuevo, setNuevo] = useState({
    codigo_barras: '',
    nombre: '',
    categoria: '',
    marca: '',
    modelo_compatible: '',
    stock_actual: 0,
    stock_minimo: 1,
    precio_compra: 0,
    precio_venta: 0,
    ubicacion_almacen: '',
    estado: 'Activo',
  });
  const [productoEdicion, setProductoEdicion] = useState(null);
  const [editForm, setEditForm] = useState({
    nombre: '',
    categoria: '',
    marca: '',
    precio_compra: 0,
    precio_venta: 0,
    stock_actual: 0,
    stock_minimo: 0,
    ubicacion_almacen: '',
    estado: 'Activo',
  });

  const IniciaGestionBuscaRepuesto = async () => {
    await cargarProductos(busqueda);
  };

  const SolicitaCrearRepuesto = async (e) => {
    await crearProducto(e);
  };

  const SolicitaEditarDesactivar = async (producto, datosActualizados) => {
    abrirEdicion(producto);
    setEditForm(datosActualizados || editForm);
  };

  const RecibeConfirmacionVisual = (mensaje) => mensaje;

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    if (!usuarioLocal) {
      navigate('/login');
      return;
    }

    const validarAcceso = async () => {
      const permitido = await validarPermisoModulo(
        'CU10',
        ['Mostrar', 'Buscar', 'Adicionar', 'Eliminar', 'Editar'],
        usuarioLocal?.rol
      );
      if (!permitido) {
        alert('Acceso denegado para gestión de productos.');
        navigate(getHomeRouteByRole(usuarioLocal?.rol));
        return;
      }

      cargarProductos();
    };

    validarAcceso();
  }, [navigate, usuarioLocal]);

  const cargarProductos = async (query = '') => {
    try {
      setError('');
      const url = new URL(`${API}/productos/`);
      if (query) url.searchParams.set('q', query);
      if (incluirInactivos) url.searchParams.set('incluir_inactivos', 'true');

      const res = await fetch(url.toString(), {
        headers: headers(false),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar productos.');
      setProductos(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando productos.');
    }
  };

  const crearProducto = async (e) => {
    e.preventDefault();
    setError('');
    const payload = {
      ...nuevo,
      stock_minimo: Math.max(1, Number(nuevo.stock_minimo) || 1),
      ubicacion_almacen: nuevo.ubicacion_almacen.trim() || 'Sin ubicación asignada',
    };
    const res = await fetch(`${API}/productos/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));
    setNuevo({ codigo_barras: '', nombre: '', categoria: '', marca: '', modelo_compatible: '', stock_actual: 0, stock_minimo: 1, precio_compra: 0, precio_venta: 0, ubicacion_almacen: '', estado: 'Activo' });
    await cargarProductos(busqueda);
  };

  const abrirEdicion = (producto) => {
    setProductoEdicion(producto);
    setEditForm({
      nombre: producto.nombre || '',
      categoria: producto.categoria || '',
      marca: producto.marca || '',
      precio_compra: producto.precio_compra || 0,
      precio_venta: producto.precio_venta || 0,
      stock_actual: producto.stock_actual || 0,
      stock_minimo: producto.stock_minimo || 1,
      ubicacion_almacen: producto.ubicacion_almacen || '',
      estado: producto.estado || 'Activo',
    });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    if (!productoEdicion) return;
    const payload = {
      ...editForm,
      stock_minimo: Math.max(1, Number(editForm.stock_minimo) || 1),
      ubicacion_almacen: editForm.ubicacion_almacen.trim() || 'Sin ubicación asignada',
    };
    const res = await fetch(`${API}/productos/${productoEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data.errores || {}));
    setProductoEdicion(null);
    await cargarProductos(busqueda);
  };

  const desactivarProducto = async (producto) => {
    if (!window.confirm(`¿Desactivar producto ${producto.nombre}?`)) return;
    setError('');
    const res = await fetch(`${API}/productos/${producto.codigo}/`, {
      method: 'DELETE',
      headers: headers(false),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'No se pudo desactivar el producto.');
    await cargarProductos(busqueda);
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestión de Productos (CU10)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar producto</h3>
          <form onSubmit={crearProducto}>
            <div className="input-group"><label>Código de barras</label><input value={nuevo.codigo_barras} onChange={(e) => setNuevo({ ...nuevo, codigo_barras: e.target.value })} /></div>
            <div className="input-group"><label>Nombre</label><input value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })} required /></div>
            <div className="input-group"><label>Categoría</label><input value={nuevo.categoria} onChange={(e) => setNuevo({ ...nuevo, categoria: e.target.value })} /></div>
            <div className="input-group"><label>Marca</label><input value={nuevo.marca} onChange={(e) => setNuevo({ ...nuevo, marca: e.target.value })} /></div>
            <div className="input-group"><label>Estado</label><select value={nuevo.estado} onChange={(e) => setNuevo({ ...nuevo, estado: e.target.value })}>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select></div>
            <div className="input-group"><label>Modelo compatible</label><input value={nuevo.modelo_compatible} onChange={(e) => setNuevo({ ...nuevo, modelo_compatible: e.target.value })} /></div>
            <div className="input-group"><label>Stock actual</label><input type="number" value={nuevo.stock_actual} onChange={(e) => setNuevo({ ...nuevo, stock_actual: Number(e.target.value) })} /></div>
            <div className="input-group"><label>Stock mínimo</label><input type="number" min="1" value={nuevo.stock_minimo} onChange={(e) => setNuevo({ ...nuevo, stock_minimo: Number(e.target.value) })} required /></div>
            <div className="input-group"><label>Precio compra</label><input type="number" step="0.01" value={nuevo.precio_compra} onChange={(e) => setNuevo({ ...nuevo, precio_compra: Number(e.target.value) })} /></div>
            <div className="input-group"><label>Precio venta</label><input type="number" step="0.01" value={nuevo.precio_venta} onChange={(e) => setNuevo({ ...nuevo, precio_venta: Number(e.target.value) })} /></div>
            <div className="input-group"><label>Ubicación</label><input value={nuevo.ubicacion_almacen} onChange={(e) => setNuevo({ ...nuevo, ubicacion_almacen: e.target.value })} required /></div>
            <button type="submit" className="btn-login">Crear producto</button>
          </form>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Listado de productos</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre, marca o categoría"
              style={{ flex: '1', minWidth: '220px', padding: '10px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#111', color: 'white' }}
            />
            <button
              type="button"
              onClick={IniciaGestionBuscaRepuesto}
              style={{ padding: '10px 16px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Buscar
            </button>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc' }}>
              <input
                type="checkbox"
                checked={incluirInactivos}
                onChange={(e) => setIncluirInactivos(e.target.checked)}
              />
              Mostrar inactivos
            </label>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Código</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Código barras</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Nombre</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Marca</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Categoría</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Modelo compatible</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Stock actual</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Stock mínimo</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Precio compra</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Precio venta</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Ubicación</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Estado</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.codigo} style={{ borderBottom: '1px solid #2c2c2c', opacity: (p.estado || 'Activo') === 'Inactivo' ? 0.6 : 1 }}>
                  <td style={{ padding: '8px' }}>#{p.codigo}</td>
                  <td style={{ padding: '8px' }}>{p.codigo_barras || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.nombre}</td>
                  <td style={{ padding: '8px' }}>{p.marca || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.categoria || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.modelo_compatible || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.stock_actual}</td>
                  <td style={{ padding: '8px' }}>{p.stock_minimo}</td>
                  <td style={{ padding: '8px' }}>$ {p.precio_compra}</td>
                  <td style={{ padding: '8px' }}>$ {p.precio_venta}</td>
                  <td style={{ padding: '8px' }}>{p.ubicacion_almacen || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.estado || 'Activo'}</td>
                  <td style={{ padding: '8px' }}>
                    <button onClick={() => abrirEdicion(p)} style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Editar</button>
                    <button onClick={() => desactivarProducto(p)} style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}>Desactivar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {productoEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '520px', maxHeight: '80vh', overflowY: 'auto', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar producto</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Nombre</label><input value={editForm.nombre} onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Categoría</label><input value={editForm.categoria} onChange={(e) => setEditForm({ ...editForm, categoria: e.target.value })} /></div>
              <div className="input-group"><label>Marca</label><input value={editForm.marca} onChange={(e) => setEditForm({ ...editForm, marca: e.target.value })} /></div>
              <div className="input-group"><label>Estado</label><select value={editForm.estado} onChange={(e) => setEditForm({ ...editForm, estado: e.target.value })}>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select></div>
              <div className="input-group"><label>Precio compra</label><input type="number" step="0.01" value={editForm.precio_compra} onChange={(e) => setEditForm({ ...editForm, precio_compra: Number(e.target.value) })} /></div>
              <div className="input-group"><label>Precio venta</label><input type="number" step="0.01" value={editForm.precio_venta} onChange={(e) => setEditForm({ ...editForm, precio_venta: Number(e.target.value) })} /></div>
              <div className="input-group"><label>Stock actual</label><input type="number" value={editForm.stock_actual} onChange={(e) => setEditForm({ ...editForm, stock_actual: Number(e.target.value) })} /></div>
              <div className="input-group"><label>Stock mínimo</label><input type="number" min="1" value={editForm.stock_minimo} onChange={(e) => setEditForm({ ...editForm, stock_minimo: Number(e.target.value) })} required /></div>
              <div className="input-group"><label>Ubicación</label><input value={editForm.ubicacion_almacen} onChange={(e) => setEditForm({ ...editForm, ubicacion_almacen: e.target.value })} required /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setProductoEdicion(null)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;