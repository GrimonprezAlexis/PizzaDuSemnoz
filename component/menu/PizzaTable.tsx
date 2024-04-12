import { PizzaCategory } from '@/data/Data';

export interface Pizza {
  name: string;
  ingredients: string;
  prices: string[];
  category: PizzaCategory;
}

const PizzaTable: React.FC<{ pizzas: Pizza[]; highlightedWord: string }> = ({ pizzas, highlightedWord }) => (
  <table className="table">
    <thead>
      <tr className="bg-gray-100 text-uppercase gray-600">
        <th scope="col" className="border-0">
          Pizza
        </th>
        <th scope="col" className="border-0">
          Ingrédients
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
  </table>
);

export default PizzaTable;
