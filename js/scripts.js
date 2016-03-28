
$(document).ready(function() {
  $("#things form").submit(function(event) {
    var things = ["thing1","thing2","thing3","thing4","thing5"];

      things.forEach(function(thing) {
        var userInput = $("input#" + thing).val();
        $("#" + thing).text(userInput);
        console.log(userInput)
        $("#result").append("<li>" + userInput + "</li>");
      });


      event.preventDefault();
    });
  });



// $(document).ready(function() {
//   $("#things form").submit(function(event) {
//     event.preventDefault();
//
//     var thing1 = $("input#thing1").val();
//     var thing2 = $("input#thing2").val();
//     var thing3 = $("input#thing3").val();
//     var thing4 = $("input#thing4").val();
//     var thing5 = $("input#thing5").val();
//     var things = [thing1,thing2,thing3,thing4,thing5];
//
//     var things2 = things.slice();
//     things2.pop();
//     things2.pop();
//     things2.pop();
//     things2.pop();
//     things2.pop();
//     things2.push(thing2,thing1,thing3);
//
//
//
//     $("#result").text(things);
//
//   });
// });
