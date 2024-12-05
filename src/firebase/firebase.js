// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc,getDocs,getDoc,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3YLLkFV8cef1SETPU0zk8jHB0ilzLHwA",
    authDomain: "proyectofinalreactjs-155b7.firebaseapp.com",
    projectId: "proyectofinalreactjs-155b7",
    storageBucket: "proyectofinalreactjs-155b7.firebasestorage.app",
    messagingSenderId: "1032786700330",
    appId: "1:1032786700330:web:0b41366973af5c0d0fbb53",
    measurementId: "G-84NE5MTBTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getSingleProduct(id){
    const documentRef = doc(db,'productos',id)

    try {
        const snapshot = await getDoc(documentRef)
        if (snapshot.exists()){
            return {id:snapshot.id,...snapshot.data()}
        }else console.log("el documento no existe")
        
    } catch (error) {
        console.error("error al obtener el documento",error)
    }
}

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db,'productos'))
        if (querySnapshot.size !==0){
            const productsList = querySnapshot.docs.map((docu)=> {
                return {
                    stock: docu.stock,
                    id: docu.id,
                    ...docu.data()
                }
            })
            return productsList
        }else {
            console.log("coleccion vacia")
        }
    } catch (error) {
        console.error("error al obtener el documento",error)
    }
}

export async function filterProducts() {
    try {
        const filteredQuery = query(collection(db,'productos'),where('category','=',category))
        const querySnapshot = await getDocs((filteredQuery))
        if (querySnapshot.size !==0){
            const productsList = querySnapshot.docs.map((docu)=> {
                return {
                    cat: docu.category,
                    ...docu.data()
                }
            })
            return productsList
        }else {
            console.log("coleccion vacia")
        }
    } catch (error) {
        console.error("error al obtener el documento",error)
    }
}