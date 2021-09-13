using System;
using System.Collections.Generic;
using System.Text;

namespace poo.classandmethods
{
    class Pessoa
    {
        public string Nome; //visivel para fora da classe, valor padrao null
        public int Idade; //valor padrao 0

        //comportamento, metodo
        public string Apresentar() //nao precisa passar parametro pq ja e dentro da classe pessoa
        {
            return string.Format($"Olá, me chamo {Nome} e tenho {Idade} anos");
        }

        public void ApresentarNoConsole()
        {
            Console.WriteLine(Apresentar());
        }
    }
}
