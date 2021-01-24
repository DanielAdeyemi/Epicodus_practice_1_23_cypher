function cypher(input) {
  input = input.replace(/[^a-z]/g, '');
  let index = Math.round(Math.sqrt(input.length));
  return index;
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val().toLowerCase();
    user = cypher(user);
    alert(user);

  });
});