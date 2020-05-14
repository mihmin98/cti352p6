package org.cti_echipa6.cti35p6.dao.book;

import org.cti_echipa6.cti35p6.model.book.Author;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class AuthorRepositoryTest {
    @Autowired
    AuthorRepository authorRepository;

    @Test
    void addAuthorTest() {
        authorRepository.save(new Author("Popescu Ion"));
        assertNotNull(authorRepository.findById(1L));

        authorRepository.deleteAll();
    }

    @Test
    void findAuthorsByNameLikeTest() {
        authorRepository.save(new Author("Popescu Ion"));
        authorRepository.save(new Author("Ionescu George"));
        assertEquals(2, authorRepository.findAuthorsByNameLike("%Ion%").size());

        authorRepository.deleteAll();
    }
}