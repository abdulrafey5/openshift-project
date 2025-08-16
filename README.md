

## Confirm current user & project:

oc whoami
oc project abdulrafey5-dev

## Check your ability to create different object types (useful to know what sandbox allows):

oc auth can-i create namespaces
oc auth can-i create deployments -n abdulrafey5-dev
oc auth can-i create routes -n abdulrafey5-dev
oc auth can-i create secrets -n abdulrafey5-dev

## Create the mariadb secret locally (example):

oc -n abdulrafey5-dev create secret generic mariadb-secret --from-literal=password='ChangeMe123!'

## If you want GitHub Actions to deploy, create a base64-encoded kubeconfig and add as secret KUBECONFIG_DATA:

cat ~/.kube/config | base64 -w0
(paste result into GitHub secret KUBECONFIG_DATA)

Add Docker Hub secrets to GitHub (username & token).

Push the repo and watch GitHub Actions run. Check workflow logs for build/push/scan and final deploy step.
