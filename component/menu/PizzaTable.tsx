import { PizzaCategory } from '@/data/Data';

export interface Pizza {
  name: string;
  ingredients: string;
  prices: string[];
  category: PizzaCategory;
}

const PizzaTable: React.FC<{ pizzas: Pizza[]; highlightedWord: string }> = ({ pizzas, highlightedWord }) => (
  <>
    <p style={{ textAlign: 'right', marginRight: '15px' }}>Ø 26 cm - Ø 33 cm - Ø 50 cm</p>
    <div className="pizza-list">
      {pizzas.map((pizza, index) => (
        <div className="pizza-item" key={index} data-aos="fade-right" data-aos-duration="1000">
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

    {/* <table className="table">
      <thead>
        <tr className="bg-gray-100 text-uppercase gray-600">
          <th scope="col" className="border-0">
            🍕 Pizza
          </th>
          <th scope="col" className="border-0">
            🧀 Ingrédients
          </th>
          <th scope="col" className="border-0">
            Ø 26 cm
          </th>
          <th scope="col" className="border-0">
            Ø 33 cm
          </th>
          <th scope="col" className="border-0">
            Ø 50 cm
          </th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza, index) => (
          <tr key={index}>
            <th scope="row">{pizza.name}</th>
            <td>
              {highlightedWord
                ? pizza.ingredients.split(', ').map((ingredient, idx) => (
                    <span key={idx} className={ingredient.toLowerCase().includes(highlightedWord.toLowerCase()) ? 'highlight' : ''}>
                      {' ' + ingredient + ','}
                    </span>
                  ))
                : pizza.ingredients}
            </td>
            {pizza.prices.map((price, idx) => (
              <td key={idx}>{price}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table> */}
    <p>Ingrédient supplémentaire : Petite pizza Ø 26 cm + 0.50 € | Grande pizza Ø 33 cm + 1.00 € | Maxi pizza Ø 50 cm + 2.00 €</p>
  </>
);

export default PizzaTable;
