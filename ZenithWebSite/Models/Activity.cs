using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ZenithWebSite.Models
{
    public class Activity
    {
        public int ActivityId { get; set; }

        [Display(Name = "Activity Description"), Required]
        public string ActivityDescription { get; set; }

        [ScaffoldColumn(false)]
        public DateTime CreationDate { get; set; }

        public List<Event> Events { get; set; }
    }
}
