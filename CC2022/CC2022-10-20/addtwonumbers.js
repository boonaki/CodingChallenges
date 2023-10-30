// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//given 2 arrays,  always containing numbers
//return the sum of the two arrays, each reversed, in type array

function addTwoNumbers(l1,l2){
    //reverse both l1 and l2, join and convert to number
    //add both together
    //convert sum to string, split, and run map to return to array as arr of numbers, then reverse
    l1 = +l1.reverse().join('')
    l2 = +l2.reverse().join('')
    let sum = l1 + l2
    return sum.toString().split('').map(e => +e).reverse()
}

console.log(addTwoNumbers([2,4,3],[5,6,4]))//[7,0,8]


//Leetcode solution for linked lists
var aTN = function(l1, l2) {
    //keeps track of node to return
    let head = 0
    //stores current position in list
    let temp = null
    //holds any remaining numbers if one list is larger than other
    let holder = 0
    //traverse linked list
    while (l1 !== null || l2 !== null) {
        //start of each iteration, assign the sum to the current holder value
        let sum = holder
        //if current node is NOT null
        if (l1 != null) {
            //add the current value to the sum
            sum += l1.val
            //move into the list
            l1 = l1.next
        }
        if (l2 != null) {
            sum += l2.val
            l2 = l2.next
        }

        //create new listnode that is the last digit of the current sum
        let node = new ListNode(Math.floor(sum) % 10)
        //reassign holder for next iteration
        holder = Math.floor(sum / 10)
        //if first iteration
        if (temp == null) {
            //assign head to created listnode
            head = node
            //assign temp to head
            temp = head
        }
        
        //iterate through temp
        else {
            temp.next = node
            temp = temp.next
        }
    }
    
    //if holder has anything left, add to list node
    if(holder > 0) temp.next = new ListNode(holder)
    return head;
};