// const key = "GTCAYBb3uEuh2F18AG7qHxMnkiJwdFgs";
const key = 'EOFYWv1w8poucf9EL0T9Ziv7Ah3fuFjV'
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
