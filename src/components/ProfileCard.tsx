import React from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import avatarImage from '../assets/images/loftwah_avatar.jpg';
import { FontAwesomeIcon } from '../lib/fontawesome';
import { faTrophy, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';

const ProfileCard: FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-8 p-6 bg-card rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img 
          src={avatarImage.src} 
          alt="Dean Lofts" 
          className="w-40 h-40 rounded-full object-cover border-4 border-primary"
        />
        <h2 className="text-2xl font-bold mt-4">Dean Lofts</h2>
        <p className="text-muted-foreground">@loftwah</p>
        <p className="text-center max-w-xs mt-2">"Only the vibe coder remains."</p>
        
        <div className="flex gap-3 mt-4">
          <a href="https://github.com/loftwah" target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://twitter.com/loftwah" target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon">
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://bsky.app/profile/loftwah.com" target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon">
              <FontAwesomeIcon icon={faBluesky} className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/deanlofts" target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p>Creator of Linkarooie, DevOps Engineer. Hit me up on Twitter/X.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills & Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["AI/ML", "Astro", "AWS", "DevOps", "Docker", "GitHub", "Linux", "Postgres", "Python (uv)", "Ruby on Rails", "Terraform", "TypeScript"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Latest Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <FontAwesomeIcon icon={faNewspaper} className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Featured in Mashable</h4>
                <p className="text-sm text-muted-foreground">19 Jul 2024</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <FontAwesomeIcon icon={faTrophy} className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">HashiCorp Certified: Terraform Associate (003)</h4>
                <p className="text-sm text-muted-foreground">18 Apr 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;