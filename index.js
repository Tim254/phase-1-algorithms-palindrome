function isPalindrome(word) {
  // Write your algorithm here
  let newWord = "";
  for (let char of word) {
    newWord = char + newWord

    
  } if(newWord === word) {
    return true
  }else {
    return false
  }
  // let j = word.length - 1
  // for(let i = o; i < j/2; i++ ) {
  //     let x = word[i];
  //     let y = word[j-i-1]
  //     if (x != y){
  //       return false
  //     }

  // }
  // return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
