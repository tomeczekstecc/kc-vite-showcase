import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: import.meta.env.VITE_KC_URL, // Your Keycloak URL
    realm: import.meta.env.VITE_KC_REALM , // Your realm name
    clientId: import.meta.env.VITE_KC_CLIENT_ID // Your client ID

});

export default keycloak;
