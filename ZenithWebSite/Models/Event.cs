using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ZenithWebSite.Models
{
    public class Event
    {

        public int EventId { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Event Start Time"), Required]
        public DateTime EventFrom { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Event End Time"), Required]
        public DateTime EventTo { get; set; }

        [Display(Name = "Created by")]
        [ScaffoldColumn(false)]
        public string Username { get; set; }

        [Display(Name = "Activity"), Required]
        public int ActivityId { get; set; }

        [Display(Name = "Activity")]
        public virtual Activity Activity { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Created on"), Required]
        public DateTime CreationDate { get; set; }

        [Display(Name = "Is Active"), Required]
        public bool IsActive { get; set; }
    }
}
