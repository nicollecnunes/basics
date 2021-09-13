using System;

//como esta no mesmo namespace de Pessoa.cs, nao precisa de using
namespace poo.classandmethods
{
    class Membros
    {
        public static void Executar()
        {
            Pessoa p1 =  new Pessoa();
            p1.Nome = "Nicolle";
            p1.Idade = 19;

            //Console.WriteLine($"{p1.Nome} tem {p1.Idade} anos.");
            p1.ApresentarNoConsole();

            var p2 = new Pessoa();
            p2.Nome = "Outra Nicolle";
            p2.Idade = 19;

            var apresentacaoDaP2 = p2.Apresentar();
            
        }
    }
}
