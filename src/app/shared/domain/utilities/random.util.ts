export class Random {
  public static number(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
