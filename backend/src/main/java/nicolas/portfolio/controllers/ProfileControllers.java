package nicolas.portfolio.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileControllers {

    @GetMapping("/profile")
    @ResponseBody
    public Map getProfile() {
        Map profile = new HashMap();
        profile.put("name", "Nicolás Oleinizak");
        profile.put("profile", "Web developer");
        profile.put("image", "https://image.com/1.jpg");
        return profile;
    }

    // PostMapping
    // PutMapping

}
