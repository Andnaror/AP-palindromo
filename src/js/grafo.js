const { Diagram } = require("gojs");

var G =  go.GraphObject.make;

var miGrafo = G(go.Diagram,"divGrafo",
{"undoManager.isEnabled": true});

miGrafo.nodeTemplate = 
G(go.Node, "Horizontal"), G(go.TextBlock,"Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" },)

miGrafo.model = new go.GraphLinksModel( [ // the nodeDataArray
  { key: "A" },
  { key: "B" },
  { key: "C" }
],
[ // the linkDataArray
  { from: "A", to: "B" },
  { from: "B", to: "C" }
]);