package io.tomdixon.depot.backend.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import io.tomdixon.depot.backend.service.CoinCapService;

@RequestMapping("api/v1/coincap")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {

	private final CoinCapService service;

	private final static String STRING_2_DELETE = "/api/v1/coincap/assets";

	@Autowired
	public Controller(CoinCapService service) {

		this.service = service;
	}

	@GetMapping("/assets")
	public JsonNode getAssets() {

		return this.service.getAssets();
	}

	// 'api.coincap.io/v2/assets/bitcoin'
	@GetMapping("/assets/**")
	public JsonNode getAsset(HttpServletRequest request) {

		String id = StringUtils.delete(request.getRequestURI(), STRING_2_DELETE);

		return this.service.getAsset(id);
	}

	// api.coincap.io/v2/assets/bitcoin/history?interval=d1'
	@GetMapping("/assets/**/history")
	public JsonNode getAssetHistory(HttpServletRequest request) {

		String id = StringUtils.delete(request.getRequestURI(), STRING_2_DELETE);

		return this.service.getAssetHistory(id);
	}

}
