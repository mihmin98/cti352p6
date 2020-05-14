package org.cti_echipa6.cti35p6.controller.business;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.cti_echipa6.cti35p6.model.business.Client;
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
public class ClientControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    public void emptyGetResponseTest() throws Exception {
        mockMvc.perform(get("/client"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    public void postAndDeleteTest() throws Exception {
        Long id = addClient("post", "delete", "post@delete.com");
        deleteClient(id);
    }

    @Test
    public void getClientTest() throws Exception {
        Long id = addClient("get", "test", "get@test.com");

        mockMvc.perform(get("/client/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("get@test.com"));

        mockMvc.perform(get("/client/" + id + 1))
                .andExpect(status().isNotFound());

        deleteClient(id);
    }

    @Test
    public void updateClientTest() throws Exception {
        Long id = addClient("update", "test", "update@test.com");
        Client updatedClient = new Client("updated", "tested", "updated@tested.com");
        updatedClient.setId(id);

        mockMvc.perform(put("/client")
                .content(new ObjectMapper().writeValueAsString(updatedClient))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/client/" + id))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("updated@tested.com"));

        deleteClient(id);
    }

    public Long addClient(String firstName, String lastName, String email) throws Exception {
        Client client = new Client(firstName, lastName, email);
        MvcResult result = mockMvc.perform(post("/client")
                .content(new ObjectMapper().writeValueAsString(client))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        return Long.parseLong(result.getResponse().getContentAsString());
    }

    public void deleteClient(Long id) throws Exception {
        mockMvc.perform(delete("/client/" + id))
                .andExpect(status().isOk());
    }
}
