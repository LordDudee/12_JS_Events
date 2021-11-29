
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
let appStatus = true;
output(appStatus);

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
window.addEventListener("load",toggleAppStatus);

btn.addEventListener("click",toggleAppStatus);



/********  Business-Logic | Toggle **********/

function toggleAppStatus() {
    appStatus = !appStatus;
    updateView();
}

/********  Änderung in View-Schicht **********/

// Modul: Update der View-Schicht | Test:
// .. View folgt status

function updateView() {
    if (appStatus) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

// Modul: Umschaltung Klassennamen | Test:
// switchClassName("night");
// switchClassName("day");

function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
    }

/* Tools */
function output(outputData) {
    console.log(outputData);
}