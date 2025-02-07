const params = new URLSearchParams(window.location.search); // Gets params from url
var title, poster;
var starcast, genres, quality, duration, release;
var l1, l2, l3;
for (const [key, value] of params.entries()) {
    const para = document.createElement('p');
    para.textContent = `${key}: ${value}`;

    if (key == "title")
        title = value;
    else if (key == "poster")
        poster = value;
    else if (key == "starcast")
        starcast = value;
    else if (key == "genres")
        genres = value;
    else if (key == "quality")
        quality = value;
    else if (key == "duration")
        duration = value;
    else if (key == "release")
        release = value;
    else if (key == "l480p")
        l1 = value;
    else if (key == "l720p")
        l2 = value;
    else if (key == "l1080p")
        l3 = value;
}
var imag = document.getElementById('forimg');
imag.src = poster;
document.getElementById('movietitle').innerText = title;
document.getElementById('starc').innerText = starcast;
document.getElementById('genre').innerText = genres;
document.getElementById('qualit').innerText = quality;
document.getElementById('duratio').innerText = duration;
document.getElementById('releas').innerText = release;
document.getElementById('link1').href = l1;
document.getElementById('link2').href = l2;
document.getElementById('link3').href = l3;