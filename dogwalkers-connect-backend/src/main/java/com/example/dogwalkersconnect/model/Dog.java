
package com.example.dogwalkersconnect.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String breed;

    @ManyToOne
    private User tutor;
}
