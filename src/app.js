const key = "GTCAYBb3uEuh2F18AG7qHxMnkiJwdFgs";
// get weather info

const getWeather = async (id) => {
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const queryParameter = `${id}?apikey=${key}`;
   
const response = await fetch(baseUrl + queryParameter);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParameter = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + queryParameter);
    const data = await response.json();
    
    return data[0];
};

getCity('new york').then(data => {
    return getWeather(data.Key)
}).then(data => {
    console.log(data);
}).catch(err => console.log(err))


// getWeather("349727");