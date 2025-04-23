const books = [
  {
    title: "Deep Work",
    authorName: "Cal Newport",
    releaseYear: 2016
  },
  {
    title: "The Lean Startup",
    authorName: "Eric Ries",
    releaseYear: 2011
  },
  {
    title: "Zero to One",
    authorName: "Peter Thiel",
    releaseYear: 2014
  },
  {
    title: "The Embedded Entrepreneur",
    authorName: "Arvid Kahl",
    releaseYear: 2021
  },
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 1810
  }

];

// Nested ternary operation
function sortByYear(book1 , book2){
 return (book1.releaseYear < book2.releaseYear)?-1:(book1.releaseYear > book2.releaseYear)?1:0;
}



const filteredBooks = books.filter(book => book.releaseYear > 1950);filteredBooks.sort(sortByYear);
 