import React from 'react';

interface MiniChartProps {
  data: number[];
  color?: string;
  height?: number;
  width?: number;
}

const MiniChart: React.FC<MiniChartProps> = ({ 
  data,
  color = '#16C784',
  height = 50,
  width = 120
}) => {
  if (!data || data.length === 0) {
    return <div className="w-[120px] h-[50px] bg-gray-100 rounded"></div>;
  }
  
  // Calculate min and max for scaling
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue;
  
  // Scale points to fit the SVG viewBox
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - minValue) / range) * height;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      className="overflow-visible"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MiniChart;