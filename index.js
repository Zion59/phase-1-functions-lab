function distanceFromHqInBlocks(myLocation) {
    const hqLocation = 42

    // if (hqLocation > myLocation) {
    //     return hqLocation - myLocation
    // } else {
    //     return myLocation - hqLocation
    // }

    return Math.abs(hqLocation - myLocation)
}

function distanceFromHqInFeet(nowLocation) {
    const distanceFromHq = distanceFromHqInBlocks(nowLocation)
    const distanceInFeet = 264 * distanceFromHq
    return distanceInFeet
}

function distanceTravelledInFeet(begin, ending) {
    const distanceInBlocks = (begin - ending)
    const travelledInfeet = distanceInBlocks * 264
    return Math.abs(travelledInfeet)

}




//console.log(distanceFromHqInFeet(44))
//console.log(distanceTravelledInFeet(48,43))

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) {
        return 0
    } else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if(distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}