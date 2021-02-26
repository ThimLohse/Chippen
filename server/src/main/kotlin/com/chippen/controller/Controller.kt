package com.chippen.controller

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*

@Controller("/")
class UserPropertyController  {

    @Get
    @Produces(MediaType.APPLICATION_JSON)
    fun hello(): HttpResponse<String> {
        return HttpResponse.ok("Hello, world")
    }
}