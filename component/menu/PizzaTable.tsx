import { PizzaCategory } from '@/data/Data';

export interface Pizza {
  name: string;
  ingredients: string;
  prices: string[];
  category: PizzaCategory;
}

const PizzaTable: React.FC<{ pizzas: Pizza[]; highlightedWord: string }> = ({ pizzas, highlightedWord }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Pizza</th>
        <th scope="col">Ingrédients</th>
        <th scope="col">Ø 26 cm</th>
        <th scope="col">Ø 33 cm</th>
        <th scope="col">Ø 50 cm</th>
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
