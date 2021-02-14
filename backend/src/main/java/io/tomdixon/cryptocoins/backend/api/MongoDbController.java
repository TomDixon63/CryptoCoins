package io.tomdixon.cryptocoins.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.tomdixon.cryptocoins.backend.service.MongoDbService;

@RequestMapping("api/v1/mongodb")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MongoDbController {

	private final MongoDbService service;

	@Autowired
	public MongoDbController(MongoDbService service) {

		super();
		this.service = service;
	}

}
