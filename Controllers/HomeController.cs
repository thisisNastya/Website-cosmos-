using onesite.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace onesite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult History()
        {
            return View();
        }
        public IActionResult Objectspace()
        {
            return View();
        }
        public IActionResult Astronauts()
        {
            return View();
        }
        public IActionResult Spaceand()
        {
            return View();
        }
        public IActionResult FAQ()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Objectspaceasteroid()
        {
            return View();
        }
        public IActionResult Objectspacestar()
        {
            return View();
        }
        public IActionResult Objectspaceplanet()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
