package io.tomdixon.cryptocoins.backend.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import io.tomdixon.cryptocoins.backend.service.CoinCapService;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@RequestMapping("api/v1/coincap")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Slf4j
public class CoinCapController {

	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(CoinCapController.class);

	private final CoinCapService service;

	private final static String STRING_2_DELETE = "/api/v1/coincap/assets";

	@Autowired
	public CoinCapController(CoinCapService service) {

		this.service = service;
	}

	// 'api.coincap.io/v2/assets'
	@GetMapping("/assets")
	public Mono<JsonNode> getAssets() {

		log.info("-> getAssets()");

		return this.service.getAssets();
	}

	// example: 'api.coincap.io/v2/assets/bitcoin'
	@GetMapping("/assets/**")
	public Mono<JsonNode> getAsset(HttpServletRequest request) {

		String id = StringUtils.delete(request.getRequestURI(), STRING_2_DELETE);

		log.info("-> getAsset() -> id:" + id);

		return this.service.getAsset(id);
	}

	// example: 'api.coincap.io/v2/assets/bitcoin/history?interval=d1'
	@GetMapping("/assets/**/history")
	public Mono<JsonNode> getAssetHistory(HttpServletRequest request) {

		String id = StringUtils.delete(request.getRequestURI(), STRING_2_DELETE);

		log.info("-> getAssetHistory() -> id:" + id);

		return this.service.getAssetHistory(id);
	}

	// 'api.coincap.io/v2/assets/bitcoin/markets'
	@GetMapping("/assets/bitcoin/markets")
	public Mono<JsonNode> getBitcoinMarkets() {

		log.info("-> getBitcoinMarkets()");

		return this.service.getBitcoinMarkets();
	}

}
