var QuizList = JSON.parse(localStorage.getItem("AllQuestions"));

var mcq;

class MCQ
{
    constructor(data)
    {
        this.question = data[0];
        this.choice1 = data[1];
        this.choice2 = data[2];
        this.choice3 = data[3];
        this.choice4 = data[4];
        this.answer = parseInt(data[5]);
        this.data = data;

        this.UserAns = null;
    }

    answers(buttonText)
    {
        switch(buttonText)
        {
            case "opt1":
                this.UserAns = 1;
                break;
            case "opt2":
                this.UserAns = 2;
                break;
            case "opt3":
                this.UserAns = 3;
                break;
            case "opt4":
                this.UserAns = 4;
                break;
        }    
    }

    updateHTML()
    {
        var quizData = [
            document.getElementById("opt1"), 
            document.getElementById("opt2"), 
            document.getElementById("opt3"), 
            document.getElementById("opt4"), 
            document.getElementById("Question")];
        quizData[0].innerText = this.data[1];
        quizData[1].innerText = this.data[2];
        quizData[2].innerText = this.data[3];
        quizData[3].innerText = this.data[4];
        quizData[4].innerText = this.data[0];
    }
}

qTotal = QuizList.length;
qNo = 0;

mcqList = [];

for(var i = 0; i < QuizList.length; i++)
{
    mcqList.push(
                    new MCQ(QuizList[i])
                )
}


mcq = mcqList[qNo];
mcq.updateHTML();

function update(button)
{
    mcq = mcqList[qNo];
    mcq.updateHTML();

    if(qNo < qTotal)
    {
        mcq.answers(button);
        qNo+=1;
        mcq = mcqList[qNo];
        if(mcq)
        {
            mcq.updateHTML();
        }
        else{
            score = 0
            mcqList.forEach(element => {
                if(element.answer == element.UserAns)
                {
                    score += 1;
                }
                else{
                    console.log("Actual Answer: " + element.answer, "User Answer: " + element.UserAns, mcqList);
                }
            });
    
            score = Math.round(score / qTotal * 100);
            document.getElementById("Main").style.display = "none";
            document.getElementById("ScoreBox").style.display = "block";
            document.getElementById("score").innerText = "Score: " + score + "%";
        }
    }

}



