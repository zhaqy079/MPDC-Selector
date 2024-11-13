using System;
using System.ComponentModel.DataAnnotations;
using Assig2.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Assig2.ViewModel
{
	public class RecommendedLocationViewModel
	{
        public string Suburb { get; set; }
        public string RoadName { get; set; }
        public string LocalServiceArea { get; set; }
        public int OffenceCount { get; set; }
    }
}

