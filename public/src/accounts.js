function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => {
    const lastName1 = account1.name.last.toLowerCase();
    const lastName2 = account2.name.last.toLowerCase();
    return lastName1 > lastName2 ? 1 : -1;
  });
  return [];
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const totalBorrows = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + totalBorrows;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTotal = [];
  booksTotal = books.filter((book) => {
    const recent = book.borrows[0];
    return recent.returned == false && account.id === recent.id;
  });
  let result = booksTotal.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
