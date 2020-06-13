CREATE DATABASE ProjetoRedeSocial;
go
USE ProjetoRedeSocial;
go
CREATE TABLE Tipo_Usuario(
		IdTipo_Usuario INT PRIMARY KEY IDENTITY,
		Tipo VARCHAR(255) NOT NULL
);

CREATE TABLE Usuario(
		IdUsuario INT PRIMARY KEY IDENTITY,
		Nome VARCHAR(255),
		Email VARCHAR(255) UNIQUE NOT NULL,
		Senha VARCHAR(255) NOT NULL,
		IdTipo_Usuario  INT FOREIGN KEY REFERENCES Tipo_Usuario(IdTipo_Usuario)
);


CREATE TABLE Tipo_postagem(
		IdTipo_Postagem INT PRIMARY KEY IDENTITY,
		TipoPostagem TEXT 

);

CREATE TABLE Postagem(
		IdPostagem INT PRIMARY KEY IDENTITY,
		PublicacaoOpinar  TEXT ,
		IdTipo_Postagem INT FOREIGN KEY REFERENCES Tipo_postagem(IdTipo_Postagem)
);


ALTER TABLE Postagem
ADD IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario)

