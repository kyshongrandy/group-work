/*global $*/
$(document).ready(function(){
var word;
word="Star Wars";
$("button").click(function(){
    var input;
    input=$("input").val();
if(input===word){
$("h3").append("CORRECT FEGGOT");
}
});       
});