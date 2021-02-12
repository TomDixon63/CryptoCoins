package io.tomdixon.cryptocoins.backend.configuration;

import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfiguration {

	// TODO remove class obsolete
	/**
	 * @Bean CorsWebFilter corsFilter() {
	 * 
	 *       CorsConfiguration config = new CorsConfiguration();
	 * 
	 *       config.setAllowCredentials(true);
	 *       config.addAllowedOrigin("http://localhost:4200");
	 *       config.addAllowedHeader("*"); config.addAllowedMethod("*");
	 * 
	 *       UrlBasedCorsConfigurationSource source = new
	 *       UrlBasedCorsConfigurationSource();
	 *       source.registerCorsConfiguration("/**", config);
	 * 
	 *       return new CorsWebFilter(source); }
	 */
}
