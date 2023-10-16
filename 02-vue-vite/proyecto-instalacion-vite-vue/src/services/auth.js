import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

/**
 * Inicia sesión
 * @param {{email: string, password: string}} user 
 * @returns {Promise}
 */
export function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            //console.log("[auth.js login] Sesión iniciada, las credenciales son:", userCredentials)
            setUserData({
                id: userCredentials.user.uid,
                email: userCredentials.user.email,
            });

            return {...userData};
        })
        .catch(error => {
            return {
                code: error.code,
                message: error.message,
            }
        });
}



