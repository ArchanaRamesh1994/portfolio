// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');

// Get the main container and the body
var body = document.getElementsByTagName('body');
var container = document.getElementById('myContainer');

// Get the open button
var btnOpen1 = document.getElementById("firstCell");
var btnOpen2 = document.getElementById("secondCell");
var btnOpen3 = document.getElementById("thirdCell");
var btnOpen4 = document.getElementById("fourthCell");
var btnOpen5 = document.getElementById("fifthCell");


// Get the close button
var btnClose1 = document.getElementById("closeModal1");
var btnClose2 = document.getElementById("closeModal2");
var btnClose3 = document.getElementById("closeModal3");
var btnClose4 = document.getElementById("closeModal4");
var btnClose5 = document.getElementById("closeModal5");

// Open the modal
btnOpen1.onclick = function() {
    modal1.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal1.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}

btnOpen2.onclick = function() {
    modal2.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal2.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}

btnOpen3.onclick = function() {
    modal3.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal3.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}

btnOpen4.onclick = function() {
    modal4.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal4.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}

btnOpen5.onclick = function() {
    modal5.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal5.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}


// Close the modal
btnClose1.onclick = function() {
    modal1.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}

// Close the modal
btnClose2.onclick = function() {
    modal2.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}
// Close the modal
btnClose3.onclick = function() {
    modal3.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}
// Close the modal
btnClose4.onclick = function() {
    modal4.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}
// Close the modal
btnClose5.onclick = function() {
    modal5.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
    if (event.target == modal2) {
        modal2.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
    if (event.target == modal3) {
        modal3.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
    if (event.target == modal4) {
        modal4.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
    if (event.target == modal5) {
        modal5.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
}
