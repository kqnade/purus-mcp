declare module "purus" {
  export function compile(source: string, options?: { header?: boolean }): string;
  export function check(source: string): unknown;
  export const version: string;
}
