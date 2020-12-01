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

    @Override
    public List<Timezone> listar() {
        return timeRepository.findAll();
    }

    @Override
    public Object timeCalculated(Time time, String utc) {
        HashMap<String, String> map = new HashMap<>();
        Time tc; //Variable for storing the conversion

        Calendar cal = Calendar.getInstance(); //Instance of Calendar
        cal.setTime(time);
        cal.add(Calendar.HOUR, Integer.parseInt(utc));

        Timezone tz  = new Timezone(); //Instance of Table Object Timezone
        tz.setTime(time);
        tz.setUtc(utc);

        DateFormat df = new SimpleDateFormat("HH:mm:ss");
        tc = Time.valueOf(df.format(cal.getTime()));
        tz.setTimeconverte(tc);

        timeRepository.save(tz);

        map.put("time_converted",String.valueOf(tz.getTimeconverte()));
        map.put("timezone",utc);

        return map;
    }


}
