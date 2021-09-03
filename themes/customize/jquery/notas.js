/* Criado por XinXyla#0001 - Favor não apagar!
Editado por: 
*/
const configFile2 = "./config_notas.json",


nota1 = document.getElementById('n1'),
nota2 = document.getElementById('n2'),
nota3 = document.getElementById('n3'),
nota4 = document.getElementById('n4'),
nota5 = document.getElementById('n5'),
nota6 = document.getElementById('n6'),
nota7 = document.getElementById('n7'),
nota8 = document.getElementById('n8'),
nota9 = document.getElementById('n9'),
nota10 = document.getElementById('n10');

function setnotas() {
const fs = require("fs");
fs.writeFile(configFile2,JSON.stringify({"nota1": nota1.value,"nota2": nota2.value,"nota3": nota3.value,"nota4": nota4.value,"nota5": nota5.value,"nota6": nota6.value,"nota7": nota7.value,"nota8": nota8.value,"nota9": nota9.value,"nota10": nota10.value,}), (err) => { if(err) throw err; });
}


window.addEventListener("load", function() {
	const fs = require("fs");
	if(fs.existsSync(configFile2)) {
		fs.readFile(configFile2, function read(err, data) {
			if (err) throw err;
			var config = JSON.parse(data);
	
			nota1.value = config.nota1;
			nota2.value = config.nota2;
			nota3.value = config.nota3;
			nota4.value = config.nota4;
			nota5.value = config.nota5;
			nota6.value = config.nota6;
			nota7.value = config.nota7;
			nota8.value = config.nota8;
			nota9.value = config.nota9;
			nota10.value = config.nota10;
			
			});
	} else
	{	nota1.value = "1";
		nota2.value = "2";
		nota3.value = "3";
		nota4.value = "4";
		nota5.value = "5";
		nota6.value = "6";
		nota7.value = "7";
		nota8.value = "8";
		nota9.value = "9";
		nota10.value = "10";
	}
	
	});


	function abrir1() {
		document.getElementById('divn1').style.display = 'block';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}

	function abrir2() {
		document.getElementById('divn2').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	
	function abrir3() {
		document.getElementById('divn3').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}

	function abrir4() {
		document.getElementById('divn4').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir5() {
		document.getElementById('divn5').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir6() {
		document.getElementById('divn6').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir7() {
		document.getElementById('divn7').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir8() {
		document.getElementById('divn8').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir9() {
		document.getElementById('divn9').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir10() {
		document.getElementById('divn10').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
	}
	function fecharatu() {
document.getElementById('versao').style.display = 'none';
document.querySelector("[name='txtstart']").value = "none";
document.querySelector("[name='notastxtqr']").value = "#dddddd";
document.querySelector("[name='notasbordaqr']").value = "1px solid rgb(60,60,60)";
}

function restaurar1() {

document.querySelector("[name='imagemdofundoqr']").value = "url(./bg/01.jpg) center";
}

function restaurar2() {

	document.querySelector("[name='cordofundoqr']").value = "rgba(0,0,0,0.3)";
	}

	function mouseHandler(e){
		if ($(this).hasClass('selecionado')) {
		} else {
		  $(".selecionado").removeClass('selecionado');
		  $(this).addClass('selecionado');
		} 
	  }
	  
	  function start(){
		$('.notas').bind('click', mouseHandler);
	  }
	  
	  $(document).ready(start);