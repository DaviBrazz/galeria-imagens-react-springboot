FROM maven:3.8.5-openjdk-17 as builder
WORKDIR /app
COPY . .
RUN mvn dependency:resolve
RUN mvn clean package -DskipTests

FROM amazoncorretto:17
WORKDIR /app
COPY --from=builder /app/target/*.jar ./application.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=production", "application.jar"]
