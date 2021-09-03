/* Criado por XinXyla#0001 - Favor não apagar!
Editado por: 
*/
const configFile = "./config_customize.json",

/* 2020 */
CheckBoxElement = document.getElementById('showCircle'),
PlaySoundElement = document.getElementById('playSound'),
LiveCircle = document.getElementsByClassName("bg_isActive")[0],

/* Corpo das actions, eventos e comandos */
facustomize = document.getElementById('fundoactionx'),
bordaaction = document.getElementById('bordaactionx'),
faset = document.getElementsByClassName("fundoaction")[0],
bordaactionset = document.getElementsByClassName("bordaaction")[0],

/* Corpo da página */
textocustomize = document.getElementById('cordostextos'),
fundocustomize4 = document.getElementById('cordofundo4'),
corpoespaco = document.getElementById('corpoespacox'),
textoset = document.getElementsByClassName("textos")[0],
fundoset4 = document.getElementsByClassName("fundo4")[0],
corpoespacoset = document.getElementsByClassName("corpoespaco")[0],

/* Botões do Menu */  
bmfundo = document.getElementById('bmfundox'),
bmtexto = document.getElementById('bmtextox'),
bmfundohover = document.getElementById('bmfundohoverx'),
bmtextohover = document.getElementById('bmtextohoverx'),
bmfundoativo = document.getElementById('bmfundoativox'),
bmtextoativo = document.getElementById('bmtextoativox'),
bmespaco = document.getElementById('bmespacox'),
bmfundoset = document.getElementsByClassName("bmfundo")[0],
bmtextoset = document.getElementsByClassName("bmtexto")[0],
bmfundohoverset = document.getElementsByClassName("bmfundohover")[0],
bmtextohoverset = document.getElementsByClassName("bmtextohover")[0],
bmfundoativoset = document.getElementsByClassName("bmfundoativo")[0],
bmtextoativoset = document.getElementsByClassName("bmtextoativo")[0],
bmespacoset = document.getElementsByClassName("bmespaco")[0],

/* Botões das actions,eventos e comandos */ 
bacustomize = document.getElementById('botaoactionx'),
bhcustomize = document.getElementById('botaoactionhoverx'),
bativotxtcustomize = document.getElementById('botaoactionativotxtx'),
bativocustomize = document.getElementById('botaoactionativox'),
bhtxtcustomize = document.getElementById('botaoactionhovertxtx'),
bcorcustomize = document.getElementById('botaocorx'),
botaoespaco = document.getElementById('botaoespacox'),
bset = document.getElementsByClassName("botaoaction")[0],
bhset = document.getElementsByClassName("botaoactionhover")[0],
bhtxtset = document.getElementsByClassName("botaoactionhovertxt")[0],
bativoset = document.getElementsByClassName("botaoactionativo")[0],
bativotxtset = document.getElementsByClassName("botaoactionativotxt")[0],
botaoespacoset = document.getElementsByClassName("botaoespaco")[0],

/* Marcador de comandos e eventos */ 
marcadorcustomize = document.getElementById('cordomarcador'),
marcadorcustomizetxt = document.getElementById('cordomarcadortxt'),
marcadorset = document.getElementsByClassName("marcador")[0],

/* Barra de rolagem */ 
rolfundo = document.getElementById('rolfundox'),
rolbarra = document.getElementById('rolbarrax'),
rolbarraativa = document.getElementById('rolbarraativax'),
rolbotoes = document.getElementById('rolbotoesx'),
rolbotoesonoff = document.getElementById('rolbotoesonoffx'),
rolborda = document.getElementById('rolbordax'),
roltamanho = document.getElementById('roltamanhox'),
rolfundoset = document.getElementsByClassName("rolfundo")[0],
rolbarraset = document.getElementsByClassName("rolbarra")[0],
rolbarraativaset = document.getElementsByClassName("rolbarraativa")[0],
rolbotoesset = document.getElementsByClassName("rolbotoes")[0],
rolbotoesonoffset = document.getElementsByClassName("rolbotoesonoff")[0],
rolbordaset = document.getElementsByClassName("rolborda")[0],
roltamanhoset = document.getElementsByClassName("roltamanho")[0],

/* Botões */
bfundo = document.getElementById('bfundox'),
btexto = document.getElementById('btextox'),
bfundohover = document.getElementById('bfundohoverx'),
btextohover = document.getElementById('btextohoverx'),
bfundoset = document.getElementsByClassName("bfundo")[0],
btextoset = document.getElementsByClassName("btexto")[0],
bfundohoverset = document.getElementsByClassName("bfundohover")[0],
btextohoverset = document.getElementsByClassName("btextohover")[0],

/* Notas */ 
notasfundo = document.getElementById('notasfundo'),
notastxt = document.getElementById('notastxt'),
notasfundoset = document.getElementsByClassName("notasfundo")[0],
notastxtset = document.getElementsByClassName("notastxt")[0],
bordanotas = document.getElementById('bordanotas'),
bordanotasset = document.getElementsByClassName("bordanotas")[0],

versao = document.getElementById('versaox'),
versaoset = document.getElementsByClassName("versao")[0],

fundocustomize = document.getElementById('cordofundo'),
fundocustomize2 = document.getElementById('cordofundo2'),
fundocustomize3 = document.getElementById('cordofundo3'),
bordacaixacustomize = document.getElementById('corbordacaixax'),
textocaixacustomize = document.getElementById('cortextocaixax'),
fundoset = document.getElementsByClassName("fundo")[0],
fundoset2 = document.getElementsByClassName("fundo2")[0],
fundoset3 = document.getElementsByClassName("fundo3")[0],
bordacaixaset = document.getElementsByClassName("bordacaixa")[0],
textocaixabordaset = document.getElementsByClassName("textocaixa")[0],
bcorset = document.getElementsByClassName("botaocor")[0];
window.addEventListener("load", function() {
const fs = require("fs");
if(fs.existsSync(configFile)) {
	fs.readFile(configFile, function read(err, data) {
		if (err) throw err;
		var config = JSON.parse(data);

  		/* 2020 */
		CheckBoxElement.checked = config.showCircle;
		PlaySoundElement.checked = config.playSound;
		if(config.showCircle) LiveCircle.style.display = ""; 
		else if (!config.showCircle) LiveCircle.style.display = "none";
        
        /* Corpo das actions, eventos e comandos */
		facustomize.value = faset.style.background = config.fundoaction;
        bordaaction.value = bordaactionset.style.background = config.bordaaction;
        document.documentElement.style.setProperty("--config-fa", document.getElementById("fundoactionx").value);
        document.documentElement.style.setProperty("--config-bordaaction", document.getElementById("bordaactionx").value);

		/* Corpo da página */
		fundocustomize4.value = fundoset4.style.background = config.fundo4;
		textocustomize.value = textoset.style.background = config.textos;
		corpoespaco.value = corpoespacoset.style.background = config.corpoespaco;
		document.documentElement.style.setProperty("--config-cordofundo4", document.getElementById("cordofundo4").value);
		document.documentElement.style.setProperty("--config-textos", document.getElementById("cordostextos").value);
		document.documentElement.style.setProperty("--config-corpoespaco", document.getElementById("corpoespacox").value);

		/* Botões do Menu */ 
		bmfundo.value = bmfundoset.style.background = config.bmfundo;
		bmtexto.value = bmtextoset.style.background = config.bmtexto;
		bmfundohover.value = bmfundohoverset.style.background = config.bmfundohover;
		bmtextohover.value = bmtextohoverset.style.background = config.bmtextohover;
		bmfundoativo.value = bmfundoativoset.style.background = config.bmfundoativo;
		bmtextoativo.value = bmtextoativoset.style.background = config.bmtextoativo;
		bmespaco.value = bmespacoset.style.margin = config.bmespaco;
		document.documentElement.style.setProperty("--config-bmfundo", document.getElementById("bmfundox").value);
		document.documentElement.style.setProperty("--config-bmtexto", document.getElementById("bmtextox").value);
		document.documentElement.style.setProperty("--config-bmfundohover", document.getElementById("bmfundohoverx").value);
		document.documentElement.style.setProperty("--config-bmtextohover", document.getElementById("bmtextohoverx").value);
		document.documentElement.style.setProperty("--config-bmfundoativo", document.getElementById("bmfundoativox").value);
		document.documentElement.style.setProperty("--config-bmtextoativo", document.getElementById("bmtextoativox").value);
		document.documentElement.style.setProperty("--config-bmespaco", document.getElementById("bmespacox").value);

		/* Botões das actions,eventos e comandos */ 
		bacustomize.value = bset.style.background = config.botaoaction;
		bhcustomize.value = bhset.style.background = config.botaoactionhover;
		bhtxtcustomize.value = bhtxtset.style.background = config.botaoactionhovertxt;
		bativotxtcustomize.value = bativotxtset.style.background = config.botaoactionativotxt;
		bativocustomize.value = bativoset.style.background = config.botaoactionativo;
		bcorcustomize.value = bcorset.style.background = config.botaocor;
		botaoespaco.value = botaoespacoset.style.background = config.botaoespaco;
		document.documentElement.style.setProperty("--config-ba", document.getElementById("botaoactionx").value);
		document.documentElement.style.setProperty("--config-bah", document.getElementById("botaoactionhoverx").value);
		document.documentElement.style.setProperty("--config-bahtxt", document.getElementById("botaoactionhovertxtx").value);
		document.documentElement.style.setProperty("--config-baativo", document.getElementById("botaoactionativox").value);
		document.documentElement.style.setProperty("--config-baativotxt", document.getElementById("botaoactionativotxtx").value);
		document.documentElement.style.setProperty("--config-bcor", document.getElementById("botaocorx").value);
		document.documentElement.style.setProperty("--config-botaoespaco", document.getElementById("botaoespacox").value);

		/* Marcador de comandos e eventos */ 
		marcadorcustomize.value = marcadorset.style.background = config.marcador;
		marcadorcustomizetxt.value = marcadorset.style.background = config.marcadortxt;
		document.documentElement.style.setProperty("--config-marcador", document.getElementById("cordomarcador").value);
		document.documentElement.style.setProperty("--config-marcadortxt", document.getElementById("cordomarcadortxt").value);


		/* Notas */ 
		notasfundo.value = notasfundoset.style.background = config.notasfundo;
		notastxt.value = notastxtset.style.background = config.notastxt;
		document.documentElement.style.setProperty("--config-notasfundo", document.getElementById("notasfundo").value);
		document.documentElement.style.setProperty("--config-notastxt", document.getElementById("notastxt").value);


		/* Barra de rolagem */ 
		rolfundo.value = rolfundoset.style.background = config.rolfundo;
		rolbarra.value = rolbarraset.style.background = config.rolbarra;
		rolbarraativa.value = rolbarraativaset.style.background = config.rolbarraativa;
		rolbotoes.value = rolbotoesset.style.background = config.rolbotoes;
		rolbotoesonoff.value = rolbotoesonoffset.style.background = config.rolbotoesonoff;
		rolborda.value = rolbordaset.style.background = config.rolborda;
		roltamanho.value = roltamanhoset.style.margin = config.roltamanho;
		document.documentElement.style.setProperty("--config-rolfundo", document.getElementById("rolfundox").value);
		document.documentElement.style.setProperty("--config-rolbarra", document.getElementById("rolbarrax").value);
		document.documentElement.style.setProperty("--config-rolbarraativa", document.getElementById("rolbarraativax").value);
		document.documentElement.style.setProperty("--config-rolbotoes", document.getElementById("rolbotoesx").value);
		document.documentElement.style.setProperty("--config-rolbotoesonoff", document.getElementById("rolbotoesonoffx").value);
		document.documentElement.style.setProperty("--config-rolborda", document.getElementById("rolbordax").value);
		document.documentElement.style.setProperty("--config-roltamanho", document.getElementById("roltamanhox").value);

		/* Botões */ 
		bfundo.value = bfundoset.style.background = config.bfundo;
		btexto.value = btextoset.style.background = config.btexto;
		bfundohover.value = bfundohoverset.style.background = config.bfundohover;
		btextohover.value = btextohoverset.style.background = config.btextohover;
		document.documentElement.style.setProperty("--config-bfundo", document.getElementById("bfundox").value);
		document.documentElement.style.setProperty("--config-btexto", document.getElementById("btextox").value);
		document.documentElement.style.setProperty("--config-bfundohover", document.getElementById("bfundohoverx").value);
		document.documentElement.style.setProperty("--config-btextohover", document.getElementById("btextohoverx").value);

		versao.value = versaoset.style.display = config.versao;
		document.documentElement.style.setProperty("--config-versao", document.getElementById("versaox").value);

		bordanotas.value = bordanotasset.style.background = config.bordanotas;
		document.documentElement.style.setProperty("--config-bordanotas", document.getElementById("bordanotas").value);

		fundocustomize.value = fundoset.style.background = config.fundo;
		fundocustomize2.value = fundoset2.style.background = config.fundo2;
		fundocustomize3.value = fundoset3.style.background = config.fundo3;
		bordacaixacustomize.value = bordacaixaset.style.background = config.bordacaixa;
		textocaixacustomize.value = textocaixabordaset.style.background = config.textocaixa;
		document.documentElement.style.setProperty("--config-fundo", document.getElementById("cordofundo").value);
		document.documentElement.style.setProperty("--config-fundo2", document.getElementById("cordofundo2").value);
		document.documentElement.style.setProperty("--config-caixafundo", document.getElementById("cordofundo3").value);
		document.documentElement.style.setProperty("--config-bordacaixa", document.getElementById("corbordacaixax").value);
		document.documentElement.style.setProperty("--config-textocaixa", document.getElementById("cortextocaixax").value);
	});
}
else {

/* 2020 */
	CheckBoxElement.checked = true;
	PlaySoundElement.checked = true;
	if(CheckBoxElement.checked) LiveCircle.style.display = "none";
	else if (!CheckBoxElement.checked) LiveCircle.style.display = "";

/* Corpo das actions, eventos e comandos */
facustomize.value = "#000000";
bordaaction.value = ""

/* Corpo da página */
fundocustomize4.value = "rgba(0,0,0,0.5)";
textocustomize.value = "#8080c0";
corpoespaco.value = "15px";

/* Botões do Menu */ 
bmfundo.value = "#1f1f1f";
bmtexto.value = "#e6e6e6";
bmfundohover.value = "#00002b";
bmtextohover.value = "#ceceff";
bmfundoativo.value = "#006291";
bmtextoativo.value = "#e3f1ff";
bmespaco.value = "0px";
/* Botões das actions,eventos e comandos */ 
bacustomize.value = "#303030";
bhcustomize.value = "#001c37";
bativotxtcustomize.value = "#ffffff";
bativocustomize.value = "#8080ff";
bhtxtcustomize.value = "#ffffff";
bcorcustomize.value = "#979797";
botaoespaco.value = "20px";
/* Marcador de comandos e eventos */ 
marcadorcustomize.value = "#ffff00";
marcadorcustomizetxt.value = "#000000";
/* Notas */ 
notasfundo.value = "#000000";
notastxt.value = "#dddddd";
/* Barra de rolagem */ 
rolfundo.value = "#1b1b1b";
rolbarra.value = "#006291";
rolbarraativa.value = "#0094db";
rolbotoes.value = "#006291";
rolbotoesonoff.value = "none";
rolborda.value = "1px solid #333";
roltamanho.value = "12px";
/* Botões */
bfundo.value = "#0e2d30";
btexto.value = "#cdcdcd";
bfundohover.value = "#008fd5";
btextohover.value = "#ffffff";

versao.value = "none";
fundocustomize.value = "url(./bg/01.jpg) center";
fundocustomize2.value = "rgba(0,0,0,0.4)";
fundocustomize3.value = "rgba(50,50,50,0.8)";
bordacaixacustomize.value = "2px solid rgba(60,60,60)";
textocaixacustomize.value = "#ffffff";

bordanotas.value = "1px solid rgba(60,60,60)";
}

});
function setcustomize() {
const fs = require("fs");
versaoset.style.background = versao.value;
fundoset.style.background = fundocustomize.value;
fundoset2.style.background = fundocustomize2.value;
marcadorset.style.background = marcadorcustomize.value;

        /* 2020 */
LiveCircle.style.display = "";
    if (!CheckBoxElement.checked) LiveCircle.style.display = "none";

        /* Corpo das actions, eventos e comandos */
		document.documentElement.style.setProperty("--config-fa", document.getElementById("fundoactionx").value);
        document.documentElement.style.setProperty("--config-bordaaction", document.getElementById("bordaactionx").value);

		/* Corpo da página */
		document.documentElement.style.setProperty("--config-cordofundo4", document.getElementById("cordofundo4").value);
		document.documentElement.style.setProperty("--config-corpoespaco", document.getElementById("corpoespacox").value);
		document.documentElement.style.setProperty("--config-textos", document.getElementById("cordostextos").value);


		/* Botões do Menu */ 
		document.documentElement.style.setProperty("--config-bmfundo", document.getElementById("bmfundox").value);
		document.documentElement.style.setProperty("--config-bmtexto", document.getElementById("bmtextox").value);
		document.documentElement.style.setProperty("--config-bmfundohover", document.getElementById("bmfundohoverx").value);
		document.documentElement.style.setProperty("--config-bmtextohover", document.getElementById("bmtextohoverx").value);
		document.documentElement.style.setProperty("--config-bmfundoativo", document.getElementById("bmfundoativox").value);
		document.documentElement.style.setProperty("--config-bmtextoativo", document.getElementById("bmtextoativox").value);
		document.documentElement.style.setProperty("--config-bmespaco", document.getElementById("bmespacox").value);

		/* Botões das actions,eventos e comandos */
		document.documentElement.style.setProperty("--config-ba", document.getElementById("botaoactionx").value);
		document.documentElement.style.setProperty("--config-bah", document.getElementById("botaoactionhoverx").value);
		document.documentElement.style.setProperty("--config-bahtxt", document.getElementById("botaoactionhovertxtx").value);
		document.documentElement.style.setProperty("--config-baativo", document.getElementById("botaoactionativox").value);
		document.documentElement.style.setProperty("--config-baativotxt", document.getElementById("botaoactionativotxtx").value);
		document.documentElement.style.setProperty("--config-bcor", document.getElementById("botaocorx").value);
		document.documentElement.style.setProperty("--config-botaoespaco", document.getElementById("botaoespacox").value);

		/* Marcador de comandos e eventos */ 
		document.documentElement.style.setProperty("--config-marcador", document.getElementById("cordomarcador").value);
		document.documentElement.style.setProperty("--config-marcadortxt", document.getElementById("cordomarcadortxt").value);

		/* Notas */ 
		document.documentElement.style.setProperty("--config-notasfundo", document.getElementById("notasfundo").value);
		document.documentElement.style.setProperty("--config-notastxt", document.getElementById("notastxt").value);

		/* Barra de rolagem */ 
		document.documentElement.style.setProperty("--config-rolfundo", document.getElementById("rolfundox").value);
		document.documentElement.style.setProperty("--config-rolbarra", document.getElementById("rolbarrax").value);
		document.documentElement.style.setProperty("--config-rolbarraativa", document.getElementById("rolbarraativax").value);
		document.documentElement.style.setProperty("--config-rolbotoes", document.getElementById("rolbotoesx").value);
		document.documentElement.style.setProperty("--config-rolbotoesonoff", document.getElementById("rolbotoesonoffx").value);
		document.documentElement.style.setProperty("--config-rolborda", document.getElementById("rolbordax").value);
		document.documentElement.style.setProperty("--config-roltamanho", document.getElementById("roltamanhox").value);

		/* Botões */ 
		document.documentElement.style.setProperty("--config-bfundo", document.getElementById("bfundox").value);
		document.documentElement.style.setProperty("--config-btexto", document.getElementById("btextox").value);
		document.documentElement.style.setProperty("--config-bfundohover", document.getElementById("bfundohoverx").value);
		document.documentElement.style.setProperty("--config-btextohover", document.getElementById("btextohoverx").value);

		document.documentElement.style.setProperty("--config-versao", document.getElementById("versaox").value);

		document.documentElement.style.setProperty("--config-bordanotas", document.getElementById("bordanotas").value);

		document.documentElement.style.setProperty("--config-fundo", document.getElementById("cordofundo").value);
		document.documentElement.style.setProperty("--config-fundo2", document.getElementById("cordofundo2").value);
		document.documentElement.style.setProperty("--config-caixafundo", document.getElementById("cordofundo3").value);
		document.documentElement.style.setProperty("--config-bordacaixa", document.getElementById("corbordacaixax").value);
		document.documentElement.style.setProperty("--config-textocaixa", document.getElementById("cortextocaixax").value);
fs.writeFile(configFile,JSON.stringify({"showCircle": CheckBoxElement.checked,"playSound": PlaySoundElement.checked,"fundo": fundocustomize.value,"fundo2": fundocustomize2.value,"fundo3": fundocustomize3.value,"fundo4": fundocustomize4.value,"marcador": marcadorcustomize.value,"marcadortxt": marcadorcustomizetxt.value,"textos": textocustomize.value,"corpoespaco": corpoespaco.value,"fundoaction": facustomize.value,"bordaaction": bordaaction.value,"botaoaction": bacustomize.value,"botaoactionhover": bhcustomize.value,"botaoactionhovertxt": bhtxtcustomize.value,"botaoactionativo": bativocustomize.value,"botaoactionativotxt": bativotxtcustomize.value,"botaocor": bcorcustomize.value,"botaoespaco": botaoespaco.value,"bordacaixa": bordacaixacustomize.value,"textocaixa": textocaixacustomize.value,"bmfundo": bmfundo.value,"bmtexto": bmtexto.value,"bmfundohover": bmfundohover.value,"bmtextohover": bmtextohover.value,"bmfundoativo": bmfundoativo.value,"bmtextoativo": bmtextoativo.value,"bmespaco": bmespaco.value,"rolfundo": rolfundo.value,"rolbarra": rolbarra.value,"rolbarraativa": rolbarraativa.value,"rolbotoes": rolbotoes.value,"rolbotoesonoff": rolbotoesonoff.value,"rolborda": rolborda.value,"roltamanho": roltamanho.value,"bfundo": bfundo.value,"btexto": btexto.value,"bfundohover": bfundohover.value,"btextohover": btextohover.value,"notasfundo": notasfundo.value,"notastxt": notastxt.value,"bordanotas": bordanotas.value,"versao": versao.value}), (err) => { if(err) throw err; });
}