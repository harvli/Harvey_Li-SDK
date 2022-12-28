import Typicode from '../../Harvey-SDK'

const client = new Typicode({});

// tests created with npm link for the SDK
client.getAllBooks().then((books) => {
  console.log('Getting all books')
  console.log(books)
})

client.getBookById('5cf5805fb53e011a64671582').then((book) => {
  console.log('Getting books with ID argument')
  console.log(book)
})

client.getAllChaptersOfBook('5cf5805fb53e011a64671582').then((chapters) => {
  console.log('Getting all chapters of book')
  console.log(chapters)
})