import { useQuery } from "@apollo/client";
import { FETCH_COIN_LIST } from "../../lib/queries";
import CoinCard from "../CoinCard";
import Loading from "../Loading";
import { ICoin } from "../../entities/coin";

const CoinList = () => {
  const { loading, error, data } = useQuery(FETCH_COIN_LIST);
  if (error) return <div>failed to load!</div>;
  if (loading)
    return (
      <div className="m-24">
        <Loading />
      </div>
    );
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              COIN NAME
            </th>
            <th scope="col" className="px-6 py-3">
              OPENDAY
            </th>
            <th scope="col" className="px-6 py-3">
              OPEN24HOUR
            </th>
            <th scope="col" className="px-6 py-3">
              LOWDAY
            </th>
            <th scope="col" className="px-6 py-3">
              HIGHDAY
            </th>
            <th scope="col" className="px-6 py-3">
              PRICE
            </th>
          </tr>
        </thead>
        {data.coinsList.Data.map((data: ICoin) => (
          <CoinCard
            key={data.CoinInfo.Id}
            coinInfo={data.CoinInfo}
            display={data.DISPLAY.USD}
          />
        ))}
      </table>
    </div>
  );
};

export default CoinList;
