$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/advancedInnovation.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log('response');
    }
  })
});
