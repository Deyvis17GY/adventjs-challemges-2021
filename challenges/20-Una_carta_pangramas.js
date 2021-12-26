function pangram(letter) {
  return new Set(letter.match(/[a-zñáéíóúü]/gi)).size >= 27;
}


console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
