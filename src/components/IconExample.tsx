import React from 'react';
import { FontAwesomeIcon } from '../lib/fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export default function IconExample() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Font Awesome Examples</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl">Solid Icons</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHome} className="h-8 w-8 text-blue-500" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="h-8 w-8 text-green-500" />
            <span>User</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-purple-500" />
            <span>Envelope</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl">Brand Icons</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTwitter} className="h-8 w-8 text-blue-400" />
            <span>Twitter</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8 text-gray-800" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl">Regular Icons</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCalendar} className="h-8 w-8 text-red-500" />
            <span>Calendar</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl">Sizing and Styling</h3>
        <div className="flex gap-4 items-end">
          <FontAwesomeIcon icon={faHome} className="h-4 w-4 text-gray-500" />
          <FontAwesomeIcon icon={faHome} className="h-6 w-6 text-gray-600" />
          <FontAwesomeIcon icon={faHome} className="h-8 w-8 text-gray-700" />
          <FontAwesomeIcon icon={faHome} className="h-10 w-10 text-gray-800" />
          <FontAwesomeIcon icon={faHome} className="h-12 w-12 text-gray-900" />
        </div>
      </div>
    </div>
  );
} 