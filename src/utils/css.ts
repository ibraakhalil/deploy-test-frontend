export function setCSSVariables(variables: { [key: `--${string}`]: string }, element?: HTMLElement): void {
  if (typeof window === "undefined") return;

  const target = element ?? document.documentElement;

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(variables)) {
    if (key.startsWith("--")) {
      target.style.setProperty(key, value);
    } else {
      // eslint-disable-next-line no-console
      console.warn(`Skipping invalid CSS variable key: ${key}`);
    }
  }
}

export function getCSSVariable(variable: `--${string}`, element?: HTMLElement): string | null {
  const target = element || document.documentElement;
  const computedStyle = getComputedStyle(target);
  return computedStyle.getPropertyValue(variable).trim() || null;
}
