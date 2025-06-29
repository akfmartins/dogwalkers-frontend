
package com.example.dogwalkersconnect.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Walk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dateTime;
    private String status;

    @ManyToOne
    private User tutor;

    @ManyToOne
    private User dogwalker;

    @ManyToOne
    private Dog dog;
}
