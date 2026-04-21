import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/slices/productsSlice";
import { fetchCartItemsData } from "../store/slices/cartSlice";

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-brand-orange-dark"
      viewBox="0 0 576 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  );
}

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(fetchCartItemsData());
  }, []);
  const cartItems = useSelector((state) => state.cartItems.list);
  return (
    <header className="sticky top-0 z-30 px-3 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border border-white/60 bg-white/[0.65] px-4 py-4 shadow-[0_22px_48px_rgba(78,51,29,0.12)] backdrop-blur-xl sm:px-6">
        <Link className="flex min-w-0 items-center gap-3" to="/">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-teal to-brand-orange font-display text-xl font-bold text-white shadow-[0_18px_30px_rgba(29,107,115,0.28)]">
            S
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-2xl font-bold tracking-[-0.04em] text-slate-950">
              Shopee
            </span>
            <span className="hidden text-sm text-slate-600 sm:block">
              modern shopping cards
            </span>
          </span>
        </Link>
        <Link
          className="relative inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-2.5 shadow-[0_14px_28px_rgba(78,51,29,0.08)] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          to="/cart"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-orange/20">
            <CartIcon />
          </span>
          <span className="hidden font-semibold text-slate-900 sm:inline">
            Cart
          </span>
          <div className="absolute left-9 top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-950 px-1.5 text-[11px] font-bold text-white shadow-[0_10px_18px_rgba(32,21,13,0.22)]">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0,
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
