package org.cti_echipa6.cti35p6.dao.book;

import org.cti_echipa6.cti35p6.model.book.Book;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BookRepositoryTest {
    @Autowired
    BookRepository bookRepository;

    @Test
    void findBooksByTitleLikeTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, null, 10L));
        bookRepository.save(new Book("t3st", 3L, null, 10L));

        assertEquals(2, bookRepository.findBooksByTitleLike("%test%").size());
        assertEquals(0, bookRepository.findBooksByTitleLike("test").size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByAuthorIdIsTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, null, 10L));
        bookRepository.save(new Book("t3st", 2L, null, 10L));

        assertEquals(0, bookRepository.findBooksByAuthorIdIs(0L).size());
        assertEquals(1, bookRepository.findBooksByAuthorIdIs(1L).size());
        assertEquals(2, bookRepository.findBooksByAuthorIdIs(2L).size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByPublicationDateTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st", 3L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st4", 4L, new Timestamp(2000), 10L));

        assertEquals(1, bookRepository.findBooksByPublicationDate(null).size());
        assertEquals(2, bookRepository.findBooksByPublicationDate(new Timestamp(1000)).size());
        assertEquals(1, bookRepository.findBooksByPublicationDate(new Timestamp(2000)).size());
        assertEquals(0, bookRepository.findBooksByPublicationDate(new Timestamp(3000)).size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByPublicationDateBetweenTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st", 3L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st4", 4L, new Timestamp(2000), 10L));

        assertEquals(2, bookRepository.findBooksByPublicationDateBetween(new Timestamp(100), new Timestamp(1000)).size());
        assertEquals(3, bookRepository.findBooksByPublicationDateBetween(new Timestamp(1000), new Timestamp(3000)).size());
        assertEquals(1, bookRepository.findBooksByPublicationDateBetween(new Timestamp(2000), new Timestamp(10000)).size());
        assertEquals(0, bookRepository.findBooksByPublicationDateBetween(new Timestamp(3000), new Timestamp(10000)).size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByPublicationDateBeforeTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st", 3L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st4", 4L, new Timestamp(2000), 10L));

        assertEquals(0, bookRepository.findBooksByPublicationDateBefore(new Timestamp(1000)).size());
        assertEquals(2, bookRepository.findBooksByPublicationDateBefore(new Timestamp(2000)).size());
        assertEquals(3, bookRepository.findBooksByPublicationDateBefore(new Timestamp(3000)).size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByPublicationDateAfterTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 10L));
        bookRepository.save(new Book("2test", 2L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st", 3L, new Timestamp(1000), 10L));
        bookRepository.save(new Book("t3st4", 4L, new Timestamp(2000), 10L));

        assertEquals(3, bookRepository.findBooksByPublicationDateAfter(new Timestamp(0)).size());
        assertEquals(1, bookRepository.findBooksByPublicationDateAfter(new Timestamp(1000)).size());
        assertEquals(0, bookRepository.findBooksByPublicationDateAfter(new Timestamp(2000)).size());

        bookRepository.deleteAll();
    }

    @Test
    void findBooksByQuantityGreaterThanTest() {
        bookRepository.deleteAll();

        bookRepository.save(new Book("test1", 1L, null, 5L));
        bookRepository.save(new Book("2test", 2L, null, 10L));
        bookRepository.save(new Book("t3st", 3L, null, 15L));

        assertEquals(1, bookRepository.findBooksByQuantityGreaterThan(10L).size());
        assertEquals(3, bookRepository.findBooksByQuantityGreaterThan(1L).size());
        assertEquals(0, bookRepository.findBooksByQuantityGreaterThan(20L).size());

        bookRepository.deleteAll();
    }
}
