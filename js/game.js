window.Game = {};
Game.saves = {};
Game.init = function() {
}
$(document).ready(function() {
	Game.init()
})
Game.load = function(slot) {
	if (slot === 0) {
		Game.setScreen("load")
	}
}
Game.new = function(slot) {
	if (slot === 0) {
		Game.setScreen("new")
	}
}
Game.save = function() {
	localStorage.setItem('mtm-save', btoa(JSON.stringify(Game.saves)));
}
Game.loadSave = function() {
	Game.saves = JSON.parse(atob(localStorage.getItem('mtm-save')));
}
