class Uber{
    constructor(basePrice,costPerMinute,costPerKM){
        this.basePrice = basePrice;
        this.costPerMinute = costPerMinute;
        this.costPerKM = costPerKM;
    }
    rideCost(distance,duration){
        let distanceCost = distance * this.costPerKM;
        let durationCost = duration * this.costPerMinute;
        console.log(`
        The cost for the Ride is ${(this.basePrice + distanceCost + durationCost).toFixed(2)} Rupees
        `);
    }
}

const ride1 = new Uber(20,5,15);
ride1.rideCost(10.8,21.3);