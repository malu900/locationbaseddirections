package com.gemeenteoirschot.locatieapp.model;

import javax.persistence.*;

@Entity
public class WalkedRoutes {

    @Id
    Long id;

    @ManyToOne
    @MapsId("direction_id")
    @JoinColumn(name = "direction_id")
    Direction direction;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    User user;

    private boolean isFavorite;
    private boolean isCompleted;
}
