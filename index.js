const btn = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const APIKEY = "foOjViYRLmeDp8prN3FqLg==K6EHzwakspHrYLfb";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": APIKEY,
    }
}




btn.addEventListener("click", getJokes);

async function getJokes() {
    jokeEl.innerText = "Please Wait....";
    btn.disabled = true;
    btn.innerText = "Loading....";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "Generate a joke";
}
