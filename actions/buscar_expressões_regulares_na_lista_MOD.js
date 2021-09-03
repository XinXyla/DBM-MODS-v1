module.exports = {



	name: "Buscar expressões regulares na lista",
	
	section: "Lists and Loops",
	
	author: "XinXyla#0001",
	
	version: "1.9.6",
	
	short_description: "Esta ação procura um texto com a expressão regular no item de uma lista e retorna a posição.",
	
	subtitle: function(data) {
		const list = ['Server Members', 'Server Channels', 'Server Roles', 'Server Emojis', 'All Bot Servers', 'Mentioned User Roles', 'Command Author Roles', 'Temp Variable', 'Server Variable', 'Global Variable'];
		return `Procurar expressão regular "${data.item}" em ${list[parseInt(data.list)]}`;
	},
	
	
	
	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		return ([data.varName2, 'Number']);
	},
	
	
	
	fields: ["list", "varName", "item", "storage", "varName2"],
	
	
	
	html: function(isEvent, data) {
		return `
		<div><p>Feito por XinXyla#0001</p></div><br>
	<div><b></b>
		<div style="float: left; width: 45%;">
			Fonte da lista:<br>
			<select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
				${data.lists[isEvent ? 1 : 0]}
			</select>
		</div>
		<div id="varNameContainer" style="display: none; float: right; width: 50%;">
		Nome da variável::<br>
			<input id="varName" class="round" type="text" list="variableList"><br>
		</div>
	</div><br><br><br>
	<div style="padding-top: 8px;">
		Procurar expressão regular:<br>
		<textarea id="item" rows="4" class="round" placeholder="Insira uma variável ou algum texto. Você pode usar expressões regulares aqui, exemplos\n(um,dois,tres)\nCaso coloque isso se o texto possuir um, dois ou três irá retornar a posição do item" style="width: 94%; font-family: monospace;  "></textarea>	</div><br>
	<div style="padding-top: 8px;">
		<div style="float: left; width: 35%;">
		Armazenar em:<br>
			<select id="storage" class="round">
				${data.variables[1]}
			</select>
		</div>
		<div id="varNameContainer2" style="float: right; width: 60%;">
			Nome da variável:<br>
			<input id="varName2" class="round" type="text">
		</div>
	</div><br><br><br>
	<div><p>Esta ação procura uma expressão regular em um item de uma lista e retorna a posição. <br> Observe que todas as listas em JavaScript começam em 0!</p></div><br>`
	},
	
	init: function() {
		const {glob, document} = this;
	
		glob.onChange1 = function(event) {
			const value = parseInt(event.value);
			const dom = document.getElementById('positionHolder');
			if(value < 3) {
				dom.style.display = 'none';
			} else {
				dom.style.display = null;
			}
		};
	
		glob.listChange(document.getElementById('list'), 'varNameContainer');
	},
	
	action: function(cache) {
		const data = cache.actions[cache.index];
		const storage = parseInt(data.list);
		const varName = this.evalMessage(data.varName, cache);
			const list = this.getList(storage, varName, cache);
			const item = this.evalMessage(data.item, cache);
	
			let result;
			var loop = 0;
	
		while(loop < list.length) {
				if(list[loop].match(new RegExp('^' + item + '$', 'i'))) {
					result = loop;
					break;
				} else {
					++loop;
				}
			};
	
		if (result !== undefined) {
		  const varName2 = this.evalMessage(data.varName2, cache);
		  const storage2 = parseInt(data.storage);
		  this.storeValue(result, storage2, varName2, cache);
		};
	
		this.callNextAction(cache);
	  },
	
	
	
	mod: function(DBM) {
	}
	
	}; 
