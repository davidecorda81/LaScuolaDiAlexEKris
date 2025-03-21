using Microsoft.AspNetCore.Mvc;
using MySchoolApi.Models;

namespace MySchoolApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MathProblemController : ControllerBase
{
    private readonly ILogger<MathProblemController> _logger;

    public MathProblemController(ILogger<MathProblemController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetMathProblem")]
    public IEnumerable<MathProblem> Get(EProfile profile)
    {
        return profile == EProfile.Alex ? GenerateAlexMathProblems() : GenerateKrisMathProblems();
        return Enumerable.Range(1, 5).Select(_ =>
        {
            var operand1 = Random.Shared.Next(0, 100);
            var operand2 = Random.Shared.Next(0, 100);
            return new MathProblem
            {
                Operand1 = operand1,
                Operand2 = operand2,
                Operator = EMathOperation.Add,
                Result = operand1 + operand2,
            };
        })
        .ToArray();
    }

    private IEnumerable<MathProblem> GenerateKrisMathProblems()
    {
        var res = new List<MathProblem>();

        for (int i = 0; i < 10; i++)
        {
            var o1 = Random.Shared.Next(0, 50);
            var o2 = Random.Shared.Next(0, 50);
            var r = Random.Shared.Next(0, 2);
            var op = (EMathOperation)r;
            var result = op == EMathOperation.Add ? o1 + o2 : o1 - o2;

            res.Add(new MathProblem()
            {
                Operand1 = result >= 0 ? o1 : o2,
                Operand2 = result >= 0 ? o2 : o1,
                Operator = op,
                Result = result >= 0 ? result : result * -1
            });
        }
        return res.ToArray();
    }

    private IEnumerable<MathProblem> GenerateAlexMathProblems()
    {
        return new List<MathProblem>().ToArray();
    }
}