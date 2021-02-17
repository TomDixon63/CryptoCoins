package io.tomdixon.cryptocoins.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.fasterxml.jackson.databind.JsonNode;

import reactor.core.publisher.Mono;

@Service
public class CoinCapService {

	private final static String BASE_URL = "https://api.coincap.io/v2";

	private final static String ASSETS_ENPOINT = "/assets";

	private final static String BITCOIN_MARKETS_ENDPOINT = "/assets/bitcoin/markets";

	private final static String INTERVAL = "?interval=d1";

	private final WebClient webClient;

	@Autowired
	public CoinCapService(WebClient.Builder webClientBuilder) {

		this.webClient = webClientBuilder.baseUrl(BASE_URL)
			.build();

	}

	/*
	 * get all assets (bitcoin, ether ...)
	 * 
	 * api.coincap.io/v2/assets
	 */
	public Mono<JsonNode> getAssets() {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT);

		return this.webClient.get()
			.uri(searchUri)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorResume(WebClientResponseException.class,
					ex -> ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex));

	}

	/*
	 * get asset by id
	 * 
	 * example: api.coincap.io/v2/assets/bitcoin
	 */
	public Mono<JsonNode> getAsset(String id) {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT)
			.concat(id);

		return this.webClient.get()
			.uri(searchUri)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorResume(WebClientResponseException.class,
					ex -> ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex));
	}

	/*
	 * get asset history by id
	 * 
	 * example: 'api.coincap.io/v2/assets/bitcoin/history?interval=d1
	 *
	 * @return history of asset prices in one day interval for the last 2 years
	 */
	public Mono<JsonNode> getAssetHistory(String id) {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT)
			.concat(id)
			.concat(INTERVAL);

		return this.webClient.get()
			.uri(searchUri)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorResume(WebClientResponseException.class,
					ex -> ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex));

	}

	/**
	 * get bitcoin markets
	 * 
	 * 'api.coincap.io/v2/assets/bitcoin/markets'
	 * 
	 * @ return market data bitcoin
	 */
	public Mono<JsonNode> getBitcoinMarkets() {

		String searchUri = BASE_URL.concat(BITCOIN_MARKETS_ENDPOINT);

		return this.webClient.get()
			.uri(searchUri)
			.accept(MediaType.APPLICATION_JSON)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorResume(WebClientResponseException.class,
					ex -> ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex));

	}

}
