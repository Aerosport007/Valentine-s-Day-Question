import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const SuccessPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center relative animate-pop-in">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Heart */}
      <div className="relative mb-12">
        <Heart className="w-48 h-48 md:w-64 md:h-64 text-rose-500 fill-rose-500 drop-shadow-2xl animate-heartbeat" />
        
        {/* Sparkles around heart */}
        <div className="absolute -top-4 -right-4 text-yellow-400 animate-spin-slow">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
        </div>
        <div className="absolute top-1/2 -left-12 text-pink-300 animate-pulse delay-75">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        </div>
      </div>

      {/* Main Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
        You just made me the<br />
        <span className="text-rose-500 bg-rose-100 px-4 rounded-lg inline-block transform -rotate-1 shadow-sm mt-2">happiest man alive</span>.
      </h1>

      {/* Signature */}
      <div className="mt-8 text-2xl md:text-3xl font-bold text-gray-600 flex items-center gap-3">
        <span>I love you, Leema</span>
        <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" />
      </div>

      {/* Simple CSS Confetti Implementation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
           {/* Generating 20 confetti pieces using mapping */}
           {[...Array(20)].map((_, i) => (
             <div 
               key={i}
               className="absolute top-0 w-3 h-3 rounded-sm"
               style={{
                 left: `${Math.random() * 100}%`,
                 backgroundColor: ['#f43f5e', '#ec4899', '#fbbf24', '#60a5fa'][Math.floor(Math.random() * 4)],
                 animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
                 animationDelay: `${Math.random() * 2}s`
               }}
             />
           ))}
        </div>
      )}
      
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          40% { transform: scale(1); }
          60% { transform: scale(1.1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};