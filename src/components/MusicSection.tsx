import React from 'react';
import type { FC } from 'react';

interface MusicLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

const MusicSection: FC = () => {
  const musicLinks: MusicLink[] = [
    {
      id: "beats",
      title: "Loftwah The Beatsmiff Beats",
      description: "Lots of beats I have made over the years.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtlACntcZqTOD4hckJ8IAWZ3",
      icon: "fa-solid fa-music"
    },
    {
      id: "produced",
      title: "Produced by Loftwah The Beatsmiff",
      description: "A bunch of music that I produced.",
      url: "https://www.youtube.com/playlist?list=PLKBAUoCO_FtkHiwRzyGzfhauIhNMBFw66",
      icon: "fa-solid fa-music"
    }
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Music</h2>
      <div className="grid grid-cols-1 gap-4">
        {musicLinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 bg-card border rounded-lg transition-all hover:shadow-md"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <i className={`${link.icon} text-primary`}></i>
            </div>
            <div>
              <h3 className="font-medium">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;