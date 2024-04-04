import { products } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: products;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={200}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
        </h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
