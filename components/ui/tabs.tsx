import React, { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
  className?: string;
}

interface TabsListProps {
  tabs: Tab[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

export const TabsList: React.FC<TabsListProps> = ({ tabs, activeIndex, setActiveIndex }) => (
  <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
    {tabs.map((tab, idx) => (
      <button
        key={tab.label}
        onClick={() => setActiveIndex(idx)}
        style={{
          padding: '8px 16px',
          border: 'none',
          borderBottom: activeIndex === idx ? '2px solid #0070f3' : '2px solid transparent',
          background: 'none',
          cursor: 'pointer',
          fontWeight: activeIndex === idx ? 'bold' : 'normal',
        }}
        aria-selected={activeIndex === idx}
        aria-controls={`tabpanel-${idx}`}
        id={`tab-${idx}`}
        role="tab"
      >
        {tab.label}
      </button>
    ))}
  </div>
);

const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, className }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={className}>
      <TabsList tabs={tabs} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div
        id={`tabpanel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
        style={{ padding: '16px 0' }}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export interface TabsContentProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ children, className = '', value }) => (
  <div
    className={className}
    role="tabpanel"
    {...(value ? { 'data-value': value } : {})}
  >
    {children}
  </div>
);

export default Tabs;
