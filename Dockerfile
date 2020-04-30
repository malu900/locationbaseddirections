FROM openjdk:11-jdk-alpine
EXPOSE 7070
VOLUME /tmp
ARG JAR_FILE=target/locatieapp.jar
ADD ${JAR_FILE} locatieapp.jar
COPY ${JAR_FILE} locatieapp.jar
ENTRYPOINT ["java","-jar","/locatieapp.jar"]