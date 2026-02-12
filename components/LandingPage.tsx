import React from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onNext: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-12 animate-fade-in-up">
      
      {/* Header - Top Left */}
      <div className="absolute top-6 left-6 flex items-center gap-2 text-rose-500 font-bold bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
        <Heart className="w-5 h-5 fill-current" />
        <span>For You</span>
      </div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(255,182,193,0.4)] w-full max-w-2xl text-center relative mt-10 border border-white">
        
        {/* Floating Heart Icon on Top Border */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
          <Heart className="w-6 h-6 text-rose-500 fill-current" />
        </div>

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="relative">
            <h1 className="font-script text-7xl md:text-8xl text-rose-500 relative z-10">
              Hi Leema
            </h1>
            {/* Decorative Heart Graphic next to text */}
            <div className="absolute -right-16 -top-4 transform rotate-12">
               <div className="relative w-16 h-16">
                  <Heart className="w-full h-full text-rose-400 fill-rose-400 drop-shadow-lg" />
                  <Sparkles className="absolute top-0 right-0 text-yellow-300 w-8 h-8 animate-pulse" fill="currentColor" />
               </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto mb-10">
          I made something special for you to show just how much you mean to me.
        </p>

        <button
          onClick={onNext}
          className="group relative bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <span>Go to the Proposal</span>
          <span className="text-xl">💘</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Images Row */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Image 1 */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-2 rounded-2xl shadow-lg transform -rotate-6 transition-transform hover:rotate-0 hover:scale-110 hover:z-10 duration-300">
           <img 
             src="https://picsum.photos/300/300?grayscale&random=1" 
             alt="Memory 1" 
             className="w-full h-full object-cover rounded-xl filter grayscale contrast-125"
           />
        </div>
        
        {/* Image 2 (Center) */}
        <div className="w-36 h-36 md:w-44 md:h-44 bg-white p-2 rounded-2xl shadow-xl transform -translate-y-4 z-10 transition-transform hover:scale-110 duration-300 flex items-center justify-center">
             <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center flex-col gap-1 border border-gray-100">
                <div className="text-xs text-gray-400 font-script text-center">Love notes<br/>Never sent<br/>Before Now</div>
                <Heart className="w-4 h-4 text-gray-300 fill-gray-300" />
             </div>
        </div>

        {/* Image 3 */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-2 rounded-2xl shadow-lg transform rotate-6 transition-transform hover:rotate-0 hover:scale-110 hover:z-10 duration-300">
          <img 
             src="https://picsum.photos/300/300?grayscale&random=2" 
             alt="Memory 2" 
             className="w-full h-full object-cover rounded-xl filter grayscale contrast-125"
           />
        </div>
      </div>
    </div>
  );
};