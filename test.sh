#!/bin/bash

for i in $(seq 1 50); do
	  curl -s -k "https://frontend-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com/service-a/api" | jq -r '.canary'
  done | sort | uniq -c

