const { Diagram } = require("gojs");

var G =  go.GraphObject.make;

var miGrafo = G(go.Diagram,"divGrafo",
{"undoManager.isEnabled": true});

miGrafo.nodeTemplate = 
G(go.Node, "Horizontal"), G(go.TextBlock,"Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" },)
