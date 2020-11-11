console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

let socket = io('http://circuslabs.net:20202');

socket.emit('request roll', {
	count: 1,
	faces: 6,
	name: 'chris',
});

socket.on('rolled', function (data) {
	console.log(data);
});
