package com.gemeenteoirschot.locatieapp.dao;

import com.gemeenteoirschot.locatieapp.model.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvitationDao extends JpaRepository<Invitation, Long> {
}
