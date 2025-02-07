//search suggestion

const searchInput = document.getElementById('searchInput');
const suggestionList = document.getElementById('suggestionList');
const suggestionsContainer = document.querySelector(".suggestions");
const availableSuggestions = [
    "Fateh", "Sky Force", "Shaitaan", "Deva", "Gladiator 2", "Mufasa The Lion King", "The Fall Guy",
    "Pushpa 2", "Twisters", "Kalki 2898 AD", "Lucky Bhaskar", "Maharaja",
];
searchInput.addEventListener('input', function () {
    const inputValue = searchInput.value.toLowerCase();
    const filteredSuggestions = availableSuggestions.filter(item =>
        item.toLowerCase().startsWith(inputValue)
    );

    // Display suggestions
    if (inputValue && filteredSuggestions.length > 0) {
        showSuggestions(filteredSuggestions);
    } else {
        hideSuggestions();
    }
});

function showSuggestions(suggestions) {
    suggestionList.innerHTML = ''; // Clear previous suggestions

    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        listItem.addEventListener('click', () => {
            searchInput.value = suggestion;
            hideSuggestions();
        });

        suggestionList.appendChild(listItem);
    });
    suggestionsContainer.classList.add('show');
}


function hideSuggestions() {
    suggestionsContainer.classList.remove('show');
}

//Hide the suggestions on clicking outside of the datalist
document.addEventListener('click', function (event) {
    if (event.target !== searchInput && !suggestionsContainer.contains(event.target)) {
        hideSuggestions();
    }
});

//index movies
const movies = {
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
        { title: "MUFASA THE LION KING", poster: "images/hollywood/MUFASATHELIONKING.JPEG", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA" },
        { title: "THE FALL GUY", poster: "images/hollywood/THEFALLGUY.jpg", starcast: "Tim Robbins, Morgan Freeman", genres: "drama", quality: "bluray", duration: "2h 23min", release: "2023-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA" },
        { title: "TWISTERS", poster: "images/hollywood/TWISTERS.JPEG", starcast: "Tim Robbins, Morgan Freeman, Bob Gunton", genres: "drama, horror", quality: "webdl", duration: "198 min", release: "2025-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA" },
        { title: "GLADIATOR 2", poster: "images/hollywood/GLADIATOR2.JPEG", starcast: "Tim Robbins, Morgan Freeman", genres: "drama", quality: "bluray", duration: "2h 23min", release: "2023-01-24", l480p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l720p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA", l1080p: "https://photos.app.goo.gl/B7Eo1HihdoZQzfSDA" },
    ]
    // Add more movies here...
};

function loadMovies() {
    for (i = 1; i <= 3; i++) {
        const movieListDiv = (i==1)?document.getElementById("movieList1"):(i==2)?document.getElementById("movieList2"):document.getElementById("movieList3");
        movieListDiv.innerHTML = '';  // Clear existing movies
        const page = (i==1)?"bollywood":(i==2)?"tollywood":"hollywood";
        const movieCategory = movies[page];
        if (movieCategory) {
            movieCategory.forEach(movie => {
                const movieItem = document.createElement("div");
                movieItem.classList.add("movie");
                movieItem.innerHTML = `
        <img src="${movie.poster || 'https://via.placeholder.com/150'}" alt="${movie.title || 'Movie Poster'}">
        <h3>${movie.title || 'Movie Title'}</h3>
        <a href="download.html?title=${movie.title}&poster=${movie.poster}&starcast=${movie.starcast}&genres=${movie.genres}&quality=${movie.quality}&duration=${movie.duration}&release=${movie.release}&l480p=${movie.l480p}&l720p=${movie.l720p}&l1080p=${movie.l1080p}">Download</a>
        `;
                movieListDiv.appendChild(movieItem);
            });
        } else {
            movieListDiv.innerHTML = "<p>No movies found for this category.</p>"
        }
    }
}

loadMovies();

//bolly holly tolly web buttons

// function openNewPage(i) {
//     if (i == 1)
//         window.location.href = "bollywood.html";
//     else if (i == 2)
//         window.location.href = "hollywood.html";
//     else if (i == 3)
//         window.location.href = "tollywood.html";
//     else if (i == 4)
//         window.location.href = "webseries.html";
//     // Load in the same tab
//     // window.open("newpage.html", "_blank"); // Open in a new tab
// }