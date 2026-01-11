// Fix: Added React import to provide access to the React namespace for React.ReactNode
import React from 'react';

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EconomyMetric {
  name: string;
  value: string;
  label: string;
}

export interface ChartData {
  month: string;
  mining: number;
  agriculture: number;
  total: number;
}
