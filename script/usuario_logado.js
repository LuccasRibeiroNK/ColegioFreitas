const firebaseConfig = {
    apiKey: "AIzaSyD9LhOkMOGBBYIjO9uTI7ngy8qrsooDAjU",
    authDomain: "colegio-a6a2a.firebaseapp.com",
    projectId: "colegio-a6a2a",
    storageBucket: "colegio-a6a2a.appspot.com",
    messagingSenderId: "575672051670",
    appId: "1:575672051670:web:4e8de523107bd84470e677",
    measurementId: "G-FJE87GF07T"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let db = firebase.firestore()
console.log(db)

// current user logged in
auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("Usuário logado: ", user.email);
        db.collection("funcionariosCadastrados").doc(user.email).get().then(function (doc) {
            document.querySelector(".confirma").innerHTML = `<p>Olá, ${doc.data().primeiroNome}</p>`;
        });
    } else {
        console.log("Nenhum usuário logado");
    }
});


// logout current user
let btn = document.querySelector("#button5");
btn.addEventListener("click", logout);

function logout() {
    auth.signOut().then(function () {
        console.log("Logged out");
        window.location.href = "./index.html";
    }).catch(function (error) {
        console.log(error);
        console.log("Error logging out");
    });
}