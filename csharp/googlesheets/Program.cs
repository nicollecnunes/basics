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
            var range = $"{sheet}!A2:A8"; //onde precisamos de acesso
            var request = service.Spreadsheets.Values.Get(sheet_id, range);

            var response = request.Execute(); //faz a request e recebe o retorno
            var values = response.Values; //pega os valores obtidos

            var count = 2;

            if (values != null && values.Count>0) //checando se obtivemos valores validos
            {
                foreach (var column in values) //vai percorrer as linhas dos valores
                {
                    foreach (var row in column)
                    {
                        if (row.ToString() ==  "nicolle.nunes2")
                        {
                            Console.WriteLine("achei {0}, está na linha {1}", row, count);
                        }
                        Console.WriteLine("não é {0}, está na linha {1}", row, count);
                        count = count + 1;
                        
                    }
                    
                }
            }
        }

        static int readReturn(string InputRange)
        {
            var range = $"{sheet}!{InputRange}"; //onde precisamos de acesso
            var request = service.Spreadsheets.Values.Get(sheet_id, range);

            var response = request.Execute(); //faz a request e recebe o retorno
            var values = response.Values; //pega os valores obtidos

            if (values != null && values.Count>0) //checando se obtivemos valores validos
            {
                foreach (var row in values) //vai percorrer as linhas dos valores
                {
                    return Int16.Parse(row[0].ToString()); 
                }
            }
            return 2;
        }

        static void createEntry()
        {
            var range = $"{sheet}!B2";
            var valueRange = new ValueRange();

            var oblist = new List<object>() {DateTime.Now};
            valueRange.Values = new List<IList<object>> { oblist };

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, sheet_id, range);
            appendRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendReponse = appendRequest.Execute();
        }

        static void updateEntry()
        {
            var range = $"{sheet}!B2";
            var valueRange = new ValueRange();

            var oblist = new List<object>() {DateTime.Now.ToString("dd/MM/yyyy HH:mm")};
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

            var oblist = new List<object>() { "nicolffdfd99", "Nico","0","0", "0", "0", "0"};
            valueRange.Values = new List<IList<object>> { oblist };

            var appendRequest = service.Spreadsheets.Values.Append(valueRange, sheet_id, range);
            appendRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;
            var appendReponse = appendRequest.Execute();
        }

        static void PeriodoMenorMaior()
        {
            var r1 = readReturn("B2");
            var r2 = Convert.ToDateTime(r1).AddDays(30);
            Console.WriteLine("o valor era {0}, +30 dias = {1}", r1, r2);
            if (Convert.ToDateTime(r2) < DateTime.Now)
            {
                Console.WriteLine("{0} é menor que agora", r1.ToString());
            }else if (Convert.ToDateTime(r2) > DateTime.Now)
            {
                Console.WriteLine("{0} é maior que agora", r1.ToString());
            }

        }

        static void AddPontos(int Linha, int Pontos, string Coluna)
        {
            var celula = "" + Coluna + Linha;
            var inicio = readReturn(celula);
            
            Console.WriteLine("{0}", celula);

            var range = $"{sheet}!{celula}";
            var valueRange = new ValueRange();

            inicio = Pontos + inicio;
            Console.WriteLine("{0}", inicio);
            var oblist = new List<object>() {inicio};
            valueRange.Values = new List<IList<object>> { oblist };

            var updateRequest = service.Spreadsheets.Values.Update(valueRange, sheet_id, range);
            updateRequest.ValueInputOption = SpreadsheetsResource.ValuesResource.UpdateRequest.ValueInputOptionEnum.USERENTERED;
            var updateReponse = updateRequest.Execute();
        }



    }
}
