import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Era, EraId } from '../types';

interface TimelineChartProps {
  eras: Era[];
  selectedEraId: EraId;
  onSelectEra: (id: EraId) => void;
}

const TimelineChart: React.FC<TimelineChartProps> = ({ eras, selectedEraId, onSelectEra }) => {
  // Transform data for Recharts
  // We want a horizontal bar chart showing duration.
  // Start year is sometimes negative. We need to normalize or just show duration.
  // Let's just show 'Duration' in years as the bar size for visual weight.
  
  const data = eras.map(era => ({
    name: era.name,
    duration: Math.abs(era.endYear - era.startYear),
    id: era.id,
    color: era.color,
    original: era
  }));

  return (
    <div className="h-[200px] w-full bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">朝代持续时间</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={80} 
            tick={{ fontSize: 12, fill: '#57534e', fontFamily: 'Noto Serif SC' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const d = payload[0].payload;
                return (
                  <div className="bg-stone-800 text-white text-xs p-2 rounded shadow-lg">
                    <p className="font-bold">{d.name}</p>
                    <p>{d.original.period}</p>
                    <p>{d.duration} 年</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="duration" radius={[0, 4, 4, 0]} barSize={12} onClick={(entry: any) => onSelectEra(entry.id as EraId)}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.id === selectedEraId ? entry.color : '#e7e5e4'} 
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;