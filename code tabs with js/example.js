
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

function create_code_tabs(file_path){
    var section = document.createElement("p");
    section.id = "code_snippets"
    document.body.appendChild(section);
}
