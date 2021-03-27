class Donut {

    constructor(){

        //initial values
        this.AllDonuts = 0; 
        this.AutoClickerCount = 0; 
        this.AutoClickerCost = 25;
        this.MultiplierCount = 0;
        this.MultiplierCost = 100;
    

    //inital multiplier
    this.Multiplier = 1.05;

    //Cost Increases
    this.autoPriceUp = 1.05;
    this.multPriceUp = 1.1;

    }

    getAllDonuts(){
        return this.AllDonuts;
    }

    getAutoClickerCount(){
        return this.AutoClickerCount;
    }

    getAutoClickerCost(){
        return this.AutoClickerCost;
    }

    getMultiplierCount(){
        return this.MultiplierCount;
    }

    getMultiplierCost(){
        return this.MultiplierCost;
    }

    getMultiplier(){
        return Math.pow(this.Multiplier, this.MultiplierCount);
    }



    AddDonuts = (toAdd) => {
        this.AllDonuts += toAdd;
    }

    AddAuto = () => {
        this.AutoClickerCount++;
    }

    AddMult = () => {
        this.MultiplierCount++;
    }

    UpAutoCost = () => {
        this.AutoClickerCost *= this.autoPriceUp;
    }

    UpMultCost = () => {
        this.MultiplierCost *= this.multPriceUp;
    }


 
}
