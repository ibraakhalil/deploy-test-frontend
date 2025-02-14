// Generally this function makes for breadcrum component to get label and pathname array

export function pathToLinkArray(path: string): Array<{ label: string; href: string }> {
  const segments = path.split("/").filter(segment => segment !== "");
  let currentPath = "";

  return segments.map(segment => {
    currentPath += `/${segment}`;
    return {
      label: segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      href: currentPath,
    };
  });
}
