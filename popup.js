let button = document.getElementById("2");
button.addEventListener("click", clickFunction);
var address;
function clickFunction() {

    var  a =document.getElementById("ok");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
    
        console.log("Title: " + title);
        address = title;
     
    
        a.innerHTML=address;
    });
  }