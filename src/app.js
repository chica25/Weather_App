const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    // const citySpecs = data.citySpecs;
    // const weather = data.weather

    const { citySpecs, weather } = data;

    details.innerHTML = `
        <h5 class="my-3">${citySpecs.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;C</span>
        </div>
     `;

        const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
        icon.setAttribute('src', iconSrc);
        
        let timeSource = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
        time.setAttribute('src', timeSource);
     
        if(card.classList.contains('d-none')){
         card.classList.remove('d-none');
     }

};


const updateCity = async (city) => {

    const citySpecs = await getCity(city);
    const weather = await getWeather(citySpecs.Key);

    return { citySpecs, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})