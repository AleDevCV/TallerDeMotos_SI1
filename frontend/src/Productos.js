import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';

const API = `${API_BASE_URL}/api`;

const Productos = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [productoEdicion, setProductoEdicion] = useState(null);
  const [nuevo, setNuevo] = useState({
    codigo_barras: '',
    nombre: '',
    categoria: '',
    marca: '',
    modelo_compatible: '',
    stock_actual: '',
    stock_minimo: '',
    precio_compra: '',
    precio_venta: '',
    ubicacion_almacen: '',
    estado: 'Activo',
  });
  const [editForm, setEditForm] = useState({
    codigo_barras: '',
    nombre: '',
    categoria: '',
    marca: '',
    modelo_compatible: '',
    stock_actual: '',
    stock_minimo: '',
    precio_compra: '',
    precio_venta: '',
    ubicacion_almacen: '',
    estado: 'Activo',
  });

  const headers = (json = true) => {
    const token = localStorage.getItem('token');
    return json
      ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      : { Authorization: `Bearer ${token}` };
  };

  const toIntOrNull = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
  };

  const toFloatOrNull = (value) => {
    if (value === '' || value === null || value === undefined) return null;
    const parsed = parseFloat(value);
    return Number.isNaN(parsed) ? null : parsed;
  };

  const construirPayload = (base) => ({
    ...base,
    stock_actual: toIntOrNull(base.stock_actual),
    stock_minimo: toIntOrNull(base.stock_minimo),
    precio_compra: toFloatOrNull(base.precio_compra),
    precio_venta: toFloatOrNull(base.precio_venta),
  });

  useEffect(() => {
    if (!usuarioLocal || usuarioLocal.rol !== 'Administrador') {
      alert('Acceso denegado para gestion de productos.');
      navigate(getHomeRouteByRole(usuarioLocal?.rol));
      return;
    }
    cargarProductos();
  }, [navigate, usuarioLocal]);

  const cargarProductos = async () => {
    try {
      setError('');
      setCargando(true);
      const res = await fetch(`${API}/productos/`, { headers: headers(false) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar productos.');
      setProductos(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexion cargando productos.');
    } finally {
      setCargando(false);
    }
  };

  const abrirNuevo = () => {
    setError('');
    setNuevo({
      codigo_barras: '',
      nombre: '',
      categoria: '',
      marca: '',
      modelo_compatible: '',
      stock_actual: '',
      stock_minimo: '',
      precio_compra: '',
      precio_venta: '',
      ubicacion_almacen: '',
      estado: 'Activo',
    });
    setMostrarNuevo(true);
  };

  const crearProducto = async (e) => {
    e.preventDefault();
    setError('');
    const payload = construirPayload(nuevo);
    const res = await fetch(`${API}/productos/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data));

    setMostrarNuevo(false);
    await cargarProductos();
  };

  const abrirEdicion = (producto) => {
    setError('');
    setProductoEdicion(producto);
    setEditForm({
      codigo_barras: producto.codigo_barras || '',
      nombre: producto.nombre || '',
      categoria: producto.categoria || '',
      marca: producto.marca || '',
      modelo_compatible: producto.modelo_compatible || '',
      stock_actual: producto.stock_actual ?? '',
      stock_minimo: producto.stock_minimo ?? '',
      precio_compra: producto.precio_compra ?? '',
      precio_venta: producto.precio_venta ?? '',
      ubicacion_almacen: producto.ubicacion_almacen || '',
      estado: producto.estado || 'Activo',
    });
  };

  const guardarEdicion = async (e) => {
    e.preventDefault();
    if (!productoEdicion) return;

    const payload = construirPayload(editForm);
    const res = await fetch(`${API}/productos/${productoEdicion.codigo}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || JSON.stringify(data));

    setProductoEdicion(null);
    await cargarProductos();
  };

  const eliminarProducto = async (producto) => {
    const confirmar = window.confirm(`Eliminar producto ${producto.nombre}?`);
    if (!confirmar) return;

    const res = await fetch(`${API}/productos/${producto.codigo}/`, {
      method: 'DELETE',
      headers: headers(false),
    });

    if (!res.ok) {
      const data = await res.json();
      return setError(data.error || 'No se pudo eliminar producto.');
    }

    await cargarProductos();
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Gestion de Productos (CU10)</h2>
        <div>
          <button
            onClick={() => navigate('/perfil')}
            style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Mi Perfil
          </button>
          <button
            onClick={() => navigate(getHomeRouteByRole(usuarioLocal?.rol))}
            style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Inicio
          </button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h3 style={{ margin: 0 }}>Listado</h3>
        <button
          onClick={abrirNuevo}
          style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Nuevo Producto
        </button>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Codigo Barras</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Nombre</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Categoria</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Marca</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Stock Actual</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Precio Venta</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.codigo} style={{ borderBottom: '1px solid #2c2c2c' }}>
                <td style={{ padding: '8px' }}>{p.codigo_barras || '-'}</td>
                <td style={{ padding: '8px' }}>{p.nombre}</td>
                <td style={{ padding: '8px' }}>{p.categoria || '-'}</td>
                <td style={{ padding: '8px' }}>{p.marca || '-'}</td>
                <td style={{ padding: '8px' }}>{p.stock_actual ?? '-'}</td>
                <td style={{ padding: '8px' }}>{p.precio_venta ?? '-'}</td>
                <td style={{ padding: '8px' }}>
                  <button
                    onClick={() => abrirEdicion(p)}
                    style={{ marginRight: '6px', backgroundColor: '#2c5f8f', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarProducto(p)}
                    style={{ backgroundColor: '#8f2d2d', border: 'none', color: 'white', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {!cargando && productos.length === 0 && (
              <tr>
                <td colSpan="7" style={{ padding: '12px', color: '#999' }}>Sin productos registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {mostrarNuevo && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '560px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Nuevo Producto</h3>
            <form onSubmit={crearProducto}>
              <div className="input-group"><label>Codigo Barras</label><input value={nuevo.codigo_barras} onChange={(e) => setNuevo({ ...nuevo, codigo_barras: e.target.value })} /></div>
              <div className="input-group"><label>Nombre</label><input value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Categoria</label><input value={nuevo.categoria} onChange={(e) => setNuevo({ ...nuevo, categoria: e.target.value })} /></div>
              <div className="input-group"><label>Marca</label><input value={nuevo.marca} onChange={(e) => setNuevo({ ...nuevo, marca: e.target.value })} /></div>
              <div className="input-group"><label>Modelo Compatible</label><input value={nuevo.modelo_compatible} onChange={(e) => setNuevo({ ...nuevo, modelo_compatible: e.target.value })} /></div>
              <div className="input-group"><label>Stock Actual</label><input type="number" value={nuevo.stock_actual} onChange={(e) => setNuevo({ ...nuevo, stock_actual: e.target.value })} /></div>
              <div className="input-group"><label>Stock Minimo</label><input type="number" value={nuevo.stock_minimo} onChange={(e) => setNuevo({ ...nuevo, stock_minimo: e.target.value })} /></div>
              <div className="input-group"><label>Precio Compra</label><input type="number" step="0.01" value={nuevo.precio_compra} onChange={(e) => setNuevo({ ...nuevo, precio_compra: e.target.value })} /></div>
              <div className="input-group"><label>Precio Venta</label><input type="number" step="0.01" value={nuevo.precio_venta} onChange={(e) => setNuevo({ ...nuevo, precio_venta: e.target.value })} /></div>
              <div className="input-group"><label>Ubicacion Almacen</label><input value={nuevo.ubicacion_almacen} onChange={(e) => setNuevo({ ...nuevo, ubicacion_almacen: e.target.value })} /></div>
              <div className="input-group">
                <label>Estado</label>
                <select value={nuevo.estado} onChange={(e) => setNuevo({ ...nuevo, estado: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" onClick={() => setMostrarNuevo(false)} style={{ padding: '8px 12px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancelar</button>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {productoEdicion && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '100%', maxWidth: '560px', backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#ff6600' }}>Editar Producto</h3>
            <form onSubmit={guardarEdicion}>
              <div className="input-group"><label>Codigo Barras</label><input value={editForm.codigo_barras} onChange={(e) => setEditForm({ ...editForm, codigo_barras: e.target.value })} /></div>
              <div className="input-group"><label>Nombre</label><input value={editForm.nombre} onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })} required /></div>
              <div className="input-group"><label>Categoria</label><input value={editForm.categoria} onChange={(e) => setEditForm({ ...editForm, categoria: e.target.value })} /></div>
              <div className="input-group"><label>Marca</label><input value={editForm.marca} onChange={(e) => setEditForm({ ...editForm, marca: e.target.value })} /></div>
              <div className="input-group"><label>Modelo Compatible</label><input value={editForm.modelo_compatible} onChange={(e) => setEditForm({ ...editForm, modelo_compatible: e.target.value })} /></div>
              <div className="input-group"><label>Stock Actual</label><input type="number" value={editForm.stock_actual} onChange={(e) => setEditForm({ ...editForm, stock_actual: e.target.value })} /></div>
              <div className="input-group"><label>Stock Minimo</label><input type="number" value={editForm.stock_minimo} onChange={(e) => setEditForm({ ...editForm, stock_minimo: e.target.value })} /></div>
              <div className="input-group"><label>Precio Compra</label><input type="number" step="0.01" value={editForm.precio_compra} onChange={(e) => setEditForm({ ...editForm, precio_compra: e.target.value })} /></div>
              <div className="input-group"><label>Precio Venta</label><input type="number" step="0.01" value={editForm.precio_venta} onChange={(e) => setEditForm({ ...editForm, precio_venta: e.target.value })} /></div>
              <div className="input-group"><label>Ubicacion Almacen</label><input value={editForm.ubicacion_almacen} onChange={(e) => setEditForm({ ...editForm, ubicacion_almacen: e.target.value })} /></div>
              <div className="input-group">
                <label>Estado</label>
                <select value={editForm.estado} onChange={(e) => setEditForm({ ...editForm, estado: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
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
