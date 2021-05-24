function changeName() {
    var name = document.getElementById("username");
    name.innerText = "any other name";
}

function accept (elem) {
    elem.parentElement.remove();

    var currentRequests = document.getElementById("requests");
    var request = parseInt(currentRequests.innerText);
    currentRequests.innerText = --request;

    var currentConnections = document.getElementById("connections");
    var connections = parseInt(currentConnections.innerText);
    currentConnections.innerText = (connections + 1) + "+";
}
function deny (elem) {
    elem.parentElement.remove();

    var currentRequests = document.getElementById("requests");
    var request = parseInt(currentRequests.innerText);
    currentRequests.innerText = --request;
}