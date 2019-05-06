const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
for (i = 0; i < books.length; i++ ){
  // console.log(entrepreneurs[i]);
  // console.log(entrepreneurs[i]['year']);
    if ((books[i]['rented']) == 0 ){
      console.log(`le livre dont le titre est : ${(books[i]['title'])} n'a jamais été emprunter`);
    }else{
      console.log(`tous les livres ont été au moins empruntés une fois`);
    }
  }
