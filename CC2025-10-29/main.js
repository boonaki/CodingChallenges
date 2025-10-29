// given an array[[num, num]] representing a list of timestamps for start and submission for loan applications, always sorted by earliest
// output array[[num, num]] sorted by the timestamps with active loan count kept
function generateTimestamps(timestamps) {
    let timestampEventData = [];

    // create set of all individual event times (removes duplicates + sorted to ensure least to greatest, converted to back to array for easier indexing)
    let times = [...new Set(timestamps.flat())].sort((a,b) => a-b); // ex: [3,5,7,8,12,15];
    
    for (let i = 0; i < times.length; i++) {
        const currentTime = times[i];
        let active = 0;

        for (let k = 0; k < timestamps.length; k++) {
            let startTime = timestamps[k][0];
            let submissionTime = timestamps[k][1];

            if (currentTime < startTime) {
                // break inner loop and push data
                break;
            }

            if (currentTime < submissionTime) {
                active++
            }
        }

        timestampEventData.push([currentTime, active]);
    }

    return timestampEventData;
}

console.log(generateTimestamps([ [3,7], [5,7], [7,15], [8,12] ])) // output: [ [3,1], [5,2], [7,1], [8,2], [12,1], [15, 0] ] 
console.log(generateTimestamps([ [3,7], [5,7], [7,15], [8,12], [8,20], [14,20] ])) // output: [ [3,1], [5,2], [7,1], [8,3], [12,2], [14,3], [15,2], [20,0] ] 
console.log(generateTimestamps([ [3,7], [5,7], [7,15], [8,12], [8,20], [14,20], [15, 16], [20, 22], [20, 23] ])) // output: [ [3,1], [5,2], [7,1], [8,3], [12,2], [14,3], [15,3], [16,2], [20,2], [22,1], [23,0] ] 




/*****************
optimized solution, mainly due to removal of a nested for-loop.
******************/
function generateTimestampsOptimized(timestamps) {
    
    let eventData = []; // holds return data
    
    // manage states for active submission time, last start time and modified timestamp data
    let active = 0;
    let prevStartTime = -1;
    let timestampEvents = [];

    for (let i = 0; i < timestamps.length; i++) {
        timestampEvents.push([timestamps[i][0], 1]); // start
        timestampEvents.push([timestamps[i][1], -1]); // submission
    }
    
    // sort events by time
    // when 2 events occur at the same time, the submission time needs to be eval'd first
    timestampEvents.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    for (let i = 0; i < timestampEvents.length; i++) {
        let startTime = timestampEvents[i][0];
        let submissionTime = timestampEvents[i][1];
        
        // if start time changes, push current states
        if (startTime !== prevStartTime && prevStartTime !== -1) {
            eventData.push([prevStartTime, active]);
        }
        
        active += submissionTime;
        prevStartTime = startTime;
    }
    
    // add final set to data
    if (prevStartTime !== -1) {
        eventData.push([prevStartTime, active]);
    }
    
    return eventData;
}

console.log(generateTimestampsOptimized([ [3,7], [5,7], [7,15], [8,12] ])) // output: [ [3,1], [5,2], [7,1], [8,2], [12,1], [15, 0] ] 
console.log(generateTimestampsOptimized([ [3,7], [5,7], [7,15], [8,12], [8,20], [14,20] ])) // output: [ [3,1], [5,2], [7,1], [8,3], [12,2], [14,3], [15,2], [20,0] ] 
console.log(generateTimestampsOptimized([ [3,7], [5,7], [7,15], [8,12], [8,20], [14,20], [15, 16], [20, 22], [20, 23] ])) // output: [ [3,1], [5,2], [7,1], [8,3], [12,2], [14,3], [15,3], [16,2], [20,2], [22,1], [23,0] ] 