'use strict'

angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});









var bbody=document.querySelector('body')
var newh1=document.createElement("H1")
newh1.innerHTML="How many do you want?"
// note that bbody is not a copy of the document, but a pointer.
bbody.appendChild(newh1)

var butt=document.querySelector("#primebutton")

var inputField=document.createElement("input")
inputField.setAttribute('type','text')
bbody.insertBefore(inputField,butt)


butt.addEventListener("click",()=>{
    /*
    alert("hello there")
    alert(inputField.value)
    alert(document.querySelector('input').value)
    */

    buildPrimeTable(document.querySelector('input').value)
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
    var dbody=document.querySelector("body")
    dbody.appendChild(document.createElement("div"))

    var divv=document.querySelector('div')
    divv.setAttribute('class','table-responsive')

    var fc = divv.firstChild;
    while( fc ) {
        divv.removeChild( fc );
        fc = divv.firstChild;
    }

    var list=getPrimes(howmany)
    var outputTable=document.createElement("table")
    outputTable.setAttribute("class","table table-striped")


    for (var i=0;i<howmany;i++){
        var row = outputTable.insertRow(-1)
        var cell = row.insertCell(-1)
        cell.innerHTML=list[i]
    }

    divv.appendChild(outputTable)
}