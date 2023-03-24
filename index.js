const hqStreet = 42;

const distanceFromHqInBlocks = (pickupLocation) => Math.abs(pickupLocation - hqStreet);

const distanceFromHqInFeet = (pickupLocation) => distanceFromHqInBlocks(pickupLocation) * 264;

const distanceTravelledInFeet = (start, end) => Math.abs(start - end) * 264;

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400){
        return 0.00;
    }
    else if(distance <=  2000){
        return (distance - 400) * 0.02;
    }
    else if(distance <= 2500){
        return 25.00;
    }
    else{
        return "cannot travel that far";
    }
}