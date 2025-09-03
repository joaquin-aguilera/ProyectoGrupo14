from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# Inicializar la base de datos
def init_db():
    conn = sqlite3.connect("mi_base.db")
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )
    """)
    conn.commit()
    conn.close()

@app.route("/login", methods=["POST"])
def login():
    nombre = request.form["nombre"]
    fecha = request.form["fecha"]

    # Aquí podrías hacer validaciones o guardar en BD si quieres
    # Por ahora simplemente mostramos la página buscar.html
    return render_template("buscar.html", resultados=[], query=nombre)

# Ruta principal
@app.route("/", methods=["GET", "POST"])
def index():
    conn = sqlite3.connect("mi_base.db")
    cursor = conn.cursor()

    if request.method == "POST":
        nombre = request.form["nombre"]
        email = request.form["email"]
        cursor.execute("INSERT INTO usuarios (nombre, email) VALUES (?, ?)", (nombre, email))
        conn.commit()
        return redirect("/")  # recargar la página

    # Consultar usuarios
    cursor.execute("SELECT id, nombre, email FROM usuarios")
    usuarios = cursor.fetchall()
    conn.close()

    return render_template("index.html", usuarios=usuarios)

# Buscar Usuario
@app.route("/buscar", methods=["GET"])
def buscar():
    query = request.args.get("q")  # lo que escribe el usuario
    conn = sqlite3.connect("mi_base.db")
    cursor = conn.cursor()
    
    # Buscar por nombre o email (parcial, con LIKE)
    cursor.execute("SELECT id, nombre, email FROM usuarios WHERE nombre LIKE ? OR email LIKE ?", 
                   (f"%{query}%", f"%{query}%"))
    resultados = cursor.fetchall()
    conn.close()

    return render_template("buscar.html", resultados=resultados, query=query)

#Eliminar Usuario
@app.route("/eliminar/<int:id>", methods=["POST"]) # Ruta para eliminar un usuario
def eliminar(id):
    conn = sqlite3.connect("mi_base.db") #Accede a la BD
    cursor = conn.cursor()
    cursor.execute("DELETE FROM usuarios WHERE id = ?", (id,)) # Realiza la consulta de SQL
    conn.commit()
    conn.close()
    return redirect("/")


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
