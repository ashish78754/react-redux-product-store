import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import {
  getAllCartItems,
  getCartError,
  getCartLoadingState,
} from '../store/slices/cartSlice'

export default function Cart() {
  const cartItems = useSelector(getAllCartItems)
  const isLoading = useSelector(getCartLoadingState)
  const error = useSelector(getCartError)

  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
              Cart Overview
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Items in Your Cart
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Review prices, adjust quantities, and keep the same cart workflow.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-[32px] border border-white/60 bg-white/[0.75] shadow-[0_22px_48px_rgba(78,51,29,0.12)] backdrop-blur-xl">
          <div className="hidden grid-cols-[minmax(0,2.9fr)_minmax(100px,0.8fr)_minmax(220px,1.2fr)_minmax(100px,0.8fr)] gap-5 bg-slate-900/[0.04] px-6 py-5 text-sm font-extrabold text-slate-500 md:grid">
            <div>Item</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Total</div>
          </div>
          {isLoading ? (
            <div className="m-5 rounded-[28px] border border-white/70 bg-white/[0.85] px-8 py-10 text-center shadow-[0_18px_40px_rgba(78,51,29,0.08)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
                Cart
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
                Loading cart items...
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Your selected items are being prepared.
              </p>
            </div>
          ) : error ? (
            <div className="m-5 rounded-[28px] border border-white/70 bg-white/[0.85] px-8 py-10 text-center shadow-[0_18px_40px_rgba(78,51,29,0.08)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-orange-dark">
                Cart
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-slate-950">
                We could not load the cart.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">{error}</p>
            </div>
          ) : (
            cartItems.map(({ id, title, rating, price, image, quantity }) => (
              <CartItem
                key={id}
                productId={id}
                title={title}
                price={price}
                quantity={quantity}
                imageUrl={image}
                rating={rating.rate}
              />
            ))
          )}
          <div className="border-t border-slate-200/70 bg-brand-orange/5 px-5 py-5 md:px-6">
            {(!isLoading && !error) && (
              <div className="ml-auto flex max-w-xs items-center justify-between rounded-3xl bg-slate-950 px-5 py-4 text-brand-cream shadow-[0_18px_34px_rgba(32,21,13,0.24)]">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/[0.55]">
                    Grand total
                  </p>
                  <p className="mt-1 text-sm text-white/70">Current cart summary</p>
                </div>
                <div className="font-display text-3xl font-bold tracking-[-0.05em]">
                  $
                  {cartItems.reduce(
                    (accumulator, currentItem) =>
                      accumulator + currentItem.quantity * currentItem.price,
                    0
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
