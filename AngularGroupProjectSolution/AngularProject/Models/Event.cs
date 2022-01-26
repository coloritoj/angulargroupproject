using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularProject.Models
{
    public class Event
    {
        public int id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public int maxcapacity { get; set; }
        public bool eventfull { get; set; }

        public static List<Event> getEvents()
        {
            using (EventContext ctx = new EventContext())
            {
                List<Event> events = ctx.Events.ToList();
                return events;
            }
        }

        public static Event addEvent(Event newEvent)
        {
            using (EventContext ctx = new EventContext())
            {
                ctx.Add(newEvent);
                ctx.SaveChanges();
                return newEvent;
            }
        }

        public static bool Delete(int id)
        {
            using (EventContext ctx = new EventContext())
            {
                Event theEvent = new Event();
                theEvent.id = id;
                ctx.Remove(theEvent);
                ctx.SaveChanges();
                return true;
            }
        }
    }

    public class EventContext : DbContext
    {
        public DbSet<Event> Events { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {                                                       // *DON'T FORGET CHANGE DATABASE NAME* //
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=eventsinfo;Integrated Security=SSPI;");
        }
    }
}
