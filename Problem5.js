// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
//Using the array you just obtained from the previous problem, find out how many cars 
//were made before the year 2000 and return the array of older cars and log its length.

    //console.log("1st arr");
   // const data = require('./Problem4.js');      
   // var array2 = new Array();        
   // array2 = data.carYear_Arr;
   // console.log("2st arr");
    //console.log(array2);        
    const carYearBelow2000 = function(array2)
    {
        let j = 0;
        let result = new Array();
        for(let i = 0 ; i < array2.length; i++)
        {
            if(array2[i] < 2000)
            {
                result[j++] = array2[i];                
            }              
        } 
        return result;  
         
    }
   // console.log(carYearBelow2000(data.carYear_Arr));
   module.exports = {
    carYearBelow2000
};

    
    /*
    for(let i = 0 ; i < data.length; i++)
    {
        if(array2[i] < 2000)
        {
            result[j++] = array2[i];                
        }              
    }
    return result;
    */