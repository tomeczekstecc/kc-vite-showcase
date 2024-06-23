import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import keycloak from './kc.ts';

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
    if (!authenticated) {
        window.location.reload();
    } else {
        console.log('Authenticated');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    // Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then(refreshed => {
            if (refreshed) {
                console.log('Token refreshed');
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                console.warn('Token not refreshed, valid for ' + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.error('Failed to refresh token');
        });
    }, 60000);

}).catch(error => {
    console.error('Keycloak initialization failed', error);
});
