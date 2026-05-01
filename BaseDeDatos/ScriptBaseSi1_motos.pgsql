-- ==========================================================
-- SCRIPT DE CREACIÓN DE BASE DE DATOS (DISEÑO FÍSICO)
-- PROYECTO: SISTEMA DE GESTIÓN DE TALLER DE MOTOCICLETAS
-- ==========================================================

-- 1. TABLAS INDEPENDIENTES (Sin llaves foráneas)

CREATE TABLE Privilegio (
    codigo SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE Rol (
    codigo SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT
);

CREATE TABLE Cliente (
    codigo SERIAL PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    telefono_alternativo VARCHAR(20),
    direccion TEXT,
    email VARCHAR(100),
    fecha_registro DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Producto (
    codigo SERIAL PRIMARY KEY,
    codigo_barras VARCHAR(50),
    nombre VARCHAR(150) NOT NULL,
    categoria VARCHAR(50),
    marca VARCHAR(50),
    modelo_compatible TEXT,
    stock_actual INTEGER DEFAULT 0,
    stock_minimo INTEGER DEFAULT 0,
    precio_compra NUMERIC(10,2) NOT NULL,
    precio_venta NUMERIC(10,2) NOT NULL,
    ubicacion_almacen VARCHAR(50),
    estado VARCHAR(20) DEFAULT 'Activo'
);

CREATE TABLE Proveedor (
    codigo SERIAL PRIMARY KEY,
    empresa VARCHAR(150) NOT NULL,
    nit VARCHAR(30) NOT NULL,
    contacto VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion TEXT
);

-- 2. TABLAS DE NIVEL 1 (Dependen de las independientes)

-- Tabla intermedia para la relación Muchos a Muchos entre Rol y Privilegio
CREATE TABLE Rol_Privilegio (
    id_rol INTEGER REFERENCES Rol(codigo) ON DELETE CASCADE,
    id_privilegio INTEGER REFERENCES Privilegio(codigo) ON DELETE CASCADE,
    PRIMARY KEY (id_rol, id_privilegio)
);

CREATE TABLE Usuario (
    codigo SERIAL PRIMARY KEY,
    id_rol INTEGER NOT NULL REFERENCES Rol(codigo),
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    estado VARCHAR(20) DEFAULT 'Activo',
    fecha_registro DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Motocicleta (
    codigo SERIAL PRIMARY KEY,
    id_cliente INTEGER NOT NULL REFERENCES Cliente(codigo) ON DELETE CASCADE,
    placa VARCHAR(15) UNIQUE NOT NULL,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    anio INTEGER,
    cilindraje VARCHAR(20),
    color VARCHAR(30),
    numero_motor VARCHAR(100),
    numero_chasis VARCHAR(100),
    kilometraje_actual NUMERIC(10,2) DEFAULT 0
);

CREATE TABLE Compra (
    codigo SERIAL PRIMARY KEY,
    id_proveedor INTEGER NOT NULL REFERENCES Proveedor(codigo),
    numero_factura VARCHAR(50),
    fecha DATE DEFAULT CURRENT_DATE,
    subtotal NUMERIC(10,2) NOT NULL,
    impuesto NUMERIC(10,2) NOT NULL,
    total NUMERIC(10,2) NOT NULL,
    metodo_pago VARCHAR(50),
    estado VARCHAR(20) DEFAULT 'Completada'
);

-- 3. TABLAS DE NIVEL 2 (Procesos principales del Taller)

CREATE TABLE DetalleCompra (
    codigo SERIAL PRIMARY KEY,
    id_compra INTEGER NOT NULL REFERENCES Compra(codigo) ON DELETE CASCADE,
    id_producto INTEGER NOT NULL REFERENCES Producto(codigo),
    cantidad INTEGER NOT NULL,
    precio_compra NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL
);

CREATE TABLE Cotizacion (
    codigo SERIAL PRIMARY KEY,
    id_cliente INTEGER NOT NULL REFERENCES Cliente(codigo),
    id_motocicleta INTEGER NOT NULL REFERENCES Motocicleta(codigo),
    fecha_emision DATE DEFAULT CURRENT_DATE,
    fecha_validez DATE NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL,
    impuesto NUMERIC(10,2) NOT NULL,
    total NUMERIC(10,2) NOT NULL,
    estado VARCHAR(20) DEFAULT 'Pendiente'
);

CREATE TABLE DetalleCotizacion (
    codigo SERIAL PRIMARY KEY,
    id_cotizacion INTEGER NOT NULL REFERENCES Cotizacion(codigo) ON DELETE CASCADE,
    tipo VARCHAR(50) NOT NULL, -- 'Repuesto' o 'Mano de Obra'
    descripcion TEXT,
    cantidad INTEGER NOT NULL,
    precio_unitario NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL
);

CREATE TABLE OrdenTrabajo (
    codigo SERIAL PRIMARY KEY,
    id_cotizacion INTEGER REFERENCES Cotizacion(codigo), -- Puede ser NULL si entra sin cotizar
    id_cliente INTEGER NOT NULL REFERENCES Cliente(codigo),
    id_motocicleta INTEGER NOT NULL REFERENCES Motocicleta(codigo),
    id_mecanico INTEGER REFERENCES Usuario(codigo),
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    fecha_inicio DATE,
    fecha_fin DATE,
    kilometraje_ingreso NUMERIC(10,2),
    estado VARCHAR(30) DEFAULT 'En revisión',
    prioridad VARCHAR(20) DEFAULT 'Normal',
    costo_mano_obra NUMERIC(10,2) DEFAULT 0,
    costo_repuestos NUMERIC(10,2) DEFAULT 0,
    total NUMERIC(10,2) DEFAULT 0
);

-- 4. TABLAS DE NIVEL 3 (Detalles de la Orden, Notas y Cierre)

CREATE TABLE DetalleOrdenTrabajo (
    codigo SERIAL PRIMARY KEY,
    id_orden_trabajo INTEGER NOT NULL REFERENCES OrdenTrabajo(codigo) ON DELETE CASCADE,
    id_producto INTEGER REFERENCES Producto(codigo), -- Puede ser NULL si es solo servicio
    tipo VARCHAR(50) NOT NULL, -- 'Repuesto' o 'Mano de Obra'
    descripcion TEXT,
    cantidad INTEGER NOT NULL,
    provisto_por_cliente BOOLEAN DEFAULT FALSE, -- Si el cliente trajo el repuesto, no se cobra
    precio_unitario NUMERIC(10,2) NOT NULL,
    subtotal NUMERIC(10,2) NOT NULL
);

CREATE TABLE NotaTrabajo (
    codigo SERIAL PRIMARY KEY,
    id_orden_trabajo INTEGER NOT NULL REFERENCES OrdenTrabajo(codigo) ON DELETE CASCADE,
    id_mecanico INTEGER NOT NULL REFERENCES Usuario(codigo),
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contenido TEXT NOT NULL,
    tipo_nota VARCHAR(50) -- ej. 'Diagnóstico', 'Avance', 'Problema'
);

CREATE TABLE Bitacora (
    codigo SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL REFERENCES Usuario(codigo),
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    accion VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL
);

CREATE TABLE NotaServicio (
    codigo SERIAL PRIMARY KEY,
    id_orden_trabajo INTEGER NOT NULL REFERENCES OrdenTrabajo(codigo),
    id_cliente INTEGER NOT NULL REFERENCES Cliente(codigo),
    fecha_emision DATE DEFAULT CURRENT_DATE,
    total_repuestos NUMERIC(10,2) NOT NULL,
    total_mano_obra NUMERIC(10,2) NOT NULL,
    total_general NUMERIC(10,2) NOT NULL,
    observaciones TEXT,
    estado_pago VARCHAR(20) DEFAULT 'Pendiente'
);

-- 5. TABLA FINAL (Facturación Legal separada)

CREATE TABLE Factura (
    codigo SERIAL PRIMARY KEY,
    id_nota_servicio INTEGER NOT NULL REFERENCES NotaServicio(codigo),
    numero_autorizacion VARCHAR(100),
    fecha_emision DATE DEFAULT CURRENT_DATE,
    monto_servicio_facturado NUMERIC(10,2) NOT NULL, -- Solo Mano de Obra
    impuesto NUMERIC(10,2) NOT NULL,
    total_facturado NUMERIC(10,2) NOT NULL,
    nit_cliente VARCHAR(30) NOT NULL,
    razon_social VARCHAR(150) NOT NULL
);

-- FIN DEL SCRIPT




-- ==========================================================
-- SCRIPT DE POBLACIÓN DE DATOS (DML - INSERTS)
-- PROYECTO: SISTEMA DE GESTIÓN DE TALLER DE MOTOCICLETAS
-- ==========================================================

-- 1. PRIVILEGIOS Y ROLES
INSERT INTO Privilegio (nombre, descripcion) VALUES 
('Gestionar Usuarios', 'Crear, editar o desactivar usuarios del sistema'),
('Gestionar Roles y Privilegios', 'Asignar roles y permisos a usuarios'),
('Gestionar Clientes', 'Registrar y modificar datos de clientes (CU05)'),
('Gestionar Motocicletas', 'Registrar y modificar datos de motos (CU06)'),
('Crear Orden de Trabajo', 'Iniciar una nueva orden de servicio'),
('Actualizar Estado de Orden', 'Cambiar estado, agregar repuestos y notas (Mecánico)'),
('Generar Factura', 'Realizar cobros y emitir notas de servicio'),
('Consultar Bitácora', 'Ver el registro de auditoría del sistema (CU20)');

INSERT INTO Rol (nombre, descripcion) VALUES 
('Administrador', 'Acceso total al sistema y configuraciones'),
('Recepcionista', 'Atención al cliente, registro de vehículos y facturación'),
('Mecánico', 'Encargado de la reparación y diagnóstico'),
('Cliente', 'Acceso al portal web para seguimiento de su motocicleta');

-- Asignar Privilegios a los Roles (La Magia del RBAC)
-- 1. ADMINISTRADOR (Rol 1) -> Tiene todos los privilegios (1 al 8)
INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES 
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8);

-- 2. RECEPCIONISTA (Rol 2) -> Clientes, Motos, Crear Órdenes y Facturar
INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES 
(2, 3), (2, 4), (2, 5), (2, 7);

-- 3. MECÁNICO (Rol 3) -> Solo Actualizar Órdenes (Diagnósticos y Repuestos)
INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES 
(3, 6);

-- Crear Usuarios de Prueba (Contraseña: 123456 por ahora, luego se encriptará en Django)
INSERT INTO Usuario (id_rol, nombre, email, contrasena, telefono, estado) VALUES 
(1, 'Admin Principal', 'admin@laroca.com', '123456', '77777777', 'Activo'),
(2, 'Maria (Recepcionista)', 'maria@laroca.com', '123456', '66666666', 'Activo'),
(3, 'Carlos (Mecánico)', 'carlos@laroca.com', '123456', '55555555', 'Activo');

-- 3. CLIENTES Y MOTOCICLETAS
INSERT INTO Cliente (cedula, nombre, telefono, direccion, email) VALUES 
('8899776', 'Maria Lopez', '76655443', 'Av. Banzer 4to Anillo', 'maria@gmail.com'),
('5544332', 'Roberto Gomez', '75544332', 'Plan 3000', 'roberto@hotmail.com'),
('1122334', 'Ana Roca', '74433221', 'Villa 1ro de Mayo', 'ana.roca@yahoo.com');

INSERT INTO Motocicleta (id_cliente, placa, marca, modelo, anio, cilindraje, color, kilometraje_actual) VALUES 
(1, '1234-ABC', 'Honda', 'Navi', 2022, '110cc', 'Rojo', 5400.50),
(2, '5678-DEF', 'Yamaha', 'FZ-S', 2020, '150cc', 'Negro', 15200.00),
(2, '9012-GHI', 'Suzuki', 'Gixxer', 2023, '155cc', 'Azul', 2100.00),
(3, '3456-JKL', 'KTM', 'Duke 200', 2021, '200cc', 'Naranja', 18500.00);

-- 4. INVENTARIO (Productos y Repuestos)
INSERT INTO Producto (codigo_barras, nombre, categoria, marca, stock_actual, precio_compra, precio_venta) VALUES 
('PROD-001', 'Aceite de Motor 10W-40', 'Lubricantes', 'Motul', 20, 50.00, 80.00),
('PROD-002', 'Bujía Iridium', 'Eléctrico', 'NGK', 15, 30.00, 60.00),
('PROD-003', 'Pastillas de Freno Delanteras', 'Frenos', 'Brembo', 10, 80.00, 150.00),
('PROD-004', 'Llanta Trasera 140/60', 'Neumáticos', 'Pirelli', 5, 300.00, 450.00),
('PROD-005', 'Filtro de Aire', 'Consumibles', 'K&N', 12, 40.00, 75.00);

-- 5. ORDENES DE TRABAJO (Con diferentes estados)
-- Orden 1: Finalizada
INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, fecha_fin, kilometraje_ingreso, estado, costo_mano_obra, costo_repuestos, total) VALUES 
(1, 1, 2, '2026-03-20', '2026-03-21', 5400.00, 'Finalizado', 100.00, 140.00, 240.00);

-- Orden 2: En Proceso (Esperando repuesto)
INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, kilometraje_ingreso, estado) VALUES 
(2, 2, 3, '2026-03-25', 15150.00, 'Esperando repuesto');

-- Orden 3: En Revisión (Recién ingresada)
INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, kilometraje_ingreso, estado) VALUES 
(3, 4, 2, '2026-03-26', 18500.00, 'En revisión');

-- 6. DETALLES DE ORDENES (Repuestos usados)
-- Para la Orden 1 (Un Aceite del taller y una bujía traída por el cliente)
INSERT INTO DetalleOrdenTrabajo (id_orden_trabajo, id_producto, tipo, descripcion, cantidad, provisto_por_cliente, precio_unitario, subtotal) VALUES 
(1, 1, 'Repuesto', 'Cambio de Aceite Motul', 1, FALSE, 80.00, 80.00),
(1, 2, 'Repuesto', 'Cambio de Bujía NGK', 1, TRUE, 0.00, 0.00), -- Costo 0 porque lo trajo el cliente
(1, NULL, 'Mano de Obra', 'Servicio de Mantenimiento General', 1, FALSE, 100.00, 100.00);

-- 7. CIERRE COMERCIAL (Nota de Servicio y Factura de la Orden 1)
INSERT INTO NotaServicio (id_orden_trabajo, id_cliente, total_repuestos, total_mano_obra, total_general, observaciones, estado_pago) VALUES 
(1, 1, 80.00, 100.00, 180.00, 'Cliente trajo su propia bujía', 'Pagado');

INSERT INTO Factura (id_nota_servicio, numero_autorizacion, monto_servicio_facturado, impuesto, total_facturado, nit_cliente, razon_social) VALUES 
(1, 'AUT-998877', 100.00, 13.00, 113.00, '8899776', 'Maria Lopez');

-- ==========================================================
-- POBLACIÓN DE TABLAS FALTANTES (COMPLEMENTO)
-- ==========================================================

-- 1. PROVEEDORES (Importadoras de repuestos)
INSERT INTO Proveedor (empresa, nit, contacto, telefono, email, direccion) VALUES 
('Importadora Repuestos S.A.', '10203040', 'Ing. Mario Vaca', '33445566', 'ventas@repuestossa.com', 'Av. Cristo Redentor 3er Anillo'),
('Motopartes Express', '55667788', 'Lic. Julia Ortiz', '33112233', 'contacto@motopartes.bo', 'Zona Parque Industrial');

-- 2. COMPRAS (El taller abasteciendo su inventario)
-- Compra 1 a Importadora Repuestos
INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago) VALUES 
(1, 'FAC-5050', 1000.00, 130.00, 1000.00, 'Transferencia');

-- Compra 2 a Motopartes Express
INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago) VALUES 
(2, 'FAC-1020', 1500.00, 195.00, 1500.00, 'Efectivo');

-- 3. DETALLE DE COMPRAS (Qué compró el taller)
-- En la Compra 1: Compramos 10 Aceites (Producto 1) y 10 Filtros (Producto 5)
INSERT INTO DetalleCompra (id_compra, id_producto, cantidad, precio_compra, subtotal) VALUES 
(1, 1, 10, 50.00, 500.00),
(1, 5, 10, 40.00, 400.00);

-- En la Compra 2: Compramos 5 Llantas (Producto 4)
INSERT INTO DetalleCompra (id_compra, id_producto, cantidad, precio_compra, subtotal) VALUES 
(2, 4, 5, 300.00, 1500.00);

-- 4. COTIZACIONES (Proformas entregadas a clientes)
-- Cotización para Roberto Gomez (Cliente 2) sobre su Yamaha (Moto 2)
INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado) VALUES 
(2, 2, '2026-04-05', 600.00, 0.00, 600.00, 'Pendiente');

-- Cotización para Ana Roca (Cliente 3) sobre su KTM (Moto 4)
INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado) VALUES 
(3, 4, '2026-04-02', 200.00, 0.00, 200.00, 'Aprobada');

-- 5. DETALLE DE COTIZACIONES
-- Detalle para Roberto: Cambio de pastillas y llanta
INSERT INTO DetalleCotizacion (id_cotizacion, tipo, descripcion, cantidad, precio_unitario, subtotal) VALUES 
(1, 'Repuesto', 'Pastillas de Freno', 1, 150.00, 150.00),
(1, 'Repuesto', 'Llanta Trasera Pirelli', 1, 450.00, 450.00);

-- Detalle para Ana: Ajuste de cadena y revisión eléctrica
INSERT INTO DetalleCotizacion (id_cotizacion, tipo, descripcion, cantidad, precio_unitario, subtotal) VALUES 
(2, 'Mano de Obra', 'Ajuste de kit de arrastre', 1, 50.00, 50.00),
(2, 'Mano de Obra', 'Revisión sistema eléctrico', 1, 150.00, 150.00);

-- 6. NOTAS DE TRABAJO (Bitácora técnica de los mecánicos)
-- El mecánico Juan (Usuario 2) deja notas en la Orden 2 y 3
INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota) VALUES 
(2, 2, 'Se detectó que el disco de freno está pandeado. Se recomienda cambio.', 'Diagnóstico'),
(2, 2, 'El cliente autorizó el cambio de disco, esperando que llegue el repuesto.', 'Avance'),
(3, 3, 'La moto ingresa con falla de encendido intermitente. Se revisará la batería.', 'Diagnóstico');

-- ==========================================================
--EJEMPLOS DE ACTUALIZACIÓN (UPDATE)
-- ==========================================================

-- Ejemplo 1: El mecánico actualiza el estado de una orden a "Finalizado"
--UPDATE OrdenTrabajo 
--SET estado = 'Finalizado', fecha_fin = CURRENT_DATE 
--WHERE codigo = 2;

-- Ejemplo 2: El taller decide subir el precio de venta de las llantas Pirelli
--UPDATE Producto 
--SET precio_venta = 480.00 
--WHERE codigo_barras = 'PROD-004';

-- Ejemplo 3: Actualizar el kilometraje de una moto tras un servicio
--UPDATE Motocicleta 
--SET kilometraje_actual = 15250.00 
--WHERE placa = '5678-DEF';


-- ==========================================================
--EJEMPLOS DE ELIMINACIÓN (DELETE)
-- ==========================================================

-- Ejemplo 1: Borrar una cotización que el cliente rechazó y ya caducó
--DELETE FROM Cotizacion 
--WHERE estado = 'Rechazada' AND fecha_validez < CURRENT_DATE;

-- Ejemplo 2: Eliminar un repuesto del catálogo porque ya no se fabricará más
-- (Ojo: Esto fallará si el repuesto ya se usó en una OrdenTrabajo, ¡lo cual es correcto para no dañar el historial!)
--DELETE FROM Producto 
--WHERE codigo = 5;

-- Ejemplo 3: Dar de baja una relación de privilegio temporal de un mecánico
--DELETE FROM Rol_Privilegio 
--WHERE id_rol = 2 AND id_privilegio = 3;

--seleccionando todas las tablas para verificar la población de datos
SELECT * FROM Privilegio;
SELECT * FROM Rol;
SELECT * FROM Rol_Privilegio;
SELECT * FROM Usuario;
SELECT * FROM Cliente;
SELECT * FROM Motocicleta;
SELECT * FROM Producto;
SELECT * FROM Proveedor; 
SELECT * FROM Compra; 
SELECT * FROM DetalleCompra; 
SELECT * FROM Cotizacion; 
SELECT * FROM DetalleCotizacion; 
SELECT * FROM OrdenTrabajo;
SELECT * FROM DetalleOrdenTrabajo;
SELECT * FROM NotaTrabajo; 
SELECT * FROM NotaServicio;
SELECT * FROM Factura;



















-- =========================CONSULTAS=================================
--CONSULTAS SIMPLES

-- 1. Listar todos los clientes registrados ordenados alfabéticamente
SELECT * FROM Cliente ORDER BY nombre ASC;

-- 2. Mostrar los productos que tienen un stock menor al stock mínimo (Alerta de inventario)
SELECT nombre, stock_actual, stock_minimo FROM Producto WHERE stock_actual <= stock_minimo;

-- 3. Listar todas las motocicletas de la marca 'Honda'
SELECT placa, modelo, anio, color FROM Motocicleta WHERE marca = 'Honda';

-- 4. Ver todos los usuarios que tienen el estado 'Activo'
SELECT nombre, email, telefono FROM Usuario WHERE estado = 'Activo';

-- 5. Listar las proformas (cotizaciones) que superan los 500 Bs.
SELECT codigo, total, fecha_validez FROM Cotizacion WHERE total > 500;

-- 6. Mostrar los proveedores ubicados en el '3er Anillo'
SELECT empresa, contacto, telefono FROM Proveedor WHERE direccion LIKE '%3er Anillo%';

-- 7. Listar las Órdenes de Trabajo que tienen prioridad 'Alta'
SELECT codigo, id_motocicleta, estado FROM OrdenTrabajo WHERE prioridad = 'Alta';

-- 8. Ver el historial de Notas de Trabajo de un día específico
SELECT fecha_hora, contenido FROM NotaTrabajo WHERE fecha_hora::DATE = '2026-03-26';

-- 9. Mostrar los productos de la categoría 'Lubricantes'
SELECT nombre, marca, precio_venta FROM Producto WHERE categoria = 'Lubricantes';

-- 10. Listar las facturas emitidas en el mes actual
SELECT codigo, nit_cliente, total_facturado FROM Factura 
WHERE EXTRACT(MONTH FROM fecha_emision) = EXTRACT(MONTH FROM CURRENT_DATE);

--CONSULTAS MULTIPLES

-- 11. Listar cada motocicleta junto con el nombre de su dueño
SELECT M.placa, M.marca, M.modelo, C.nombre AS dueno
FROM Motocicleta M
JOIN Cliente C ON M.id_cliente = C.codigo;

-- 12. Ver las órdenes de trabajo detallando el nombre del mecánico asignado
SELECT O.codigo AS nro_orden, O.estado, U.nombre AS mecanico
FROM OrdenTrabajo O
JOIN Usuario U ON O.id_mecanico = U.codigo;

-- 13. Mostrar el detalle de repuestos de una orden específica (incluyendo si lo trajo el cliente)
SELECT D.descripcion, D.cantidad, D.precio_unitario, D.provisto_por_cliente
FROM DetalleOrdenTrabajo D
JOIN OrdenTrabajo O ON D.id_orden_trabajo = O.codigo
WHERE O.codigo = 1;

-- 14. Calcular el total gastado en compras a cada proveedor
SELECT P.empresa, SUM(C.total) AS total_comprado
FROM Proveedor P
JOIN Compra C ON P.codigo = C.id_proveedor
GROUP BY P.empresa;

-- 15. Listar los roles y la cantidad de usuarios que pertenecen a cada uno
SELECT R.nombre, COUNT(U.codigo) AS total_usuarios
FROM Rol R
LEFT JOIN Usuario U ON R.codigo = U.id_rol
GROUP BY R.nombre;

-- 16. Ver las facturas junto con el monto total de la Nota de Servicio asociada
SELECT F.codigo AS nro_factura, F.total_facturado AS monto_fiscal, N.total_general AS monto_real_cobrado
FROM Factura F
JOIN NotaServicio N ON F.id_nota_servicio = N.codigo;

-- 17. Mostrar qué productos se han comprado y a qué proveedor
SELECT P.nombre AS repuesto, PR.empresa AS proveedor
FROM DetalleCompra DC
JOIN Producto P ON DC.id_producto = P.codigo
JOIN Compra C ON DC.id_compra = C.codigo
JOIN Proveedor PR ON C.id_proveedor = PR.codigo;

-- 18. Obtener el promedio de costo de mano de obra por cada marca de moto
SELECT M.marca, ROUND(AVG(O.costo_mano_obra), 2) AS promedio_mano_obra
FROM Motocicleta M
JOIN OrdenTrabajo O ON M.codigo = O.id_motocicleta
GROUP BY M.marca;

-- 19. Listar clientes que tienen cotizaciones 'Pendientes' y el modelo de su moto
SELECT C.nombre, M.modelo, COT.total
FROM Cliente C
JOIN Cotizacion COT ON C.codigo = COT.id_cliente
JOIN Motocicleta M ON COT.id_motocicleta = M.codigo
WHERE COT.estado = 'Pendiente';

-- 20. Ver la bitácora de notas indicando el nombre del mecánico y la placa de la moto
SELECT N.fecha_hora, U.nombre AS mecanico, M.placa, N.contenido
FROM NotaTrabajo N
JOIN Usuario U ON N.id_mecanico = U.codigo
JOIN OrdenTrabajo O ON N.id_orden_trabajo = O.codigo
JOIN Motocicleta M ON O.id_motocicleta = M.codigo;

--SUBCONSULTAS

-- 21. Listar los productos cuyo precio de venta es mayor al promedio de todos los productos
SELECT nombre, precio_venta 
FROM Producto 
WHERE precio_venta > (SELECT AVG(precio_venta) FROM Producto);

-- 22. Mostrar los clientes que tienen más de una motocicleta registrada
SELECT nombre FROM Cliente 
WHERE codigo IN (SELECT id_cliente FROM Motocicleta GROUP BY id_cliente HAVING COUNT(*) > 1);

-- 23. Ver los mecánicos que NO han realizado ninguna nota de trabajo todavía
SELECT nombre FROM Usuario 
WHERE id_rol = 3 AND codigo NOT IN (SELECT id_mecanico FROM NotaTrabajo);

-- 24. Listar las motos que nunca han ingresado a taller (sin órdenes de trabajo)
SELECT placa, marca FROM Motocicleta 
WHERE codigo NOT IN (SELECT id_motocicleta FROM OrdenTrabajo);

-- 25. Encontrar el producto más caro del inventario sin usar MAX directamente en el SELECT principal
SELECT nombre, precio_venta FROM Producto 
WHERE precio_venta = (SELECT MAX(precio_venta) FROM Producto);

-- 26. Listar las Órdenes de Trabajo del cliente que tiene la mayor deuda total en el sistema
SELECT codigo, total FROM OrdenTrabajo 
WHERE id_cliente = (SELECT id_cliente FROM NotaServicio GROUP BY id_cliente ORDER BY SUM(total_general) DESC LIMIT 1);

-- 27. Mostrar los proveedores a los que se les ha comprado productos de la categoría 'Neumáticos'
SELECT empresa FROM Proveedor 
WHERE codigo IN (
    SELECT id_proveedor FROM Compra WHERE codigo IN (
        SELECT id_compra FROM DetalleCompra WHERE id_producto IN (
            SELECT codigo FROM Producto WHERE categoria = 'Neumáticos'
        )
    )
);

-- 28. Ver los usuarios que tienen el privilegio de 'EMITIR_FACTURA'
SELECT nombre FROM Usuario 
WHERE id_rol IN (
    SELECT id_rol FROM Rol_Privilegio WHERE id_privilegio = (
        SELECT codigo FROM Privilegio WHERE nombre = 'Generar Factura'
    )
);

-- 29. Listar las motocicletas cuyo año de fabricación es menor al año promedio de la flota del taller
SELECT placa, anio FROM Motocicleta 
WHERE anio < (SELECT AVG(anio) FROM Motocicleta);

-- 30. Mostrar el total de ingresos por facturación comparado con el total de ingresos reales (NotaServicio) usando escalares
SELECT 
    (SELECT SUM(total_facturado) FROM Factura) AS total_fiscal,
    (SELECT SUM(total_general) FROM NotaServicio) AS total_real_percibido;

-- ==========================================================

--Historial Clínico Completo
SELECT o.fecha_inicio, o.estado, n.contenido 
FROM OrdenTrabajo o 
JOIN Motocicleta m ON o.id_motocicleta = m.codigo 
JOIN NotaTrabajo n ON n.id_orden_trabajo = o.codigo 
WHERE m.placa = '5678-DEF';


--Carga Laboral de Mecánicos
SELECT u.nombre, COUNT(o.codigo) as ordenes_asignadas 
FROM OrdenTrabajo o 
JOIN Usuario u ON o.id_mecanico = u.codigo 
GROUP BY u.nombre;


--Detalle Exacto de Compras
SELECT p.nombre, d.cantidad, d.precio_compra, d.subtotal 
FROM DetalleCompra d 
JOIN Producto p ON d.id_producto = p.codigo 
WHERE d.id_compra = 1;

SELECT 
    m.placa, 
    m.marca, 
    u.nombre AS mecanico, 
    n.fecha_hora, 
    n.contenido AS diagnostico_detallado
FROM NotaTrabajo n
JOIN OrdenTrabajo o ON n.id_orden_trabajo = o.codigo
JOIN Motocicleta m ON o.id_motocicleta = m.codigo
JOIN Usuario u ON n.id_mecanico = u.codigo
WHERE n.tipo_nota = 'Diagnóstico'
ORDER BY n.fecha_hora DESC;


















-- ==========================================================
-- 10 PROCEDIMIENTOS ALMACENADOS (P.A.)
-- ==========================================================

-- PA 1: Registrar un nuevo Cliente rápidamente
CREATE OR REPLACE PROCEDURE pa_registrar_cliente(
    p_cedula VARCHAR, p_nombre VARCHAR, p_telefono VARCHAR, p_direccion TEXT, p_email VARCHAR
) LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO Cliente (cedula, nombre, telefono, direccion, email)
    VALUES (p_cedula, p_nombre, p_telefono, p_direccion, p_email);
END;
$$;

-- PA 2: Registrar una nueva Motocicleta
CREATE OR REPLACE PROCEDURE pa_registrar_motocicleta(
    p_id_cliente INTEGER, p_placa VARCHAR, p_marca VARCHAR, p_modelo VARCHAR, p_anio INTEGER, p_cilindraje VARCHAR, p_color VARCHAR
) LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO Motocicleta (id_cliente, placa, marca, modelo, anio, cilindraje, color)
    VALUES (p_id_cliente, p_placa, p_marca, p_modelo, p_anio, p_cilindraje, p_color);
END;
$$;

-- PA 3: Iniciar una Cotización (Calcula automáticamente los 7 días de caducidad)
CREATE OR REPLACE PROCEDURE pa_crear_cotizacion(
    p_id_cliente INTEGER, p_id_motocicleta INTEGER
) LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado)
    -- Suma 7 días exactos a la fecha actual para la caducidad
    VALUES (p_id_cliente, p_id_motocicleta, CURRENT_DATE + 7, 0, 0, 0, 'Pendiente');
END;
$$;

-- PA 4: Aprobar Cotización y convertirla en Orden de Trabajo
CREATE OR REPLACE PROCEDURE pa_aprobar_cotizacion_crear_orden(
    p_id_cotizacion INTEGER
) LANGUAGE plpgsql AS $$
DECLARE
    v_cliente INTEGER;
    v_moto INTEGER;
BEGIN
    UPDATE Cotizacion SET estado = 'Aprobada' WHERE codigo = p_id_cotizacion;
    SELECT id_cliente, id_motocicleta INTO v_cliente, v_moto FROM Cotizacion WHERE codigo = p_id_cotizacion;
    
    INSERT INTO OrdenTrabajo (id_cotizacion, id_cliente, id_motocicleta, estado, prioridad)
    VALUES (p_id_cotizacion, v_cliente, v_moto, 'En revisión', 'Normal');
END;
$$;

-- PA 5: Asignar Mecánico a la Orden de Trabajo
CREATE OR REPLACE PROCEDURE pa_asignar_mecanico(
    p_id_orden INTEGER, p_id_mecanico INTEGER
) LANGUAGE plpgsql AS $$
BEGIN
    UPDATE OrdenTrabajo 
    SET id_mecanico = p_id_mecanico, estado = 'En proceso', fecha_inicio = CURRENT_DATE
    WHERE codigo = p_id_orden;
END;
$$;

-- PA 6: Mecánico agrega una Nota Técnica a la Bitácora
CREATE OR REPLACE PROCEDURE pa_agregar_nota(
    p_id_orden INTEGER, p_id_mecanico INTEGER, p_contenido TEXT, p_tipo VARCHAR
) LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota)
    VALUES (p_id_orden, p_id_mecanico, p_contenido, p_tipo);
END;
$$;

-- PA 7: Iniciar registro de Compra a Proveedor
CREATE OR REPLACE PROCEDURE pa_registrar_compra(
    p_id_proveedor INTEGER, p_factura VARCHAR, p_metodo VARCHAR
) LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago)
    VALUES (p_id_proveedor, p_factura, 0, 0, 0, p_metodo);
END;
$$;

-- PA 8: Actualizar el Precio de Venta de un Producto
CREATE OR REPLACE PROCEDURE pa_actualizar_precio_producto(
    p_id_producto INTEGER, p_nuevo_precio NUMERIC
) LANGUAGE plpgsql AS $$
BEGIN
    UPDATE Producto SET precio_venta = p_nuevo_precio WHERE codigo = p_id_producto;
END;
$$;

-- PA 9: Generar Nota de Servicio (Cierre de la Orden)
CREATE OR REPLACE PROCEDURE pa_generar_nota_servicio(
    p_id_orden INTEGER, p_observaciones TEXT
) LANGUAGE plpgsql AS $$
DECLARE
    v_repuestos NUMERIC;
    v_mano_obra NUMERIC;
    v_cliente INTEGER;
BEGIN
    SELECT costo_repuestos, costo_mano_obra, id_cliente INTO v_repuestos, v_mano_obra, v_cliente
    FROM OrdenTrabajo WHERE codigo = p_id_orden;

    INSERT INTO NotaServicio (id_orden_trabajo, id_cliente, total_repuestos, total_mano_obra, total_general, observaciones)
    VALUES (p_id_orden, v_cliente, v_repuestos, v_mano_obra, (v_repuestos + v_mano_obra), p_observaciones);
    
    UPDATE OrdenTrabajo SET estado = 'Finalizado', fecha_fin = CURRENT_DATE WHERE codigo = p_id_orden;
END;
$$;

-- PA 10: Dar de baja un repuesto del inventario (Cambio a Inactivo)
CREATE OR REPLACE PROCEDURE pa_baja_producto(
    p_id_producto INTEGER
) LANGUAGE plpgsql AS $$
BEGIN
    UPDATE Producto SET estado = 'Inactivo' WHERE codigo = p_id_producto;
END;
$$;

-- PA 11: Registrar evento en la Bitácora (Para acciones de solo lectura como Imprimir) 
CREATE OR REPLACE PROCEDURE pa_registrar_bitacora( 
	p_id_usuario INTEGER, p_accion VARCHAR, p_descripcion TEXT 
) LANGUAGE plpgsql AS $$ 
BEGIN 
	INSERT INTO Bitacora (id_usuario, accion, descripcion) VALUES (p_id_usuario, p_accion, p_descripcion); 
END; 
$$;

























-- ==========================================================
-- 10 TRIGGERS (DISPARADORES INTELIGENTES)
-- ==========================================================

-- Trigger 1: Calcular automáticamente totales de Cotización al insertar un detalle
CREATE OR REPLACE FUNCTION tf_totales_cotizacion() RETURNS TRIGGER AS $$
DECLARE
    v_id_cotizacion INTEGER;
BEGIN
    v_id_cotizacion := COALESCE(NEW.id_cotizacion, OLD.id_cotizacion);

    UPDATE Cotizacion 
    SET subtotal = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCotizacion WHERE id_cotizacion = v_id_cotizacion),
        total = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCotizacion WHERE id_cotizacion = v_id_cotizacion)
    WHERE codigo = v_id_cotizacion;

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_cotizacion
AFTER INSERT OR UPDATE OR DELETE ON DetalleCotizacion
FOR EACH ROW EXECUTE FUNCTION tf_totales_cotizacion();


-- Trigger 2: ¡LA MAGIA DEL CLIENTE! Si el repuesto es del cliente, el costo es 0.
CREATE OR REPLACE FUNCTION tf_precio_cero_cliente() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.provisto_por_cliente = TRUE THEN
        NEW.precio_unitario := 0;
        NEW.subtotal := 0;
    ELSE
        NEW.subtotal := NEW.cantidad * NEW.precio_unitario;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_precio_cero_cliente
BEFORE INSERT OR UPDATE ON DetalleOrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_precio_cero_cliente();


-- Trigger 3: Separar automáticamente en la Orden el costo de Mano de Obra y Repuestos
CREATE OR REPLACE FUNCTION tf_totales_orden() RETURNS TRIGGER AS $$
DECLARE
    v_id_orden_trabajo INTEGER;
BEGIN
    v_id_orden_trabajo := COALESCE(NEW.id_orden_trabajo, OLD.id_orden_trabajo);

    UPDATE OrdenTrabajo 
    SET costo_repuestos = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = v_id_orden_trabajo AND tipo = 'Repuesto'),
        costo_mano_obra = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = v_id_orden_trabajo AND tipo = 'Mano de Obra'),
        total = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = v_id_orden_trabajo)
    WHERE codigo = v_id_orden_trabajo;

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_orden
AFTER INSERT OR UPDATE OR DELETE ON DetalleOrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_totales_orden();


-- Trigger 4: Restar Stock automáticamente cuando se usa un repuesto en la moto
CREATE OR REPLACE FUNCTION tf_disminuir_stock() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.tipo = 'Repuesto' AND NEW.provisto_por_cliente = FALSE AND NEW.id_producto IS NOT NULL THEN
        UPDATE Producto SET stock_actual = stock_actual - NEW.cantidad WHERE codigo = NEW.id_producto;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_disminuir_stock
AFTER INSERT ON DetalleOrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_disminuir_stock();


-- Trigger 5: Bloqueo de seguridad: Evitar que se use un repuesto que no hay en inventario
CREATE OR REPLACE FUNCTION tf_verificar_stock() RETURNS TRIGGER AS $$
DECLARE v_stock INTEGER;
BEGIN
    IF NEW.tipo = 'Repuesto' AND NEW.provisto_por_cliente = FALSE AND NEW.id_producto IS NOT NULL THEN
        SELECT stock_actual INTO v_stock FROM Producto WHERE codigo = NEW.id_producto;
        IF v_stock < NEW.cantidad THEN
            RAISE EXCEPTION 'Stock insuficiente para el repuesto seleccionado.';
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verificar_stock
BEFORE INSERT ON DetalleOrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_verificar_stock();


-- Trigger 6: Sumar Stock automáticamente cuando ingresa una Compra del proveedor
CREATE OR REPLACE FUNCTION tf_aumentar_stock() RETURNS TRIGGER AS $$
BEGIN
    UPDATE Producto SET stock_actual = stock_actual + NEW.cantidad WHERE codigo = NEW.id_producto;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_aumentar_stock
AFTER INSERT ON DetalleCompra
FOR EACH ROW EXECUTE FUNCTION tf_aumentar_stock();


-- Trigger 7: Actualizar totales de Compra a Proveedor (calculando impuestos reales)
CREATE OR REPLACE FUNCTION tf_totales_compra() RETURNS TRIGGER AS $$
DECLARE
    v_id_compra INTEGER;
BEGIN
    v_id_compra := COALESCE(NEW.id_compra, OLD.id_compra);

    UPDATE Compra 
    SET subtotal = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCompra WHERE id_compra = v_id_compra),
        impuesto = (SELECT COALESCE(SUM(subtotal),0) * 0.13 FROM DetalleCompra WHERE id_compra = v_id_compra),
        total = (SELECT COALESCE(SUM(subtotal),0) * 1.13 FROM DetalleCompra WHERE id_compra = v_id_compra)
    WHERE codigo = v_id_compra;

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_compra
AFTER INSERT OR UPDATE OR DELETE ON DetalleCompra
FOR EACH ROW EXECUTE FUNCTION tf_totales_compra();


-- Trigger 8: REGLA DE NEGOCIO - Evitar aprobar una proforma que ya caducó
CREATE OR REPLACE FUNCTION tf_verificar_caducidad() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.estado = 'Aprobada' AND OLD.estado != 'Aprobada' THEN
        IF NEW.fecha_validez < CURRENT_DATE THEN
            RAISE EXCEPTION 'ERROR: No se puede aprobar esta cotización porque ya han pasado los 7 días de validez.';
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verificar_caducidad
BEFORE UPDATE ON Cotizacion
FOR EACH ROW EXECUTE FUNCTION tf_verificar_caducidad();


-- Trigger 9: Auditoría: Si el estado de la Orden cambia, deja una nota automática
CREATE OR REPLACE FUNCTION tf_auditoria_estado_orden() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.estado != OLD.estado THEN
        -- Inserta una nota a nombre del sistema (Mecanico 1 por defecto)
        INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota)
        VALUES (NEW.codigo, COALESCE(NEW.id_mecanico, 1), 'Cambio de estado automático de ' || OLD.estado || ' a ' || NEW.estado, 'Sistema');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_auditoria_estado
AFTER UPDATE OF estado ON OrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_auditoria_estado_orden();


-- Trigger 10: ¡LA FACTURA LEGAL! Cuando se crea NotaServicio, emite Factura solo por Mano de Obra
CREATE OR REPLACE FUNCTION tf_generar_factura_legal() RETURNS TRIGGER AS $$
DECLARE v_cliente RECORD;
BEGIN
    SELECT cedula, nombre INTO v_cliente FROM Cliente WHERE codigo = NEW.id_cliente;
    
    INSERT INTO Factura (id_nota_servicio, numero_autorizacion, monto_servicio_facturado, impuesto, total_facturado, nit_cliente, razon_social)
    VALUES (
        NEW.codigo, 
        'AUT-' || floor(random() * 1000000)::text, 
        NEW.total_mano_obra,  -- Solo cobra mano de obra para impuestos
        NEW.total_mano_obra * 0.13, 
        NEW.total_mano_obra * 1.13, 
        v_cliente.cedula, 
        v_cliente.nombre
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_generar_factura_legal
AFTER INSERT ON NotaServicio
FOR EACH ROW EXECUTE FUNCTION tf_generar_factura_legal();

-- Trigger 11: Auditoría Automática en la Bitácora por cambios en Órdenes
CREATE OR REPLACE FUNCTION tf_auditoria_bitacora_orden() RETURNS TRIGGER AS $$
DECLARE
    v_nombre_mecanico VARCHAR;
BEGIN
    -- Obtenemos el nombre del usuario/mecánico que está en la orden
    SELECT nombre INTO v_nombre_mecanico FROM Usuario WHERE codigo = NEW.id_mecanico;

    -- Si es una orden nueva (INSERT)
    IF TG_OP = 'INSERT' THEN
        INSERT INTO Bitacora (id_usuario, accion, descripcion)
        VALUES (NEW.id_mecanico, 'CREACIÓN', v_nombre_mecanico || ' registró una nueva Orden de Trabajo (Cod: ' || NEW.codigo || ')');
    
    -- Si cambiaron el estado de la orden (UPDATE)
    ELSIF TG_OP = 'UPDATE' THEN
        IF OLD.estado IS DISTINCT FROM NEW.estado THEN
            INSERT INTO Bitacora (id_usuario, accion, descripcion)
            VALUES (NEW.id_mecanico, 'ACTUALIZACIÓN', v_nombre_mecanico || ' cambió el estado de la Orden ' || NEW.codigo || ' a "' || NEW.estado || '"');
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_auditoria_bitacora_orden
AFTER INSERT OR UPDATE ON OrdenTrabajo
FOR EACH ROW EXECUTE FUNCTION tf_auditoria_bitacora_orden();
















------------------v1-------------------
-- PRUEBA DE PROCEDIMIENTOS Y TRIGGERS
-------------------------------------

-- ==========================================================
-- PRUEBA 1: USANDO SOLO UN PROCEDIMIENTO ALMACENADO
-- ==========================================================
SELECT * FROM Cliente; -- Antes de registrar al nuevo cliente, veamos la tabla Clientes (Debería tener 3 clientes).
-- Explicación: Vamos a invocar el "PA 1" para registrar un nuevo cliente rápidamente.
CALL pa_registrar_cliente('3322110', 'Luis Prueba', '70011222', 'Av. Santos Dumont', 'luis@prueba.com');

-- VERIFICACIÓN 1: Ejecuta esta línea para ver que el cliente se guardó con el nuevo ID.
SELECT * FROM Cliente WHERE nombre = 'Luis Prueba';


-- ==========================================================
-- PRUEBA 2: USANDO SOLO UN TRIGGER
-- ==========================================================
--primero vamos a verificar el estado actual de la Orden 3 (que está en revisión y sin repuestos)
SELECT codigo, estado, costo_repuestos, costo_mano_obra, total FROM OrdenTrabajo
WHERE codigo = 3;
-- Explicación: Vamos a meter un repuesto en la "Orden 3" (que estaba vacía) con un simple INSERT.
-- MAGIA: No llamaremos a ningún PA, pero al hacer el INSERT, "despertaremos" a dos Triggers:
-- 1. El Trigger 4 restará el stock de la bujía automáticamente.
-- 2. El Trigger 3 actualizará el total de la Orden 3 automáticamente.
INSERT INTO DetalleOrdenTrabajo (id_orden_trabajo, id_producto, tipo, descripcion, cantidad, provisto_por_cliente, precio_unitario, subtotal) 
VALUES (3, 2, 'Repuesto', 'Bujía Iridium nueva', 1, FALSE, 60.00, 60.00);

-- VERIFICACIÓN 2:
-- A) Ejecuta esto y verás que el stock de la Bujía (Producto 2) bajó de 15 a 14 solo:
SELECT nombre, stock_actual FROM Producto WHERE codigo = 2;
-- B) Ejecuta esto y verás que el costo_repuestos y total de la Orden 3 se actualizó a 60 Bs:
SELECT codigo, estado, costo_repuestos, costo_mano_obra, total FROM OrdenTrabajo WHERE codigo = 3;


-- ==========================================================
-- PRUEBA 3: COMBINACIÓN LETAL (PROCEDIMIENTO + TRIGGERS)
-- ==========================================================
-- Preparación: Primero agregamos mano de obra a la Orden 3 para poder facturarla.
-- (Esto también despierta al Trigger 3 que suma el total de la orden a 110 Bs).
INSERT INTO DetalleOrdenTrabajo (id_orden_trabajo, id_producto, tipo, descripcion, cantidad, provisto_por_cliente, precio_unitario, subtotal) 
VALUES (3, NULL, 'Mano de Obra', 'Cambio de bujía y limpieza', 1, FALSE, 50.00, 50.00);
--vemos que la Orden 3 ahora tiene 60 Bs de repuestos, 50 Bs de mano de obra, y un total de 110 Bs.
SELECT codigo, estado, costo_repuestos, costo_mano_obra, total FROM OrdenTrabajo WHERE codigo = 3;

-- LA GRAN PRUEBA FINAL: Vamos a ejecutar el Procedimiento 9 ("Generar Nota de Servicio").
-- Al hacerlo, el PA va a cambiar el estado de la orden a "Finalizado" y va a crear la Nota de Servicio.
-- ¡Eso va a provocar una REACCIÓN EN CADENA!
-- 1. Cambiar el estado despertará al Trigger 9 (Auditoría).
-- 2. Crear la Nota despertará al Trigger 10 (Factura Legal solo por mano de obra).
CALL pa_generar_nota_servicio(3, 'Se cambió la bujía y se entregó al cliente Ana Roca');

-- VERIFICACIÓN 3 (La reacción en cadena):
-- A) Verificamos la Nota de Servicio (Debería cobrar 110 Bs: 60 de repuesto + 50 de mano de obra)
SELECT * FROM NotaServicio WHERE id_orden_trabajo = 3;

-- B) Verificamos la Factura Legal (¡OJO AQUÍ! Se generó SOLA, pero el monto facturado debe ser SOLO 50 Bs + Impuestos, ignorando el repuesto. ¡Así evitamos la doble tributación!)
SELECT * FROM Factura WHERE razon_social = 'Ana Roca';

-- C) Verificamos la Auditoría (El sistema dejó una nota sola advirtiendo que alguien cerró la orden)
SELECT * FROM NotaTrabajo WHERE id_orden_trabajo = 3 AND tipo_nota = 'Sistema';

-------------------------------------














------------------v2-------------------
-- PRUEBA DE PROCEDIMIENTOS Y TRIGGERS
-------------------------------------
-- ==========================================================
-- PRUEBA 4: USANDO SOLO UN PROCEDIMIENTO (PA 3: Crear Cotización)
-- ==========================================================

-- 1. VERIFICACIÓN ACTUAL (EL ANTES)
-- Observa toda la tabla. Actualmente solo existen 2 cotizaciones.
-- Vamos a crear una nueva para el Cliente 1 (id_cliente = 1) y su Moto 1 (id_motocicleta = 1).
SELECT * FROM Cotizacion; 

-- 2. LA MAGIA (Llamada al Procedimiento)
-- El PA va a registrar la cotización y, automáticamente, va a calcular que la "fecha_validez" sea exactamente 7 días a partir de hoy.
CALL pa_crear_cotizacion(1, 1);

-- 3. VERIFICACIÓN NUEVAMENTE (EL DESPUÉS)
-- ¡Cambio! Se agregó la cotización con el código 3. Observa las columnas "fecha_validez" (ya tiene los 7 días sumados), y verás que los totales nacen en 0 hasta que le agreguemos detalles.
SELECT * FROM Cotizacion;


-- ==========================================================
-- PRUEBA 5: USANDO SOLO UN TRIGGER (Trigger 2: La regla del repuesto del cliente)
-- ==========================================================

-- 1. VERIFICACIÓN ACTUAL (EL ANTES)
-- Observa toda la tabla de detalles. Vamos a insertar un repuesto nuevo para la Orden 2.
-- Le pondremos un "precio_unitario" de 150.00 Bs y "subtotal" de 150.00 Bs, PERO marcaremos "provisto_por_cliente = TRUE".
SELECT * FROM DetalleOrdenTrabajo;

-- 2. LA MAGIA (El Trigger saltará por detrás)
-- Ejecutamos un simple INSERT, simulando que el usuario intentó cobrarle 150 Bs por un repuesto que el cliente mismo trajo.
INSERT INTO DetalleOrdenTrabajo (id_orden_trabajo, id_producto, tipo, descripcion, cantidad, provisto_por_cliente, precio_unitario, subtotal) 
VALUES (2, 3, 'Repuesto', 'Pastillas de freno traídas por el dueño', 1, TRUE, 150.00, 150.00);

-- 3. VERIFICACIÓN NUEVAMENTE (EL DESPUÉS)
-- ¡Cambio! Mira la última fila que se insertó. Aunque le mandamos 150 Bs en el código, el Trigger interceptó la acción y forzó el "precio_unitario" y el "subtotal" a 0.00, protegiendo al cliente de cobros indebidos.
SELECT * FROM DetalleOrdenTrabajo;


-- ==========================================================
-- PRUEBA 6: COMBINACIÓN (PA + TRIGGERS MÚLTIPLES) - Abastecimiento
-- ==========================================================

-- 1. VERIFICACIÓN ACTUAL (EL ANTES)
-- A) Veremos las compras actuales (solo hay 2). Vamos a crear la Compra 3 al proveedor 2.
SELECT * FROM Compra; 
-- B) Observa el "stock_actual" del Producto 4 (Llantas Pirelli). Debería estar en 10.
SELECT * FROM Producto; 

-- 2. LA MAGIA (Procedimiento + 2 Triggers)
-- Paso A (Procedimiento): Registramos la factura de compra en blanco.
CALL pa_registrar_compra(2, 'FAC-NUEVA-777', 'Efectivo');

-- Paso B (Triggers): Al insertar que compramos 10 Llantas (Producto 4) a 300 Bs cada una, 
-- se despertará el Trigger 6 (para sumar stock) y el Trigger 7 (para sumar totales e impuestos).
INSERT INTO DetalleCompra (id_compra, id_producto, cantidad, precio_compra, subtotal) 
VALUES (3, 4, 10, 300.00, 3000.00);

-- 3. VERIFICACIÓN NUEVAMENTE (EL DESPUÉS)
-- A) ¡Cambio en Compra! La Compra 3 que creamos vacía, ahora tiene el subtotal en 3000, calculó el impuesto en 390 (13%) y el total en 3390. ¡Contabilidad automática!
SELECT * FROM Compra; 
-- B) ¡Cambio en Producto! Busca el Producto 4 (Llantas Pirelli). Su "stock_actual" subió automáticamente de 10 a 20. ¡Inventario automático!
SELECT * FROM Producto;

-------------------------------------

--Lista de clientes con su motocicleta
SELECT c.nombre AS cliente, m.placa, m.marca, m.modelo
FROM Cliente c
JOIN Motocicleta m ON c.codigo = m.id_cliente;


--Consulta que muestra el diagnostico detallado de la moto de Ana Roca (placa 5678-DEF) con el nombre del mecánico que hizo cada nota, ordenado por fecha (de más reciente a más antigua).
SELECT 
    m.placa, 
    m.marca, 
    u.nombre AS mecanico, 
    n.fecha_hora, 
    n.contenido AS diagnostico_detallado
FROM NotaTrabajo n
JOIN OrdenTrabajo o ON n.id_orden_trabajo = o.codigo
JOIN Motocicleta m ON o.id_motocicleta = m.codigo
JOIN Usuario u ON n.id_mecanico = u.codigo
WHERE m.placa = '5678-DEF' AND n.tipo_nota = 'Diagnóstico'
ORDER BY n.fecha_hora DESC;















-- ==========================================================
-- ==========================================================
SELECT 
    c.nombre AS "Cliente",
    m.placa AS "Placa",
    m.marca || ' ' || m.modelo AS "Motocicleta",
    o.codigo AS "Nro Orden",
    o.fecha_inicio AS "Fecha Ingreso",
    o.estado AS "Estado Actual",
    u.nombre AS "Mecánico Asignado",
    d.tipo AS "Tipo Ítem",
    d.descripcion AS "Descripción Detallada",
    d.cantidad AS "Cant.",
    d.precio_unitario AS "P. Unitario (Bs)",
    d.subtotal AS "Subtotal (Bs)",
    CASE 
        WHEN d.provisto_por_cliente = TRUE THEN 'SÍ' 
        ELSE 'NO' 
    END AS "Traído por Cliente?"
FROM Cliente c
JOIN Motocicleta m ON c.codigo = m.id_cliente
JOIN OrdenTrabajo o ON m.codigo = o.id_motocicleta
JOIN Usuario u ON o.id_mecanico = u.codigo
JOIN DetalleOrdenTrabajo d ON o.codigo = d.id_orden_trabajo
WHERE o.codigo = 1 -- 
ORDER BY d.tipo DESC, d.codigo ASC;