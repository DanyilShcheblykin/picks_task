const array = [1, 2, 3, [4, 5], null, 6, 'name', { one: 'one' }];

const sumAllNumbersInArray = (arr) => {
  let sum = 0;

  const extractNumbers = (element) => {
    if (typeof element === "number") {
      sum += element;
    } else if (Array.isArray(element)) {
      // Check if the element is an array
      element.forEach((nestedElement) => extractNumbers(nestedElement)); // Recursively call extractNumbers to extract numbers from the array
    } else if (typeof element === "object" && element !== null) {
      // Check if the element is an object
      Object.values(element).forEach((item) => {
        // Extract values of the object and iterate over them
        if (typeof item === "number") {
          sum += item;
        } else {
          extractNumbers(item); // Recursively call the method if the item is not a number
        }
      });
    }
  };

  extractNumbers(arr);
  return sum;
};

console.info(sumAllNumbersInArray(array));