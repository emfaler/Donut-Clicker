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
}
UpdateText();

var myVar = setInterval(TimedAuto, 100);
function TimedAuto(){
    dc.DonutCount = dc.AddDonuts(dc.getAutoClickerCount() * dc.getMultiplier() / 10);
    UpdateText();
}


function resetDonut(){
    dc = new Donut();
    UpdateText();
    }


    
    
    