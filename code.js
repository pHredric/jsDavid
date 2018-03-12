function RenderData(movie)
{
    let image = document.getElementById('movieImage');
    image.setAttribute("src", movie.imgSrc);

    let title = document.getElementById('movieTitle');
    title.innerText = movie.title;

    let desc = document.getElementById('movieDescription');
    desc.innerText = movie.description;

    let actorlistholder = document.getElementById('movieActors');
    let actorString = "";
    movie.actors.forEach(actorname => {
        actorString += "<li>"+actorname+"</li>";
    });
    actorlistholder.innerHTML = actorString;
}

RenderData(movieData);