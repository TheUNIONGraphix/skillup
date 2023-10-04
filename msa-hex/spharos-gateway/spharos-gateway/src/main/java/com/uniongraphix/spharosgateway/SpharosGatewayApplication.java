package com.uniongraphix.spharosgateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class SpharosGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpharosGatewayApplication.class, args);
	}

}
