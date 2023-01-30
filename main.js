let timesClicked = 0;

function buttonClicked() {
    timesClicked += 1;
    let buttonDiv = document.getElementById("button-div");
    buttonDiv.innerHTML = `Number of times button clicked: ${timesClicked}`;
}