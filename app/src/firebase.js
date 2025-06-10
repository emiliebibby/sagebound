// Firebase configuration and initialization for Vue app
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfYRstFecfxowrE0MQhyDWHSPYGgLPT2w",
  authDomain: "sagebound-a43a3.firebaseapp.com",
  projectId: "sagebound-a43a3",
  storageBucket: "sagebound-a43a3.appspot.com",
  messagingSenderId: "612564441473",
  appId: "1:612564441473:web:0d013dfdb4d6fa5a27b080",
  measurementId: "G-XS45KT3RT8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
