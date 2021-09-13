using System;
using System.Collections.Generic;
using System.Text;

namespace poo.classandmethods
{
    class Carro
    {
        public string Modelo;
        public string Fabricante;
        public int Ano;

        public Carro(string modelo, string fabricante, int ano)
        {
            this.Modelo = modelo; //atribuindo o parametro modelo ao atributo Modelo
            Fabricante = fabricante;
            Ano = ano;
        }

        public Carro()
        {
            //construtor vazio, padrao
        }
    }

    class Construtores
    {
        public static void Executar()
        {
            var c1 = new Carro(); //usa o construtor da linha 20
            c1.Fabricante = "BMW";
            c1.Modelo = "325i";
            c1.Ano = 2017;
            Console.WriteLine($"o {c1.Modelo} foi lançado em {c1.Ano} pela {c1.Fabricante}");

            var c2 = new Carro("Ka", "Ford", 2018); //usa o construtor da linha 13
            Console.WriteLine($"o {c2.Modelo} foi lançado em {c2.Ano} pela {c2.Fabricante}");

            var c3 = new Carro() //usa o construtor da linha 20
            {
                Fabricante = "Fiat",
                Modelo = "Uno",
                Ano = 2019
            };
            Console.WriteLine($"o {c3.Modelo} foi lançado em {c3.Ano} pela {c3.Fabricante}");
        }
    }
}
