function uber(numMinutes, distance, surge){
    var baseFare = 2.55
    var cancellationFee = 5.00
    var costPerMinute = 0.35
    var costPerMile = 1.75
    var minimumFare = 8.00
    
    var minutesCost = numMinutes * costPerMinute
    var milesCost = distance * costPerMile
    var totalCost = minutesCost + milesCost + baseFare
    
    return totalCost * surge
}
var costOfMyUberRide = uber(25, 4.3, 1.3)
console.log(costOfMyUberRide)