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

import PizzaTable, { Pizza, ViewMode, isTableViewMode } from './PizzaTable';
import BoissonTable from './BoissonTable';
import CategoryButton from './CategoryButton';

interface MenuProps {
  style: string;
  showMoreBtn: boolean;
  endIndex: number;
}

export enum ViewCategory {
  BOISSONS = 'boissons',
  PIZZAS = 'pizzas',
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
    const terms = searchQuery
      .toLowerCase()
      .split(' ')
      .filter((term) => term.length > 1);

    return allPizzaList.filter((pizza) => {
      const categoryMatch = selectedCategory === PizzaCategory.ALL || pizza.category === selectedCategory;
      const searchFields = `${pizza.name} ${pizza.ingredients}`.toLowerCase();
      const allTermsMatch = terms.every((term) => searchFields.includes(term));
      return categoryMatch && (terms.length === 0 || allTermsMatch);
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
      <PizzaTable pizzas={pizzas} highlightedWord={completeWordMatch} viewMode={viewMode} />
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
        <div className={`row menu-product-title bg-${getTitleBackgroundColor(category)}`} data-aos="zoom-in">
          <h3>{PizzaTitle[category as keyof typeof PizzaCategory]}</h3>
        </div>
        <PizzaTable pizzas={pizzas} highlightedWord={completeWordMatch} viewMode={viewMode} />
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

  const [viewMode, setViewMode] = useState(ViewMode.TABLE);
  const [viewCategory, setViewCategory] = useState(ViewCategory.PIZZAS);

  const isBoissonsViewCategory = (viewCategory: ViewCategory) => {
    return viewCategory === ViewCategory.BOISSONS;
  };

  return (
    <section>
      <div className={`product ${style}`}>
        <QrCodeMenu />

        <section className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sidebar-default pl-25 mt-4">
                <div className="sidebar-single" data-aos="fade-up" data-aos-duration="500">
                  <h4 className="sidebar-title mb-25">Nos différentes pizzas</h4>
                  <div className="sidebar-tags">{renderCategoryButtons().slice(0, 4)}</div>
                  <div className="sidebar-tags">{renderCategoryButtons().slice(4)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="row mt-4">
            <div className="col-action-pizza">
              <div className="col-md-6 input-group mb-20 w-50 position-relative">
                <input
                  type="text"
                  placeholder="Rechercher une Pizza (ex: Poulet, Merguez ou Marguerite)."
                  className="form-control subscription-input pl-30"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="input-action-icon">
                  <i className="icofont-search-1"></i>
                </div>
              </div>

              <div className="flex g-5">
                {viewCategory === ViewCategory.PIZZAS && (
                  <div className="view-mode">
                    <button
                      className={isTableViewMode(viewMode) ? 'subscribtion-input button-tag button-tag-active' : 'subscribtion-input button-tag button-tag-active'}
                      onClick={() => setViewMode(isTableViewMode(viewMode) ? ViewMode.LIST : ViewMode.TABLE)}
                    >
                      {isTableViewMode(viewMode) ? <i className="icofont-table"></i> : <i className="icofont-list"></i>}
                      {isTableViewMode(viewMode) ? <span>Vue Liste</span> : <span>Vue Table</span>}
                    </button>
                  </div>
                )}

                <div className="view-category">
                  <button
                    className={isBoissonsViewCategory(viewCategory) ? 'subscribtion-input button-tag' : 'subscribtion-input button-tag'}
                    onClick={() => setViewCategory(isBoissonsViewCategory(viewCategory) ? ViewCategory.PIZZAS : ViewCategory.BOISSONS)}
                  >
                    {isBoissonsViewCategory(viewCategory) ? <i className="icofont-table"></i> : <i className="icofont-list"></i>}
                    {isBoissonsViewCategory(viewCategory) ? <span>Nos Pizzas</span> : <span>Nos Boissons</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-lg-12">
              {viewCategory === ViewCategory.PIZZAS && (
                <>
                  {viewCategory === ViewCategory.PIZZAS && selectedCategory === PizzaCategory.ALL && !filteredPizzas.length && (
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
                </>
              )}
              {viewCategory === ViewCategory.BOISSONS && <BoissonTable boissons={allBoissons} title={'Les boissons'} />}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MenuProducts;
