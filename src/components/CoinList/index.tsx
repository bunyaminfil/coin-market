import { gql, useQuery } from "@apollo/client";
import CoinCard from "../CoinCard";
import Loading from "../Loading";
import { ICoin } from "../../entities/coin";

const FETCH_COIN_LIST = gql`
  query FetchCoinsList {
    coinsList
      @rest(type: "ListPayload", path: "/data/top/totalvolfull?tsym=USD") {
      Data @type(name: "DataPayload") {
        CoinInfo @type(name: "CoinInfoPayload") {
          Id
          Name
          FullName
          ImageUrl
        }
        DISPLAY @type(name: "DisplayPayload") {
          USD @type(name: "USDPayLoad") {
            PRICE
            OPENDAY
            HIGHDAY
            LOWDAY
            OPEN24HOUR
          }
        }
      }
    }
  }
`;
const CoinList = () => {
  const { loading, error, data } = useQuery(FETCH_COIN_LIST);
  return (
    <>
      {loading ? (
        <div className="m-24">
          <Loading />
        </div>
      ) : (
        data.coinsList.Data.map((data: ICoin) => (
          <CoinCard
            key={data.CoinInfo.Id}
            coinInfo={data.CoinInfo}
            price={data.DISPLAY.USD.PRICE}
          />
        ))
      )}
    </>
  );
};

export default CoinList;
