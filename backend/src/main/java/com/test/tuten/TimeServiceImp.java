package com.test.tuten;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@Service
public class TimeServiceImp implements TimeService{

    @Autowired
    private TimeRepository timeRepository;

    //Shows all recorded times
    @Override
    public List<Timezone> listar() {
        return timeRepository.findAll();
    }

    //Implementation function that will return the calculated time
    @Override
    public Object timeCalculated(Time time, String utc) {
        //Use of HashMap for the creation of JSON
        HashMap<String, String> map = new HashMap<>();

        //Variable for storing the conversion
        Time tc;

        //Instance of Calendar
        Calendar cal = Calendar.getInstance();

        //Time is set with the time data
        cal.setTime(time);

        //The calculation is made according to the timezone
        cal.add(Calendar.HOUR, Integer.parseInt(utc));

        //Instance of Table Object Timezone
        Timezone tz  = new Timezone();

        //Set time
        tz.setTime(time);

        //Set utc
        tz.setUtc(utc);

        //Formatting time with DateFormat
        DateFormat df = new SimpleDateFormat("HH:mm:ss");

        //The result obtained is stored.
        tc = Time.valueOf(df.format(cal.getTime()));

        //Set
        tz.setTimeconverte(tc);

        //Save in the data base
        timeRepository.save(tz);

        map.put("time_converted",String.valueOf(tz.getTimeconverte()));
        map.put("timezone",utc);

        //Return JSON
        return map;
    }


}
