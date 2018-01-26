# Creating and Testing Server in Node.js

### Following Error Occur While Running the code###

	akash@akash-PC:~/Documents/node/practice$ node testServer.js
events.js:183
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 127.0.0.1:9000
    at Object._errnoException (util.js:1022:11)
    at _exceptionWithHostPort (util.js:1044:20)
    at Server.setupListenHandle [as _listen2] (net.js:1351:14)
    at listenInCluster (net.js:1392:12)
    at doListen (net.js:1501:7)
    at _combinedTickCallback (internal/process/next_tick.js:141:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    at Function.Module.runMain (module.js:686:11)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3


