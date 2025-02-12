export function generateRandomArray(length: number, min: number, max: number): number[] {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}