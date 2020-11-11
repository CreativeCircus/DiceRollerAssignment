let socket = io('http://circuslabs.net:20202');

// how to ask the server for a roll
socket.emit('request roll', {
	count: 1,
	faces: 6,
	name: 'chris',
});

// when the server provides a roll for ANYONE (not just you), this is called
socket.on('rolled', function (data) {
	console.log(data);
});
