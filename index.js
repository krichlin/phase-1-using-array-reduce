const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

var totalBatteries = 0;  // sum of all batteries in the array batteryBatches

totalBatteries = batteryBatches.reduce((total, batches) => {
    return batches + total;
})