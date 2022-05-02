import { logMessage } from "./logger"

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories) {
            logMessage('Max calories exceeded')
        }
    }
}


// Wrong
// The class has two responsability, track the calories and log a message

// class CalorieTracker {
//     constructor(maxCalories) {
//         this.maxCalories = maxCalories
//         this.currentCalories = 0
//     }

//     trackCalories(calorieCount) {
//         this.currentCalories += calorieCount
//         if(this.currentCalories > this.maxCalories) {
//             this.logMessage('Max calories exceeded')
//         }
//     }

//     logMessage(message) {
//         console.log(message)
//     }
// }