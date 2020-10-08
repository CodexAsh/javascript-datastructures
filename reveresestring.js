// Reversing a String men!
// O(n)

function rstring(input) {
  //Converting String to Array.

  if (!input || input.length < 2 || typeof input !== "string") {
    console.log("Please Give us a proper string!!");
  } else {
    let totalitems = input.length - 1;
    const reversearr = [];

    // Reversing the array with loops.
    for (let i = totalitems; i >= 0; i--) {
      reversearr.push(input[i]);
    }
    const reversestring = reversearr.join("");
    console.log(reversestring);
  }
}
rstring("hsihsa");
