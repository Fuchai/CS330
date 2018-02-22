'use strict'

var bbody=document.querySelector('body')
var newh1=document.createElement("H1")
newh1.innerHTML="How many do you want?"
// note that bbody is not a copy of the document, but a pointer.
bbody.appendChild(newh1)

var butt=document.createElement("button")
butt.innerHTML="Hit me hard"
butt.setAttribute('id','primebutton')
bbody.appendChild(butt)

var inputField=document.createElement("input")
inputField.setAttribute('type','text')
bbody.insertBefore(inputField,butt)

bbody.appendChild(document.createElement("div"))

var aPrime=1;

butt.addEventListener("click",()=>{
    /*
    alert("hello there")
    alert(inputField.value)
    alert(document.querySelector('input').value)
    */
    // var divv=document.querySelector('div')
    //
    //
    // var fc = divv.firstChild;
    // while( fc ) {
    //     divv.removeChild( fc );
    //     fc = divv.firstChild;
    // }
    // var primeTable=buildPrimeTable(document.querySelector('input').value)
    // divv.appendChild(primeTable)

    var fc = divv.firstChild;
    while( fc ) {
        divv.removeChild( fc );
        fc = divv.firstChild;
    }
    var moneyNumber=document.createElement("h1")
    moneyNumber.setAttribute("id","nextprime")
    aPrime=nextPrime(aPrime)
    moneyNumber.innerHTML=aPrime
    divv.appendChild(moneyNumber)

})

newh1=document.createElement("H1")
newh1.innerHTML="output:"
document.querySelector('body').insertBefore(newh1,document.querySelector('div'))

function isPrime(number){
    for (var num=2;num<number;num++){
        if (number%num===0){
            return false
        }
    }
    return true
}

function nextPrime(previous){
    var interest=previous+1
    while(!isPrime(interest)){
        interest=interest+1
    }
    return interest
}

function getPrimes(howmany){
    var yo=[];
    var interest=2;
    while(yo.length<howmany){
        if (isPrime(interest)){
            yo.push(interest);
        }
        interest=interest+1
    }

    return yo;
}

function buildPrimeTable(howmany){
    var list=getPrimes(howmany)
    var outputTable=document.createElement("table")
    outputtable.setAttribute(class,"table table-striped")

    for (var i=0;i<howmany;i++){
        var row = outputTable.insertRow(-1)
        var cell = row.insertCell(-1)
        cell.innerHTML=list[i]
    }

    return outputTable
}
