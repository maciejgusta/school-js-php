var number = 10;
var string = "Hello There";
var isRad = true;
var groceries = ["Milk", "Eggs", "Cheese"]

if (number == 10){
    console.log("Yes")
} else {
    console.log("No")
}
document.getElementById('box').innerHTML = number + 5;

function listGroceries(){
    for (var i = 0; i < groceries.length; i++){
        console.log(groceries[i]);
    }
}

listGroceries();

document.getElementById("box").addEventListener("click", function(){
    alert("I got clicked");
});