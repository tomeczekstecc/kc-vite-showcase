import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://my-kc.codderzz.com/auth', // Keycloak base URL
    realm: 'myrealm', // Your realm name
    clientId: 'kc-vite' // Your client ID

});

export default keycloak;
