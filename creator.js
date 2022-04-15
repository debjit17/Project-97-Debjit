var Questions = [];
var inputBoxes = [document.getElementById("question"), document.getElementById("opt1"), document.getElementById("opt2"), document.getElementById("opt3"), document.getElementById("opt4"), document.getElementById("answer")];
var i = 0;

document.getElementById("label").innerHTML = "Question Added: " + i;

function add()
{
    Add = [document.getElementById("question").value, document.getElementById("opt1").value, document.getElementById("opt2").value, document.getElementById("opt3").value, document.getElementById("opt4").value, document.getElementById("answer").value];
    
    console.log(Add[5])
    if(Add[5] > "0" && Add[5] <= "4")
    {
        Questions.push(Add);
        
        i++
        document.getElementById("label").innerHTML = "Question Added: " + i;

        inputBoxes.forEach(element => {
            element.value = "";
        });
    }
    else
    {
        alert("Answer should be between 1 to 4");
    }
}

function Submit()
{
    console.log(Questions)
    if(Questions.length != 0)
    {
        localStorage.setItem("AllQuestions", JSON.stringify(Questions));
        window.location = "Quiz.html";
    }
    else
    {
        alert("Add atleast one question to continue");
    }
}