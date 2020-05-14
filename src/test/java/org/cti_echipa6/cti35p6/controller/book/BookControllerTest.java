package org.cti_echipa6.cti35p6.controller.book;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.cti_echipa6.cti35p6.model.book.Book;
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
public class BookControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void emptyGetResponseTest() throws Exception {
        mockMvc.perform(get("/book"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    public void postAndDeleteBookTest() throws Exception {
        Long id = addBook("postAndDelete", 1L, null, 1L);
        deleteBook(id);

        mockMvc.perform(delete("/book/" + id))
                .andExpect(status().isNotFound());
    }

    @Test
    public void getBookTest() throws Exception {
        Long id = addBook("get", 1L, null, 1L);

        mockMvc.perform(get("/book/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("get"));

        mockMvc.perform(get("/book/" + id + 1))
                .andExpect(status().isNotFound());

        deleteBook(id);
    }

    @Test
    public void updateBookTest() throws Exception {
        Long id = addBook("update test", 1L, null, 1L);
        Book updatedBook = new Book("update", 2L, null, 2L);
        updatedBook.setId(id);

        mockMvc.perform(put("/book")
                .content(new ObjectMapper().writeValueAsString(updatedBook))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/book/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("update"))
                .andExpect(jsonPath("$.authorId").value(2L));

        deleteBook(id);
    }


    public Long addBook(String title, Long authorId, Timestamp publicationDate, Long quantity) throws Exception {
        Book book = new Book(title, authorId, publicationDate, quantity);
        MvcResult result = mockMvc.perform(post("/book")
                .content(new ObjectMapper().writeValueAsString(book))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        return Long.parseLong(result.getResponse().getContentAsString());
    }

    public void deleteBook(Long id) throws Exception {
        mockMvc.perform(delete("/book/" + id))
                .andExpect(status().isOk());
    }
}
