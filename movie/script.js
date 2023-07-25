
let left_btn = document.getElementsByClassName('fa-arrow-left')[0];
let right_btn = document.getElementsByClassName('fa-arrow-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search2 = document.getElementsByClassName('search2')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', () => {
  cards.scrollLeft -= 200;

})
right_btn.addEventListener('click', () => {
  cards.scrollLeft += 200;

})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { Title, Year, Genre, Url, Poster, imdbRating } = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = Url;
      card.innerHTML = `
      <img src="${Poster}" alt="${Title}" class="poster">
                    <div class="restcard">
                        <img src="${Poster}" alt="">
                        <div class="contt">
                            <h4>${Title}</h4>
                            <div class="sub">
                                <p>${Genre} ${Year}</p>
                                <h3><span>IMBD</span><i class="fa-solid fa-star"></i>${imdbRating}</h3>
                            </div>
                        </div>
                    </div>
                    `
      cards.appendChild(card);
    });


    document.getElementById('title').innerText = data[0].Title;
    document.getElementById('gen').innerText = data[0].Genre;
    document.getElementById('date').innerText = data[0].Year;
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="fa-solid fa-star"></i>${data[0].imdbRating}`;

    data.forEach(element => {
      let { Title, Year, Genre, Url, Poster, imdbRating } = element;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = Url;
      card.innerHTML = `
      
      <img src="${Poster}" alt="">
      <div class="content">
          <h3>${Title}</h3>
          <p>${Genre}, ${Year},<span>IMDB</span><i class="fa-solid fa-star"></i>${imdbRating}</p>
      </div>
         `
      search2.appendChild(card)

    })
    search_input.addEventListener("keyup", () => {
      let filter = search_input.value.toUpperCase();
      let a = search2.getElementsByTagName('a');

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('content')[0];
        let TextValue = b.textContent || b.innerText
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
          a[index].style.display = "flex";
          search2.style.visibility = "visible";
          search2.style.opacity = 1;
        } else {
          a[index].style.display = "none";
        }
        if (search_input.value == 0) {
          search2.style.visibility = "hidden";
          search2.style.opacity = 0;
        }
      }
    })
    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');
    play.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        play.innerHTML = `play <i class="fa-solid fa-circle-pause"></i>`
      } else {
        play.innerHTML = `watch <i class="fa-solid fa-circle-play"></i>`
        video.pause();
      }

    })

    let series = document.getElementById('series');
    let movies = document.getElementById('movies');
    let kid = document.getElementById('kid');

    series.addEventListener('click', () => {
      cards.innerHTML = "";

      let series_array = data.filter(ele => {
        return ele.Type === "Web-Series";
      })
      series_array.forEach((ele, i) => {
        let { Title, Year, Genre, Url, Poster, imdbRating } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = Url;
        card.innerHTML = `
        <img src="${Poster}" alt="${Title}" class="poster">
                      <div class="restcard">
                          <img src="${Poster}" alt="">
                          <div class="contt">
                              <h4>${Title}</h4>
                              <div class="sub">
                                  <p>${Genre} ${Year}</p>
                                  <h3><span>IMBD</span><i class="fa-solid fa-star"></i>${imdbRating}</h3>
                              </div>
                          </div>
                      </div>
                      `
        cards.appendChild(card);
      });
    })
    movies.addEventListener('click', () => {
      cards.innerHTML = "";

      let movie_array = data.filter(ele => {
        return ele.Type === "movie";
      })
      movie_array.forEach((ele, i) => {
        let { Title, Year, Genre, Url, Poster, imdbRating } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = Url;
        card.innerHTML = `
        <img src="${Poster}" alt="${Title}" class="poster">
                      <div class="restcard">
                          <img src="${Poster}" alt="">
                          <div class="contt">
                              <h4>${Title}</h4>
                              <div class="sub">
                                  <p>${Genre} ${Year}</p>
                                  <h3><span>IMBD</span><i class="fa-solid fa-star"></i>${imdbRating}</h3>
                              </div>
                          </div>
                      </div>
                      `
        cards.appendChild(card);
      });
    });
    kid.addEventListener('click', () => {
      cards.innerHTML = "";

      let kid_array = data.filter(ele => {
        return ele.Type === "kids";
      })
      kid_array.forEach((ele, i) => {
        let { Title, Year, Genre, Url, Poster, imdbRating } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = Url;
        card.innerHTML = `
        <img src="${Poster}" alt="${Title}" class="poster">
                      <div class="restcard">
                          <img src="${Poster}" alt="">
                          <div class="contt">
                              <h4>${Title}</h4>
                              <div class="sub">
                                  <p>${Genre} ${Year}</p>
                                  <h3><span>IMBD</span><i class="fa-solid fa-star"></i>${imdbRating}</h3>
                              </div>
                          </div>
                      </div>
                      `
        cards.appendChild(card);
      });
    })


  });





