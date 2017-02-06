
$(document).ready(function(){

  $("#search").click(function(){
    clearOutput();
    var term = document.getElementById('searchTerm').value;
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + term, function(data){
  $('#results').append('<h4>Results "' + term + '"</h4>');
  $.each(data.query.pages, function (i) {
      $('#output').append("<li><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid +
          "' target='_blank'>" + data.query.pages[i].title + "</a></li>");
        });
      });
    });
function clearOutput() {
  output.innerHTML = "";
}


});
