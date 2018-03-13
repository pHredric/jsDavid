function OldRenderData(movie)
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

function OldChangeStarRating(grade)
{
    console.log("grade är: "+grade);
    for (let index = 1; index <= 5; index++) {
        let star = document.getElementById("star"+index);

        console.log("starX är: "+star.getAttribute("id"));

        if(index <= grade)
        {
            star.setAttribute("class", "filledStars");
        }
        else
        {
            star.setAttribute("class", "emptyStars");
        }
    }
}

function RenderData(movie)
{
    $('#movieImage').attr("src", movie.imgSrc);
    $('#movieTitle').text(movie.title);
    $('#movieDescription').text(movie.description);
    movie.actors.forEach(actorname => {
        $('#movieActors').append("<li>"+actorname+"</li>");;
    });
};

function ChangeStarRating(grade)
{
    console.log("grade är: "+grade);
    //console.log($("#star"+grade).attr('id'))
    for (let index = 1; index <= 5; index++) {
        if(index <= grade)
        {
            $("#star"+index).addClass("filledStars");
        }
        else
        {
            $("#star"+index).removeClass("filledStars");
        }
    }
}

RenderData(movieData);
ChangeStarRating(2);

// document.getElementById("star1").addEventListener("click", function(){
//     ChangeStarRating(1);
// });
// document.getElementById("star2").addEventListener("click", function(){
//     ChangeStarRating(2);
// });
// document.getElementById("star3").addEventListener("click", function(){
//     ChangeStarRating(3);
// });
// document.getElementById("star4").addEventListener("click", function(){
//     ChangeStarRating(4);
// });
// document.getElementById("star5").addEventListener("click", function(){
//     ChangeStarRating(5);
// });

for (let index = 1; index <= 5; index++) {
    $("#star"+index).click(function() {
        ChangeStarRating(index);
    })
}
