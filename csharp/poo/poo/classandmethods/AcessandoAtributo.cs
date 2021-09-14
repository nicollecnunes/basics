using System;
using System.Collections.Generic;
using System.Text;

namespace poo.classandmethods
{
    class AcessandoAtributo
    {
        int a = 10;

        public static void Executar()
        {
            var a1 = new AcessandoAtributo();
            Console.WriteLine(a1.a);
        }
    }
}
