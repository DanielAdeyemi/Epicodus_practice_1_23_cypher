function cypher(input) {
  const array = [];
  input = input.replace(/[^a-z]/g, '');
  let index = Math.round(Math.sqrt(input.length));
  //array.push(input[0])
  for (let i = 0; i < index; i++) {
    for (j = 0; j < index; j++) {
      let newChar = input[i + j * index];
      array.push(newChar);
    }
  }
  /*for (let i = input.length - index; i < input.length; i++) {
    let newChar = input[]
  }*/
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