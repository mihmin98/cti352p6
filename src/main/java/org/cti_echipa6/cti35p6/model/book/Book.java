package org.cti_echipa6.cti35p6.model.book;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
//TODO: Add @Table annotation after db creation
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, name = "author_id")
    private Long authorId;

    @Column(name = "publication_date")
    private Timestamp publicationDate;

    @Column(nullable = false)
    private Long quantity;

    protected Book() {
    }

    public Book(String title, Long authorId, Timestamp publicationDate, Long quantity) {
        this.title = title;
        this.authorId = authorId;
        this.publicationDate = publicationDate;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }

    public Timestamp getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Timestamp publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return String.format("Book[id=%d, title=%s, author_id=%d, publication_date=%td/%tm/%tY, quantity=%d]", id, title, authorId, publicationDate, publicationDate, publicationDate, quantity);
    }
}
