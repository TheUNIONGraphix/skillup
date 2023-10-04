package com.uniongraphix.spharosproduct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/product")
public class GatewayTest {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to the Product Service.";
    }

}
