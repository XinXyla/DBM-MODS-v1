module.exports = {

	name: "Classificar lista",
	
	section: "Lists and Loops",
	
	subtitle: function(data) {
		const list = ['', 'Temp Variable', 'Server Variable', 'Global Variable'];
		const classic = ['Classificar por ordem alfabética','','Ordenar os números em ordem crescente','Ordenar os números em ordem decrescente','Classificar por ordem alfabética reversa','Classificar por comprimento crescente','Classificar por comprimento decrescente'];
		return `(${classic[parseInt(data.sort)]}) ${list[parseInt(data.list)]} (${data.varName}) para ${list[parseInt(data.storage)]} (${data.varName2})`;
	},
	
	author: "XinXyla#0001",
	
	
	version: "1.0.0",
	
	short_description: "Classificar uma lista",
	
	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		return ([data.varName2, 'List']);
	},
	
	fields: ["list", "varName", "storage", "varName2", "sort"],
	
	html: function(isEvent, data) {
		return `
		<div><p>Criado por XinXyla#0001</p></div><br>
	<div>
		<div style="float: left; width: 35%;">
			Fonte da Lista:<br>
			<select id="list" class="round" onchange="glob.refreshVariableList(this)">
				${data.variables[1]}
			</select><br>
		</div>
		<div id="varNameContainer" style=" float: right; width: 60%;">
		Nome da variável:<br>
			<input id="varName" class="round" type="text" list="variableList"><br>
		</div><br><br><br>
		<div>
		Classificar lista:<br>
			<select id="sort" class="round" style="width: 94%;">
			<option value="2" selected>Ordenar números ordem crescente [0-9]</option>
			<option value="3">Ordenar números ordem decrescente [9-0]</option>
				<option value="0">Classificar por ordem alfabética [A-Z]</option>
				<option value="4">Classificar por ordem alfabética reversa [Z-A]</option>
				<option value="5">Classificar por comprimento [ordem crescente]</option>
				<option value="6">Classificar por comprimento [ordem decrescente]</option>
				
			</select>
		</div>
	</div><br>
	<div>
		<div style="float: left; width: 35%;">
			Armazenar em:<br>
			<select id="storage" class="round">
				${data.variables[1]}
			</select>
		</div>
		<div id="varNameContainer2" style="float: right; width: 60%;">
			Nome da Variável:<br>
			<input id="varName2" class="round" type="text">
		</div>
	</div>`
	},
	
	init: function() {
		const {glob, document} = this;
	
		glob.refreshVariableList(document.getElementById('list'));
	
	},
	
	
	
	action: function(cache) {
		const data = cache.actions[cache.index];
		const storage = parseInt(data.list);
		const varName = this.evalMessage(data.varName, cache);
		const list = this.getVariable(storage, varName, cache);
		const sort = parseInt(data.sort);
	
		switch(sort) {
			case 0:
				break;
			case 1:
				break;
			case 2:
				list.sort((a ,b)=> a - b);
				break;
			case 3:
				list.sort((a ,b)=> b - a);
				break;
			case 4:
				list.sort().reverse();
				break;
			case 5:
				list.sort(function(a, b){return a.length - b.length});
				break;
			case 6:
				list.sort(function(a, b){return b.length - a.length});
				break;
		}
		
		if(list) {
			const varName2 = this.evalMessage(data.varName2, cache);
			const storage2 = parseInt(data.storage);
			this.storeValue(list, storage2, varName2, cache);
		}
	
		this.callNextAction(cache);
	},
	
	
	
	mod: function(DBM) {
	}
	
	}; 