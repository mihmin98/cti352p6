package org.cti_echipa6.cti35p6.dao.book;

import org.cti_echipa6.cti35p6.model.book.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    List<Author> findAuthorsByNameLike(String name);
}
