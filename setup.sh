#!/bin/bash

# Step 1: Apply the Kubernetes Dashboard configuration
kubectl apply -f /local/repository/k8s_dashboard/dashboard-insecure.yaml
kubectl apply -f /local/repository/k8s_dashboard/socat.yaml

# Step 2: Patch the Kubernetes dashboard service
kubectl patch service kubernetes-dashboard -n kubernetes-dashboard --type='json' --patch='[{"op":"replace","path":"/spec/ports/0/nodePort","value":30082}]'

# Step 3: Login to Docker Hub
echo "Logging into Docker Hub"
docker login

# Step 4: Pull the Docker image for the diary site
docker pull cb946801/diary-site:v1

# Step 5: Deploy the diary application
kubectl apply -f diary-deployment.yaml
kubectl apply -f diary-service.yaml

# Step 6: Get the service details
kubectl get svc --namespace=kubernetes-dashboard
kubectl get svc
