const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(3);

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(title, author, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, "new genre"];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   // adding a new property
//   moviePublicationDate: "2001-12-19",

//   // overwriting an existing property
//   pages: 1210,
// };

// console.log(updatedBook);

// const summary = `a book by ${author} called ${title} has ${pages} pages`;
// console.log(summary);

// const pagesRange = pages > 1000 ? "big book" : "small book";

// console.log(`the book is a ${pagesRange}`);

// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// console.log(true && "some string");
// console.log(false && "some string");
// console.log(hasMovieAdaptation && "This movie has a movie adaptation");

// // falsy values in JS are: false, 0, "", null, undefined, NaN
// console.log("jacob" && "some string");
// console.log("" && "some string");
// console.log(0 && "some string");

// console.log(true || "some string");
// console.log(false || "some string");

// console.log(book.translations.spanish || "no translation");

// console.log(book.reviews.librarything?.rating || "no rating");

// console.log(book.reviews.librarything?.reviewsCount ?? "no Data");

// const getTotalReviewCount = (book) => {
//   const goodreadsReviewsCount = book.reviews.goodreads?.reviewsCount ?? 0;
//   const librarythingReviewsCount = book.reviews.librarything?.reviewsCount ?? 0;

//   return goodreadsReviewsCount + librarythingReviewsCount;
// };

// console.log(getTotalReviewCount(book));

const books = getBooks();

const titles = books.map((book) => book.title);
console.log(titles);

const titlesAndAuthors = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(titlesAndAuthors);

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);
