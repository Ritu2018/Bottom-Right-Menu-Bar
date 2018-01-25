var trigger = 0;
	var button = document.getElementsByClassName("circle-button")[0];
	var elementbox = document.getElementsByClassName("element-container")[0];
	var btntext = document.getElementById("button-text-i");
	var container = document.getElementsByClassName("menu-circle-button-container")[0];

	button.onclick = function() {
		btntext.classList.toggle("ion-close");
		if(trigger == 0) {
			container.style.display = "block";
			setTimeout(function() {container.style.opacity = 1;	elementbox.style.marginTop = "10%";},200);
			for(i=0;i<4;++i) {document.getElementsByClassName("main-element")[i].style.opacity = "1";}
			trigger = 1;
		}
		else {
			container.style.opacity = 0;
			elementbox.style.marginTop = "60%";
			setTimeout(function() {container.style.display = "none";},200);
			for(i=0;i<4;++i) {document.getElementsByClassName("main-element")[i].style.opacity = "0";}
			trigger = 0;
		}
	}
