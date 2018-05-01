using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACupOfCoffee.Models.Entities
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Cup> Cups { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
    }
}


