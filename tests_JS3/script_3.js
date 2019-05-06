nbr_etage = prompt('Tape le nombre d\'etage que tu veux:');

console.log(`tu veux ${nbr_etage} etage`);


for (var i = 1; i <= nbr_etage; i++) {
  var row ="";
    for (var j = 1; j <= (nbr_etage - i); j++){
      row += " ";
    }
    for (var k = 1; k <= i; k++){
      row += "#";
    }
    console.log(row);
}
