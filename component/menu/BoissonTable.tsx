import React from 'react';

export interface Boisson {
  name: string;
  contenant: string;
  prix: string;
}

const BoissonTable: React.FC<{ boissons: Boisson[]; title: string }> = ({ boissons, title }) => (
  <div>
    <div className={`row menu-product-title bg-soft-blue`}>
      <h3>{title}</h3>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Boisson</th>
          <th scope="col">Contenant</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>
        {boissons.map((boisson, index) => (
          <tr key={index}>
            <td scope="row">{boisson.name}</td>
            <td scope="row">{boisson.contenant}</td>
            <td scope="row">{boisson.prix}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <hr />
  </div>
);

export default BoissonTable;
