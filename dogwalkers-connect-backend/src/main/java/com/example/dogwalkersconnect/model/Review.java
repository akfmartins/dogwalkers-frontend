
package com.example.dogwalkersconnect.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;
    private String comment;

    @OneToOne
    private Walk walk;
}
