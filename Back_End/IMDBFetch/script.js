let key = 'e4a1838d';
let allItems = [];
let filter = '';
let thing = document.querySelector('#thing');
let container = document.querySelector('.container');
let text = search.value

thing.addEventListener('click', look);

function look() {
    text = search.value
    filter = text.toLowerCase();
    getAllMovieIDs();
}


function getAllMovieIDs(){
    container.innerHTML = '';

    fetch(`https://www.omdbapi.com/?s=${filter}&apikey=${key}`)
        .then(res => { 
            return res.json();
        })
        .then(res => { 
            res = res.Search.map(oneItem => oneItem.imdbID);
            createCards(res);
        })
        .catch(err =>{
            console.log(err);
        })
}


function createCards(ids){
    for (let i = 0; i < ids.length; i++) {
        const element = ids[i];

        fetch(`https://www.omdbapi.com/?i=${element}&apikey=${key}`)
            .then(res => { 
                return res.json();
            })
            .then(res => { 
                const card = document.createElement('div');
                const title = document.createElement('h3');
                const img = document.createElement('img');
                const desc = document.createElement('div');
                const tomatoRat = document.createElement('div');
                const imdbRat = document.createElement('div');

                card.setAttribute('class', 'card');
                title.setAttribute('class', 'title');
                img.setAttribute('class', 'poster');
                desc.setAttribute('class', 'description');
                tomatoRat.setAttribute('class', 'tomatoRating');
                imdbRat.setAttribute('class','imdbRating');
                
                title.innerHTML = res.Title;
                img.src = res.Poster;
                imdbRat.innerHTML = `IMDB Rating: ${res.imdbRating}`
                tomatoRat.innerHTML = `${res.Ratings.map(rating => 
                    `<div class='col'>${rating.Source}: ${rating.Value}</div>`
                )}`.split(',').join('')

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(imdbRat);
                card.appendChild(tomatoRat);

                container.appendChild(card);
            })
    }

}

