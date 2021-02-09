//service class with various util functions
import { Asset } from './../../model/asset';
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() { }

  // unix epoch to date converter
  public dateConverter(UNIX_timestamp) {
    var date = new Date(UNIX_timestamp).toLocaleDateString("en-US");
    return date;
  }

  // round a number to 2 decimals
  public fixedDecimalConverter(number: any) {
    return (Math.round(number * 100) / 100).toFixed(2);
  }

  // map response to an asset
  public response2AssetMapper(response: any) {
    return this.mapElement2Asset(response.data);
  }

  // map response to asset[]
  public response2AssetsMapper(response: any) {
    let assets: Asset[] = [];
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        let element = response.data[key];
        assets.push(this.mapElement2Asset(element));
      }
    }
    return assets;
  }

  // map an (data) element to asset
  private mapElement2Asset(element: any) {
    let asset: Asset = new Asset();
    asset.id = element["id"];
    asset.rank = element["rank"];
    asset.name = element["name"];
    asset.symbol = element["symbol"];
    asset.changePercent24Hr = element["changePercent24Hr"];
    asset.marketCapUsd = element["marketCapUsd"];
    asset.maxSupply = element["maxSupply"];
    asset.priceUsd = element["priceUsd"];
    asset.supply = element["supply"];
    asset.volumeUsd24Hr = element["volumeUsd24Hr"];
    asset.vwap24Hr = element["vwap24Hr"];
    asset.pathToImage ="../../../assets/images/coins/"+  asset.symbol +".png"
    return asset;
  }

}
