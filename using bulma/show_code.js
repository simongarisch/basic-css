function openCode(evt, codeName) {
    // Declare all variables
    var i, tabcontent, tablink;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
	console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
	

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
	//alert("We have "+ tablinks.length + " tablinks")
    for (i = 0; i < tablinks.length; i++) {
		// Bulma flags active link as "is-active"
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }

	if (codeName == null){
	    //alert("Dude. Got no codeName value here!")
	}else{
		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(codeName).style.display = "block";
		evt.currentTarget.className += " is-active";
	}
	
}

/*
we have already sorted our links with onclick="openCode(event, '...')"
but we need to link in the button too
link the button click to our function
*/
openCode()
btn = document.getElementById("btn");
btn.addEventListener("click", openCode);