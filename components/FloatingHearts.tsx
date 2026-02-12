import React from 'react';
import { Heart } from 'lucide-react';

export const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left */}
      <Heart className="absolute top-10 left-10 text-pink-200 w-12 h-12 opacity-50 animate-float" fill="currentColor" />
      <Heart className="absolute top-40 left-1/4 text-rose-100 w-8 h-8 opacity-40 animate-float-delayed" fill="currentColor" />
      
      {/* Top Right */}
      <div className="absolute top-12 right-20 text-pink-200 opacity-60 animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
        </svg>
      </div>

      {/* Bottom Areas */}
      <Heart className="absolute bottom-20 right-10 text-pink-200 w-16 h-16 opacity-30 animate-float" fill="currentColor" />
      <Heart className="absolute bottom-1/3 left-10 text-pink-100 w-10 h-10 opacity-50" fill="currentColor" />
      
      {/* Random small dots/sparkles */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-pink-300 rounded-full opacity-30"></div>
    </div>
  );
};