using System;
using System.Globalization;
using CsvHelper;
using MySchoolApi.Models;

namespace MySchoolApi.Services;

public class CsvDataService
{
    private readonly List<WordRecord> germanWords;

    public CsvDataService()
    {
        germanWords = LoadGermanWordsCsv();
    }

    private List<WordRecord> LoadGermanWordsCsv()
    {
        string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Data", "german.csv");

        if (!File.Exists(filePath))
        {
            Console.WriteLine("CSV File Not Found!");
            return new List<WordRecord>();
        }

        using var reader = new StreamReader(filePath);
        using var csv = new CsvReader(reader, new CsvHelper.Configuration.CsvConfiguration(){CultureInfo = CultureInfo.InvariantCulture, Delimiter = ";"});
       

        return new List<WordRecord>(csv.GetRecords<WordRecord>());
    }

    public List<WordRecord> GetGermanWords()
    {
        return germanWords;
    }
}