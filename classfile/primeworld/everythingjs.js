'use strict'

var bbody=document.querySelector('body')
var newh1=document.createElement("H1")
newh1.innerHTML="How many do you want?"
// note that bbody is not a copy of the document, but a pointer.
bbody.appendChild(newh1)

var butt=document.createElement("button")
butt.innerHTML="Hit me hard"
bbody.appendChild(butt)

var inputField=document.createElement("input")
inputField.setAttribute('type','text')
bbody.insertBefore(inputField,butt)

butt.addEventListener("click",()=>{
    /*
    alert("hello there")
    alert(inputField.value)
    alert(document.querySelector('input').value)
    */

    var primeTable=buildPrimeTable(document.querySelector('input').value)
    bbody.appendChild(primeTable)
})


newh1=document.createElement("H1")
newh1.innerHTML="output:"
document.querySelector('body').insertBefore(newh1,document.querySelector('table'))

function isPrime(number){
    for (var num=2;num<number;num++){
        if (number%num===0){
            return false
        }
    }
    return true;
}

function getPrimes(howmany){
    var yo=[];
    var interest=2;
    while(yo.length<howmany){
        if (isPrime(interest)){
            yo.push(interest);
        }
        interest=interest+1;
    }

    return yo;
}

function buildPrimeTable(howmany){
    var list=getPrimes(howmany)
    var outputTable=document.createElement("table")

    for (var i=0;i<howmany;i++){
        var row = outputTable.insertRow(-1)
        var cell = row.insertCell(-1)
        cell.innerHTML=list[i]
    }

    return outputTable;
}
