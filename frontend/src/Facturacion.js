import React from 'react';
import { useNavigate } from 'react-router-dom';

const Facturacion = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: '#ff6600', margin: 0 }}>Emitir Facturación (CU14)</h2>
        <div>
          <button onClick={() => navigate('/inicio')} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Inicio</button>
          <button onClick={() => navigate('/perfil')} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mi Perfil</button>
        </div>
      </div>
      <div style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '20px' }}>
        <p>Este espacio se puede usar para emitir facturas y registrar datos de facturación. Es un placeholder para CU14.</p>
      </div>
    </div>
  );
};

export default Facturacion;
