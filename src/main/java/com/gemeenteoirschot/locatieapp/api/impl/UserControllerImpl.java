package com.gemeenteoirschot.locatieapp.api.impl;

import com.gemeenteoirschot.locatieapp.api.UserController;
import com.gemeenteoirschot.locatieapp.model.User;
import com.gemeenteoirschot.locatieapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserControllerImpl implements UserController {

    private final UserService userService;

    @Autowired
    public UserControllerImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void createUser(@Valid User user) {
        userService.addUser(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @Override
    public User getUsersById(Long id) {
        return userService.getUserById(id).orElse(null);
    }

    @Override
    public List<User> getUsersByLastName(String lastName) {
        return userService.getUserByLastName(lastName);
    }

    @Override
    public void deleteUserById(Long id) {
        userService.deleteUser(id);
    }

    @Override
    public User updateUser(User user) { return userService.updateUser(user); }
}
