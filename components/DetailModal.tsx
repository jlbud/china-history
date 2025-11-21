
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { HistoryCardData, Era, AiInsight } from '../types';
import { generateCardDetails } from '../services/geminiService';

interface DetailModalProps {
  card: HistoryCardData | null;
  era: Era | undefined;
  onClose: () => void;
}

const typeMap: Record<string, string> = {
  figure: '人物',
  event: '事件',
  culture: '文化',
  artifact: '文物'
};

// Helper to proxy images for the modal (higher res)
const getHighResImageUrl = (url: string | undefined, seed: number) => {
  if (!url) return `https://picsum.photos/seed/${seed}/800/600`;
  
  if (url.includes('wikimedia.org')) {
    const cleanUrl = url.replace(/^https?:\/\//, '');
    // Request higher quality/size for modal
    return `https://wsrv.nl/?url=${cleanUrl}&w=800&q=85&output=jpg`;
  }
  
  return url;
};

const DetailModal: React.FC<DetailModalProps> = ({ card, era, onClose }) => {
  const [insight, setInsight] = useState<AiInsight | null>(null);
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (card) {
      setInsight(null);
      setLoading(false);
      setImgSrc(getHighResImageUrl(card.imageUrl, card.imageSeed));
      setImgError(false);
    }
  }, [card]);

  const handleGenerateInsight = async () => {
    if (!card || !era) return;
    setLoading(true);
    const result = await generateCardDetails(card, era);
    setInsight(result);
    setLoading(false);
  };

  const handleImageError = () => {
    if (!imgError && card) {
      setImgError(true);
      setImgSrc(`https://picsum.photos/seed/${card.imageSeed}/800/600`);
    }
  };

  if (!card) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          layoutId={`card-${card.id}`}
          className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header Image Area */}
          <div className="h-64 relative flex-shrink-0 bg-stone-200">
             <img 
              src={imgSrc} 
              alt={card.title}
              onError={handleImageError}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-8">
              <div>
                 <span className="text-stone-300 text-sm tracking-widest uppercase mb-1 block font-semibold">
                   {era?.name}
                 </span>
                 <h2 className="text-4xl font-bold text-white serif mb-1">{card.title}</h2>
                 <p className="text-stone-300 text-xl serif">{card.hanzi}</p>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto custom-scrollbar">
            <div className="flex gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2 text-stone-600">
                <span className="font-bold">年份:</span> {card.year}
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <span className="font-bold">类型:</span> <span className="capitalize">{typeMap[card.type] || card.type}</span>
              </div>
            </div>

            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              {card.shortDescription}
            </p>

            {/* AI Section */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-stone-800 font-bold flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-500" />
                  AI 历史解析
                </h3>
                {!insight && !loading && (
                  <button 
                    onClick={handleGenerateInsight}
                    className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white text-sm rounded-lg hover:bg-stone-700 transition-colors"
                  >
                    <BookOpen size={16} />
                    查询百度百科
                  </button>
                )}
              </div>

              {loading && (
                <div className="flex flex-col items-center justify-center py-8 space-y-3">
                  <div className="w-8 h-8 border-4 border-stone-200 border-t-red-500 rounded-full animate-spin"></div>
                  <p className="text-stone-400 text-sm italic">正在翻阅百科全书...</p>
                </div>
              )}

              {insight && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-stone-700 mb-4 font-serif leading-relaxed">
                    {insight.summary}
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-red-500 shadow-sm mb-4">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">秘闻</p>
                    <p className="text-stone-600 italic text-sm">
                      "{insight.secretFact}"
                    </p>
                  </div>
                  
                  {insight.sources && insight.sources.length > 0 && (
                    <div className="pt-3 border-t border-stone-200">
                      <p className="text-xs text-stone-400 font-bold uppercase mb-2">参考资料</p>
                      <ul className="space-y-1">
                        {insight.sources.slice(0, 3).map((source, idx) => (
                          <li key={idx}>
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-stone-500 hover:text-red-600 hover:underline truncate transition-colors"
                            >
                              <ExternalLink size={10} />
                              {source.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailModal;
