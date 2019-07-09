using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAL.Models
{
    public class Client
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public decimal SumAssured { get; set; }
        public decimal RiskFactor { get; set; }
    }
}
