let numbs = [];
let alert;
let result;
function check()
{

    let numb = document.querySelector("#numb");
    let numbVal = parseInt(numb.value);
    if (!numbVal) return
    numbs.push(numbVal);
    
    let alert = document.querySelector("#alert");
    alert.innerHTML += "<span class='btn btn-dark'>" + numbVal + "</span>";

    numb.value = '';
}



function sumBtn()
{
    alert = document.querySelector("#alert")
    result =document.querySelector("#result");
    if(alert<=alert)
    {
        let sumNumb=0;
        for(let i=0;i < numbs.length;i++)
        {
            sumNumb+=numbs[i];
        }
        result.innerHTML="Result = " + sumNumb;
    }
    else
    {
        result.innerHTML="--";
    }

}

function average()
{
    alert = document.querySelector("#alert")
    result =document.querySelector("#result");
    if(alert<=alert)
    {
        let sumNumb=0;
        for(let i=0;i < numbs.length;i++)
        {
            sumNumb+=numbs[i];
        }
        result.innerHTML="Result = " + sumNumb  / numbs.length;
    }
    else
    {
        result.innerHTML="--";
    }

}

function product()
{
    alert = document.querySelector("#alert")
    result =document.querySelector("#result");
    if(alert<=alert)
    {
        let sumNumb=1;
        for(let i=0;i < numbs.length;i++)
        {
            sumNumb*=numbs[i];
        }
        result.innerHTML="Result = " + sumNumb;
    }
    else
    {
        result.innerHTML="--";
    }

}

function clearbtn() {
    numbs = [];
    alert= document.querySelector("#alert");
    result=document.querySelector("#result");
    alert.innerHTML = "";    
    result.innerHTML = "Result = " + "";
}

