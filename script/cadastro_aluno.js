
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
let db = firebase.firestore();

// botão de cadastro de alunos
let btn = document.querySelector("button");
btn.addEventListener("click", cadastraNovoAluno);

// get data do firebase e preencher o select

let select = document.querySelector("select");
db.collection("turmas").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        let option = document.createElement("option");
        option.value = doc.id;
        option.text = doc.id;
        select.appendChild(option);
    });

});
// cadastra novo aluno no firebase
// Não Mexer mais nesse código
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

function cadastraNovoAluno() {
    let nome = document.querySelector(".nome").value;
    let turma = document.querySelector("#turmasSelect").value;
    let dataNascimento = document.querySelector(".dataNascimento").value;
    let endereco = document.querySelector(".endereco").value;
    let registro = document.querySelector(".registro").value;

    let novoAluno = {
        nome: nome,
        turma: turma,
        dataNascimento: dataNascimento,
        endereco: endereco,
        registro: registro
    };

    db.collection("alunos").doc(`${novoAluno.registro}`).set({
        nome: nome,
        turma: turma,
        dataNascimento: dataNascimento,
        endereco: endereco,
        registro: registro

    });
    console.log("Documento inserido com sucesso");
    // confirmação de cadastro
    document.querySelector(".confirma").innerHTML = `<p>O aluno ${novoAluno.nome} foi cadastrado com sucesso!</p>`;


}
// Não mexer mais nesse código
