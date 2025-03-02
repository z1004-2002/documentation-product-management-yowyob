# Gestion des Ressource

## Description

ProductX is a robust and scalable Spring Boot application designed for the comprehensive management of organizational entities. This platform empowers users to manage key aspects of their Product, including resource management, service relationships, media and more.

## Features

- Create, read, update, and delete product, resources, service, and other entities.
- Asynchronous email notifications upon critical events.
- RESTful API endpoints for seamless client-server communication.

## Technologies Used

- **Spring Boot**: For building the RESTful application.
- **Spring Data Cassandra**: For database interactions with Scylla.
- **Lombok**: To reduce boilerplate code in data classes.
- **Java**: The primary programming language.
- **Maven**: For project and dependency management.

## Getting Started

### Prerequisites

- Java 17
- Apache Maven
- Cassandra database
- Docker (for running Scylla)

### Installation

1. **Clone the repository**:
```sh
git clone https://github.com/z1004-2002/resource-management-yowyob.git
cd resource-management-yowyob
```


 ###    Install dependencies:
```bash
   mvn install
```
### Configure application properties:
Update src/main/resources/application.yml with your database details:

```yaml
spring:
  data:
    cassandra:
      contact-points: localhost
      port: 9042
      keyspace-name: yowyobdb
      local-datacenter: datacenter1
```

### Start Cassandra using Docker:
```sh
docker run --name scylla -d -p 9042:9042 scylladb/scylla
```
Les tables sont définies dans :
```sh
src/main/resources/database_tables.cql
```
Pour exécuter le script :

```sh
docker exec -it scylla-container cqlsh
SOURCE 'src/main/resources/database_tables.cql';
```

###  Run the application:
```bash
  mvn spring-boot:run
```