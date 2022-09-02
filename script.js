let r = ""

function generate() {
    r = (Math.random() + 1).toString(36).substring(2);
    console.log("random", r);
    document.getElementById("passOut").innerHTML = r
}

function copyButton() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", r);
}