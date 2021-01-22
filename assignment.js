function kilometerToMeter(kilometer){
    var meter = kilometer * 1000; //we know, 1 kilometer = 1000 meter;
    if(kilometer < 0){
        return 'The measurement of distance can not be a negative number'
    }
    return meter;
}


function budgetCalculator(clock, phone, laptoop){
    var clockCost = clock * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptoop * 500;
    var totalCost = clockCost + phoneCost + laptopCost;
    if(clockCost < 0 || phoneCost < 0 || laptopCost < 0){
        return 'The price of anything can not be a negative number'
    }
    return totalCost; // since we need the total cost ;
}


function hotelCost(days){
    var rent = 0;
    if(days <= 10){
        rent = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100; // firstPart means 1st 10 days;
        var remaining = days - 10;
        var secondPart = remaining * 80; // secondPart means 2nd 10 days;
        rent = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80; 
        var remaining = days - 20;
        var thirdPart = remaining * 50; // thirdPart means rest of days;
        rent = firstPart + secondPart + thirdPart;
    }
    return rent;
}


function megaFriend(strs){
    var largestName = "";
    for(var i = 0; i < strs.length; i++){
        var name = strs[i];
        if(name.length > largestName.length){
            largestName = name;
        }
    }
    return largestName;
}


