// kilometer To Meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance Can't be negative ";
    } else {
        var meter = kilometer * 1000;
        return meter;
    }

}
var kilometerToMeterResult =  kilometerToMeter(25);
console.log(kilometerToMeterResult);



// budget calculator

function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500)
    return total;
};

var budgetCalculatorResult = budgetCalculator(50,80,100);
console.log(budgetCalculatorResult);



// mega friend
var friend = ['Al Rayan','Tanim','Arafatul', 'Iqram'];

function megaFriend(friend) {
    var count = 0;
    var maxlengthName = [];

    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > count) {
            count = friend[i].length;
            maxlengthName = friend[i];
        }
    }
    return maxlengthName;
}

var result = megaFriend(friend);
console.log(result);


// hotel cost
function hotelCost(day) {
    var totalCost = 0;
    var days = day;
    if (days < 0) {
        return "Only Positive Number Is Allowed";
    } else {
        if (days <= 10) {
            var firstTenDay = days * 100;
            totalCost = firstTenDay;

        } else if (days <= 20) {
            var firstTenDay = 10 * 100;
            var secondTenDay = (days - 10) * 80;
            totalCost = secondTenDay + firstTenDay;
        } else {
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var unlimited = (days - 20) * 50;
            totalCost = firstTenDay + secondTenDay + unlimited;
        }
    }

    return totalCost;
}
var hotelCostResult = hotelCost(20);
console.log(hotelCostResult);