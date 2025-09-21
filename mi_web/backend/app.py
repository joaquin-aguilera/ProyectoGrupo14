from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Esto habilita CORS en todas las rutas y metodos

# Configuracion MySQL
# Ojo con la base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '4ijdx84ww'
app.config['MYSQL_DB'] = 'proyectobd'

mysql = MySQL(app)

# Ruta para crear residentes
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

# Ruta para crear funcionarios
@app.route('/api/funcionarios', methods=['POST'])
def crear_funcionarios():
    data = request.get_json()
    rut = data.get("rut")
    clave = data.get("clave")
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO funcionarios (rut, clave) VALUES (%s, %s)", (rut, clave))
    mysql.connection.commit()
    cur.close()
    return jsonify({"rut": rut, "clave": clave}), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)
