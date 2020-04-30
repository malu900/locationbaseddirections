package com.gemeenteoirschot.locatieapp.api;

import com.gemeenteoirschot.locatieapp.model.User;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


public interface UserController {
    @PostMapping(path = "/adduser")
    void createUser(@Valid @RequestBody User user);

    @GetMapping()
    List<User> getAllUsers();

    @GetMapping(path = "/id={id}")
    User getUsersById(@PathVariable("id") Long id);

    @GetMapping(path = "/lastname={lastName}")
    List<User> getUsersByLastName(@PathVariable("lastName") String lastName);

    @DeleteMapping(path = "/{id}")
    void deleteUserById(@PathVariable("id") Long id);

    @PutMapping
    User updateUser(@RequestBody User user);

}
