import React from 'react'
import { useDispatch } from 'react-redux'
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from '../store/slices/cartSlice'

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch()
  const ratingStars = '\u2605\u2605\u2605\u2605'

  return (
    <div className="grid gap-5 border-t border-slate-200/70 px-5 py-5 first:border-t-0 md:grid-cols-[minmax(0,2.9fr)_minmax(100px,0.8fr)_minmax(220px,1.2fr)_minmax(100px,0.8fr)] md:items-center md:px-6">
      <div className="flex min-w-0 items-center gap-4">
        <div className="grid h-24 w-24 flex-shrink-0 place-items-center rounded-3xl bg-gradient-to-b from-white to-[#fff3e7] p-3">
          <img className="h-full w-full object-contain" src={imageUrl} alt={title} />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold leading-snug text-slate-950">
            {title}
          </h3>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="font-semibold text-slate-800">{rating}</span>
            <span className="text-xs tracking-[0.2em] text-amber-500">{ratingStars}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:items-center">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500 md:hidden">
          Price
        </span>
        <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          ${price}
        </span>
      </div>
      <div className="flex flex-wrap items-start gap-3 md:justify-center">
        <span className="w-full text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500 md:hidden">
          Quantity
        </span>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-1.5 py-1.5 shadow-inner">
          <button
            className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange/10 text-lg font-extrabold text-brand-orange-dark transition hover:-translate-y-0.5"
            onClick={() => dispatch(decreaseCartItemQuantity({ productId }))}
          >
            -
          </button>
          <span className="min-w-[28px] text-center font-bold text-slate-900">{quantity}</span>
          <button
            className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange/10 text-lg font-extrabold text-brand-orange-dark transition hover:-translate-y-0.5"
            onClick={() => dispatch(increaseCartItemQuantity({ productId }))}
          >
            +
          </button>
        </div>
        <button
          className="rounded-full bg-slate-900/5 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          onClick={() => {
            dispatch(removeCartItem({ productId }))
          }}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-1 md:items-end">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500 md:hidden">
          Total
        </span>
        <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          ${quantity * price}
        </span>
      </div>
    </div>
  )
}
