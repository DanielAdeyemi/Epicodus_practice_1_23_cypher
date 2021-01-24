function cypher(input) {
  const array = [];
  input = input.replace(/[^a-z]/g, '');
  let index = Math.round(Math.sqrt(input.length));
  for (let i = 0; i < input.length - index; i++) {
    let newChar = input[i + index];
    array.push(newChar);
  }
  return array.join('');
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val().toLowerCase();
    user = cypher(user);
    alert(user);

  });
});