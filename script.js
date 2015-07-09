var template = function(comment){
	return  '<li>' + comment + '</li>'
}

var main = function() {
  $('form').on('submit',function() {
    var comment = $('#comment').val();
    if(comment !== "") {	
      // var html = $('<li>').text(comment);
      var html = template(comment);
      $('.comments').prepend(html);
      // prepend appends to the top of a section
      $('#comment').val('');
    }
    else $('#comment').val('');

    return false;
  });
};

$(document).ready(main);