export function getFirstLetters(name: string): string {
  let initials = "";
  let count = 0;
  for (let i = 0; i < name.length && count < 2; i++) {
    if (i === 0 || name[i - 1] === " ") {
      initials += name[i].toUpperCase();
      count++;
    }
  }
  return initials.length === 1 ? initials + name[1].toUpperCase() : initials;
}
