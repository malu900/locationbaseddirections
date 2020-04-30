package com.gemeenteoirschot.locatieapp.dao;

import com.gemeenteoirschot.locatieapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDao extends JpaRepository<User, Long>{
    List<User> findByLastName(String lastName);
}
