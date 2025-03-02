# ProductX Project Structure

This project follows a specific structure to organize its files and directories. Here is an overview of the RACINE project structure:


Here is a well-structured explanation of the most important directories in `product-management-yowyob/`, along with a warning section at the end.  

```
product-management-yowyob/

├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── README.md
├── arbre.py
├── diagramme.png
├── docker
│   ├── Dockerfile
│   ├── docker-compose.overide.yml
│   └── docker-compose.yml
├── docker-compose.yml
├── mvnw
├── mvnw.cmd
├── pom.xml
├── scripts
│   ├── build.sh
│   └── deploy.sh
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── yowyob
    │   │           └── resource_management
    │   │               ├── ResourceManagementApplication.java
    │   │               ├── api
    │   │               │   ├── controllers
    │   │               │   │   ├── AttributController.java
    │   │               │   │   ├── CategorieController.java
    │   │               │   │   ├── MediaController.java
    │   │               │   │   ├── ModelController.java
    │   │               │   │   ├── ProductBrandController.java
    │   │               │   │   ├── ProductPostController.java
    │   │               │   │   ├── ReactionController.java
    │   │               │   │   ├── RessourceController.java
    │   │               │   │   ├── ReviewsController.java
    │   │               │   │   ├── SalePointController.java
    │   │               │   │   ├── SalePriceController.java
    │   │               │   │   ├── ServiceController.java
    │   │               │   │   ├── TestController.java
    │   │               │   │   ├── UnitsController.java
    │   │               │   │   └── VariationController.java
    │   │               │   └── docs
    │   │               │       └── OpenAPIConfig.java
    │   │               ├── application
    │   │               │   ├── dto
    │   │               │   │   ├── AttributRequest.java
    │   │               │   │   ├── AttributResponse.java
    │   │               │   │   ├── AttributValueRequest.java
    │   │               │   │   ├── AttributValueResponse.java
    │   │               │   │   ├── CategorieRequest.java
    │   │               │   │   ├── CategorieResponse.java
    │   │               │   │   ├── MediaResponse.java
    │   │               │   │   ├── ProductBrandRequest.java
    │   │               │   │   ├── ProductCompositionRequest.java
    │   │               │   │   ├── ProductCompositionResponse.java
    │   │               │   │   ├── ProductPostRequest.java
    │   │               │   │   ├── ProductPostResponse.java
    │   │               │   │   ├── ProductResponse.java
    │   │               │   │   ├── ReactionRequest.java
    │   │               │   │   ├── ReactionResponse.java
    │   │               │   │   ├── RessourceRequest.java
    │   │               │   │   ├── RessourceResponse.java
    │   │               │   │   ├── ReviewsRequest.java
    │   │               │   │   ├── ReviewsResponse.java
    │   │               │   │   ├── SalePointRequest.java
    │   │               │   │   ├── SalePointResponse.java
    │   │               │   │   ├── SalePriceRequest.java
    │   │               │   │   ├── SalePriceResponse.java
    │   │               │   │   ├── ServiceLineRequest.java
    │   │               │   │   ├── ServiceLineResponse.java
    │   │               │   │   ├── ServiceRequest.java
    │   │               │   │   ├── ServiceResponse.java
    │   │               │   │   ├── UnitsRequest.java
    │   │               │   │   ├── UnitsResponse.java
    │   │               │   │   ├── VariationRequest.java
    │   │               │   │   └── VariationResponse.java
    │   │               │   ├── queries
    │   │               │   │   └── ComponentFactory.java
    │   │               │   └── services
    │   │               │       ├── AttributService.java
    │   │               │       ├── CategorieService.java
    │   │               │       ├── MediaService.java
    │   │               │       ├── ModelService.java
    │   │               │       ├── ProductBrandService.java
    │   │               │       ├── ProductCompositionService.java
    │   │               │       ├── ProductPostService.java
    │   │               │       ├── ReactionService.java
    │   │               │       ├── RessourceService.java
    │   │               │       ├── ReviewsService.java
    │   │               │       ├── SalePointService.java
    │   │               │       ├── SalePriceService.java
    │   │               │       ├── ServiceService.java
    │   │               │       ├── UnitsService.java
    │   │               │       └── VariationService.java
    │   │               ├── config
    │   │               │   ├── CassandraConfig.java
    │   │               │   ├── CassandraScriptConfig.java
    │   │               │   ├── FileStorageProperties.java
    │   │               │   └── security
    │   │               │       └── CorsConfig.java
    │   │               ├── domain
    │   │               │   └── model
    │   │               │       ├── Attribut.java
    │   │               │       ├── AttributValue.java
    │   │               │       ├── Categorie.java
    │   │               │       ├── Media.java
    │   │               │       ├── Model.java
    │   │               │       ├── Product.java
    │   │               │       ├── ProductBrand.java
    │   │               │       ├── ProductComposition.java
    │   │               │       ├── ProductPost.java
    │   │               │       ├── Reaction.java
    │   │               │       ├── Ressource.java
    │   │               │       ├── Reviews.java
    │   │               │       ├── SalePoint.java
    │   │               │       ├── SalePrice.java
    │   │               │       ├── ServiceEntity.java
    │   │               │       ├── ServiceLine.java
    │   │               │       ├── Units.java
    │   │               │       ├── Variation.java
    │   │               │       └── enumeration
    │   │               │           ├── Accessibility.java
    │   │               │           ├── DeliveryOption.java
    │   │               │           ├── EtatCatalogue.java
    │   │               │           ├── LocationType.java
    │   │               │           ├── PackagingType.java
    │   │               │           ├── ProductPackaging.java
    │   │               │           ├── ProductState.java
    │   │               │           ├── ProductType.java
    │   │               │           ├── ReactionType.java
    │   │               │           ├── SalePriceType.java
    │   │               │           └── StatusPost.java
    │   │               └── infrastructure
    │   │                   └── persistence
    │   │                       ├── entities
    │   │                       │   └── CatalogueComponent.java
    │   │                       └── repository
    │   │                           ├── AttributRepository.java
    │   │                           ├── AttributValueRepository.java
    │   │                           ├── CategorieRepository.java
    │   │                           ├── MediaRepository.java
    │   │                           ├── ModelRepository.java
    │   │                           ├── ProductBrandRepository.java
    │   │                           ├── ProductCompositionRepository.java
    │   │                           ├── ProductPostRepositoty.java
    │   │                           ├── ReactionRepository.java
    │   │                           ├── RessourceRepository.java
    │   │                           ├── ReviewsRepository.java
    │   │                           ├── SalePointRepository.java
    │   │                           ├── SalePriceRepository.java
    │   │                           ├── ServiceLineRepository.java
    │   │                           ├── ServiceRepository.java
    │   │                           ├── UnitsRepository.java
    │   │                           └── VariationRepository.java
    │   └── resources
    │       ├── application.yml
    │       ├── database_tables.cql
    │       ├── diagramme.png
    │       └── media
    └── test
        └── java
            └── com
                └── yowyob
                    └── resource_management
                        └── ResourceManagementApplicationTests.java
```

---

---

### **product-management-yowyob/**
Dossier racine du projet, structuré pour une application Spring Boot dédiée à la gestion des produits.

#### **docker-compose.yml**
Configuration Docker Compose pour démarrer les services nécessaires, comme la base de données.

#### **docs/**
Documentation essentielle du projet.  
- **API-SPEC.md** : Spécifications de l'API.  
- **DEPLOYMENT.md** : Instructions de déploiement.  
- **README.md** : Guide de démarrage et présentation du projet.  


#### **src/main/java/com/yowyob/product-management-yowyob/**
Le cœur de l'application Java, organisé par fonctionnalités.

- **ResourceManagementApplication.java** : Classe principale pour démarrer l’application.  
- **controller/** : Contrôleurs REST pour gérer les requêtes liées aux services et produits.  
  - **ServiceController.java** : Gestion des services.  
  - **RessourceController.java** : Gestion des ressources.  
- **dto/** : Objets de transfert de données (DTO) utilisés pour transmettre des informations entre les couches.  
- **model/** : Modèles représentant les entités de l’application (ProductPost, Service, etc.).  
- **repository/** : Interfaces pour interagir avec la base de données via Spring Data.  
- **service/** : Logique métier de l’application (gestion des produits, ressources, etc.).  

#### **src/main/resources/**
Ressources de l'application Spring Boot.  
- **application.properties** et **application.yml** : Fichiers de configuration de l’application.  

#### **src/test/java/gestionorganisation/**
Tests unitaires et d’intégration.  
- **ResourceManagementApplicationTests.java** : Classe de test pour l’application principale.