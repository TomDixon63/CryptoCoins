package io.tomdixon.cryptocoins.backend.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/mongodb")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MongoDbController {

}
