import { GetServerSideProps } from "next";
import React from "react";

interface Products {
    id : number,
    title : string,
    description : string,
    image: string;
    price : number
}

interface Props {
    products: Products[];
  }
const ProductsPage: React.FC <Props> = ({ products }: Props) => {
    return (
        <div>
          <h2>Product List</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.image} alt={product.title} width="100" />
              </li>
            ))}
          </ul>
        </div>
      );
}

export const getServerSideProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products: Products[] = await response.json();
  
    return {
      props: {
        products,
      },
    };
  };

export default ProductsPage;