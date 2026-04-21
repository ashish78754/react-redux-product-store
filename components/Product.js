import { useDispatch } from 'react-redux'
import { addCartItem } from '../store/slices/cartSlice'

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch()
  const ratingStars = '\u2605\u2605\u2605\u2605'

  return (
    <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,236,0.92))] p-4 shadow-[0_22px_48px_rgba(78,51,29,0.12)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-[0_28px_54px_rgba(78,51,29,0.16)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
      <div className="relative grid min-h-[240px] place-items-center rounded-[24px] bg-gradient-to-b from-white to-[#fff2e6] p-6">
        <img
          className="h-48 w-full object-contain drop-shadow-[0_18px_24px_rgba(78,51,29,0.12)] transition duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="relative grid gap-4">
        <div>
          <h3>
            <a
              className="font-display text-lg font-semibold leading-snug tracking-[-0.03em] text-slate-950 transition hover:text-brand-orange-dark"
              href="#"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
              }}
            >
              {title}
            </a>
          </h3>
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-2 text-sm font-extrabold text-slate-900">
            <span>{+rating}</span>
            <span className="text-xs tracking-[0.2em] text-amber-500">{ratingStars}</span>
          </p>
          <p className="font-display text-3xl font-bold tracking-[-0.05em] text-slate-950">
            ${price}
          </p>
        </div>
      </div>
      <div className="relative mt-auto flex flex-col gap-3 sm:flex-row">
        <button
          className="min-h-[48px] flex-1 rounded-2xl bg-gradient-to-r from-brand-orange to-[#ff8f57] px-4 py-3 font-bold text-brand-cream shadow-[0_18px_28px_rgba(242,105,45,0.24)] transition duration-200 hover:-translate-y-0.5"
          onClick={() => {
            dispatch(addCartItem({ productId }))
          }}
        >
          Add to Cart
        </button>
        <button className="min-h-[48px] flex-1 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 font-bold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:bg-white">
          Add to Wishlist
        </button>
      </div>
    </div>
  )
}
