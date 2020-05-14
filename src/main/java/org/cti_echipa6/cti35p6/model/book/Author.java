package org.cti_echipa6.cti35p6.model.book;

import javax.persistence.*;

@Entity
//TODO: Add @Table annotation after db creation
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private Long id;

    @Column(nullable = false)
    private String name;

    protected Author() {
    }

    public Author(String name) {
        this.name = name;
    }

    public void setId(Long id) {this.id = id;}

    public Long getId() {return id;}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Author[id=%d, name=%s]", id, name);
    }
}
