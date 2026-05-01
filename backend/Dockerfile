# 1. Usar una imagen oficial de Python ligera
FROM python:3.10-slim

# 2. Configuraciones para que Python funcione más rápido en Docker
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 3. Crear la carpeta "app" dentro del contenedor
WORKDIR /app

# 4. Instalar herramientas necesarias para conectar con PostgreSQL
RUN apt-get update \
    && apt-get install -y gcc libpq-dev \
    && apt-get clean

# 5. Copiar tu lista de requerimientos y decirle a Python que los instale
COPY requerimientos.txt /app/
RUN pip install --no-cache-dir -r requerimientos.txt

# 6. Copiar el resto del código a la carpeta de trabajo
COPY . /app/