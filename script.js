'use strict';


let numberOfFilms;

function start(){
    let numberOfFilms = +prompt('How many films you have watched ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN()){
        numberOfFilms = +prompt('How many films you have watched ?', '');
    }
}

start();

let personalMovieDB = {
    filmsWatched: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Last film you have watched ?','').trim();
              b = prompt('Leave rates','');

              if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
              } else {
                console.log('Error');
                i--;
              }
    }
}

rememberMyFilms();

function detectFilmLevel(){
    if (numberOfFilms <= 10) {
        alert('You have watched few films');
    } else if (numberOfFilms <=20) {
        alert('You are classic TV watcher');
    } else {
        alert ('You have film passion');
    }
}

detectFilmLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB.privat);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
    }
}

writeYourGenres();




console.log(personalMovieDB);