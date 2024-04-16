import { PizzaCategory } from '@/data/Data';
import { useState } from 'react';
import PizzaTableTemplate from '../templates/PizzaTableTemplate';
import PizzaListTemplate from '../templates/PizzaListTemplate';

export interface Pizza {
  name: string;
  ingredients: string;
  prices: string[];
  category: PizzaCategory;
}

//enum for list and table
export enum ViewMode {
  LIST = 'list',
  TABLE = 'table',
}

export interface PizzaTableProps {
  name: string;
  ingredients: string;
  prices: string[];
  category: PizzaCategory;
}

export const isTableViewMode = (viewMode: ViewMode) => viewMode === ViewMode.TABLE;

const PizzaTable: React.FC<{ pizzas: Pizza[]; highlightedWord: string; viewMode: ViewMode }> = ({ pizzas, highlightedWord, viewMode }) => {
  return <>{isTableViewMode(viewMode) ? PizzaTableTemplate(pizzas, highlightedWord) : PizzaListTemplate({ pizzas, highlightedWord })}</>;
};

export default PizzaTable;
