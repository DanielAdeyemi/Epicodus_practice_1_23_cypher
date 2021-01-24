function cypher(input) {
  input = input.replace(/[^a-z]/g, '');
  return input;
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val().toLowerCase();
    user = cypher(user);
    alert(user);

  });
});