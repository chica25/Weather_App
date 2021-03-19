const key = "GTCAYBb3uEuh2F18AG7qHxMnkiJwdFgs";

const getCity  = async (city) => {
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const queryParameter = `?apikey=${key}&q=${city}`;

    const response = await fetch( baseUrl + queryParameter)
    const data = await response.json();

    return data[0];
};

getCity('london').then(data => console.log(data))
.catch(err => console.log(err))