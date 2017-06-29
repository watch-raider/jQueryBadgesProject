$(function() {

  // your code will go here
  jQuery.ajax({
    url: 'https://www.codeschool.com/users/advancedInnovation.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      addCourses(response.courses.completed);
    }
  });
});

function addCourses(courses) {

  var $badges = $('#badges');

  var $course = courses.forEach(function(course) {
    $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      'class': 'btn btn-primary';
      target: '_blank';
      text: 'See Course';
      href: 'course.url';
    }).appendTo($course);
  })
}
