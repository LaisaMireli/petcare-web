import React from 'react';

interface ActionPillProps {
  icon: React.ReactNode;
  label: string;
}

export default function ActionPill({ icon, label }: ActionPillProps) {
  return (
    <div className="bg-white px-5 py-3 rounded-2xl shadow-sm flex items-center gap-2 min-w-max cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="text-brand-orange">{icon}</div>
      <span className="font-semibold text-brand-dark text-sm">{label}</span>
    </div>
  );
}