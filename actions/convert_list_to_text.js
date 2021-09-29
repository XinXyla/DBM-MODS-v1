module.exports = {

//---------------------------------------------------------------------
// Action Name
//
// This is the name of the action displayed in the editor.
//---------------------------------------------------------------------

name: "Convert List to Text",

//---------------------------------------------------------------------
// Action Section
//
// This is the section the action will fall into.
//---------------------------------------------------------------------

section: "Lists and Loops",

//---------------------------------------------------------------------
// Action Subtitle
//
// This function generates the subtitle displayed next to the name.
//---------------------------------------------------------------------

subtitle: function(data) {
	const list = ['Server Members', 'Server Channels', 'Server Roles', 'Server Emojis', 'All Bot Servers', 'Mentioned User Roles', 'Command Author Roles', 'Temp Variable', 'Server Variable', 'Global Variable'];
	return `Convert ${list[parseInt(data.list)]} to Text`;
},

//---------------------------------------------------------------------
// DBM Mods Manager Variables (Optional but nice to have!)
//
// These are variables that DBM Mods Manager uses to show information
// about the mods for people to see in the list.
//---------------------------------------------------------------------

// Who made the mod (If not set, defaults to "DBM Mods")
author: "DBM & TotallyNotTwo & XinXyla",

// The version of the mod (Defaults to 1.0.0)
version: "2.0.0", //Added in 1.9.2

// A short description to show on the mod line for this mod (Must be on a single line)
short_description: "Added more options to default action.",

// If it depends on any other mods by name, ex: WrexMODS if the mod uses something from WrexMods


//---------------------------------------------------------------------

//---------------------------------------------------------------------
// Action Storage Function
//
// Stores the relevant variable info for the editor.
//---------------------------------------------------------------------

variableStorage: function(data, varType) {
	const type = parseInt(data.storage);
	if(type !== varType) return;
	return ([data.varName2, 'Text']);
},

//---------------------------------------------------------------------
// Action Fields
//
// These are the fields for the action. These fields are customized
// by creating elements with corresponding IDs in the HTML. These
// are also the names of the fields stored in the action's JSON data.
//---------------------------------------------------------------------

fields: ["list", "varName", "start", "middle", "end", "storage", "varName2", "sort"],

//---------------------------------------------------------------------
// Command HTML
//
// This function returns a string containing the HTML used for
// editting actions. 
//
// The "isEvent" parameter will be true if this action is being used
// for an event. Due to their nature, events lack certain information, 
// so edit the HTML to reflect this.
//
// The "data" parameter stores constants for select elements to use. 
// Each is an array: index 0 for commands, index 1 for events.
// The names are: sendTargets, members, roles, channels, 
//                messages, servers, variables
//---------------------------------------------------------------------

html: function(isEvent, data) {
	return `
	<div><p>Aperfeiçoado por XinXyla#0001</p></div><br>
<div>
	<div style="float: left; width: 35%;">
		Fonte da Lista:<br>
		<select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
			${data.lists[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 60%;">
	Nome da variável:<br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div><br><br><br>
	<div>
	Classificar lista:<br>
		<select id="sort" class="round" style="width: 94%;">
		<option value="1" selected>Não classifique</option>
		<option value="2">Ordenar números ordem crescente [0-9]</option>
		<option value="3">Ordenar números ordem decrescente [9-0]</option>
			<option value="0">Classificar por ordem alfabética [A-Z]</option>
			<option value="4">Classificar por ordem alfabética reversa [Z-A]</option>
			<option value="5">Classificar por comprimento [ordem crescente]</option>
			<option value="6">Classificar por comprimento [ordem decrescente]</option>
			
		</select>
	</div>
</div><br>
<div style="display: table;width:97%">
	<div style="display: table-cell;">
		Inicio do item:<br>
		<input id="start" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Meio do item:<br>
		<input id="middle" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Final do item:<br>
		<input id="end" class="round" type="text" value="\\n">
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

//---------------------------------------------------------------------
// Action Editor Init Code
//
// When the HTML is first applied to the action editor, this code
// is also run. This helps add modifications or setup reactionary
// functions for the DOM elements.
//---------------------------------------------------------------------

init: function() {
	const {glob, document} = this;

	glob.listChange(document.getElementById('list'), 'varNameContainer');
},

//---------------------------------------------------------------------
// Action Bot Function
//
// This is the function for the action within the Bot's Action class.
// Keep in mind event calls won't have access to the "msg" parameter, 
// so be sure to provide checks for variable existance.
//---------------------------------------------------------------------

action: function(cache) {
	const data = cache.actions[cache.index];
	const storage = parseInt(data.list);
	const varName = this.evalMessage(data.varName, cache);
	const list = this.getList(storage, varName, cache);
	const sort = parseInt(data.sort);

	switch(sort) {
		case 0:
			list.sort();
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
			list.reverse();
			break;
		case 5:
			list.sort(function(a, b){return a.length - b.length});
			break;
		case 6:
			list.sort(function(a, b){return b.length - a.length});
			break;
	}
	
			
	const start = this.evalMessage(data.start, cache).replace('\\n', '\n');
	const middle = this.evalMessage(data.middle, cache).replace('\\n', '\n');
	const end = this.evalMessage(data.end, cache).replace('\\n', '\n');
	let result = '';

	for(let i = 0; i < list.length; i++) {
		if(i === 0) {
			result += (start + String(list[i]) + end);
		} else {
			result += (start + middle + String(list[i]) + end);
		}
	}

	if(result) {
		const varName2 = this.evalMessage(data.varName2, cache);
		const storage2 = parseInt(data.storage);
		this.storeValue(result, storage2, varName2, cache);
	}

	this.callNextAction(cache);
},

//---------------------------------------------------------------------
// Action Bot Mod
//
// Upon initialization of the bot, this code is run. Using the bot's
// DBM namespace, one can add/modify existing functions if necessary.
// In order to reduce conflictions between mods, be sure to alias
// functions you wish to overwrite.
//---------------------------------------------------------------------

mod: function(DBM) {
}

}; // End of module