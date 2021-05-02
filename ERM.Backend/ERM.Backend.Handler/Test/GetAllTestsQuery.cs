using System.Collections.Generic;
using ERM.Backend.Entities;

namespace ERM.Backend.Handler
{
    public class GetAllTestsQuery
    {
        public IEnumerable<Test> Run()
        {
            return new List<Test>()
            {
                new Test()
                {
                    Number = 10,
                    Text = "Testing"
                },
                new Test()
                {
                    Number = 5,
                    Text = "Not a Number"
                }
            };
        }
    }
}
