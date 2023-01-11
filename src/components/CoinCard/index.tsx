import { ICoinInfo, IUSD } from "../../entities/coin";
interface ICoinCardProps {
  coinInfo: ICoinInfo;
  display: IUSD;
}

const CoinCard = ({ coinInfo, display }: ICoinCardProps) => {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            src={"https://www.cryptocompare.com" + coinInfo.ImageUrl}
            alt="icon"
            className="w-16 h-16"
          />
          {coinInfo.FullName}
        </th>
        <td className="px-6 py-4">{display.OPENDAY}</td>
        <td className="px-6 py-4">{display.OPEN24HOUR}</td>
        <td className="px-6 py-4">{display.LOWDAY}</td>
        <td className="px-6 py-4">{display.HIGHDAY}</td>
        <td className="px-6 py-4">{display.PRICE}</td>
      </tr>
    </tbody>
  );
};

export default CoinCard;
