import { Pizza } from '../menu/PizzaTable';

const PizzaListTemplate: React.FC<{ pizzas: Pizza[]; highlightedWord?: string }> = ({ pizzas, highlightedWord }) => {
  return (
    <>
      <p style={{ textAlign: 'right', marginRight: '15px' }}>Ø 26 cm - Ø 33 cm - Ø 50 cm</p>
      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <div className="pizza-item" key={index} data-aos="fade-right" data-aos-duration="500">
            <div className="pizza-wrapper" key={index}>
              <h3>🍕 {pizza.name}</h3>
              <div className="prices">
                {pizza.prices.map((price, index) => (
                  <span key={index}>{price}</span>
                ))}
              </div>
            </div>
            <p>
              {' '}
              {highlightedWord
                ? pizza.ingredients.split(', ').map((ingredient, idx) => (
                    <span key={idx} className={ingredient.toLowerCase().includes(highlightedWord.toLowerCase()) ? 'highlight' : ''}>
                      {' ' + ingredient + ','}
                    </span>
                  ))
                : pizza.ingredients}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PizzaListTemplate;
