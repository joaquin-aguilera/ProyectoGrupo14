from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuración MySQL
# OJO - Cambia estos valores segun tu configuración
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'        # tu usuario MySQL
app.config['MYSQL_PASSWORD'] = 'password' # tu contraseña MySQL
app.config['MYSQL_DB'] = 'proyectobd'

mysql = MySQL(app)

# API para crear residente (antes /login)
@app.route('/api/residentes', methods=['POST'])
def crear_residente():
    data = request.get_json()
    rut = data.get("rut")
    fecha = data.get("fecha")
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO residentes (rut, fecha) VALUES (%s, %s)", (rut, fecha))
    mysql.connection.commit()
    cur.close()
    return jsonify({"rut": rut, "fecha": fecha}), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)
