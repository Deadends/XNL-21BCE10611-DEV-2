# GoAuth: Advanced Multi-Cloud DevOps Ecosystem

![Architecture Overview]()

## Project Overview

GoAuth is a fully automated, multi-cloud, multi-region DevOps ecosystem that leverages Google OAuth for authentication across various frontend applications. This project demonstrates enterprise-grade deployment architecture with advanced security, monitoring, and chaos engineering capabilities. 

Feature used :

- NGINX - for proxy server (to keep the uptime stable)
- GoAuth 2.0 (SSO Feature)
- Grafana (Monitoring and to set alerts)
- Helm Charts - Prometheus
- Postgres SQL - DB
- Docker & Kubectl - pod management

Packages used:

- Goth - "https://github.com/markbates/goth"
- Gorilla Sessions - "https://github.com/gorilla/sessions"
- chi - "https://github.com/go-chi/chi"
- prometheus - "https://github.com/prometheus-community/helm-charts"
- pulumi - "https://github.com/pulumi/pulumi"

## Architecture


                                        ╭───────────────╮
                                        │  CloudFront   │
                                        │   (AWS CDN)   │
                                        ╰───────┬───────╯
                                                │
                                                ▼
         ╭───────────────╮             ╭───────────────╮             ╭───────────────╮
         │  Google Cloud │             │     NGINX     │             │      AWS      │
         │    (OAuth)    │◄────SSO────►│     Proxy     │◄────SSO────►│   Web Host    │
         ╰───────┬───────╯             ╰───────┬───────╯             ╰───────┬───────╯
                 │                             │                             │
                 │                             ▼                             │
                 │                     ╭───────────────╮                     │
                 └────────────────────►│  Kubernetes   │◄────────────────────┘
                                       │   Clusters    │
                                       │ (Multi-Region)│
                                       ╰───────┬───────╯
                                               │
                     ┌─────────────────────────┼─────────────────────────┐
                     │                         │                         │
                     ▼                         ▼                         ▼
          ╭───────────────╮           ╭───────────────╮           ╭───────────────╮
          │   Frontend    │           │    Backend    │           │ Observability │
          │   Services    │           │   Services    │           │     Stack     │
          ╰───────┬───────╯           ╰───────┬───────╯           ╰───────┬───────╯
                  │                           │                           │
                  ▼                           ▼                           ▼
          ╭───────────────╮           ╭───────────────╮           ╭───────────────╮
          │  React Apps   │           │  Golang  Chi  │           │   Prometheus  │
          │  Next Js SSR  │           │  TypeScript   │           │    Grafana    │
          ╰───────────────╯           ╰───────────────╯           ╰───────────────╯




### Multi-Cloud Infrastructure

- **Google Cloud Platform**: Hosts authentication services, OAuth implementation, and Kubernetes control plane
- **AWS**: Primary web hosting for frontend applications and scalable container infrastructure
- **Multi-Region Deployment**: locally deployed in three localhost ports from [localhost:3001, localhost:3002, localhost:3003]

### Frontend Technologies

- **React & Vue.js**: Primary UI framework for main application portal
- **Server-Side Rendering**: Implemented via Next.js for React components to improve SEO and performance
- **Micro-Frontend Architecture**: Allows independent deployment of UI components

### Backend Services

- **Go**: Core authentication services with high-performance request handling
- **TypeScript**: API gateway and business logic services
- **gRPC**: Internal service communication with Protocol Buffers
- **GraphQL API**: Unified API layer for frontend consumption

### DevOps & Infrastructure

- **Kubernetes**: Container orchestration across all environments
- **Helm Charts**: Standardized deployment of components

### Monitoring & Observability

- **Prometheus**: Metrics collection from all services
- **Grafana**: Visualization dashboards with alerting
- **Node Exporter**: System-level metrics collection 
- **Prometheus logs**: Log aggregation and analysis

### Security Features

- **Google Cloud OAuth**: Single Sign-On implementation across services
- **Vault**: Secrets management and dynamic credential rotation
- **OPA Gatekeeper**: Policy enforcement in Kubernetes
- **Network Policies**: Micro-segmentation of cluster traffic
- **Nginx**: Used as proxy server

### Database & Storage

- **PostgreSQL**: Primary relational database with Prometheus integration
- **Redis**: Session caching and rate limiting

### CI/CD Pipeline

- **GitHub Actions**: Main CI pipeline
- **Automated Testing**: Unit, integration, end-to-end, and chaos testing
- **Canary Deployments**: Progressive traffic shifting for new releases

### Chaos Engineering

- **Chaos Mesh**: Kubernetes-native chaos engineering toolkit
- **Litmus Chaos**: Additional chaos scenarios and experiments
- **Automated Resilience Testing**: Regular chaos experiments to validate self-healing

## Getting Started

### Prerequisites

- Docker and Docker Compose
- kubectl, helm, and minikube for local development
- AWS CLI and Google Cloud SDK
- Terraform >= 1.0.0

### Local Development

```bash
# Clone the repository
git clone [https://github.com/deadends/goauth.git](https://github.com/Deadends/XNL-21BCE10611-DEV-2
cd goauth

# Start local development environment
make dev

# Run frontend applications
cd client
npm install
npm start

# Run backend services
cd ../server
go run main.go


### Security Considerations
** Authentication is handled exclusively through Google OAuth
** Network segmentation implemented at cloud and Kubernetes levels
