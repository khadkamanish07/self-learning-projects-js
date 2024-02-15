var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
started =false;

$("*").on("keydown", function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started =true;
    }
});

function nextSequence() {
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    
    var random = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[random];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);    
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);


    checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}





function checkAnswer(currentLevel){
    console.log("I am here ");
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Succes");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence,1000);
        }
        
    
    }
    else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        started =false;
        level =0;
        gamePattern = [];
        $("h1").text("Game Over, Press A Key to Restart");
    }
}