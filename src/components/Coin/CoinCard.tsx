import { ICoinInfo, IDisplay } from "./Coin.types";
type CoinCardProps = {
  coinInfo: ICoinInfo;
  display: IDisplay;
};

function CoinCard(props: CoinCardProps) {
  const { coinInfo, display } = props;
  return (
    <tbody>
      <tr className="table__row">
        <th scope="row" className="table__fullname">
          <img
            src={`https://www.cryptocompare.com${coinInfo.ImageUrl}`}
            alt="icon"
            className="w-16 h-16"
          />
          {coinInfo.FullName}
        </th>
        <td className="table__display px-6 py-4">{display.USD.OPENDAY}</td>
        <td className="table__display px-6 py-4">{display.USD.OPEN24HOUR}</td>
        <td className="table__display px-6 py-4">{display.USD.LOWDAY}</td>
        <td className="table__display px-6 py-4">{display.USD.HIGHDAY}</td>
        <td className="table__display px-6 py-4">{display.USD.PRICE}</td>
      </tr>
    </tbody>
  );
}

export default CoinCard;
