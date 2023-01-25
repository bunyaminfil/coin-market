import type { CoinInfo, Display } from "./Coin.types";
import "./coin.css";
type CoinRowProps = {
  coinInfo: CoinInfo;
  display: Display;
};

function CoinRow(props: CoinRowProps) {
  const { coinInfo, display } = props;
  return (
    <tbody>
      <tr className="table__row">
        <th scope="row" className="table__fullname">
          <img
            src={`https://www.cryptocompare.com${coinInfo.ImageUrl}`}
            alt="icon"
            className="table__img w-16 h-16"
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

export default CoinRow;
