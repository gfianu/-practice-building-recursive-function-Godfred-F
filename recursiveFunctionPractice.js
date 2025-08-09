/*
Instructions
Build a recursive function to reverse a string.
Tasks
1. Write a function named reverseString that takes a string as input.
2. The function should:
○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character
of the string with the result of the recursive call on the remaining part
of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.
Example Inputs and Outputs:
reverseString("hello"); // Outputs: "olleh"
reverseString("recursion"); // Outputs: "noisrucer"
reverseString("a"); // Outputs: "a"
reverseString(""); // Outputs:
*/
function reverseString(str) {
    // Base case: if string is empty or has only one character return it
    if (str.length <= 1) {
        return str;
    } else {
        // Recursive case: concatenate last character with the result of reverseString on the rest of the string
        return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
    }
}

// Testing the function with various inputs
console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""
console.log(reverseString("abcdefg")); // Outputs: "gfedcba"
console.log(reverseString("12345")); // Outputs: "54321"
console.log(reverseString("!@#$%^&*()")); // Outputs: ")(*&^%$#@!"
console.log(reverseString("racecar")); // Outputs: "racecar"
console.log(reverseString("madam")); // Outputs: "madam"
console.log(reverseString("level")); // Outputs: "level"

