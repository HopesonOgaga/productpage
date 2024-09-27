export function SnackItem({ name, title, price, image }) {
    return (
      <div className="relative flex flex-col gap-2">
        {/* Snack image */}
        <img className="w-1/2 object-cover" src={image} alt={name} />
  
        {/* Add to Cart button */}
        <button className="absolute z-20 left-6 bottom-20 flex justify-center gap-4 items-center text-sm capitalize font-semibold rounded-full shadow-md bg-white border-2 border-solid border-red-100 w-40 h-12">
          <img src="/images/icon-add-to-cart.svg" alt="Add to cart" /> Add to cart
        </button>
  
        {/* Snack details */}
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-sm font-light text-rose-300">{name}</p>
          <p className="font-semibold capitalize text-lg">{title}</p>
          <p className="text-red-500 font-semibold capitalize">{price}</p>
        </div>
      </div>
    );
  }
  