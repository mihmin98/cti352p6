package org.cti_echipa6.cti35p6.controller.book;

import org.cti_echipa6.cti35p6.dao.book.BookRepository;
import org.cti_echipa6.cti35p6.model.book.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @GetMapping("/book")
    private List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/book/{id}")
    private Book getBook(@PathVariable("id") Long id) {
        Optional<Book> book = bookRepository.findById(id);
        try {
            return book.get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found", e);
        }
    }

    @DeleteMapping("/book/{id}")
    private void deleteBook(@PathVariable("id") Long id) {
        Optional<Book> book = bookRepository.findById(id);
        try {
            bookRepository.deleteById(book.get().getId());
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found", e);
        }
    }

    @PostMapping("/book")
    private Long addBook(@RequestBody Book book) {
        book.setId(null);
        bookRepository.saveAndFlush(book);
        return book.getId();
    }

    @PutMapping("/book")
    private Book updateBook(@RequestBody Book book) {
        bookRepository.save(book);
        return book;
    }
}
