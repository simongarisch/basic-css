/* we have already attached our links to the openCode function with onclick="openCode(event, '...')" */

function closeAllTabcontentElements(){
  // get all elements with class="tabcontent" and hide them
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

function removeActiveForTablinks(){
  /* Bulma flags active link as "is-active"
     get all elements with class="is-active" remove this class association
     multiple classes for elements are separated by a space, so be sure to 
     remove this space too */
  var i, tablinks;
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
}

function showFirstOnly(){
  // only show code for the first option (Python in this case)
  closeAllTabcontentElements();
  var tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  tabcontent[0].style.display = "block";
}
showFirstOnly(); // and run this

function openCode(evt, codeName) {
  // open a particular code snippet on click
  closeAllTabcontentElements();
  removeActiveForTablinks();

  if (codeName == null){
    //alert("Dude. Got no codeName value here!")
  }else{
    // Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(codeName).style.display = "block";
	evt.currentTarget.className += " is-active";
  }
}

