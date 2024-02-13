var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
started =false;

function nextSequence() {
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
});


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}


$("*").on("keydown", function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
    }
});


