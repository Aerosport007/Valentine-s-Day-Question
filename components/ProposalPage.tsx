import React, { useState, useEffect } from 'react';

interface ProposalPageProps {
  onYes: () => void;
}

const MESSAGES = [
  "You sure? 🥺",
  "Think again...",
  "Are you really sure? 😭",
  "But I made this just for you 💖",
  "Leemaaa 😭",
  "Okay this is getting suspicious 👀",
  "Just press YES already 😌"
];

export const ProposalPage: React.FC<ProposalPageProps> = ({ onYes }) => {
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [noPosition, setNoPosition] = useState<{ top: string; left: string; position: 'static' | 'absolute' }>({
    top: 'auto',
    left: 'auto',
    position: 'static'
  });
  const [messageIndex, setMessageIndex] = useState(-1);

  // Timer for YES button growth - Grows faster now (0.2 per second)
  useEffect(() => {
    const timer = setInterval(() => {
      setYesScale(prev => prev + 0.02); 
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleNoInteraction = () => {
    // Calculate random position within viewport
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      position: 'absolute'
    });

    // Decrease size slightly each time
    setNoScale(prev => Math.max(0.6, prev - 0.05));

    // Cycle messages
    setMessageIndex(prev => {
        if (prev < MESSAGES.length - 1) return prev + 1;
        return prev;
    });
  };

  const getNoButtonText = () => {
    return messageIndex === -1 ? "NO 🙈" : MESSAGES[messageIndex];
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-pink-50/50 p-4">
      
      {/* Custom Keyframe for bouncing while respecting dynamic scale */}
      <style>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0) scale(var(--button-scale)); }
          50% { transform: translateY(-10px) scale(var(--button-scale)); }
        }
        .animate-bounce-custom {
          animation: gentle-bounce 2s infinite ease-in-out;
        }
      `}</style>

      {/* Big glowing heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 mb-12 drop-shadow-md tracking-tight leading-tight z-10">
        Leema... will you be my <br/>
        <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">Valentine?</span> 💘
      </h1>

      {/* Button Container */}
      <div className="flex flex-row items-center justify-center gap-8 relative w-full max-w-lg h-24 z-20">
        
        {/* YES Button */}
        <button
          onClick={onYes}
          style={{ 
            transform: `scale(${yesScale})`,
            transition: 'transform 0.1s linear'
          }}
          className="bg-gradient-to-br from-rose-500 to-pink-500 text-white font-bold py-4 px-10 rounded-2xl shadow-[0_0_20px_rgba(244,63,94,0.5)] hover:shadow-[0_0_30px_rgba(244,63,94,0.7)] flex items-center gap-2 whitespace-nowrap z-30 ring-2 ring-pink-300 ring-offset-2"
        >
          YES 💖
        </button>

        {/* NO Button */}
        <button
          onMouseEnter={handleNoInteraction}
          onTouchStart={handleNoInteraction}
          style={{ 
            position: noPosition.position as any,
            top: noPosition.top,
            left: noPosition.left,
            '--button-scale': noScale,
            // If static, apply scale directly. If absolute, animation handles scale via CSS var
            transform: noPosition.position === 'static' ? `scale(${noScale})` : undefined,
            transition: noPosition.position === 'static' ? 'none' : 'top 0.2s ease-in-out, left 0.2s ease-in-out' 
          } as React.CSSProperties}
          className={`bg-white border-2 border-pink-300 text-pink-500 font-bold py-3 px-8 rounded-2xl shadow-sm hover:bg-pink-50 whitespace-nowrap z-40 transition-colors ${noPosition.position === 'absolute' ? 'animate-bounce-custom' : ''}`}
        >
          {getNoButtonText()}
        </button>
      </div>

    </div>
  );
};