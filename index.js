// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

//NÃO ESTÁ FUNCIONANDO TOTALMENTE
function adicionarAluno(nome) {
    let alunoNome = {
      nome: nome
    };
    if (alunosDaEscola.nome == nome) {
      console.log(`O aluno ${nome} já consta em nosso cadastro.`);
    } else {
      alunosDaEscola.push(alunoNome);
      console.log(`O aluno ${nome} foi cadastrado com sucesso!`); //PRECISA CORRIGIR AQUI
    }
  }
  
  //PARECE ESTAR FUNCIONANDO
   function listarAlunos() {
     for (let i = 0; i < alunosDaEscola.length; i++) {
       console.log("------------------------------");
       console.log("Nome: ", alunosDaEscola[i].nome);
       console.log("Notas: ", alunosDaEscola[i].notas);
      console.log("Cursos: ", alunosDaEscola[i].cursos);
       console.log("Faltas: ", alunosDaEscola[i].faltas);
     }
   }
  
  //INCOMPLETO
  function buscarAluno(nome, alunosDaEscola) {
    for (i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome === nome) {
        console.log(alunosDaEscola[i]);
         } else {
           console.log("Este aluno não consta em nosso cadastro.");
      }
    }
  }
  
  //NÃO ESTÁ FUNCIONANDO DIREITO
  function matricularAluno(aluno, nomeDoCurso) {
    if (alunosDaEscola.nome === aluno) {
      alunosDaEscola.push(cursos.nomeDoCurso);
      alunosDaEscola.push(cursos.dataMatricula);
    }
  }
  
  //FUNÇÃO APLICAR FALTA - NÃO FUNCIONA NADA
  function aplicarFalta(aluno) {
    for (i = 0; i < alunosDaEscola.length; i++) {
      if (alunosDaEscola[i].nome === aluno) {
        return alunosDaEscola.faltas + 1;
      }
      console.log(`Você recebeu 1 falta e tem um total de ${}.`);
    }
  }
  
  //NÃO ESTÁ CORRETO AINDA
  function aplicarNota(alunosDaEscola.nome.notas) {
    if(alunosDaEscola.cursos == " "){
      alunosDaEscola.notas.push(7, 9, 10);
      console.log("Notas aplicadas com sucesso.");
    } else {
      console.log("Este aluno não está cadastrado em nenhum curso.");
    }
  }

  //ÚLTIMA FUNÇÃO NÃO CONSEGUI FAZER A TEMPO