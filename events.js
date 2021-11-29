
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
// const btn = document.body.children[0];


/********  Event-Listener **********/

btn.addEventListener("click",onClick);
btn.addEventListener("mouseenter",onRollIn);
btn.addEventListener("mouseleave",onRollOut);

function onClick() {
    output("clicked");
}

function onRollIn() {
    output("rolled in");
}

function onRollOut() {
    output("rolled out");
}


/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/



/* Tools */
function output(outputData) {
    console.log(outputData);
}