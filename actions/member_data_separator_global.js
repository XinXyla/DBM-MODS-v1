module.exports = {

	name: "Store Member Data Separator Global",

	section: "Member Control",

	author: "XinXyla",

	version: "1",

	short_description: "Esse mod permite que você pegue todos os valores das variantes dos membros, é necessario transformar em listas.",
	long_description: "Ao usar este mod, você pode pegar a tag members de um nome de dados armazenado em 'players.json'. Você pode usar esses membros para classificar seus dados / não classificar e / ou usar um limite de resultados. Este mod pode ser usado para criar uma tabela de classificação sem o MySQL ou qualquer outro banco de dados SQL. ",

	subtitle: function (data) {
		return `${[(data.dataName)]}`
	},

	variableStorage: function (data, varType) {
		const type = parseInt(data.storage);
		if (type !== varType) return;
		return ([data.varName2, 'Array']);
	},

	fields: ["debu", "numbefst2", "numbefst", "numbefstselect", "sort", "start", "middle", "end", "getresults", "dataName", "varName2", "storage"],

	html: function (isEvent, data) {
		return `
	<html>
	<div><p>Criado por XinXyla#0001</p></div>
	<div id="wrexdiv2" style="width: 550px; height: 350px; overflow-y: scroll;">
<div>
<div style="padding-top: 8px;">
	<div style="float: left; width: 50%;">
		Nome da Data:<br>
		<input id="dataName" class="round" type="text">
	</div>
	<span>
	
</div>
      <div style="display:none">Número antes do início:
<select id="numbefstselect" class="round" style="width:33%" onchange="glob.onChange1(this)">
<option value="1"selected>Não</option>
</select> 
<br>


<div id="numbefst" style=" width: 80%; display: none;">
Caracteres após o número:<br>
<input id="numbefst2" class="round" type="text" value=")">
</div></div>
<br>
<br>

<div style="float: left; width: 100%;">
	Inicio:
    
	<select id="start" class="round" style="width:40%">
	<option value="result" >Valor</option>
	<option value="username"selected>ID</option>
	</select>
	</div>
    <br>
    
    	<div style="display: table-cell;">
		<div style="display:none">Meio:
        
    
		<input id="middle" style="width:80%"  class="round" type="text" value="">
		</input>
			<br></div>
	
	Fim:
    
    
	<select id="end" class="round" style="width:100%">
	
	<option value="result" selected>Valor</option>
	<option value="username">ID</option>
	</select><br>


   </span>
   </div>
   <select id="sort" class="round" style="width: 90%;">
   <option value="0" selected>Não classificar </option>
   <option value="1" selected>Classificar de descendente</option>
   <option value="2">Classificar em ordem crescente</option>
</select><br>



	<div style="float: left; width: 50%; font-family: monospace; white-space: nowrap; resize: none;">
	Limites de resultados:
	<input id="getresults" class="round" type="text" placeholder="Recomendo deixar vazio">
</div><br><br><br>
	<div style="float: left; width: 35%; font-family: monospace; white-space: nowrap; resize: none;"">
	Armazenar em:<br>
	<select id="storage" class="round">
		${data.variables[1]}
	</select>
</div>
<div id="varNameContainer2" style="float: right; width: 60%;">
	Variable Name:<br>
	<input id="varName2" class="round" type="text"><br>
</div>
</div>
<select id="debu" class="round" style="width: 90%;display:none">
<option value="0" selected>Debug</option>
<option value="1">Don't Debug (não recomendo)</option>

</select><br>
</div>
</html>`
	},

	init: function () {
		const {
			glob,
			document
		} = this;
		glob.onChange1 = function(event) {
			const value = parseInt(event.value);
			const dom = document.getElementById('numbefst');
			
			
			if(value == 1) {
				dom.style.display = 'none';
				
			} else if(value == 2) {
				
				dom.style.display = null;
			}
			
		}
		glob.onChange1(document.getElementById('numbefstselect'));
	},

	//---------------------------------------------------------------------
	// Action Bot Function
	//
	// This is the function for the action within the Bot's Action class.
	// Keep in mind event calls won't have access to the "msg" parameter, 
	// so be sure to provide checks for variable existance.
	//---------------------------------------------------------------------

	action: function (cache) {
		var _this = this;
		const data = cache.actions[cache.index];
		var msg = cache.msg
		const type = parseInt(data.member);
		const varName = this.evalMessage(data.varName, cache);
		const storage = parseInt(data.storage);
		const varName2 = this.evalMessage(data.varName2, cache);
		const st = this.evalMessage(data.start, cache)
		const mid = this.evalMessage(data.middle, cache)
		const selectionsnum = parseInt(data.numbefstselect);

		const en = this.evalMessage(data.end, cache)
		const sort = parseInt(data.sort);
		const debug = parseInt(data.debu);
		const WrexMODS = this.getWrexMods(); // as always.
		

		var Discord = WrexMODS.require('discord.js');
		var fastsort = WrexMODS.require('fast-sort');
		var client = new Discord.Client();
		const {
			JSONPath
		} = WrexMODS.require('jsonpath-plus');
		fs = require('fs')
		var file = fs.readFileSync("./data/players.json", 'utf8');




		if (file) {
			var dataName = this.evalMessage(data.dataName, cache);
			dataName = '[' + "'" + dataName + "'" + ']'

			const isAdd = Boolean(data.changeType === "1");
			let val = this.evalMessage(data.value, cache);
			var list2 = []
			var list = []
			var list4 = []
			var list5 = []

			if (val !== undefined) {
				var file = JSON.parse(file)
				try {
					var list = []
					var result = JSONPath({
						path: '$.[?(@' + dataName + ' || @' + dataName + ' > -9999999999999999999999999999999999999999999999999999999)]*~',
						json: file
					});
					var pull = result;

					function sortNumber(a, b) {
						return b - a;
					}
					for (var i = 0; i < result.length; i++) {

						var result2 = JSONPath({
							path: '$.' + result[i] + dataName,
							json: file
						});

						try {

							var user = result[i];

							uid = user

							var id = "'" + "id" + "'";
							var id2 = "" + uid + "";


							list.push({
								id: id2,
								name2: result2
							});


						} catch (err) {
							switch (debug) {
								case 0:
								
								break;
								case 1:
								break;
							} 
							
						}
					}
					switch (sort) {
						case 1:
							result = fastsort(list).desc(u => parseInt(u.name2));
							break;
						case 2:

							result = fastsort(list).asc(u => parseInt(u.name2));
							break;
						case 0:
							result = list
							break;
					}
                 
					var result2 = JSON.stringify(result)

					var getres = parseInt(this.evalMessage(data.getresults, cache));


					if (!getres) {

						getres = result.length;
					}

					for (var i = 0; i < getres; i++) {
						var result2 = JSON.stringify(list[i])

						try {
							var file = JSON.parse(result2)


							var res = JSONPath({
								path: '$..name2',
								json: file
							});
							var res2 = JSONPath({
								path: '$..id',
								json: file
							});

							var username = res2
							var result = res

							eval(' ' + st + ' ');
							var middle = "," + mid + ""
							eval(' ' + en + ' ');
							var username = res2
							var result = res
							var en2 = eval(en);
							var st2 = eval(st);
							list5.push("easter egg :eyes:")
							switch (selectionsnum) {
								case 1:


									list2.push(st2 + middle + en2 + ',')
									break;
								case 2:

									var num = list5.length;
									var numbef = this.evalMessage(data.numbefst2, cache)
									list2.push(num + numbef + "" + st2 + middle + en2 + ',')
									break;
							}

						} catch (err) {
							switch (debug) {
								case 0:
								
								break;
								case 1:
								break;
							} 
						}




						list4 = list2.join('')

					}

					_this.storeValue(list4, storage, varName2, cache)
					_this.callNextAction(cache);
				} catch (err) {
					switch (debug) {
						case 0:
						
						break;
						case 1:
						break;
					} 
				}

			}
		}



	},

	mod: function (DBM) {}

};
