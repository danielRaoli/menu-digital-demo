const ProductCardSkeleton = () => {
  return (
    <div className="w-[300px] h-[400px] border-none bg-transparent text-white shadow-none pt-10">
      <div className="space-y-3 animate-pulse">
        <div className="w-full h-[200px] rounded bg-slate-800" />
        <div className="h-7 w-2/3 rounded bg-slate-800" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-slate-800" />
          <div className="h-4 w-5/6 rounded bg-slate-800" />
        </div>
        <div className="h-5 w-1/3 rounded bg-slate-800" />
        <div className="h-10 w-32 rounded bg-slate-800" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
