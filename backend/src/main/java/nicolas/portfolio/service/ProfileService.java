package nicolas.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nicolas.portfolio.repository.ProfileRepository;

import nicolas.portfolio.model.Profile;

@Service
public class ProfileService implements IProfileService{

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Profile getProfile(Long id){
        Profile profile = profileRepository.findById(id).orElse(null);
        return profile;
    }

    @Override
    public Profile updateProfile (Profile profile){
        return profileRepository.save(profile);
    };

}
