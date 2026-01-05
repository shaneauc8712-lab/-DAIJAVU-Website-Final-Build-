
import React from 'react';
import { ASSETS } from '../constants';

const VisualStrip: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-96 relative overflow-hidden bg-background-mid">
       <img 
         src={ASSETS.wideVisual} 
         alt="System Visual" 
         className="w-full h-full object-cover opacity-40 grayscale contrast-125"
       />
       <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-1/4 bg-gradient-to-r from-transparent to-border"></div>
          <div className="mx-6 w-4 h-4 rounded-full border border-primary-purple animate-ping"></div>
          <div className="h-px w-1/4 bg-gradient-to-l from-transparent to-border"></div>
       </div>
    </div>
  );
};

export default VisualStrip;
