
// service class for database access
// actual only browser local storage access
// some of the functions could be implemented in the ui but we will work with a database in future
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor() {}

  //get nasdaqList from local storage
  public getNasdaqList() {
    return JSON.parse(localStorage.getItem("nasdaqList"));
  }

  //set nasdaqList in local storage
  /*
  public setNadaqList(list: Stock[]) {
    localStorage.setItem("nasdaqList", JSON.stringify(list));
  }*/

  //get watchlist from local storage
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
