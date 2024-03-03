const answerSection = document.getElementById("answer-section");
const letter = document.querySelectorAll(".letter");


const words =['CAT','DOG','ELEPHANT','GIRAFFE','HIPPO','KANGAROO','LION','MONKEY','PENGUIN','RHINO','TIGER','ZEBRA'];
let mistakes = 0;


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
    let a = 0;
    for(let i=0; i<word.length; i++)
    {
        if(letter.innerHTML === word[i])
        {
            let span = document.getElementById(i);
            span.innerHTML = letter.innerHTML;
            a++;
        }
    }
    if(a>0){
        return true;
    }
    else{
        return false;
    }
}

function startHanging(){

}

letter.forEach((letter)=>{  
    letter.addEventListener("click", function(){
        if(correctLetter(random, letter))
        correctLetter(random, letter);
    
    else{
        mistakes++;
        if(mistakes === 1){
            head();
        }
        else if(mistakes === 2){
            body();
        }
        else if(mistakes === 3){
            leftHand();
        }
        else if(mistakes === 4){
            rightHand();
        }
        else if(mistakes === 5){
            leftLeg();
        }
        else if(mistakes === 6){
            rightLeg();
            alert("Game Over the word was " + random + "!");
            window.location.reload();
        }
    }
    return mistakes;
})
})

