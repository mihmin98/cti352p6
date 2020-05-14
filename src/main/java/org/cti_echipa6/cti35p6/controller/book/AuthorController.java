package org.cti_echipa6.cti35p6.controller.book;

import org.cti_echipa6.cti35p6.dao.book.AuthorRepository;
import org.cti_echipa6.cti35p6.model.book.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("/author")
    private List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @GetMapping("/author/{id}")
    private Author getAuthor(@PathVariable("id") Long id) {
        Optional<Author> author = authorRepository.findById(id);
        try {
            return author.get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Author not found", e);
        }
    }

    @DeleteMapping("/author/{id}")
    private void deleteAuthor(@PathVariable("id") Long id) {
        // Check if author exists
        Optional<Author> author = authorRepository.findById(id);
        try {
            authorRepository.deleteById(author.get().getId());
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Author not found", e);
        }
    }

    @PostMapping("/author")
    private Long addAuthor(@RequestBody Author author) {
        author.setId(null);
        authorRepository.saveAndFlush(author);
        return author.getId();
    }

    @PutMapping("/author")
    private Author updateAuthor(@RequestBody Author author) {
        authorRepository.save(author);
        return author;
    }
}
