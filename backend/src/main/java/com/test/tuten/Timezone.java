package com.test.tuten;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table
public class Timezone {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private Time time;

    @Column
    private String utc;

    @Column
    private Time timeconverte;

    public int getId() {
        return id;
    }

    public Time getTimeconverte() {
        return timeconverte;
    }

    public void setTimeconverte(Time timeconverte) {
        this.timeconverte = timeconverte;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getUtc() {
        return utc;
    }

    public void setUtc(String utc) {
        this.utc = utc;
    }
}
