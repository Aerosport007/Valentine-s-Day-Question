import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ProposalPage } from './components/ProposalPage';
import { SuccessPage } from './components/SuccessPage';
import { FloatingHearts } from './components/FloatingHearts';

// Define the possible states of the application flow
type AppState = 'landing' | 'proposal' | 'success';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');

  // Simple router logic based on state
  const renderContent = () => {
    switch (appState) {
      case 'landing':
        return <LandingPage onNext={() => setAppState('proposal')} />;
      case 'proposal':
        return <ProposalPage onYes={() => setAppState('success')} />;
      case 'success':
        return <SuccessPage />;
      default:
        return <LandingPage onNext={() => setAppState('proposal')} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col">
      {/* Background Decor Elements */}
      <FloatingHearts />
      
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="w-full text-center py-4 text-pink-300 text-xs relative z-10">
        Made with all my love for you.
      </footer>
    </div>
  );
}