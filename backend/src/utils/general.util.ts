export class GeneralUtils {
    public static isEmpty(value: any): boolean {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      );
    }

    public static generateRandomFloat(min: number, max: number, decimalPlaces: number): number {
      const randomNumber = Math.random() * (max - min) + min;
      return parseFloat(randomNumber.toFixed(decimalPlaces));
    }

    public static generateRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  