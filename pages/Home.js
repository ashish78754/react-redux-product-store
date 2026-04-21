import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductError,
  getProductLoadingState,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const isLoading = useSelector(getProductLoadingState);
  const error = useSelector(getProductError);

  return isLoading ? (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-[32px] border border-white/60 bg-white/80 px-8 py-10 text-center shadow-[0_22px_48px_rgba(78,51,29,0.12)] backdrop-blur-xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
          Catalog
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
          Loading products...
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          The storefront is preparing the latest product cards.
        </p>
      </div>
    </div>
  ) : error ? (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-[32px] border border-white/60 bg-white/80 px-8 py-10 text-center shadow-[0_22px_48px_rgba(78,51,29,0.12)] backdrop-blur-xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
          Catalog
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
          We could not load the products.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {error}
        </p>
      </div>
    </div>
  ) : (
    <section className="mx-auto max-w-7xl">
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
            Shop Now
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            Featured products
          </h3>
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    </section>
  );
}
