function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function displayMovie() {
    const movieTitle = getParameterByName("title");
    const movieContainer = document.getElementById("movie-container");
    const noMovieFoundDiv = document.getElementById("no-movie-found");

    if (!movieTitle) {
        noMovieFoundDiv.style.display = "block";
        movieContainer.style.display = "none";
        return;
    }
    const movieData = getMovieData(movieTitle);

    if (movieData) {
        const downloadUrl = 'download.html' + '?title=' + encodeURIComponent(movieData.title) + '&poster=' + encodeURIComponent(movieData.poster) + '&starcast=' + encodeURIComponent(movieData.starcast) + '&genres=' + encodeURIComponent(movieData.genres) + '&quality=' + encodeURIComponent(movieData.quality) + '&duration=' + encodeURIComponent(movieData.duration) + '&release=' + encodeURIComponent(movieData.release) + '&l480p=' + encodeURIComponent(movieData.l480p) + '&l720p=' + encodeURIComponent(movieData.l720p) + '&l1080p=' + encodeURIComponent(movieData.l1080p);
        document.getElementById('movieTitle').textContent = movieData.title;
        document.getElementById('moviePoster').src = movieData.poster;
        document.getElementById('downloadButton').href = downloadUrl;
        movieContainer.style.display = "block";
        noMovieFoundDiv.style.display = "none";

    } else {
        movieContainer.style.display = "none";
        noMovieFoundDiv.style.display = "block";
    }


}
function getMovieData(title) {
    // This is where you would typically fetch movie data from an API or database.
    // For this example, we'll use a simple hardcoded data lookup.
    const movies = {
      "DEVA":{ title: "Deva",poster: "images/bollywood/Deva.jpeg", starcast: "Shahid Kapoor Pooja Hegde Pavail Gulati",  genres: "Action, Thriller", quality: "Theatre print ", duration: "156 minutes", release: "2025-01-31", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/mwas0yr6z0i1j04/Deva_2025_HDTC_720p_x265_HEVC_Hindi_AAC_2.0_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "FATEH":{ title: "Fateh",poster: "images/bollywood/Fateh.jpeg", starcast: "Sonu Sood, Jacqueline Fernandez",  genres: "Action, Adventure, Drama", quality: "Original ", duration: "127 minutes", release: "2025-01-10", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/4kd5dqs6vt151o2/Fateh_2025_HDRip_720p_Hindi_AAC_2.0_x264_HC-ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "SHAITAAN":{ title: "Shaitaan ",poster: "images/bollywood/Shaitaan .jpeg", starcast: "Ajay Devgn, R. Madhavan, Jyothika Janki, Bodiwala",  genres: "horror, thriller ", quality: "Original ", duration: "124 minutes", release: "2024-03-08", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/nr25xja90msrwsy/Shaitaan_2024_WebRip_720p_x265_HEVC_10bit_Hindi_AAC_5.1_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "SKY FORCE":{ title: "Sky force ",poster: "images/bollywood/Skyforce.jpeg", starcast: "Akshay Kumar, Veer Pahariya, Sara Ali Khan, Nimrat Kaur",  genres: "Action, Adventure, Thriller", quality: "Theatre print ", duration: "125 minutes", release: "2025-01-24", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/y6r3nyxmowvyq5j/Sky_Force_2025_PRE_HDRip_720p_Hindi_AAC_2.0_x264_HC-ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
//tollywood
      "KALKI 2898 AD":{ title: "Kalki 2898 AD",poster: "images/tollywood/Kalki.jpeg", starcast: "Amitabh Bachchan, Kamal Haasan, Prabhas, Deepika Padukone",  genres: "epic science-fiction, action ", quality: "Original ", duration: "181 minutes", release: "2024-06-27", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/l20vfeot6tls1dw/Kalki_2898_AD_2024_WebRip_720p_x265_HEVC_10bit_Hindi_AAC_5.1_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "LUCKY BHASKAR":{ title: "Luck bhaskar ",poster: "images/tollywood/Luckybhaskar .jpeg", starcast: "Dulquer, Salmaan, Meenakshi Chaudhary",  genres: "crime, drama", quality: "Original ", duration: "151 minutes", release: "2024-10-31", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/9cjwntg506as3m8/Lucky_Baskhar_2024_WebRip_720p_Hindi_Telugu_AAC_5.1_x264_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "MAHARAJA":{ title: "Maharaja ",poster: "images/tollywood/Maharaja.jpeg", starcast: "Vijay Sethupathi, Anurag Kashyap, Mamta Mohandas, Natty Subramaniam",  genres: "Thriller, Action, Drama, Crime film", quality: "Original ", duration: "140 minutes", release: "2024-06-14", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/hsmladt1qgti7nm/Maharaja_2024_WebRip_720p_Hindi_Tamil_AAC_5.1_x264_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
      "PUSHPA 2":{ title: "Pushpa 2 ",poster: "images/tollywood/Pushpa2.jpeg", starcast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapathi Babu ,Sunil Rao Ramesh",  genres: "Action, Drama, Thriller", quality: "Original ", duration: "224 minutes", release: "2024-12-05", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/u06akwik0q8meqx/Prmovies-Pushpa_2_Reloaded_Hindi_Dubbed.mkv.mp4/file", l1080p: "notfound.html" },
//hollywood
      "MUFASA THE LION KING":{title: "MUFASA THE LION KING",poster: "images/hollywood/MUFASATHELIONKING.JPEG",starcast: "Tim Robbins, Morgan Freeman, Bob Gunton",genres: "drama, horror",quality: "webdl",duration: "198 min",release: "2025-01-24",l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA"},
      "THE FALL GUY":{title: "THE FALL GUY",poster: "images/hollywood/THEFALLGUY.jpg",starcast: "Tim Robbins, Morgan Freeman",genres: "drama",quality: "bluray",duration: "2h 23min",release: "2023-01-24",l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA"},
      "TWISTERS":{title: "TWISTERS",poster: "images/hollywood/TWISTERS.JPEG",starcast: "Tim Robbins, Morgan Freeman, Bob Gunton",genres: "drama, horror",quality: "webdl",duration: "198 min",release: "2025-01-24",l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA"},
      "GLADIATOR 2":{title: "GLADIATOR 2",poster: "images/hollywood/GLADIATOR2.JPEG",starcast: "Tim Robbins, Morgan Freeman",genres: "drama",quality: "bluray",duration: "2h 23min",release: "2023-01-24",l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA",l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA"}      
// Add more movies here...
    };

    const lowerCaseTitle = title.toUpperCase().trimEnd();

    return movies[lowerCaseTitle] || null;
}

window.onload = displayMovie;