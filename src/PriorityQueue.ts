/**
 * A single element of a PriorityQueue.
 */
class PriorityQueueElement {
    value: any;
    priority: number;

    constructor(value: any, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}

/**
 * New elements will be evaluated at enqueue time
 * and the queue is always sorted according to the
 * priority of its elements.
 */
export class PriorityQueue {

    _dataStore: PriorityQueueElement[];

    constructor() {
        this._dataStore = [];
    }

    /**
     * @param elementValue
     * @param elementPriority
     *
     *  this is the most costly
     */
    enqueue(elementValue: any, elementPriority: number) {
        let inputElement = new PriorityQueueElement(elementValue, elementPriority);

        if (this._dataStore.length === 0) {
            this._dataStore.push(inputElement);
            return;
        }

        if (this._dataStore[0].priority <= elementPriority) {
            this._dataStore.unshift(inputElement);
            return;
        }


        let counter = 0;
        let isAlreadyAdded = false;
        while (counter < this._dataStore.length) {
            if (this._dataStore[counter].priority <= elementPriority) {
                this._dataStore.splice(counter, 0, inputElement);
                isAlreadyAdded = true;
                break
            }
            counter++;
        }
        if (!isAlreadyAdded)
            this._dataStore.push(inputElement);

    }

    /**
     * the first element of the queue (the oldest one) will be
     * returned and removed from queue.
     */
    dequeue(): PriorityQueueElement {
        if (this._dataStore.length === 0)
            throw new Error("The queue is empty!");
        return this._dataStore.shift();
    }

    toString(): string {
        let retStr = "";
        for (let i = 0; i < this._dataStore.length; ++i) {
            let currentNodeValue = this._dataStore[i].value;
            retStr += `(${currentNodeValue} , ${this._dataStore[i].priority}) -- `;
        }
        return retStr;
    }
}

