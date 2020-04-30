package com.gemeenteoirschot.locatieapp.service.impl;

import com.gemeenteoirschot.locatieapp.dao.UserDao;
import com.gemeenteoirschot.locatieapp.model.User;
import com.gemeenteoirschot.locatieapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

//    @Qualifier("userDaoImpl")
    private final UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    public void addUser(User user) {
        userDao.save(user);
    }

    public Optional<User> getUserById(Long id) { return userDao.findById(id); }

    public List<User> getAllUsers() { return userDao.findAll(); }

    public List<User> getUserByLastName(String lastName){ return userDao.findByLastName(lastName); }

    public void deleteUser(Long id) { userDao.deleteById(id); }

    public User updateUser(User user) {return userDao.save(user); }

}
