// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
//Execute a function to Sort all the car model names into alphabetical order 
//and log the results in the console as it was returned.

    const sortAlphabetically = function(inventory)
    {
        let model_Arr = new Array();
        for(let i = 0 ; i < inventory.length; i++)
        {
            model_Arr[i] = inventory[i].car_model;
        }
        return model_Arr.sort();
    }
    //console.log(sortAlphabetically(inventory));
    module.exports = {
        sortAlphabetically 
   };
   







/*
    const sort = function(inventory,car_model)
    {
        for(let i = 1 ; i < inventory.length; i++)
        {
            if(inventory[i].car_model == car_model)
               return inventory[i];
        }

    }
    console.log(sort(inventory,'Q7'));
*/

/*
    const sort = function(inventory)
    {
        for(let i = 1 ; i < inventory.length; i++)
        {
            for(let j = 2 ; j < inventory.length; j++)
        {
            if(inventory[i].car_model > inventory[j].car_model)
               return inventory[i].car_model;
            else
               return inventory[i].car_model;   
        }
    }
    }
    console.log(sort(inventory));
*/
 