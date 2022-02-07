README.md
Colégio Freitas
Página de gerenciamento de funcionários e alunos, para um colégio fictício .

Criei esse projeto usando HTML, CSS e JavaScript, para por em prática meus conhecimentos em banco de dados noSQL usando o Firebase.

É uma sistema de: Cadastro de Diretor, Secretário e Professor. Onde o Diretor e o Secretário podem cadastrar um novo aluno. O diretor, secretário e o professor podem inserir as notas do aluno.

IMPLEMENTAÇÕES --

A página Inicial, oferece uma autenticação para quem já está cadastrado no sistema. Caso o usuário ainda não esteja cadastrado, um link para criar a conta, foi adicionado no final da página.
A página Crie uma conta, está diretamente ligada ao Firebase authentication, com o usuário podendo escolher em 3 opções: Diretor, Secretário e Professor.
Após o login, o usuário é leva à área da secretária, podendo escolher entre: Cadastro de Funcionários, Cadastro de Alunos, Caderneta, Cadastro de turma.
Na página Cadastro de aluno é possível cadastrar vários alunos homônimos, o ID do aluno é baseado no seu CPF/RG. E uma mensagem de sucesso é apresenta ao final do cadastro.
A IMPLEMENTAR --

Um sistema de autenticação que impeça usuários não autenticados façam cadastros no sistema.
O sistema Caderneta, ainda não está completamente implementado.
Melhorar o CSS da página.
