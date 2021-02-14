# CryptoCoins

Implements a reactive web application to access realtime cryptocurrencies data provided by [CoinCap](https://coincap.io/).
The frontend is build with Angular 10, access to the CoinCap API is implemented with Spring Boot and Spring Webflux.

Usecases:

- Dashboard: list of top 100 coins with actual data 

- Dashboard: coins watchlist, remove coins from watchlist (not implemented yet)

- Dashboard: exchange markets with coin/usd pairs (not implemented yet)

- Coin details: coin data, 2 years price chart, add coin to watchlist

- Depot: buy and sell orders, order history ( not implemented yet)



## Tech Stack

- Angular 10, TypeScript, SCSS
- Spring Boot with Netty (https://netty.io/)
- Spring REST, Spring WebFlux (https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html)
- Mongo DB 

#### Dashboard 

![dashboard](/frontend/screenshots/dashboard.png)

#### Coin details

![coin details](/frontend/screenshots/coin-details.png)




