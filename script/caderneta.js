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

// imprime usuário logado
auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("Usuário logado: ", user.email);
        db.collection("funcionariosCadastrados").doc(user.email).get().then(function (doc) {
            document.querySelector(".confirma").innerHTML = `<p>Usuário: ${doc.data().primeiroNome}</p>`;
        });
    } else {
        console.log("Nenhum usuário logado");
    }
});