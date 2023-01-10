interface IProps {
  coinInfo: any;
  price: string;
}

const CoinCard = ({ coinInfo, price }: IProps) => {
  return (
    <div className="bg-gray-700 rounded-md h-20 mx-96 my-16">
      <div className="w-full flex p-2 items-center">
        <div className="w-1/6">
          <img
            src={"https://www.cryptocompare.com" + coinInfo.ImageUrl}
            className="w-16 h-16"
          />
        </div>
        <div className="w-3/6">
          <h1 className="text-slate-50 text-5xl">{coinInfo.FullName}</h1>
        </div>
        <div className="w-2/6">
          <h1 className="text-slate-50 text-3xl">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
