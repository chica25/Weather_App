const cityForm = document.querySelector('.change-location');

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
    .then(data => console.log(data))
    .catch(err => console.log(err));
})