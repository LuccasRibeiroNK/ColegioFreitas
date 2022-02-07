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
btn.addEventListener("click", criaNovoUsuario);

// Não mexer mais nesse código
function criaNovoUsuario() {
    let newUserPrimeiroNome = document.querySelector(".primeiroNome").value;
    let newUserSobrenome = document.querySelector(".ultimoNome").value;
    let newUserEmail = document.querySelector(".email").value;
    let newUserPassword = document.querySelector(".senha").value;
    let newUserCargo = document.querySelector("#cargoId").value;

    if (newUserPrimeiroNome == "" || newUserSobrenome == "" || newUserEmail == "" || newUserPassword == "" || newUserCargo == "") {
        alert("Preencha todos os campos!");
    } else if (newUserPassword.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
    } else {
        let novoUsuario = {
            primeiroNome: newUserPrimeiroNome,
            ultimoNome: newUserSobrenome,
            email: newUserEmail,
            senha: newUserPassword,
            cargo: newUserCargo
        };

        auth.createUserWithEmailAndPassword(novoUsuario.email, novoUsuario.senha).then(function (user) {
            db.collection("funcionariosCadastrados").doc(`${novoUsuario.email}`).set({
                primeiroNome: novoUsuario.primeiroNome,
                ultimoNome: novoUsuario.ultimoNome,
                email: novoUsuario.email,
                cargo: novoUsuario.cargo
            });
            console.log("Documento inserido com sucesso");
            // confirmação de cadastro
            document.querySelector(".confirma").innerHTML = `<p>O funcionário ${novoUsuario.primeiroNome} foi cadastrado com sucesso!</p>`;
        }).catch(function (error) {
            console.log("Erro ao cadastrar o usuário: " + error);
            // confirmação de cadastro
            document.querySelector(".confirmaAlerta").innerHTML = `<p>Email já cadastrado!</p>`;

        });
    }
}
// Não mexer mais nesse código
