$(function() {

  // your js goes in betwen these two things

  // starting cut equal to zero
  var total = 0;

  // select all of the items
  $(".btn").click(function(){

    var amount = $(this).attr("data-answer");

    // this is changing the amount to a number so it can be added up
    var amountNumber = parseFloat(amount);
    total = total + amountNumber;
    console.log( "total : " + total ) ;

    var question_number = $(this).attr("data-question") ;
    console.log( "question_number : " + question_number ) ;

    var question_class = "." + question_number ;
    console.log( "question_class : " + question_class ) ;

    // change the color when it clicks
    $(question_class).css("background-color","#c3111a");
    $(this).css("background-color","#20b612");

    // choose an answer- 0 or 1
    $(question_class).unbind('click') ;


  }); // end of what happens when item is clicked on

  $(".submit").click(function(){

      if ( total >= 4 ) 
      {
          $(".nyc").toggle( true ) ;
          $(".suburbs").toggle( false ) ;
      }
      else
      {
          $(".suburbs").toggle( true ) ;
          $(".nyc").toggle( false ) ;
      }

  });


}); // don't delete this