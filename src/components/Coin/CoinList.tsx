import { useQuery } from "@apollo/client";
import { FETCH_COIN_LIST } from "./coin.query";
import CoinCard from "./CoinCard";
import Loading from "../Loading";
import { type ICoin } from "./Coin.types";
import "./coin.css";

function CoinList() {
  const { loading, error, data } = useQuery(FETCH_COIN_LIST);
  if (error) return <div>failed to load!</div>;
  if (loading) {
    return (
      <div className="m-24">
        <Loading />
      </div>
    );
  }
  return (
    <div className="relative overflow-x-auto">
      <table className="table">
        <thead className="table__head">
          <tr>
            <th scope="col" className="table__name px-6 py-3">
              COIN NAME
            </th>
            <th scope="col" className="table__openday px-6 py-3">
              OPENDAY
            </th>
            <th scope="col" className="table__openhour px-6 py-3">
              OPEN24HOUR
            </th>
            <th scope="col" className="table__lowday px-6 py-3">
              LOWDAY
            </th>
            <th scope="col" className="table__highday px-6 py-3">
              HIGHDAY
            </th>
            <th scope="col" className="table__price px-6 py-3">
              PRICE
            </th>
          </tr>
        </thead>
        {data.coinsList.Data.map((data: ICoin) => (
          <CoinCard
            key={data.CoinInfo.Id}
            coinInfo={data.CoinInfo}
            display={data.DISPLAY}
          />
        ))}
      </table>
    </div>
  );
}

export default CoinList;