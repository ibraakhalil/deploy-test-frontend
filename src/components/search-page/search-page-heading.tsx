interface SearchHeadingProps {
  count: number;
  term: string;
}

export function SearchPageHeading({ count, term }: SearchHeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-4 tablet:py-6">
      <h2 className="max-w-[80%] text-center text-body font-semibold tablet:text-heading-5">
        You Searched for <span className="text-primary">( {term} )</span>
      </h2>
      <p className="text-subtitle text-subtitle-color tablet:text-base">
        <span className="font-medium">{count}</span> Results Matched
      </p>
    </div>
  );
}
