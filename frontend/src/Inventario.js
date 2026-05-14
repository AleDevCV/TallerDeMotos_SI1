import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getHomeRouteByRole } from './navigation';
import { API_BASE_URL } from './config';
import { validarPermisoModulo } from './permissions';

const API = `${API_BASE_URL}/api`;

const Inventario = () => {
  const navigate = useNavigate();
  const usuarioLocal = useMemo(() => JSON.parse(localStorage.getItem('usuario')), []);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [mostrarBajoStock, setMostrarBajoStock] = useState(false);
  const [historialCodigo, setHistorialCodigo] = useState('');
  const [historial, setHistorial] = useState([]);
  const [ajusteCodigo, setAjusteCodigo] = useState('');
  const [ajusteCantidad, setAjusteCantidad] = useState(0);
  const [ajusteMensaje, setAjusteMensaje] = useState('');

  const ValidarStockYAlertas = (producto) => {
    return Number(producto.stock_actual) <= Number(producto.stock_minimo || 1);
  };

  const RecibeConfirmacionYDatos = (datos) => datos;

  const ConsultaHistorialProductos = () => {
    if (!historialCodigo.trim()) {
      setError('Ingresa el código del producto para consultar historial.');
      return;
    }
    setError('');
    const producto = productos.find((p) => String(p.codigo) === String(historialCodigo));
    if (!producto) {
      setHistorial([]);
      setAjusteMensaje(`Producto ${historialCodigo} no encontrado en el inventario.`);
      return;
    }
    setHistorial([{ fecha: new Date().toISOString(), descripcion: `Historial simulado para ${producto.nombre}`, cantidad: producto.stock_actual }]);
    setAjusteMensaje(`Historial cargado para producto #${historialCodigo}.`);
  };

  const RegistraAjusteManual = () => {
    if (!ajusteCodigo.trim()) {
      setError('Ingresa el código del producto para ajustar stock.');
      return;
    }
    if (isNaN(Number(ajusteCantidad))) {
      setError('Ingresa una cantidad válida para el ajuste.');
      return;
    }
    setError('');
    const codigo = String(ajusteCodigo);
    const cantidad = Number(ajusteCantidad);
    setProductos((prev) => prev.map((producto) => {
      if (String(producto.codigo) !== codigo) return producto;
      return { ...producto, stock_actual: Number(producto.stock_actual || 0) + cantidad };
    }));
    setAjusteMensaje(`Ajuste manual aplicado al producto ${codigo}: ${cantidad >= 0 ? `+${cantidad}` : cantidad}.`);
    setAjusteCodigo('');
    setAjusteCantidad(0);
  };

  const productosOrdenados = useMemo(
    () => [...productos].sort((a, b) => Number(a.codigo) - Number(b.codigo)),
    [productos]
  );

  const headers = () => ({ Authorization: `Bearer ${localStorage.getItem('token')}` });

  useEffect(() => {
    if (!usuarioLocal) {
      navigate('/login');
      return;
    }

    const validarAcceso = async () => {
      const permitido = await validarPermisoModulo(
        'CU11',
        ['Mostrar', 'Buscar', 'Reportes'],
        usuarioLocal?.rol
      );
      if (!permitido) {
        alert('Acceso denegado para monitoreo de inventario.');
        navigate(getHomeRouteByRole(usuarioLocal?.rol));
        return;
      }

      cargarInventario(mostrarBajoStock);
    };

    validarAcceso();
  }, [navigate, usuarioLocal, mostrarBajoStock]);

  const cargarInventario = async (soloBajo) => {
    try {
      setError('');
      const query = soloBajo ? '?alerta=bajo' : '';
      const res = await fetch(`${API}/inventario/${query}`, {
        headers: headers(),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'No se pudo cargar inventario.');
      setProductos(Array.isArray(data) ? data : []);
    } catch {
      setError('Error de conexión cargando inventario.');
    }
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Monitoreo de Inventario (CU11)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>

      {error && <div className="error-box" style={{ marginBottom: '15px' }}>{error}</div>}

      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={mostrarBajoStock}
            onChange={(e) => setMostrarBajoStock(e.target.checked)}
          />
          Mostrar solo stock bajo
        </label>
        <span style={{ color: '#ccc' }}>
          Stock mínimo se muestra como mínimo 1 y todas las ubicaciones se completan en la tabla.
        </span>
      </div>

      <div style={{ marginBottom: '16px', color: '#ddd' }}>
        Total de productos: <strong>{productos.length}</strong>
      </div>

      <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Código</th>
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
            </tr>
          </thead>
          <tbody>
            {productosOrdenados.map((p) => {
              const stockMinimo = Math.max(1, Number(p.stock_minimo) || 1);
              const ubicacion = p.ubicacion_almacen?.trim() || 'Sin ubicación asignada';
              const estaBajo = Number(p.stock_actual) <= stockMinimo;
              return (
                <tr key={p.codigo} style={{ borderBottom: '1px solid #2c2c2c', backgroundColor: estaBajo ? 'rgba(255, 100, 100, 0.08)' : 'transparent' }}>
                  <td style={{ padding: '8px' }}>#{p.codigo}</td>
                  <td style={{ padding: '8px' }}>{p.nombre || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.marca || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.categoria || '-'}</td>
                  <td style={{ padding: '8px' }}>{p.modelo_compatible || '-'}</td>
                  <td style={{ padding: '8px' }}><strong>{p.stock_actual || 0}</strong></td>
                  <td style={{ padding: '8px' }}>{stockMinimo}</td>
                  <td style={{ padding: '8px' }}>$ {p.precio_compra || 0}</td>
                  <td style={{ padding: '8px' }}>$ {p.precio_venta || 0}</td>
                  <td style={{ padding: '8px' }}>{ubicacion}</td>
                  <td style={{ padding: '8px' }}>{p.estado || 'Activo'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Consultar historial de producto</h3>
          <div className="input-group"><label>Código del producto</label><input value={historialCodigo} onChange={(e) => setHistorialCodigo(e.target.value)} /></div>
          <button type="button" onClick={ConsultaHistorialProductos} style={{ padding: '10px 16px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Consultar historial</button>
          {ajusteMensaje && <div style={{ marginTop: '12px', color: '#d1d1d1' }}>{ajusteMensaje}</div>}
          {historial.length > 0 && (
            <div style={{ marginTop: '12px' }}>
              <h4>Historial simulado</h4>
              <ul style={{ paddingLeft: '18px' }}>
                {historial.map((item, index) => (
                  <li key={index}>{`${item.fecha}: ${item.descripcion} (${item.cantidad})`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
          <h3>Registrar ajuste manual</h3>
          <div className="input-group"><label>Código del producto</label><input value={ajusteCodigo} onChange={(e) => setAjusteCodigo(e.target.value)} /></div>
          <div className="input-group"><label>Cantidad a ajustar</label><input type="number" value={ajusteCantidad} onChange={(e) => setAjusteCantidad(Number(e.target.value))} /></div>
          <button type="button" onClick={RegistraAjusteManual} style={{ padding: '10px 16px', backgroundColor: '#2c5f8f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Aplicar ajuste</button>
          {ajusteMensaje && <div style={{ marginTop: '12px', color: '#d1d1d1' }}>{ajusteMensaje}</div>}
        </div>
      </div>
    </div>
  );
};

export default Inventario;