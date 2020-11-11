let socket=io("http://circuslabs.net:20202");socket.emit("request roll",{count:1,faces:6,name:"chris"}),socket.on("rolled",(function(e){console.log(e)}));
//# sourceMappingURL=main.js.map