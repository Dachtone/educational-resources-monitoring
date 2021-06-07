using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using ERM.Backend.Entities;
using ERM.Backend.Handler;
using ERM.Backend.Handler.Files;

namespace ERM.Backend.API.Controllers
{
    [ApiController]
    [Route("api/files")]
    public class FilesController : ControllerBase
    {
        private readonly ILogger<FilesController> _logger;

        public FilesController(ILogger<FilesController> logger)
        {
            _logger = logger;
        }

        [HttpGet("get-all-directions")]
        public IEnumerable<Direction> GetAllNames()
        {
            DirectionInfo filesNames = new DirectionInfo();
            return filesNames.GetAllDirections();
        }

        [HttpGet("get-all-directions-subjects")]
        public Dictionary<string, Dictionary<string, List<object>>> GetAllDirectionsSubjects()
        {
            Subjects subjects = new Subjects();
            return subjects.GetAll();
        }
    }
}
