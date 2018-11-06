
// https://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-pure-javascript
function file_exists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}

function load_file(filePath) {
  // cors not playing nice
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function create_code_tabs(file_path){
    // create a section
    // <section id="code_snippets" style="padding-bottom: 0;" class="section">
    var section = document.createElement("section");
    section.id = "code_snippets";
    section.style = "padding-bottom: 0;";
    section.className = "section";

    if(file_path == null){
      // if no file path is specified then show an error message and return early
      var text = document.createTextNode("ERROR LOADING CODE SNIPPETS!");
      section.appendChild(text);
      document.body.appendChild(section);
      return;
    }

    // create a div
    var div = document.createElement("div");
    div.style = "margin-bottom: 0;";
    div.className = "tabs is-centered is-toggle-rounded has-background-white-ter"

    // and an unordered list
    var ul = document.createElement("ul");

    // check for file extensions and add their contents to the ul
    var file_extensions_dict = {
      "python": ".py",
      "r": ".r",
      "julia": ".jl",
      "c": ".c"
    };

    // update all of our list items
    for (var name in file_extensions_dict) {
      // <li class="tablink is-active" onclick="openCode(event, 'python')">
      var ext = file_extensions_dict[name];
      var li = document.createElement("li");
      if(ext == ".py"){
        li.className = "tablink is-active";
      }else{
        li.className = "tablink";
      }
      li.setAttribute("onClick", "javascript: open_code(event, '"+ name +"')");

      // also add the internals of our li
      // <a> <span class="icon is-large">
      //		 <img src="python_logo.png" alt="Python"></i></span>
      // </a>
      var a = document.createElement("a");
      var span = document.createElement("span");
      span.className = "icon is-large";
      var img = document.createElement("img");
      img.src = "images/" + name + "_logo.png";
      img.alt = name;

      span.appendChild(img);
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);
    };

    div.appendChild(ul);
    section.appendChild(div);

    // now add in the tab content at the end
    for (var name in file_extensions_dict) {
      /*
      <div id="python" class="tabcontent">
      <pre><code class="python">
      def fib(n):
       if n==1 or n==2:
        return 1
       return fibR(n-1)+fibR(n-2)
      </code></pre>
      </div>
      */
      var ext = file_extensions_dict[name];
      var div = document.createElement("div");
      div.id = name;
      div.className = "tabcontent";

      var pre = document.createElement("pre");
      var code = document.createElement("code");
      code.className = name;

      // loading data from external files is not so easy it seems
      // read the code snippets here
      //var text = document.createTextNode("SOME CODE HERE!");
      //code.appendChild(text);
      //<object type="text/plain" data="test.py"></object>
      var object = document.createElement("object");
      //object.type = "text/plain";
      object.data = file_path + ext;

      code.appendChild(object);
      pre.appendChild(code);
      div.appendChild(pre);
      section.appendChild(div);
    }

    document.body.appendChild(section);
}

//***********************************************************
// Now for the final bit of js to only show what we want
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

function open_code(evt, codeName) {
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
