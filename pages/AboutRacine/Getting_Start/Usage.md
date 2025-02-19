# RACINE Project Structure

This project follows a specific structure to organize its files and directories. Here is an overview of the RACINE project structure:


Here is a well-structured explanation of the most important directories in `ProjetSyntheseIngR/`, along with a warning section at the end.  

```
ProjetSyntheseIngR/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── README.md
├── arbre.py
├── docker
│   ├── Dockerfile
│   └── docker-compose.overide.yml
├── docker-compose.yml
├── mvnw
├── mvnw.cmd
├── pom.xml
├── scripts
│   ├── build.sh
│   └── deploy.sh
└── src
    └── main
        ├── java
        │   └── inc
        │       └── yowyob
        │           └── gestion_organisation
        │               ├── GestionOrganisationApplication.java
        │               ├── api
        │               │   ├── controllers
        │               │   │   ├── AgencyController.java
        │               │   │   ├── BusinessActorController.java
        │               │   │   ├── BusinessDomainController.java
        │               │   │   ├── BusinessPartnerController.java
        │               │   │   ├── CertificationController.java
        │               │   │   ├── ContactController.java
        │               │   │   ├── CustomerController.java
        │               │   │   ├── EmployeeController.java
        │               │   │   ├── ImageController.java
        │               │   │   ├── OrganisationController.java
        │               │   │   ├── PracticalInformationController.java
        │               │   │   ├── ProposedActivityController.java
        │               │   │   ├── ProspectController.java
        │               │   │   ├── ProviderController.java
        │               │   │   └── SalesPersonController.java
        │               │   └── docs
        │               │       ├── CassandraConfig.java
        │               │       ├── CorsConfig.java
        │               │       └── OpenAPIConfig.java
        │               ├── application
        │               │   ├── commands
        │               │   │   ├── AddImageCommmand.java
        │               │   │   ├── ReserveCommand.java
        │               │   │   ├── RessourceCommand.java
        │               │   │   └── TransfertOwnerCommand.java
        │               │   ├── dto
        │               │   │   ├── AgenceRequest.java
        │               │   │   ├── AgenceResponse.java
        │               │   │   ├── BusinessActorRequest.java
        │               │   │   ├── BusinessActorResponse.java
        │               │   │   ├── BusinessDomainRequest.java
        │               │   │   ├── BusinessDomainResponse.java
        │               │   │   ├── BusinessPartnerRequest.java
        │               │   │   ├── BusinessPartnerResponse.java
        │               │   │   ├── CertificationRequest.java
        │               │   │   ├── CertificationResponse.java
        │               │   │   ├── ContactDTO.java
        │               │   │   ├── CustomerRequest.java
        │               │   │   ├── CustomerResponse.java
        │               │   │   ├── EmployeeRequest.java
        │               │   │   ├── EmployeeResponse.java
        │               │   │   ├── ImageDto.java
        │               │   │   ├── NotificationRequest.java
        │               │   │   ├── OrderDTO.java
        │               │   │   ├── OrganisationRequest.java
        │               │   │   ├── OrganisationResponse.java
        │               │   │   ├── PracticalInformationRequest.java
        │               │   │   ├── PracticalInformationResponse.java
        │               │   │   ├── ProposedActivityRequest.java
        │               │   │   ├── ProposedActivityResponse.java
        │               │   │   ├── ProspectRequest.java
        │               │   │   ├── ProspectResponse.java
        │               │   │   ├── ProviderRequest.java
        │               │   │   ├── ProviderResponse.java
        │               │   │   ├── SalesPersonRequest.java
        │               │   │   ├── SalesPersonResponse.java
        │               │   │   ├── payementDTO
        │               │   │   │   └── PaymentRequest.java
        │               │   │   └── serviceAndCatalogueDTO
        │               │   │       ├── ProductResourceRequest.java
        │               │   │       ├── ProductResourceResponse.java
        │               │   │       └── ProductServiceRequest.java
        │               │   └── services
        │               │       ├── AgencyService.java
        │               │       ├── BusinessActorService.java
        │               │       ├── BusinessDomainService.java
        │               │       ├── BusinessPartnerService.java
        │               │       ├── CertificationService.java
        │               │       ├── ContactService.java
        │               │       ├── CustomerService.java
        │               │       ├── EmployeeService.java
        │               │       ├── ImageService.java
        │               │       ├── OrganisationService.java
        │               │       ├── PracticalInformationService.java
        │               │       ├── ProposedActivityService.java
        │               │       ├── ProspectService.java
        │               │       ├── ProviderService.java
        │               │       ├── SalesPersonService.java
        │               │       └── servicesimpl
        │               │           ├── AgencyServiceImpl.java
        │               │           ├── BusinessActorServiceImpl.java
        │               │           ├── BusinessDomainServiceImpl.java
        │               │           ├── BusinessPartnerServiceImpl.java
        │               │           ├── CertificationServiceImpl.java
        │               │           ├── ContactServiceImpl.java
        │               │           ├── CustomerServiceImpl.java
        │               │           ├── EmployeeServiceImpl.java
        │               │           ├── ImageServiceImpl.java
        │               │           ├── OrganisationServiceImpl.java
        │               │           ├── PracticalInformationServiceImpl.java
        │               │           ├── ProposedActivityServiceImpl.java
        │               │           ├── ProspectServiceImpl.java
        │               │           ├── ProviderServiceImpl.java
        │               │           └── SalesPersonServiceImpl.java
        │               ├── configuration
        │               │   └── AppConfig.java
        │               ├── domain
        │               │   ├── EnumTypes
        │               │   │   ├── BAType.java
        │               │   │   ├── DomainType.java
        │               │   │   ├── PartnerType.java
        │               │   │   ├── Role.java
        │               │   │   └── orgType.java
        │               │   ├── model
        │               │   │   ├── Agency.java
        │               │   │   ├── BusinessActor.java
        │               │   │   ├── BusinessDomain.java
        │               │   │   ├── BusinessPartner.java
        │               │   │   ├── Certification.java
        │               │   │   ├── Contact.java
        │               │   │   ├── Customer.java
        │               │   │   ├── Employee.java
        │               │   │   ├── Image.java
        │               │   │   ├── Location.java
        │               │   │   ├── Organisation.java
        │               │   │   ├── PracticalInformation.java
        │               │   │   ├── ProposedActivity.java
        │               │   │   ├── Prospect.java
        │               │   │   ├── Provider.java
        │               │   │   └── SalesPerson.java
        │               │   ├── services
        │               │   │   ├── AgencyFactory.java
        │               │   │   ├── BusinessActorFactory.java
        │               │   │   ├── BusinessDomainFactory.java
        │               │   │   ├── BusinessPartnerFactory.java
        │               │   │   ├── CertificationFactory.java
        │               │   │   ├── ContactFactory.java
        │               │   │   ├── CustomerFactory.java
        │               │   │   ├── EmployeeFactory.java
        │               │   │   ├── OrganisationFactory.java
        │               │   │   ├── PracticalInformationFactory.java
        │               │   │   ├── ProposedActivityFactory.java
        │               │   │   ├── ProspectFactory.java
        │               │   │   ├── ProviderFactory.java
        │               │   │   └── SalesPersonFactory.java
        │               │   └── supportingModels
        │               │       ├── Interaction.java
        │               │       ├── ProductResource.java
        │               │       └── ProductService.java
        │               └── infrastructure
        │                   └── persistence
        │                       └── repository
        │                           ├── AgencyRepository.java
        │                           ├── BusinessActorRepository.java
        │                           ├── BusinessDomainRepository.java
        │                           ├── BusinessPartnerRepository.java
        │                           ├── CertificationRepository.java
        │                           ├── ContactRepository.java
        │                           ├── CustomerRepository.java
        │                           ├── EmployeeRepository.java
        │                           ├── ImageRepository.java
        │                           ├── InteractionRepository.java
        │                           ├── LocationRepository.java
        │                           ├── OrganisationRepository.java
        │                           ├── PracticalInformationRepository.java
        │                           ├── ProductResourceRepository.java
        │                           ├── ProductServiceRepository.java
        │                           ├── ProposedActivityRepository.java
        │                           ├── ProspectRepository.java
        │                           ├── ProviderRepository.java
        │                           └── SalesPersonRepository.java
        └── resources
            ├── application-dev.yml
            ├── application-prod.yml
            ├── application.yml
            ├── cqlshMigrationFile.cql
            └── image
```

---

---

### **gestion_organisation/**
Dossier racine du projet, structuré pour une application Spring Boot dédiée à la gestion des organisations.

#### **docker-compose.yml**
Configuration Docker Compose pour démarrer les services nécessaires, comme la base de données.

#### **docs/**
Documentation essentielle du projet.  
- **API-SPEC.md** : Spécifications de l'API.  
- **DEPLOYMENT.md** : Instructions de déploiement.  
- **README.md** : Guide de démarrage et présentation du projet.  

#### **sandbox/**
Outils pour les tests et le développement local.  
- **Postman/** : Collections Postman pour tester les endpoints.  

#### **src/main/java/gestionorganisation/**
Le cœur de l'application Java, organisé par fonctionnalités.

- **GestionOrganisationApplication.java** : Classe principale pour démarrer l’application.  
- **controller/** : Contrôleurs REST pour gérer les requêtes liées aux organisations et agences.  
  - **OrganisationController.java** : Gestion des organisations.  
  - **AgenceController.java** : Gestion des agences.  
- **dto/** : Objets de transfert de données (DTO) utilisés pour transmettre des informations entre les couches.  
- **model/** : Modèles représentant les entités de l’application (Organisation, Agence, etc.).  
- **repository/** : Interfaces pour interagir avec la base de données via Spring Data.  
- **service/** : Logique métier de l’application (gestion des organisations, agences, etc.).  

#### **src/main/resources/**
Ressources de l'application Spring Boot.  
- **application.properties** et **application.yml** : Fichiers de configuration de l’application.  

#### **src/test/java/gestionorganisation/**
Tests unitaires et d’intégration.  
- **GestionOrganisationApplicationTests.java** : Classe de test pour l’application principale.