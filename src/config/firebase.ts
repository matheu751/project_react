import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDMvfDYciGhPHDPiK85As7NgqmVH9KUFVU",
  authDomain: "social-media-6b5ca.firebaseapp.com",
  projectId: "social-media-6b5ca",
  storageBucket: "social-media-6b5ca.appspot.com",
  messagingSenderId: "658788807242",
  appId: "1:658788807242:web:e40f9fe68bcfbc2edaacb3",
  measurementId: "G-H3KDRJZ7ZY"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()