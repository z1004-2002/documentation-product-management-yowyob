# Gestion Organisation

## Description

Gestion Organisation is a robust and scalable Spring Boot application designed for the comprehensive management of organizational entities. This platform empowers users to manage key aspects of their organizations, including agency management, customer relationships, business actors, and more.

## Features

- Create, read, update, and delete organizations, agencies, business actors, and other entities.
- Asynchronous email notifications upon critical events.
- RESTful API endpoints for seamless client-server communication.

## Technologies Used

- **Spring Boot**: For building the RESTful application.
- **Spring Data Cassandra**: For database interactions with Cassandra.
- **Lombok**: To reduce boilerplate code in data classes.
- **Java**: The primary programming language.
- **Maven**: For project and dependency management.

## Getting Started

### Prerequisites

- Java 21
- Apache Maven
- Cassandra database
- Docker (for running Cassandra)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/gestion-organisation.git
   cd gestion-organisation


 ###    Install dependencies:
    bash

   mvn install

### Configure application properties:
Update src/main/resources/application.yml with your database details:
yaml

spring:
  data:
    cassandra:
      contact-points: localhost
      port: 9042
      keyspace-name: yowyobdb
      local-datacenter: datacenter1

### Start Cassandra using Docker:
bash

docker run --name cassandra -p 9042:9042 -d cassandra

###  Run the application:
bash

  mvn spring-boot:run