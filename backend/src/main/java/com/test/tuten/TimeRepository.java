package com.test.tuten;

import org.springframework.data.repository.Repository;
import java.util.List;

public interface TimeRepository extends Repository<Timezone, Integer> {
    List<Timezone>findAll();
    Timezone save(Timezone tz);
    //Timezone findOne(int id);
    void delete(Timezone tz);
}
