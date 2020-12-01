package com.test.tuten;

import java.sql.Time;
import java.util.List;

public interface TimeService {

    //Timezone create(Timezone tz);

    //This method is only to show all the data
    List<Timezone> listar();

    public Object timeCalculated(Time time, String utc);

/*  //This method is to show only one record
    TimeZone listarId(int id);

    TimeZone update(TimeZone tz);

    TimeZone delete(int id);*/

}
