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
            Random r = new Random();
            int a = 0, chances = 3;
            int secret = r.Next(0, 100);
            Console.WriteLine("SECRET NUMBER GAME");
            while (chances != 0)       
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
                    else
                    {
                        if(secret < a)
                        {
                            Console.WriteLine("the number is smaller than {0}\n", a);
                        }
                        else
                        {
                            Console.WriteLine("the number is bigger than {0}\n", a);
                        }
                    }
                }

            }

        }
    }
}
