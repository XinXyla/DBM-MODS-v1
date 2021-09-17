module.exports = {
	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------

	name: "Store Channel Info MOD",

	//---------------------------------------------------------------------
	// Action Section
	//
	// This is the section the action will fall into.
	//---------------------------------------------------------------------

	section: "Channel Control",

	//---------------------------------------------------------------------
	// Action Subtitle
	//
	// This function generates the subtitle displayed next to the name.
	//---------------------------------------------------------------------

	subtitle: function(data) {
		const channels = ["Same Channel", "Mentioned Channel", "1st Server Channel", "Temp Variable", "Server Variable", "Global Variable"];
		const info = ["Channel Object", "Channel Name", "Channel ID", "Channel Server", "Channel Last Message", "Channel Last Message ID", "Channel is NSFW?", "Channel is DM?",  "Channel is Text?", "Channel is Voice?", "Channel is Category?", "Channel is News?", "Channel is Store?", "Channel is Deletable?", "Channel Type", "Channel Position", "Channel Topic", "Channel Created At", "Channel Created Timestamp", "Channel Category", "Channel Category ID", "Channel Invites", "Channel Users Permissions", "Channel Roles Permissions"];
		return `${channels[parseInt(data.channel)]} - ${info[parseInt(data.info)]}`;
	},

	//---------------------------------------------------------------------
	// Action Storage Function
	//
	// Stores the relevant variable info for the editor.
	//---------------------------------------------------------------------

	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		const info = parseInt(data.info);
		let dataType = "Unknown Type";
		switch(info) {
			case 0:
				dataType = "Channel";
				break;
			case 1:
				dataType = "Text";
				break;
			case 2:
				dataType = "Channel ID";
				break;
			case 3:
				dataType = "Channel Server";
				break;
			case 4:
				dataType = "Last Message ID";
				break;
			case 5:
				dataType = "Last Message";
				break;
			case 6:
				dataType = " Is NSFW?";
				break;
			case 7:	
				dataType = "Is DM?"	
				break;	
			case 8:
				dataType = "Is Text?";
				break;
			case 9:
				dataType = "Is Voice?";
				break;
			case 10:
				dataType = "Is Category?";
				break;
			case 11:
				dataType = "Is News?";
				break;
			case 12:
				dataType = "Is Store?";
				break;
			case 13:
				dataType = "Is Deletable?";
				break;
			case 14:
				dataType = "Channel Type";
				break;
			case 15:
				dataType = "Channel Position";
				break;
			case 16:
				dataType = "Channel Topic";
				break;
			case 17:
				dataType = "Created At";
				break;
			case 18:
				dataType = "Created Timestamp";
				break;
			case 19:
				dataType = "Category"
				break;
			case 20:
				dataType = "Category ID"
				break;
			case 21:
				dataType = "Invites"
				break;
			case 22:
				dataType = "Users Permissions"
				break;
			case 23:
				dataType = "Roles Permissions"
		}
		return ([data.varName2, dataType]);
	},

	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------

	fields: ["channel", "varName", "info", "storage", "varName2"],

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
<div>
<div><p>This action has been modified by Jookie#0282 and XinXyla#0001</p></div><br>

	<div style="float: left; width: 35%;">
		Source Channel:<br>
		<select id="channel" class="round" onchange="glob.channelChange(this, 'varNameContainer')">
			${data.channels[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div>
</div><br><br><br>
<div>
	<div style="padding-top: 8px; width: 70%;">
		Source Info:<br>
		<select id="info" class="round">
		</optgroup>
      <optgroup label="Channel Infos">
			<option value="0" selected>Channel Object</option>
			<option value="2">Channel ID</option>
			<option value="1">Channel Name</option>
			<option value="3">Channel Server</option>
			<option value="15">Channel Position</option>
			<option value="16">Channel Topic</option>
			<option value="22">Channel Users Permissions</option>
			<option value="23">Channel Roles Permissions</option>
			<option value="21">Channel invites</option>
			<option value="4">Channel Last Message</option>
			<option value="5">Channel Last Message ID</option>
			</optgroup>
      <optgroup label="Channel Types">
			<option value="6">Channel Is NSFW?</option>
			<option value="7">Channel Is DM?</option>
			<option value="8">Channel Is Text?</option>
			<option value="9">Channel Is Voice?</option>
			<option value="10">Channel Is Category?</option>
			<option value="11">Channel Is News?</option>
			<option value="12">Channel Is Store</option>
			<option value="13">Channel Is Deletable?</option>
			<option value="14">Channel Type</option>
			</optgroup>
      <optgroup label="Channel Date Infos">
			<option value="17">Channel Created At</option>
			<option value="18">Channel Created Timestamp</option>
			</optgroup>
      <optgroup label="Channel Category Infos">
			<option value="19">Channel Category</option>
			<option value="20">Channel Category ID</option>
		</select>
	</div>
</div><br>
<div>
	<div style="float: left; width: 35%;">
		Store In:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer2" style="float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName2" class="round" type="text"><br>
	</div>
</div>`;
	},

	//---------------------------------------------------------------------
	// Action Editor Init Code
	//
	// When the HTML is first applied to the action editor, this code
	// is also run. This helps add modifications or setup reactionary
	// functions for the DOM elements.
	//---------------------------------------------------------------------

	init: function() {
		const { glob, document } = this;

		glob.channelChange(document.getElementById("channel"), "varNameContainer");
	},

	//---------------------------------------------------------------------
	// Action Bot Function
	//
	// This is the function for the action within the Bot's Action class.
	// Keep in mind event calls won't have access to the "msg" parameter,
	// so be sure to provide checks for variable existance.
	//---------------------------------------------------------------------

	action: async function(cache) {
		const data = cache.actions[cache.index];
		const DiscordJS = this.getDBM().DiscordJS;
		const channel = parseInt(data.channel);
		const varName = this.evalMessage(data.varName, cache);
		const info = parseInt(data.info);
		const targetChannel = this.getChannel(channel, varName, cache);
		if(!targetChannel) {
			this.callNextAction(cache);
			return;
		}
		let result;
		switch(info) {
			case 0:
				result = targetChannel;
				break;
			case 1:
				result = targetChannel.name;
				break;
			case 2:
				result = targetChannel.id;
				break;
			case 3:
				result = targetChannel.guild;
				break;
			case 4:
				result = targetChannel.lastMessageID;
				break;
			case 5:
				result = targetChannel.lastMessage;
				break;
			case 6:
				result = targetChannel.nsfw;
				break;
			case 7:
				result = targetChannel instanceof DiscordJS.DMChannel;
				break;
			case 8:
				result = targetChannel instanceof DiscordJS.TextChannel;
				break;
			case 9:
				result = targetChannel instanceof DiscordJS.VoiceChannel;
				break;
			case 10:
				result = targetChannel instanceof DiscordJS.CategoryChannel;
				break;
			case 11:
				result = targetChannel instanceof DiscordJS.NewsChannel;
				break;
			case 12: 
				result = targetChannel instanceof DiscordJS.StoreChannel;
				break
			case 13:
				result = targetChannel.deletable;
				break;
			case 14:
				result = targetChannel.type;
				break;	
			case 15:
				result = targetChannel.position;
				break;
			case 16:
				result = targetChannel.topic;
				break;
			case 17:
				result = targetChannel.createdAt;
				break;
			case 18:
				result = targetChannel.createdTimestamp;
				break;
			case 19:
				result = targetChannel.parent;
				break;
			case 20:
				result = targetChannel.parentID;
				break;
			case 21:
				const invites = await targetChannel.fetchInvites();
				if(invites.size == 0) {
					result = "Theres no invites"
				} else {
					result = invites.array();
				}
				break;
			case 22:
				   result = targetChannel.permissionOverwrites.filter(p => p.type=='member').map(p => `**Usuário**: <@${p.id}>\n • Habilitado: ${p.allow.toArray().length>=1?p.allow.toArray():'Nada'}\n • Desabilitado: ${p.deny.toArray().length>=1?p.deny.toArray():'Nada'}`).join('@@@')
				break;
			case 23:
				result = targetChannel.permissionOverwrites.filter(p => p.type=='role').map(p => `**Cargo**: <@&${p.id}>\n • Habilitado: ${p.allow.toArray().length>=1?p.allow.toArray():'Nada'}\n • Desabilitado: ${p.deny.toArray().length>=1?p.deny.toArray():'Nada'}`).join('@@@')
				break;
			default:
				break;
		}
		if(info === 4) {
            targetChannel.messages.fetch(targetChannel.lastMessageID).then(function(resultMessage) {
                const storage = parseInt(data.storage);
                const varName2 = this.evalMessage(data.varName2, cache);
                this.storeValue(resultMessage, storage, varName2, cache);
                this.callNextAction(cache);
            }.bind(this)).catch(this.displayError.bind(this, data, cache));
        } else if(result !== undefined) {
            const storage = parseInt(data.storage);
            const varName2 = this.evalMessage(data.varName2, cache);
            this.storeValue(result, storage, varName2, cache);
            this.callNextAction(cache);
        } else {
            this.callNextAction(cache);
        }
	},

	//---------------------------------------------------------------------
	// Action Bot Mod
	//
	// Upon initialization of the bot, this code is run. Using the bot's
	// DBM namespace, one can add/modify existing functions if necessary.
	// In order to reduce conflictions between mods, be sure to alias
	// functions you wish to overwrite.
	//---------------------------------------------------------------------

	mod: function() {}
}; // End of module
