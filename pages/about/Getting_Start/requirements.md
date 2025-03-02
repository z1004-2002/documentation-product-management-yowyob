# REQUIREMENTS

## Prerequisites
- **JDK 17+** (Requis pour Spring Boot)
- **Maven** (ou Gradle)
- **Docker** (Pour exécuter ScyllaDB)


## Installing Dependencies

Follow the steps below to install the necessary dependencies:

### 1. Java Development Kit (JDK)

ProductX requires Java 21 or higher. Install it using the following command:

```shell
sudo apt update && sudo apt install openjdk-17-jdk
```

Verify the installation:

```shell
java -version
```

### 2. Apache Maven

Maven is required to build and manage dependencies. Install it using:

```shell
sudo apt install maven
```

Verify the installation:

```shell
mvn -version
```

### 3. Docker & ScyllaDB

ProductX uses ScyllaDB as a database. You need to install Docker to run ScyllaDB.

#### Install Docker

```shell
sudo apt install docker.io
```

#### Run ScyllaDB Container

```shell
docker run --name scylla-container -p 9042:9042 -d scylladb/scylla:latest
```

### 4. Required Dependencies in `pom.xml`

ProductX is built using Spring Boot and requires the following dependencies:

- **Spring Boot Starter Web**
- **Spring Boot Starter WebSocket**
- **Spring Boot Starter Data Cassandra**
- **Spring Boot DevTools** (for development)
- **Spring Boot Starter Test** (for testing)
- **SpringDoc OpenAPI** (for API documentation)

To install all dependencies, navigate to the project root and run:

```shell
mvn clean install
```

After following these steps, your system should be ready to run the ProductX project.
