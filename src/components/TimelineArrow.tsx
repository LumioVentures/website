import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TimelineArrowProps {
  title: string;
  description: string;
  isActive: boolean;
  index: number;
  onHover: () => void;
}

const TimelineArrow: React.FC<TimelineArrowProps> = ({ 
  title, 
  description, 
  isActive, 
  index, 
  onHover 
}) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-105'
      }`}
      onMouseEnter={onHover}
    >
      {/* Main Arrow Container */}
      <div
        className={`relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/60 
        backdrop-blur-sm border transition-all duration-300 transform
        ${isActive 
          ? 'border-corporate-blue shadow-lg shadow-corporate-blue/20 animate-pulse-border' 
          : 'border-slate-700/50 hover:border-corporate-blue/60 hover:shadow-lg hover:shadow-corporate-blue/15'
        }`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
          minHeight: '120px'
        }}
      >
        {/* Glow Effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-corporate-blue/8 to-accent-blue/8 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${isActive ? 'opacity-40' : ''}`}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-corporate-blue to-accent-blue mb-3 mx-auto">
            <span className="text-sm font-semibold text-white font-inter">{index + 1}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-center font-inter tracking-wide text-slate-100">
            {title}
          </h3>
          <p className="text-sm text-slate-400 text-center font-inter leading-relaxed">
            {description}
          </p>
        </div>

        {/* LED Border Animation */}
        <div 
          className={`absolute inset-0 border-2 border-transparent transition-all duration-500
          ${isActive ? 'animate-led-pulse border-corporate-blue' : ''}`}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
          }}
        />
      </div>

      {/* Connection Line */}
      {index < 5 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-gradient-to-r from-corporate-blue to-accent-blue opacity-60"></div>
            <ChevronRight className="text-corporate-blue ml-1" size={16} />
          </div>
        </div>
      )}

      {/* Floating Animation */}
      <div className={`absolute inset-0 transition-transform duration-1000 ${
        isActive ? 'animate-float-subtle' : ''
      }`} />
    </div>
  );
};

export default TimelineArrow;