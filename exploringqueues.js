//building a Queue in javascript


class Queue {
    constructor() {
        this.list = []
    }  

    //returns the size of the list
    size() {
        return this.list.length
    }

    //pushes an item to the back of the queue (array)
    enqueue() {
        this.list.push(item)
    }

    //pulls the item from the front of the queue (array)
    dequeue() {
        this.list.shift()
    }   
}