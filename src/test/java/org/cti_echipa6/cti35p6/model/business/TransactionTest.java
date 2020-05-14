package org.cti_echipa6.cti35p6.model.business;

import org.junit.jupiter.api.Test;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.ZoneId;

import static org.junit.jupiter.api.Assertions.*;

class TransactionTest {

    @Test
    void getTotalPrice() {
        double price = 100.0;
        // Set rental date to 10 days ago
        LocalDate rental_date = LocalDate.now().minusDays(10);

        // Case when the book is returned on the last day
        Transaction transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), localDateToTimestamp(LocalDate.now()), 10);
        assertEquals(price, transaction.getTotalPrice());

        // Case when the book is returned on the day before last day
        transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), localDateToTimestamp(LocalDate.now().minusDays(1)), 10);
        assertEquals(price, transaction.getTotalPrice());

        // Case when the book is returned after the last day
        transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), localDateToTimestamp(LocalDate.now().plusDays(2)), 10);
        assertEquals(1.2 * price, transaction.getTotalPrice());

        // Case when the book is not yet returned on the last day
        transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), null, 10);
        assertEquals(price, transaction.getTotalPrice());

        // Case when the book is not yet returned before the last day
        transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), null, 12);
        assertEquals(price, transaction.getTotalPrice());

        // Case when the book is not yet returned after the last day
        transaction = new Transaction(1L, 1L, price, localDateToTimestamp(rental_date), null, 8);
        assertEquals(1.2 * price, transaction.getTotalPrice());
    }

    Timestamp localDateToTimestamp(LocalDate localDate) {
        ZoneId defaultZoneId = ZoneId.systemDefault();
        return new Timestamp(Date.from(localDate.atStartOfDay(defaultZoneId).toInstant()).getTime());
    }

}