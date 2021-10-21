CREATE TABLE LivroXAutor(
    IdAutor INT NOT NULL,
    IdLivro INT NOT NULL,

    CONSTRAINT PK_Autor_Livro PRIMARY KEY (IdAutor, IdLivro),
        CONSTRAINT FK_IdAutor FOREIGN KEY (IdAutor)
            REFERENCES Autor(IdAutor),
        CONSTRAINT FK_IdLivro FOREIGN KEY (IdLivro)
            REFERENCES Livro(IdLivro)
);

SELECT * FROM LivroXAutor