const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    const citySpecs = data.citySpecs;
    const weather = data.weather

    details.innerHTML = `
        <h5 class="my-3">${citySpecs.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;C</span>
        </div>
     `;
};


const updateCity = async (city) => {

    const citySpecs = await getCity(city);
    const weather = await getWeather(citySpecs.Key);

    return { citySpecs, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})