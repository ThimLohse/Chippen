package com.chippen

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("com.chippen")
                .mainClass(Application.javaClass)
                .start()
    }
}
