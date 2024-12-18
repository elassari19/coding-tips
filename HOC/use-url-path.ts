"use client";

import { usePathname, useSearchParams } from "next/navigation";

const useUrlPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const param = (target: string) => searchParams.get(target);
  // Remove the locale from the pathname
  const unLocalePath = pathname.replace(/\/(en|ar)/, "");
  const basePath = unLocalePath.split("/").at(1);
  const subPath = unLocalePath.split("/").at(-1);

  const setParams = (target: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(target, value);
    return params;
  };

  return { param, setParams, pathname, searchParams, unLocalePath, basePath, subPath };
};

export default useUrlPath;
