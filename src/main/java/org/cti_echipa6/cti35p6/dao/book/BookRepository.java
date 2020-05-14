package org.cti_echipa6.cti35p6.dao.book;

import org.cti_echipa6.cti35p6.model.book.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findBooksByTitleLike(String title);
    List<Book> findBooksByAuthorIdIs(Long id);
    List<Book> findBooksByPublicationDate(Timestamp date);
    List<Book> findBooksByPublicationDateBetween(Timestamp date1, Timestamp date2);
    List<Book> findBooksByPublicationDateBefore(Timestamp date);
    List<Book> findBooksByPublicationDateAfter(Timestamp date);
    List<Book> findBooksByQuantityGreaterThan(Long quantity);
}
