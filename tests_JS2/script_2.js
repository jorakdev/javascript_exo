var nbr = prompt('Tape un nombre:');
var f = 1;
if (nbr >= 0) {

  for (var count = 1; count <= nbr; count++) {
    var f = f * count;
    // console.log(`${f}`);
  }
  console.log(`le factoriel de ${nbr} est :${f}`);
} else if (nbr < 0) {
  console.log("tapez un nombre >= 0");
}
