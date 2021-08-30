// VALIDAÇÂO para cadastrar aluno pg1
 function ValidaProxPg(){
    
    var NomeAluno = document.getElementById('NomeAluno').value;
    var RmAluno = document.getElementById('RmAluno').value;
    var NumAluno = document.getElementById('NumAluno').value;
	var TurmaAluno = document.getElementById('TurmaAluno').value; 
	var GrupoAluno = document.getElementById('GrupoAluno').value;
	var msg = '';

		if( NomeAluno == ''){
			msg = msg + '\n -- Aluno'
		}
		if( RmAluno == ''){
			msg = msg + '\n -- Rm'
		}
		if( NumAluno == ''){
			msg = msg + '\n -- Número'
		}
		if( TurmaAluno == ''){
			msg = msg + '\n -- Turma'
		}
		if( GrupoAluno == ''){
			msg = msg + '\n -- Grupo'
		}
		if(msg == ''){
			// alert('OK')
			window.location.href = 'CadastroAlunoPart2.html'
		}else {
			alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
		}
	}
// FIM VALIDAÇÂO

// VALIDAÇÂO para cadastrar aluno pg2
	function ValidaConcluiCad(){
    var EmailAluno = document.getElementById('EmailAluno').value;
	var SenhaAluno = document.getElementById('SenhaAluno').value;
	var RecSenhaAluno = document.getElementById('RecSenhaAluno').value;
    var msg = '';

    	if( EmailAluno == ''){
			msg = msg + '\n -- Email'
		}
		if( SenhaAluno == ''){
			msg = msg + '\n -- Senha'
		}
		if( RecSenhaAluno == ''){
			msg = msg + '\n -- Corfirme a senha '
		}
		if(msg == ''){
			senhaigual();
		}else {
			alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
		}

    }

function senhaigual(){
	var SenhaAluno = document.getElementById('SenhaAluno').value;
	var RecSenhaAluno = document.getElementById('RecSenhaAluno').value;

	if( SenhaAluno === RecSenhaAluno){
		alert('Dados OK')
		window.location.href = 'LoginAluno.html'
	}else{
		alert('As senhas são diferentes')
			

	}
}
//FIM VALIDAÇÂO para cadastrar aluno pg2
// =======================

//	VALIDAÇÂO para todos os campos do projeto
//	Modal da pagina "PGProjetoAluno" 
function ValidaProj(){
           let NomeProjeto = document.getElementById('NomeProjeto').value;
           let NumProj = document.getElementById('NumProj').value;
           let RmProf = document.getElementById('RmProf').value;
           let SlcTema = document.getElementById('SlcTema').value;
           let SlcTipo = document.getElementById('SlcTipo').value;
           let LocalApres = document.getElementById('LocalApres').value;
           let inputTextArea = document.getElementById('inputTextArea').value;
           let msg = '';

        if( NomeProjeto == ''){
          msg = msg + '\n -- Nome do Projeto'
        }
        if( NumProj == ''){
          msg = msg + '\n -- Número do projeto'
        }
        if( RmProf == ''){
          msg = msg + '\n -- Rm Professor Coordenador'
        }
        if( SlcTema == 0){
          msg = msg + '\n -- Tema'
        }
        if( SlcTipo == 0){
          msg = msg + '\n -- Tipo'
        }
        if( LocalApres == ''){
          msg = msg + '\n -- Local da Apresentação'
        }
        if( inputTextArea == ''){
          msg = msg + '\n -- Descriçao breve do projeto'
        }
        if(msg == ''){
          // alert('OK')
          window.location.href = 'CadastroAlunoPart2.html'
        }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
        }
  }
   function AbreProjCriado(){
    alert('Não tem nada aqui nao parça')
  }

  // FIM  VALIDAÇÂO para todos os campos do projeto
  // ==========================

function ValidaLoginAluno(){
	  		 let NomeLogin = document.getElementById('NomeLogin').value;
	  		 let SenhaAluno = document.getElementById('SenhaAluno').value;
	  		 let msg = '';


  		if( NomeLogin == ''){
          msg = msg + '\n -- Nome'
        }
        if( SenhaAluno == ''){
          msg = msg + '\n -- Senha'
        }
        if(msg == ''){
          // alert('OK')
          window.location.href = 'PGProjetosAluno.html'
        }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
        }

	

	}
  