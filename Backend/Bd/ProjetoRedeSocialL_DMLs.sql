
USE ProjetoRedeSocial;
go
INSERT INTO Tipo_Usuario(Tipo) VALUES ('Visitante'), ('Usuario');

SELECT * FROM Tipo_Usuario;

-- tabela de postagem 

INSERT INTO Usuario(Nome, Email, Senha, IdTipo_Usuario) VALUES
('ana ono', 'aninhahgatinhah@youtlook.com','odeiorecalcadas123', 2)


 SELECT * FROM Usuario
 SELECT * FROM Postagem

 INSERT INTO Tipo_postagem(TipoPostagem) VALUES ('Opinar'), ('Depoimento');
  SELECT * FROM Tipo_Postagem



 INSERT INTO postagem(PublicacaoOpinar, IdTipo_Postagem, IdUsuario ) VALUES
 ('a anah eh muito gatinhah rsrsrrsrsr penah que eh recalcadah', 2, 1 )

