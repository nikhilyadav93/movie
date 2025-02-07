const movieContainer = document.getElementById('movieContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn'); let moviesLoaded = 0; // Keep track of loaded movies
const moviesPerPage = 6; // Number of movies to load per click

const allMovies = {
    bollywood: [
        { title: "Deva",poster: "images/bollywood/Deva.jpeg", starcast: "Shahid Kapoor Pooja Hegde Pavail Gulati",  genres: "Action, Thriller", quality: "Theatre print ", duration: "156 minutes", release: "2025-01-31", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/mwas0yr6z0i1j04/Deva_2025_HDTC_720p_x265_HEVC_Hindi_AAC_2.0_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Fateh",poster: "images/bollywood/Fateh.jpeg", starcast: "Sonu Sood, Jacqueline Fernandez",  genres: "Action, Adventure, Drama", quality: "Original ", duration: "127 minutes", release: "2025-01-10", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/4kd5dqs6vt151o2/Fateh_2025_HDRip_720p_Hindi_AAC_2.0_x264_HC-ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Shaitaan ",poster: "images/bollywood/Shaitaan.jpeg", starcast: "Ajay Devgn, R. Madhavan, Jyothika Janki, Bodiwala",  genres: "horror, thriller ", quality: "Original ", duration: "124 minutes", release: "2024-03-08", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/nr25xja90msrwsy/Shaitaan_2024_WebRip_720p_x265_HEVC_10bit_Hindi_AAC_5.1_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Sky force ",poster: "images/bollywood/Skyforce.jpeg", starcast: "Akshay Kumar, Veer Pahariya, Sara Ali Khan, Nimrat Kaur",  genres: "Action, Adventure, Thriller", quality: "Theatre print ", duration: "125 minutes", release: "2025-01-24", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/y6r3nyxmowvyq5j/Sky_Force_2025_PRE_HDRip_720p_Hindi_AAC_2.0_x264_HC-ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
    ],
    tollywood: [
        { title: "Kalki 2898 AD",poster: "images/tollywood/Kalki.jpeg", starcast: "Amitabh Bachchan, Kamal Haasan, Prabhas, Deepika Padukone",  genres: "epic science-fiction, action ", quality: "Original ", duration: "181 minutes", release: "2024-06-27", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/l20vfeot6tls1dw/Kalki_2898_AD_2024_WebRip_720p_x265_HEVC_10bit_Hindi_AAC_5.1_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Luck bhaskar ",poster: "images/tollywood/Luckybhaskar.jpeg", starcast: "Dulquer, Salmaan, Meenakshi Chaudhary",  genres: "crime, drama", quality: "Original ", duration: "151 minutes", release: "2024-10-31", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/9cjwntg506as3m8/Lucky_Baskhar_2024_WebRip_720p_Hindi_Telugu_AAC_5.1_x264_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Maharaja ",poster: "images/tollywood/Maharaja.jpeg", starcast: "Vijay Sethupathi, Anurag Kashyap, Mamta Mohandas, Natty Subramaniam",  genres: "Thriller, Action, Drama, Crime film", quality: "Original ", duration: "140 minutes", release: "2024-06-14", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/hsmladt1qgti7nm/Maharaja_2024_WebRip_720p_Hindi_Tamil_AAC_5.1_x264_ESub_-_mkvCinemas.mkv/file", l1080p: "notfound.html" },
        { title: "Pushpa 2 ",poster: "images/tollywood/Pushpa2.jpeg", starcast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapathi Babu ,Sunil Rao Ramesh",  genres: "Action, Drama, Thriller", quality: "Original ", duration: "224 minutes", release: "2024-12-05", l480p: "notfound.html", l720p: "https://www.mediafire.com/file/u06akwik0q8meqx/Prmovies-Pushpa_2_Reloaded_Hindi_Dubbed.mkv.mp4/file", l1080p: "notfound.html" },
    ],
    hollywood: [
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
    ],
    webseries: [
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
        { title: "The Shawshank Redemption", poster: "images/images.jpeg", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "notfound.html" },
    ],
};

function addMovies(start, end) {
    const page = window.location.pathname.split('/').pop().split('.').shift();
    const movieCategory = allMovies[page];
    for (let i = start; i < end; i++) {
        if (movieCategory[i]) {
            const movie = movieCategory[i];
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="download.html?title=${movie.title}&poster=${movie.poster}&starcast=${movie.starcast}&genres=${movie.genres}&quality=${movie.quality}&duration=${movie.duration}&release=${movie.release}&l480p=${movie.l480p}&l720p=${movie.l720p}&l1080p=${movie.l1080p}" class="download-btn">Download</a>
      `;
            movieContainer.appendChild(movieDiv);
        }
    }
    moviesLoaded = end; //Update number of loaded movies
    if (moviesLoaded >= allMovies[page].length) {
        loadMoreBtn.classList.add('hidden')
    }
}

//Load initial movie cards
addMovies(0, Math.min(moviesPerPage, allMovies[window.location.pathname.split('/').pop().split('.').shift()].length));

//Add click event listener to load more button
loadMoreBtn.addEventListener('click', () => {
    const newEnd = Math.min(moviesLoaded + moviesPerPage, allMovies[window.location.pathname.split('/').pop().split('.').shift()].length)
    addMovies(moviesLoaded, newEnd);
});