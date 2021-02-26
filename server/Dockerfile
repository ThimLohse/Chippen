FROM adoptopenjdk/openjdk11:jdk-11.0.3_7-slim
COPY build/libs/*.jar micronaut-kotlin-template.jar
EXPOSE 8080
CMD java  -Dcom.sun.management.jmxremote -noverify ${JAVA_OPTS} -jar micronaut-kotlin-template.jar
