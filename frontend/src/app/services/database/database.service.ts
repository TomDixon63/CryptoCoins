
// service class for database access
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor() {}


  //get watchlist from database
  public getWatchList() {
    return JSON.parse(localStorage.getItem("watchList"));
  }

  //set watchlist in local storage
  /*
  public setWatchList(list: Stock[]) {
    localStorage.setItem("watchList", JSON.stringify(list));
  }*/

  //add share to watchlist
  public addToWatchList() {
    /*
    let storeIsPresent: boolean = false;
    let watchList: Stock[] = this.getWatchList();
    //do not add a share again
    for (var i = watchList.length - 1; i >= 0; i--) {
      let tmpSymbol: string = watchList[i].data.symbol;
      if (tmpSymbol.includes(stock.data.symbol)) {
        storeIsPresent = true;
        break;
      }
    }
    if (!storeIsPresent) {
      watchList.push(stock);
      this.setWatchList(watchList);
    }
    */
  }

  //remove share from watchlist
  public removeFromWatchList(symbol: string) {
    /*
    let watchList: Stock[] = this.getWatchList();
    for (var i = watchList.length - 1; i >= 0; i--) {
      let tmpSymbol: string = watchList[i].data.symbol;
      if (tmpSymbol.includes(symbol)) {
        watchList.splice(i, 1);
        this.setWatchList(watchList);
        break;
      }
    }
  }
  */
}
}
