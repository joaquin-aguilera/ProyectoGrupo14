from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuración MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'        # tu usuario MySQL
app.config['MYSQL_PASSWORD'] = '4ijdx84ww' # tu contraseña MySQL
app.config['MYSQL_DB'] = 'proyectobd'

mysql = MySQL(app)

# API para obtener todos los usuarios
@app.route('/api/usuarios', methods=['GET'])
def get_usuarios():
    cur = mysql.connection.cursor()
    cur.execute("SELECT id, nombre, email FROM usuarios")
    data = cur.fetchall()
    cur.close()
    usuarios = [{"id": row[0], "nombre": row[1], "email": row[2]} for row in data]
    return jsonify(usuarios)

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

# API para obtener residente por rut
@app.route('/api/residentes/<rut>', methods=['GET'])
def obtener_residente(rut):
    cur = mysql.connection.cursor()
    cur.execute("SELECT rut, fecha FROM residentes WHERE rut=%s ORDER BY id DESC LIMIT 1", (rut,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({"rut": row[0], "fecha": str(row[1])})
    else:
        return jsonify({"error": "no encontrado"}), 404

if __name__ == "__main__":
    app.run(debug=True, port=5000)
