package com.gemeenteoirschot.locatieapp.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.boot.convert.DurationFormat;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


//With the lazy initialization approach, orderDetailSet will get initialized only when it is explicitly called by using a getter or some other method as shown in the above example
@Entity
@Table(name = "direction")
@EntityListeners(AuditingEntityListener.class)
public class Direction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "direction_id")
    private long id;
    @Column(name = "direction_name")
    private String name;
    private Double km;
    // Hibernate-specific - not supported by JPA //return bigint
    private java.time.Duration Duration;
    @CreationTimestamp
    private Date modifiedDate;
    @UpdateTimestamp
    private Date createdDate;
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] directionImage;
    private String category;
    @OneToMany(mappedBy = "direction")
    private List<Invitation> invitations = new ArrayList<>();
    @OneToMany(mappedBy = "direction")
    private List<RouteDirection> RouteDirection = new ArrayList<>();
    @ManyToMany( cascade = {CascadeType.ALL})
    @JoinTable(name = "direction_waypoint", joinColumns = { @JoinColumn(name = "fk_direction") },
            inverseJoinColumns = { @JoinColumn(name = "fk_waypoint") })
    private List<Waypoint> waypointList = new ArrayList<Waypoint>();
    @OneToMany(mappedBy = "direction")
    private List<WalkedRoutes> registrations = new ArrayList<>();
}
