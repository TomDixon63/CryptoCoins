package io.tomdixon.depot.backend.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

	@Autowired
	private Environment env;

	@Override
	public void run(ApplicationArguments args) throws Exception {

		// TODO remove, called from service
		// String apikey = env.getProperty("alphavantage.api.key");
		// System.out.println("apiKey:" + apikey);
	}

}
