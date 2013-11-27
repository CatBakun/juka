var playerOne = playerTwo = null,
	socket = io.connect();
	
socket.on('connect', function(){
	console.log('Socket connection established');
});

socket.on("fullGame", function(){
	alert("El juego esta lleno.");
});

socket.on('imPlayerOne', function(data){
	alert("Soy el primer jugador.");
	playerOne=socket.id;
});

socket.on('imPlayerTwo', function(playerOneId){
	alert("Soy el jugador 2. El jugador 1 es: "+playerOneId);
	playerTwo=socket.id;
	playerOne=playerOneId
});

socket.on('playerTwoConnected', function(playerTwoId){
	alert("El jugador 2 se ha conectado con la id: "+playerTwoId);
});

socket.on('playerDisconnected', function(playerId){
	delete this.players[playerId];
});
