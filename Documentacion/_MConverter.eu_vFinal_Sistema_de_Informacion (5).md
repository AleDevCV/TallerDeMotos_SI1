**UNIVERSIDAD AUTONOMA GABRIEL RENE MORENO**

**FACULTAD DE INGENIERIA EN CIENCIAS DE LA COMPUTACION Y TELECOMUNICACIONES**

![](media/image1.jpg){width="1.9273567366579178in" height="2.3913046806649167in"}

GRUPO 2

SISTEMA DE INFORMACION PARA LA GESTION DE SERVICIOS MECANICOS Y SEGUIMIENTOS DE MOTOCICLETAS

<table>
<colgroup>
<col style="width: 43%" />
<col style="width: 22%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Integrantes</strong></th>
<th><strong>Carrera</strong></th>
<th><strong>Registro</strong></th>
</tr>
<tr class="odd">
<th><ul>
<li><p>Agreda Marca Abigail Betsabe</p></li>
</ul></th>
<th>Ing. En Sistemas</th>
<th>220154066</th>
</tr>
<tr class="header">
<th><ul>
<li><p>Aranibar Fernandez Carmen Jenifer</p></li>
</ul></th>
<th>Ing. Informatica</th>
<th>222007419</th>
</tr>
<tr class="odd">
<th><ul>
<li><p>Bazoalto Rojas Adriely Angeles</p></li>
</ul></th>
<th>Ing. En Sistemas</th>
<th>223041831</th>
</tr>
<tr class="header">
<th><ul>
<li><p>Calani Garcia Fernando Javier</p></li>
</ul></th>
<th>Ing. Informatica</th>
<th>220000654</th>
</tr>
<tr class="odd">
<th><ul>
<li><p>Contili Villarroel Alejandro</p></li>
</ul></th>
<th>Ing. En Sistemas</th>
<th>220153361</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**Materia : Grupo :**

> INF342 -- Sistemas de Información I SA

**Docente :**

> MSC. Ing. Cuellar Garzón Angelica

**S**emestre :

> 1 -- 2026

**Santa Cruz de la Sierra -- Bolivia  
Gestión 1 -- 2026**

INDICE

[1. PERFIL DE PROYECTO 1](#perfil-de-proyecto)

> [1.1. INTRODUCCIÓN 1](#introducción)
>
> [1.2. ANTECEDENTE 3](#antecedente)
>
> [1.3. JUSTIFICACIÓN 4](#justificación)
>
> [1.4. DESCRIPCIÓN DEL PROBLEMA 6](#descripción-del-problema)
>
> [1.5. FORMULACIÓN DEL PROBLEMA 10](#formulación-del-problema)
>
> [1.6. OBJETIVOS 12](#objetivos)
>
> [1.6.1. OBJETIVO GENERAL 12](#objetivo-general)
>
> [1.6.2. OBJETIVOS ESPECÍFICOS 12](#objetivos-específicos)
>
> [1.7. ALCANCE 13](#alcance)
>
> [1.7.1. Módulo de Seguridad y Gestión de Usuarios 13](#módulo-de-seguridad-y-gestión-de-usuarios)
>
> [1.7.2. Módulo de Clientes y Motocicletas 14](#módulo-de-clientes-y-motocicletas)
>
> [1.7.3. Módulo de Cotizaciones 14](#módulo-de-cotizaciones)
>
> [1.7.4. Módulo de Órdenes de Trabajo y Notas de Trabajo 15](#módulo-de-órdenes-de-trabajo-y-notas-de-trabajo)
>
> [1.7.5. Módulo de Inventario y Repuestos 15](#módulo-de-inventario-y-repuestos)
>
> [1.7.6. Módulo de Facturación 16](#módulo-de-facturación)
>
> [1.7.7. Módulo de Historial de Mantenimiento 17](#módulo-de-historial-de-mantenimiento)
>
> [1.7.8. Módulo de Seguimiento para Clientes 17](#módulo-de-seguimiento-para-clientes)
>
> [1.7.9. Módulo de Reportes 17](#módulo-de-reportes)
>
> [1.7.10. Módulo de Auditoría 18](#módulo-de-auditoría)
>
> [1.7.11. Límites del Sistema (Fuera del Alcance) 19](#límites-del-sistema-fuera-del-alcance)
>
> [1.8. ENTREVISTA 19](#entrevista)
>
> [1.8.1. Entrevista 1: Administrador / Propietario del Taller 19](#entrevista-1-administrador-propietario-del-taller)
>
> [1.8.2. Entrevista 2: Mecánico Jefe 21](#entrevista-2-mecánico-jefe)
>
> [1.8.3. Entrevista 3: Cliente Frecuente 23](#entrevista-3-cliente-frecuente)

[2. ELEMENTOS DEL SISTEMA BASADO EN COMPUTADORAS 25](#elementos-del-sistema-basado-en-computadoras)

> [2.1. HARDWARE 25](#hardware)
>
> [2.1.1. Servidor 25](#servidor)
>
> [2.1.2. Cliente 26](#cliente)
>
> [2.1.3. Medios de Comunicación 26](#medios-de-comunicación)
>
> [2.1.4. Otros Dispositivos 26](#otros-dispositivos)
>
> [2.2. SOFTWARE 27](#software)
>
> [2.2.1. Servidor 27](#servidor-1)
>
> [2.2.2. Cliente 27](#cliente-1)
>
> [2.2.3. Otro Software Adicional 27](#otro-software-adicional)
>
> [2.3. DATOS 28](#datos)
>
> [2.4. PROCESOS 30](#procesos)
>
> [2.5. GENTE/USUARIO 35](#genteusuario)
>
> [2.6. DOCUMENTO 35](#documento)

[3. TECNOLOGIA PARA EL DESARROLLO DEL SOFTWARE 37](#tecnologia-para-el-desarrollo-del-software)

> [3.1. Estrategia para el desarrollo del software 37](#estrategia-para-el-desarrollo-del-software)
>
> [3.2. Metodología para el desarrollo del software 38](#metodología-para-el-desarrollo-del-software)
>
> [3.2.1. Características del PUDS 39](#características-del-puds)
>
> [3.2.1.1. Dirigido por Casos de Uso 39](#dirigido-por-casos-de-uso)
>
> [3.2.1.2. Centrado en la Arquitectura 39](#centrado-en-la-arquitectura)
>
> [3.2.1.3. Iterativo e Incremental 40](#iterativo-e-incremental)
>
> [3.2.1.4. Enfocado en la Gestión de Riesgos 41](#enfocado-en-la-gestión-de-riesgos)
>
> [3.2.2. Características de UML 42](#características-de-uml)
>
> [3.3. HERRAMIENTAS DE DESARROLLO 43](#herramientas-de-desarrollo)
>
> [3.3.1. Software 44](#software-1)
>
> [3.3.2. Hardware 44](#hardware-1)

[4. POSIBLES COSTOS 46](#posibles-costos)

[5. POSIBLES BENEFICIOS 46](#posibles-beneficios)

> [5.1. Tiempo 47](#tiempo)
>
> [5.2. Esfuerzo 48](#esfuerzo)
>
> [5.3. Costos 48](#costos)

[6. POSIBLES CLIENTES 48](#posibles-clientes)

[7. MARCO TEÓRICO 49](#marco-teórico)

> [CAPITULO 1 METODO DE ISHIKAWA 49](#capitulo-1-metodo-de-ishikawa)
>
> [1) IDENTIFICAR PROBLEMA 49](#identificar-problema)
>
> [1.1) LISTA DE PROBLEMAS 49](#lista-de-problemas)
>
> [1.2) DEPURAR PROBLEMAS 51](#depurar-problemas)
>
> [1.3) LISTA FINAL DE PROBLEMAS 51](#lista-final-de-problemas)
>
> [1.4) PROPIETARIOS DE PROBLEMAS 52](#propietarios-de-problemas)
>
> [1.5) ANALISIS DE PROBLEMAS 55](#analisis-de-problemas)
>
> [1.6) ESTIMACION Y CUANTIFICACION DE PROBLEMA 57](#estimacion-y-cuantificacion-de-problema)
>
> [1.7) ALTERNATIVAS DE CAMBIO 59](#alternativas-de-cambio)
>
> [1.8) CONCLUSION Y RECOMENDACIÓN 62](#conclusion-y-recomendación)
>
> [1.9) DISEÑAR EL DIAGRAMA DE ISHIKAWA 63](#diseñar-el-diagrama-de-ishikawa)
>
> [2) IDENTIICAR LAS PRINCIPALES CATEGORIAS 64](#identiicar-las-principales-categorias)
>
> [3) IDENTIFICAR LAS CAUSAS 64](#identificar-las-causas)
>
> [4) ANALIZAR Y DISCUTIR EL DIAGAMA 65](#analizar-y-discutir-el-diagama)
>
> [MODELO DE NEGOCIO 67](#modelo-de-negocio)
>
> [DIAGRAMA DE ACTIVIDADES 67](#diagrama-de-actividades)
>
> [DIAGRAMA 1 : Proceso de Registro e Inicio de Sesión 67](#diagrama-1-proceso-de-registro-e-inicio-de-sesión)
>
> [DIAGRAMA 2 : Proceso de Atención al Cliente 68](#diagrama-2-proceso-de-atención-al-cliente)
>
> [DIAGRAMA 3 : Proceso de Gestión de Inventario 69](#diagrama-3-proceso-de-gestión-de-inventario)
>
> [DIAGRAMA 4 : Proceso de Seguimiento para Clientes 70](#diagrama-4-proceso-de-seguimiento-para-clientes)
>
> [DIAGRAMA 5 : Proceso de Gestion de Ordenes de Trabajo 71](#diagrama-5-proceso-de-gestion-de-ordenes-de-trabajo)
>
> [CAPITULO 2 FLUJO DE TRABAJO: CAPTURA DE REQUISITOS 72](#capitulo-2-flujo-de-trabajo-captura-de-requisitos)
>
> [2) ENCONTRAR ACTORES Y CASOS DE USOS 72](#encontrar-actores-y-casos-de-usos)
>
> [2.1) Actores 72](#actores)
>
> [2.2) Casos de Uso 73](#casos-de-uso)
>
> [3) PRIORIZAR CASOS DE USO 74](#priorizar-casos-de-uso)
>
> [CICLO \#1 75](#ciclo-1)
>
> [CICLO \#2 76](#ciclo-2)
>
> [CICLO \#3 77](#ciclo-3)
>
> [CICLO \#4 77](#ciclo-4)
>
> [4) DETALLAR CASOS DE USO 77](#detallar-casos-de-uso)
>
> [CICLO \#1 77](#ciclo-1-1)
>
> [CU01 - Gestionar Inicio y Cierre de Sesión 78](#cu01---gestionar-inicio-y-cierre-de-sesión)
>
> [CU02 - Gestionar Usuarios y Asignar Roles 78](#cu02---gestionar-usuarios-y-asignar-roles)
>
> [CU03 - Gestionar Roles y Asignar Permisos 79](#cu03---gestionar-roles-y-asignar-permisos)
>
> [CU04 - Gestionar Permisos 80](#cu04---gestionar-permisos)
>
> [CU05 - Gestionar Clientes 81](#cu05---gestionar-clientes)
>
> [CU06 - Gestionar Motocicletas 81](#cu06---gestionar-motocicletas)
>
> [CU17 - Configuración de Perfil Personal 82](#cu17---configuración-de-perfil-personal)
>
> [CU20 - Auditoría de Operaciones 83](#cu20---auditoría-de-operaciones)
>
> [CICLO \#2 84](#ciclo-2-1)
>
> [CU07 - Gestionar Cotizaciones 84](#cu07---gestionar-cotizaciones)
>
> [CU08 - Gestionar Órdenes de Trabajo 85](#cu08---gestionar-órdenes-de-trabajo)
>
> [CU09 - Gestionar Notas de Trabajo 86](#cu09---gestionar-notas-de-trabajo)
>
> [CU10 - Gestionar Productos (Repuestos) 86](#cu10---gestionar-productos-repuestos)
>
> [CU11 - Gestionar Inventario 87](#cu11---gestionar-inventario)
>
> [CU12 - Gestionar Compras a Proveedores 88](#cu12---gestionar-compras-a-proveedores)
>
> [CU13 - Gestionar Proveedores 89](#cu13---gestionar-proveedores)
>
> [CICLO \#3 89](#ciclo-3-1)
>
> [CU14 - Gestionar Facturación 89](#cu14---gestionar-facturación)
>
> [CU15 - Gestionar Historial de Mantenimiento 90](#cu15---gestionar-historial-de-mantenimiento)
>
> [CU16 - Gestionar Seguimiento para Clientes 91](#cu16---gestionar-seguimiento-para-clientes)
>
> [CICLO \#4 92](#ciclo-4-1)
>
> [CU18 - Gestionar Reportes 92](#cu18---gestionar-reportes)
>
> [CU19 - Gestionar Dashboard Analítico 93](#cu19---gestionar-dashboard-analítico)
>
> [5) ESTRUCTURAR MODELO DE CASO DE USO 94](#estructurar-modelo-de-caso-de-uso)
>
> [CICLO \#1 94](#ciclo-1-2)
>
> [CICLO \#2 95](#ciclo-2-2)
>
> [CICLO \#3 96](#ciclo-3-2)
>
> [CICLO \#4 96](#ciclo-4-2)
>
> [CAPITULO 3 FLUJO DE TRABAJO: ANALISIS 97](#capitulo-3-flujo-de-trabajo-analisis)
>
> [3) ANALISIS DE ARQUITECTURA 97](#analisis-de-arquitectura)
>
> [3.1) Identificar Paquetes 97](#identificar-paquetes)
>
> [3.2) Relacionar Paquetes y Casos de Uso 97](#relacionar-paquetes-y-casos-de-uso)
>
> [3.3) Vista de Paquetes 97](#vista-de-paquetes)
>
> [4) ANALIZAR CASOS DE USO 97](#analizar-casos-de-uso)
>
> [4.1) Diagrama de Comunicación 97](#diagrama-de-comunicación)
>
> [CICLO \#1 97](#ciclo-1-3)
>
> [CU01 - Gestionar Inicio y Cierre de Sesión 97](#cu01---gestionar-inicio-y-cierre-de-sesión-1)
>
> [CU02 - Gestionar Usuarios y Asignar Roles 97](#cu02---gestionar-usuarios-y-asignar-roles-1)
>
> [CU03 -- Gestionar Roles y Asignar Permisos 97](#cu03-gestionar-roles-y-asignar-permisos)
>
> [CU04 -- Gestionar Permisos 97](#cu04-gestionar-permisos)
>
> [CU05 -- Gestionar Clientes 97](#cu05-gestionar-clientes)
>
> [CU06 -- Gestionar Motocicletas 97](#cu06-gestionar-motocicletas)
>
> [CU17 -- Configuración de Perfil Personal 97](#cu17-configuración-de-perfil-personal)
>
> [CU20 -- Auditoría de Operaciones 98](#cu20-auditoría-de-operaciones)
>
> [CICLO \#2 98](#ciclo-2-3)
>
> [CU07 -- Gestionar Cotizaciones 98](#cu07-gestionar-cotizaciones)
>
> [CU08 -- Gestionar Órdenes de Trabajo 98](#cu08-gestionar-órdenes-de-trabajo)
>
> [CU09 -- Gestionar Notas de Trabajo 98](#cu09-gestionar-notas-de-trabajo)
>
> [CU10 -- Gestionar Productos (Repuestos) 98](#cu10-gestionar-productos-repuestos)
>
> [CU11 -- Gestionar Inventario 98](#cu11-gestionar-inventario)
>
> [CU12 -- Gestionar Compras a Proveedores 98](#cu12-gestionar-compras-a-proveedores)
>
> [CU13 -- Gestionar Proveedores 98](#cu13-gestionar-proveedores)
>
> [CICLO \#3 98](#ciclo-3-3)
>
> [CU14 -- Gestionar Facturación 98](#cu14-gestionar-facturación)
>
> [CU15 -- Gestionar Historial de Mantenimiento 98](#cu15-gestionar-historial-de-mantenimiento)
>
> [CU16 -- Gestionar Seguimiento para Clientes 98](#cu16-gestionar-seguimiento-para-clientes)
>
> [CICLO \#4 98](#ciclo-4-3)
>
> [CU18 -- Gestionar Reportes 98](#cu18-gestionar-reportes)
>
> [CU19 -- Gestionar Dashboard Analítico 98](#cu19-gestionar-dashboard-analítico)
>
> [5) ANALISIS DE CLASES 98](#analisis-de-clases)
>
> [CLASE \#1 98](#clase-1)
>
> [CU01 -- Gestionar Inicio y Cierre de Sesión 98](#cu01-gestionar-inicio-y-cierre-de-sesión)
>
> [CU02 -- Gestionar Usuarios y Asignar Roles 98](#cu02-gestionar-usuarios-y-asignar-roles)
>
> [CU03 -- Gestionar Roles y Asignar Permisos 98](#cu03-gestionar-roles-y-asignar-permisos-1)
>
> [CU04 -- Gestionar Permisos 99](#cu04-gestionar-permisos-1)
>
> [CU05 -- Gestionar Clientes 99](#cu05-gestionar-clientes-1)
>
> [CU06 -- Gestionar Motocicletas 99](#cu06-gestionar-motocicletas-1)
>
> [CU17 -- Configuración de Perfil Personal 99](#cu17-configuración-de-perfil-personal-1)
>
> [CU20 -- Auditoría de Operaciones 99](#cu20-auditoría-de-operaciones-1)
>
> [CLASE \#2 99](#clase-2)
>
> [CU07 -- Gestionar Cotizaciones 99](#cu07-gestionar-cotizaciones-1)
>
> [CU08 -- Gestionar Órdenes de Trabajo 99](#cu08-gestionar-órdenes-de-trabajo-1)
>
> [CU09 -- Gestionar Notas de Trabajo 99](#cu09-gestionar-notas-de-trabajo-1)
>
> [CU10 -- Gestionar Productos (Repuestos) 99](#cu10-gestionar-productos-repuestos-1)
>
> [CU11 -- Gestionar Inventario 99](#cu11-gestionar-inventario-1)
>
> [CU12 -- Gestionar Compras a Proveedores 99](#cu12-gestionar-compras-a-proveedores-1)
>
> [CU13 -- Gestionar Proveedores 99](#cu13-gestionar-proveedores-1)
>
> [CLASE \#3 99](#clase-3)
>
> [CU14 -- Gestionar Facturación 99](#cu14-gestionar-facturación-1)
>
> [CU15 -- Gestionar Historial de Mantenimiento 99](#cu15-gestionar-historial-de-mantenimiento-1)
>
> [CU16 -- Gestionar Seguimiento para Clientes 99](#cu16-gestionar-seguimiento-para-clientes-1)
>
> [CLASE \#4 99](#clase-4)
>
> [CU18 -- Gestionar Reportes 99](#cu18-gestionar-reportes-1)
>
> [CU19 -- Gestionar Dashboard Analítico 100](#cu19-gestionar-dashboard-analítico-1)
>
> [6) ANALIZAR UN PAQUETE 100](#analizar-un-paquete)
>
> [CAPITULO 4 FLUJO DE TRABAJO: ANALISIS 100](#capitulo-4-flujo-de-trabajo-analisis)
>
> [4) DISEÑO DE ARQUITECTURA 100](#diseño-de-arquitectura)
>
> [Diagrama de Despliegue (Físico) 100](#diagrama-de-despliegue-físico)
>
> [Diagrama de Capas (Lógico) 101](#diagrama-de-capas-lógico)
>
> [5) DISEÑO DE DATOS 102](#diseño-de-datos)
>
> [5.1) Diseño de datos lógico 102](#diseño-de-datos-lógico)
>
> [Diagrama de Clase 102](#diagrama-de-clase)
>
> [Mapeo 103](#mapeo)
>
> [TABLA 1: Privilegio 103](#tabla-1-privilegio)
>
> [TABLA 2: Rol 103](#tabla-2-rol)
>
> [TABLA 3: Rol_Privilegio (Tabla Intermedia) 103](#tabla-3-rol_privilegio-tabla-intermedia)
>
> [TABLA 4: Usuarios 104](#tabla-4-usuarios)
>
> [TABLA 5: Cliente 104](#tabla-5-cliente)
>
> [TABLA 6: Motocicleta 104](#tabla-6-motocicleta)
>
> [TABLA 7: Producto 105](#tabla-7-producto)
>
> [TABLA 8: Proveedor 105](#tabla-8-proveedor)
>
> [TABLA 9: Compra 106](#tabla-9-compra)
>
> [TABLA 10: Compra 106](#tabla-10-compra)
>
> [TABLA 11: Cotización 106](#tabla-11-cotización)
>
> [TABLA 12: DetalleCotizacion 107](#tabla-12-detallecotizacion)
>
> [TABLA 13: OrdenTrabajo 107](#tabla-13-ordentrabajo)
>
> [TABLA 14: DetalleOrdenTrabajo 108](#tabla-14-detalleordentrabajo)
>
> [TABLA 15: NotaTrabajo 108](#tabla-15-notatrabajo)
>
> [TABLA 16: NotaServicio 109](#tabla-16-notaservicio)
>
> [TABLA 17: Factura 109](#tabla-17-factura)
>
> [Normalización 109](#normalización)
>
> [5.2) Diseño de datos físicos 109](#diseño-de-datos-físicos)
>
> [Tabla de volumen 109](#tabla-de-volumen)
>
> [TABLA 1: Privilegio 110](#tabla-1-privilegio-1)
>
> [TABLA 2: Rol 110](#tabla-2-rol-1)
>
> [TABLA 3: Rol_Privilegio (Tabla Intermedia) 110](#tabla-3-rol_privilegio-tabla-intermedia-1)
>
> [TABLA 4: Usuarios 111](#tabla-4-usuarios-1)
>
> [TABLA 5: Cliente 111](#tabla-5-cliente-1)
>
> [TABLA 6: Motocicleta 112](#tabla-6-motocicleta-1)
>
> [TABLA 7: Producto 113](#tabla-7-producto-1)
>
> [TABLA 8: Proveedor 113](#tabla-8-proveedor-1)
>
> [TABLA 9: Compra 114](#tabla-9-compra-1)
>
> [TABLA 10: Compra 114](#tabla-10-compra-1)
>
> [TABLA 11: Cotización 115](#tabla-11-cotización-1)
>
> [TABLA 12: DetalleCotizacion 116](#tabla-12-detallecotizacion-1)
>
> [TABLA 13: OrdenTrabajo 116](#tabla-13-ordentrabajo-1)
>
> [TABLA 14: DetalleOrdenTrabajo 117](#tabla-14-detalleordentrabajo-1)
>
> [TABLA 15: NotaTrabajo 118](#tabla-15-notatrabajo-1)
>
> [TABLA 16: NotaServicio 119](#tabla-16-notaservicio-1)
>
> [TABLA 17: Factura 120](#tabla-17-factura-1)
>
> [Script 120](#script)
>
> [Diagrama Relacional 124](#diagrama-relacional)
>
> [Actualización de Tuplas (Población de datos) 124](#actualización-de-tuplas-población-de-datos)
>
> [Insert() 124](#insert)
>
> [Update() 128](#update)
>
> [Delete() 128](#delete)
>
> [Consultas ( 30 sql) 128](#consultas-30-sql)
>
> [Consultas simples 128](#consultas-simples)
>
> [Consultas Multiples 129](#consultas-multiples)
>
> [Subconsultas 131](#subconsultas)
>
> [Procedimientos almacenados 132](#procedimientos-almacenados)
>
> [Triggers (disparadores) 135](#triggers-disparadores)
>
> [5.3) Diseñar caso de uso 139](#diseñar-caso-de-uso)
>
> [CAPITULO 5 FLUJO DE TRABAJO: IMPLEMENTACION 139](#capitulo-5-flujo-de-trabajo-implementacion)
>
> [CAPITULO 6 FLUJO DE TRABAJO PRUEBAS 139](#capitulo-6-flujo-de-trabajo-pruebas)

[8. CONCLUSION 139](#conclusion)

[9. RECOMENDACIÓN 139](#recomendación)

[10. BIBLIOGRAFIA 139](#bibliografia)

[ANEXOS 139](#anexos)

> [a) Entrevistas 139](#a-entrevistas)
>
> [b) Documentacion 139](#b-documentacion)

***SISTEMA DE INFORMACIÓN PARA LA GESTIÓN DE SERVICIOS MECÁNICOS Y SEGUIMIENTO DE MOTOCICLETAS***

# PERFIL DE PROYECTO

## INTRODUCCIÓN

En la actualidad, el parque automotor de la ciudad de Santa Cruz de la Sierra ha experimentado un crecimiento acelerado, destacándose particularmente el incremento en la cantidad de motocicletas. Debido a factores como la congestión vehicular, la economía en el consumo de combustible y la agilidad para el desplazamiento urbano, la motocicleta se ha consolidado como uno de los medios de transporte más utilizados por la población. Como consecuencia directa de este fenómeno, la demanda de servicios de mantenimiento, diagnóstico y reparación técnica ha crecido exponencialmente, exigiendo a los talleres mecánicos una mayor capacidad de respuesta y una mejor organización interna.

A pesar de este crecimiento en la demanda, gran parte de los talleres de servicios mecánicos para motocicletas en el medio local continúan operando bajo paradigmas tradicionales y empíricos. La gestión administrativa e operativa se realiza, en su mayoría, a través de registros manuales en cuadernos, notas sueltas o en el mejor de los casos, hojas de cálculo básicas. Esta carencia de herramientas tecnológicas adecuadas genera una serie de deficiencias operativas, entre las cuales destacan la pérdida de información crítica, el descontrol en la programación de citas, la dificultad para realizar cotizaciones precisas y la ineficiencia en la gestión de repuestos durante el proceso de reparación.

Uno de los problemas más críticos derivados de esta gestión manual es la inexistencia de un \"historial clínico\" o bitácora técnica de las motocicletas. Cuando un vehículo retorna al taller después de un tiempo, los mecánicos no cuentan con un registro centralizado que detalle los diagnósticos previos, las piezas que fueron reemplazadas o los mantenimientos realizados. Sumado a esto, existe una notable falta de transparencia y comunicación oportuna con el cliente. Frecuentemente, el propietario de la motocicleta desconoce el estado real de su vehículo, el costo exacto de la proforma o si el proceso se ha paralizado a la espera de un repuesto, lo que genera insatisfacción y desconfianza.

Frente a esta problemática, se hace evidente la necesidad de integrar las Tecnologías de la Información y Comunicación (TIC) en el rubro automotriz de dos ruedas. Por ello, el presente proyecto propone el desarrollo de un \"Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas\". Esta solución tecnológica tiene como propósito fundamental automatizar y optimizar el flujo de trabajo operativo de los talleres, actuando como un puente de comunicación eficiente entre los mecánicos, la administración y los clientes.

El sistema propuesto abarcará la gestión integral del servicio: desde que el cliente solicita una cita y se recibe la motocicleta, pasando por la generación de cotizaciones formales y órdenes de trabajo, hasta el seguimiento en tiempo real del estado de la reparación. Asimismo, permitirá registrar detalladamente el historial mecánico de cada vehículo y administrar la demanda de repuestos (ya sea que el taller los provea o el cliente los adquiera por su cuenta). De esta manera, se busca elevar la calidad del servicio al cliente, optimizar los tiempos de respuesta del personal técnico y brindar a la administración un control estructurado sobre las operaciones diarias, delimitando su alcance estrictamente a la gestión operativa y de servicio, sin profundizar en módulos de contabilidad compleja o recursos humanos.

## ANTECEDENTE

Históricamente, los talleres de servicios mecánicos para motocicletas en la ciudad de Santa Cruz de la Sierra iniciaron como pequeños emprendimientos familiares o garajes de barrio. En sus inicios, debido a que el parque automotor de vehículos de dos ruedas era reducido, la carga laboral permitía que la administración y el control de los servicios se llevaran a cabo de manera netamente empírica. El enfoque principal de estos negocios siempre ha sido el aspecto técnico y mecánico, dejando en un segundo plano la gestión administrativa, la organización de la información y el servicio al cliente.

Durante décadas, la metodología de trabajo de estos talleres se ha caracterizado por el uso de herramientas rústicas para el almacenamiento de datos. Los registros de los clientes, las notas de reparación, las estimaciones de costos y el control de repuestos se han documentado tradicionalmente en cuadernos físicos, pizarras, notas sueltas o en gran medida, se han confiado a la memoria del mecánico responsable. Si bien este modelo operativo era funcional para un volumen bajo de clientes, el crecimiento demográfico y el aumento masivo en el uso de motocicletas han dejado en evidencia la ineficiencia de estas prácticas.

Un antecedente crítico en la evolución de estos talleres es la pérdida sistemática de información a lo largo del tiempo. Históricamente, no ha existido la cultura de mantener un \"historial clínico\" del vehículo. Cada vez que una motocicleta ingresa al taller, el proceso de diagnóstico suele empezar desde cero, ignorando mantenimientos previos, cambios de repuestos anteriores o fallas recurrentes. Esta falta de trazabilidad histórica no solo retrasa el trabajo del mecánico, sino que incrementa los costos operativos y el margen de error en las reparaciones.

En lo que respecta a la atención al cliente, los antecedentes muestran un modelo de comunicación deficiente y unidireccional. Tradicionalmente, el propietario de la motocicleta ha tenido que recurrir a visitas presenciales constantes o llamadas telefónicas repetitivas para conocer el estado de su reparación o la llegada de un repuesto. Mientras que los grandes concesionarios de automóviles adoptaron Sistemas de Información y herramientas digitales hace varios años para automatizar estos procesos, los talleres independientes de motocicletas han quedado rezagados tecnológicamente. Esta brecha histórica en la adopción de Tecnologías de la Información y Comunicación (TIC) es el escenario que precede y da origen a la necesidad de desarrollar una solución de software adaptada a las necesidades operativas de este sector.

## JUSTIFICACIÓN

El desarrollo del presente proyecto se justifica a partir de la necesidad imperante de modernizar y optimizar los procesos operativos y administrativos en los talleres de motocicletas de la ciudad de Santa Cruz de la Sierra. La implementación de un Sistema de Información enfocado en este rubro aportará beneficios significativos que pueden categorizarse en cinco ámbitos fundamentales:

**Justificación Operativa:** En el día a día del taller, el proyecto justifica su existencia al mejorar directamente la organización y ejecución de los servicios mecánicos. Al automatizar la generación de proformas, el control de repuestos a demanda y estructurar la agenda de citas mediante órdenes de trabajo claras, se elimina el desorden y la improvisación actual. Esto permite que los mecánicos se enfoquen plenamente en su labor técnica bajo un cronograma establecido, reduciendo los cuellos de botella y optimizando los tiempos de respuesta en cada etapa de la reparación.

**Justificación Gerencial:** Para la administración y los propietarios del taller, la implementación del sistema representa una herramienta vital de control directivo. Centralizar la información permitirá minimizar los errores de cálculo en los cobros y evitar la fuga de capital ocasionada por piezas extraviadas o mal registradas de forma manual. Al contar con un panorama claro del flujo de trabajo y los ingresos, la gerencia podrá tomar decisiones fundamentadas que se traducirán en una notable reducción de costos innecesarios y un aumento directo en la rentabilidad del negocio.

**Justificación Competitiva:** Frente a un mercado local donde la gran mayoría de los talleres continúan operando bajo paradigmas empíricos y tradicionales, este sistema otorgará al establecimiento una ventaja diferenciadora clave. Al optimizar sus procesos, el taller aumentará su capacidad instalada, pudiendo atender a un mayor número de clientes en el mismo periodo de tiempo. Además, ofrecer un servicio moderno con seguimiento en tiempo real y proformas digitales estandarizadas, posicionará al negocio un paso adelante de sus competidores, atrayendo a una clientela más exigente.

**Justificación Social**: Desde la perspectiva humana, el proyecto beneficia tanto al personal interno como a la sociedad consumidora (el cliente final). Para los trabajadores (mecánicos y administradores), el sistema reducirá drásticamente el estrés laboral derivado de la sobrecarga de tareas manuales y discusiones por falta de información. Por otro lado, para el propietario de la motocicleta, el sistema brindará un valor agregado invaluable: la transparencia y la confianza. Al contar con un medio para verificar su reparación y poseer un respaldo de su historial, se elimina la incertidumbre y se eleva la satisfacción del usuario.

**Justificación Técnica:** Desde el punto de vista tecnológico, la justificación radica en la aplicación de metodologías de desarrollo de software y herramientas de programación actuales para resolver un problema real del entorno. Actualmente, la información de los talleres (diagnósticos, cotizaciones, órdenes de trabajo) se maneja de forma dispersa y vulnerable. El desarrollo de este sistema permitirá centralizar estos datos en una base de datos relacional robusta, garantizando la integridad, disponibilidad y seguridad de la información. La creación de un \"historial clínico\" digital e inmutable eliminará por completo la dependencia de registros manuales susceptibles a pérdidas o daños físicos.

## DESCRIPCIÓN DEL PROBLEMA

Para comprender la magnitud de las deficiencias operativas en los talleres de motocicletas de la ciudad de Santa Cruz de la Sierra, es fundamental analizar el modelo de negocio actual y el flujo de trabajo empírico que emplean la mayoría de estos establecimientos. El servicio mecánico no es un evento aislado, sino una cadena de procesos secuenciales que inician desde el momento en que el cliente ingresa con su motocicleta hasta la entrega final del vehículo reparado. A continuación, se describe detalladamente cada uno de estos procesos y las problemáticas inherentes a su gestión manual.

**Proceso 1: Recepción del Cliente y Diagnóstico Inicial de la Motocicleta** El ciclo de servicio comienza cuando el cliente llega al taller físico con su motocicleta presentando una falla, o simplemente para solicitar un mantenimiento preventivo. En esta etapa, el mecánico responsable recibe el vehículo y procede a realizar una inspección física y técnica (diagnóstico). El principal problema en este punto de partida es la total ausencia de un \"historial clínico\" de la motocicleta. El mecánico debe confiar exclusivamente en lo que el cliente relata sobre los antecedentes del vehículo. Al no existir un registro digital previo, se desconoce si la moto ha sufrido alteraciones anteriores, qué tipo de aceite se le colocó en el último mantenimiento o si ciertas piezas ya habían sido advertidas como defectuosas en visitas pasadas. Esta falta de información centralizada provoca que el diagnóstico tome más tiempo del necesario y que en muchas ocasiones, sea impreciso, obligando al mecánico a realizar un análisis desde cero cada vez que el mismo cliente retorna al taller.

**Proceso 2: Estimación de Costos y Generación de la Cotización (Proforma)** Una vez concluido el diagnóstico, el mecánico identifica los problemas específicos: determina qué piezas están dañadas, qué repuestos necesitan ser cambiados obligatoriamente y cuáles pueden ser reparados. Con esta información, el taller procede a comunicarle al cliente los resultados y a elaborar una estimación económica del servicio. Actualmente, este proceso se realiza redactando una proforma o cotización a mano en un talonario genérico o en una hoja de cuaderno. En este documento informal se detallan los costos aproximados de la mano de obra y el precio estimado de los repuestos. Un factor crítico en esta etapa es la fluctuación de los precios en el mercado local. Por política de trabajo, el taller establece que la cotización tiene una validez máxima de una semana (7 días calendario). Si el cliente decide no realizar el trabajo en ese momento y regresa pasada la semana, es muy probable que el costo de los repuestos haya incrementado. Sin embargo, al llevar un registro en papel, frecuentemente estos documentos se extravían, se traspapelan o sufren alteraciones, generando conflictos y discusiones con el cliente cuando este retorna exigiendo que se le respete un precio que ya ha caducado.

**Proceso 3: Aprobación del Cliente y Emisión de la Orden de Trabajo** Si el cliente está de acuerdo con la cotización dentro del tiempo de validez, el taller procede a oficializar el servicio mediante la toma del pedido. En este momento, la cotización manual debe transformarse en una \"Orden de Trabajo\". En un escenario ideal, este documento debería ser el núcleo de la operación, registrando meticulosamente los datos personales del cliente (nombre, teléfono, carnet), los datos técnicos de la motocicleta (marca, modelo, placa, número de chasis, kilometraje actual), la asignación del personal (qué mecánico específico de la empresa se encargará de la reparación), el detalle exacto de los repuestos a utilizar y el tiempo estimado de entrega. No obstante, la realidad operativa es deficiente. Las órdenes de trabajo se llenan de forma incompleta, omitiendo datos vitales. Además, la asignación de tareas a los mecánicos se hace de forma verbal, lo que genera descontrol en las citas y turnos. El administrador del taller no tiene una visión clara de cuántas motocicletas está reparando un mecánico en simultáneo, lo que deriva en sobrecarga laboral para algunos, tiempos muertos para otros y promesas de entrega irreales que finalmente no se cumplen.

**Proceso 4: Gestión y Clasificación de los Tipos de Servicio** Una vez generada la orden de trabajo, la motocicleta ingresa a la zona de reparación, donde se ejecutan los distintos tipos de servicio. En el rubro de las motocicletas, los servicios suelen dividirse en varias categorías: mantenimientos preventivos (cambio de aceite, ajuste de cadena, revisión de frenos), reparaciones correctivas (cambio de disco de embrague, rectificación de cilindro), servicios eléctricos (cambio de ramal, luces, batería) y estética/chapería. El problema actual es que el taller no tiene estandarizados los procesos para cada tipo de servicio. Al no contar con un sistema que categorice el trabajo, todo se anota bajo el concepto ambiguo de \"reparación general\". Esto impide que la administración pueda generar reportes estadísticos a fin de mes para saber cuáles son los servicios más demandados, qué área del taller es la más rentable o qué tipo de herramientas sufren mayor desgaste. Un factor adicional que agrava este proceso es la falta de control sobre el origen y tratamiento de las piezas. En la mecánica de motocicletas es muy común la \"recuperación de piezas\" (es decir, reparar, soldar o rectificar un componente dañado para alargar su vida útil) como alternativa a reemplazarlo por un repuesto totalmente nuevo. Al anotar todo de forma genérica o verbal, no queda un registro claro en el taller de si una pieza vital fue sustituida por una nueva o si simplemente fue recuperada. Esta grave omisión genera conflictos futuros con el cliente al momento de aplicar garantías y corrompe la veracidad del historial clínico de la motocicleta.

**Proceso 5: Gestión de Repuestos a Demanda y Paralización del Servicio** Durante la ejecución del servicio mecánico, surge uno de los procesos más complejos y propensos a errores: la gestión de los repuestos. A diferencia de un concesionario que cuenta con un gran almacén, estos talleres operan bajo una modalidad de \"repuestos a demanda\". Cuando se desarma el motor o la estructura de la moto, el mecánico puede encontrarse con piezas internas destruidas que no fueron contempladas en el diagnóstico inicial. Ante esta situación, el proceso de reparación se paraliza temporalmente y se abren dos escenarios operativos:

**El taller provee el repuesto:** El administrador debe cotizar con proveedores externos, comprar la pieza y sumar este costo (más un margen de ganancia) a la orden de trabajo.

**El cliente provee el repuesto:** El taller notifica al cliente para que él mismo compre la pieza y la lleve al establecimiento. En ambos casos, el registro manual provoca un caos. Las motocicletas quedan desarmadas ocupando espacio físico en el taller durante días sin que nadie registre formalmente el motivo de la paralización. Además, cuando el cliente trae la pieza, muchas veces no se anota su ingreso, lo que puede generar confusiones o acusaciones de pérdida de repuestos entre los mecánicos y los propietarios.

**Proceso 6: Seguimiento, Control de Avance y Transparencia con el Cliente** Mientras la motocicleta se encuentra en el taller, el cliente experimenta un estado de total incertidumbre. Al no existir una herramienta tecnológica de seguimiento en tiempo real, la única forma que tiene el propietario para conocer el estado de su vehículo es realizando llamadas telefónicas constantes o apersonándose físicamente en el taller. Esto interrumpe reiteradamente la labor de los mecánicos y del administrador, disminuyendo la productividad general. La falta de un canal de comunicación transparente genera ansiedad en el cliente, quien desconoce si su moto está en \"fase de revisión\", \"esperando repuestos\", \"en ensamblaje\" o \"lista para entrega\". Esta opacidad es la principal causa de insatisfacción y pérdida de clientela.

**Proceso 7: Finalización, Entrega del Vehículo y Cierre Administrativo** El flujo de trabajo concluye cuando la motocicleta ha sido reparada y está lista para ser entregada. El administrador debe sumar la orden de trabajo inicial más cualquier repuesto adicional que se haya requerido en el Proceso 5 para calcular el costo total final. Al realizarse estos cálculos con calculadora de mano y sumando diferentes recibos sueltos, el margen de error humano es altísimo. Frecuentemente se olvidan cobrar repuestos menores (pernos, empaquetaduras, litros extras de aceite), lo que representa una pérdida económica silenciosa pero constante para el negocio. Finalmente, se entrega la motocicleta al cliente junto con un recibo simple. No se archiva de manera estructurada el trabajo realizado, perdiéndose para siempre la oportunidad de alimentar el historial clínico de la moto para futuras visitas.

## FORMULACIÓN DEL PROBLEMA

A partir del análisis de las deficiencias operativas y administrativas expuestas en la descripción del problema, el presente proyecto se formula como una solución tecnológica integral orientada a resolver el descontrol en el flujo de trabajo de los talleres mecánicos. Específicamente, el desarrollo del **\"Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas\"** (aplicable a establecimientos como el taller de motos \"La Roca\") contemplará la automatización y estructuración de los siguientes procesos y módulos, los cuales darán solución directa a los problemas identificados:

**Módulo de Recepción y Diagnóstico (Historial Clínico):** Resolverá la pérdida de información y la falta de antecedentes mecánicos, permitiendo registrar la entrada de la motocicleta y generar una bitácora digital inmutable de todos los diagnósticos y servicios previos asociados a cada vehículo.

**Módulo de Cotizaciones y Proformas:** Solucionará los conflictos de precios y extravío de documentos físicos. Este proceso permitirá generar proformas digitales detalladas con un tiempo de validez programado (ej. 7 días), calculando automáticamente los costos estimados de mano de obra y repuestos.

**Módulo de Órdenes de Trabajo y Asignación:** Eliminará el descontrol en la programación de citas y la saturación de los mecánicos. Permitirá transformar una cotización aprobada en una orden formal, vinculando los datos del cliente, las características de la motocicleta y asignando un mecánico específico para el servicio, estableciendo tiempos de entrega reales.

**Módulo de Gestión de Servicios:** Resolverá la falta de categorización del trabajo, permitiendo clasificar los servicios a realizar (mantenimiento preventivo, reparación correctiva, sistema eléctrico, etc.), lo que a futuro facilitará la emisión de reportes estadísticos de productividad.

**Módulo de Gestión de Repuestos a Demanda:** Solucionará el caos generado cuando el servicio se paraliza por falta de piezas internas. Permitirá registrar en el sistema si el repuesto faltante será proveído e importado por el taller, o si será adquirido y entregado de manera externa por el cliente, manteniendo un control exacto de los costos adicionales.

**Módulo de Seguimiento y Transparencia (Cliente):** Dará solución a la incertidumbre y constante interrupción por parte de los propietarios. Proveerá un canal donde el cliente podrá verificar en tiempo real el estado y avance de la reparación de su motocicleta (ej. en revisión, esperando repuesto, en ensamblaje, listo para entrega).

A través de la implementación de estos módulos interconectados, el sistema resolverá de forma definitiva la dependencia de registros manuales, optimizando la gestión del servicio técnico desde la llegada del cliente hasta la entrega final de la motocicleta reparada.

## OBJETIVOS

### OBJETIVO GENERAL

Desarrollar un Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas.

### OBJETIVOS ESPECÍFICOS

Para alcanzar el objetivo general propuesto, se establecen los siguientes objetivos específicos correspondientes a las fases del ciclo de vida del software:

**Recolectar** la información y los requerimientos del sistema mediante la técnica de entrevistas dirigidas al personal administrativo, mecánicos y clientes del taller, con el fin de comprender a detalle el flujo de trabajo actual y sus deficiencias.

**Analizar** los datos recolectados y los procesos del negocio utilizando el Lenguaje Unificado de Modelado (UML) y la metodología de desarrollo estructurada, para definir con claridad los requisitos funcionales y no funcionales del sistema.

**Diseñar** la arquitectura lógica, las interfaces gráficas y el modelo de la base de datos relacional utilizando el gestor de base de datos **PostgreSQL**, garantizando así la integridad, normalización y el almacenamiento seguro del historial clínico, las cotizaciones y las órdenes de trabajo.

**Implementar** las funcionalidades del software construyendo el backend y el frontend del sistema web interactivo, utilizando el lenguaje de programación **Python** en conjunto con el framework **Django** (y lenguajes web como HTML, CSS y JavaScript para las vistas), asegurando una experiencia de usuario intuitiva.

**Probar** el funcionamiento integral del sistema a través de pruebas unitarias y de caja negra sobre los módulos construidos, para validar que el software cumple con los requerimientos solicitados, corrige las fallas operativas del taller y se encuentra libre de errores antes de su despliegue final.

## ALCANCE

El sistema de información para la gestión de servicios mecánicos y seguimiento de motocicletas del taller \"Taller de Motos LA ROCA\" abordará diversas áreas funcionales para cubrir las necesidades operativas y administrativas del negocio, permitiendo centralizar la gestión de clientes, vehículos, servicios, repuestos y seguimiento, con capacidad de escalabilidad futura. A continuación, se detallan los principales módulos y funcionalidades:

###  Módulo de Seguridad y Gestión de Usuarios {#módulo-de-seguridad-y-gestión-de-usuarios}

- **RF1. Gestión de Usuarios:** Registro de usuarios del sistema, incluyendo nombre completo, correo electrónico, teléfono, contraseña encriptada, fecha de registro y estado (activo/inactivo).

- **RF2. Administración de Roles :** Se desarrollará un módulo integral donde se manejará el control de acceso. Permitirá la creación de cuentas con diferentes roles (Administrador, Mecánico y Cliente) y la asignación de \"Privilegios\" específicos a nivel de código. Esto garantizará, por ejemplo, que un mecánico únicamente pueda visualizar las órdenes de trabajo de sus propios clientes y no las de sus compañeros.

- **RF3. Autenticación :** Inicio de sesión con email y contraseña, recuperación de contraseña vía correo electrónico.

### Módulo de Clientes y Motocicletas

- **RF4. Gestión de Clientes :** Registro de clientes con: cédula/NIT, nombre completo, teléfono principal, teléfono alternativo, dirección, correo electrónico.

- **RF5. Gestión de Motocicletas :** Registro de vehículos con: placa, marca, modelo, año, cilindraje, color, número de motor, número de chasis (VIN), kilometraje actual.

- **RF6. Relación Cliente-Motocicleta :** Asociación de una o más motocicletas a un mismo cliente, con historial independiente por cada vehículo.

- **RF7. Búsqueda de Clientes y Motos :** Búsqueda por nombre de cliente, cédula, placa o marca de motocicleta.

### Módulo de Cotizaciones

- **RF8. Gestión de Cotizaciones :** Generación de proformas digitales con: número único, fecha de emisión, fecha de validez (configurable), datos del cliente y motocicleta.

- **RF9. Detalle de Cotización :** Registro de ítems por tipo: repuesto (seleccionado desde inventario) o mano de obra (descripción y precio). Cálculo automático de subtotal, impuesto y total.

- **RF10. Estados de Cotización :** Control de estados: Pendiente, Aprobada, Rechazada, Vencida, Convertida.

- **RF11. Impresión de Cotización :** Generación de PDF para entrega al cliente.

- **RF12. Conversión a Orden de Trabajo :** Transformar cotización aprobada en orden de trabajo transfiriendo todos los datos.

### Módulo de Órdenes de Trabajo y Notas de Trabajo

- **RF13. Gestión de Órdenes de Trabajo :** Creación de órdenes desde cotización o desde cero, con: número único, fechas (creación, inicio, fin), kilometraje de ingreso y observaciones del cliente.

- **RF14. Estados de Orden de Trabajo :** Estados configurables: Pendiente, En Diagnóstico, En Reparación, Espera repuestos, Finalizado, Entregado, Cancelado.

- **RF15. Asignación de Mecánicos :** Asignación de uno o más mecánicos a una orden de trabajo.

- **RF16. Detalle de Orden de Trabajo :** Registro de repuestos utilizados (con descuento automático de inventario) y mano de obra aplicada.

- **RF17. Gestión de Notas de Trabajo :** Registro de notas técnicas durante el proceso con: contenido, fecha/hora, mecánico responsable y tipo de nota (**Diagnóstico**, **Avance**, **Observación**, **Conclusión**).

- **RF18. Historial de Notas :** Visualización cronológica de todas las notas asociadas a una orden.

### Módulo de Inventario y Repuestos

- **RF19. Gestión de Productos :** Registrará el ingreso y uso de repuestos. El sistema integrará un control lógico (atributo booleano) para definir si la pieza fue \"Provista por el taller\" (sumando su valor al total) o \"Provista por el cliente\" (registrando la pieza en el historial pero tasándola a costo cero).

- **RF20. Control de Stock :** Actualización automática de stock: descuento al usar repuesto en orden de trabajo, incremento al registrar compra.

- **RF21. Alertas de Stock Mínimo :** Notificación visual cuando un repuesto cae por debajo del stock mínimo configurado.

- **RF22. Movimientos de Inventario :** Registro histórico de entradas (compras) y salidas (servicios) con fecha, cantidad, precio y documento asociado.

- **RF23. Gestión de Proveedores :** Registro de proveedores con: empresa, NIT, contacto, teléfono, correo, dirección.

- **RF24. Registro de Compras :** Captura de compras con: número de factura, fecha, total, método de pago y detalle de productos adquiridos.

### Módulo de Facturación

- **RF25. Gestión de Facturas :** Generación automática de factura al finalizar orden de trabajo con: número único, fecha, datos del cliente, subtotal, impuesto, total, forma de pago (efectivo, tarjeta, transferencia, crédito) y estado de pago (pagado, pendiente, parcial).

- **RF26. Detalle de Factura :** Registro detallado de todos los ítems facturados (repuestos y mano de obra) con descripción, cantidad, precio unitario y subtotal.

- **RF27. Registro de Pagos :** Capacidad de registrar pagos parciales y gestionar saldos pendientes.

- **RF28. Impresión de Factura :** Generación de PDF para entrega al cliente.

- **RF29.** **Nota de Servicio y Facturación :** El sistema separará contablemente los costos de reparación. Al finalizar, generará una \"Nota de Servicio\" con el monto total adeudado (repuestos del taller + mano de obra), y posteriormente emitirá una Factura Legal exclusivamente por el monto de la \"Mano de Obra\", evitando la doble tributación de los repuestos que el taller ya compró facturados.

### Módulo de Historial de Mantenimiento

- **RF30. Visualización por Motocicleta :** Consulta consolidada de todas las órdenes de trabajo asociadas a una motocicleta, ordenadas cronológicamente.

- **RF31. Detalle de Servicios por Historial :** Acceso al detalle completo de cada servicio: repuestos utilizados, mano de obra, notas técnicas, mecánicos, fechas y costos.

- **RF32. Reporte de Historial por Motocicleta :** Generación de PDF con el historial completo de la motocicleta para entregar al cliente.

### Módulo de Seguimiento para Clientes

- **RF33. Consulta de Estado por Placa :** Interfaz para que el cliente, ingresando su placa o número de orden, visualice el estado actual de su motocicleta (Pendiente, En Diagnóstico, En Reparación, Espera Repuestos, Finalizado, Entregado).

### Módulo de Reportes

- **RF34. Reporte de Ingresos por Período :** Ventas totales con filtros por día, semana, mes o rango personalizado.

- **RF35. Reporte de Servicios Más Realizados :** Ranking de servicios más demandados.

- **RF36. Reporte de Repuestos Más Vendidos :** Ranking de repuestos con mayor rotación.

- **RF37. Reporte de Clientes Frecuentes :** Listado de clientes con mayor volumen de servicios.

- **RF38. Reporte de Órdenes por Estado :** Cantidad de órdenes en cada estado para control de carga laboral.

- **RF39. Reporte de Inventario Crítico :** Listado de productos con stock por debajo del mínimo.

- **RF40. Dashboard Analítico :** Visualización de KPI en pantalla principal: ingresos del día, órdenes activas, alertas de stock, servicios pendientes.

### Módulo de Auditoría

- **RF41. Logs de Auditoría :** Registro de operaciones críticas (inserciones, actualizaciones, eliminaciones) con: usuario responsable, fecha/hora, IP, tipo de operación y datos afectados.

- **RF42. Trazabilidad de Órdenes :** Seguimiento de todos los cambios de estado en órdenes de trabajo.

- **RF43. Trazabilidad de Inventario :** Registro inmutable de todas las entradas y salidas de inventario.

### Límites del Sistema (Fuera del Alcance)

- **Aplicación móvil nativa :** Sistema será web responsive, no se desarrollarán apps nativas.

- **Módulo de contabilidad completo :** Solo facturación básica y registro de pagos. No incluye balances, libros contables o integración con sistemas externos.

- **Envío automático de correos/SMS :** Alertas solo visuales en dashboard; notificaciones automáticas quedan como mejora futura.

- **Gestión de citas en línea :** No se incluye reserva de citas vía web (mejora futura).

- **Base de datos de repuestos precargada :** Repuestos deben ingresarse manualmente.

## ENTREVISTA

### Entrevista 1: Administrador / Propietario del Taller {#entrevista-1-administrador-propietario-del-taller}

**Objetivo:** Comprender la gestión de cotizaciones, órdenes de trabajo, control de personal y atención al cliente.

**Pregunta 1:** ¿Cuál es el procedimiento actual cuando un cliente ingresa al taller para solicitar un servicio?

**Respuesta:** Actualmente, lo recibimos, el mecánico revisa la moto y yo anoto en un cuaderno los datos básicos del cliente y la falla que reporta para que no se nos olvide.

**Pregunta 2:** ¿Cómo se maneja el proceso de estimación de costos y cotizaciones?

**Respuesta:** Hacemos una proforma a mano en un talonario. Ahí calculamos un aproximado de la mano de obra y los repuestos. Esta cotización tiene una validez de 7 días porque los precios de las piezas varían mucho.

**Pregunta 3:** ¿Qué ocurre si el cliente acepta la cotización? ¿Cómo se formaliza el trabajo?

**Respuesta:** Si acepta, pasamos esa información a una \"orden de trabajo\" física. Ahí detallamos qué hay que hacerle a la moto y le asigno verbalmente el trabajo a uno de los mecánicos disponibles.

**Pregunta 4:** ¿Cómo lleva el control de qué mecánico está trabajando en qué motocicleta?

**Respuesta:** De forma visual y preguntando. No tengo un registro exacto que me diga cuántas motos tiene asignadas cada mecánico en un día, lo que a veces causa que a uno se le acumule el trabajo.

**Pregunta 5:** ¿Cómo gestionan los repuestos si el taller no tiene un inventario o almacén grande?

**Respuesta:** Trabajamos \"a demanda\". Si la moto necesita una pieza, pauso el trabajo, busco el repuesto en tiendas externas, lo compro y lo sumo a la cuenta final del cliente.

**Pregunta 6:** ¿Qué pasa si el cliente decide traer su propio repuesto?

**Respuesta:** Le avisamos por teléfono que compre la pieza y la traiga. El problema es que a veces la traen, la dejan en la mesa y, como no anotamos formalmente su ingreso, a veces se traspapela o no sabemos de quién es.

**Pregunta 7:** ¿Cómo calculan el costo total al finalizar el servicio?

**Respuesta:** Saco la calculadora, sumo el monto de la orden de trabajo inicial más los recibos de los repuestos extra que compramos sobre la marcha. A veces me olvido de cobrar piezas pequeñas por el desorden de los papeles.

**Pregunta 8:** ¿Tienen alguna forma de clasificar los servicios (ej. preventivo, correctivo, eléctrico)?

**Respuesta:** No, todo se anota como \"reparación de moto\". Me gustaría tener un reporte a fin de mes que me diga qué tipo de servicios son los que más dinero le dejan al taller.

**Pregunta 9:** ¿Cómo se comunican con el cliente para informarle el estado de su moto?

**Respuesta:** Por WhatsApp o llamadas, pero es muy cansador. Los clientes llaman a cada rato preguntando \"¿Ya está mi moto?\", lo que interrumpe mi trabajo y el de los mecánicos.

**Pregunta 10:** ¿Qué funcionalidades principales le gustaría que tuviera un sistema de software para su taller?

**Respuesta:** Necesito urgente un módulo de usuarios para controlar quién hace qué, poder generar cotizaciones y órdenes de trabajo digitales, controlar los repuestos que entran por cada moto y que el sistema calcule el cobro final sin errores.

### Entrevista 2: Mecánico Jefe

**Objetivo:** Entender el proceso de diagnóstico, el historial mecánico y la ejecución del servicio técnico.

**Pregunta 11:** Al recibir una motocicleta que ya ha visitado el taller antes, ¿cómo sabe qué reparaciones previas se le hicieron?

**Respuesta:** No lo sé. Tengo que confiar en mi memoria o en lo que el cliente me cuente. No tenemos un historial o bitácora de las motos.

**Pregunta 12:** ¿Cómo le afecta esta falta de \"historial clínico\" en su trabajo diario?

**Respuesta:** Me hace perder tiempo. A veces desarmo una parte buscando una falla y resulta que esa pieza ya la habíamos cambiado hace un mes. Con un historial, mi diagnóstico sería directo.

**Pregunta 13:** ¿Cómo realiza el diagnóstico inicial de la motocicleta?

**Respuesta:** Hago una revisión visual, enciendo la moto, escucho el motor y anoto en un papelito las fallas que encuentro para que el administrador haga la proforma.

**Pregunta 14:** ¿Qué sucede cuando, en medio de la reparación, encuentra fallas ocultas que no estaban en el diagnóstico inicial?

**Respuesta:** Tengo que detener la reparación, dejar la moto desarmada ocupando espacio y avisarle al administrador para que llame al cliente y le cotice los nuevos repuestos.

**Pregunta 15:** ¿Cómo sabe cuáles motos tienen prioridad de reparación en su turno?

**Respuesta:** Por orden del administrador o por la que esté más a la mano. Faltaría un sistema que me ordene los trabajos por fecha de entrega prometida.

**Pregunta 16:** ¿Cómo reporta que ya terminó una etapa del trabajo (ej. diagnóstico terminado, esperando repuesto, listo)?

**Respuesta:** Solo voy y le digo al administrador verbalmente. Sería ideal poder actualizar el estado yo mismo desde un celular o computadora en el taller.

**Pregunta 17:** ¿Qué problemas tiene cuando el cliente trae su propio repuesto?

**Respuesta:** Que la moto se queda parada varios días. Si yo supiera exactamente en un sistema que \"esta moto está pausada esperando repuesto del cliente\", organizaría mejor mis otras reparaciones.

**Pregunta 18:** ¿Se le asignan formalmente las órdenes de trabajo a usted y a su equipo?

**Respuesta:** Las órdenes están en papel, pero muchas veces no dicen qué mecánico debe hacer el trabajo, entonces nos cruzamos en las tareas.

**Pregunta 19:** ¿Lleva un control de qué herramientas o servicios específicos realiza con más frecuencia?

**Respuesta:** No, simplemente arreglo lo que me traen.

**Pregunta 20:** ¿Qué herramienta tecnológica facilitaría su labor como mecánico?

**Respuesta:** Un sistema donde yo ponga la placa de la moto y me salga todo su historial clínico, y donde yo pueda ver mis órdenes de trabajo del día y marcar cuando necesito un repuesto extra.

### Entrevista 3: Cliente Frecuente

**Objetivo:** Conocer la experiencia del usuario final, sus problemas con la transparencia y la necesidad de seguimiento.

**Pregunta 21:** ¿Cómo ha sido su experiencia general al dejar su motocicleta en el taller?

**Respuesta:** La calidad mecánica es buena, pero la organización es mala. Nunca sé cuándo va a estar lista mi moto y siempre tengo que estar llamando para rogar que me den información.

**Pregunta 22:** ¿Cómo le entregan la cotización o proforma del servicio?

**Respuesta:** Me dan un papelito escrito a mano. Una vez lo perdí, volví a la semana siguiente y me querían cobrar más porque decían que los repuestos habían subido y no tenían un respaldo de mi precio anterior.

**Pregunta 23:** ¿Le gustaría tener un comprobante formal de sus cotizaciones y órdenes de trabajo

**Respuesta:** Sí, me encantaría que me pasen un PDF o poder entrar a una página con mi usuario y ver mi cotización detallada con la fecha de validez.

**Pregunta 24:** ¿Sabe exactamente qué mantenimientos se le han hecho a su motocicleta en el último año?

**Respuesta:** Para nada. Solo pago la factura que dice \"Reparación general\". No tengo cómo demostrarle a un futuro comprador que mi moto tiene los mantenimientos al día.

**Pregunta 25:** ¿Qué opina sobre la idea de que su moto tenga un \"historial clínico\" digital?

**Respuesta:** Sería excelente. Así yo también sabría cuándo le toca el próximo cambio de aceite o de pastillas de freno sin tener que adivinar.

**Pregunta 26:** ¿Cómo se entera si a su motocicleta le falta un repuesto durante la reparación?

**Respuesta:** Me entero tarde. A veces llamo preguntando si ya está lista y recién ahí me dicen: \"Ah, es que faltó una pieza, tiene que comprarla\". Eso me hace perder días sin transporte.

**Pregunta 27:** ¿Prefiere que el taller compre los repuestos o comprarlos usted mismo?

**Respuesta:** Depende del precio. Lo ideal sería que el taller me dé la opción: si ellos me lo consiguen rápido y a buen precio, que lo sumen a mi cuenta. Si es muy caro, prefiero buscarlo yo.

**Pregunta 28:** ¿Cómo le gustaría hacer el seguimiento del estado de su motocicleta mientras está en el taller?

**Respuesta:** Me gustaría poder entrar a un sistema web con mi carnet o placa y ver en tiempo real si está \"en revisión\", \"reparándose\" o \"lista para recoger\", sin tener que llamar a nadie.

**Pregunta 29:** ¿Siente que el cobro final es transparente?

**Respuesta:** A veces dudo, porque me suman cosas al final en una calculadora. Si viera el detalle exacto en un sistema, pagaría con mucha más confianza.

**Pregunta 30:** En resumen, si el taller implementara un sistema web, ¿qué es lo primero que usaría?

**Respuesta:** Definitivamente usaría la opción para ver el historial de mi moto y el seguimiento en vivo de mi reparación.

# ELEMENTOS DEL SISTEMA BASADO EN COMPUTADORAS

## HARDWARE

### Servidor

| **CONFIGURACIONES DEL HARDWARE** |                                                |
|----------------------------------|------------------------------------------------|
| **COMPONENTE**                   | **Especificación**                             |
| **Procesador**                   | Intel Core i5 (4 núcleos) o equivalente AMD.   |
| **Memoria RAM**                  | DDR4 SO-DIMM Kingston 3200 MHZ 8 GB            |
| **Almacenamiento**               | SSD de 500 GB (para sistema y bases de datos). |

### Cliente

| **CONFIGURACIONES DE HARDWARE** |                           |                                                                |
|---------------------------------|---------------------------|----------------------------------------------------------------|
| **Rol de Usuario**              | Tipo de Dispositivo       | Especificaciones Mínimas                                       |
| **Administrador**               | PC de Escritorio o Laptop | CPU Core i3 / Ryzen 3, RAM 4GB (Recomendado 8GB), Monitor 15\" |
| **Mecánico**                    | Smartphone o Tablet       | Pantalla de 5.5\", Conexión Wi-Fi, Funda de uso rudo           |
| **Cliente Final**               | Smartphone, Tablet o PC   | Navegador web actualizado, Conexión a Internet                 |

### Medios de Comunicación

- Red local con conexión a Internet.

- Router o switch para interconectar dispositivos.

- Wi-Fi para dispositivos móviles.

### Otros Dispositivos

| NOMBRE                         | CARACTERISTICAS                                                                   |
|--------------------------------|-----------------------------------------------------------------------------------|
| Impresora de Comprobante       | Se requiere este dispositivo para emitir el comprobante de compra para el cliente |
| Tablets o dispositivos móviles | Para el sistema web que se desarrollará en este proyecto.                         |

## SOFTWARE

### Servidor

| **NOMBRE**                  | **VERSION**                                |
|-----------------------------|--------------------------------------------|
| **Sistema operativo**       | Linux (Ubuntu Server 22.04 LTS o superior) |
| **Gestor de Base de Datos** | PostgreSQL (Relacional)                    |
| **Programación Frontend**   | HTML/CSS/JS                                |
| **Programación Backend**    | Python                                     |
| **Servidor Web**            | Nginx + Gunicorn                           |

### Cliente

| **NOMBRE**            | **VERSION**                                                |
|-----------------------|------------------------------------------------------------|
| **Sistema Operativo** | Multiplataforma (Windows, macOS, Android, iOS)             |
| **Navegador**         | Google Chrome, Firefox, Safari o Edge (Soporte HTML5/CSS3) |

### Otro Software Adicional

| NOMBRE                          | Descripción                   |
|---------------------------------|-------------------------------|
| Git/GitHub                      | Para control de versiones.    |
| PhpStorm o VS Code              | Como IDE de desarrollo.       |
| Herramientas UML                | PlantUML, StarUML, Lucidchart |
| Office, LibreOffice, Onlyoffice | Para reportes/documentación   |

## DATOS

Se registrarán los siguientes datos en el sistema:

**Usuario:** Código, nombre, email, contraseña, teléfono, estado, fecha registro.

**Rol:** Código, nombre, descripción.

**Cliente:** Código, cédula, nombre, teléfono, teléfono alternativo, dirección, email, fecha registro.

**Motocicleta:** Código, cliente código, placa, marca, modelo, año, cilindraje, color, número motor, número chasis, kilometraje actual.

**Cotización:** Código, cliente código, motocicleta código, fecha emisión, fecha validez, subtotal, impuesto, total, estado.

**Detalle Cotización:** Código, cotización código, tipo, descripción, cantidad, precio unitario, subtotal.

**Orden Trabajo:** Código, cotización código, cliente código, motocicleta código, fecha creación, fecha inicio, fecha fin, kilometraje ingreso, estado, prioridad, observaciones cliente, subtotal, impuesto, total.

**Detalle Orden Trabajo:** Código, orden código, tipo, producto código, descripción, cantidad, precio unitario, subtotal.

**Nota Trabajo:** Código, orden código, mecánico código, fecha hora, contenido, tipo nota.

**Producto:** Código, código barras, nombre, categoría, marca, modelo compatible, stock actual, stock mínimo, precio compra, precio venta, ubicación almacén, estado.

**Movimiento Inventario:** Código, producto código, tipo movimiento, cantidad, precio unitario, documento referencia, fecha movimiento, observaciones.

**Proveedor:** Código, empresa, NIT, contacto, teléfono, email, dirección.

**Compra:** Código, proveedor código, número factura, fecha, subtotal, impuesto, total, método pago, estado.

**Detalle Compra:** Código, compra código, producto código, cantidad, precio compra, subtotal.

**Factura:** Código, orden código, cliente código, fecha emisión, subtotal, impuesto, total, forma pago, estado pago.

**Método Pago:** Código, tipo, descripción.

**Log Auditoría:** Código, usuario código, tabla, operación, datos anteriores, datos nuevos, IP origen, fecha hora.

**Datos de Entidades Humanas (Usuarios y Clientes):**

**Datos de Personal:** Credenciales de acceso, roles asignados y los Privilegios específicos de visualización otorgados a cada cuenta.

**Datos Operativos y Transaccionales:**

**Datos de Órdenes de Trabajo:** Número de orden, identificador del mecánico, fechas, estado actual, y los costos desglosados explícitamente en: costo de mano de obra y costo de repuestos.

**Datos de Repuestos a Demanda (Detalle):** Nombre de la pieza, cantidad, un indicador de provisión (verdadero si lo trajo el cliente, falso si lo puso el taller) y el precio unitario aplicado.

**Datos de Cierre Comercial:** Montos totales de la Nota de Servicio (total general a cobrar) y montos de la Factura (monto exclusivo del servicio/mano de obra a declarar ante impuestos).

## PROCESOS

**Proceso de registro de usuarios:** Permitirá registrar nuevos usuarios en el sistema, ingresando sus datos personales (nombre, email, teléfono) y asignando un rol específico (administrador, mecánico, recepcionista) para definir su nivel de acceso.

**Proceso de autenticación de usuarios:** El sistema toma las credenciales en el login y las compara. Si coinciden, el proceso evalúa el Rol y filtra las vistas de la interfaz dependiendo de los Privilegios asignados (ej. bloqueando el acceso a módulos contables para el perfil mecánico).

**Proceso de recuperación de contraseña:** Permitirá a los usuarios restablecer su contraseña en caso de olvido, mediante el envío de un enlace de recuperación al correo electrónico registrado.

**Proceso de registro de clientes:** Permitirá registrar nuevos clientes en el sistema, ingresando su cédula, nombre completo, teléfonos de contacto, dirección y correo electrónico para su identificación y seguimiento.

**Proceso de registro de motocicletas:** Permitirá registrar las motocicletas asociadas a cada cliente, ingresando placa, marca, modelo, año, cilindraje, color, número de motor, número de chasis y kilometraje actual.

**Proceso de búsqueda de clientes y motocicletas:** Permitirá consultar clientes por nombre, cédula o teléfono, así como motocicletas por placa, marca o modelo, facilitando la ubicación rápida de información.

**Proceso de generación de cotización:** Permitirá crear cotizaciones formales para los clientes, seleccionando repuestos del inventario y servicios de mano de obra, calculando automáticamente subtotales, impuestos y total, con fecha de validez configurable.

**Proceso de aprobación de cotización:** Permitirá registrar la aceptación o rechazo de una cotización por parte del cliente, actualizando su estado para proceder con la conversión a orden de trabajo o archivar según corresponda.

**Proceso de conversión de cotización a orden de trabajo:** Permitirá transformar una cotización aprobada en una orden de trabajo, transfiriendo automáticamente todos los datos de cliente, motocicleta y servicios contratados.

**Proceso de creación de orden de trabajo:** Permitirá crear órdenes de trabajo desde cero o desde cotización aprobada, asignando un número único, registrando el kilometraje de ingreso, las observaciones del cliente y estableciendo la prioridad del servicio.

**Proceso de asignación de mecánicos:** Permitirá asignar uno o más mecánicos a una orden de trabajo, registrando la fecha de asignación y el estado de la misma.

**Proceso de registro de notas de trabajo:** Permitirá a los mecánicos registrar notas técnicas durante el proceso de reparación, incluyendo diagnósticos, avances, observaciones y conclusiones, con fecha y hora de registro.

**Proceso de cambio de estado de orden de trabajo:** Permitirá actualizar el estado de una orden de trabajo a lo largo del flujo de servicio (Pendiente, En Diagnóstico, En Reparación, Espera Repuestos, Finalizado, Entregado, Cancelado), registrando la trazabilidad de cada cambio.

**Proceso de registro de repuestos utilizados:** Permitirá registrar los repuestos utilizados en una orden de trabajo, seleccionándolos del inventario, especificando cantidad y descontando automáticamente del stock disponible.

**Proceso de registro de mano de obra:** Permitirá registrar los servicios de mano de obra realizados en una orden de trabajo, especificando descripción, cantidad y precio unitario.

**Proceso de registro de compras a proveedores:** Permitirá registrar las compras de repuestos a proveedores, ingresando número de factura, fecha, método de pago y detalle de productos adquiridos con sus respectivas cantidades y precios de compra.

**Proceso de registro de proveedores:** Permitirá registrar nuevos proveedores en el sistema, ingresando empresa, NIT, contacto, teléfono, email y dirección.

**Proceso de control de inventario:** Permitirá gestionar el stock de repuestos, actualizando automáticamente las existencias con cada compra (entrada) y cada uso en orden de trabajo (salida), manteniendo un historial de movimientos.

**Proceso de alerta de stock mínimo:** Permitirá generar notificaciones automáticas cuando un repuesto alcance o caiga por debajo del stock mínimo configurado, facilitando la planificación de compras.

**Proceso de generación de factura:** Permitirá generar automáticamente la factura al finalizar una orden de trabajo, incluyendo el detalle de repuestos utilizados, mano de obra aplicada, subtotal, impuesto y total a pagar.

**Proceso de registro de pagos:** Permitirá registrar los pagos realizados por los clientes, especificando forma de pago (efectivo, tarjeta, transferencia, crédito), monto pagado y estado de la factura (pagado, pendiente, parcial).

**Proceso de impresión de documentos:** Permitirá generar e imprimir documentos en formato PDF, incluyendo cotizaciones, órdenes de trabajo, facturas y reportes de historial de mantenimiento.

**Proceso de consulta de historial de mantenimiento:** Permitirá visualizar el historial completo de servicios realizados a una motocicleta específica, incluyendo fechas, repuestos utilizados, mano de obra aplicada y notas técnicas registradas.

**Proceso de seguimiento de estado para clientes:** Permitirá a los clientes consultar en tiempo real el estado de su motocicleta dentro del flujo de trabajo del taller, utilizando su número de placa o número de orden.

**Proceso de generación de reportes de ingresos:** Permitirá generar reportes de ventas totales con filtros por día, semana, mes o rango personalizado, discriminando ingresos por mano de obra y venta de repuestos.

**Proceso de generación de reporte de servicios más realizados:** Permitirá obtener un ranking de los servicios de mano de obra más demandados, con conteo de veces realizadas e ingresos generados.

**Proceso de generación de reporte de repuestos más vendidos:** Permitirá obtener un ranking de los repuestos con mayor rotación, incluyendo cantidad vendida, ingresos generados y stock actual.

**Proceso de generación de reporte de inventario crítico:** Permitirá listar los productos con stock por debajo del mínimo establecido, facilitando la toma de decisiones de compra.

**Proceso de generación de reporte de rendimiento por mecánico:** Permitirá visualizar el número de órdenes completadas, tiempo promedio por trabajo y valor facturado por cada mecánico en un período determinado.

**Proceso de visualización de dashboard analítico:** Permitirá al administrador visualizar indicadores clave de rendimiento en la pantalla principal, como ingresos del día, órdenes activas, alertas de stock y servicios pendientes.

**Proceso de auditoría de operaciones:** Permitirá registrar y consultar todas las operaciones críticas realizadas en el sistema (inserciones, actualizaciones, eliminaciones), incluyendo usuario responsable, fecha, hora, IP origen y datos afectados.

**Proceso de Finalización y Separación Contable:** Al cerrar una Orden de Trabajo, el sistema lee los repuestos utilizados. Si un repuesto está marcado como \"provisto por el cliente\", multiplica su costo por cero. Luego, suma por un lado el costo total de repuestos del taller y, por otro, la mano de obra para generar la Nota de Servicio. Finalmente, aísla el valor de la mano de obra para procesar la Factura Legal, cumpliendo con la normativa tributaria vigente.

## GENTE/USUARIO

**Administrador:** El administrador al iniciar sesión accederá a toda la información vinculada al taller, incluyendo la gestión completa de clientes, motocicletas, cotizaciones, órdenes de trabajo, inventario de repuestos, facturación, reportes financieros y podrá gestionar usuarios, roles y permisos del sistema.

**Mecánico:** El mecánico al iniciar sesión accederá a las órdenes de trabajo asignadas, podrá consultar el historial de mantenimiento de cada motocicleta, registrar notas de trabajo durante el proceso de reparación, visualizar los repuestos disponibles en inventario y registrar los repuestos utilizados en cada servicio.

**Recepcionista:** El recepcionista al iniciar sesión accederá a la gestión de clientes y motocicletas, podrá generar cotizaciones para los clientes, convertir cotizaciones aprobadas en órdenes de trabajo, gestionar el registro de pagos, generar facturas y brindar información sobre el estado de los servicios a los clientes.

**Cliente (acceso limitado):** El cliente podrá acceder al sistema mediante una interfaz pública, ingresando su número de placa o número de orden para consultar en tiempo real el estado actual de su motocicleta dentro del flujo de trabajo del taller, visualizar el historial de servicios realizados y descargar sus facturas.

## DOCUMENTO

- **Manual de usuario:** Documento guía que describe el funcionamiento del sistema, los módulos disponibles, los procesos clave (registro de clientes, generación de cotizaciones, creación de órdenes de trabajo, gestión de inventario, facturación) y las funcionalidades específicas para cada perfil de usuario (administrador, mecánico, recepcionista).

- **Manual técnico:** Documento que detalla la arquitectura del sistema, las tecnologías utilizadas (PHP, Laravel, MySQL), la estructura de la base de datos (diagrama entidad-relación, diccionario de datos), los requerimientos de instalación y configuración, y los procedimientos de mantenimiento y respaldo.

- **Reportes generados por el sistema:** Documentos generados automáticamente por el sistema, incluyendo cotizaciones (PDF), órdenes de trabajo (PDF), facturas (PDF), historial de mantenimiento por motocicleta (PDF), reportes de ingresos por período (PDF, Excel), reporte de servicios más realizados, reporte de repuestos más vendidos, reporte de inventario crítico y reporte de rendimiento por mecánico.

- **Documentación del sistema:** Conjunto de artefactos técnicos que respaldan el desarrollo del proyecto, incluyendo diagramas de casos de uso, diagrama de clases, diagrama entidad-relación, modelo de base de datos, prototipos de interfaz de usuario, bitácora de cambios y resultados de pruebas de funcionamiento y usabilidad.

- **Documentación de requisitos:** Documento que consolida los requisitos funcionales y no funcionales del sistema, obtenidos a través de las entrevistas realizadas al personal del taller (propietario, mecánicos) y a los clientes, así como el análisis de procesos actuales.

- **Nota de Servicio:** Documento comercial e interno que se le entrega al cliente para realizar el cobro. Detalla la suma exacta de los repuestos colocados por el taller más el costo de la mano de obra.

- **Factura Legal:** Documento tributario generado por el sistema que refleja única y exclusivamente el cobro por el \"Servicio Técnico / Mano de Obra\", evitando facturarle al cliente un repuesto por el cual el taller ya pagó impuestos en su compra original.

# TECNOLOGIA PARA EL DESARROLLO DEL SOFTWARE

Se utilizará el Proceso Unificado de Desarrollo de Software (PUDS), el cual es un marco de trabajo iterativo e incremental que organiza el desarrollo en fases, permitiendo transformar los requisitos del usuario en un sistema de software funcional. Este proceso está diseñado para adaptarse a diferentes áreas de aplicación, tamaños de proyectos y niveles de complejidad, lo que lo hace ideal para la creación de un sistema integral que gestione inventarios, ventas y compras.

El PUDS permite trabajar mediante iteraciones, asegurando la validación continua con el cliente y reduciendo riesgos asociados al desarrollo. Además, se integrarán prácticas de modelado y documentación para garantizar la calidad del producto final.

## Estrategia para el desarrollo del software

Para la creación del Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas del taller \"Taller de Motos LA ROCA\", se empleará un enfoque basado en dos herramientas principales:

**El Proceso Unificado de Desarrollo de Software (PUDS),** que estructura el desarrollo en cuatro fases: Inicio, Elaboración, Construcción y Transición, permitiendo una gestión ordenada y controlada del proyecto, adaptándose a las necesidades específicas del taller y garantizando la entrega de un producto funcional y de calidad.

**El Lenguaje Unificado de Modelado (UML),** que se usará para representar los diferentes diagramas que describen el comportamiento y la estructura del sistema, incluyendo diagramas de casos de uso (para identificar las interacciones entre los actores y el sistema), diagramas de clases (para modelar las entidades como cliente, motocicleta, orden de trabajo, producto y sus relaciones), diagramas de secuencia (para detallar la interacción temporal en procesos críticos como la generación de cotizaciones y órdenes de trabajo), diagramas de actividades (para representar el flujo de trabajo del taller) y diagramas de estados (para modelar los cambios de estado de las órdenes de trabajo).

La estrategia se fundamentará en el desarrollo incremental e iterativo, garantizando la validación continua de los requerimientos con el cliente (propietario del taller y mecánicos), lo que permitirá obtener retroalimentación temprana, reducir riesgos y asegurar que el producto final se ajuste a las necesidades reales del taller.

## Metodología para el desarrollo del software

Se utilizará el Proceso Unificado de Desarrollo de Software (PUDS), el cual es un marco de trabajo iterativo e incremental que organiza el desarrollo en fases, permitiendo transformar los requisitos del usuario en un sistema de software funcional. Este proceso está diseñado para adaptarse a diferentes áreas de aplicación, tamaños de proyectos y niveles de complejidad, lo que lo hace ideal para la creación de un sistema integral que gestione servicios mecánicos, inventario de repuestos, seguimiento de motocicletas y facturación.

El PUDS permite trabajar mediante iteraciones, asegurando la validación continua con el cliente (propietario del taller y mecánicos) y reduciendo riesgos asociados al desarrollo. Además, se integrarán prácticas de modelado y documentación para garantizar la calidad del producto final.

### Características del PUDS

El Proceso Unificado de Desarrollo de Software (PUDS) fue creado por Jacobson, Booch y Rumbaugh. Es un proceso evolutivo que se desarrolla a través de una serie de ciclos que constituyen la vida de un sistema, desde su inicio hasta su conclusión, resultando en versiones incrementales del producto.

#### Dirigido por Casos de Uso

El PUDS utiliza los casos de uso como principal herramienta para guiar todo el proceso de desarrollo. Un caso de uso es un fragmento de funcionalidad del sistema que proporciona al usuario un resultado importante.

- Modelan los requisitos funcionales del sistema

- Guían el proceso de desarrollo (diseño, implementación y pruebas)

- Proporcionan un hilo común a través de todos los flujos de trabajo

- Actúan como medio de comunicación entre miembros técnicos y no técnicos del equipo

En el contexto del taller, los casos de uso representarán las interacciones entre los actores (administrador, mecánico, recepcionista, cliente) y el sistema, como la generación de cotizaciones, creación de órdenes de trabajo, registro de repuestos utilizados y facturación.

#### Centrado en la Arquitectura

El PUDS reconoce que no existe un modelo único que pueda cubrir todos los aspectos de un sistema complejo. Por esta razón, adopta un enfoque basado en múltiples modelos y vistas que, en conjunto, definen la arquitectura del software.

- Flexible y fácil de modificar

- Intuitivamente comprensible

- Permite la fácil reutilización de componentes

- Basada en componentes interconectados a través de interfaces bien definidas

Para el taller, la arquitectura se definirá considerando los módulos principales: gestión de clientes y motocicletas, cotizaciones, órdenes de trabajo, inventario de repuestos, facturación y reportes.

#### Iterativo e Incremental

El desarrollo se organiza en ciclos iterativos que dividen el producto en partes manejables. Cada iteración genera un incremento funcional y sigue un ciclo completo: se analizan los requisitos, se diseña una solución con base en la arquitectura, se implementan los componentes y se validan mediante pruebas.

**Beneficios del enfoque iterativo:**

- Reduce el costo del riesgo a los costos de un solo incremento

- Minimiza el riesgo de no cumplir con los calendarios previstos

- Acelera el ritmo de desarrollo al trabajar con objetivos claros a corto plazo

- Reconoce que las necesidades del usuario no pueden definirse completamente al principio

#### Enfocado en la Gestión de Riesgos

El PUDS enfatiza la importancia de identificar y reducir los riesgos críticos en las primeras etapas del ciclo de vida del proyecto. Los resultados de cada iteración deben seleccionarse en un orden que asegure que los riesgos principales sean considerados primero.

**Fases del PUDS**

- **Fase de Inicio:** Se establecen las bases del proyecto definiendo la visión general, los objetivos de negocio y los actores principales (administrador, mecánicos, recepcionista, clientes). Además, se identifican y priorizan los riesgos más importantes y se realiza una estimación inicial de tiempos y costos.

- **Fase de Elaboración:** Se da forma sólida a la arquitectura del sistema. Se especifican en detalle la mayoría de los casos de uso (registro de clientes, generación de cotizaciones, creación de órdenes de trabajo, gestión de inventario) y se desarrollan los más críticos, creando una arquitectura ejecutable que servirá como base estable para el resto del desarrollo.

- **Fase de Construcción:** El sistema se desarrolla hasta alcanzar una versión funcional completa. Se implementan todas las funcionalidades acordadas (gestión de clientes, cotizaciones, órdenes de trabajo, inventario, facturación, reportes) y se integran los distintos componentes de la arquitectura, generando un producto que ya puede utilizarse en un entorno real.

- **Fase de Transición:** Se entrega el producto al usuario final (taller), incluyendo capacitación al personal (administrador, mecánicos, recepcionista), soporte y corrección de errores. El objetivo es que el sistema esté listo para su uso productivo sin inconvenientes.

**Flujos de Trabajo (Workflows)**

1.  **Captura de Requisitos:** Determinar qué debe construirse y capturar lo que el sistema debería hacer, mediante entrevistas al propietario, mecánicos y clientes del taller.

2.  **Análisis:** Refinar y estructurar los requisitos para lograr una comprensión más precisa, identificando los procesos clave del taller.

3.  **Diseño:** Modelar el sistema para que soporte todos los requisitos funcionales y no funcionales, incluyendo la base de datos relacional y la interfaz de usuario.

4.  **Implementación:** Desarrollar la arquitectura y el sistema como un todo, utilizando el lenguaje de programación Python en conjunto con el framework Django (y lenguajes web como HTML, CSS y JavaScript para las vistas), para la base de datos PostgreSQL.

5.  **Prueba:** Verificar el resultado de la implementación probando cada construcción, validando que las órdenes de trabajo, el inventario y la facturación funcionen correctamente.

### Características de UML

El Lenguaje Unificado de Modelado (UML) es un estándar ampliamente utilizado en la ingeniería de software que permite representar, visualizar y documentar de manera clara los diferentes aspectos de un sistema. Entre sus principales características se destacan:

- **Visualización clara de sistemas complejos:** UML proporciona diagramas que facilitan la comprensión de la estructura y funcionamiento del software.

- **Estándar universal:** Es reconocido y utilizado a nivel internacional, lo que asegura que cualquier profesional de software pueda interpretar los modelos sin ambigüedades.

- **Multiparadigma:** Permite modelar tanto procesos orientados a objetos como aspectos estructurales y de comportamiento.

- **Soporte a diferentes fases del desarrollo:** Se puede emplear desde la etapa de análisis y diseño hasta la implementación y mantenimiento del sistema.

- **Facilidad de comunicación:** Mejora la interacción entre desarrolladores, analistas y clientes gracias a su notación gráfica intuitiva.

- **Extensible y adaptable:** UML puede ajustarse a las necesidades específicas del proyecto mediante perfiles y estereotipos.

En el caso del software para el taller de motos \"LA ROCA\", UML resulta útil para representar los casos de uso de los clientes, los procesos de atención y reparación, la gestión de inventario de repuestos y la administración de órdenes de trabajo, asegurando un desarrollo ordenado y documentado.

## HERRAMIENTAS DE DESARROLLO

### Software

| **NOMBRE**                  | **VERSION**                                     |
|-----------------------------|-------------------------------------------------|
| **Sistema operativo**       | Linux (Ubuntu Server) / Windows 10 / Windows 11 |
| **Gestor de Base de Datos** | PostgreSQL                                      |
| **Programación Frontend**   | HTML / CSS / JAVASCRIPT                         |
| **Framework de desarrollo** | HTML / CSS / JAVASCRIPT                         |
| **Programación Backend**    | Django                                          |
| **Servidor Web**            | Apache (XAMPP) / GitHub / PostgreSQL            |

### Hardware

Características de los equipos de cada integrante, para el desarrollo e implementación del sistema:

| **COMPONENTES** | **DETALLES**                                  |
|-----------------|-----------------------------------------------|
| **MARCA**       | ASUS ROG Zephyrus G14                         |
| **CPU**         | AMD Ryzen 5 7940HS (8 núcleos, hasta 5.2 GHz) |
| **GPU**         | NVIDIA GeForce RTX 3060 (8 GB GDDR5)          |
| **RAM**         | 32 GB DDR4 (3200 MHz)                         |
| **DISCO**       | 1 TB SSD NVMe PCIe 4.0                        |

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>COMPONENTES</strong></th>
<th><strong>DETALLES</strong></th>
</tr>
<tr class="odd">
<th><strong>MARCA</strong></th>
<th>HP 250 G9</th>
</tr>
<tr class="header">
<th><strong>CPU</strong></th>
<th>Intel® Core™ i5-1135U</th>
</tr>
<tr class="odd">
<th><strong>GPU</strong></th>
<th>Gráficos Intel® UHD</th>
</tr>
<tr class="header">
<th><strong>RAM</strong></th>
<th>16 GB DDR4-3200 MHz SDRAM (2 x 8 GB)</th>
</tr>
<tr class="odd">
<th><strong>DISCO</strong></th>
<th><p>256 GB PCIe® NVMe™ M.2 SSD</p>
<p>1 TB HDD TOSHIBA</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| **COMPONENTES** | **DETALLES**                                    |
|-----------------|-------------------------------------------------|
| **MARCA**       | Lenovo ThinkPad X1 Carbon Gen 11                |
| **CPU**         | Intel Core i7-1365U (10 núcleos, hasta 5.2 GHz) |
| **GPU**         | Intel Iris Xe Graphics (integrada)              |
| **RAM**         | 16 GB LPDDR5 (6400 MHz)                         |
| **DISCO**       | 512 GB SSD NVMe PCIe 4.0                        |

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>COMPONENTES</strong></th>
<th><strong>DETALLES</strong></th>
</tr>
<tr class="odd">
<th><strong>MARCA</strong></th>
<th>ASUS TUF Gaming F17 FX706HEB</th>
</tr>
<tr class="header">
<th><strong>CPU</strong></th>
<th>Intel® Core™ i5-11260H Processor 2.60 GHz</th>
</tr>
<tr class="odd">
<th><strong>GPU</strong></th>
<th>NVIDIA® GeForce RTX™ 3050 Ti Laptop GPU, Up to 1585MHz at 60W (75W with Dynamic Boost), GDDR4 de 4 GB</th>
</tr>
<tr class="header">
<th><strong>RAM</strong></th>
<th>16 GB DDR4-3200 MHz SDRAM (2 x 8 GB)</th>
</tr>
<tr class="odd">
<th><strong>DISCO</strong></th>
<th><p>SSD de 512 GB M.2 NVMe™ PCIe® 3.0</p>
<p>SSD de 512 GB M.2 NVMe™ PCIe® 3.0 Kingston</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| **COMPONENTES** | **DETALLES**                                    |
|-----------------|-------------------------------------------------|
| **MARCA**       | Acer Aspire 5                                   |
| **CPU**         | Intel Core i5-1235U (10 núcleos, hasta 4.4 GHz) |
| **GPU**         | Intel Iris Xe Graphics                          |
| **RAM**         | 8 GB DDR4 (3200 MHz)                            |
| **DISCO**       | 512 GB SSD NVMe                                 |

# POSIBLES COSTOS

| **ITEM**                         | **COSTO (USD)**                     |
|----------------------------------|-------------------------------------|
| Equipos de computacion           | 300                                 |
| ASUS ROG Zephyrus G14            | 1200                                |
| HP 250 G9                        | 450                                 |
| Lenovo ThinkPad X1 Carbon Gen 11 | 900                                 |
| ASUS TUF Gaming F17 FX706HEB     | 950                                 |
| Acer Aspire 5                    | 600                                 |
| Licencias de Software            | \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- |
| Tiempo dedicado al proyecto      | 700                                 |
| Total                            | 5100                                |

# POSIBLES BENEFICIOS

La implementación del Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas en el taller \"Taller de Motos LA ROCA\" aportará beneficios significativos que superan los costos iniciales de su desarrollo e implementación.

En primer lugar, el sistema permitirá una gestión precisa y automatizada del inventario de repuestos, registrando entradas y salidas de productos, generando alertas por bajos niveles de stock y evitando pérdidas por quiebres o acumulación innecesaria de mercadería. Esto contribuirá a un mejor aprovechamiento de los recursos financieros y logísticos del taller.

Asimismo, el sistema proporcionará un control estructurado del historial de mantenimiento de cada motocicleta, con registro detallado de servicios realizados, repuestos utilizados y mano de obra aplicada, lo que facilitará diagnósticos más precisos y garantizará un seguimiento confiable para los clientes.

Otro beneficio clave será la formalización de las cotizaciones y facturación, con generación de documentos digitales y registro de todas las transacciones. Esto no solo mejorará la confianza de los clientes, sino que también brindará la posibilidad de acceder a créditos y convenios, al disponer de información financiera transparente y verificable.

A nivel estratégico, el sistema ofrecerá informes y reportes detallados de ingresos, servicios más realizados, repuestos más vendidos y rendimiento de mecánicos, permitiendo al propietario identificar áreas de mejora, evaluar márgenes de ganancia y proyectar decisiones de expansión con datos reales.

En términos generales, la implementación de este sistema permitirá al taller \"Taller de Motos LA ROCA\" lograr:

- **Mayor eficiencia operativa,** al automatizar procesos antes manuales como la generación de órdenes de trabajo y facturación.

- **Mejora en la atención al cliente,** con rapidez en cotizaciones, transparencia en los servicios y seguimiento del historial de la motocicleta.

- **Optimización de recursos,** evitando desabastecimientos y mejorando la rotación de repuestos.

- **Escalabilidad,** gracias a una plataforma tecnológica adaptable a futuros crecimientos, como nuevas sucursales o servicios adicionales.

## Tiempo

El desarrollo y la entrega del sistema en su versión funcional completa se estima en un periodo de 2 a 3 meses, considerando las etapas de análisis, diseño, programación, pruebas y capacitación.

## Esfuerzo

El proyecto será desarrollado por un equipo de estudiantes, quienes se distribuirán entre las áreas de:

- Documentación y análisis

- Desarrollo del frontend (HTML, CSS, JavaScript)

- Desarrollo del backend (Django, Python)

- Base de datos y seguridad (PostgreSQL)

- Pruebas y soporte

Cada integrante dedicará tiempo en proporción a su rol, lo que garantiza una carga equilibrada y un producto final de calidad.

## Costos

Se proyecta un costo aproximado de **17,585 Bs** para la implementación completa del sistema, considerando hardware, software, desarrollo y capacitación. Este costo se recuperará mediante el incremento en la eficiencia operativa y la fidelización de clientes.

# POSIBLES CLIENTES

El sistema está diseñado principalmente para el taller \"Taller de Motos LA ROCA\", pero puede ser adaptado a otros talleres mecánicos especializados en motocicletas que buscan digitalizar su gestión.

Algunos posibles clientes dentro de la ciudad de Santa Cruz de la Sierra -- Bolivia son:

1.  **Taller de Motos El Rapido:** Av. Radial 10, Santa Cruz de la Sierra.

2.  **Moto Servicio Central:** Av. San Aurelio, Santa Cruz de la Sierra.

3.  **Taller Especializado Motos Honda:** Av. Busch, Santa Cruz de la Sierra.

4.  **Moto Repuestos y Servicios El Amigo:** Radial 17½, Santa Cruz de la Sierra.

5.  **Taller de Motos Veloz:** Av. Grigotá, Santa Cruz de la Sierra.

6.  **Centro de Servicio Yamaha:** Av. Santos Dumont, Santa Cruz de la Sierra.

# MARCO TEÓRICO

Sistema de Información para la Gestión de Servicios Mecánicos y Seguimiento de Motocicletas, para el taller de motos "LA ROCA".

## CAPITULO 1 METODO DE ISHIKAWA {#capitulo-1-metodo-de-ishikawa .unnumbered}

### 1) IDENTIFICAR PROBLEMA {#identificar-problema .unnumbered}

**Problema Principal:**

Ineficiencia en la gestión operativa y administrativa del taller \"Taller de Motos LA ROCA\", manifestada en registros dispersos, historial técnico incompleto, control de inventario deficiente, pérdida de oportunidades de ingreso y limitada capacidad para la toma de decisiones.

#### 1.1) LISTA DE PROBLEMAS {#lista-de-problemas .unnumbered}

P1. Ausencia de historial clínico (bitácora técnica) de las motocicletas.

P2. Diagnóstico impreciso y tardío por falta de antecedentes mecánicos.

P3. Registro manual de cotizaciones en talonarios, con riesgo de extravío y sin respaldo digital.

P4. Falta de control de vigencia de cotizaciones (validez de 7 días no respetada).

P5. Órdenes de trabajo llenadas de forma incompleta, omitiendo datos vitales.

P6. Asignación verbal de tareas a mecánicos, sin registro formal ni control de carga laboral.

P7. Sobrecarga para algunos mecánicos y tiempos muertos para otros.

P8. Promesas de entrega irreales por falta de control de tiempos.

P9. Inexistencia de categorización de servicios; todo se anota como \"reparación general\".

P10. Sin registro claro si una pieza fue sustituida por nueva o recuperada.

P11. Gestión deficiente de repuestos bajo modalidad \"a demanda\", sin control de inventario ni alertas de stock.

P12. Motocicletas desarmadas ocupando espacio sin trazabilidad del estado.

P13. Repuestos traídos por cliente extraviados por falta de registro de ingreso.

P14. Falta de transparencia; cliente desconoce etapa actual de su reparación.

P15. Interrupciones constantes por llamadas de clientes preguntando el estado.

P16. Errores en cálculos de costos, con olvido de cobro de repuestos menores y pérdida económica.

P17. Entrega de recibo simple sin archivo estructurado del trabajo realizado.

P18. Historial clínico no se actualiza al finalizar el servicio.

P19. Pérdida de información crítica por extravío o deterioro de documentos físicos.

P20. Dependencia exclusiva del dueño para la gestión administrativa y operativa.

P21. Falta de seguimiento a clientes para mantenimientos preventivos.

#### 1.2) DEPURAR PROBLEMAS {#depurar-problemas .unnumbered}

P2. Diagnóstico impreciso y tardío por falta de antecedentes mecánicos. **Depurar**. Es consecuencia directa de P1.

P7. Sobrecarga para algunos mecánicos y tiempos muertos para otros. **Depurar**. Es consecuencia directa de P6.

P12. Motocicletas desarmadas ocupando espacio sin trazabilidad del estado. **Depurar**. Es consecuencia directa de P11.

P13. Repuestos traídos por cliente extraviados por falta de registro de ingreso. **Depurar**. Es consecuencia directa de P11.

P15. Interrupciones constantes por llamadas de clientes preguntando el estado. **Depurar**. Es consecuencia directa de P14.

P18. Historial clínico no se actualiza al finalizar el servicio. **Depurar**. Es consecuencia directa de P1 y P17.

P19. Pérdida de información crítica por extravío o deterioro de documentos físicos. Depurar. Es consecuencia directa de P3, P5 y P17

#### 1.3) LISTA FINAL DE PROBLEMAS {#lista-final-de-problemas .unnumbered}

P1. Ausencia de historial clínico (bitácora técnica) de las motocicletas.

P3. Registro manual de cotizaciones en talonarios, con riesgo de extravío y sin respaldo digital.

P4. Falta de control de vigencia de cotizaciones (validez de 7 días no respetada).

P5. Órdenes de trabajo llenadas de forma incompleta, omitiendo datos vitales.

P6. Asignación verbal de tareas a mecánicos, sin registro formal ni control de carga laboral.

P8. Promesas de entrega irreales por falta de control de tiempos.

P9. Inexistencia de categorización de servicios; todo se anota como \"reparación general\".

P10. Sin registro claro si una pieza fue sustituida por nueva o recuperada.

P11. Gestión deficiente de repuestos bajo modalidad \"a demanda\", sin control de inventario ni alertas de stock.

P14. Falta de transparencia; cliente desconoce etapa actual de su reparación.

P16. Errores en cálculos de costos, con olvido de cobro de repuestos menores y pérdida económica.

P17. Entrega de recibo simple sin archivo estructurado del trabajo realizado.

P20. Dependencia exclusiva del dueño para la gestión administrativa y operativa.

P21. Falta de seguimiento a clientes para mantenimientos preventivos.

#### 1.4) PROPIETARIOS DE PROBLEMAS {#propietarios-de-problemas .unnumbered}

Tabla con los problemas y los actores/propietarios más afectados:

| **Problema**                                                                                     | **Dueño** | **Mecánicos** | **Recepcionista** | **Clientes** | **Proveedor** |
|--------------------------------------------------------------------------------------------------|-----------|---------------|-------------------|--------------|---------------|
| P1. Ausencia de historial clínico (bitácora técnica) de las motocicletas                         | X         | X             |                   | X            |               |
| P3. Registro manual de cotizaciones en talonarios,con riesgo de extravío y sin respaldo digital. | X         |               | X                 | X            |               |
| P4. Falta de control de vigencia de cotizaciones (validez de 7 días no respetada).               | X         |               | X                 | X            |               |
| P5. Órdenes de trabajo llenadas de forma incompleta, omitiendo datos vitales.                    | X         | X             | X                 |              |               |
| P6. Asignación verbal de tareas a mecánicos, sin registro formal ni control de carga laboral     | X         | X             |                   |              |               |
| P8. Promesas de entrega irreales por falta de control de tiempos.                                | X         | X             |                   | X            |               |
| P9. Inexistencia de categorización de servicios; todo se anota como \"reparación general\"       | X         | X             | X                 |              |               |
| P10. Sin registro claro si una pieza fue sustituida por nueva o recuperada                       | X         | X             |                   | X            |               |
| P11. Gestión deficiente de repuestos bajo modalidad \"a demanda\", sin control de inventario     | X         | X             |                   | X            | X             |
| P14. Falta de transparencia; cliente desconoce etapa actual de su reparación                     | X         | X             | X                 | X            |               |
| P16. Errores en cálculos de costos, con olvido de cobro de repuestos menores y pérdida económica | X         | X             | X                 | X            |               |
| P17. Entrega de recibo simple sin archivo estructurado del trabajo realizado                     | X         |               | X                 | X            |               |
| P20. Dependencia exclusiva del dueño para la gestión administrativa y operativa                  | X         | X             | X                 |              |               |
| P21. Falta de seguimiento a clientes para mantenimientos preventivos                             | X         |               | X                 | X            |               |

- Dueño: Propietario del taller

- Mecánico: Personal técnico que realiza las reparaciones

- Recepcionista: Personal encargado de atención al cliente y gestión administrativa

- Cliente: Usuario final que lleva su motocicleta al taller

- Proveedor: Empresa que suministra repuestos al taller

#### 1.5) ANALISIS DE PROBLEMAS {#analisis-de-problemas .unnumbered}

![](media/image9.png){width="7.066484033245844in" height="2.235391513560805in"}

Relaciones causa-efecto de los problemas

**Tecnología**

- P3 (Registro manual de cotizaciones en talonarios) → causa de extravío de documentos y conflictos con clientes.

- P4 (Falta de control de vigencia de cotizaciones) → causa de conflictos con clientes por precios no respetados.

- P6 (Asignación verbal de tareas a mecánicos) → causa de sobrecarga laboral, tiempos muertos y descontrol en la programación.

- P14 (Falta de transparencia) → causa de interrupciones constantes y desconfianza del cliente.

**Inventario**

- P1 (Ausencia de historial clínico) → causa de diagnósticos imprecisos, pérdida de tiempo y servicios repetitivos.

- P5 (Órdenes de trabajo incompletas) → causa de errores en ejecución y falta de información histórica.

- P9 (Inexistencia de categorización de servicios) → causa de imposibilidad de generar reportes estadísticos y desconocimiento de rentabilidad.

- P10 (Sin registro claro si una pieza fue sustituida o recuperada) → causa de conflictos en garantías y pérdida de credibilidad.

- P11 (Gestión deficiente de repuestos a demanda) → causa de motocicletas desarmadas, repuestos extraviados, desabastecimiento y paralización de servicios.

**Compras y Ventas**

- P8 (Promesas de entrega irreales) → causa de insatisfacción del cliente y pérdida de credibilidad.

- P16 (Errores en cálculos de costos) → causa de pérdida económica y conflictos con clientes.

- P17 (Entrega de recibo simple sin archivo) → causa de pérdida de información y historial incompleto.

**Finanzas**

- P20 (Dependencia exclusiva del dueño) → causa de cuellos de botella, imposibilidad de delegar y riesgo por ausencias.

- P21 (Falta de seguimiento a clientes) → causa de pérdida de ingresos y baja fidelización.

**Efecto Principal**

Todos estos problemas convergen en la Ineficiencia en la gestión operativa y administrativa del taller, afectando la rentabilidad, la satisfacción del cliente, la productividad del personal y la capacidad de crecimiento del negocio.

#### 1.6) ESTIMACION Y CUANTIFICACION DE PROBLEMA {#estimacion-y-cuantificacion-de-problema .unnumbered}

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 28%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Problema</strong></th>
<th><strong>Estimación</strong></th>
<th><strong>Justificación</strong></th>
</tr>
<tr class="odd">
<th><strong>P1.</strong> Ausencia de historial clínico (bitácora técnica) de las motocicletas.</th>
<th>30-40% más de tiempo en diagnóstico</th>
<th><p><strong>Cuantitativo:</strong> pérdida de tiempo al repetir diagnósticos desde cero. </p>
<p><strong>Cualitativo:</strong> mecánicos frustrados, clientes insatisfechos.</p></th>
</tr>
<tr class="header">
<th><strong>P3.</strong> Registro manual de cotizaciones en talonarios, con riesgo de extravío y sin respaldo digital.</th>
<th>10-15% de cotizaciones extraviadas o deterioradas</th>
<th><p><strong>Cuantitativo:</strong> documentos perdidos que deben rehacerse.</p>
<p> <strong>Cualitativo:</strong> desorganización, imagen poco profesional.</p></th>
</tr>
<tr class="odd">
<th><strong>P4.</strong> Falta de control de vigencia de cotizaciones (validez de 7 días no respetada).</th>
<th>20-25% de conflictos con clientes por precios</th>
<th><p><strong>Cuantitativo:</strong> descuentos o ajustes forzados para evitar conflictos. </p>
<p><strong>Cualitativo:</strong> pérdida de confianza del cliente.</p></th>
</tr>
<tr class="header">
<th><strong>P5.</strong> Órdenes de trabajo llenadas de forma incompleta, omitiendo datos vitales.</th>
<th>15-20% de órdenes con información insuficiente</th>
<th><p><strong>Cuantitativo:</strong> tiempo perdido buscando datos faltantes. </p>
<p><strong>Cualitativo:</strong> trabajos mal ejecutados por falta de información.</p></th>
</tr>
<tr class="odd">
<th><strong>P6.</strong> Asignación verbal de tareas a mecánicos, sin registro formal ni control de carga laboral.</th>
<th>25-30% de desbalance en carga laboral</th>
<th><p><strong>Cuantitativo:</strong> algunos mecánicos con sobrecarga, otros con tiempos muertos. </p>
<p><strong>Cualitativo:</strong> estrés, mal ambiente laboral.</p></th>
</tr>
<tr class="header">
<th><strong>P8.</strong> Promesas de entrega irreales por falta de control de tiempos.</th>
<th>15-20% de entregas fuera de plazo</th>
<th><p><strong>Cuantitativo:</strong> clientes que no regresan por incumplimiento. </p>
<p><strong>Cualitativo:</strong> pérdida de credibilidad y mala reputación.</p></th>
</tr>
<tr class="odd">
<th><strong>P9.</strong> Inexistencia de categorización de servicios; todo se anota como "reparación general".</th>
<th>0% de visibilidad de rentabilidad por servicio</th>
<th><p><strong>Cuantitativo:</strong> imposibilidad de identificar servicios más rentables. </p>
<p><strong>Cualitativo:</strong> decisiones de negocio sin datos reales.</p></th>
</tr>
<tr class="header">
<th><strong>P10.</strong> Sin registro claro si una pieza fue sustituida por nueva o recuperada.</th>
<th>10-15% de conflictos en garantías</th>
<th><p><strong>Cuantitativo:</strong> reclamos de clientes por fallas prematuras. </p>
<p><strong>Cualitativo:</strong> desconfianza y discusiones con clientes.</p></th>
</tr>
<tr class="odd">
<th><strong>P11.</strong> Gestión deficiente de repuestos bajo modalidad "a demanda", sin control de inventario ni alertas de stock.</th>
<th>20-25% de servicios paralizados por falta de repuestos</th>
<th><p><strong>Cuantitativo:</strong> motos detenidas, espacio ocupado, pérdida de productividad. </p>
<p><strong>Cualitativo:</strong> clientes molestos por demoras.</p></th>
</tr>
<tr class="header">
<th><strong>P14.</strong> Falta de transparencia; cliente desconoce etapa actual de su reparación.</th>
<th>30-40% de clientes insatisfechos</th>
<th><p><strong>Cuantitativo:</strong> clientes que no regresan por falta de comunicación. </p>
<p><strong>Cualitativo:</strong> ansiedad, desconfianza, llamadas constantes.</p></th>
</tr>
<tr class="odd">
<th><strong>P16.</strong> Errores en cálculos de costos, con olvido de cobro de repuestos menores y pérdida económica.</th>
<th>5-10% de pérdida en ingresos por servicio</th>
<th><p><strong>Cuantitativo:</strong> repuestos menores no cobrados (pernos, empaquetaduras, aceite extra). </p>
<p><strong>Cualitativo:</strong> percepción de desorden financiero.</p></th>
</tr>
<tr class="header">
<th><strong>P17.</strong> Entrega de recibo simple sin archivo estructurado del trabajo realizado.</th>
<th>100% de servicios sin respaldo técnico</th>
<th><p><strong>Cuantitativo:</strong> pérdida total de historial para futuras visitas. </p>
<p><strong>Cualitativo:</strong> incapacidad de demostrar trabajos realizados.</p></th>
</tr>
<tr class="odd">
<th><strong>P20.</strong> Dependencia exclusiva del dueño para la gestión administrativa y operativa.</th>
<th>100% de riesgo operativo</th>
<th><p><strong>Cuantitativo:</strong> negocio paralizado en ausencia del dueño. </p>
<p><strong>Cualitativo:</strong> imposibilidad de delegar, sobrecarga laboral.</p></th>
</tr>
<tr class="header">
<th><strong>P21.</strong> Falta de seguimiento a clientes para mantenimientos preventivos.</th>
<th>15-20% de pérdida de ingresos recurrentes</th>
<th><p><strong>Cuantitativo:</strong> clientes que realizan mantenimientos en otros talleres. </p>
<p><strong>Cualitativo:</strong> baja fidelización, oportunidades perdidas.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### 1.7) ALTERNATIVAS DE CAMBIO {#alternativas-de-cambio .unnumbered}

**P1. Ausencia de historial clínico (bitácora técnica) de las motocicletas.**

**Alt1.-** Implementar un módulo de historial clínico digital que registre todos los diagnósticos, repuestos utilizados, mano de obra aplicada y notas técnicas asociadas a cada motocicleta, permitiendo consultar el historial completo por placa o número de chasis, facilitando diagnósticos precisos y evitando trabajos repetitivos.

**P3. Registro manual de cotizaciones en talonarios, con riesgo de extravío y sin respaldo digital.**

**Alt2.-** Desarrollar un módulo de cotizaciones digitales que genere proformas automáticas con número único, fecha de emisión y validez configurable, almacenando toda la información en base de datos con respaldo y permitiendo su impresión en PDF o envío por correo electrónico al cliente.

**P4. Falta de control de vigencia de cotizaciones (validez de 7 días no respetada).**

**Alt3.-** Implementar un sistema de control de vigencia que calcule automáticamente la fecha de expiración de cada cotización, mostrando alertas visuales al vendedor cuando una cotización esté próxima a vencer o ya haya expirado, y bloqueando su conversión a orden de trabajo si ha caducado.

**P5. Órdenes de trabajo llenadas de forma incompleta, omitiendo datos vitales.**

**Alt4.-** Diseñar un formulario digital de órdenes de trabajo con campos obligatorios validados (cliente, motocicleta, kilometraje, observaciones) que impida el registro si falta información esencial, garantizando que cada orden contenga todos los datos necesarios para la correcta ejecución del servicio.

**P6. Asignación verbal de tareas a mecánicos, sin registro formal ni control de carga laboral.**

**Alt5.-** Implementar un sistema de asignación de tareas que permita al administrador asignar formalmente cada orden de trabajo a uno o varios mecánicos, con registro de fecha y hora de asignación, y que muestre en tiempo real la carga laboral actual de cada mecánico (cantidad de órdenes en curso, tiempo estimado).

**P8. Promesas de entrega irreales por falta de control de tiempos.**

**Alt6.-** Desarrollar un módulo de estimación de tiempos que, basado en el tipo de servicio y la carga laboral actual de los mecánicos, calcule una fecha de entrega realista para cada orden de trabajo, registrando la fecha prometida y generando alertas cuando se aproxime el vencimiento.

**P9. Inexistencia de categorización de servicios; todo se anota como \"reparación general\".**

**Alt7.-** Crear un catálogo de tipos de servicio predefinidos (mantenimiento preventivo, reparación correctiva, sistema eléctrico, estética/chapería) que permita clasificar cada orden de trabajo, facilitando la generación de reportes estadísticos sobre los servicios más demandados y su rentabilidad.

**P10. Sin registro claro si una pieza fue sustituida por nueva o recuperada.**

**Alt8.-** Implementar un campo obligatorio en el detalle de cada repuesto utilizado que indique su procedencia (\"nuevo\" o \"recuperado\"), registrando esta información en el historial de la motocicleta y en la nota de servicio, para evitar conflictos en garantías y mantener la veracidad del historial clínico.

**P11. Gestión deficiente de repuestos bajo modalidad \"a demanda\", sin control de inventario ni alertas de stock.**

**Alt9.-** Establecer un sistema de inventario básico que registre las entradas (compras a proveedores) y salidas (repuestos utilizados en órdenes de trabajo), con alertas automáticas de stock mínimo, permitiendo conocer en tiempo real la disponibilidad de repuestos y evitando paralizaciones por desabastecimiento.

**P14. Falta de transparencia; cliente desconoce etapa actual de su reparación.**

**Alt10.-** Desarrollar un módulo de seguimiento para clientes (web pública) donde, ingresando la placa de su motocicleta o número de orden, puedan consultar en tiempo real el estado actual de su reparación (en diagnóstico, espera repuesto, en reparación, listo para entrega), eliminando la necesidad de llamadas telefónicas constantes.

**P16. Errores en cálculos de costos, con olvido de cobro de repuestos menores y pérdida económica.**

**Alt11.-** Implementar un sistema de cálculo automático de costos que sume los repuestos utilizados (con precio unitario) y la mano de obra aplicada, generando automáticamente el total a pagar en la nota de servicio, eliminando errores manuales y garantizando el cobro de todos los repuestos utilizados.

**P17. Entrega de recibo simple sin archivo estructurado del trabajo realizado.**

**Alt12.-** Diseñar un módulo de generación de documentos que permita emitir una nota de servicio formal (PDF) al finalizar cada orden de trabajo, detallando los repuestos utilizados, la mano de obra aplicada y el costo total, y que almacene este documento digitalmente vinculado al historial de la motocicleta.

**P20. Dependencia exclusiva del dueño para la gestión administrativa y operativa.**

**Alt13.-** Implementar un sistema de roles y permisos que permita delegar funciones a empleados (mecánicos, recepcionistas) con niveles de acceso restringidos, registrando todas las operaciones en una bitácora de auditoría, reduciendo la dependencia del dueño y permitiendo la operación normal en su ausencia.

**P21. Falta de seguimiento a clientes para mantenimientos preventivos.**

**Alt14.-** Crear un sistema de recordatorios automáticos que, basado en el historial de mantenimientos de cada motocicleta y las fechas de los últimos servicios, genere notificaciones al cliente (vía correo) cuando se aproxime la fecha de próximo mantenimiento preventivo, aumentando la fidelización y los ingresos recurrentes.

#### 1.8) CONCLUSION Y RECOMENDACIÓN {#conclusion-y-recomendación .unnumbered}

La implementación de soluciones tecnológicas es clave para optimizar la operación del taller de motos \"La Roca\". La digitalización permitirá automatizar procesos esenciales como la gestión de clientes y motocicletas con historial clínico digital, el registro formal de cotizaciones con control de vigencia, la asignación estructurada de órdenes de trabajo, el control de inventario de repuestos con alertas de stock mínimo, la categorización de servicios, la generación de notas de servicio formales con archivo digital, el seguimiento web para clientes, los recordatorios automáticos de mantenimiento preventivo, y la gestión de roles y permisos con bitácora de auditoría, garantizando mayor precisión y rapidez en las operaciones.

Además, un sistema centralizado de información facilitará la coordinación del personal (administrador, mecánicos, recepcionista), ofrecerá datos confiables para la toma de decisiones y mejorará la atención a los clientes con un historial detallado de sus motocicletas y transparencia en el estado de sus reparaciones. Estas mejoras incrementarán la eficiencia interna, reducirán errores y tiempos de espera, y contribuirán a aumentar la rentabilidad y competitividad del taller a largo plazo.

Se recomienda adoptar un sistema integral que automatice el registro de clientes y motocicletas, el historial de servicios, el inventario de repuestos con alertas de stock mínimo, la generación de cotizaciones y órdenes de trabajo, la facturación automática, y los reportes de ingresos y servicios más realizados. Esto permitirá planificar las compras de repuestos de manera estratégica, evitar faltantes de productos clave, agilizar la atención al cliente y aumentar la rentabilidad del taller.

#### 1.9) DISEÑAR EL DIAGRAMA DE ISHIKAWA {#diseñar-el-diagrama-de-ishikawa .unnumbered}

### 2) IDENTIICAR LAS PRINCIPALES CATEGORIAS {#identiicar-las-principales-categorias .unnumbered}

### 3) IDENTIFICAR LAS CAUSAS {#identificar-las-causas .unnumbered}

![](media/image10.png){width="6.5in" height="4.595138888888889in"}

### 4) ANALIZAR Y DISCUTIR EL DIAGAMA {#analizar-y-discutir-el-diagama .unnumbered}

El diagrama de Ishikawa elaborado para el taller de motos \"La Roca\" muestra las principales causas que generan la deficiencia en la gestión del negocio. Estas causas se agrupan en cuatro categorías principales: Tecnología, Inventario, Compras y Ventas, y Finanzas.

**Categoría 1: Tecnología**

En el área tecnológica se identifican problemas relacionados con el registro manual de cotizaciones (P3), que genera extravío de documentos y conflictos con los clientes. También se observa la falta de control de vigencia de cotizaciones (P4), lo que provoca discusiones por precios no respetados. La asignación verbal de tareas a mecánicos (P6) causa sobrecarga laboral, tiempos muertos y descontrol en la programación de trabajos. Finalmente, la falta de transparencia (P14) genera interrupciones constantes por parte de los clientes y pérdida de confianza en el servicio.

**Categoría 2: Inventario**

El inventario presenta varios problemas. La ausencia de historial clínico de las motocicletas (P1) provoca diagnósticos imprecisos, pérdida de tiempo y servicios repetitivos. Las órdenes de trabajo incompletas (P5) generan errores en la ejecución de los servicios y falta de información histórica para futuras visitas. La inexistencia de categorización de servicios (P9) impide generar reportes estadísticos sobre los trabajos más demandados y su rentabilidad. La falta de registro claro si una pieza fue sustituida por nueva o recuperada (P10) genera conflictos en garantías y pérdida de credibilidad. Finalmente, la gestión deficiente de repuestos a demanda (P11) ocasiona motocicletas desarmadas ocupando espacio, repuestos extraviados, desabastecimiento y paralización de servicios.

**Categoría 3: Compras y Ventas**

En el área de compras y ventas se identifican problemas relacionados con las promesas de entrega irreales (P8), que generan insatisfacción del cliente y pérdida de credibilidad. También se observan errores en cálculos de costos (P16), lo que provoca pérdidas económicas por repuestos no cobrados y conflictos con los clientes. Finalmente, la entrega de recibo simple sin archivo estructurado (P17) ocasiona pérdida de información y un historial incompleto de los trabajos realizados.

**Categoría 4: Finanzas**

Dentro del área financiera, se observa la dependencia exclusiva del dueño para la gestión administrativa y operativa (P20), lo que genera cuellos de botella, imposibilidad de delegar tareas y un alto riesgo en caso de ausencia. Finalmente, la falta de seguimiento a clientes para mantenimientos preventivos (P21) provoca pérdida de ingresos recurrentes y baja fidelización de la clientela..

## MODELO DE NEGOCIO {#modelo-de-negocio .unnumbered}

### DIAGRAMA DE ACTIVIDADES {#diagrama-de-actividades .unnumbered}

#### DIAGRAMA 1 : Proceso de Registro e Inicio de Sesión {#diagrama-1-proceso-de-registro-e-inicio-de-sesión .unnumbered}

![](media/image2.png){width="6.5in" height="5.611111111111111in"}

#### DIAGRAMA 2 : Proceso de Atención al Cliente {#diagrama-2-proceso-de-atención-al-cliente .unnumbered}

![](media/image8.png){width="6.796875546806649in" height="9.138480971128608in"}

#### DIAGRAMA 3 : Proceso de Gestión de Inventario {#diagrama-3-proceso-de-gestión-de-inventario .unnumbered}

![](media/image5.png){width="6.768491907261592in" height="6.036458880139983in"}

#### DIAGRAMA 4 : Proceso de Seguimiento para Clientes {#diagrama-4-proceso-de-seguimiento-para-clientes .unnumbered}

![](media/image7.png){width="7.298780621172353in" height="6.234375546806649in"}

#### DIAGRAMA 5 : Proceso de Gestion de Ordenes de Trabajo {#diagrama-5-proceso-de-gestion-de-ordenes-de-trabajo .unnumbered}

![](media/image17.png){width="6.6221741032370955in" height="9.10937554680665in"}

#### DIAGRAMA 6 : Diagrama de actividad para el Diagnóstico {#diagrama-6-diagrama-de-actividad-para-el-diagnóstico .unnumbered}

![](media/image19.png){width="6.5in" height="7.055555555555555in"}

#### DIAGRAMA 7 : Diagrama de actividad de Orden de trabajo {#diagrama-7-diagrama-de-actividad-de-orden-de-trabajo .unnumbered}

![](media/image16.png){width="6.5in" height="7.611111111111111in"}

#### DIAGRAMA 8 : Diagrama de actividad de tipos de servicio {#diagrama-8-diagrama-de-actividad-de-tipos-de-servicio .unnumbered}

![](media/image14.png){width="6.5in" height="6.277777777777778in"}

## CAPITULO 2 FLUJO DE TRABAJO: CAPTURA DE REQUISITOS {#capitulo-2-flujo-de-trabajo-captura-de-requisitos .unnumbered}

### 2) ENCONTRAR ACTORES Y CASOS DE USOS {#encontrar-actores-y-casos-de-usos .unnumbered}

Para el taller de motos \"LA ROCA\", los actores representan a los distintos roles que interactúan con el sistema, ya sea de manera directa (usuarios internos) o indirecta (usuarios externos). Los casos de uso permiten describir las funcionalidades principales que el sistema debe ofrecer para dar solución a los problemas identificados.

#### 2.1) Actores {#actores .unnumbered}

- **Administrador:** Propietario o encargado del taller. Gestiona clientes, motocicletas, cotizaciones, órdenes de trabajo, inventario de repuestos, facturación, reportes y usuarios del sistema.

- **Mecánico:** Personal técnico encargado de realizar diagnósticos, reparaciones y mantenimientos. Consulta órdenes de trabajo asignadas, registra notas de trabajo y repuestos utilizados.

- **Recepcionista:** Personal encargado de la atención al cliente. Gestiona clientes, motocicletas, genera cotizaciones, convierte cotizaciones en órdenes de trabajo, gestiona facturación y pagos.

- **Cliente:** Propietario de la motocicleta. Consulta el estado de su vehículo en el taller, visualiza historial de servicios y descarga facturas.

- **Proveedor:** Empresa que suministra repuestos al taller. Recibe pedidos y confirma disponibilidad de productos.

#### 2.2) Casos de Uso {#casos-de-uso .unnumbered}

CU01 - Gestionar Inicio y Cierre de Sesión

CU02 - Gestionar Usuarios y Asignar Roles

CU03 - Gestionar Roles y Asignar Permisos

CU04 - Gestionar Permisos

CU05 - Gestionar Clientes

CU06 - Gestionar Motocicletas

CU07 - Gestionar Cotizaciones

CU08 - Gestionar Órdenes de Trabajo

CU09 - Gestionar Notas de Trabajo

CU10 - Gestionar Productos (Repuestos)

CU11 - Gestionar Inventario

CU12 - Gestionar Compras a Proveedores

CU13 - Gestionar Proveedores

CU14 - Gestionar Facturación

CU15 - Gestionar Historial de Mantenimiento

CU16 - Gestionar Seguimiento para Clientes

CU17 - Configuración de Perfil Personal

CU18 - Gestionar Reportes

CU19 - Gestionar Dashboard Analítico

CU20 - Auditoría de Operaciones

### 3) PRIORIZAR CASOS DE USO {#priorizar-casos-de-uso .unnumbered}

| **N°**   | **CASO DE USO**                      | **ESTADO** | **PRIORIDAD** | **RIESGO** | **ACTORES**                                     | **CICLO** |
|----------|--------------------------------------|------------|---------------|------------|-------------------------------------------------|-----------|
| **CU01** | Gestionar Inicio y Cierre de Sesión  | Aprobado   | Crítico       | Crítico    | Administrador, Mecánico, Recepcionista, Cliente | C1        |
| **CU02** | Gestionar Usuarios y Asignar Roles   | Aprobado   | Crítico       | Crítico    | Administrador                                   | C1        |
| **CU03** | Gestionar Roles y Asignar Permisos   | Aprobado   | Crítico       | Crítico    | Administrador                                   | C1        |
| **CU04** | Gestionar Permisos                   | Aprobado   | Crítico       | Normal     | Administrador                                   | C1        |
| **CU05** | Gestionar Clientes                   | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C1        |
| **CU06** | Gestionar Motocicletas               | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C1        |
| **CU07** | Gestionar Cotizaciones               | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C2        |
| **CU08** | Gestionar Órdenes de Trabajo         | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista, Mecánico          | C2        |
| **CU09** | Gestionar Notas de Trabajo           | Incluido   | Crítico       | Crítico    | Mecánico                                        | C2        |
| **CU10** | Gestionar Productos (Repuestos)      | Aprobado   | Crítico       | Crítico    | Administrador                                   | C2        |
| **CU11** | Gestionar Inventario                 | Aprobado   | Crítico       | Crítico    | Administrador                                   | C2        |
| **CU12** | Gestionar Compras a Proveedores      | Aprobado   | Significativo | Crítico    | Administrador                                   | C2        |
| **CU13** | Gestionar Proveedores                | Aprobado   | Significativo | Normal     | Administrador                                   | C2        |
| **CU14** | Gestionar Facturación                | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C3        |
| **CU15** | Gestionar Historial de Mantenimiento | Incluido   | Crítico       | Normal     | Administrador, Recepcionista, Cliente           | C3        |
| **CU16** | Gestionar Seguimiento para Clientes  | Incluido   | Significativo | Normal     | Cliente                                         | C3        |
| **CU17** | Configuración de Perfil Personal     | Incluido   | Normal        | Normal     | Administrador, Mecánico, Recepcionista, Cliente | C1        |
| **CU18** | Gestionar Reportes                   | Aprobado   | Significativo | Accesorio  | Administrador                                   | C4        |
| **CU19** | Gestionar Dashboard Analítico        | Incluido   | Normal        | Accesorio  | Administrador                                   | C4        |
| **CU20** | Auditoría de Operaciones             | Aprobado   | Significativo | Crítico    | Administrador                                   | C1        |

#### CICLO \#1 {#ciclo-1 .unnumbered}

| **N°**   | **CASO DE USO**                     | **ESTADO** | **PRIORIDAD** | **RIESGO** | **ACTORES**                                     | **CICLO** |
|----------|-------------------------------------|------------|---------------|------------|-------------------------------------------------|-----------|
| **CU01** | Gestionar Inicio y Cierre de Sesión | Aprobado   | Crítico       | Crítico    | Administrador, Mecánico, Recepcionista, Cliente | C1        |
| **CU02** | Gestionar Usuarios y Asignar Roles  | Aprobado   | Crítico       | Crítico    | Administrador                                   | C1        |
| **CU03** | Gestionar Roles y Asignar Permisos  | Aprobado   | Crítico       | Crítico    | Administrador                                   | C1        |
| **CU04** | Gestionar Permisos                  | Aprobado   | Crítico       | Normal     | Administrador                                   | C1        |
| **CU05** | Gestionar Clientes                  | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C1        |
| **CU06** | Gestionar Motocicletas              | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista                    | C1        |
| **CU17** | Configuración de Perfil Personal    | Incluido   | Normal        | Normal     | Administrador, Mecánico, Recepcionista, Cliente | C1        |
| **CU20** | Auditoría de Operaciones            | Aprobado   | Significativo | Crítico    | Administrador                                   | C1        |

#### CICLO \#2 {#ciclo-2 .unnumbered}

| **N°**   | **CASO DE USO**                 | **ESTADO** | **PRIORIDAD** | **RIESGO** | **ACTORES**                            | **CICLO** |
|----------|---------------------------------|------------|---------------|------------|----------------------------------------|-----------|
| **CU07** | Gestionar Cotizaciones          | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista           | C2        |
| **CU08** | Gestionar Órdenes de Trabajo    | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista, Mecánico | C2        |
| **CU09** | Gestionar Notas de Trabajo      | Incluido   | Crítico       | Crítico    | Mecánico                               | C2        |
| **CU10** | Gestionar Productos (Repuestos) | Aprobado   | Crítico       | Crítico    | Administrador                          | C2        |
| **CU11** | Gestionar Inventario            | Aprobado   | Crítico       | Crítico    | Administrador                          | C2        |
| **CU12** | Gestionar Compras a Proveedores | Aprobado   | Significativo | Crítico    | Administrador                          | C2        |
| **CU13** | Gestionar Proveedores           | Aprobado   | Significativo | Normal     | Administrador                          | C2        |

#### CICLO \#3 {#ciclo-3 .unnumbered}

| **N°**   | **CASO DE USO**                      | **ESTADO** | **PRIORIDAD** | **RIESGO** | **ACTORES**                           | **CICLO** |
|----------|--------------------------------------|------------|---------------|------------|---------------------------------------|-----------|
| **CU14** | Gestionar Facturación                | Aprobado   | Crítico       | Crítico    | Administrador, Recepcionista          | C3        |
| **CU15** | Gestionar Historial de Mantenimiento | Incluido   | Crítico       | Normal     | Administrador, Recepcionista, Cliente | C3        |
| **CU16** | Gestionar Seguimiento para Clientes  | Incluido   | Significativo | Normal     | Cliente                               | C3        |

#### CICLO \#4 {#ciclo-4 .unnumbered}

| **N°**   | **CASO DE USO**               | **ESTADO** | **PRIORIDAD** | **RIESGO** | **ACTORES**   | **CICLO** |
|----------|-------------------------------|------------|---------------|------------|---------------|-----------|
| **CU18** | Gestionar Reportes            | Aprobado   | Significativo | Accesorio  | Administrador | C4        |
| **CU19** | Gestionar Dashboard Analítico | Incluido   | Normal        | Accesorio  | Administrador | C4        |

### 4) DETALLAR CASOS DE USO {#detallar-casos-de-uso .unnumbered}

#### CICLO \#1 {#ciclo-1-1 .unnumbered}

##### CU01 - Gestionar Inicio y Cierre de Sesión {#cu01---gestionar-inicio-y-cierre-de-sesión .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU01 - Gestionar Inicio y Cierre de Sesión</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite a los usuarios (Administrador, Mecánico, Recepcionista, Cliente) autenticarse para acceder al sistema mediante sus credenciales y finalizar su sesión de forma segura.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Mecánico, Recepcionista, Cliente</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Mecánico / Recepcionista / Cliente</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El usuario debe estar previamente registrado en el sistema (CU02 - Gestionar Usuarios y Asignar Roles).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario ingresa su email y contraseña en la pantalla de acceso.<br />
- El sistema valida que las credenciales sean correctas y que el usuario esté activo.<br />
- Al validar exitosamente, el sistema le concede acceso al panel principal según los permisos de su rol.<br />
- El sistema registra el inicio de sesión (vinculado a CU20).<br />
- Para salir, el usuario selecciona la opción "Cerrar Sesión".<br />
- El sistema finaliza la sesión activa y redirige al usuario a la pantalla de acceso.<br />
- El sistema registra el cierre de sesión (vinculado a CU20).</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El sistema registra un acceso exitoso en la bitácora o deniega la entrada si la autenticación falla.</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- El usuario ingresa un email o contraseña incorrectos.<br />
- El usuario intenta acceder con una cuenta que ha sido desactivada.<br />
- Error al conectar con el servicio de autenticación.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU02 - Gestionar Usuarios y Asignar Roles {#cu02---gestionar-usuarios-y-asignar-roles .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU02 - Gestionar Usuarios y Asignar Roles</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador la creación, consulta, edición y desactivación de las cuentas de usuario, así como la gestión de los roles que determinan los permisos dentro del sistema.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Administración de Usuarios".<br />
- El sistema muestra la lista de usuarios existentes.<br />
- El Administrador puede crear un nuevo usuario completando un formulario con sus datos (nombre, email, teléfono, rol).<br />
- El Administrador puede seleccionar un usuario existente para editar su información o cambiar su rol.<br />
- El Administrador puede cambiar el estado de un usuario a "Activo" o "Inactivo" para conceder o revocar su acceso.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La información de los usuarios y roles queda actualizada en la base de datos. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta crear un usuario con un email que ya existe.<br />
- Se ingresan datos inválidos o incompletos en el formulario de creación/edición.<br />
- Error en la conexión con la base de datos al intentar guardar los cambios.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU03 - Gestionar Roles y Asignar Permisos {#cu03---gestionar-roles-y-asignar-permisos .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU03 - Gestionar Roles y Asignar Permisos</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador la creación, consulta, edición y eliminación de los roles dentro del sistema, así como la asignación de permisos a cada rol, garantizando que los usuarios solo accedan a las funciones autorizadas.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Roles".<br />
- El sistema muestra la lista de roles existentes (Administrador, Mecánico, Recepcionista).<br />
- El Administrador puede crear un nuevo rol completando un formulario con su nombre y descripción.<br />
- El Administrador puede seleccionar un rol existente para editar su información o eliminarlo si ya no es necesario.<br />
- El Administrador puede asignar o revocar permisos a cada rol (ej. el rol "Mecánico" puede acceder a "Gestionar Notas de Trabajo" pero no a "Gestionar Usuarios").<br />
- El sistema guarda los cambios realizados en la base de datos.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta crear un rol con un nombre que ya existe.<br />
- Se ingresan datos inválidos o incompletos al crear o editar un rol.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU04 - Gestionar Permisos {#cu04---gestionar-permisos .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU04 - Gestionar Permisos</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador crear, modificar o eliminar permisos en el sistema, definiendo las acciones que pueden ser asignadas posteriormente a los distintos roles.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Permisos".<br />
- El sistema muestra la lista de permisos existentes.<br />
- El Administrador puede crear un nuevo permiso especificando su nombre y descripción.<br />
- El Administrador puede seleccionar un permiso existente para modificar su información o eliminarlo si ya no es necesario.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>Las acciones realizadas quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta crear un permiso con un nombre que ya existe.<br />
- Se ingresan datos inválidos o incompletos al crear o editar un permiso.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU05 - Gestionar Clientes {#cu05---gestionar-clientes .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU05 - Gestionar Clientes</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador y Recepcionista registrar, consultar, editar y desactivar clientes en el sistema.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El usuario debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Gestión de Clientes".<br />
- El sistema muestra la lista de clientes existentes con opciones de búsqueda por nombre, cédula o teléfono.<br />
- El usuario puede crear un nuevo cliente completando un formulario con sus datos (cédula, nombre, teléfono, dirección, email).<br />
- El usuario puede seleccionar un cliente existente para editar su información o desactivarlo.<br />
- El sistema valida los datos ingresados y registra los cambios.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La información del cliente queda registrada o actualizada en la base de datos. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta registrar un cliente con una cédula que ya existe.<br />
- Se ingresan datos inválidos o incompletos en el formulario.<br />
- Error en la conexión con la base de datos.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU06 - Gestionar Motocicletas {#cu06---gestionar-motocicletas .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU06 - Gestionar Motocicletas</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador y Recepcionista registrar, consultar, editar y asociar motocicletas a clientes en el sistema.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El usuario debe haber iniciado sesión en el sistema (CU01).<br />
- El cliente propietario debe estar registrado previamente (CU05).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Gestión de Motocicletas".<br />
- El sistema muestra la lista de motocicletas existentes con opciones de búsqueda por placa, marca o cliente.<br />
- El usuario puede registrar una nueva motocicleta seleccionando un cliente y completando los datos (placa, marca, modelo, año, cilindraje, color, número de motor, número de chasis, kilometraje).<br />
- El usuario puede seleccionar una motocicleta existente para editar su información.<br />
- El sistema valida los datos ingresados y registra los cambios.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La información de la motocicleta queda registrada o actualizada en la base de datos, asociada al cliente correspondiente. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta registrar una motocicleta con una placa que ya existe.<br />
- Se selecciona un cliente que no existe.<br />
- Se ingresan datos inválidos o incompletos en el formulario.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU17 - Configuración de Perfil Personal {#cu17---configuración-de-perfil-personal .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU17 - Configuración de Perfil Personal</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite a cualquier usuario autenticado (Administrador, Mecánico, Recepcionista, Cliente) consultar y modificar su propia información personal y datos de contacto, así como cambiar su contraseña de acceso al sistema de forma segura.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Mecánico, Recepcionista, Cliente</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Cualquier usuario autenticado</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El usuario debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede a la sección "Mi Perfil" desde el menú de navegación.<br />
- El sistema muestra dos formularios principales: "Información Personal" y "Seguridad y Contraseña", con los datos actuales del usuario.<br />
- El usuario puede modificar sus datos personales (nombre, teléfono, dirección) en el primer formulario.<br />
- El usuario puede actualizar su contraseña en el segundo formulario, donde debe ingresar su contraseña actual, la nueva contraseña y la confirmación de la misma.<br />
- El usuario confirma los cambios haciendo clic en el botón "Guardar".<br />
- El sistema valida los datos ingresados.<br />
- Si la validación es exitosa, el sistema actualiza la información en la base de datos y muestra un mensaje de confirmación.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La información personal y/o la contraseña del usuario quedan actualizadas en la base de datos. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se ingresan datos inválidos o no se rellenan los campos obligatorios.<br />
- Al intentar cambiar la contraseña, la "Contraseña Actual" proporcionada es incorrecta.<br />
- La "Nueva Contraseña" y su confirmación no coinciden.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU20 - Auditoría de Operaciones {#cu20---auditoría-de-operaciones .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU20 - Auditoría de Operaciones (Bitácora)</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al administrador visualizar la bitácora de operaciones de los usuarios en el sistema (altas, bajas y modificaciones), garantizando trazabilidad de las acciones realizadas.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Auditoría de Operaciones".<br />
- El sistema muestra las opciones de filtrado por rango de fechas, tipo de operación y usuario.<br />
- El Administrador selecciona los filtros deseados.<br />
- El sistema muestra los registros de auditoría con información detallada: usuario, operación realizada, fecha y hora, tabla afectada y datos modificados.<br />
- El Administrador puede exportar los resultados o aplicar filtros adicionales.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>Ninguna</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No existen registros en el rango de fechas seleccionado.<br />
- Error de conexión con la base de datos de auditoría.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### CICLO \#2 {#ciclo-2-1 .unnumbered}

##### CU07 - Gestionar Cotizaciones {#cu07---gestionar-cotizaciones .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU07 - Gestionar Cotizaciones</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador y Recepcionista generar cotizaciones formales para los clientes, detallando repuestos necesarios, mano de obra estimada y costo total, así como gestionar su aprobación y conversión a orden de trabajo.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El usuario debe haber iniciado sesión en el sistema (CU01).<br />
- El cliente y la motocicleta deben estar registrados en el sistema (CU05, CU06).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Gestión de Cotizaciones".<br />
- El sistema muestra la lista de cotizaciones existentes.<br />
- El usuario selecciona "Nueva Cotización".<br />
- El usuario selecciona el cliente y la motocicleta.<br />
- El usuario agrega ítems a la cotización: repuestos (seleccionados del inventario) o mano de obra (descripción y precio).<br />
- El sistema calcula automáticamente subtotal, impuesto y total.<br />
- El usuario establece la fecha de validez (7, 15, 30 días).<br />
- El usuario guarda la cotización y la imprime en PDF para entregar al cliente.<br />
- Cuando el cliente aprueba, el usuario actualiza el estado a "Aprobada".<br />
- El usuario puede convertir la cotización en orden de trabajo mediante la opción "Convertir a Orden".</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La cotización queda registrada en el sistema con su estado correspondiente. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No se selecciona cliente o motocicleta.<br />
- No se agregan ítems a la cotización.<br />
- Se intenta convertir una cotización no aprobada a orden de trabajo.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU08 - Gestionar Órdenes de Trabajo {#cu08---gestionar-órdenes-de-trabajo .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU08 - Gestionar Órdenes de Trabajo</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador, Recepcionista y Mecánico gestionar las órdenes de trabajo, desde su creación hasta su finalización, incluyendo asignación de mecánicos, registro de repuestos utilizados y actualización de estados.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista, Mecánico</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El usuario debe haber iniciado sesión en el sistema (CU01).<br />
- El cliente y la motocicleta deben estar registrados (CU05, CU06).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Gestión de Órdenes de Trabajo".<br />
- El sistema muestra la lista de órdenes existentes con filtros por estado.<br />
- El usuario puede crear una nueva orden desde una cotización aprobada o desde cero.<br />
- El usuario asigna uno o más mecánicos a la orden.<br />
- El usuario establece la prioridad (Normal o Urgente).<br />
- Durante el servicio, el mecánico actualiza el estado (En Diagnóstico, En Reparación, Espera Repuestos, Finalizado).<br />
- El mecánico registra los repuestos utilizados (descuentan automáticamente del inventario).<br />
- Al finalizar, el usuario actualiza el estado a "Finalizado".<br />
- El sistema notifica al recepcionista para proceder con la facturación.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La orden de trabajo queda registrada con su historial de estados. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta asignar un mecánico que no existe.<br />
- Se intenta registrar un repuesto sin stock suficiente.<br />
- Se intenta finalizar una orden sin registrar todos los repuestos utilizados.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU09 - Gestionar Notas de Trabajo {#cu09---gestionar-notas-de-trabajo .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU09 - Gestionar Notas de Trabajo</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite a los mecánicos registrar notas técnicas durante el proceso de reparación, documentando diagnósticos, avances, observaciones y conclusiones.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Mecánico</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Mecánico</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El mecánico debe haber iniciado sesión en el sistema (CU01).<br />
- Debe existir una orden de trabajo asignada al mecánico (CU08).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El mecánico accede a la orden de trabajo asignada.<br />
- El sistema muestra la sección "Notas de Trabajo".<br />
- El mecánico selecciona el tipo de nota (Diagnóstico, Avance, Observación, Conclusión).<br />
- El mecánico ingresa el contenido de la nota.<br />
- El sistema registra la nota con fecha y hora automáticas, asociada al mecánico.<br />
- Las notas quedan visibles en el historial de la orden para administradores y recepcionistas.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La nota de trabajo queda registrada en el sistema, asociada a la orden correspondiente.</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No se selecciona un tipo de nota.<br />
- El contenido de la nota está vacío.<br />
- Se intenta registrar una nota en una orden no asignada al mecánico.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU10 - Gestionar Productos (Repuestos) {#cu10---gestionar-productos-repuestos .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU10 - Gestionar Productos (Repuestos)</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador registrar, consultar, editar y gestionar el catálogo de repuestos disponibles en el taller, incluyendo sus atributos como categoría, marca, precio, stock y modelo compatible.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Productos".<br />
- El sistema muestra la lista de repuestos existentes.<br />
- El Administrador puede crear un nuevo repuesto completando un formulario con: nombre, categoría, marca, modelo compatible, precio de compra, precio de venta, stock actual, stock mínimo, ubicación en almacén.<br />
- El Administrador puede editar o desactivar repuestos existentes.<br />
- El Administrador puede buscar repuestos por nombre, categoría o modelo compatible.<br />
- El sistema valida los datos ingresados y registra los cambios.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El repuesto queda registrado o actualizado en el inventario. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta registrar un repuesto con un nombre que ya existe.<br />
- Se ingresan datos inválidos o incompletos.<br />
- Se intenta reducir stock por debajo de 0.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU11 - Gestionar Inventario {#cu11---gestionar-inventario .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU11 - Gestionar Inventario</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador controlar las entradas y salidas de repuestos, visualizar el stock actual, gestionar alertas de stock mínimo y consultar el historial de movimientos de inventario.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Inventario".<br />
- El sistema muestra el stock actual de todos los repuestos, con alertas visuales para productos con stock bajo.<br />
- El Administrador puede consultar el historial de movimientos de un producto específico.<br />
- El Administrador puede realizar ajustes manuales de inventario (entradas o salidas) con justificación.<br />
- El sistema genera alertas automáticas cuando el stock cae por debajo del mínimo configurado.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El inventario queda actualizado con los movimientos registrados. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta realizar una salida mayor al stock disponible.<br />
- Error en la conexión con la base de datos.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU12 - Gestionar Compras a Proveedores {#cu12---gestionar-compras-a-proveedores .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU12 - Gestionar Compras a Proveedores</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador registrar las compras de repuestos realizadas a proveedores, actualizando automáticamente el stock del inventario.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El Administrador debe haber iniciado sesión en el sistema (CU01).<br />
- El proveedor debe estar registrado (CU13).<br />
- Los productos a comprar deben estar registrados (CU10).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Compras".<br />
- El sistema muestra la lista de compras existentes.<br />
- El Administrador selecciona "Registrar nueva compra".<br />
- El Administrador selecciona el proveedor.<br />
- El Administrador agrega productos indicando cantidad y precio de compra.<br />
- El sistema calcula el subtotal, impuesto y total de la compra.<br />
- El Administrador ingresa el número de factura y método de pago.<br />
- Al guardar, el sistema actualiza automáticamente el stock de los productos comprados.<br />
- El sistema registra la compra en el historial de movimientos.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La compra queda registrada en el sistema y el stock de los productos se actualiza. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- El proveedor seleccionado no existe.<br />
- Se ingresan productos inexistentes.<br />
- Falta información obligatoria (factura, método de pago).<br />
- Error en la actualización del stock.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU13 - Gestionar Proveedores {#cu13---gestionar-proveedores .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU13 - Gestionar Proveedores</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador registrar, modificar, eliminar y consultar la información de los proveedores que suministran repuestos al taller.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al módulo de "Gestión de Proveedores".<br />
- El sistema muestra la lista de proveedores registrados.<br />
- El Administrador puede registrar un nuevo proveedor ingresando: empresa, NIT, contacto, teléfono, email, dirección.<br />
- El Administrador puede editar o eliminar proveedores existentes.<br />
- El Administrador puede buscar proveedores por nombre o NIT.<br />
- El sistema valida los datos ingresados y registra los cambios.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La información del proveedor queda registrada o actualizada en la base de datos. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta registrar un proveedor con un NIT que ya existe.<br />
- Faltan datos obligatorios (empresa, NIT, contacto).<br />
- Se intenta eliminar un proveedor con compras asociadas.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### CICLO \#3 {#ciclo-3-1 .unnumbered}

##### CU14 - Gestionar Facturación {#cu14---gestionar-facturación .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU14 - Gestionar Facturación</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador y Recepcionista generar facturas automáticas a partir de órdenes de trabajo finalizadas, registrar pagos y gestionar cuentas por cobrar.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>- El usuario debe haber iniciado sesión en el sistema (CU01).<br />
- La orden de trabajo debe estar en estado "Finalizado".</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Facturación".<br />
- El sistema muestra la lista de órdenes finalizadas pendientes de facturación.<br />
- El usuario selecciona una orden.<br />
- El sistema genera automáticamente la factura con los datos de la orden (cliente, motocicleta, repuestos, mano de obra, subtotal, impuesto, total).<br />
- El usuario registra la forma de pago (efectivo, tarjeta, transferencia, crédito) y el estado de pago.<br />
- Si el pago es parcial, el sistema registra el saldo pendiente.<br />
- El usuario imprime la factura en PDF para entregar al cliente.<br />
- El sistema actualiza el historial de pagos del cliente.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>La factura queda registrada en el sistema y el pago asociado a la orden. Las acciones quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- Se intenta facturar una orden no finalizada.<br />
- No se selecciona una forma de pago.<br />
- El monto pagado es menor al total pero no se registra como crédito.<br />
- Error al generar el PDF.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU15 - Gestionar Historial de Mantenimiento {#cu15---gestionar-historial-de-mantenimiento .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU15 - Gestionar Historial de Mantenimiento</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador, Recepcionista y Cliente consultar el historial completo de servicios realizados a una motocicleta específica, funcionando como un expediente técnico.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador, Recepcionista, Cliente</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador / Recepcionista / Cliente</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El usuario debe haber iniciado sesión en el sistema (CU01). Para clientes, solo visualizan sus propias motocicletas.</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El usuario accede al módulo de "Historial de Mantenimiento".<br />
- El usuario selecciona una motocicleta (por placa o selección desde lista).<br />
- El sistema muestra todas las órdenes de trabajo asociadas a esa motocicleta, ordenadas cronológicamente.<br />
- El usuario puede seleccionar una orden para ver el detalle completo: repuestos utilizados, mano de obra, notas técnicas, mecánicos involucrados, fechas y costos.<br />
- El usuario puede generar un reporte PDF del historial completo para entregar al cliente.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El usuario visualiza la información solicitada.</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- La motocicleta seleccionada no existe.<br />
- La motocicleta no tiene órdenes de trabajo asociadas.<br />
- El cliente intenta acceder a una motocicleta que no es de su propiedad.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU16 - Gestionar Seguimiento para Clientes {#cu16---gestionar-seguimiento-para-clientes .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU16 - Gestionar Seguimiento para Clientes</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite a los clientes consultar en tiempo real el estado de su motocicleta dentro del flujo de trabajo del taller, utilizando su número de placa o número de orden.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Cliente</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Cliente</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El cliente debe haber iniciado sesión en el sistema (CU01) o acceder mediante interfaz pública con placa.</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El cliente accede a la sección "Seguimiento de mi Moto" desde el portal web.<br />
- El cliente ingresa su número de placa o número de orden.<br />
- El sistema busca la orden de trabajo asociada.<br />
- Si la orden existe, el sistema muestra el estado actual (Pendiente, En Diagnóstico, En Reparación, Espera Repuestos, Finalizado, Entregado).<br />
- El sistema muestra una línea de tiempo con las fechas de cada cambio de estado.<br />
- Si el servicio ya fue finalizado, el cliente puede descargar la factura en PDF.<br />
- El cliente puede solicitar un recordatorio para el próximo mantenimiento.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El cliente visualiza el estado de su motocicleta.</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No se encuentra ninguna orden asociada a la placa ingresada.<br />
- La orden existe pero no está activa.<br />
- Error de conexión con la base de datos.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### CICLO \#4 {#ciclo-4-1 .unnumbered}

##### CU18 - Gestionar Reportes {#cu18---gestionar-reportes .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU18 - Gestionar Reportes</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador consultar, generar y exportar reportes clave del sistema para el análisis y la toma de decisiones.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede a la sección de "Reportes".<br />
- El sistema muestra los tipos de reportes disponibles: Ingresos por período, Servicios más realizados, Repuestos más vendidos, Clientes frecuentes, Órdenes por estado, Rendimiento por mecánico, Inventario crítico.<br />
- El Administrador selecciona un tipo de reporte y define los parámetros (rango de fechas, filtros).<br />
- El sistema valida los parámetros y consulta los datos.<br />
- El sistema genera una vista previa del reporte en pantalla.<br />
- El Administrador selecciona la opción "Exportar" y elige el formato (PDF, Excel, CSV).<br />
- El sistema genera el archivo y lo ofrece para descarga.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>Las acciones realizadas quedan registradas en la auditoría (CU20).</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No se encuentran datos que coincidan con los parámetros de filtro seleccionados.<br />
- Error en el proceso de consulta o al generar el archivo de exportación.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

##### CU19 - Gestionar Dashboard Analítico {#cu19---gestionar-dashboard-analítico .unnumbered}

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elemento</strong></th>
<th><strong>Descripción</strong></th>
</tr>
<tr class="odd">
<th><strong>Caso de uso</strong></th>
<th>CU19 - Gestionar Dashboard Analítico</th>
</tr>
<tr class="header">
<th><strong>Propósito</strong></th>
<th>Permite al Administrador visualizar métricas clave del taller (ingresos, órdenes activas, stock crítico, servicios pendientes) mediante gráficos interactivos en tiempo real.</th>
</tr>
<tr class="odd">
<th><strong>Actores</strong></th>
<th>Administrador</th>
</tr>
<tr class="header">
<th><strong>Iniciador</strong></th>
<th>Administrador</th>
</tr>
<tr class="odd">
<th><strong>Precondición</strong></th>
<th>El Administrador debe haber iniciado sesión en el sistema (CU01).</th>
</tr>
<tr class="header">
<th><strong>Flujo</strong></th>
<th>- El Administrador accede al Dashboard Analítico desde el menú principal.<br />
- El sistema carga el componente con filtro de fecha por defecto (Últimos 30 días).<br />
- El sistema calcula y muestra KPIs principales: Ingresos Totales, Órdenes Activas, Stock Crítico, Servicios Finalizados.<br />
- El sistema renderiza gráficos: tendencia de ingresos por día/semana/mes, top 5 de servicios más realizados, top 5 de repuestos más vendidos.<br />
- El sistema muestra alertas de stock crítico en tiempo real.<br />
- El Administrador puede cambiar el filtro de período (7 días, 30 días, 12 meses).<br />
- Al cambiar el filtro, el sistema actualiza todos los KPIs y gráficos.</th>
</tr>
<tr class="odd">
<th><strong>Postcondición</strong></th>
<th>El Administrador visualiza información consolidada y actualizada del taller.</th>
</tr>
<tr class="header">
<th><strong>Excepción</strong></th>
<th>- No existen datos para el período seleccionado.<br />
- Error de conexión a la base de datos.<br />
- Timeout en consultas complejas.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### 5) ESTRUCTURAR MODELO DE CASO DE USO {#estructurar-modelo-de-caso-de-uso .unnumbered}

#### CICLO \#1 {#ciclo-1-2 .unnumbered}

![](media/image12.png){width="6.206129702537183in" height="8.119078083989502in"}

#### CICLO \#2 {#ciclo-2-2 .unnumbered}

![](media/image6.png){width="5.890464785651793in" height="8.656659011373579in"}

#### CICLO \#3 {#ciclo-3-2 .unnumbered}

![](media/image11.png){width="5.412929790026246in" height="4.710290901137358in"}

#### CICLO \#4 {#ciclo-4-2 .unnumbered}

![](media/image4.png){width="6.5in" height="3.1555555555555554in"}

## CAPITULO 3 FLUJO DE TRABAJO: ANALISIS {#capitulo-3-flujo-de-trabajo-analisis .unnumbered}

### 3) ANALISIS DE ARQUITECTURA {#analisis-de-arquitectura .unnumbered}

#### 3.1) Identificar Paquetes {#identificar-paquetes .unnumbered}

#### 3.2) Relacionar Paquetes y Casos de Uso {#relacionar-paquetes-y-casos-de-uso .unnumbered}

#### 3.3) Vista de Paquetes {#vista-de-paquetes .unnumbered}

**P1. Gestión de Usuarios y Accesos**

**P2. Gestión de Clientes y Motocicletas**

**P3. Gestión de Cotizaciones y Órdenes de Trabajo**

**P4. Gestión de Inventario y Repuestos**

**P5. Gestión de Facturación y Pagos**

**P6. Gestión de Reportes y Análisis**

### 4) ANALIZAR CASOS DE USO {#analizar-casos-de-uso .unnumbered}

#### 4.1) Diagrama de Comunicación {#diagrama-de-comunicación .unnumbered}

##### CICLO \#1 {#ciclo-1-3 .unnumbered}

###### CU01 - Gestionar Inicio y Cierre de Sesión {#cu01---gestionar-inicio-y-cierre-de-sesión-1 .unnumbered}

###### CU02 - Gestionar Usuarios y Asignar Roles {#cu02---gestionar-usuarios-y-asignar-roles-1 .unnumbered}

###### CU03 -- Gestionar Roles y Asignar Permisos {#cu03-gestionar-roles-y-asignar-permisos .unnumbered}

###### CU04 -- Gestionar Permisos {#cu04-gestionar-permisos .unnumbered}

###### CU05 -- Gestionar Clientes {#cu05-gestionar-clientes .unnumbered}

###### CU06 -- Gestionar Motocicletas {#cu06-gestionar-motocicletas .unnumbered}

###### CU17 -- Configuración de Perfil Personal {#cu17-configuración-de-perfil-personal .unnumbered}

###### CU20 -- Auditoría de Operaciones {#cu20-auditoría-de-operaciones .unnumbered}

##### CICLO \#2 {#ciclo-2-3 .unnumbered}

###### CU07 -- Gestionar Cotizaciones {#cu07-gestionar-cotizaciones .unnumbered}

###### CU08 -- Gestionar Órdenes de Trabajo {#cu08-gestionar-órdenes-de-trabajo .unnumbered}

###### CU09 -- Gestionar Notas de Trabajo {#cu09-gestionar-notas-de-trabajo .unnumbered}

###### CU10 -- Gestionar Productos (Repuestos) {#cu10-gestionar-productos-repuestos .unnumbered}

###### CU11 -- Gestionar Inventario {#cu11-gestionar-inventario .unnumbered}

###### CU12 -- Gestionar Compras a Proveedores {#cu12-gestionar-compras-a-proveedores .unnumbered}

###### CU13 -- Gestionar Proveedores {#cu13-gestionar-proveedores .unnumbered}

##### CICLO \#3 {#ciclo-3-3 .unnumbered}

###### CU14 -- Gestionar Facturación {#cu14-gestionar-facturación .unnumbered}

###### CU15 -- Gestionar Historial de Mantenimiento {#cu15-gestionar-historial-de-mantenimiento .unnumbered}

###### CU16 -- Gestionar Seguimiento para Clientes {#cu16-gestionar-seguimiento-para-clientes .unnumbered}

##### CICLO \#4 {#ciclo-4-3 .unnumbered}

###### CU18 -- Gestionar Reportes {#cu18-gestionar-reportes .unnumbered}

###### CU19 -- Gestionar Dashboard Analítico {#cu19-gestionar-dashboard-analítico .unnumbered}

### 5) ANALISIS DE CLASES {#analisis-de-clases .unnumbered}

#### CLASE \#1 {#clase-1 .unnumbered}

##### CU01 -- Gestionar Inicio y Cierre de Sesión {#cu01-gestionar-inicio-y-cierre-de-sesión .unnumbered}

##### CU02 -- Gestionar Usuarios y Asignar Roles {#cu02-gestionar-usuarios-y-asignar-roles .unnumbered}

##### CU03 -- Gestionar Roles y Asignar Permisos {#cu03-gestionar-roles-y-asignar-permisos-1 .unnumbered}

##### CU04 -- Gestionar Permisos {#cu04-gestionar-permisos-1 .unnumbered}

##### CU05 -- Gestionar Clientes {#cu05-gestionar-clientes-1 .unnumbered}

##### CU06 -- Gestionar Motocicletas {#cu06-gestionar-motocicletas-1 .unnumbered}

##### CU17 -- Configuración de Perfil Personal {#cu17-configuración-de-perfil-personal-1 .unnumbered}

##### CU20 -- Auditoría de Operaciones {#cu20-auditoría-de-operaciones-1 .unnumbered}

#### CLASE \#2 {#clase-2 .unnumbered}

##### CU07 -- Gestionar Cotizaciones {#cu07-gestionar-cotizaciones-1 .unnumbered}

##### CU08 -- Gestionar Órdenes de Trabajo {#cu08-gestionar-órdenes-de-trabajo-1 .unnumbered}

##### CU09 -- Gestionar Notas de Trabajo {#cu09-gestionar-notas-de-trabajo-1 .unnumbered}

##### CU10 -- Gestionar Productos (Repuestos) {#cu10-gestionar-productos-repuestos-1 .unnumbered}

##### CU11 -- Gestionar Inventario {#cu11-gestionar-inventario-1 .unnumbered}

##### CU12 -- Gestionar Compras a Proveedores {#cu12-gestionar-compras-a-proveedores-1 .unnumbered}

##### CU13 -- Gestionar Proveedores {#cu13-gestionar-proveedores-1 .unnumbered}

#### CLASE \#3 {#clase-3 .unnumbered}

##### CU14 -- Gestionar Facturación {#cu14-gestionar-facturación-1 .unnumbered}

##### CU15 -- Gestionar Historial de Mantenimiento {#cu15-gestionar-historial-de-mantenimiento-1 .unnumbered}

##### CU16 -- Gestionar Seguimiento para Clientes {#cu16-gestionar-seguimiento-para-clientes-1 .unnumbered}

#### CLASE \#4 {#clase-4 .unnumbered}

##### CU18 -- Gestionar Reportes {#cu18-gestionar-reportes-1 .unnumbered}

##### CU19 -- Gestionar Dashboard Analítico {#cu19-gestionar-dashboard-analítico-1 .unnumbered}

### 6) ANALIZAR UN PAQUETE {#analizar-un-paquete .unnumbered}

## CAPITULO 4 FLUJO DE TRABAJO: ANALISIS {#capitulo-4-flujo-de-trabajo-analisis .unnumbered}

### 4) DISEÑO DE ARQUITECTURA {#diseño-de-arquitectura .unnumbered}

#### Diagrama de Despliegue (Físico) {#diagrama-de-despliegue-físico .unnumbered}

![](media/image3.png){width="7.087082239720035in" height="6.739335083114611in"}

#### Diagrama de Capas (Lógico) {#diagrama-de-capas-lógico .unnumbered}

![](media/image15.png){width="7.40625in" height="7.760416666666667in"}

### 5) DISEÑO DE DATOS {#diseño-de-datos .unnumbered}

#### 5.1) Diseño de datos lógico {#diseño-de-datos-lógico .unnumbered}

##### Diagrama de Clase {#diagrama-de-clase .unnumbered}

![](media/image13.png){width="7.130636482939632in" height="7.578125546806649in"}

##### Mapeo {#mapeo .unnumbered}

###### TABLA 1: Privilegio {#tabla-1-privilegio .unnumbered}

| ***[(PK)]{.underline}*** |                  |                                        |
|--------------------------|------------------|----------------------------------------|
| **codigo**               | nombre           | descripcion                            |
| **1**                    | VER_TODO         | Acceso total al sistema                |
| **2**                    | VER_MIS_ORDENES  | Solo ve órdenes asignadas al mecánico  |
| **3**                    | CREAR_COTIZACION | Permite crear proformas                |
| **4**                    | EMITIR_FACTURA   | Permite cerrar órdenes y facturar      |
| **5**                    | VER_MI_MOTO      | El cliente solo ve su propio historial |

###### TABLA 2: Rol {#tabla-2-rol .unnumbered}

| ***[PK]{.underline}*** |               |                                        |
|------------------------|---------------|----------------------------------------|
| **codigo**             | nombre        | descripcion                            |
| **1**                  | Administrador | Dueño o recepcionista con acceso total |
| **2**                  | Mecánico      | Personal técnico del taller            |
| **3**                  | Cliente       | Dueño de la motocicleta                |

###### TABLA 3: Rol_Privilegio (Tabla Intermedia) {#tabla-3-rol_privilegio-tabla-intermedia .unnumbered}

| ***(FK → Rol)*** | ***(FK → Privilegio)*** |
|------------------|-------------------------|
| **id_rol**       | **id_privilegio**       |
| 1                | 1                       |
| 1                | 3                       |
| 1                | 4                       |
| 2                | 2                       |
| 3                | 5                       |

###### TABLA 4: Usuarios {#tabla-4-usuarios .unnumbered}

| **(PK)**   | **FK**     |                      |                   |            |          |        |                |
|------------|------------|----------------------|-------------------|------------|----------|--------|----------------|
| **codigo** | **id_rol** | nombre               | email             | contrasena | telefono | estado | fecha_registro |
| **1**      | **1**      | Carlos Recepcionista | carlos@taller.com | hash_123   | 77711122 | Activo | 2026-04-01     |
| **2**      | **2**      | Juan Mecánico        | juan@taller.com   | hash_123   | 78822233 | Activo | 2026-04-01     |
| **3**      | **2**      | Pedro Experto        | pedro@taller.com  | hash_123   | 79933344 | Activo | 2026-04-01     |

###### TABLA 5: Cliente {#tabla-5-cliente .unnumbered}

| ***[(PK)]{.underline}*** |         |               |          |                      |                       |                     |                |
|--------------------------|---------|---------------|----------|----------------------|-----------------------|---------------------|----------------|
| **codigo**               | cedula  | nombre        | telefono | telefono_alternativo | direccion             | email               | fecha_registro |
| **1**                    | 8899776 | Maria Lopez   | 76655443 |                      | Av. Banzer 4to Anillo | maria@gmail.com     | 2026-04-01     |
| **2**                    | 5544332 | Roberto Gomez | 75544332 |                      | Plan 3000             | roberto@hotmail.com | 2026-04-01     |
| **3**                    | 1122334 | Ana Roca      | 74433221 |                      | Villa 1ro de Mayo     | ana.roca@yahoo.com  | 2026-04-01     |

###### TABLA 6: Motocicleta {#tabla-6-motocicleta .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***       |          |        |          |      |            |         |              |               |                    |
|--------------------------|----------------|----------|--------|----------|------|------------|---------|--------------|---------------|--------------------|
| **codigo**               | **id_cliente** | placa    | marca  | modelo   | año  | cilindraje | color   | numero_motor | numero_chasis | kilometraje_actual |
| **1**                    | **1**          | 1234-ABC | Honda  | Navi     | 2022 | 110cc      | Rojo    |              |               | 5400.50            |
| **2**                    | **2**          | 5678-DEF | Yamaha | FZ-S     | 2020 | 150cc      | Negro   |              |               | 15200.00           |
| **3**                    | **2**          | 9012-GHI | Suzuki | Gixxer   | 2023 | 155cc      | Azul    |              |               | 2100.00            |
| **4**                    | **3**          | 3456-JKL | KTM    | Duke 200 | 2021 | 200cc      | Naranja |              |               | 18500.00           |

###### TABLA 7: Producto {#tabla-7-producto .unnumbered}

| ***[(PK)]{.underline}*** |               |                               |             |         |              |               |              |
|--------------------------|---------------|-------------------------------|-------------|---------|--------------|---------------|--------------|
| **codigo**               | codigo_barras | nombre                        | categoria   | marca   | stock_actual | precio_compra | precio_venta |
| **1**                    | PROD-001      | Aceite de Motor 10W-40        | Lubricantes | Motul   | 20           | 50.00         | 80.00        |
| **2**                    | PROD-002      | Bujía Iridium                 | Eléctrico   | NGK     | 15           | 30.00         | 60.00        |
| **3**                    | PROD-003      | Pastillas de Freno Delanteras | Frenos      | Brembo  | 10           | 80.00         | 150.00       |
| **4**                    | PROD-004      | Llanta Trasera 140/60         | Neumáticos  | Pirelli | 5            | 300.00        | 450.00       |
| **5**                    | PROD-005      | Filtro de Aire                | Consumibles | K&N     | 12           | 40.00         | 75.00        |

###### TABLA 8: Proveedor {#tabla-8-proveedor .unnumbered}

| ***[(PK)]{.underline}*** |                            |          |                  |          |                        |                                |
|--------------------------|----------------------------|----------|------------------|----------|------------------------|--------------------------------|
| **codigo**               | empresa                    | nit      | contacto         | telefono | email                  | direccion                      |
| **1**                    | Importadora Repuestos S.A. | 10203040 | Ing. Mario Vaca  | 33445566 | ventas@repuestossa.com | Av. Cristo Redentor 3er Anillo |
| **2**                    | Motopartes Express         | 55667788 | Lic. Julia Ortiz | 33112233 | contacto@motopartes.bo | Zona Parque Industrial         |

###### TABLA 9: Compra {#tabla-9-compra .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***         |                |            |          |          |         |               |            |
|--------------------------|------------------|----------------|------------|----------|----------|---------|---------------|------------|
| **codigo**               | **id_proveedor** | numero_factura | fecha      | subtotal | impuesto | total   | metodo_pago   | estado     |
| 🔑 **1**                 | 🔗 **1**         | FAC-5050       | 2026-04-01 | 1000.00  | 130.00   | 1000.00 | Transferencia | Completada |
| 🔑 **2**                 | 🔗 **2**         | FAC-1020       | 2026-04-01 | 1500.00  | 195.00   | 1500.00 | Efectivo      | Completada |

###### TABLA 10: Compra {#tabla-10-compra .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***      | ***FK***        |          |               |          |
|--------------------------|---------------|-----------------|----------|---------------|----------|
| **codigo**               | **id_compra** | **id_producto** | cantidad | precio_compra | subtotal |
| **1**                    | **1**         | **1**           | 10       | 50.00         | 500.00   |
| **2**                    | **1**         | **5**           | 10       | 40.00         | 400.00   |
| **3**                    | **2**         | **4**           | 5        | 300.00        | 1500.00  |

###### TABLA 11: Cotización {#tabla-11-cotización .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***       | ***FK***           |               |               |          |          |        |           |
|--------------------------|----------------|--------------------|---------------|---------------|----------|----------|--------|-----------|
| **codigo**               | **id_cliente** | **id_motocicleta** | fecha_emision | fecha_validez | subtotal | impuesto | total  | estado    |
| **1**                    | **2**          | **2**              | 2026-04-01    | 2026-04-05    | 600.00   | 0.00     | 600.00 | Pendiente |
| **2**                    | **3**          | **4**              | 2026-04-01    | 2026-04-02    | 200.00   | 0.00     | 200.00 | Aprobada  |

###### TABLA 12: DetalleCotizacion {#tabla-12-detallecotizacion .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***          |              |                            |          |                 |          |
|--------------------------|-------------------|--------------|----------------------------|----------|-----------------|----------|
| **codigo**               | **id_cotizacion** | tipo         | descripcion                | cantidad | precio_unitario | subtotal |
| **1**                    | **1**             | Repuesto     | Pastillas de Freno         | 1        | 150.00          | 150.00   |
| **2**                    | **1**             | Repuesto     | Llanta Trasera Pirelli     | 1        | 450.00          | 450.00   |
| **3**                    | **2**             | Mano de Obra | Ajuste de kit de arrastre  | 1        | 50.00           | 50.00    |
| **4**                    | **2**             | Mano de Obra | Revisión sistema eléctrico | 1        | 150.00          | 150.00   |

###### TABLA 13: OrdenTrabajo {#tabla-13-ordentrabajo .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***          | ***FK***       | ***FK***           | ***FK***        |                |              |            |                     |                    |           |                 |                 |        |
|--------------------------|-------------------|----------------|--------------------|-----------------|----------------|--------------|------------|---------------------|--------------------|-----------|-----------------|-----------------|--------|
| **codigo**               | **id_cotizacion** | **id_cliente** | **id_motocicleta** | **id_mecanico** | fecha_creacion | fecha_inicio | fecha_fin  | kilometraje_ingreso | estado             | prioridad | costo_mano_obra | costo_repuestos | total  |
| **1**                    |                   | **1**          | **1**              | **2**           | 2026-04-01     | 2026-03-20   | 2026-03-21 | 5400.00             | Finalizado         | Normal    | 100.00          | 140.00          | 240.00 |
| **2**                    |                   | **2**          | **2**              | **3**           | 2026-04-01     | 2026-03-25   |            | 15150.00            | Esperando repuesto | Normal    | 0               | 0               | 0      |
| **3**                    |                   | **3**          | **4**              | **2**           | 2026-04-01     | 2026-03-26   |            | 18500.00            | En revisión        | Normal    | 0               | 0               | 0      |

###### TABLA 14: DetalleOrdenTrabajo {#tabla-14-detalleordentrabajo .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***             | ***FK***        |              |                                   |          |                      |                 |          |     |
|--------------------------|----------------------|-----------------|--------------|-----------------------------------|----------|----------------------|-----------------|----------|-----|
| **codigo**               | **id_orden_trabajo** | **id_producto** | tipo         | descripcion                       | cantidad | provisto_por_cliente | precio_unitario | subtotal |     |
| **1**                    | **1**                | **1**           | Repuesto     | Cambio de Aceite Motul            | 1        | FALSE                | 80.00           | 80.00    |     |
| **2**                    | **1**                | **2**           | Repuesto     | Cambio de Bujía NGK               | 1        | TRUE                 | 0.00            | 0.00     |     |
| **3**                    | **1**                |                 | Mano de Obra | Servicio de Mantenimiento General | 1        | FALSE                | 100.00          | 100.00   |     |

###### TABLA 15: NotaTrabajo {#tabla-15-notatrabajo .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***             | ***FK_idUsuario*** |                     |                                                                              |             |
|--------------------------|----------------------|--------------------|---------------------|------------------------------------------------------------------------------|-------------|
| **codigo**               | **id_orden_trabajo** | **id_mecanico**    | fecha_hora          | contenido                                                                    | tipo_nota   |
| **1**                    | **2**                | **2**              | 2026-04-01 10:30:00 | Se detectó que el disco de freno está pandeado. Se recomienda cambio.        | Diagnóstico |
| **2**                    | **2**                | **2**              | 2026-04-01 15:45:00 | El cliente autorizó el cambio de disco, esperando que llegue el repuesto.    | Avance      |
| **3**                    | **3**                | **3**              | 2026-04-01 09:15:00 | La moto ingresa con falla de encendido intermitente. Se revisará la batería. | Diagnóstico |

###### TABLA 16: NotaServicio {#tabla-16-notaservicio .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***             | ***FK***       |               |                 |                 |               |                               |             |
|--------------------------|----------------------|----------------|---------------|-----------------|-----------------|---------------|-------------------------------|-------------|
| **codigo**               | **id_orden_trabajo** | **id_cliente** | fecha_emision | total_repuestos | total_mano_obra | total_general | observaciones                 | estado_pago |
| **1**                    | **1**                | **1**          | 2026-04-01    | 80.00           | 100.00          | 180.00        | Cliente trajo su propia bujía | Pagado      |

###### TABLA 17: Factura {#tabla-17-factura .unnumbered}

| ***[(PK)]{.underline}*** | ***FK***             |                     |               |                          |          |                 |             |              |
|--------------------------|----------------------|---------------------|---------------|--------------------------|----------|-----------------|-------------|--------------|
| **codigo**               | **id_nota_servicio** | numero_autorizacion | fecha_emision | monto_servicio_facturado | impuesto | total_facturado | nit_cliente | razon_social |
| **1**                    | **1**                | AUT-998877          | 2026-04-01    | 100.00                   | 13.00    | 100.00          | 8899776     | Maria Lopez  |

##### Normalización {#normalización .unnumbered}

#### 5.2) Diseño de datos físicos {#diseño-de-datos-físicos .unnumbered}

##### Tabla de volumen {#tabla-de-volumen .unnumbered}

###### TABLA 1: Privilegio {#tabla-1-privilegio-1 .unnumbered}

| **Atributo** | **Tipo de Dato** | **Descripción**                      | **Tamaño**     | **Nulo** | **Llave**    |
|--------------|------------------|--------------------------------------|----------------|----------|--------------|
| **codigo**   | SERIAL           | Identificador único del privilegio   | 4 bytes        | No       | **Primaria** |
| nombre       | VARCHAR(100)     | Nombre del privilegio                | 100 caracteres | No       |              |
| descripcion  | TEXT             | Descripción detallada del privilegio | Variable       | Sí       |              |

###### TABLA 2: Rol {#tabla-2-rol-1 .unnumbered}

| **Atributo** | **Tipo de Dato** | **Descripción**                                   | **Tamaño**    | **Nulo** | **Llave**    |
|--------------|------------------|---------------------------------------------------|---------------|----------|--------------|
| **codigo**   | SERIAL           | Identificador único del rol                       | 4 bytes       | No       | **Primaria** |
| nombre       | VARCHAR(50)      | Nombre del rol (Administrador, Mecánico, Cliente) | 50 caracteres | No       |              |
| descripcion  | TEXT             | Descripción detallada del rol                     | Variable      | Sí       |              |

###### TABLA 3: Rol_Privilegio (Tabla Intermedia) {#tabla-3-rol_privilegio-tabla-intermedia-1 .unnumbered}

| **Atributo**      | **Tipo de Dato** | **Descripción**              | **Tamaño** | **Nulo** | **Llave**                                       |
|-------------------|------------------|------------------------------|------------|----------|-------------------------------------------------|
| **id_rol**        | INTEGER          | Identificador del rol        | 4 bytes    | No       | **Primaria** / **Foránea** → Rol(codigo)        |
| **id_privilegio** | INTEGER          | Identificador del privilegio | 4 bytes    | No       | **Primaria** / **Foránea** → Privilegio(codigo) |

###### TABLA 4: Usuarios {#tabla-4-usuarios-1 .unnumbered}

| **Atributo**   | **Tipo de Dato** | **Descripción**                      | **Tamaño**     | **Nulo** | **Llave**                 |
|----------------|------------------|--------------------------------------|----------------|----------|---------------------------|
| **codigo**     | SERIAL           | Identificador único del usuario      | 4 bytes        | No       | **Primaria**              |
| id_rol         | INTEGER          | Rol asignado al usuario              | 4 bytes        | No       | **Foránea** → Rol(codigo) |
| nombre         | VARCHAR(150)     | Nombre completo del usuario          | 150 caracteres | No       |                           |
| email          | VARCHAR(100)     | Correo electrónico único             | 100 caracteres | No       |                           |
| contrasena     | VARCHAR(255)     | Contraseña encriptada                | 255 caracteres | No       |                           |
| telefono       | VARCHAR(20)      | Número de teléfono                   | 20 caracteres  | Sí       |                           |
| estado         | VARCHAR(20)      | Estado del usuario (Activo/Inactivo) | 20 caracteres  | Sí       |                           |
| fecha_registro | DATE             | Fecha de registro del usuario        | 4 bytes        | Sí       |                           |

###### TABLA 5: Cliente {#tabla-5-cliente-1 .unnumbered}

| **Atributo**         | **Tipo de Dato** | **Descripción**                   | **Tamaño**     | **Nulo** | **Llave**    |
|----------------------|------------------|-----------------------------------|----------------|----------|--------------|
| **codigo**           | SERIAL           | Identificador único del cliente   | 4 bytes        | No       | **Primaria** |
| cedula               | VARCHAR(20)      | Número de cédula de identidad     | 20 caracteres  | No       |              |
| nombre               | VARCHAR(150)     | Nombre completo del cliente       | 150 caracteres | No       |              |
| telefono             | VARCHAR(20)      | Teléfono principal                | 20 caracteres  | Sí       |              |
| telefono_alternativo | VARCHAR(20)      | Teléfono secundario o alternativo | 20 caracteres  | Sí       |              |
| direccion            | TEXT             | Dirección de domicilio            | Variable       | Sí       |              |
| email                | VARCHAR(100)     | Correo electrónico                | 100 caracteres | Sí       |              |
| fecha_registro       | DATE             | Fecha de registro del cliente     | 4 bytes        | Sí       |              |

###### TABLA 6: Motocicleta {#tabla-6-motocicleta-1 .unnumbered}

| **Atributo**       | **Tipo de Dato** | **Descripción**                       | **Tamaño**              | **Nulo** | **Llave**                     |
|--------------------|------------------|---------------------------------------|-------------------------|----------|-------------------------------|
| **codigo**         | SERIAL           | Identificador único de la motocicleta | 4 bytes                 | No       | **Primaria**                  |
| id_cliente         | INTEGER          | Cliente propietario de la moto        | 4 bytes                 | No       | **Foránea** → Cliente(codigo) |
| placa              | VARCHAR(15)      | Número de placa único                 | 15 caracteres           | No       |                               |
| marca              | VARCHAR(50)      | Marca de la motocicleta               | 50 caracteres           | Sí       |                               |
| modelo             | VARCHAR(50)      | Modelo de la motocicleta              | 50 caracteres           | Sí       |                               |
| anio               | INTEGER          | Año de fabricación                    | 4 bytes                 | Sí       |                               |
| cilindraje         | VARCHAR(20)      | Cilindraje del motor                  | 20 caracteres           | Sí       |                               |
| color              | VARCHAR(30)      | Color de la motocicleta               | 30 caracteres           | Sí       |                               |
| numero_motor       | VARCHAR(100)     | Número de serie del motor             | 100 caracteres          | Sí       |                               |
| numero_chasis      | VARCHAR(100)     | Número de serie del chasis            | 100 caracteres          | Sí       |                               |
| kilometraje_actual | NUMERIC(10,2)    | Kilometraje actual                    | 10 dígitos, 2 decimales | Sí       |                               |

###### TABLA 7: Producto {#tabla-7-producto-1 .unnumbered}

| **Atributo**      | **Tipo de Dato** | **Descripción**                       | **Tamaño**              | **Nulo** | **Llave**    |
|-------------------|------------------|---------------------------------------|-------------------------|----------|--------------|
| **codigo**        | SERIAL           | Identificador único del producto      | 4 bytes                 | No       | **Primaria** |
| codigo_barras     | VARCHAR(50)      | Código de barras del producto         | 50 caracteres           | Sí       |              |
| nombre            | VARCHAR(150)     | Nombre del producto                   | 150 caracteres          | No       |              |
| categoria         | VARCHAR(50)      | Categoría (Lubricantes, Frenos, etc.) | 50 caracteres           | Sí       |              |
| marca             | VARCHAR(50)      | Marca del producto                    | 50 caracteres           | Sí       |              |
| modelo_compatible | TEXT             | Modelos de moto compatibles           | Variable                | Sí       |              |
| stock_actual      | INTEGER          | Cantidad en inventario                | 4 bytes                 | Sí       |              |
| stock_minimo      | INTEGER          | Cantidad mínima de alerta             | 4 bytes                 | Sí       |              |
| precio_compra     | NUMERIC(10,2)    | Precio de compra al proveedor         | 10 dígitos, 2 decimales | No       |              |
| precio_venta      | NUMERIC(10,2)    | Precio de venta al cliente            | 10 dígitos, 2 decimales | No       |              |
| ubicacion_almacen | VARCHAR(50)      | Ubicación física en almacén           | 50 caracteres           | Sí       |              |
| estado            | VARCHAR(20)      | Estado (Activo/Inactivo)              | 20 caracteres           | Sí       |              |

###### TABLA 8: Proveedor {#tabla-8-proveedor-1 .unnumbered}

| **Atributo** | **Tipo de Dato** | **Descripción**                     | **Tamaño**     | **Nulo** | **Llave**    |
|--------------|------------------|-------------------------------------|----------------|----------|--------------|
| **codigo**   | SERIAL           | Identificador único del proveedor   | 4 bytes        | No       | **Primaria** |
| empresa      | VARCHAR(150)     | Nombre de la empresa proveedora     | 150 caracteres | No       |              |
| nit          | VARCHAR(30)      | Número de identificación tributaria | 30 caracteres  | No       |              |
| contacto     | VARCHAR(100)     | Persona de contacto                 | 100 caracteres | Sí       |              |
| telefono     | VARCHAR(20)      | Teléfono del proveedor              | 20 caracteres  | Sí       |              |
| email        | VARCHAR(100)     | Correo electrónico                  | 100 caracteres | Sí       |              |
| direccion    | TEXT             | Dirección física                    | Variable       | Sí       |              |

###### TABLA 9: Compra {#tabla-9-compra-1 .unnumbered}

| **Atributo**   | **Tipo de Dato** | **Descripción**                          | **Tamaño**              | **Nulo** | **Llave**                       |
|----------------|------------------|------------------------------------------|-------------------------|----------|---------------------------------|
| **codigo**     | SERIAL           | Identificador único de la compra         | 4 bytes                 | No       | **Primaria**                    |
| id_proveedor   | INTEGER          | Proveedor de la compra                   | 4 bytes                 | No       | **Foránea** → Proveedor(codigo) |
| numero_factura | VARCHAR(50)      | Número de factura del proveedor          | 50 caracteres           | Sí       |                                 |
| fecha          | DATE             | Fecha de la compra                       | 4 bytes                 | Sí       |                                 |
| subtotal       | NUMERIC(10,2)    | Subtotal antes de impuestos              | 10 dígitos, 2 decimales | No       |                                 |
| impuesto       | NUMERIC(10,2)    | Monto del impuesto                       | 10 dígitos, 2 decimales | No       |                                 |
| total          | NUMERIC(10,2)    | Total de la compra                       | 10 dígitos, 2 decimales | No       |                                 |
| metodo_pago    | VARCHAR(50)      | Método de pago (Efectivo, Transferencia) | 50 caracteres           | Sí       |                                 |
| estado         | VARCHAR(20)      | Estado (Completada, Anulada)             | 20 caracteres           | Sí       |                                 |

###### TABLA 10: Compra {#tabla-10-compra-1 .unnumbered}

| **Atributo**  | **Tipo de Dato** | **Descripción**                 | **Tamaño**              | **Nulo** | **Llave**                      |
|---------------|------------------|---------------------------------|-------------------------|----------|--------------------------------|
| **codigo**    | SERIAL           | Identificador único del detalle | 4 bytes                 | No       | **Primaria**                   |
| id_compra     | INTEGER          | Compra asociada                 | 4 bytes                 | No       | **Foránea** → Compra(codigo)   |
| id_producto   | INTEGER          | Producto comprado               | 4 bytes                 | No       | **Foránea** → Producto(codigo) |
| cantidad      | INTEGER          | Cantidad comprada               | 4 bytes                 | No       |                                |
| precio_compra | NUMERIC(10,2)    | Precio unitario de compra       | 10 dígitos, 2 decimales | No       |                                |
| subtotal      | NUMERIC(10,2)    | Subtotal (cantidad × precio)    | 10 dígitos, 2 decimales | No       |                                |

###### TABLA 11: Cotización {#tabla-11-cotización-1 .unnumbered}

| **Atributo**   | **Tipo de Dato** | **Descripción**                         | **Tamaño**              | **Nulo** | **Llave**                         |
|----------------|------------------|-----------------------------------------|-------------------------|----------|-----------------------------------|
| **codigo**     | SERIAL           | Identificador único de la cotización    | 4 bytes                 | No       | **Primaria**                      |
| id_cliente     | INTEGER          | Cliente solicitante                     | 4 bytes                 | No       | **Foránea** → Cliente(codigo)     |
| id_motocicleta | INTEGER          | Motocicleta a reparar                   | 4 bytes                 | No       | **Foránea** → Motocicleta(codigo) |
| fecha_emision  | DATE             | Fecha de emisión                        | 4 bytes                 | Sí       |                                   |
| fecha_validez  | DATE             | Fecha límite de validez                 | 4 bytes                 | No       |                                   |
| subtotal       | NUMERIC(10,2)    | Subtotal antes de impuestos             | 10 dígitos, 2 decimales | No       |                                   |
| impuesto       | NUMERIC(10,2)    | Monto del impuesto                      | 10 dígitos, 2 decimales | No       |                                   |
| total          | NUMERIC(10,2)    | Total de la cotización                  | 10 dígitos, 2 decimales | No       |                                   |
| estado         | VARCHAR(20)      | Estado (Pendiente, Aprobada, Rechazada) | 20 caracteres           | Sí       |                                   |

###### TABLA 12: DetalleCotizacion {#tabla-12-detallecotizacion-1 .unnumbered}

| **Atributo**    | **Tipo de Dato** | **Descripción**                 | **Tamaño**              | **Nulo** | **Llave**                        |
|-----------------|------------------|---------------------------------|-------------------------|----------|----------------------------------|
| **codigo**      | SERIAL           | Identificador único del detalle | 4 bytes                 | No       | **Primaria**                     |
| id_cotizacion   | INTEGER          | Cotización asociada             | 4 bytes                 | No       | **Foránea** → Cotizacion(codigo) |
| tipo            | VARCHAR(50)      | Tipo (Repuesto o Mano de Obra)  | 50 caracteres           | No       |                                  |
| descripcion     | TEXT             | Descripción del ítem            | Variable                | Sí       |                                  |
| cantidad        | INTEGER          | Cantidad                        | 4 bytes                 | No       |                                  |
| precio_unitario | NUMERIC(10,2)    | Precio unitario                 | 10 dígitos, 2 decimales | No       |                                  |
| subtotal        | NUMERIC(10,2)    | Subtotal (cantidad × precio)    | 10 dígitos, 2 decimales | No       |                                  |

###### TABLA 13: OrdenTrabajo {#tabla-13-ordentrabajo-1 .unnumbered}

| **Atributo**        | **Tipo de Dato** | **Descripción**                              | **Tamaño**              | **Nulo** | **Llave**                         |
|---------------------|------------------|----------------------------------------------|-------------------------|----------|-----------------------------------|
| **codigo**          | SERIAL           | Identificador único de la orden              | 4 bytes                 | No       | **Primaria**                      |
| id_cotizacion       | INTEGER          | Cotización asociada (opcional)               | 4 bytes                 | Sí       | **Foránea** → Cotizacion(codigo)  |
| id_cliente          | INTEGER          | Cliente propietario                          | 4 bytes                 | No       | **Foránea** → Cliente(codigo)     |
| id_motocicleta      | INTEGER          | Motocicleta a reparar                        | 4 bytes                 | No       | **Foránea** → Motocicleta(codigo) |
| id_mecanico         | INTEGER          | Mecánico asignado                            | 4 bytes                 | Sí       | **Foránea** → Usuario(codigo)     |
| fecha_creacion      | DATE             | Fecha de creación                            | 4 bytes                 | Sí       |                                   |
| fecha_inicio        | DATE             | Fecha de inicio de trabajo                   | 4 bytes                 | Sí       |                                   |
| fecha_fin           | DATE             | Fecha de finalización                        | 4 bytes                 | Sí       |                                   |
| kilometraje_ingreso | NUMERIC(10,2)    | Kilometraje al ingresar                      | 10 dígitos, 2 decimales | Sí       |                                   |
| estado              | VARCHAR(30)      | Estado (En revisión, En proceso, Finalizado) | 30 caracteres           | Sí       |                                   |
| prioridad           | VARCHAR(20)      | Prioridad (Normal, Urgente)                  | 20 caracteres           | Sí       |                                   |
| costo_mano_obra     | NUMERIC(10,2)    | Costo total de mano de obra                  | 10 dígitos, 2 decimales | Sí       |                                   |
| costo_repuestos     | NUMERIC(10,2)    | Costo total de repuestos                     | 10 dígitos, 2 decimales | Sí       |                                   |
| total               | NUMERIC(10,2)    | Total de la orden                            | 10 dígitos, 2 decimales | Sí       |                                   |

###### TABLA 14: DetalleOrdenTrabajo {#tabla-14-detalleordentrabajo-1 .unnumbered}

| **Atributo**         | **Tipo de Dato** | **Descripción**                           | **Tamaño**              | **Nulo** | **Llave**                          |
|----------------------|------------------|-------------------------------------------|-------------------------|----------|------------------------------------|
| **codigo**           | SERIAL           | Identificador único del detalle           | 4 bytes                 | No       | **Primaria**                       |
| id_orden_trabajo     | INTEGER          | Orden de trabajo asociada                 | 4 bytes                 | No       | **Foránea** → OrdenTrabajo(codigo) |
| id_producto          | INTEGER          | Producto utilizado (opcional)             | 4 bytes                 | Sí       | **Foránea** → Producto(codigo)     |
| tipo                 | VARCHAR(50)      | Tipo (Repuesto o Mano de Obra)            | 50 caracteres           | No       |                                    |
| descripcion          | TEXT             | Descripción del trabajo o repuesto        | Variable                | Sí       |                                    |
| cantidad             | INTEGER          | Cantidad                                  | 4 bytes                 | No       |                                    |
| provisto_por_cliente | BOOLEAN          | Indica si el repuesto lo trajo el cliente | 1 byte                  | Sí       |                                    |
| precio_unitario      | NUMERIC(10,2)    | Precio unitario                           | 10 dígitos, 2 decimales | No       |                                    |
| subtotal             | NUMERIC(10,2)    | Subtotal (cantidad × precio)              | 10 dígitos, 2 decimales | No       |                                    |

###### TABLA 15: NotaTrabajo {#tabla-15-notatrabajo-1 .unnumbered}

| **Atributo**     | **Tipo de Dato** | **Descripción**                      | **Tamaño**    | **Nulo** | **Llave**                          |
|------------------|------------------|--------------------------------------|---------------|----------|------------------------------------|
| **codigo**       | SERIAL           | Identificador único de la nota       | 4 bytes       | No       | **Primaria**                       |
| id_orden_trabajo | INTEGER          | Orden de trabajo asociada            | 4 bytes       | No       | **Foránea** → OrdenTrabajo(codigo) |
| id_mecanico      | INTEGER          | Mecánico que escribe la nota         | 4 bytes       | No       | **Foránea** → Usuario(codigo)      |
| fecha_hora       | TIMESTAMP        | Fecha y hora de la nota              | 8 bytes       | Sí       |                                    |
| contenido        | TEXT             | Contenido de la nota                 | Variable      | No       |                                    |
| tipo_nota        | VARCHAR(50)      | Tipo (Diagnóstico, Avance, Problema) | 50 caracteres | Sí       |                                    |

###### TABLA 16: NotaServicio {#tabla-16-notaservicio-1 .unnumbered}

| **Atributo**     | **Tipo de Dato** | **Descripción**                     | **Tamaño**              | **Nulo** | **Llave**                          |
|------------------|------------------|-------------------------------------|-------------------------|----------|------------------------------------|
| **codigo**       | SERIAL           | Identificador único de la nota      | 4 bytes                 | No       | **Primaria**                       |
| id_orden_trabajo | INTEGER          | Orden de trabajo asociada           | 4 bytes                 | No       | **Foránea** → OrdenTrabajo(codigo) |
| id_cliente       | INTEGER          | Cliente que paga                    | 4 bytes                 | No       | **Foránea** → Cliente(codigo)      |
| fecha_emision    | DATE             | Fecha de emisión                    | 4 bytes                 | Sí       |                                    |
| total_repuestos  | NUMERIC(10,2)    | Total en repuestos                  | 10 dígitos, 2 decimales | No       |                                    |
| total_mano_obra  | NUMERIC(10,2)    | Total en mano de obra               | 10 dígitos, 2 decimales | No       |                                    |
| total_general    | NUMERIC(10,2)    | Total general                       | 10 dígitos, 2 decimales | No       |                                    |
| observaciones    | TEXT             | Observaciones adicionales           | Variable                | Sí       |                                    |
| estado_pago      | VARCHAR(20)      | Estado del pago (Pendiente, Pagado) | 20 caracteres           | Sí       |                                    |

###### TABLA 17: Factura {#tabla-17-factura-1 .unnumbered}

| **Atributo**             | **Tipo de Dato** | **Descripción**                   | **Tamaño**              | **Nulo** | **Llave**                          |
|--------------------------|------------------|-----------------------------------|-------------------------|----------|------------------------------------|
| **codigo**               | SERIAL           | Identificador único de la factura | 4 bytes                 | No       | **Primaria**                       |
| id_nota_servicio         | INTEGER          | Nota de servicio asociada         | 4 bytes                 | No       | **Foránea** → NotaServicio(codigo) |
| numero_autorizacion      | VARCHAR(100)     | Número de autorización fiscal     | 100 caracteres          | Sí       |                                    |
| fecha_emision            | DATE             | Fecha de emisión                  | 4 bytes                 | Sí       |                                    |
| monto_servicio_facturado | NUMERIC(10,2)    | Monto facturado por servicio      | 10 dígitos, 2 decimales | No       |                                    |
| impuesto                 | NUMERIC(10,2)    | Impuesto aplicado                 | 10 dígitos, 2 decimales | No       |                                    |
| total_facturado          | NUMERIC(10,2)    | Total facturado                   | 10 dígitos, 2 decimales | No       |                                    |
| nit_cliente              | VARCHAR(30)      | NIT del cliente                   | 30 caracteres           | No       |                                    |
| razon_social             | VARCHAR(150)     | Razón social del cliente          | 150 caracteres          | No       |                                    |

##### Script {#script .unnumbered}

\-- ==========================================================

\-- SCRIPT DE CREACIÓN DE BASE DE DATOS (DISEÑO FÍSICO)

\-- PROYECTO: SISTEMA DE GESTIÓN DE TALLER DE MOTOCICLETAS

\-- ==========================================================

\-- 1. TABLAS INDEPENDIENTES (Sin llaves foráneas)

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

estado VARCHAR(20) DEFAULT \'Activo\'

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

\-- 2. TABLAS DE NIVEL 1 (Dependen de las independientes)

\-- Tabla intermedia para la relación Muchos a Muchos entre Rol y Privilegio

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

estado VARCHAR(20) DEFAULT \'Activo\',

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

CREATE TABLE CatalogoProveedor (

codigo SERIAL PRIMARY KEY,

id_proveedor INTEGER NOT NULL,

id_producto INTEGER NOT NULL,

precio_cotizado NUMERIC(10,2) NOT NULL,

fecha_actualizacion DATE DEFAULT CURRENT_DATE,

FOREIGN KEY (id_proveedor) REFERENCES Proveedor(codigo),

FOREIGN KEY (id_producto) REFERENCES Producto(codigo)

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

estado VARCHAR(20) DEFAULT \'Completada\'

);

\-- 3. TABLAS DE NIVEL 2 (Procesos principales del Taller)

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

estado VARCHAR(20) DEFAULT \'Pendiente\'

);

CREATE TABLE DetalleCotizacion (

codigo SERIAL PRIMARY KEY,

id_cotizacion INTEGER NOT NULL REFERENCES Cotizacion(codigo) ON DELETE CASCADE,

tipo VARCHAR(50) NOT NULL, \-- \'Repuesto\' o \'Mano de Obra\'

descripcion TEXT,

cantidad INTEGER NOT NULL,

precio_unitario NUMERIC(10,2) NOT NULL,

subtotal NUMERIC(10,2) NOT NULL

);

CREATE TABLE OrdenTrabajo (

codigo SERIAL PRIMARY KEY,

id_cotizacion INTEGER REFERENCES Cotizacion(codigo), \-- Puede ser NULL si entra sin cotizar

id_cliente INTEGER NOT NULL REFERENCES Cliente(codigo),

id_motocicleta INTEGER NOT NULL REFERENCES Motocicleta(codigo),

id_mecanico INTEGER REFERENCES Usuario(codigo),

fecha_creacion DATE DEFAULT CURRENT_DATE,

fecha_inicio DATE,

fecha_fin DATE,

kilometraje_ingreso NUMERIC(10,2),

estado VARCHAR(30) DEFAULT \'En revisión\',

prioridad VARCHAR(20) DEFAULT \'Normal\',

costo_mano_obra NUMERIC(10,2) DEFAULT 0,

costo_repuestos NUMERIC(10,2) DEFAULT 0,

total NUMERIC(10,2) DEFAULT 0

);

\-- 4. TABLAS DE NIVEL 3 (Detalles de la Orden, Notas y Cierre)

CREATE TABLE DetalleOrdenTrabajo (

codigo SERIAL PRIMARY KEY,

id_orden_trabajo INTEGER NOT NULL REFERENCES OrdenTrabajo(codigo) ON DELETE CASCADE,

id_producto INTEGER REFERENCES Producto(codigo), \-- Puede ser NULL si es solo servicio

tipo VARCHAR(50) NOT NULL, \-- \'Repuesto\' o \'Mano de Obra\'

descripcion TEXT,

cantidad INTEGER NOT NULL,

provisto_por_cliente BOOLEAN DEFAULT FALSE, \-- ¡LA MAGIA AÑADIDA!

precio_unitario NUMERIC(10,2) NOT NULL,

subtotal NUMERIC(10,2) NOT NULL

);

CREATE TABLE NotaTrabajo (

codigo SERIAL PRIMARY KEY,

id_orden_trabajo INTEGER NOT NULL REFERENCES OrdenTrabajo(codigo) ON DELETE CASCADE,

id_mecanico INTEGER NOT NULL REFERENCES Usuario(codigo),

fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

contenido TEXT NOT NULL,

tipo_nota VARCHAR(50) \-- ej. \'Diagnóstico\', \'Avance\', \'Problema\'

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

estado_pago VARCHAR(20) DEFAULT \'Pendiente\'

);

\-- 5. TABLA FINAL (Facturación Legal separada)

CREATE TABLE Factura (

codigo SERIAL PRIMARY KEY,

id_nota_servicio INTEGER NOT NULL REFERENCES NotaServicio(codigo),

numero_autorizacion VARCHAR(100),

fecha_emision DATE DEFAULT CURRENT_DATE,

monto_servicio_facturado NUMERIC(10,2) NOT NULL, \-- Solo Mano de Obra

impuesto NUMERIC(10,2) NOT NULL,

total_facturado NUMERIC(10,2) NOT NULL,

nit_cliente VARCHAR(30) NOT NULL,

razon_social VARCHAR(150) NOT NULL

);

CREATE TABLE Bitacora (

codigo SERIAL PRIMARY KEY,

id_usuario INTEGER NOT NULL,

fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

accion VARCHAR(100) NOT NULL, \-- Ej: \'IMPRESION\', \'INSERT\', \'UPDATE\'

descripcion TEXT, \-- Ej: \'Juana imprimió la orden de trabajo de Perez\'

FOREIGN KEY (id_usuario) REFERENCES Usuario(codigo) );

\-- FIN DEL SCRIPT

##### Diagrama Relacional {#diagrama-relacional .unnumbered}

##### Actualización de Tuplas (Población de datos) {#actualización-de-tuplas-población-de-datos .unnumbered}

###### Insert() {#insert .unnumbered}

\-- 1. PRIVILEGIOS Y ROLES

INSERT INTO Privilegio (nombre, descripcion) VALUES

(\'VER_TODO\', \'Acceso total al sistema\'),

(\'VER_MIS_ORDENES\', \'Solo ve órdenes asignadas al mecánico\'),

(\'CREAR_COTIZACION\', \'Permite crear proformas\'),

(\'EMITIR_FACTURA\', \'Permite cerrar órdenes y facturar\'),

(\'VER_MI_MOTO\', \'El cliente solo ve su propio historial\');

INSERT INTO Rol (nombre, descripcion) VALUES

(\'Administrador\', \'Dueño o recepcionista con acceso total\'),

(\'Mecánico\', \'Personal técnico del taller\'),

(\'Cliente\', \'Dueño de la motocicleta\');

\-- Asignación de Privilegios a Roles (Tabla Intermedia)

\-- Admin (Rol 1) tiene VER_TODO, CREAR_COTIZACION, EMITIR_FACTURA (Privs 1, 3, 4)

INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES (1, 1), (1, 3), (1, 4);

\-- Mecánico (Rol 2) tiene VER_MIS_ORDENES (Priv 2)

INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES (2, 2);

\-- Cliente (Rol 3) tiene VER_MI_MOTO (Priv 5)

INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES (3, 5);

\-- 2. USUARIOS (Personal del Taller)

INSERT INTO Usuario (id_rol, nombre, email, contrasena, telefono) VALUES

(1, \'Carlos Recepcionista\', \'carlos@taller.com\', \'hash_123\', \'77711122\'),

(2, \'Juan Mecánico\', \'juan@taller.com\', \'hash_123\', \'78822233\'),

(2, \'Pedro Experto\', \'pedro@taller.com\', \'hash_123\', \'79933344\');

\-- 3. CLIENTES Y MOTOCICLETAS

INSERT INTO Cliente (cedula, nombre, telefono, direccion, email) VALUES

(\'8899776\', \'Maria Lopez\', \'76655443\', \'Av. Banzer 4to Anillo\', \'maria@gmail.com\'),

(\'5544332\', \'Roberto Gomez\', \'75544332\', \'Plan 3000\', \'roberto@hotmail.com\'),

(\'1122334\', \'Ana Roca\', \'74433221\', \'Villa 1ro de Mayo\', \'ana.roca@yahoo.com\');

INSERT INTO Motocicleta (id_cliente, placa, marca, modelo, anio, cilindraje, color, kilometraje_actual) VALUES

(1, \'1234-ABC\', \'Honda\', \'Navi\', 2022, \'110cc\', \'Rojo\', 5400.50),

(2, \'5678-DEF\', \'Yamaha\', \'FZ-S\', 2020, \'150cc\', \'Negro\', 15200.00),

(2, \'9012-GHI\', \'Suzuki\', \'Gixxer\', 2023, \'155cc\', \'Azul\', 2100.00),

(3, \'3456-JKL\', \'KTM\', \'Duke 200\', 2021, \'200cc\', \'Naranja\', 18500.00);

\-- 4. INVENTARIO (Productos y Repuestos)

INSERT INTO Producto (codigo_barras, nombre, categoria, marca, stock_actual, precio_compra, precio_venta) VALUES

(\'PROD-001\', \'Aceite de Motor 10W-40\', \'Lubricantes\', \'Motul\', 20, 50.00, 80.00),

(\'PROD-002\', \'Bujía Iridium\', \'Eléctrico\', \'NGK\', 15, 30.00, 60.00),

(\'PROD-003\', \'Pastillas de Freno Delanteras\', \'Frenos\', \'Brembo\', 10, 80.00, 150.00),

(\'PROD-004\', \'Llanta Trasera 140/60\', \'Neumáticos\', \'Pirelli\', 5, 300.00, 450.00),

(\'PROD-005\', \'Filtro de Aire\', \'Consumibles\', \'K&N\', 12, 40.00, 75.00);

\-- 5. ORDENES DE TRABAJO (Con diferentes estados)

\-- Orden 1: Finalizada

INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, fecha_fin, kilometraje_ingreso, estado, costo_mano_obra, costo_repuestos, total) VALUES

(1, 1, 2, \'2026-03-20\', \'2026-03-21\', 5400.00, \'Finalizado\', 100.00, 140.00, 240.00);

\-- Orden 2: En Proceso (Esperando repuesto)

INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, kilometraje_ingreso, estado) VALUES

(2, 2, 3, \'2026-03-25\', 15150.00, \'Esperando repuesto\');

\-- Orden 3: En Revisión (Recién ingresada)

INSERT INTO OrdenTrabajo (id_cliente, id_motocicleta, id_mecanico, fecha_inicio, kilometraje_ingreso, estado) VALUES

(3, 4, 2, \'2026-03-26\', 18500.00, \'En revisión\');

\-- 6. DETALLES DE ORDENES (Repuestos usados)

\-- Para la Orden 1 (Un Aceite del taller y una bujía traída por el cliente)

INSERT INTO DetalleOrdenTrabajo (id_orden_trabajo, id_producto, tipo, descripcion, cantidad, provisto_por_cliente, precio_unitario, subtotal) VALUES

(1, 1, \'Repuesto\', \'Cambio de Aceite Motul\', 1, FALSE, 80.00, 80.00),

(1, 2, \'Repuesto\', \'Cambio de Bujía NGK\', 1, TRUE, 0.00, 0.00), \-- Costo 0 porque lo trajo el cliente

(1, NULL, \'Mano de Obra\', \'Servicio de Mantenimiento General\', 1, FALSE, 100.00, 100.00);

\-- 7. CIERRE COMERCIAL (Nota de Servicio y Factura de la Orden 1)

INSERT INTO NotaServicio (id_orden_trabajo, id_cliente, total_repuestos, total_mano_obra, total_general, observaciones, estado_pago) VALUES

(1, 1, 80.00, 100.00, 180.00, \'Cliente trajo su propia bujía\', \'Pagado\');

INSERT INTO Factura (id_nota_servicio, numero_autorizacion, monto_servicio_facturado, impuesto, total_facturado, nit_cliente, razon_social) VALUES

(1, \'AUT-998877\', 100.00, 13.00, 100.00, \'8899776\', \'Maria Lopez\');

\-- ==========================================================

\-- POBLACIÓN DE TABLAS FALTANTES (COMPLEMENTO)

\-- ==========================================================

\-- 1. PROVEEDORES (Importadoras de repuestos)

INSERT INTO Proveedor (empresa, nit, contacto, telefono, email, direccion) VALUES

(\'Importadora Repuestos S.A.\', \'10203040\', \'Ing. Mario Vaca\', \'33445566\', \'ventas@repuestossa.com\', \'Av. Cristo Redentor 3er Anillo\'),

(\'Motopartes Express\', \'55667788\', \'Lic. Julia Ortiz\', \'33112233\', \'contacto@motopartes.bo\', \'Zona Parque Industrial\');

\-- 2. COMPRAS (El taller abasteciendo su inventario)

\-- Compra 1 a Importadora Repuestos

INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago) VALUES

(1, \'FAC-5050\', 1000.00, 130.00, 1000.00, \'Transferencia\');

\-- Compra 2 a Motopartes Express

INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago) VALUES

(2, \'FAC-1020\', 1500.00, 195.00, 1500.00, \'Efectivo\');

\-- 3. DETALLE DE COMPRAS (Qué compró el taller)

\-- En la Compra 1: Compramos 10 Aceites (Producto 1) y 10 Filtros (Producto 5)

INSERT INTO DetalleCompra (id_compra, id_producto, cantidad, precio_compra, subtotal) VALUES

(1, 1, 10, 50.00, 500.00),

(1, 5, 10, 40.00, 400.00);

\-- En la Compra 2: Compramos 5 Llantas (Producto 4)

INSERT INTO DetalleCompra (id_compra, id_producto, cantidad, precio_compra, subtotal) VALUES

(2, 4, 5, 300.00, 1500.00);

\-- 4. COTIZACIONES (Proformas entregadas a clientes)

\-- Cotización para Roberto Gomez (Cliente 2) sobre su Yamaha (Moto 2)

INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado) VALUES

(2, 2, \'2026-04-05\', 600.00, 0.00, 600.00, \'Pendiente\');

\-- Cotización para Ana Roca (Cliente 3) sobre su KTM (Moto 4)

INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado) VALUES

(3, 4, \'2026-04-02\', 200.00, 0.00, 200.00, \'Aprobada\');

\-- 5. DETALLE DE COTIZACIONES

\-- Detalle para Roberto: Cambio de pastillas y llanta

INSERT INTO DetalleCotizacion (id_cotizacion, tipo, descripcion, cantidad, precio_unitario, subtotal) VALUES

(1, \'Repuesto\', \'Pastillas de Freno\', 1, 150.00, 150.00),

(1, \'Repuesto\', \'Llanta Trasera Pirelli\', 1, 450.00, 450.00);

\-- Detalle para Ana: Ajuste de cadena y revisión eléctrica

INSERT INTO DetalleCotizacion (id_cotizacion, tipo, descripcion, cantidad, precio_unitario, subtotal) VALUES

(2, \'Mano de Obra\', \'Ajuste de kit de arrastre\', 1, 50.00, 50.00),

(2, \'Mano de Obra\', \'Revisión sistema eléctrico\', 1, 150.00, 150.00);

\-- 6. NOTAS DE TRABAJO (Bitácora técnica de los mecánicos)

\-- El mecánico Juan (Usuario 2) deja notas en la Orden 2 y 3

INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota) VALUES

(2, 2, \'Se detectó que el disco de freno está pandeado. Se recomienda cambio.\', \'Diagnóstico\'),

(2, 2, \'El cliente autorizó el cambio de disco, esperando que llegue el repuesto.\', \'Avance\'),

(3, 3, \'La moto ingresa con falla de encendido intermitente. Se revisará la batería.\', \'Diagnóstico\');

###### Update() {#update .unnumbered}

\-- Ejemplo 1: El mecánico actualiza el estado de una orden a \"Finalizado\"

UPDATE OrdenTrabajo

SET estado = \'Finalizado\', fecha_fin = CURRENT_DATE

WHERE codigo = 2;

\-- Ejemplo 2: El taller decide subir el precio de venta de las llantas Pirelli

UPDATE Producto

SET precio_venta = 480.00

WHERE codigo_barras = \'PROD-004\';

\-- Ejemplo 3: Actualizar el kilometraje de una moto tras un servicio

UPDATE Motocicleta

SET kilometraje_actual = 15250.00

WHERE placa = \'5678-DEF\';

###### Delete() {#delete .unnumbered}

\-- Ejemplo 1: Borrar una cotización que el cliente rechazó y ya caducó

DELETE FROM Cotizacion

WHERE estado = \'Rechazada\' AND fecha_validez \< CURRENT_DATE;

\-- Ejemplo 2: Eliminar un repuesto del catálogo porque ya no se fabricará más

\-- (Ojo: Esto fallará si el repuesto ya se usó en una OrdenTrabajo, ¡lo cual es correcto para no dañar el historial!)

DELETE FROM Producto

WHERE codigo = 5;

\-- Ejemplo 3: Dar de baja una relación de privilegio temporal de un mecánico

DELETE FROM Rol_Privilegio

WHERE id_rol = 2 AND id_privilegio = 3;

##### Consultas ( 30 sql) {#consultas-30-sql .unnumbered}

###### Consultas simples {#consultas-simples .unnumbered}

\--CONSULTAS SIMPLES

\-- 1. Listar todos los clientes registrados ordenados alfabéticamente

SELECT \* FROM Cliente ORDER BY nombre ASC;

\-- 2. Mostrar los productos que tienen un stock menor al stock mínimo (Alerta de inventario)

SELECT nombre, stock_actual, stock_minimo FROM Producto WHERE stock_actual \<= stock_minimo;

\-- 3. Listar todas las motocicletas de la marca \'Honda\'

SELECT placa, modelo, anio, color FROM Motocicleta WHERE marca = \'Honda\';

\-- 4. Ver todos los usuarios que tienen el estado \'Activo\'

SELECT nombre, email, telefono FROM Usuario WHERE estado = \'Activo\';

\-- 5. Listar las proformas (cotizaciones) que superan los 500 Bs.

SELECT codigo, total, fecha_validez FROM Cotizacion WHERE total \> 500;

\-- 6. Mostrar los proveedores ubicados en el \'3er Anillo\'

SELECT empresa, contacto, telefono FROM Proveedor WHERE direccion LIKE \'%3er Anillo%\';

\-- 7. Listar las Órdenes de Trabajo que tienen prioridad \'Alta\'

SELECT codigo, id_motocicleta, estado FROM OrdenTrabajo WHERE prioridad = \'Alta\';

\-- 8. Ver el historial de Notas de Trabajo de un día específico

SELECT fecha_hora, contenido FROM NotaTrabajo WHERE fecha_hora::DATE = \'2026-03-26\';

\-- 9. Mostrar los productos de la categoría \'Lubricantes\'

SELECT nombre, marca, precio_venta FROM Producto WHERE categoria = \'Lubricantes\';

\-- 10. Listar las facturas emitidas en el mes actual

SELECT codigo, nit_cliente, total_facturado FROM Factura

WHERE EXTRACT(MONTH FROM fecha_emision) = EXTRACT(MONTH FROM CURRENT_DATE);

###### Consultas Multiples {#consultas-multiples .unnumbered}

\--CONSULTAS MULTIPLES

\-- 11. Listar cada motocicleta junto con el nombre de su dueño

SELECT M.placa, M.marca, M.modelo, C.nombre AS dueño

FROM Motocicleta M

JOIN Cliente C ON M.id_cliente = C.codigo;

\-- 12. Ver las órdenes de trabajo detallando el nombre del mecánico asignado

SELECT O.codigo AS nro_orden, O.estado, U.nombre AS mecanico

FROM OrdenTrabajo O

JOIN Usuario U ON O.id_mecanico = U.codigo;

\-- 13. Mostrar el detalle de repuestos de una orden específica (incluyendo si lo trajo el cliente)

SELECT D.descripcion, D.cantidad, D.precio_unitario, D.provisto_por_cliente

FROM DetalleOrdenTrabajo D

JOIN OrdenTrabajo O ON D.id_orden_trabajo = O.codigo

WHERE O.codigo = 1;

\-- 14. Calcular el total gastado en compras a cada proveedor

SELECT P.empresa, SUM(C.total) AS total_comprado

FROM Proveedor P

JOIN Compra C ON P.codigo = C.id_proveedor

GROUP BY P.empresa;

\-- 15. Listar los roles y la cantidad de usuarios que pertenecen a cada uno

SELECT R.nombre, COUNT(U.codigo) AS total_usuarios

FROM Rol R

LEFT JOIN Usuario U ON R.codigo = U.id_rol

GROUP BY R.nombre;

\-- 16. Ver las facturas junto con el monto total de la Nota de Servicio asociada

SELECT F.codigo AS nro_factura, F.total_facturado AS monto_fiscal, N.total_general AS monto_real_cobrado

FROM Factura F

JOIN NotaServicio N ON F.id_nota_servicio = N.codigo;

\-- 17. Mostrar qué productos se han comprado y a qué proveedor

SELECT P.nombre AS repuesto, PR.empresa AS proveedor

FROM DetalleCompra DC

JOIN Producto P ON DC.id_producto = P.codigo

JOIN Compra C ON DC.id_compra = C.codigo

JOIN Proveedor PR ON C.id_proveedor = PR.codigo;

\-- 18. Obtener el promedio de costo de mano de obra por cada marca de moto

SELECT M.marca, ROUND(AVG(O.costo_mano_obra), 2) AS promedio_mano_obra

FROM Motocicleta M

JOIN OrdenTrabajo O ON M.codigo = O.id_motocicleta

GROUP BY M.marca;

\-- 19. Listar clientes que tienen cotizaciones \'Pendientes\' y el modelo de su moto

SELECT C.nombre, M.modelo, COT.total

FROM Cliente C

JOIN Cotizacion COT ON C.codigo = COT.id_cliente

JOIN Motocicleta M ON COT.id_motocicleta = M.codigo

WHERE COT.estado = \'Pendiente\';

\-- 20. Ver la bitácora de notas indicando el nombre del mecánico y la placa de la moto

SELECT N.fecha_hora, U.nombre AS mecanico, M.placa, N.contenido

FROM NotaTrabajo N

JOIN Usuario U ON N.id_mecanico = U.codigo

JOIN OrdenTrabajo O ON N.id_orden_trabajo = O.codigo

JOIN Motocicleta M ON O.id_motocicleta = M.codigo;

###### Subconsultas {#subconsultas .unnumbered}

\--SUBCONSULTAS

\-- 21. Listar los productos cuyo precio de venta es mayor al promedio de todos los productos

SELECT nombre, precio_venta

FROM Producto

WHERE precio_venta \> (SELECT AVG(precio_venta) FROM Producto);

\-- 22. Mostrar los clientes que tienen más de una motocicleta registrada

SELECT nombre FROM Cliente

WHERE codigo IN (SELECT id_cliente FROM Motocicleta GROUP BY id_cliente HAVING COUNT(\*) \> 1);

\-- 23. Ver los mecánicos que NO han realizado ninguna nota de trabajo todavía

SELECT nombre FROM Usuario

WHERE id_rol = 2 AND codigo NOT IN (SELECT id_mecanico FROM NotaTrabajo);

\-- 24. Listar las motos que nunca han ingresado a taller (sin órdenes de trabajo)

SELECT placa, marca FROM Motocicleta

WHERE codigo NOT IN (SELECT id_motocicleta FROM OrdenTrabajo);

\-- 25. Encontrar el producto más caro del inventario sin usar MAX directamente en el SELECT principal

SELECT nombre, precio_venta FROM Producto

WHERE precio_venta = (SELECT MAX(precio_venta) FROM Producto);

\-- 26. Listar las Órdenes de Trabajo del cliente que tiene la mayor deuda total en el sistema

SELECT codigo, total FROM OrdenTrabajo

WHERE id_cliente = (SELECT id_cliente FROM NotaServicio GROUP BY id_cliente ORDER BY SUM(total_general) DESC LIMIT 1);

\-- 27. Mostrar los proveedores a los que se les ha comprado productos de la categoría \'Neumáticos\'

SELECT empresa FROM Proveedor

WHERE codigo IN (

SELECT id_proveedor FROM Compra WHERE codigo IN (

SELECT id_compra FROM DetalleCompra WHERE id_producto IN (

SELECT codigo FROM Producto WHERE categoria = \'Neumáticos\'

)

)

);

\-- 28. Ver los usuarios que tienen el privilegio de \'EMITIR_FACTURA\'

SELECT nombre FROM Usuario

WHERE id_rol IN (

SELECT id_rol FROM Rol_Privilegio WHERE id_privilegio = (

SELECT codigo FROM Privilegio WHERE nombre = \'EMITIR_FACTURA\'

)

);

\-- 29. Listar las motocicletas cuyo año de fabricación es menor al año promedio de la flota del taller

SELECT placa, anio FROM Motocicleta

WHERE anio \< (SELECT AVG(anio) FROM Motocicleta);

\-- 30. Mostrar el total de ingresos por facturación comparado con el total de ingresos reales (NotaServicio) usando escalares

SELECT

(SELECT SUM(total_facturado) FROM Factura) AS total_fiscal,

(SELECT SUM(total_general) FROM NotaServicio) AS total_real_percibido;

\-- ==========================================================

##### Procedimientos almacenados {#procedimientos-almacenados .unnumbered}

\-- ==========================================================

\-- 10 PROCEDIMIENTOS ALMACENADOS (P.A.)

\-- ==========================================================

\-- PA 1: Registrar un nuevo Cliente rápidamente

CREATE OR REPLACE PROCEDURE pa_registrar_cliente(

p_cedula VARCHAR, p_nombre VARCHAR, p_telefono VARCHAR, p_direccion TEXT, p_email VARCHAR

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO Cliente (cedula, nombre, telefono, direccion, email)

VALUES (p_cedula, p_nombre, p_telefono, p_direccion, p_email);

END;

\$\$;

\-- PA 2: Registrar una nueva Motocicleta

CREATE OR REPLACE PROCEDURE pa_registrar_motocicleta(

p_id_cliente INTEGER, p_placa VARCHAR, p_marca VARCHAR, p_modelo VARCHAR, p_anio INTEGER, p_cilindraje VARCHAR, p_color VARCHAR

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO Motocicleta (id_cliente, placa, marca, modelo, anio, cilindraje, color)

VALUES (p_id_cliente, p_placa, p_marca, p_modelo, p_anio, p_cilindraje, p_color);

END;

\$\$;

\-- PA 3: Iniciar una Cotización (Calcula automáticamente los 7 días de caducidad)

CREATE OR REPLACE PROCEDURE pa_crear_cotizacion(

p_id_cliente INTEGER, p_id_motocicleta INTEGER

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO Cotizacion (id_cliente, id_motocicleta, fecha_validez, subtotal, impuesto, total, estado)

\-- Suma 7 días exactos a la fecha actual para la caducidad

VALUES (p_id_cliente, p_id_motocicleta, CURRENT_DATE + 7, 0, 0, 0, \'Pendiente\');

END;

\$\$;

\-- PA 4: Aprobar Cotización y convertirla en Orden de Trabajo

CREATE OR REPLACE PROCEDURE pa_aprobar_cotizacion_crear_orden(

p_id_cotizacion INTEGER

) LANGUAGE plpgsql AS \$\$

DECLARE

v_cliente INTEGER;

v_moto INTEGER;

BEGIN

UPDATE Cotizacion SET estado = \'Aprobada\' WHERE codigo = p_id_cotizacion;

SELECT id_cliente, id_motocicleta INTO v_cliente, v_moto FROM Cotizacion WHERE codigo = p_id_cotizacion;

INSERT INTO OrdenTrabajo (id_cotizacion, id_cliente, id_motocicleta, estado, prioridad)

VALUES (p_id_cotizacion, v_cliente, v_moto, \'En revisión\', \'Normal\');

END;

\$\$;

\-- PA 5: Asignar Mecánico a la Orden de Trabajo

CREATE OR REPLACE PROCEDURE pa_asignar_mecanico(

p_id_orden INTEGER, p_id_mecanico INTEGER

) LANGUAGE plpgsql AS \$\$

BEGIN

UPDATE OrdenTrabajo

SET id_mecanico = p_id_mecanico, estado = \'En proceso\', fecha_inicio = CURRENT_DATE

WHERE codigo = p_id_orden;

END;

\$\$;

\-- PA 6: Mecánico agrega una Nota Técnica a la Bitácora

CREATE OR REPLACE PROCEDURE pa_agregar_nota(

p_id_orden INTEGER, p_id_mecanico INTEGER, p_contenido TEXT, p_tipo VARCHAR

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota)

VALUES (p_id_orden, p_id_mecanico, p_contenido, p_tipo);

END;

\$\$;

\-- PA 7: Iniciar registro de Compra a Proveedor

CREATE OR REPLACE PROCEDURE pa_registrar_compra(

p_id_proveedor INTEGER, p_factura VARCHAR, p_metodo VARCHAR

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO Compra (id_proveedor, numero_factura, subtotal, impuesto, total, metodo_pago)

VALUES (p_id_proveedor, p_factura, 0, 0, 0, p_metodo);

END;

\$\$;

\-- PA 8: Actualizar el Precio de Venta de un Producto

CREATE OR REPLACE PROCEDURE pa_actualizar_precio_producto(

p_id_producto INTEGER, p_nuevo_precio NUMERIC

) LANGUAGE plpgsql AS \$\$

BEGIN

UPDATE Producto SET precio_venta = p_nuevo_precio WHERE codigo = p_id_producto;

END;

\$\$;

\-- PA 9: Generar Nota de Servicio (Cierre de la Orden)

CREATE OR REPLACE PROCEDURE pa_generar_nota_servicio(

p_id_orden INTEGER, p_observaciones TEXT

) LANGUAGE plpgsql AS \$\$

DECLARE

v_repuestos NUMERIC;

v_mano_obra NUMERIC;

v_cliente INTEGER;

BEGIN

SELECT costo_repuestos, costo_mano_obra, id_cliente INTO v_repuestos, v_mano_obra, v_cliente

FROM OrdenTrabajo WHERE codigo = p_id_orden;

INSERT INTO NotaServicio (id_orden_trabajo, id_cliente, total_repuestos, total_mano_obra, total_general, observaciones)

VALUES (p_id_orden, v_cliente, v_repuestos, v_mano_obra, (v_repuestos + v_mano_obra), p_observaciones);

UPDATE OrdenTrabajo SET estado = \'Finalizado\', fecha_fin = CURRENT_DATE WHERE codigo = p_id_orden;

END;

\$\$;

\-- PA 10: Dar de baja un repuesto del inventario (Cambio a Inactivo)

CREATE OR REPLACE PROCEDURE pa_baja_producto(

p_id_producto INTEGER

) LANGUAGE plpgsql AS \$\$

BEGIN

UPDATE Producto SET estado = \'Inactivo\' WHERE codigo = p_id_producto;

END;

\$\$;

\-- PA 11: Registrar evento en la Bitácora (Para acciones de solo lectura como Imprimir)

CREATE OR REPLACE PROCEDURE pa_registrar_bitacora(

p_id_usuario INTEGER, p_accion VARCHAR, p_descripcion TEXT

) LANGUAGE plpgsql AS \$\$

BEGIN

INSERT INTO Bitacora (id_usuario, accion, descripcion) VALUES (p_id_usuario, p_accion, p_descripcion);

END;

\$\$;

##### Triggers (disparadores) {#triggers-disparadores .unnumbered}

\-- ==========================================================

\-- 10 TRIGGERS (DISPARADORES INTELIGENTES)

\-- ==========================================================

\-- Trigger 1: Calcular automáticamente totales de Cotización al insertar un detalle

CREATE OR REPLACE FUNCTION tf_totales_cotizacion() RETURNS TRIGGER AS \$\$

BEGIN

UPDATE Cotizacion

SET subtotal = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCotizacion WHERE id_cotizacion = NEW.id_cotizacion),

total = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCotizacion WHERE id_cotizacion = NEW.id_cotizacion)

WHERE codigo = NEW.id_cotizacion;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_cotizacion

AFTER INSERT OR UPDATE OR DELETE ON DetalleCotizacion

FOR EACH ROW EXECUTE FUNCTION tf_totales_cotizacion();

\-- Trigger 2: ¡LA MAGIA DEL CLIENTE! Si el repuesto es del cliente, el costo es 0.

CREATE OR REPLACE FUNCTION tf_precio_cero_cliente() RETURNS TRIGGER AS \$\$

BEGIN

IF NEW.provisto_por_cliente = TRUE THEN

NEW.precio_unitario := 0;

NEW.subtotal := 0;

ELSE

NEW.subtotal := NEW.cantidad \* NEW.precio_unitario;

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_precio_cero_cliente

BEFORE INSERT OR UPDATE ON DetalleOrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_precio_cero_cliente();

\-- Trigger 3: Separar automáticamente en la Orden el costo de Mano de Obra y Repuestos

CREATE OR REPLACE FUNCTION tf_totales_orden() RETURNS TRIGGER AS \$\$

BEGIN

UPDATE OrdenTrabajo

SET costo_repuestos = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = NEW.id_orden_trabajo AND tipo = \'Repuesto\'),

costo_mano_obra = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = NEW.id_orden_trabajo AND tipo = \'Mano de Obra\'),

total = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleOrdenTrabajo WHERE id_orden_trabajo = NEW.id_orden_trabajo)

WHERE codigo = NEW.id_orden_trabajo;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_orden

AFTER INSERT OR UPDATE OR DELETE ON DetalleOrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_totales_orden();

\-- Trigger 4: Restar Stock automáticamente cuando se usa un repuesto en la moto

CREATE OR REPLACE FUNCTION tf_disminuir_stock() RETURNS TRIGGER AS \$\$

BEGIN

IF NEW.tipo = \'Repuesto\' AND NEW.provisto_por_cliente = FALSE AND NEW.id_producto IS NOT NULL THEN

UPDATE Producto SET stock_actual = stock_actual - NEW.cantidad WHERE codigo = NEW.id_producto;

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_disminuir_stock

AFTER INSERT ON DetalleOrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_disminuir_stock();

\-- Trigger 5: Bloqueo de seguridad: Evitar que se use un repuesto que no hay en inventario

CREATE OR REPLACE FUNCTION tf_verificar_stock() RETURNS TRIGGER AS \$\$

DECLARE v_stock INTEGER;

BEGIN

IF NEW.tipo = \'Repuesto\' AND NEW.provisto_por_cliente = FALSE AND NEW.id_producto IS NOT NULL THEN

SELECT stock_actual INTO v_stock FROM Producto WHERE codigo = NEW.id_producto;

IF v_stock \< NEW.cantidad THEN

RAISE EXCEPTION \'Stock insuficiente para el repuesto seleccionado.\';

END IF;

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verificar_stock

BEFORE INSERT ON DetalleOrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_verificar_stock();

\-- Trigger 6: Sumar Stock automáticamente cuando ingresa una Compra del proveedor

CREATE OR REPLACE FUNCTION tf_aumentar_stock() RETURNS TRIGGER AS \$\$

BEGIN

UPDATE Producto SET stock_actual = stock_actual + NEW.cantidad WHERE codigo = NEW.id_producto;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_aumentar_stock

AFTER INSERT ON DetalleCompra

FOR EACH ROW EXECUTE FUNCTION tf_aumentar_stock();

\-- Trigger 7: Actualizar totales de Compra a Proveedor (calculando impuestos reales)

CREATE OR REPLACE FUNCTION tf_totales_compra() RETURNS TRIGGER AS \$\$

BEGIN

UPDATE Compra

SET subtotal = (SELECT COALESCE(SUM(subtotal),0) FROM DetalleCompra WHERE id_compra = NEW.id_compra),

impuesto = (SELECT COALESCE(SUM(subtotal),0) \* 0.13 FROM DetalleCompra WHERE id_compra = NEW.id_compra),

total = (SELECT COALESCE(SUM(subtotal),0) \* 1.13 FROM DetalleCompra WHERE id_compra = NEW.id_compra)

WHERE codigo = NEW.id_compra;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_totales_compra

AFTER INSERT OR UPDATE OR DELETE ON DetalleCompra

FOR EACH ROW EXECUTE FUNCTION tf_totales_compra();

\-- Trigger 8: REGLA DE NEGOCIO - Evitar aprobar una proforma que ya caducó

CREATE OR REPLACE FUNCTION tf_verificar_caducidad() RETURNS TRIGGER AS \$\$

BEGIN

IF NEW.estado = \'Aprobada\' AND OLD.estado != \'Aprobada\' THEN

IF NEW.fecha_validez \< CURRENT_DATE THEN

RAISE EXCEPTION \'ERROR: No se puede aprobar esta cotización porque ya han pasado los 7 días de validez.\';

END IF;

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verificar_caducidad

BEFORE UPDATE ON Cotizacion

FOR EACH ROW EXECUTE FUNCTION tf_verificar_caducidad();

\-- Trigger 9: Auditoría: Si el estado de la Orden cambia, deja una nota automática

CREATE OR REPLACE FUNCTION tf_auditoria_estado_orden() RETURNS TRIGGER AS \$\$

BEGIN

IF NEW.estado != OLD.estado THEN

\-- Inserta una nota a nombre del sistema (Mecanico 1 por defecto)

INSERT INTO NotaTrabajo (id_orden_trabajo, id_mecanico, contenido, tipo_nota)

VALUES (NEW.codigo, COALESCE(NEW.id_mecanico, 1), \'Cambio de estado automático de \' \|\| OLD.estado \|\| \' a \' \|\| NEW.estado, \'Sistema\');

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_auditoria_estado

AFTER UPDATE OF estado ON OrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_auditoria_estado_orden();

\-- Trigger 10: ¡LA FACTURA LEGAL! Cuando se crea NotaServicio, emite Factura solo por Mano de Obra

CREATE OR REPLACE FUNCTION tf_generar_factura_legal() RETURNS TRIGGER AS \$\$

DECLARE v_cliente RECORD;

BEGIN

SELECT cedula, nombre INTO v_cliente FROM Cliente WHERE codigo = NEW.id_cliente;

INSERT INTO Factura (id_nota_servicio, numero_autorizacion, monto_servicio_facturado, impuesto, total_facturado, nit_cliente, razon_social)

VALUES (

NEW.codigo,

\'AUT-\' \|\| floor(random() \* 1000000)::text,

NEW.total_mano_obra, \-- Solo cobra mano de obra para impuestos

NEW.total_mano_obra \* 0.13,

NEW.total_mano_obra \* 1.13,

v_cliente.cedula,

v_cliente.nombre

);

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_generar_factura_legal

AFTER INSERT ON NotaServicio

FOR EACH ROW EXECUTE FUNCTION tf_generar_factura_legal();

\-- Trigger 11: Auditoría Automática en la Bitácora por cambios en Órdenes

CREATE OR REPLACE FUNCTION tf_auditoria_bitacora_orden() RETURNS TRIGGER AS \$\$

DECLARE

v_nombre_mecanico VARCHAR;

BEGIN

\-- Obtenemos el nombre del usuario/mecánico que está en la orden

SELECT nombre INTO v_nombre_mecanico FROM Usuario WHERE codigo = NEW.id_mecanico;

\-- Si es una orden nueva (INSERT)

IF TG_OP = \'INSERT\' THEN

INSERT INTO Bitacora (id_usuario, accion, descripcion)

VALUES (NEW.id_mecanico, \'CREACIÓN\', v_nombre_mecanico \|\| \' registró una nueva Orden de Trabajo (Cod: \' \|\| NEW.codigo \|\| \')\');

\-- Si cambiaron el estado de la orden (UPDATE)

ELSIF TG_OP = \'UPDATE\' THEN

IF OLD.estado IS DISTINCT FROM NEW.estado THEN

INSERT INTO Bitacora (id_usuario, accion, descripcion)

VALUES (NEW.id_mecanico, \'ACTUALIZACIÓN\', v_nombre_mecanico \|\| \' cambió el estado de la Orden \' \|\| NEW.codigo \|\| \' a \"\' \|\| NEW.estado \|\| \'\"\');

END IF;

END IF;

RETURN NEW;

END;

\$\$ LANGUAGE plpgsql;

CREATE TRIGGER trg_auditoria_bitacora_orden

AFTER INSERT OR UPDATE ON OrdenTrabajo

FOR EACH ROW EXECUTE FUNCTION tf_auditoria_bitacora_orden();

#### 5.3) Diseñar caso de uso {#diseñar-caso-de-uso .unnumbered}

## CAPITULO 5 FLUJO DE TRABAJO: IMPLEMENTACION {#capitulo-5-flujo-de-trabajo-implementacion .unnumbered}

## CAPITULO 6 FLUJO DE TRABAJO PRUEBAS {#capitulo-6-flujo-de-trabajo-pruebas .unnumbered}

# CONCLUSION

# RECOMENDACIÓN

# BIBLIOGRAFIA

# ANEXOS {#anexos .unnumbered}

## a) Entrevistas {#a-entrevistas .unnumbered}

## b) Documentacion {#b-documentacion .unnumbered}
