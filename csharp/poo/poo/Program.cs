using System;
using System.Collections.Generic;

using poo.classandmethods;

namespace poo
{
    class Program
    {
        static void Main(string[] args)
        {
            var central = new CentralDeExercicios(new Dictionary<string, Action>() {
                // Classes e Métodos
                { "Membros - Classes e Métodos", Membros.Executar},
                { "Construtores - Classes e Métodos", Construtores.Executar},
                { "Desafio - Classes e Métodos", AcessandoAtributo.Executar},
            });

            central.SelecionarEExecutar();
        }
    }
}