using System;
using System.Collections.Generic;
using System.Text;

namespace poo.classandmethods
{
    public enum Nome { OneOnOne, Moedas, Horas, Feedback };

    public class Indicador
    {
        public Nome Identificador;
        public string Descricao;
    }
    class ExemploEnum
    {
        public static void Executar()
        {
            int id = (int) Nome.OneOnOne; //enum para inteiro = 0

            var IndicadorCadastro = new Indicador();
            IndicadorCadastro.Descricao = "Usado para apontamento e cadastro no ranking";
            IndicadorCadastro.Identificador = Nome.Horas;

            Console.WriteLine("O indicador de {0} é usado para {1}", IndicadorCadastro.Identificador, IndicadorCadastro.Descricao);
        }
    }
}
