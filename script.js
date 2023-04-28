'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){// Функция теперь стала методом объекта
        personalMovieDB.count = +prompt('How many films you have watched ?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How many films you have watched ?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt('Last film you have watched ?','').trim(),
                  b = prompt('Leave rates','');
    
                  if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                  } else {
                    console.log('Error');
                    i--;
                  }
        }
    },
    detectFilmLevel: function(){
        if (personalMovieDB.count <= 10) {
            alert('You have watched few films');
        } else if (personalMovieDB.count <=20) {
            alert('You are classic TV watcher');
        } else {
            alert ('You have film passion');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre number ${i}`);

            if (genre == '' || genre == null){
                console.log('Empty space');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.sort();
            }

        }

        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Favourite genre number ${i + 1} - ${item} `)
        });

    },
   /* showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    }, */
    toggleVisibleDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    

    

};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectFilmLevel(); //На основании количества просмотренных фильмов (personaMovieDB.count), определяется уровень заинтересованности в фильмах

personalMovieDB.writeYourGenres(); //Любимые жанры пользователя

personalMovieDB.toggleVisibleDB(); //Переключатель приватности

console.log(personalMovieDB.count); //Количество просмотренных фильмов

//showMyDB(personalMovieDB.privat);

console.log(personalMovieDB.privat);

