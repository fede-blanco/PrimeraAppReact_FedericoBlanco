import * as firebase from "firebase/app"; //import * as firebase from "firebase/app"; >>> asi se hacia antes de la verdion 8 de firestore
import "firebase/firestore";
const app = firebase.initializeApp(
  //Este es el ojeto de la configuracion que se saca de la pagina de firebase que es la config de nuestra aplicacion puntualmente >>> sacar solo el objeto
  {
    apiKey: "AIzaSyA2d_G-U54a9yQvx93IhwcWB6QY5BUayxY",
    authDomain: "react-federicoblanco-1.firebaseapp.com",
    projectId: "react-federicoblanco-1",
    storageBucket: "react-federicoblanco-1.appspot.com",
    messagingSenderId: "613257978151",
    appId: "1:613257978151:web:77d9b5a5be66d71bed4902",
  }
);

//exportamos estas funciones para poder importarlas en cualquier archivo

//esta funcion permite inicializar la conexion con firebase
export function getFirebase() {
  return app;
}

//esta funcion va a permitir conectarse a la base de datos
export function getFirestore() {
  return firebase.firestore(app);
}
