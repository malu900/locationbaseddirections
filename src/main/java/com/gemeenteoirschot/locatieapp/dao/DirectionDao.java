package com.gemeenteoirschot.locatieapp.dao;

import com.gemeenteoirschot.locatieapp.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DirectionDao extends JpaRepository<Direction, Long> {
}
