
	var menubtn = document.getElementsByClassName("circle-menubar-button")[0];
	var btntxt = document.getElementById("btn-text");
	var maincontainer = document.getElementsByClassName("main-container")[0];

	menubtn.onclick = function() {
			maincontainer.classList.toggle("show");
			btntxt.classList.toggle("ion-close");
	}
