const user = {
    name: "Romy Fischer",
    id: 14
};

const book1 = {
    title: "Game Changers",
    author: "Dave Asprey",
    isbn: "9788491393870",
    category: "Personal Development",
  };
  const book2 = {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    isbn: "9788478886289",
    category: "Classic Literature",
  };
  
  user.books = [book1, book2];

  const library = []
  library.push (user);

  const book3 = {
    title: "Encantado de Conocerte",
    author: "Borja Vilaseca",
    isbn: "9788466348898",
    category: "Personal Development",
  };

  library[0].books.push(book3);

  for (let i = 0; i < library.length; i++) {
    const libraryUser = library[i].name; 
    console.log(`${libraryUser}'s books:`);
    
    for (let j = 0; j < library[i].books.length; j++) {
      const title = library[i].books[j].title;
      const author = library[i].books[j].author;
      
      console.log(`- ${title}, ${author}`);
    }
  }