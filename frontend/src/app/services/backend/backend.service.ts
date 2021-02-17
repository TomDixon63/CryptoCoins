// service class for api access
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class BackendService {

  private baseUrl: string = 'http://localhost:8080/api/v1/coincap';
  private assets: string = '/assets';

  constructor(private http: HttpClient) { }

  // get all assets
  public getAllAssets() {
    return this.http.get(this.baseUrl.concat(this.assets));
  }

  // get asset by id
  public getAsset(id: string) {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/').concat(id));
  }

  // get asset history by id
  public getAssetHistory(id: string) {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/').concat(id).concat('/history'));
  }

  // get bitcoin market data
  public getBitcoinMarkets() {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/bitcoin/markets'));
  }


}
