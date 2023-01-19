class Node {
    //build constructor to define the node
    constructor() {
        this.val = 0;
        this.next = null;
    }
}

//creates a new node
function newNode(key) {
    temp = new Node();
    temp.val = key;
    temp.next = null;
    return temp
}

//prints the list
function printList(node) {
    while (node !== null) {
        console.log(node.val)
        node = node.next;
    }
}

//merge two lists: time complexity: O(m + n)
const mergeTwoLists = function (list1, list2) {
	//start the head at an arbitrary value
	const head = newNode(Infinity)
	let curr = head
	//iterate until one of the pointers hits the end of the linked list
	while (list1 !== null && list2 !== null) {
		//if the first linked list's value is less than the second's
		if (list1.val < list2.val) {
			//set the next value for the merged list to list1
			curr.next = list1
			//move the list1 pointer forward
			list1 = list1.next
		}
		else {
			//set the next value for the merged list to list2
			curr.next = list2
			//move the list2 pointer forward
			list2 = list2.next
		}
		//move the merged list pointer forward
		curr = curr.next
	}
	//if either list is empty, add the other list to the end of the merged list
	if (list1 === null) curr.next = list2
	else curr.next = list1
	//return the node after the head in the merged linked list
	return head.next
};


//recursion: time complexity: O(n)
const recurseMerge = function (l1, l2) {
    //base cases
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    //start with the list head whose data is the least
    if(l1.val < l2.val) {
        //set the next to the most child value
        l1.next = recurseMerge(l1.next,l2);
        return l1;
    }else{//repeat for if l2 is less
        l2.next = recurseMerge(l1, l2.next)
        return l2;
    }
}

//build the lists
let list1 = newNode(1);
list1.next = newNode(3);
list1.next.next = newNode(5)

let list2 = newNode(0);
list2.next = newNode(2);
list2.next.next = newNode(4)

let ans = recurseMerge(list1, list2)
printList(ans)

let ans2 = mergeTwoLists(list1, list2)
printList(ans2)

