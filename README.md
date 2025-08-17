# 🚀 OpenShift Microservices Project  

This project demonstrates how to deploy a **microservices-based application** (Frontend + Backend services + Database) on **Red Hat OpenShift** with support for **canary deployments** and service routing.  

---

## 🏗️ Architecture  

- **Frontend** (Node.js app)  
  - Connects to Service-A and Service-B via internal service names.  
  - Routes are exposed via OpenShift.  

- **Service-A** (Node.js + Express)  
  - Connects to MariaDB.  
  - Canary deployment enabled (10% traffic).  

- **Service-B** (Node.js + Express)  
  - Connects to MariaDB.  

- **MariaDB**  
  - Backend database for services.  

---

## ⚙️ Deployment on OpenShift  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/<your-username>/openshift-project.git
   cd openshift-project/infra/openshift
Deploy database

bash
Copy
Edit
oc apply -f mariadb.yaml
Deploy services

bash
Copy
Edit
oc apply -f service-a-deploy.yaml
oc apply -f service-b-deploy.yaml
Deploy frontend

bash
Copy
Edit
oc apply -f frontend-deploy.yaml
Deploy canary release for Service-A

bash
Copy
Edit
oc apply -f service-a-canary.yaml
🌐 Routes
Frontend:
👉 https://frontend-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com

Service-A (direct):
👉 https://service-a-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api

Service-B (direct):
👉 https://service-b-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api

Frontend-integrated paths:

/service-a → Service-A (90%) + Service-A Canary (10%)

/service-b → Service-B

✅ Verification
Test direct services:

bash
Copy
Edit
curl -k https://service-a-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api
curl -k https://service-b-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api
Scale deployments:

bash
Copy
Edit
oc scale deployment service-a --replicas=3
Check pods:

bash
Copy
Edit
oc get pods
📸 Demo
Service-A Response

json
Copy
Edit
{
  "service": "service-a",
  "host": "service-a-5f978f85c9-kl4n6",
  "time": "2025-08-17T13:26:00.889Z",
  "canary": false
}
Service-B Response

json
Copy
Edit
{
  "service": "service-b",
  "host": "service-b-5f588cff75-jhkhr",
  "time": "2025-08-17T13:26:13.564084"
}
🎯 Key Features
✔️ Microservices deployed on OpenShift
✔️ Frontend ↔ Backend integration
✔️ Database (MariaDB) integration with backend services
✔️ Canary Deployment for gradual release rollout
✔️ Scalable using OpenShift deployment configs
