﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Assig1.Data;
using Assig1.Models;

namespace Assig1.Controllers
{
    public class OffencesController : Controller
    {
        private readonly ExpiationsContext _context;

        public OffencesController(ExpiationsContext context)
        {
            _context = context;
        }

        // GET: Offences
        public async Task<IActionResult> Index()
        {
            ViewBag.Title = "Offences";
            ViewBag.Active = "Offences";

            var expiationsContext = _context
                .Offences
                .Include(o => o.Section)
                .OrderBy(o => o.OffenceCode);

            return View(await expiationsContext.ToListAsync());
        }

        // GET: Offences/Details/A002
        public async Task<IActionResult> Details(string id)
        {
            ViewBag.Title = "Offences";
            ViewBag.Active = "Offences";
            if (id == null)
            {
                return NotFound();
            }

            var offence = await _context.Offences
                .Include(o => o.Section)
                .FirstOrDefaultAsync(m => m.OffenceCode == id);
            if (offence == null)
            {
                return NotFound();
            }

            return View(offence);
        }

        private bool OffenceExists(string id)
        {
            return _context.Offences.Any(e => e.OffenceCode == id);
        }
    }
}
