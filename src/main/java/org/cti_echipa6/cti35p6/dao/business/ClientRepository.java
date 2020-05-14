package org.cti_echipa6.cti35p6.dao.business;

import org.cti_echipa6.cti35p6.model.business.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findClientByEmailLike(String email);
    List<Client> findClientsByFirstNameLike(String firstName);
    List<Client> findClientsByLastNameLike(String lastName);
    List<Client> findClientsByFirstNameLikeAndLastNameLike(String firstName, String lastName);
}
