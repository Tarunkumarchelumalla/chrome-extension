let button = document.getElementById("2");
button.addEventListener("click", clickFunction); // getting the emelmnt using dom 
var address;
function clickFunction() {

    var  a =document.getElementById("ok");
    // down below it is an api call that chrome provides to uswe can use it
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
    
        console.log("Title: " + title);
        address = title;
     
    
        a.innerHTML=address;// id we got from above 
    });
  }