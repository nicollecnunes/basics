using System;
using System.IO;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Sheets.v4;
using System.Collections.Generic;
using Google.Apis.Sheets.v4.Data;

namespace googlesheets
{
    class Program
    {
        static readonly string[] scopes = {SheetsService.Scope.Spreadsheets};
        static readonly string appname = "teste de planilha"; // qualquer coisa
        static readonly string sheet_id = "1jIkkpUYkoJlBFtMfawmMCHXtEatihjpa43jhooiBK0o"; //vem do link
        static readonly string sheet = "Geral";
        static SheetsService service;
        static void Main(string[] args)
        {
            GoogleCredential credential;

            //vai abrir o arquivo baixado
            using(var stream = new FileStream("credenciais.json", FileMode.Open, FileAccess.Read)){
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped(scopes);
            }

            service = new SheetsService(new Google.Apis.Services.BaseClientService.Initializer(){
                HttpClientInitializer = credential, 
                ApplicationName = appname,
            });

            AppendNewLine();
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

        static void createEntry()
        {
            var range = $"{sheet}!A:F";
            var valueRange = new ValueRange();

            var oblist = new List<object>() { "Hello!", "This", "was", "insertd", "via", "C#" };
            valueRange.Values = new List<IList<object>> { oblist };

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, sheet_id, range);
            appendRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendReponse = appendRequest.Execute();
        }

        static void updateEntry()
        {
            var range = $"{sheet}!D3";
            var valueRange = new ValueRange();

            var oblist = new List<object>() { "insertEd" };
            valueRange.Values = new List<IList<object>> { oblist };

            var updateRequest = service.Spreadsheets.Values.Update(valueRange, sheet_id, range);
            updateRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.UpdateRequest.ValueInputOptionEnum.USERENTERED;
            var updateReponse = updateRequest.Execute();
        }

        static void deleteEntry()
        {
            var range = $"{sheet}!A2:F2";
            var requestBody = new ClearValuesRequest();

            var deleteRequest = service.Spreadsheets.Values.Clear(requestBody, sheet_id, range);
            var deleteResponse = deleteRequest.Execute();
        }

        static void AppendNewLine()
        {
            var range = $"{sheet}!A:F";
            var valueRange = new ValueRange();

            var oblist = new List<object>() { "upd",  "upd","upd","upd"};
            valueRange.Values = new List<IList<object>> { oblist };

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, sheet_id, range);
            appendRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendReponse = appendRequest.Execute();
        }



    }
}
