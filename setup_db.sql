-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS proyectobd;
USE proyectobd;

-- Tabla de residentes
CREATE TABLE IF NOT EXISTS residentes (
    rut VARCHAR(12) PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    fecha_ingreso DATE,
    medico_tratante VARCHAR(100),
    proximo_control DATE,
    diagnostico TEXT
);

-- Tabla de funcionarios
CREATE TABLE IF NOT EXISTS funcionarios (
    rut VARCHAR(12) PRIMARY KEY,
    nombre VARCHAR(100),
    cargo VARCHAR(50),
    clave VARCHAR(100)
);

-- Tabla de medicamentos
CREATE TABLE IF NOT EXISTS medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rut_residente VARCHAR(12),
    nombre VARCHAR(100),
    dosis VARCHAR(100),
    caso_sos BOOLEAN DEFAULT FALSE,
    medico_indicador VARCHAR(100),
    fecha_inicio DATE,
    fecha_termino DATE,
    FOREIGN KEY (rut_residente) REFERENCES residentes(rut)
);

-- Tabla de registros vitales
CREATE TABLE IF NOT EXISTS registros_vitales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rut_residente VARCHAR(12),
    fecha DATE,
    hora TIME,
    tipo_signo_vital VARCHAR(50),
    valor VARCHAR(20),
    unidad VARCHAR(10),
    diuresis_dia VARCHAR(50),
    diuresis_noche VARCHAR(50),
    deposicion VARCHAR(50),
    vomito VARCHAR(50),
    peso DECIMAL(5,2),
    registrado_por VARCHAR(100),
    cargo VARCHAR(50),
    turno VARCHAR(20),
    observaciones TEXT,
    FOREIGN KEY (rut_residente) REFERENCES residentes(rut)
);

-- Tabla de formularios de turno
CREATE TABLE IF NOT EXISTS formularios_turno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    hora_ingreso TIME,
    fecha_ingreso DATE,
    descripcion_turno TEXT,
    caso_sos BOOLEAN DEFAULT FALSE,
    descripcion_sos TEXT
);

-- Insertar algunos datos de ejemplo
INSERT INTO funcionarios (rut, nombre, cargo, clave) VALUES
('12345678-9', 'Juan Pérez', 'Enfermero', 'clave123'),
('98765432-1', 'María López', 'Médico', 'clave456');

INSERT INTO residentes (rut, nombre, fecha_nacimiento, fecha_ingreso, medico_tratante, proximo_control, diagnostico) VALUES
('11111111-1', 'Ana García', '1950-05-15', '2024-01-01', 'Dr. Martínez', '2025-10-15', 'Hipertensión'),
('22222222-2', 'Carlos Rodríguez', '1945-08-20', '2024-02-01', 'Dra. Sánchez', '2025-10-20', 'Diabetes tipo 2');

INSERT INTO medicamentos (rut_residente, nombre, dosis, caso_sos, medico_indicador, fecha_inicio) VALUES
('11111111-1', 'Losartán', '50mg cada 12 horas', FALSE, 'Dr. Martínez', '2024-01-01'),
('22222222-2', 'Metformina', '850mg cada 8 horas', FALSE, 'Dra. Sánchez', '2024-02-01');

-- Procedimientos almacenados útiles
DELIMITER //

CREATE PROCEDURE RegistrarSignosVitales(
    IN p_rut VARCHAR(12),
    IN p_tipo VARCHAR(50),
    IN p_valor VARCHAR(20),
    IN p_registrador VARCHAR(100)
)
BEGIN
    INSERT INTO registros_vitales (rut_residente, fecha, hora, tipo_signo_vital, valor, registrado_por)
    VALUES (p_rut, CURDATE(), CURTIME(), p_tipo, p_valor, p_registrador);
END //

DELIMITER ;
