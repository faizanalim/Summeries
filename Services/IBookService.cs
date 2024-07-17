using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Summeries.Data;

namespace Summeries.Services
{
    public interface IBookService
    {
          List<Book> GetAllBooks();
        Book GetBookById(int id);
        void UpdateBook(int id, Book newBook);
        void DeleteBook(int id);
        void AddBook(Book newBook);
    }
}