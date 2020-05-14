package org.cti_echipa6.cti35p6.controller.book;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.cti_echipa6.cti35p6.model.book.Author;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;


@SpringBootTest
@AutoConfigureMockMvc
public class AuthorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void emptyGetResponseTest() throws Exception {
        mockMvc.perform(get("/author"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    public void postAndDeleteAuthorTest() throws Exception {
        Long id = addAuthor("post and delete");
        deleteAuthor(id);
    }

    @Test
    public void getAuthorTest() throws Exception {
        Long id = addAuthor("get");

        mockMvc.perform(get("/author/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(id))
                .andExpect(jsonPath("$.name").value("get"));

        mockMvc.perform(get("/author/" + id + 1))
                .andExpect(status().isNotFound());

        deleteAuthor(id);
    }

    @Test
    public void deleteAuthorTest() throws Exception {
        Long id = addAuthor("delete");
        mockMvc.perform(delete("/author/" + id))
                .andExpect(status().isOk());

        mockMvc.perform(delete("/author/" + id))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateAuthorTest() throws Exception {
        Long id = addAuthor("update test");
        Author updatedAuthor = new Author("update");
        updatedAuthor.setId(id);

        mockMvc.perform(put("/author")
                .content(new ObjectMapper().writeValueAsString(updatedAuthor)).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/author/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("update"));
    }

    public Long addAuthor(String name) throws Exception {
        MvcResult result = mockMvc.perform(post("/author")
                .content(new ObjectMapper().writeValueAsString(new Author(name)))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        return Long.parseLong(result.getResponse().getContentAsString());
    }

    public void deleteAuthor(Long id) throws Exception {
        mockMvc.perform(delete("/author/" + id))
                .andExpect(status().isOk());
    }
}
