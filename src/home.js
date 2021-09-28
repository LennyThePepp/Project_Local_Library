function getTotalBooksCount(books) {
  let total = 0
  for (let i =0;i<books.length;i++){
    total += 1
  }
  return total
}

function getTotalAccountsCount(accounts) {
  let total = 0
  for (let i =0;i<accounts.length;i++){
    total += 1
  }
  return total
}
//////////////////////////////////////////////
// this is the helper function
function helper(books) {
  let countArr = []
    for (let i = 0; i < books.length; i++) {
         borrow = books[i]
         borrows = borrow.borrows
         if (borrows[0].returned===false){
         countArr.push(borrows[0])
        }
    }
    return countArr
}
/////////////////////////////////////////////
function getBooksBorrowedCount(books) {
  let count = 0
  let countArr = helper(books)
  for (let i = 0; i < countArr.length;i++){
    count ++
      } 
      return count
}

function getMostCommonGenres(books) {
  let result = []
  let genre = books.map((book)=> book.genre)
  for (let k = 0; k < genre.length;k++){
    let search = result.find((item)=>item.name === genre[k])
    if (search){
      search.count += 1
    } 
    else {
      result.push({name: genre[k], count: 1})
    }
    result.sort((resultA,resultB)=> (resultA.count > resultB.count ? -1 : 1))
    result = result.slice(0,5)
  }
  return result
}

function getMostPopularBooks(books) {
  let borrows = books.reduce((acc, val) => {
    let obj = {
      name: val.title,
      count: val.borrows.length,
    };
    acc.push(obj);
    return acc;
  }, []);
    borrows.sort((resultA,resultB)=> (resultA.count > resultB.count ? -1 : 1))
    borrows = borrows.slice(0,5)

return borrows
}

function getMostPopularAuthors(books, authors) {
  let result = []
  for (let i = 0;i < authors.length;i++){
    let name = authors[i].name
    let first = name.first
    let last = name.last
    let fullName = first.concat(" ",last)
    for (let k = 0;k < books.length;k++){
      if (authors[i].id === books[k].authorId){
        let book = books[k];
    let borrows = book.borrows;
    let count = 0
    for (let k = 0;k < borrows.length;k++){
      count += 1
      }
      let authorAndCount = {name: fullName, count: count}
    result.push(authorAndCount)
    result.sort((resultA,resultB)=> (resultA.count > resultB.count ? -1 : 1))
    result = result.slice(0,5)
    }
  }
  }
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  helper,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
