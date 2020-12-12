/**
 *
 * Authenticator
 *
 */
import KeyCloak from './keycloak';
import KeyCloadJson from './keycloak.json';

class Authenticator {
  constructor() {
    return new Promise((resolve, reject) => {
      const keycloak = KeyCloak(KeyCloadJson);
      // if (process.env.NODE_ENV !== 'development') {
      keycloak
        .init({ onLoad: 'login-required', checkLoginIframe: false })
        .success(authenticated => {
          if (authenticated) {
            resolve(keycloak.token);
          }
        })
        .error(err => {
          reject(err);
        });
      // }
    });
  }
}
export default Authenticator;
