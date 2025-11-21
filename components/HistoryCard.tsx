
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HistoryCardData } from '../types';
import { ArrowRight, ImageOff } from 'lucide-react';

interface HistoryCardProps {
  card: HistoryCardData;
  onClick: (card: HistoryCardData) => void;
}

const typeMap: Record<string, string> = {
  figure: '人物',
  event: '事件',
  culture: '文化',
  artifact: '文物'
};

// Helper to proxy images to bypass CORS/Hotlink protection and resize
const getOptimizedImageUrl = (url: string | undefined, seed: number) => {
  if (!url) return `https://picsum.photos/seed/${seed}/400/300`;
  
  // If it's a Wikimedia image, use wsrv.nl proxy to bypass hotlink protection
  if (url.includes('wikimedia.org')) {
    // Remove protocol for wsrv
    const cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://wsrv.nl/?url=${cleanUrl}&w=400&h=300&fit=cover&a=attention`;
  }
  
  return url;
};

const HistoryCard: React.FC<HistoryCardProps> = ({ card, onClick }) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setImgSrc(getOptimizedImageUrl(card.imageUrl, card.imageSeed));
    setHasError(false);
    setIsLoaded(false);
  }, [card]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to a reliable Picsum image based on seed if the specific historical image fails
      setImgSrc(`https://picsum.photos/seed/${card.imageSeed}/400/300`);
    }
  };

  return (
    <motion.div
      layoutId={`card-${card.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="group relative bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer flex flex-col h-full"
      onClick={() => onClick(card)}
    >
      <div className="relative h-48 overflow-hidden bg-stone-200">
        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-stone-200 animate-pulse" />
        )}

        <img 
          src={imgSrc} 
          alt={card.title}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className="absolute bottom-2 right-2 z-20">
          <span className="px-2 py-1 text-xs font-semibold bg-white/90 text-stone-800 rounded shadow backdrop-blur-sm border border-stone-100">
            {typeMap[card.type] || card.type.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-bold text-stone-800 serif group-hover:text-red-700 transition-colors">
            {card.title}
          </h3>
          <span className="text-sm text-stone-400 font-mono">{card.year}</span>
        </div>
        <div className="mb-3">
           <span className="text-lg text-stone-500 font-serif opacity-60">{card.hanzi}</span>
        </div>
        
        <p className="text-stone-600 text-sm line-clamp-3 flex-grow">
          {card.shortDescription}
        </p>
        
        <div className="mt-4 flex justify-between items-center pt-4 border-t border-stone-100">
          <div className="flex gap-1">
            {card.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <div className="text-red-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HistoryCard;
