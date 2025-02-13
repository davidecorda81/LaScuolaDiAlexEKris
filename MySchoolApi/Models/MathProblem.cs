namespace MySchoolApi.Models;

public class MathProblem
{
    public int Operand1 { get; set; }

    public int Operand2 { get; set; }

    public EMathOperation Operator {get; set;}

    public int Result { get; set; }
}
