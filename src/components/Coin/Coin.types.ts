export type ICoinInfo = {
  Id: string;
  FullName: string;
  ImageUrl: string;
  Name: string;
};
export type IUSD = {
  PRICE: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  OPEN24HOUR: string;
};
export type IDisplay = {
  USD: IUSD;
};
export type ICoin = {
  CoinInfo: ICoinInfo;
  DISPLAY: IDisplay;
};
