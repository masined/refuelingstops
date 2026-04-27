// ====== Function to find the minimum number of refueling stops required to reach a destination ========
export function refuelingStops(target, startFuel, stations){
    // Custom constraint
    let distanceCovered = 0, NrOfStops = 0;
    if(target === startFuel){
        console.log("Destination reached...Target EQUALS startfuel...!")      //Since 1 mile EQUALS 1 litre
        return
    }
    else if(target < 1 || startFuel > 10**9){        //Respecting the first constraint
        console.log("Constraint 1 is violated")
        return
    }
    else if(stations.length < 0 || stations.length > 900){      //Respecting the second constraint
        console.log("Constraint 2 is violated")
        return
    }
    for(let i = 0;i < stations.length-1;i++){     //Respecting the third and fourth constraints
        if(stations[i][0] < 1 || stations[i][0] >= stations[i+1][0] || stations[i][0] >= target){
        console.log("Constraint 3 is violated")
            return
        }
        else if(stations[i][1] < 1 || stations[i][1] >= 10**90){
        console.log("Constraint 3 is violated")
            return
        }
        else{       //Refueling logic
            distanceCovered = stations[i][0]    //Total distance from starting point
            startFuel += stations[i][1]     //Adding fuel at a station
            startFuel -= distanceCovered    //Fuel consumption as we move (1 mile === 1 litre)
            NrOfStops += 1      //Incrementing number of stops after every refuel
            if(startFuel >= (target-distanceCovered)){
                console.log(`After ${NrOfStops} stops We'll reach target...!`)
                return NrOfStops
            } 
        }
    }
    console.log(`Distance: ${distanceCovered}`)
    console.log(`Fuel: ${startFuel}`)
    console.log("Executed all steps")
    return -1
}