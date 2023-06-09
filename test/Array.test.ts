describe('Just playing with built-in Array in JS', () => {

    test('length of an empty Array should be zero', () => {
        const myRegrets = [];
        expect(myRegrets.length).toBe(0);
    })

    test('length of array of names is three', () => {
        const myFriends = ["Whitney", "Hesam", "Maja"];
        expect(myFriends.length).toBe(3);
    })

    test('An empty array of size two', () => {
        const myCities = new Array(2);

        expect(myCities.length).toBe(2);
        expect(myCities[1]).toBe(undefined);
    })

    test('The distinction between Array and other objects', () => {
        const myNumber = 2;
        const myArray = [3, 7, 4, 8, 5, 6];

        expect(Array.isArray(myNumber)).toBe(false);
        expect(Array.isArray(myArray)).toBe(true);
    })

    test('Accessing an Array element by element', () => {
        const aFewNums = [3, 4, 7, 5, 8, 6];
        let sum = 0;
        for (let i = 0; i < aFewNums.length; ++i) {
            sum += aFewNums[i];
        }
        expect(sum).toBe(33);
    })

    test('indexing in an Array', () => {
        const aFewNums = [3, 4, 7, 5, 8, 5, 6, 3, 5];
        expect(aFewNums.indexOf(5)).toBe(3);
        expect(aFewNums.lastIndexOf(5)).toBe(8);
    })

    test('joining array elements into a String', () => {
        const aFewNums = [3, 4, 7, 5, 8, 6];
        const aFewPeople = ["Hojat", "Hesam", "Maja", "Pearl", "Farzaneh"];

        expect(aFewNums.join()).toBe("3,4,7,5,8,6");
        expect(aFewPeople.join("_")).toBe("Hojat_Hesam_Maja_Pearl_Farzaneh");
    })

    test('Array concatenations', () => {
        const firstArray = [3, 4, 7, 5, 8, 6];
        const secondArray = [2, 3, 7, 6, 4, 8, 5, 2];

        expect(firstArray.concat(secondArray)).toStrictEqual([3, 4, 7, 5, 8, 6, 2, 3, 7, 6, 4, 8, 5, 2]);

    })

    test('Splicing up an Array', () => {
        const firstArray = [3, 7, 8, 5, 4, 3, 7, 8, 4, 5, 15];
        expect(firstArray.splice(4, 5)).toStrictEqual([4, 3, 7, 8, 4]);
        expect(firstArray.splice(2, 2)).toStrictEqual([8, 5]);
    })

    test('we can also use splice to add elements in the middle fo an Array', () => {
        const firstArray = [3, 8, 5, 4, 3, 7, 8, 4, 5, 15];
        const newElements = [-1, -1]
        firstArray.splice(4, 6, ...newElements);
        expect(firstArray).toStrictEqual([3, 8, 5, 4, -1, -1]);
    })

    test('Mutating an Array', () => {
        const originalArray = [3, 7, 8];
        originalArray.push(6);

        expect(originalArray).toStrictEqual([3, 7, 8, 6]);
        expect(originalArray.length).toBe(4);

        originalArray.unshift(1);
        originalArray.unshift(2, 4);

        expect(originalArray).toStrictEqual([2, 4, 1, 3, 7, 8, 6]);

        originalArray.pop();
        originalArray.pop();

        expect(originalArray).toStrictEqual([2, 4, 1, 3, 7]);

        // It's just like pop() but from the beginning of the array.
        originalArray.shift();
        originalArray.shift();

        expect(originalArray).toStrictEqual([1, 3, 7]);

    })

    test('Reversing an Array', () => {
        const originalArray = [3, 7, 8, 2, 3, 4];
        originalArray.reverse();

        expect(originalArray).toStrictEqual([4, 3, 2, 8, 7, 3]);

    })

    test('Sorting an array of Strings', () => {
        const originalArray = ["Hojat", "Helen", "Farzaneh", "Library", "Mall"];
        originalArray.sort();

        expect(originalArray).toStrictEqual(["Farzaneh", "Helen", "Hojat", "Library", "Mall"]);

    })

    test('The wrong way of sorting an array of numbers', () => {
        const originalArray = [2, 7, 8, 2, 378, 45, 63, 45, 4];
        originalArray.sort();

        expect(originalArray).toStrictEqual([2, 2, 378, 4, 45, 45, 63, 7, 8]);
    })

    test('The correct way of sorting an array of numbers', () => {
        const originalArray = [2, 7, 8, 2, 378, 45, 63, 45, 4];

        function compare(num1, num2) {
            return num1 - num2;
        }

        originalArray.sort(compare);

        expect(originalArray).toStrictEqual([2, 2, 4, 7, 8, 45, 45, 63, 378]);
    })


    test("forEach applies a function to all the elements of an array and doesn't return anything", () => {
        const numbers = [7, 6, 3, 4];
        numbers.forEach(square)
    })

    test("every() applies a boolean function to an array of elements and returns a boolean value", () => {

        const evenNumbers = [2, 4, 6, 8, 10];
        const notEvenNumbers = [38, 9, 7, 4, 56]

        const allAreEven = evenNumbers.every(isEven);
        expect(allAreEven).toBe(true);

        const someAreOdd = notEvenNumbers.every(isEven);
        expect(someAreOdd).toBe(false);
    })

    test('Some() is pretty much like "every()" but returns true if at least one element satisfies the condition.', () => {

        const someEvenNumbers = [38, 9, 7, 4, 56];
        const allOddNumbers = [23, 7, 41, 65];

        const someAreEven = someEvenNumbers.some(isEven);
        expect(someAreEven).toBe(true);

        const noneAreEven = allOddNumbers.some(isEven);
        expect(noneAreEven).toBe(false);

    })

    test('reduce() applies a specific function to an array; and returns a single value. please pay attention to this test.', () => {

        const inputNumbers = [3, 4, 2, 1, 2];
        const sum = ([0].concat(inputNumbers)).reduce(calculateSumOfSquares)

        expect(sum).toBe(34);

    })

    test('reduce() can also be used for converting an array of strings into a single string', () => {

        const excerpts = ["Hello", "world!", "my", "name", "is", "Hojat."];
        const sentence = (excerpts).reduce(stringBuilder)

        expect(sentence).toBe("Hello world! my name is Hojat.");

    })

    test('map() is a lot better than forEach()', () => {

        const originalNumbers = [2, 7, 8, 6, 3, 4, 5];
        const newNumbers = (originalNumbers).map(mathematicalSquare);

        expect(newNumbers).toStrictEqual([4, 49, 64, 36, 9, 16, 25]);

    })

    test('map() being applied to a list of strings', () => {

        const originalNames = ["Hojat", "Hesam", "Farzane", "Manoosh"];
        const finalCharacters = (originalNames).map(firstCharacter);

        expect(finalCharacters).toStrictEqual(["H", "H", "F", "M"]);

    })

    test("filter() doesn't have side-effects; just returns the items that satisfy the boolean function", () => {

        const originalNumbers = [2, 9, 6, 7, 5, 4, 2, 9, 3, 4, 5];
        const allTheEvens = (originalNumbers).filter(isEven);

        expect(allTheEvens).toStrictEqual([2, 6, 4, 2, 4]);

    })

});

function square(num) {
    console.log(`${num}---${num * num}`);
}

function firstCharacter(inputString) {
    return inputString[0];
}

function mathematicalSquare(num) {
    return num * num;
}

function isEven(num) {
    return num % 2 === 0;
}

function calculateSumOfSquares(accumulator, currentValue) {
    return accumulator + (currentValue * currentValue);
}

function stringBuilder(accumulatedString, eachString) {
    return `${accumulatedString} ${eachString}`;
}
