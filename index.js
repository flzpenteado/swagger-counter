const axios = require('axios').default;

const main = async () => {
    const url = 'http://ambev-origens-dev-api.azurewebsites.net/swagger/v1/swagger.json';

    const data = await axios.get(url);

    console.log(Object.entries(data.data.paths).length);
}

main();