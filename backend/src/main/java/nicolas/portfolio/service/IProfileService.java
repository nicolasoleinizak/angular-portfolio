package nicolas.portfolio.service;

import org.springframework.stereotype.Service;

import nicolas.portfolio.model.Profile;

@Service
public interface IProfileService {

    public Profile getProfile (Long id);

    public Profile updateProfile (Profile profile);
    
}
