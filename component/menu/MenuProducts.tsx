'use client';
import React, { useEffect, useMemo, useState } from 'react';
import QrCodeMenu from './QrCodeMenu';

import {
  PizzaCategory,
  PizzaTitle,
  allPizzaList,
  nouveautePizzaList,
  classicPizzas,
  incontournablesPizzaList,
  specialesPizzaList,
  pimentesPizzaList,
  pizzaDesMersList,
  sucreesSaleesPizzasList,
  allBoissons,
} from '@/data/Data';

import PizzaTable, { Pizza } from './PizzaTable';
import BoissonTable from './BoissonTable';
import CategoryButton from './CategoryButton';

interface MenuProps {
  style: string;
  showMoreBtn: boolean;
  endIndex: number;
}
const MenuProducts: React.FC<MenuProps> = ({ style, showMoreBtn, endIndex }) => {
  const [selectedCategory, setSelectedCategory] = useState<PizzaCategory>(PizzaCategory.ALL);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completeWordMatch, setCompleteWordMatch] = useState<string>('');

  const extractCompleteWordMatch = (ingredients: string) => {
    if (!searchQuery || searchQuery.length < 3) {
      return '';
    }
    const words = ingredients.split(', ');
    const foundWord = words.find((word) => word.toLowerCase().includes(searchQuery.toLowerCase()));
    return foundWord ? foundWord : '';
  };

  const filteredPizzas = useMemo(() => {
    return allPizzaList.filter((pizza) => {
      const categoryMatch = selectedCategory === PizzaCategory.ALL || pizza.category === selectedCategory;
      const ingredientMatch = !searchQuery || searchQuery.length <= 3 || pizza.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && ingredientMatch;
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      const completeMatch = filteredPizzas.reduce((match, pizza) => {
        if (!match) {
          return extractCompleteWordMatch(pizza.ingredients);
        }
        return match;
      }, '');
      setCompleteWordMatch(completeMatch);
    } else {
      setCompleteWordMatch('');
    }
  }, [searchQuery, filteredPizzas]);

  // Group filtered pizzas by category
  const pizzasByCategory: { [key in PizzaCategory]?: Pizza[] } = {};
  filteredPizzas.forEach((pizza) => {
    if (!pizzasByCategory[pizza.category]) {
      pizzasByCategory[pizza.category] = [];
    }
    pizzasByCategory[pizza.category]?.push(pizza);
  });

  const handleCategoryClick = (category: PizzaCategory) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const renderPizzaTable = (pizzas: Pizza[], title: PizzaTitle) => (
    <>
      <div className="row menu-product-title">
        <h3>{title}</h3>
      </div>
      <PizzaTable pizzas={pizzas} highlightedWord={completeWordMatch} />
      <hr></hr>
    </>
  );

  const renderCategoryButtons = () => {
    return Object.entries(PizzaTitle).map(([key, value]) => (
      <CategoryButton
        key={key}
        category={PizzaCategory[key as keyof typeof PizzaCategory]}
        title={value}
        onClick={() => handleCategoryClick(PizzaCategory[key as keyof typeof PizzaCategory])}
        isActive={selectedCategory === PizzaCategory[key as keyof typeof PizzaCategory]}
      />
    ));
  };

  function getTitleBackgroundColor(str: any) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s/g, '-')
      .toLowerCase();
  }

  const renderPizzaTables = () => {
    return Object.entries(pizzasByCategory).map(([category, pizzas]) => (
      <div key={category}>
        <div className={`row menu-product-title bg-${getTitleBackgroundColor(category)}`}>
          <h3>{PizzaTitle[category as keyof typeof PizzaCategory]}</h3>
        </div>
        <PizzaTable pizzas={pizzas} highlightedWord={completeWordMatch} />
        <hr />
      </div>
    ));
  };

  const renderNoPizzaFound = () => {
    return (
      <div className="col-lg-12">
        <p>Aucune pizza trouvée.</p>
      </div>
    );
  };

  return (
    <section>
      <div className={`product ${style}`}>
        <QrCodeMenu />

        <section className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sidebar-default pl-25">
                <div className="sidebar-single" data-aos="fade-up" data-aos-duration="500">
                  <h4 className="sidebar-title mb-25">Nos différentes pizzas</h4>
                  <div className="sidebar-tags">{renderCategoryButtons().slice(0, 4)}</div>
                  <div className="sidebar-tags">{renderCategoryButtons().slice(4)}</div>
                </div>
              </div>
            </div>

            <div className="input-group mb-20">
              <input type="text" placeholder="Rechercher par ingrédient..." className="form-control subscribtion-input mt-4" value={searchQuery} onChange={handleSearchChange} />
              <button type="submit" className="custom-btn mt-25">
                <span className="icofont-search-1"></span>
              </button>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-lg-12">
              {selectedCategory === PizzaCategory.ALL && !filteredPizzas.length && (
                <div className="blog-left-wrapp">
                  {renderPizzaTable(nouveautePizzaList, PizzaTitle.NOUVEAUTE)}
                  {renderPizzaTable(classicPizzas, PizzaTitle.CLASSIQUES)}
                  {renderPizzaTable(incontournablesPizzaList, PizzaTitle.INCONTOURNABLES)}
                  {renderPizzaTable(specialesPizzaList, PizzaTitle.SPECIALES)}
                  {renderPizzaTable(pimentesPizzaList, PizzaTitle.PIMENTES)}
                  {renderPizzaTable(pizzaDesMersList, PizzaTitle.PIZZA_DES_MERS)}
                  {renderPizzaTable(sucreesSaleesPizzasList, PizzaTitle.SUCREES_SALEES)}
                </div>
              )}

              {filteredPizzas.length ? renderPizzaTables() : renderNoPizzaFound()}
              <BoissonTable boissons={allBoissons} title={'Les boissons'} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MenuProducts;
