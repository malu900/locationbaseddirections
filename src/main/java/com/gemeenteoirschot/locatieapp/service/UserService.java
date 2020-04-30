package com.gemeenteoirschot.locatieapp.service;

import com.gemeenteoirschot.locatieapp.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    void addUser(User user);
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    List<User> getUserByLastName(String lastName);
    void deleteUser(Long id);
    User updateUser(User user);
}
