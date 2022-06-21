import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDCY5oD_e2ZVWZ4uEZ4SDItW7qh-L88c5Q",
    authDomain: "zeta-ecommerce.firebaseapp.com",
    projectId: "zeta-ecommerce",
    storageBucket: "zeta-ecommerce.appspot.com",
    messagingSenderId: "816917210781",
    appId: "1:816917210781:web:786365e0816b73da9f9674",
    measurementId: "G-XZ81W3G0SG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionName = {
    products: "products",
    orders: "orders"
}