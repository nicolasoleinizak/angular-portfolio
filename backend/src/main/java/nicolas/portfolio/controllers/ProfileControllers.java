package nicolas.portfolio.controllers;

import nicolas.portfolio.helpers.Response;
import nicolas.portfolio.model.Profile;

import java.sql.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nicolas.portfolio.service.IProfileService;

@RestController
public class ProfileControllers {

    @Autowired
    private IProfileService interfaceProfile;

    @GetMapping("/api/profile/{id}")
    public HashMap<String, Object> getProfile(@PathVariable Long id) {
        if(id != null){
            Profile profile = interfaceProfile.getProfile(id);
            if(profile != null){
                return Response.getResponse(true, null, interfaceProfile.getProfile(id));
            } else{
                return Response.getResponse(false, "REQ002", null);
            }
        } else{
            return Response.getResponse(false, "REQ001", null);
        }
    }

    @PutMapping("/api/profile/{id}")
    public HashMap<String, Object> updateProfile(
        @RequestParam ("id") Long id,
        @RequestParam ("name") String name,
        @RequestParam ("profile") String profile,
        @RequestParam ("image") String image,
        @RequestParam ("birthday") Date birthDate
        ){
            Profile updatedProfile = interfaceProfile.getProfile(id);
            updatedProfile.setName(name);
            updatedProfile.setProfile(profile);
            updatedProfile.setBirthDate(birthDate);
            updatedProfile.setImage(image);
            return Response.getResponse(false, null, updatedProfile);
        }

    // PostMapping
    // PutMapping

}
