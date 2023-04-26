const question=[{
    'que':"Which of the following is a markup language?",
    'a':"HTML",
    'b':"CSS",
    'c':"Javascript",
    'd':"PHP",
    'correct':'a'
},
{   'que':"What year was javascript launched?",
    'a':"1996",
    'b':"1995",
    'c':"1994",
    'd':"None of the Above",
    'correct':'b'
}, 
{   'que':"Which attribute is utilised to link the bookmark?",
    'a':"link",
    'b':"href",
    'c':"id",
    'd':"src",
    'correct':'b'
},
{   'que':"In HTML elements, CSS can be added in how many ways?",
    'a':"5",
    'b':"4",
    'c':"3",
    'd':"2",
    'correct':'c'
},
{   'que':"Which of the following process clears the last element from an array and returns that element?",
    'a':"None",
    'b':"pop()",
    'c':"get()",
    'd':"None of the Above",
    'correct':'b'
},     
]

let index=0;
let totalQues=question.length;
let right=0;
let wrong=0;

const queBox=document.getElementById("queBox");
const optionInput=document.querySelectorAll(".options");
const loadQuestion=()=>{
    if(index===totalQues)
    {
        return endQuiz();
    }
    reset();   //for reset the form
    const data=question[index];
    // console.log(data);  

    // for getting the question content.
    queBox.innerText=`${index+1}) ${data.que}`

    // pass the option values in options
    optionInput[0].nextElementSibling.innerText=data.a
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=question[index];
    const ans=getAnswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    }
    )
    return answer;
    
}

const reset=()=>{
    optionInput.forEach((input)=>{
        input.checked=false;
    })
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thanks for playing the Quiz</h3>
    <h2>${right}/${totalQues} are correct </h2>
    </div>
    `
}

// initial call for starting the loadQuestion function.
loadQuestion()