import React from 'react';
import mehtysLogo from '../assets/mehtys-logo.jpeg';

export interface BrandLogoProps {
  size?: number | string;
  className?: string;
  imgClassName?: string;
  showText?: boolean;
  textClassName?: string;
  animated?: boolean;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 40,
  className = '',
  imgClassName = '',
  showText = false,
  textClassName = '',
  animated = false,
  alt = 'MEHTYS Logo',
}) => {
  const dimensionStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div 
        className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 ${
          animated ? 'hover:scale-105' : ''
        }`}
        style={dimensionStyle}
      >
        <img
          src={mehtysLogo}
          alt={alt}
          className={`w-full h-full object-contain rounded-full border border-slate-700/60 shadow-lg shadow-black/50 ${imgClassName}`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-wider text-white text-xl font-mono uppercase ${textClassName}`}>
            MEHTYS
          </span>
          <span className="text-[10px] tracking-widest text-cyan-400 font-mono uppercase -mt-1 font-medium">
            LABS & SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
