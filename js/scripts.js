$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    alert('accepted');
  });
});