console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let upperCaseName = "";
for (let i = 0; i < hacker1.length; i++) {
  upperCaseName += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// Lexicographic Order
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
}
else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
}
else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1: Count the words
let myParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";
let wordCount = myParagraph.split(" ").length;
console.log(`Word count: ${wordCount}`);
//Count the word et
let etCount = myParagraph.split("et").length - 1;
console.log(`The word "et" appears ${etCount} times.`);

// Bonus 2: Palindrome
let phraseToCheck = "A man, a plan, a canal, Panama!";
let testPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === ".") {
        ; // do nothing, skip these characters
    }
    else {
       testPhrase += phraseToCheck[i].toLowerCase();
    }
}

//console.log(testPhrase);
//console.log(testPhrase.length);
for (let i = 0; i < testPhrase.length / 2; i++) {
    if (testPhrase[i] !== testPhrase[testPhrase.length - 1 - i]) {
        console.log(`The phrase "${phraseToCheck}" is not a palindrome.`);
        break;
    }
    if (i === Math.floor(testPhrase.length / 2) - 1) {
        console.log(`The phrase "${phraseToCheck}" is a palindrome!`);
    }
}
