using System;
using System.IO;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Sheets.v4;

namespace googlesheets
{
    class Program
    {
        static readonly string[] scopes = {SheetsService.Scope.Spreadsheets};
        static readonly string appname = "teste de planilha"; // qualquer coisa
        static readonly string sheet_id = "1IXE0tgOHNiu97AHDFCHDOPYSpmb_FJJK8B6R0KL6FHQ"; //vem do link
        static readonly string sheet = "teste";
        static SheetsService service;
        static void Main(string[] args)
        {
            GoogleCredential credential;

            //vai abrir o arquivo baixado
            using(var stream = new FileStream("arquivo.json", FileMode.Open, FileAccess.Read)){
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped(scopes);
            }

            service = new SheetsService(new Google.Apis.Services.BaseClientService.Initializer(){
                HttpClientInitializer = credential, 
                ApplicationName = appname,
            });

            read();
        }

        static void read()
        {
            var range = $"{sheet}!A2:D22"; //onde precisamos de acesso
            var request = service.Spreadsheets.Values.Get(sheet_id, range);

            var response = request.Execute(); //faz a request e recebe o retorno
            var values = response.Values; //pega os valores obtidos

            if (values != null && values.Count>0) //checando se obtivemos valores validos
            {
                Console.WriteLine("Entrada \t Nome \t\t\t\t\t Setor \t\t\t\t Padrinho \t");
                foreach (var row in values) //vai percorrer as linhas dos valores
                {
                    Console.WriteLine("{0} \t {1} \t\t\t\t\t {2} \t\t\t {3} \t", row[0], row[1], row[2], row[3]); //[x] = coluna x
                }
            }
        }

    }
}
