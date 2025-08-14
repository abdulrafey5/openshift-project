#!/usr/bin/env bash
set -e
oc project abdulrafey5-dev
oc apply -f infra/openshift/mariadb.yaml
oc apply -f infra/openshift/service-a-deploy.yaml
oc apply -f infra/openshift/service-b-deploy.yaml
oc apply -f infra/openshift/frontend-deploy.yaml
oc get pods -o wide
oc get routes
