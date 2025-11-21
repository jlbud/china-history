import React, { useState, useMemo } from 'react';
import { ERAS, INITIAL_CARDS } from './constants';
import { EraId, HistoryCardData } from './types';
import HistoryCard from './components/HistoryCard';
import DetailModal from './components/DetailModal';
import ChatPanel from './components/ChatPanel';
import TimelineChart from './components/TimelineChart';
import { Search, Leaf } from 'lucide-react';

const App: React.FC = () => {
  const [selectedEraId, setSelectedEraId] = useState<EraId>(EraId.HAN);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<HistoryCardData | null>(null);

  const selectedEra = ERAS.find(e => e.id === selectedEraId) || ERAS[0];

  // Filter cards based on Era and Search
  const filteredCards = useMemo(() => {
    return INITIAL_CARDS.filter(card => {
      const matchesEra = card.eraId === selectedEraId;
      const query = searchQuery.toLowerCase();
      const matchesSearch = card.title.toLowerCase().includes(query) || 
                            card.hanzi.includes(query) ||
                            card.tags.some(t => t.toLowerCase().includes(query));
      return matchesEra && matchesSearch;
    });
  }, [selectedEraId, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-stone-800 font-sans relative">
      
      {/* Background Texture/Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper.png")' }}></div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white">
              <Leaf size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold serif tracking-tight text-stone-900">中国历史图鉴</h1>
              <p className="text-xs text-stone-500 uppercase tracking-widest">沉浸式历史探索</p>
            </div>
          </div>
          
          <div className="relative hidden sm:block w-64">
            <input 
              type="text" 
              placeholder="搜索历史..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-red-200 outline-none transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-stone-400" size={16} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Timeline Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 sticky top-24">
              <h3 className="text-lg font-bold serif mb-4 border-b border-stone-100 pb-2">朝代</h3>
              <nav className="space-y-1">
                {ERAS.map(era => (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEraId(era.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-200 ${
                      selectedEraId === era.id 
                        ? 'bg-stone-800 text-white shadow-md' 
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="font-medium">{era.name}</span>
                    <span className={`text-xs ${selectedEraId === era.id ? 'text-stone-400' : 'text-stone-400'}`}>{era.hanzi}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8">
                 <TimelineChart 
                    eras={ERAS} 
                    selectedEraId={selectedEraId} 
                    onSelectEra={setSelectedEraId} 
                 />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Era Header */}
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-stone-200 border-l-8" style={{ borderLeftColor: selectedEra.color }}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-bold serif text-stone-800 mb-2">{selectedEra.name} <span className="text-stone-300">{selectedEra.hanzi}</span></h2>
                  <p className="text-stone-500 font-mono mb-4">{selectedEra.period}</p>
                  <p className="text-stone-700 text-lg leading-relaxed max-w-2xl">
                    {selectedEra.description}
                  </p>
                </div>
                <div className="hidden md:block text-9xl text-stone-100 font-serif font-bold absolute right-10 top-4 select-none -z-10">
                  {selectedEra.hanzi}
                </div>
              </div>
            </div>

            {/* Card Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCards.map(card => (
                  <HistoryCard 
                    key={card.id} 
                    card={card} 
                    onClick={setSelectedCard} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
                <p className="text-stone-400 text-lg">未找到该朝代的记录。</p>
                <p className="text-stone-300 text-sm mt-2">史料尚不完整。</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Interactive Elements */}
      <DetailModal 
        card={selectedCard} 
        era={selectedEra} 
        onClose={() => setSelectedCard(null)} 
      />
      
      <ChatPanel era={selectedEra} />

    </div>
  );
};

export default App;