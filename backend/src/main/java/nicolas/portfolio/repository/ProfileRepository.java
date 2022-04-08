package nicolas.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nicolas.portfolio.model.Profile;

@Repository
public interface ProfileRepository extends JpaRepository <Profile, Long> {
    
}
