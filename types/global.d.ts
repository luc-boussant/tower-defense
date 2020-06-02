/** Global definitions for development **/
type UUID = string;

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
// @ts-ignore
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
