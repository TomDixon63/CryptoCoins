import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  // get top 5 assets
  public getTop5Assets() {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/limit'));
  }

  // get asset by id
  public getAsset(id: string) {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/').concat(id));
  }

  // get asset history by id
  public getAssetHistory(id: string) {
    return this.http.get(this.baseUrl.concat(this.assets).concat('/').concat(id).concat('/history'));
  }


}
