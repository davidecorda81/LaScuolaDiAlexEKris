using System;
using System.Globalization;
using CsvHelper;
using MySchoolApi.Models;

namespace MySchoolApi.Services;

public class CsvDataService
{
    private readonly List<WordRecord> germanWords;
    private readonly List<SyllablesRecord> syllables;

    public CsvDataService()
    {
        germanWords = LoadCsv<WordRecord>("german.csv");
        syllables = LoadCsv<SyllablesRecord>("syllables.csv");;
    }

    private List<T> LoadCsv<T>(string filename)
    {
        string filePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Data", filename);

        if (!File.Exists(filePath))
        {
            Console.WriteLine("CSV File Not Found!");
            return new List<T>();
        }

        using var reader = new StreamReader(filePath);
        using var csv = new CsvReader(reader, new CsvHelper.Configuration.CsvConfiguration(CultureInfo.InvariantCulture){Delimiter = ";"});
       

        return new List<T>(csv.GetRecords<T>());
    }

    public List<WordRecord> GetGermanWords()
    {
        return germanWords;
    }

    public List<SyllablesRecord> GetSyllables()
    {
        return syllables;
    }
}