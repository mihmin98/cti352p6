package org.cti_echipa6.cti35p6.controller.business;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.cti_echipa6.cti35p6.model.business.Transaction;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.sql.Timestamp;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class TransactionControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    public void emptyGetResponseTest() throws Exception {
        mockMvc.perform(get("/transaction"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    public void postAndDeleteTest() throws Exception {
        Long id = addTransaction(1L, 1L, 100D, new Timestamp(100), null, 10);
        deleteTransaction(id);
    }

    @Test
    public void getTransactionTest() throws Exception {
        Long id = addTransaction(1L, 1L, 100D, new Timestamp(100), null, 10);

        mockMvc.perform(get("/transaction/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.clientId").value(1L));

        mockMvc.perform(get("/transaction/" + id + 1))
                .andExpect(status().isNotFound());

        deleteTransaction(id);
    }

    @Test
    public void updateTransactionTest() throws Exception {
        Long id = addTransaction(1L, 1L, 100D, new Timestamp(100), null, 10);
        Transaction updatedTransaction = new Transaction(2L, 2L, 200D, new Timestamp(200), null, 20);
        updatedTransaction.setId(id);

        mockMvc.perform(put("/transaction")
                .content(new ObjectMapper().writeValueAsString(updatedTransaction))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/transaction/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.clientId").value(2L));

        deleteTransaction(id);
    }

    public Long addTransaction(Long clientId, Long bookId, Double price, Timestamp rentalDate, Timestamp returnDate, Integer rentalDuration) throws Exception {
        Transaction transaction = new Transaction(clientId, bookId, price, rentalDate, returnDate, rentalDuration);
        MvcResult result = mockMvc.perform(post("/transaction")
                .content(new ObjectMapper().writeValueAsString(transaction))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        return Long.parseLong(result.getResponse().getContentAsString());
    }

    public void deleteTransaction(Long id) throws Exception {
        mockMvc.perform(delete("/transaction/" + id))
                .andExpect(status().isOk());
    }
}
