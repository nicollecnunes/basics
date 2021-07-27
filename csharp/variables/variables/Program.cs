using System;
using System.Collections.Generic;
using System.Linq; //language integrated query
using static System.Console;
using static System.Convert;

namespace variablesDef
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 0, secret = 98, chances = 3;
            Console.WriteLine("SECRET NUMBER GAME");
            while (a != secret)       
            {
                Console.WriteLine("type an int number");
                a = System.Convert.ToInt32(Console.ReadLine());
                if(a == secret)
                {
                    Console.WriteLine("you did it :)\n");
                    break;
                }
                else
                {
                    chances = chances - 1;
                    Console.WriteLine("thats not the number. you have {0} chances left\n", chances);  
                    if(chances == 0)
                    {
                        Console.WriteLine("you loose. the number was {0}\n", secret);
                        break;

                    }
                }

            }

        }
    }
}
