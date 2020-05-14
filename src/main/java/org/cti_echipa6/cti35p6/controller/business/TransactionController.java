package org.cti_echipa6.cti35p6.controller.business;

import org.cti_echipa6.cti35p6.dao.business.TransactionRepository;
import org.cti_echipa6.cti35p6.model.business.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class TransactionController {
    @Autowired
    TransactionRepository transactionRepository;

    @GetMapping("/transaction")
    private List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @GetMapping("/transaction/{id}")
    private Transaction getTransaction(@PathVariable("id") Long id) {
        Optional<Transaction> transaction = transactionRepository.findById(id);
        try {
            return transaction.get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction not found", e);
        }
    }

    @DeleteMapping("/transaction/{id}")
    private void deleteTransaction(@PathVariable("id") Long id) {
        Optional<Transaction> transaction = transactionRepository.findById(id);
        try {
            transactionRepository.deleteById(transaction.get().getId());
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction not found", e);
        }
    }

    @PostMapping("/transaction")
    private Long addTransaction(@RequestBody Transaction transaction) {
        transaction.setId(null);
        transactionRepository.saveAndFlush(transaction);
        return transaction.getId();
    }

    @PutMapping("/transaction")
    private Transaction updateTransaction(@RequestBody Transaction transaction) {
        transactionRepository.save(transaction);
        return transaction;
    }
}
