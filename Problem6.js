// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  
// Execute a function and return an array that only contains BMW and Audi cars.
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results
// of the array in the console.
    
    const modelBMWAudi = function(inventory)
    {   
        let model_Bmw_Audi = new Array();
        let j = 0;     
        for(let i = 0 ; i < inventory.length; i++)
        {            
            if(inventory[i].car_make == "BMW" || inventory[i].car_make == "Audi")
            {
                model_Bmw_Audi[j] = inventory[i];
                j++;
            }
        }
        return JSON.stringify(model_Bmw_Audi);        
    }
    //console.log(modelBMWAudi(inventory));
    module.exports = {
        modelBMWAudi
    };
     