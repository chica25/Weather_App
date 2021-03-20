const cityForm = document.querySelector('.change-location');

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    updateCity(city);
})