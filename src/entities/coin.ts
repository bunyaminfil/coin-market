export interface ICoinInfo {
  __typename: string;
  Id: string;
  FullName: string;
  ImageUrl: string;
  Name: string;
}
export interface IUSD {
  __typename: string;
  PRICE: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  OPEN24HOUR: string;
}
export interface IDisplay {
  __typename: string;
  USD: IUSD;
}
export interface ICoin {
  __typename: string;
  CoinInfo: ICoinInfo;
  DISPLAY: IDisplay;
}
