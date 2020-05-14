package org.cti_echipa6.cti35p6.dao.business;

import org.cti_echipa6.cti35p6.model.business.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findTransactionsByClientId(Long clientId);
    List<Transaction> findTransactionsByBookId(Long bookId);
    List<Transaction> findTransactionsByPrice(Double price);
    List<Transaction> findTransactionsByPriceBetween(Double price1, Double price2);
    List<Transaction> findTransactionsByRentalDate(Timestamp date);
    List<Transaction> findTransactionsByRentalDateBetween(Timestamp date1, Timestamp date2);
    List<Transaction> findTransactionsByReturnDate(Timestamp date);
    List<Transaction> findTransactionsByReturnDateNull();
    List<Transaction> findTransactionsByReturnDateBetween(Timestamp date1, Timestamp date2);
    List<Transaction> findTransactionsByRentalDuration(Integer duration);
    List<Transaction> findTransactionsByRentalDurationBetween(Integer duration1, Integer duration2);
}
