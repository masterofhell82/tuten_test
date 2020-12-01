package com.test.tuten;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping({"/timezone"})

public class TimeController {

    @Autowired
    TimeService timeService;

    @PostMapping("/converter")
    public Object timeCalculated(@RequestParam Time time, @RequestParam String utc){
        HashMap<String, Object> map = new HashMap<>();
        if(time != null && utc != ""){
            map.put("response", timeService.timeCalculated(time,utc));
        }else{
            map.put("Response","Something is wrong");
        }

        return map;

    }


    @GetMapping("/")
    public List<Timezone>listar(){
        return timeService.listar();
    }

}
