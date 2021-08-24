 // Validaçao para cadastrar aluno pg1
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
// Validaçao para cadastrar aluno pg2
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