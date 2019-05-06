const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// console.log(entrepreneurs[0]);
// console.log(entrepreneurs[0]['first']);
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
for (i = 0; i < entrepreneurs.length; i++ ){
  // console.log(entrepreneurs[i]);
  // console.log(entrepreneurs[i]['year']);
  if ((entrepreneurs[i]['year']) < 1980 ){
    if ((entrepreneurs[i]['year']) >= 1970 ){
      console.log(`${entrepreneurs[i]['first']} => ${entrepreneurs[i]['year']} `);
    }
  }
}


// Sors une array qui combien le prénom et le nom des entrepreneurs
var new_array_first = [];
var new_array_last = [];
for (i = 0; i < entrepreneurs.length; i++ ){
  // console.log(entrepreneurs[i]['first']);
  // console.log(entrepreneurs[i]['last']);
  new_array_first.push(entrepreneurs[i]['first']);
  new_array_last.push(entrepreneurs[i]['last'])
}

var result = {};
new_array_first.forEach((key, i)=> result[key]=new_array_last[i]);
console.log(result);


// Quel âge aurait chaque inventeur aujourd'hui ?
var age_this_year = [];
for (i = 0; i < entrepreneurs.length; i++ ){
  // console.log(entrepreneurs[i]);
  age_this_year.push(2019 - entrepreneurs[i]['year']) ;

}
// console.log(age_this_year);
var result_current_age = {};
new_array_first.forEach((key, i)=> result_current_age[key]=age_this_year[i]);
console.log(result_current_age);


// Trie les inventeurs par ordre alphabétique du nom de famille
var sort_by_last = [];
for (i = 0; i < entrepreneurs.length; i++ ){
  // console.log(entrepreneurs[i]);
sort_by_last.push(entrepreneurs[i]['last']);

}

console.log(sort_by_last.sort());
