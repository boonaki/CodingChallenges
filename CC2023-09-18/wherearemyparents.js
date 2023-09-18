// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 

// given a string of characters, never empty, only containing common roman characters (a-zA-Z)
// return a string that is the input sorted alphabetically and with Uppercase characters sorted before lowercase

function sortParents(str) {
   //split string
   //sort least-greatest by converting each character to numbers
   //run for loop to move capitals to front
   //in loop: check if lowercase, if so continue the loop
   //if not, declare current position variable
   //inner while loop to check if character to left is equal to lowercase version of current capital
   //if it is then swap places

   str = str.split('')
   str.sort((a, b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt(0))
   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
         continue;
      }
      let curr = i
      while (str[curr - 1] === str[curr].toLowerCase()) {
         let temp = str[curr]
         str[curr] = str[curr - 1]
         str[curr - 1] = temp
         curr -= 1
      }
   }
   return str.join('')
}

console.log(sortParents('aAbaBb'))//AaaBbb
console.log(sortParents('uwwWUueEe'))//EeeUuuWww