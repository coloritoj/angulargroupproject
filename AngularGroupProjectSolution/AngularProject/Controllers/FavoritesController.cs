using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AngularProject.Models;


namespace AngularProject.Controllers
{
    [Route("favorites")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        [HttpGet]
        public List<Favorite> getAll()
        {
            return Favorite.listFavorites();
        }

        [HttpPost]
        public Favorite addToFavorites(Favorite favoritedevent)
        {
            return Favorite.addToFavorites(favoritedevent);
        }

        [HttpDelete]
        public bool RemoveFav(int id)
        {
            return Favorite.RemoveFav(id);
        }
    }
}
