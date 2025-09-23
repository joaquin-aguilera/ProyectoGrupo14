#!/bin/bash

# Navegar al frontend
cd mi_web/frontend

npm install

# Compilar frontend React
npm run build

# Volver al backend
cd ../backend

# Levantar Flask y servir los archivos de frontend
export FLASK_APP=app.py
export FLASK_ENV=development
flask run --host=0.0.0.0 --port=5000
