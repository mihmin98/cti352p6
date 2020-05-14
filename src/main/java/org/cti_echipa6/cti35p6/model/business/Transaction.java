package org.cti_echipa6.cti35p6.model.business;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
//TODO: Add @Table annotation after db creation
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, name = "client_id")
    private Long clientId;

    @Column(nullable = false, name = "book_id")
    private Long bookId;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false, name = "rental_date")
    private Timestamp rentalDate;

    @Column(name = "return_date")
    private Timestamp returnDate;

    @Column(nullable = false, name = "rental_duration")
    private Integer rentalDuration;

    protected Transaction() {
    }

    public Transaction(Long clientId, Long bookId, Double price, Timestamp rentalDate, Timestamp returnDate, Integer rentalDuration) {
        this.clientId = clientId;
        this.bookId = bookId;
        this.price = price;
        this.rentalDate = rentalDate;
        this.returnDate = returnDate;
        this.rentalDuration = rentalDuration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long client_id) {
        this.clientId = client_id;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long book_id) {
        this.bookId = book_id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Timestamp getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(Timestamp rental_date) {
        this.rentalDate = rental_date;
    }

    public Timestamp getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Timestamp return_date) {
        this.returnDate = return_date;
    }

    public Integer getRentalDuration() {
        return rentalDuration;
    }

    public void setRentalDuration(Integer rental_duration) {
        this.rentalDuration = rental_duration;
    }

    @Override
    public String toString() {
        if (returnDate == null)
            return String.format("Transaction[id=%d, client_id=%d, book_id=%d, price=%.2f, rental_date=%td/%tm/%tY, return_date=null, rental_duration=%d]",
                    id, clientId, bookId, price, rentalDate, rentalDate, rentalDate, rentalDuration);
        else
            return String.format("Transaction[id=%d, client_id=%d, book_id=%d, price=%.2f, rental_date=%td/%tm/%tY, return_date=%td/%tm/%tY, rental_duration=%d]",
                    id, clientId, bookId, price, rentalDate, rentalDate, rentalDate, returnDate, returnDate, returnDate, rentalDuration);
    }

    public Double getTotalPrice() {
        LocalDate localRentalDate = rentalDate.toLocalDateTime().toLocalDate();
        LocalDate localReturnDate = returnDate == null ? null : returnDate.toLocalDateTime().toLocalDate();
        LocalDate goodReturnDate = localRentalDate.plusDays(rentalDuration);
        LocalDate currDate = LocalDate.now();

        // If the book has been returned
        if (localReturnDate != null) {
            // If the book has been returned on time
            if (localReturnDate.compareTo(goodReturnDate) <= 0) {
                return price;
            } else {
                long lateDays = localReturnDate.toEpochDay() - goodReturnDate.toEpochDay();
                return price + 0.1 * lateDays * price;
            }
        } else {
            // If the return deadline has not passed
            if (currDate.compareTo(goodReturnDate) <= 0) {
                return price;
            }
            else {
                long currLateDays = currDate.toEpochDay() - goodReturnDate.toEpochDay();
                return price + 0.1 * currLateDays * price;
            }
        }
    }
}
