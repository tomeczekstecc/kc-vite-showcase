import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080/auth', // Keycloak base URL
    realm: 'your-realm', // Your realm name
    clientId: 'my-vite-app' // Your client ID
});

export default keycloak;
