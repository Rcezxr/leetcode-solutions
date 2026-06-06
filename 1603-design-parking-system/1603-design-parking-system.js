class ParkingSystem {
    constructor(big, medium, small){
    this._spaces = {
        1: big,
        2: medium,
        3: small
    };
    }
    
    addCar (carType){
        if(this._spaces[carType] > 0){
                this._spaces[carType]--;
                return true;
            }
            return false;
        }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna