package org.cti_echipa6.cti35p6.dao.business;

import org.cti_echipa6.cti35p6.model.business.Transaction;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class TransactionRepositoryTest {
    @Autowired
    TransactionRepository transactionRepository;

    @Test
    void findTransactionsByClientIdTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        assertEquals(1, transactionRepository.findTransactionsByClientId(1L).size());
        assertEquals(0, transactionRepository.findTransactionsByClientId(2L).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByBookIdTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        assertEquals(1, transactionRepository.findTransactionsByBookId(1L).size());
        assertEquals(0, transactionRepository.findTransactionsByBookId(2L).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByPriceTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        assertEquals(1, transactionRepository.findTransactionsByPrice(100D).size());
        assertEquals(0, transactionRepository.findTransactionsByPrice(200D).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByPriceBetweenTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(2L, 2L, 200D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(3L, 3L, 300D, new Timestamp(0), null, 10));
        assertEquals(3, transactionRepository.findTransactionsByPriceBetween(0D, 1000D).size());
        assertEquals(2, transactionRepository.findTransactionsByPriceBetween(100D, 200D).size());
        assertEquals(1, transactionRepository.findTransactionsByPriceBetween(300D, 400D).size());
        assertEquals(0, transactionRepository.findTransactionsByPriceBetween(400D, 500D).size());

        transactionRepository.deleteAll();
    }


    @Test
    void findTransactionsByRentalDateTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        assertEquals(1, transactionRepository.findTransactionsByRentalDate(new Timestamp(0)).size());
        assertEquals(0, transactionRepository.findTransactionsByRentalDate(new Timestamp(1000)).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByRentalDateBetweenTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(1000), null, 10));
        transactionRepository.save(new Transaction(2L, 2L, 200D, new Timestamp(2000), null, 10));
        transactionRepository.save(new Transaction(3L, 3L, 300D, new Timestamp(3000), null, 10));
        assertEquals(3, transactionRepository.findTransactionsByRentalDateBetween(new Timestamp(0), new Timestamp(10000)).size());
        assertEquals(2, transactionRepository.findTransactionsByRentalDateBetween(new Timestamp(1000), new Timestamp(2000)).size());
        assertEquals(1, transactionRepository.findTransactionsByRentalDateBetween(new Timestamp(3000), new Timestamp(4000)).size());
        assertEquals(0, transactionRepository.findTransactionsByRentalDateBetween(new Timestamp(4000), new Timestamp(5000)).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByReturnDateTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(2L, 2L, 200D, new Timestamp(0), new Timestamp(1000), 10));
        assertEquals(1, transactionRepository.findTransactionsByReturnDate(null).size());
        assertEquals(1, transactionRepository.findTransactionsByReturnDate(new Timestamp(1000)).size());
        assertEquals(0, transactionRepository.findTransactionsByReturnDate(new Timestamp(2000)).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByReturnDateNull() {
        transactionRepository.deleteAll();

        assertEquals(0, transactionRepository.findTransactionsByReturnDateNull().size());
        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(2L, 2L, 200D, new Timestamp(0), new Timestamp(1000), 10));
        assertEquals(1, transactionRepository.findTransactionsByReturnDateNull().size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByReturnDateBetweenTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(2L, 2L, 200D, new Timestamp(0), new Timestamp(1000), 10));
        transactionRepository.save(new Transaction(3L, 3L, 200D, new Timestamp(0), new Timestamp(2000), 10));
        transactionRepository.save(new Transaction(4L, 4L, 200D, new Timestamp(0), new Timestamp(3000), 10));
        assertEquals(3, transactionRepository.findTransactionsByReturnDateBetween(new Timestamp(0), new Timestamp(10000)).size());
        assertEquals(2, transactionRepository.findTransactionsByReturnDateBetween(new Timestamp(1000), new Timestamp(2000)).size());
        assertEquals(1, transactionRepository.findTransactionsByReturnDateBetween(new Timestamp(3000), new Timestamp(4000)).size());
        assertEquals(0, transactionRepository.findTransactionsByReturnDateBetween(new Timestamp(4000), new Timestamp(5000)).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByRentalDurationTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        assertEquals(1, transactionRepository.findTransactionsByRentalDuration(10).size());
        assertEquals(0, transactionRepository.findTransactionsByRentalDuration(20).size());

        transactionRepository.deleteAll();
    }

    @Test
    void findTransactionsByRentalDurationBetweenTest() {
        transactionRepository.deleteAll();

        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 10));
        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 20));
        transactionRepository.save(new Transaction(1L, 1L, 100D, new Timestamp(0), null, 30));
        assertEquals(3, transactionRepository.findTransactionsByRentalDurationBetween(0, 40).size());
        assertEquals(1, transactionRepository.findTransactionsByRentalDurationBetween(0, 10).size());
        assertEquals(2, transactionRepository.findTransactionsByRentalDurationBetween(10, 20).size());
        assertEquals(0, transactionRepository.findTransactionsByRentalDurationBetween(40, 60).size());

        transactionRepository.deleteAll();
    }
}
