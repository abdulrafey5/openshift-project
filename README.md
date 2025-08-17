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
   ```
   
2. Deploy database
```
oc apply -f mariadb.yaml
```

Deploy services
```
oc apply -f service-a-deploy.yaml
oc apply -f service-b-deploy.yaml
```

Deploy frontend
```
oc apply -f frontend-deploy.yaml
```

Deploy canary release for Service-A
```
oc apply -f service-a-canary.yaml
```

✅ Verification

Test direct services:
```
curl -k https://service-a-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api
curl -k https://service-b-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/api
```

Scale deployments:
```
oc scale deployment service-a --replicas=3
```
---

📸 Demo

```
Service-A Response
{
  "service": "service-a",
  "host": "service-a-5f978f85c9-kl4n6",
  "time": "2025-08-17T13:26:00.889Z",
  "canary": false
}
```

Service-B Response
```
{
  "service": "service-b",
  "host": "service-b-5f588cff75-jhkhr",
  "time": "2025-08-17T13:26:13.564084"
}
```

🎯 Key Features
✔️ Microservices deployed on OpenShift
✔️ Frontend ↔ Backend integration
✔️ Database (MariaDB) integration with backend services
✔️ Canary Deployment for gradual release rollout
✔️ Scalable using OpenShift deployment configs

