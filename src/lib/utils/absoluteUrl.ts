export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}
