package com.gemeenteoirschot.locatieapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "waypoint")
@EntityListeners(AuditingEntityListener.class)
public class Waypoint implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "waypoint_id")
    private long id;
    @Column(name = "waypoint_name")
    private String name;
    private double Lattitude;
    private double Longtitude;
    private String Category;
    @ManyToMany( cascade = {CascadeType.ALL})
    @JoinTable(name = "direction_waypoint", joinColumns = { @JoinColumn(name = "fk_waypoint") },
            inverseJoinColumns = { @JoinColumn(name = "fk_direction") })
    private List<Direction> directionsList = new ArrayList<Direction>();
}
