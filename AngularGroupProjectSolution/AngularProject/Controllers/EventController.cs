using AngularProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Controllers
{
    [Route("event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        [HttpGet]
        public List<Event> getAll()
        {
            return Event.getEvents();
        }

        [HttpPost]
        public Event addEvent(Event newEvent)
        {
            return Event.addEvent(newEvent);
        }
        
        [HttpDelete]
        public bool Delete(int id)
        {
            return Event.Delete(id);
        }
        
    }
}
