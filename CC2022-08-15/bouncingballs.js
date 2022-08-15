// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:

//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

//P: given 3 number values: height, bounce and window height
//R: return the number of times a ball,with a certain bounce height, dropped from height passes the window height, up and down
//E:

function bouncingBall(h, bounce, window) {
    //check if h is less than or equal to 0, if bounce is greater than 0 but less than 1 and window must be less than h
    //if fails one return -1
    //else
    //inititialize and declare count variable to 1
    //take height, multiply by bounce, set to height as new height
    //while height is greater than window
    //add 2 to count variable
    //take height, multiply by bounce, set to height as new height
    //return count
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    } else {
        let count = 1
        h = h * bounce
        while (h > window) {
            count += 2
            h = h * bounce
        }
        return count
    }
}

console.log(bouncingBall(3, 0.66, 1.5))//3
console.log(bouncingBall(3, 1, 1.5))//-1