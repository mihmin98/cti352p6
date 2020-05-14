package org.cti_echipa6.cti35p6.controller.business;

import org.cti_echipa6.cti35p6.dao.business.ClientRepository;
import org.cti_echipa6.cti35p6.model.business.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class ClientController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping("/client")
    private List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/client/{id}")
    private Client getClient(@PathVariable("id") Long id) {
        Optional<Client> client = clientRepository.findById(id);
        try {
            return client.get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found", e);
        }
    }

    @DeleteMapping("/client/{id}")
    private void deleteClient(@PathVariable("id") Long id) {
        Optional<Client> client = clientRepository.findById(id);
        try {
            clientRepository.deleteById(client.get().getId());
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found", e);
        }
    }

    @PostMapping("/client")
    private Long addClient(@RequestBody Client client) {
        client.setId(null);
        clientRepository.saveAndFlush(client);
        return client.getId();
    }

    @PutMapping("/client")
    private Client updateClient(@RequestBody Client client) {
        clientRepository.save(client);
        return client;
    }
}
