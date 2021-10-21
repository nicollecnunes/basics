CREATE TABLE Livro (
    IdLivro INT PRIMARY KEY,
    NomeLivro VARCHAR(100) NOT NULL,
    NumPaginas INT NOT NULL CHECK (NumPaginas > 0)
)

SELECT * FROM Livro