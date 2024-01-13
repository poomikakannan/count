let result = 0

function btn1(){
    result--
    document.getElementById("display").innerHTML = result
    if(result < 0){
        document.getElementById("display").style.color ="red" 
    }
    else if(result == 0){
        document.getElementById("display").style.color ="black" 
    }
}
function btn2(){
    result = 0
    document.getElementById("display").innerHTML = result
    document.getElementById("display").style.color ="black" 
}
function btn3 (){
    result++
    document.getElementById("display").innerHTML = result
    if(result > 0){
        document.getElementById("display").style.color ="green" 
    }
    else if(result == 0){
        document.getElementById("display").style.color ="black" 
    }
} 