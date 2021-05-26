
/////////////////////////////////////////////////
///// Kilometer To Meter Converter Function ////
///////////////////////////////////////////////

function kilometerToMeter(n){
    const x = Math.sign(n);
    if( x !== NaN && x > 0){
        return n * 1000;   
    }
    return 'Unexpected Input';
}


//////////////////////////////////////
///// Budget Calculator Function ////
////////////////////////////////////

function budgetCalculator(x, y, z){
    const watch = 50;
    const phone = 100;
    const laptop = 500;
    
    
    const m = Math.sign(x);
    const n = Math.sign(y);
    const o = Math.sign(z);
    
    const isValid = (m !== NaN) && (n !== NaN) && (o !== NaN) && (m === 1) && (n === 1) && (o === 1);
    const isInt = (x % 1 === 0) && (y % 1 === 0) && (z % 1 === 0);  
    
    if (isValid && isInt){
       return watch * x + phone * y + laptop * z; 
    }
    
    return 'Unexpected Input';
}


//////////////////////////////////////////
//// Hotel Cost Calculator Function /////
////////////////////////////////////////


function hotelCost(n){
    
    const x = Math.sign(n);
    const isValid = x !== NaN && x === 1;
    const isInt = x % 1 === 0;
    
    if(isValid && isInt){
        if(n <= 10) {
            return n * 100;
        }else if (n <= 20){
            return (n - 10) * 80 + 10 * 100;
        }else {
            return (n - 20) * 50 + (10 * 100 + 10 * 80); 
        } 
    }
    
    return 'Unexpected Input';
}


///////////////////////////////////////////////////////////////////
///// Find Max Length Name From An Array Usign This Function /////
/////////////////////////////////////////////////////////////////

function megaFriend(arr){
    let lgth = 0;
    let longestName = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longestName = arr[i];
        }
    }
    return longestName; 
}
