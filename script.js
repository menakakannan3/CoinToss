function clicking(){
    const num = (Math.floor(Math.random()*2));
    if (num ===0){
        document.getElementById("textresult").innerHTML = "heads"
     } else{
        document.getElementById("textresult").innerHTML = "tails"
     }
}

