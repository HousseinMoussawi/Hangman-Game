const hangs = document.getElementById("hang");
const answerSection = document.getElementById("answer-section");
const letter = document.querySelectorAll(".letter");


const words =['CAT','DOG','ELEPHANT','GIRAFFE','HIPPO','KANGAROO','LION','MONKEY','PENGUIN','RHINO','TIGER','ZEBRA'];

function randomWord(){
    let random = Math.floor(Math.random()*words.length);
    return words[random];
}

let random = randomWord();

function displayWord(word){
word = random;
    for(let i=0; i<word.length; i++){
        let span = document.createElement("span");
        span.classList.add("letter");
        span.innerHTML = "_";
        span.id=i;
        answerSection.appendChild(span);
    }
}

displayWord(random);

function correctLetter(word , letter){
    word = random;
    for(let i=0; i<word.length; i++)
    {
        if(letter.innerHTML === word[i])
        {
            let span = document.getElementById(i);
            span.innerHTML = letter.innerHTML;
        }
    }
}

letter.forEach((letter)=>{  
    letter.addEventListener("click", function(){
        correctLetter(random, letter);
    })
})
