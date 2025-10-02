
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-brand-accent border-t-brand-highlight rounded-full animate-spin"></div>
        <p className="text-brand-subtext">Loading Platform...</p>
    </div>
  );
};

export default LoadingSpinner;
