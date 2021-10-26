
use DataBase practicadb;
CREATE TABLE TUTOR (
    id_tutor INTEGER NOT NULL auto_increment,
    grado_estudios VARCHAR(30) NOT NULL,
    ex_empleo VARCHAR(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_tutor)
);


CREATE TABLE USUARIO (
    id_usuario INTEGER NOT NULL auto_increment,
    TUTOR_id_tutor INTEGER NOT NULL,
    nombres VARCHAR(64),
    apelliidos VARCHAR(64),
    fecha_nacimiento DATE,
    correo VARCHAR(64),
    contraseña VARCHAR(32),
    fotografia VARCHAR(255),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_usuario),
    CONSTRAINT USUARIO_TUTOR_id_fk FOREIGN KEY(TUTOR_id_tutor) REFERENCES TUTOR(id_tutor)
);


CREATE TABLE CURSO (
    id_curso INTEGER NOT NULL auto_increment,
    nombre VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    inscritos VARCHAR(255) NOT NULL,
    descripcion Text NOT NULL,
    requisitos VARCHAR(255) NOT NULL,
    duracion INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_curso)
);


CREATE TABLE USUARIO_has_CURSO (
    USUARIO_id_usuario INTEGER NOT NULL,
    CURSO_id_curso INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(USUARIO_id_usuario, CURSO_id_curso),
    CONSTRAINT USUARIO_has_CURSO_USUARIO_id_fk FOREIGN KEY(USUARIO_id_usuario) REFERENCES USUARIO(id_usuario),
    CONSTRAINT USUARIO_has_CURSO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
);


CREATE TABLE ETIQUETA (
    id_etiqueta INTEGER NOT NULL auto_increment,
    nombre VARCHAR(32) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_etiqueta)
);


CREATE TABLE CURSO_has_ETIQUETA (
    CURSO_id_curso INTEGER NOT NULL,
    ETIQUETA_id_etiqueta INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(CURSO_id_curso, ETIQUETA_id_etiqueta),
    CONSTRAINT CURSO_has_ETIQUETA_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso),
    CONSTRAINT CURSO_has_ETIQUETA_ETIQUETA_id_fk FOREIGN KEY(ETIQUETA_id_etiqueta) REFERENCES ETIQUETA(id_etiqueta)
);

--Tabla Module
CREATE TABLE MODULO (
    id_modulo INTEGER NOT NULL auto_increment,
    CURSO_id_curso INTEGER NOT NULL,
    nombre VARCHAR(64),
    descripcion VARCHAR(2048) NOT NULL,
    duracion INTEGER NOT NULL,
    nota INTEGER,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_modulo, CURSO_id_curso),
    CONSTRAINT MODULO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
);
