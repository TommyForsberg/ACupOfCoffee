using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACupOfCoffee.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ACupOfCoffee.Controllers
{
    [Route("api/[controller]")]
    public class CoffeeDataController : Controller
    {
        private readonly DatabaseContext context;

        public CoffeeDataController(DatabaseContext context )
        {
            this.context = context;
        }


        [HttpGet()]
        public IEnumerable GetAllCoffee()
        {

            return context.Cups;
        }

        [HttpPost]
        public async Task<IActionResult> PostCoffee([FromBody] Cup cup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Cups.Add(cup);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetCups", new { id = cup.CupId }, cup);
        }


    }
}
