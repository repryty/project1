var sortbtn = document.getElementById("sort1");
var end;
sortbtn.addEventListener("click", function(){
    fetch(window.location.href.replace("sort.html", "")+"result?t=sort&q="+document.getElementById("action1").value)
    .then((response) => response.json())
    .then((data) => end =(data.result));
    
    setTimeout(() => {
        var output = document.getElementById("output");
    output.value = end
    }, 1000);
    
})

