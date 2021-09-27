function EsqueciSenha(){
	alert('No momento não é possivel iniciar o processo para recuperar a senha!\n Tente novamente mais tarde!')
}

function NaoMostra(){
	alert('No momento nao é possivel adicionar projetos, volte mais tarde')
}
function AbreProjCriado(){
    alert('Não é possivel possivel abrir este projeto no momento\n por favor tente mais tarde')
}

// VALIDAÇÂO para cadastrar aluno pg1
 function ValidaProxPg(){
    
  let NomeAluno = document.getElementById('NomeAluno').value;
  let RmAluno = document.getElementById('RmAluno').value;
  let NumAluno = document.getElementById('NumAluno').value;
	let TurmaAluno = document.getElementById('TurmaAluno').value; 
	let GrupoAluno = document.getElementById('GrupoAluno').value;
	let msg = '';

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
  let EmailAluno = document.getElementById('EmailAluno').value;
	let SenhaAluno = document.getElementById('SenhaAluno').value;
	let RecSenhaAluno = document.getElementById('RecSenhaAluno').value;
  let msg = '';

    	if( EmailAluno == ''){
			msg = msg + '\n -- Email'
		}
		if( SenhaAluno == ''){
			msg = msg + '\n -- Senha'
		}
		if( RecSenhaAluno == ''){
			msg = msg + '\n -- Conrfirme a senha '
		}
		if(msg == ''){
			senhaigual();
		}else {
			alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
		}

    }

function senhaigual(){
	let SenhaAluno = document.getElementById('SenhaAluno').value;
	let RecSenhaAluno = document.getElementById('RecSenhaAluno').value;

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



// pagina de validaçao do professor
function ValidaProf(){
	let NomeProf = document.getElementById('NomeProf').value;
	let RmProf = document.getElementById('RmProf').value;
	let Disciplina = document.getElementById('Disciplina').value;
	let msg = "";

	if( NomeProf == ''){
          msg = msg + '\n -- Nome do professor'
        }
    if( RmProf == ''){
          msg = msg + '\n -- Rm do professor'
        }
    if( Disciplina == ''){
          msg = msg + '\n -- Disciplina'
        }
    if(msg == ''){
          // alert('OK')
          window.location.href = 'CadastroProfPart2.html'
    }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
    }
}

function ValidaProfSegunda(){
	let EmailProf = document.getElementById('EmailProf').value;
	let SenhaProf = document.getElementById('SenhaProf').value;
	let ConfirSenha = document.getElementById('ConfirmaSenhaProf').value;
	let msg = "";

	if( EmailProf == ''){
          msg = msg + '\n -- Email'
        }
    if( SenhaProf == ''){
          msg = msg + '\n -- Senha'
        }
    if( ConfirSenha == ''){
          msg = msg + '\n -- Conrfirme a senha '
        }
    if(msg == ''){
          // alert('OK')
          senhaigualProf();
    }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
    }
}

function senhaigualProf(){
	let SenhaProf = document.getElementById('SenhaProf').value;
	let ConfirSenha = document.getElementById('ConfirmaSenhaProf').value;

	if( SenhaProf === ConfirSenha){
		alert('Dados OK')
		window.location.href = 'LoginProf.html'
	}else{
		alert('As senhas são diferentes')
}
}
function ValidaLoginProf(){

	  		 let EmailLoginProf = document.getElementById('EmailLoginProf').value;
	  		 let SenhaProf = document.getElementById('SenhaProf').value;
	  		 let msg = '';


  		if( EmailLoginProf == ''){
          msg = msg + '\n -- Nome'
        }
        if( SenhaProf == ''){
          msg = msg + '\n -- Senha'
        }
        if(msg == ''){
          // alert('OK')
          window.location.href = 'PGProjetosProf.html'
        }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
        }
	}


function verificaVolta(){
	let	rdoDecisao = document.querySelector('input[name=rdoDecisao]:checked').value;
	let inputTextArea = document.getElementById('inputTextArea').value;
	let msg = '';



  		if( rdoDecisao.value == ''){
          msg = msg + '\n -- decisão se o projeto esta Ok'
        }
        if( inputTextArea == ''){
          msg = msg + '\n -- Descriçao da devolutiva'
        }
        if(msg == ''){
          alert('Projeto Enviado')
          // window.location.href = 'PGProjetosProf.html'
        }else {
          alert('ATENÇÃO! Faltou preencha os seguintes campos' + msg);
        }
}



