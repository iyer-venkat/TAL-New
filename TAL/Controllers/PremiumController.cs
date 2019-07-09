using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TAL.Models;

namespace TAL.Controllers
{
    [Route("api/[controller]")]
    public class PremiumController : Controller
    {
        [HttpPost]
        public IActionResult Calculate([FromBody] Client client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var calculatedPremium = client.SumAssured * client.RiskFactor * client.Age / 1000 * 12;
                return Ok(calculatedPremium);
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
