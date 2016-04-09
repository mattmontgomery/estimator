import Firebase from 'firebase';
import config from './config';
const { firebase: firebaseConfig } = config;

export default function firebase(uri) {
    return new Firebase(`${firebaseConfig.url}/${uri}`);
};
