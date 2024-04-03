import React, { useState } from 'react';
import { PizzaCategory } from '@/data/Data';

interface CategoryButtonProps {
  category: PizzaCategory;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, title, onClick, isActive }) => {
  console.log('isActive', isActive, category);
  return (
    <button onClick={onClick} className={`button-tag ${isActive ? 'button-tag-active' : ''}`}>
      {title}
    </button>
  );
};

export default CategoryButton;
