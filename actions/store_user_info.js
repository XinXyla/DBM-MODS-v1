module.exports = {


	name: "Store User Info",



	section: "Member Control",



	subtitle: function(data) {
		const members = ["Mentioned User", "Command Author", "Temp Variable", "Server Variable", "Global Variable"];
		const info = ["User Object", "User ID", "Username", "User Discriminator", "User Tag", "Image Avatar URL", "User Created At", "User Created Timestamp", "User Flags List", "Is Bot?"];
		return `${members[parseInt(data.member)]} - ${info[parseInt(data.info)]}`;
	},



	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		const info = parseInt(data.info);
		let dataType = "Unknown Type";
		switch(info) {
			case 0:
				dataType = "User";
				break;
			case 1:
				dataType = "User ID";
				break;
			case 2:
				dataType = "Username";
				break;
			case 3:
				dataType = "User Discriminator";
				break;
			case 4:
				dataType = "User Tag";
				break;
			case 5:
				dataType = "Avatar URL";
				break;
			case 6:
				dataType = "Date";
				break;
			case 7:
				dataType = "Timestamp";
				break;
			case 8:
				dataType = "Flags";
				break;
			case 9:
				dataType = "Is Bot?";
				break;
		}
		return ([data.varName2, dataType]);
	},



	fields: ["member", "varName", "info", "storage", "varName2"],



	html: function(isEvent, data) {
		return `
<div> Criado por XinXyla#0001<br><br>
	<div style="float: left; width: 35%;">
		Fonte do Usuário:<br>
		<select id="member" class="round" onchange="glob.memberChange(this, 'varNameContainer')">
			${data.members[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 60%;">
		Nome da Variável:<br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div>
</div><br><br><br>
<div>
	<div style="padding-top: 8px; width: 94%;">
		Informações:<br>
		<select id="info" class="round">
			<option value="0" selected>Member Object</option>
			<option value="1">User ID</option>
			<option value="2">Username</option>
			<option value="3">User Discriminator</option>
			<option value="4">User Tag</option>
			<option value="5">Avatar URL</option>
      <option value="6">User Created At</option>
      <option value="7">User Created Timestamp</option>
      <option value="8">User Flags List</option>
	  <option value="9">Is Bot?</option>
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
		<input id="varName2" class="round" type="text"><br>
	</div>
</div>`;
	},



	init: function() {
		const { glob, document } = this;

		glob.memberChange(document.getElementById("member"), "varNameContainer");
	},


	action: function(cache) {
		const data = cache.actions[cache.index];
		const member = parseInt(data.member);
		const varName = this.evalMessage(data.varName, cache);
		const info = parseInt(data.info);
		const mem = this.getMember(member, varName, cache);
		if(!mem) {
			this.callNextAction(cache);
			return;
		}
		let result;
		switch(info) {
			case 0:
				result = mem;
				break;
			case 1:
				result = mem.id;
				break;
			case 2:
				result = mem.username;
				break;
			case 3:
				result = mem.discriminator;
				break;
			case 4:
				result = mem.tag;
				break;
			case 5:
				result = mem.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
				break;
			case 6:
				result = mem.createdAt;
				break;
			case 7:
				result =mem.createdTimestamp;
				break;
			case 8:
				const flags = this.dest(mem, "flags");
				result = flags && flags.toArray();
				break;
			case 9:
				result = this.dest(mem, 'bot') || mem.bot
				break;
			default:
				break;
		}
		if(result !== undefined) {
			const storage = parseInt(data.storage);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage, varName2, cache);
		}
		this.callNextAction(cache);
	},



	mod: function() {}
};
