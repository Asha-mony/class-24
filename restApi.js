function loadData() {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(countries) {
    // console.log(countries);
    const mainContainer = document.getElementById("container");
    // countries.forEach((country) => console.log(country.name.common));
    countries.forEach((country) => {
        const div = document.createElement("div");
        div.innerHTML=`
        <img src="${country.flags.png}"/>
        <h1>Name:${country.name.common}</h1>
        <h1>Populatio:${country.population}</h1>
        <button onclick="loadSingleCountryDetails(${country.ccn3})">Details</button>
        `
        mainContainer.appendChild(div);
    });
}

function loadSingleCountryDetails(code) {
// console.log(code);
fetch(`https://restcountries.com/v3.1/alpha/${code}`)
.then((res) => res.json())
.then((data) => displaydetails(data));
}

function displaydetails(SingleCountryDetails) {
console.log(SingleCountryDetails);
const detailsField = document.getElementById('details');

detailsField.innerHTML= "";

for(const data of SingleCountryDetails) {

    const div = document.createElement("div");
    div.innerHTML = `

    <img src="${data.flags.png}"/>
    <h1>${data.name.common}</h1>
    `;
    detailsField.appendChild(div);
}


document.documentElement.scrollTop = 0;

}

loadData();