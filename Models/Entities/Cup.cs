using System;

namespace ACupOfCoffee.Models.Entities
{
    public class Cup
    {
        public int CupId { get; set; }
        public DateTime CreationTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Duration { get; set; }
    }
}