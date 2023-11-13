"use client";

/*
  this components allow you to filter or search on the server side by updating the searchParams of the URL based on the input value
*/
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  // get search params
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  // get current url pathname
  const pathname = usePathname();

  // useDebouncedCallback using for delay
  const handleSearch = useDebouncedCallback((e) => {

    // update search params immediately
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
