(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genElem = document.getElementById("genre");
    const yearElem = document.getElementById("year");
    const langElem = document.getElementById("language");
    const rateElem = document.getElementById("ratings");
    const btnElem = document.getElementById("button");

    
    function search() {
        const genreQuery = genElem.ariaValueMax.toLowerCase();

        let result = data.filter(function(movie){
            return (movie.genres.join().toLowerCase().includes(genreQuery))
        })

        console.log(result);
    }
    btnElem.addEventListener("click".search);


})