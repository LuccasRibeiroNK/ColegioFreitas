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
btn.addEventListener("click", loginUsuario);

// test login

let email = document.querySelector(".email");
let senha = document.querySelector(".senha");

// db.collection("funcionariosCadastrados").get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         console.log(doc.id, " => ", doc.data());
//     });
// });



function loginUsuario() {
    auth.signInWithEmailAndPassword(email.value, senha.value).then(function (user) {
        if (user) {
            db.collection("funcionariosCadastrados").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    document.querySelector(".confirma").innerHTML = `<p>Usuário loggado: ${doc.data().primeiroNome}</p>`;
                    window.location.href = "./area_secretaria.html";
                });
            });
        }
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Erro ao cadastrar o usuário: " + errorCode);
        console.log(errorMessage);
        document.querySelector(".confirma").innerHTML = `<p>Usuário ou Senha inválidos</p>`;
    });
}






// ----------------------------------------------------------------------------------
// function loginUsuario() {
//     auth.signInWithEmailAndPassword(email.value.toLowerCase(), senha.value)
//         .then(function (user) {
//             console.log(user);
//             // window.location.href = "./area_secretaria.html";
//             console.log("Login realizado com sucesso");
//             console.log(user.email);
//         }).catch(function (error) {
//             console.log(error);
//         });
// }

// 