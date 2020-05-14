package org.cti_echipa6.cti35p6.dao.business;

import org.cti_echipa6.cti35p6.model.business.Client;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ClientRepositoryTest {
    @Autowired
    ClientRepository clientRepository;

    @Test
    void findClientByEmailLikeTest() {
        clientRepository.deleteAll();

        clientRepository.save(new Client("Diana", "C", "daublock@email.com"));
        clientRepository.save(new Client("Gion", "Hotzescu", "hatz_gion@email.com"));
        clientRepository.save(new Client("Abi", "Talent", "zdreanto@email.com"));

        assertNull(clientRepository.findClientByEmailLike("test"));
        assertNotNull(clientRepository.findClientByEmailLike("%gion%"));
        assertNotNull(clientRepository.findClientByEmailLike("hatz_gion@email.com"));

        clientRepository.deleteAll();
    }

    @Test
    void findClientsByFirstNameLikeTest() {
        clientRepository.deleteAll();

        clientRepository.save(new Client("Diana", "C", "daublock@email.com"));
        clientRepository.save(new Client("Gion", "Hotzescu", "hatz_gion@email.com"));
        clientRepository.save(new Client("Abi", "Talent", "zdreanto@email.com"));

        assertEquals(0, clientRepository.findClientsByFirstNameLike("test").size());
        assertEquals(1, clientRepository.findClientsByFirstNameLike("%io%").size());
        assertEquals(1, clientRepository.findClientsByFirstNameLike("Abi").size());

        clientRepository.deleteAll();
    }

    @Test
    void findClientsByLastNameLikeTest() {
        clientRepository.deleteAll();

        clientRepository.save(new Client("Diana", "C", "daublock@email.com"));
        clientRepository.save(new Client("Gion", "Hotzescu", "hatz_gion@email.com"));
        clientRepository.save(new Client("Abi", "Talent", "zdreanto@email.com"));

        assertEquals(0, clientRepository.findClientsByLastNameLike("test").size());
        assertEquals(1, clientRepository.findClientsByLastNameLike("%tz%").size());
        assertEquals(1, clientRepository.findClientsByLastNameLike("Talent").size());

        clientRepository.deleteAll();
    }

    @Test
    void findClientsByFirstNameLikeAndLastNameLike() {
        clientRepository.deleteAll();

        clientRepository.save(new Client("Diana", "C", "daublock@email.com"));
        clientRepository.save(new Client("Gion", "Hotzescu", "hatz_gion@email.com"));
        clientRepository.save(new Client("Abi", "Talent", "zdreanto@email.com"));

        assertEquals(0, clientRepository.findClientsByFirstNameLikeAndLastNameLike("test", "test").size());
        assertEquals(1, clientRepository.findClientsByFirstNameLikeAndLastNameLike("%io%", "%tz%").size());
        assertEquals(1, clientRepository.findClientsByFirstNameLikeAndLastNameLike("Abi", "Talent").size());

        clientRepository.deleteAll();
    }
}
