export type CoinInfo = {
  Id: string;
  FullName: string;
  ImageUrl: string;
  Name: string;
};
export type USD = {
  PRICE: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  OPEN24HOUR: string;
};
export type Display = {
  USD: USD;
};
export type Coin = {
  CoinInfo: CoinInfo;
  DISPLAY: Display;
};
