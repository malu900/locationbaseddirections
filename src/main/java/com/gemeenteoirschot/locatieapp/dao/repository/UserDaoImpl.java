package com.gemeenteoirschot.locatieapp.dao.repository;

import com.gemeenteoirschot.locatieapp.dao.UserDao;
import com.gemeenteoirschot.locatieapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.hibernate.Session;

@Repository
public abstract class UserDaoImpl implements UserDao {

    private final UserDao userDao;

    public UserDaoImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> findByLastName(String lastName) {
        List<User> users = new ArrayList<>();
        users.add(new User());
        return users;
    }
}
