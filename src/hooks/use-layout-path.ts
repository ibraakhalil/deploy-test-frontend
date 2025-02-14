import { usePathname } from "@/navigation";
import { useParams } from "next/navigation";

export default function useLayoutPath() {
  const pathName = usePathname();
  const params = useParams();

  function mapParamsToPathname(pathname: string, param: Record<string, string | string[]>): string {
    return pathname
      .split("/")
      .map(segment => {
        const paramKey = Object.keys(param).find(key => decodeURIComponent(param[key] as string) === segment);
        return paramKey || segment;
      })
      .join("/");
  }

  return mapParamsToPathname(pathName, params);
}
