import React from 'react';

export default function CircularProgress({ value, max, progressColor = '#6ec6ca', progressBg = '#f3f6f7' }) {
  const radius = 75;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = value / max;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={progressBg}
        fill="none"
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
      />
      <circle
        stroke={progressColor}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 1s linear' }}
      />
    </svg>
  );
} 