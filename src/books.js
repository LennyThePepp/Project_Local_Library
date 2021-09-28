function findAuthorById(authors, id) {
  return authors.find((author)=>author.id===id)
}

function findBookById(books, id) {
  return books.find((book)=>book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let borrowed = []
  let returned =[]
  books.filter((book)=>{
    let borrows = book.borrows;
      if (borrows[0].returned === true && !returned.includes(book)){
        returned.push(book)
      }
      else if(borrows[0].returned === false && !borrowed.includes(book)){
        borrowed.push(book)  
      }
      result.push(borrowed, returned)
      })
  return result
}

function getBorrowersForBook(book, accounts) {
  let result = []
  let borrows = book.borrows
  for (let i = 0; i < borrows.length;i++){
    for (let k = 0;k < accounts.length;k++){
      if (borrows[i].id === accounts[k].id){
        let account = accounts[k]
        account.returned = borrows[i].returned
        let person = {account}
        result.push(account)
        result = result.slice(0,10)
      }
    }
  }
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
