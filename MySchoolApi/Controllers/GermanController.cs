using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySchoolApi.Models;
using MySchoolApi.Services;
using OpenAI.Chat;
using System.Linq;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class GermanController : ControllerBase
    {
        private readonly ILogger<GermanController> _logger;
        private readonly IConfiguration configuration;

        private readonly CsvDataService csvDataService;

        public GermanController(ILogger<GermanController> logger,  IConfiguration configuration, CsvDataService csvDataService)
        {
            _logger = logger;
            this.configuration = configuration;
            this.csvDataService = csvDataService;
        }

        [HttpGet(Name = "GetWords")]
        public List<WordRecord> GetAsync()
        {
            var random = new Random();
            return csvDataService.GetGermanWords().OrderBy(_ => random.Next()).Take(10).ToList();
        }
    }
}

