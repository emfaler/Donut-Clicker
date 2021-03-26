
//Text 
const donutCount = document.getElementById("donutCount");
const autoCountText = document.getElementById("autoCountText");
const dpsText = document.getElementById("DPS");
const multCountText = document.getElementById("multCountText");
const autoText = document.getElementById("autoText");
const multText = document.getElementById("multText");

//Buttons 
let clickButton = document.getElementById("clickButton");
let autoButton = document.getElementById("autoButton");
let multButton = document.getElementById("multButton");
let resetButton = document.getElementById("resetButton")

//create donut obj
let dc = new Donut();

//Add eventlisteners to buttons

clickButton.addEventListener("click", Click);
autoButton.addEventListener('click', AddClicker);
multButton.addEventListener('click', AddMultiplier);
resetButton.addEventListener('click', resetDonut)

//Click function

function Click(){
    dc.AddDonuts(dc.getMultiplier());
    UpdateText();
}



//increase clicker Count
function AddClicker() {
    if(dc.AllDonuts >= dc.getAutoClickerCost()){
        dc.AddDonuts(-dc.getAutoClickerCost());
        dc.AddAuto();
        dc.UpAutoCost();
        UpdateText();
    }
}

//increase Multiplier Count
function AddMultiplier(){
    if(dc.AllDonuts >= dc.getMultiplierCost()){
        dc.AddDonuts(-dc.getMultiplierCost());
        dc.AddMult();
        dc.UpMultCost();
        UpdateText();
    }
}

function UpdateText(){
    donutCount.innerText = "Your Donuts: "+ dc.getAllDonuts().toFixed(0);
    dpsText.innerText = "DPS (Donuts Per Second): "+ (dc.getAutoClickerCount() * dc.getMultiplier()).toFixed(2);
    autoCountText.innerText = "AUTO Clickers: " + dc.getAutoClickerCount();
    multCountText.innerText = "Current Multiplier: " + dc.getMultiplier().toFixed(2) + "x";
    autoText.innerText = "Auto Clicker Cost: "+ dc.getAutoClickerCost().toFixed(2) + " Donuts";
    multText.innerText = "Multiplier Cost: " + dc.getMultiplierCost().toFixed(2) + " Donuts";
    UpdateButtons();
}
//UpdateText();


    function UpdateButtons(){
        autoButton.disabled = !(dc.getAllDonuts() >= dc.getAutoClickerCost());
        multButton.disabled = !(dc.getAllDonuts() >= dc.getMultiplierCost());
    
    }
    
    
    var myVar = setInterval(TimedAuto, 100);
    function TimedAuto(){
        dc.DonutCount = dc.AddDonuts(dc.getAutoClickerCount() * dc.getMultiplier() / 10);
        UpdateText();
    }
    
    function resetDonut(){
        dc = new Donut();
        UpdateText();
        }
        

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("gameInfoModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}