package com.gemeenteoirschot.locatieapp.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routeDirection")
@EntityListeners(AuditingEntityListener.class)
public class RouteDirection {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "routedirection_id")
    private long id;
    private double lattitude;
    private double longtitude;
    @ManyToOne
    @JoinColumn(name = "fk_direction")
    private Direction direction;

}
