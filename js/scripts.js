function cypher(input) {
  let array = [];
  let array1 = [];
  input = input.replace(/[^a-z]/g, '');
  let index = Math.ceil(Math.sqrt(input.length));
  //array.push(input[0])
  for (let i = 0; i < index; i++) {
    for (j = 0; j < index; j++) {
      let newChar = input[i + j * index];
      array.push(newChar);
    }
  }
  array = array.join('');
  array = array.replace(/(\w{5})/g, '$1 ').replace(/(^\s+|\s+$)/, ''); //will put white space after each 5th character
  return array;
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = $('#input').val().toLowerCase();
    user = cypher(user);
    $('.output').text(user);

  });
});