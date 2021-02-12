package io.tomdixon.cryptocoins.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class CoinCapService {

	private final static String BASE_URL = "https://api.coincap.io/v2";

	private final static String ASSETS_ENPOINT = "/assets";

	private final static String INTERVAL = "?interval=d1";

	private final static String LIMIT_5 = "?limit=5";

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
	public JsonNode getAssets() {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT);

		return this.webClient.get()
			.uri(searchUri)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorReturn(getErrorJsonNode())
			.block();
	}

	/*
	 * get top 5 assets
	 * 
	 * api.coincap.io/v2/assets?limit=5
	 */
	public JsonNode getTop5Assets() {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT)
			.concat(LIMIT_5);

		return this.webClient.get()
			.uri(searchUri)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorReturn(getErrorJsonNode())
			.block();
	}

	/*
	 * get asset by id
	 * 
	 * example: api.coincap.io/v2/assets/bitcoin
	 */
	public JsonNode getAsset(String id) {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT)
			.concat(id);

		System.out.println(searchUri);

		return this.webClient.get()
			.uri(searchUri)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorReturn(getErrorJsonNode())
			.block();
	}

	/*
	 * get asset history by id
	 * 
	 * example: 'api.coincap.io/v2/assets/bitcoin/history?interval=d1
	 *
	 * @return history of asset prices in one day interval for the last 2 years
	 */
	public JsonNode getAssetHistory(String id) {

		String searchUri = BASE_URL.concat(ASSETS_ENPOINT)
			.concat(id)
			.concat(INTERVAL);

		System.out.println(searchUri);

		return this.webClient.get()
			.uri(searchUri)
			.retrieve()
			.bodyToMono(JsonNode.class)
			.onErrorReturn(getErrorJsonNode())
			.block();
	}

	// TODO evaluate better solution for ".onErrorReturn(getErrorJsonNode())"
	// that returns the original error
	private JsonNode getErrorJsonNode() {

		String json = "{ \"Error\" : \"An Error has occured\" } ";
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode fallback = null;

		try {
			fallback = objectMapper.readTree(json);

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return fallback;
	}

}
