class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * you can only initialize this linked list by
 * providing a list of values to it. Otherwise, head
 * and tail will be null.
 */
class SinglyLinkedList {
    constructor(listOfValues) {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;

        if (listOfValues instanceof Array) {
            for (const value of listOfValues) {
                this.addLast(value);
            }
        }
    }

    /**
     * Returns the head's value, or null.
     */
    head() {
        return this.headNode?.data ?? null;
    }

    /**
     * Returns the tail's value , or null.
     */
    tail() {
        return this.tailNode?.data ?? null;
    }

    isEmpty() {
        return this.length === 0;
    }

    /**
     * Adds an element at the end of the linked list and returns updated length.
     *
     * @param element
     * @return number
     */
    addLast(element) {
        // check if list is empty
        if (this.isEmpty()) {
            return this.addFirst(element);
        }
        const node = new Node(element);
        this.tailNode.next = node;
        this.tailNode = node;
        return ++this.length;
    }

    /**
     * Add a node at the beginning of the list and return updated length.
     *
     * @param element
     * @return number
     */
    addFirst(element) {

        const node = new Node(element);
        // check if the list is empty.
        if (this.isEmpty()) {
            this.headNode = node;
            this.tailNode = node;
            this.length = 1;
            return 1;
        }
        node.next = this.headNode;
        this.headNode = node;
        return ++this.length;
    }

    /**
     * Returns the index of the element passed; otherwise -1.
     *
     * @returns number
     */
    indexOf(element) {
        if (this.isEmpty()) return -1;
        let {currentNode, currentIndex} = {currentNode: this.headNode, currentIndex: 0};
        while (currentNode) {
            if (currentNode.data === element) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    }

    clear() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }

    removeLast() {
        if (this.length === 0) {
            throw new Error("The Linked List is already empty!");
        }
        if (this.length === 1) {
            this.clear();
            return;
        }

        let currentNode = this.headNode;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tailNode = currentNode;
        this.length--;
    }

    removeFirst() {
        if (this.length === 0) {
            throw new Error("The Linked List is already empty!");
        }
        if (this.length === 1) {
            this.clear();
            return;
        }

        this.headNode = this.headNode.next;
        this.length--;
    }

}

module.exports = SinglyLinkedList;
