// authUtils.js
import { msalInstance } from '../index'; // Import MSAL instance

export const signIn = async () => {
    console.log("signIn");

    const loginRequest = {
        scopes: ['User.Read']
    };

    try {
        await msalInstance.loginPopup(loginRequest);
        // User signed in successfully
    } catch (error) {
        console.log(error);
    }
};

export const signOut = async () => {
    await msalInstance.logout();
};
