"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = ({ placeholder }: Props) => {
  // get search params
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  // get current url pathname
  const pathname = usePathname();

  // useDebouncedCallback using for delay
  const handleSearch = useDebouncedCallback((e: any) => {

    // update search params immediately
    const params = new URLSearchParams(searchParams);

    params.set("page", '1');

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 1000);

  return (
    <div className="flex-1 flex justify-between items-center bg-white text-black">
      <Input
        placeholder={placeholder}
        onChange={handleSearch}
        // value={searchParams.get("q") || ""}
        className="flex-1"
      />
      <button type="submit">
      <SearchIcon className="text-primary mx-2 cursor-pointer" />
      </button>
    </div>
  );
};

export default Search;
