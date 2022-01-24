window.Game = {};
Game.saves = {'slot1':{}, 'slot2':{}, 'slot3':{}};
Game.init = function() {
}
$(document).ready(function() {
	Game.init()
})
Game.load = function(slot) {
	if (slot === 0) {
		Game.setScreen("#load")
	}
}
Game.new = function(slot) {
	if (slot === 0) {
		Game.setScreen("#new")
	}
}
Game.save = function() {
	localStorage.setItem('mtm-save', btoa(JSON.stringify(Game.saves)));
}
Game.loadSave = function() {
	Game.saves = JSON.parse(atob(localStorage.getItem('mtm-save')));
}
Game.setScreen = function(screen) {
	$(".screen").removeClass('hidden visible');
	$(".screen").addClass('hidden');
	$(screen).addClass('visible');
	$(screen).removeClass('hidden');
}
