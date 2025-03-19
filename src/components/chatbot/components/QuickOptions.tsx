
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuickOption } from '../types';

interface QuickOptionsProps {
  options: QuickOption[];
  onOptionSelect: (option: QuickOption) => void;
}

const QuickOptions: React.FC<QuickOptionsProps> = ({ options, onOptionSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          className="text-xs"
          onClick={() => onOptionSelect(option)}
        >
          {option.text}
        </Button>
      ))}
    </div>
  );
};

export default QuickOptions;
