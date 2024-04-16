import { PizzaTableProps } from '../menu/PizzaTable';

const PizzaTableTemplate = (pizzas: PizzaTableProps[], highlightedWord?: string) => {
  return (
    <>
      <table className="table" data-aos="fade-up" data-aos-duration="500">
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
                  ? pizza.ingredients.split(', ').map((ingredient: string, idx: number) => (
                      <span key={idx} className={ingredient.toLowerCase().includes(highlightedWord.toLowerCase()) ? 'highlight' : ''}>
                        {' ' + ingredient + ','}
                      </span>
                    ))
                  : pizza.ingredients}
              </td>
              {pizza.prices.map((price: string, idx: number) => (
                <td key={idx}>{price}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>Ingrédient supplémentaire : Petite pizza Ø 26 cm + 0.50 € | Grande pizza Ø 33 cm + 1.00 € | Maxi pizza Ø 50 cm + 2.00 €</p>
    </>
  );
};

export default PizzaTableTemplate;
