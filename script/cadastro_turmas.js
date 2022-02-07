const firebaseConfig = {
    apiKey: "AIzaSyD9LhOkMOGBBYIjO9uTI7ngy8qrsooDAjU",
    authDomain: "colegio-a6a2a.firebaseapp.com",
    projectId: "colegio-a6a2a",
    storageBucket: "colegio-a6a2a.appspot.com",
    messagingSenderId: "575672051670",
    appId: "1:575672051670:web:4e8de523107bd84470e677",
    measurementId: "G-FJE87GF07T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let db = firebase.firestore();

let btn = document.querySelector("button");
btn.addEventListener("click", cadastraTurmas);

let newTurmaNome = document.querySelector(".turma");
let newAnoTurma = document.querySelector(".ano");

function cadastraTurmas() {
    let nome = newTurmaNome.value.toUpperCase();
    let ano = newAnoTurma.value + "º";

    db.collection("turmas").doc(`${ano}` + `${nome}`).set({

    });
    console.log("Documento inserido com sucesso");
}