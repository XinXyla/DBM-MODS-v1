module.exports = {


	name: "Clear all control variables",



	section: "Other Stuff",


	subtitle: function(data) {
		return "All variable controls are clean";
	},


	fields: [],



	html: function(isEvent, data) {
		return "Criado por XinXyla#0001";
	},



	init: function() {},


	action: function(cache) {
		const variable = this.getVariable(cache);
		delete variable;
		this.callNextAction(cache);
	},


	mod: function() {}
};
