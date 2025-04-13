using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySchoolApi.Models;
using MySchoolApi.Services;
using OpenAI.Chat;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItalianController : ControllerBase
    {
        private readonly ILogger<ItalianController> _logger;
        private readonly IConfiguration configuration;
        private readonly CsvDataService csvDataService;

        public ItalianController(ILogger<ItalianController> logger, IConfiguration configuration, CsvDataService csvDataService)
        {
            _logger = logger;
            this.configuration = configuration;
            this.csvDataService = csvDataService;
        }

        [HttpGet("Syllables")]
        public List<SyllablesRecord> GetSyllablesAsync()
        {
            var random = new Random();
            return csvDataService.GetSyllables().OrderBy(_ => random.Next()).Take(5).ToList();
        }

        [HttpGet("Story")]
        public Story GetStoryAsync()
        {
            ChatClient client = new(
                model: "gpt-4o",
                apiKey: configuration["OpenAIKey"]
            );

            List<ChatMessage> messages =
            [
                new SystemChatMessage("Sei un narratore di storie creative."),
                new UserChatMessage("Scrivi una breve storia per bambini di 100 parole. Crea anche un titolo per questa storia. Formatta la risposta così: <titolo>$$$<storia>")
            ];

            ChatCompletion completion = client.CompleteChat(messages, new ChatCompletionOptions { MaxOutputTokenCount = 200 });
            var text = completion.Content[0].Text;
            _logger.LogDebug(text);
            if (text.Contains("$$$"))
            {
                var splittedText = text.Split("$$$");
                return new Story
                {
                    Title = splittedText[0],
                    Content = splittedText[1]
                };
            }

            return new Story
            {
                Title = "",
                Content = text
            };
        }
    }
}

