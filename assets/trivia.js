
var right=0;
var total=0;
$(".go").click(function(){
  /*api call*/
  $.ajax({
    method:"GET",
    url:"https://opentdb.com/api.php?type=multiple&amount=1"
  })
  /*return data from the api call*/
.done(function(data){
  $(".right_answers").html(right);
  $(".total_answers").html(total);
  $("#score").css("display","block");
  $(".choose").css("display","none");
  $("hr").css("display","block");
  $(".endgame").css("display","block");
  $(".category").text(data.results[0].category);
  $(".card-text").html(data.results[0].question);
  $("kbd").css("display","block");
  $(".next").text("NEXT");
  $(".options").css("display","block");

  /*randomising the options*/
    let rand=Math.floor(Math.random()*6);
  console.log(rand);
  if(rand<2&&rand>=0){
    $(".option1").html(data.results[0].correct_answer);
    $(".option2").html(data.results[0].incorrect_answers[0]);
    $(".option3").html(data.results[0].incorrect_answers[1]);
    }
  else if(rand>=2&&rand<4) {
    $(".option2").html(data.results[0].correct_answer);
    $(".option3").html(data.results[0].incorrect_answers[0]);
    $(".option1").html(data.results[0].incorrect_answers[1]);
    }
  else{
    $(".option3").html(data.results[0].correct_answer);
    $(".option2").html(data.results[0].incorrect_answers[0]);
    $(".option1").html(data.results[0].incorrect_answers[1]);
    }
  /*response when the option is right or wrong*/
  $(".option").click(function(){
    if($(this).html()===data.results[0].correct_answer){
      right=right+1;
      total=total+1;
      var test=$(this).html();
      var k=0;
      for(k=0;k<1;k++){
    $(this).removeClass("btn-outline-primary");
    $(this).addClass("btn-success");
    var copy=this;
        setTimeout(function(){
           $(copy).removeClass("btn-success");
           $(copy).addClass("btn-outline-primary");
               $('.go').trigger('click', true);
         }, 1500);
       }
      }
if($(this).html()===data.results[0].incorrect_answers[0]){
  var test=$(this).html();
  total=total+1;
  var i=0;
  for(i=0;i<1;i++){
$(this).removeClass("btn-outline-primary");
$(this).addClass("btn-danger");
var copy1=this;
    setTimeout(function(){
       $(copy1).removeClass("btn-danger");
       $(copy1).addClass("btn-outline-primary");
           $('.go').trigger('click', true);
     }, 1500);
   }
  }
if($(this).html()===data.results[0].incorrect_answers[1]){
  var test=$(this).html();
  total=total+1;
  console.log(test);
  var j=0;
  for(j=0;j<1;j++){
$(this).removeClass("btn-outline-primary");
$(this).addClass("btn-danger");

var copy2=this;
    setTimeout(function(){
       $(copy2).removeClass("btn-danger");
       $(copy2).addClass("btn-outline-primary");
           $('.go').trigger('click', true);
     }, 1500);
   }
  }
  /*calculating the total percentage*/
$(".endgame").on("click",function(){
  $(".triviabody").css("display","none");
    $(".percent1").css("display","block");
  var percentage=(right/total)*100;
  console.log(percentage);
  $(".percentage").html(percentage);
  $("#newgame").css("display","block");
});
$("#newgame").on("click",function(){
  window.location.reload(true);
});
  });
})
});
