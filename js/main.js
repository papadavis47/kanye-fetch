
document.addEventListener("DOMContentLoaded", function() {
var placeholder = document.createElement("h3");
var display = document.getElementById("display-quote").appendChild(placeholder);
const button = document.getElementById("get-started");

button.addEventListener('click', function(e) {
        fetch("https://api.kanye.rest")
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            console.log(jsonData)
            console.log(jsonData.quote);
            display.innerHTML = jsonData.quote;
            
        })
        
        })
});
