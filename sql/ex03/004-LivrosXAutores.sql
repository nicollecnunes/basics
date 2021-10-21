IdLivroXAutor PRIMARY KEY (FOREIGN KEY REFERENCES Livro(IdLivro),FOREIGN KEY REFERENCES Autor(IdAutor))

INSERT INTO LivroXAutor(IdAutor, IdLivro)
VALUES
(0,0)
(1,1)
(2,2)
(3,3)
(4,4)
(5,5)
(6,6)
(7,7)
(8,8)
(9,9);

SELECT * FROM LivroXAutor
