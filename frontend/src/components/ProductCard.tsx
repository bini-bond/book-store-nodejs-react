function ProductCard({ data: { title, desc, discountRate, price, image } }: any) {
  return (
    <div className="group my-10  flex w-full max-w-xs flex-col justify-center overflow-hidden border border-gray-100 bg-white">
      <a className="relative  flex h-60 overflow-hidden" href="/">
        <img
          alt="product"
          height={'auto'}
          width={'100%'}
          className="peer absolute top-0 right-0 object-cover"
          src={image}
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a className="flex items-start" href="/">
          <h5 className="text-lg justify-self-start tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex justify-items-start">
          <span style={{ color: 'red' }} className="text-lg font-bold text-slate-900 flex">
            {discountRate}%
          </span>
          <span className="text-lg text-slate-900 ml-auto font-bold">{price} 원</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
