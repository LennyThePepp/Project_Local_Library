function findAccountById(accounts, id) {
  let found = accounts.find((account)=>account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB)=> {
  return  accountA.name.last < accountB.name.last ? -1:1
  })
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  for (let i = 0; i<books.length;i++){
      let borrowed = books[i]
      let borrows = borrowed.borrows
      for(let k = 0;k < borrows.length;k++){
        if (borrows[k].id=== account.id){
          count += 1 
        }
      }
    }
return count
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  let matchedBooks = []
  for (let i = 0;i<books.length;i++){
    let borrowed = books[i];
    let borrows = borrowed.borrows;
    for(let k = 0;k< borrows.length;k++){
      if (borrows[k].id === account.id && !borrows[k].returned){
        matchedBooks.push(books[i])
      }
    }
  }
  for (let i = 0;i<matchedBooks.length;i++){
    for (let k = 0;k< authors.length;k++){
      if (authors[k].id === matchedBooks[i].authorId){
        let book = matchedBooks[i];
        let author = authors[k]
        let final = {...book,author}
        result.push(final)
        console.log(result)
      }
    }
  }
  return result
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
