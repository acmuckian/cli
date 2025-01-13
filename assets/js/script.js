const API_Key = "--kKjpZiw93h4lG-2739keRmeKA";
const API_URL = "https://ci-jshint.herokuapp.com/";
const resultsModal = new bootstrap.modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString =`${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();
}

if (response.ok) {
    console.log(data);
}