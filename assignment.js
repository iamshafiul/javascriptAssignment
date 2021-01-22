// kilometer To Meter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance Can't be negative ";
    } else {
        var meter = kilometer * 1000;
        return meter;
    }

}



// budget calculator

function budgetCalculator(watch, phone, laptop) {
    var total = (watch * 50) + (phone * 100) + (laptop * 500)
    return total;
}



// mega friend

var arr = ["Karim", "Tahannan", "Rasel", "Jamil"];
var max = arr[0];

function megaFriend(arr) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]
        if (element > max) {
            max = element;
        }
    }

    return max
}


// hotel cost

function hotelCost(days) {
    var cost = 0;
    if (days < 0) {
        return "Only Positive Number Is Allowed";
    } else if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDayes + secondTenDayes;
    } else {
        var firstTenDayes = 10 * 100;
        var secondTenDayes = 10 * 80;
        var remainingDays = days - 20;
        var otherDays = remainingDays * 50;
        cost = firstTenDayes + secondTenDayes + otherDays;
    }
    return cost;
}