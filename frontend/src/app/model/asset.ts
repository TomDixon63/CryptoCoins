// Asset

export class Asset {
  public id: string;
  public rank: number;
  public symbol: string;
  public name: string;
  public supply: number;
  public maxSupply: number;
  public marketCapUsd: number;
  public volumeUsd24Hr: number;
  public priceUsd: number;
  public changePercent24Hr: number;
  public vwap24Hr: number;
  public pathToImage: string;

  constructor() {}

  /*
  {
    "id": "bitcoin",
    "rank": "1",
    "symbol": "BTC",
    "name": "Bitcoin",
    "supply": "17193925.0000000000000000",
    "maxSupply": "21000000.0000000000000000",
    "marketCapUsd": "119150835874.4699281625807300",
    "volumeUsd24Hr": "2927959461.1750323310959460",
    "priceUsd": "6929.8217756835584756",
    "changePercent24Hr": "-0.8101417214350335",
    "vwap24Hr": "7175.0663247679233209"
  }
  */
}
