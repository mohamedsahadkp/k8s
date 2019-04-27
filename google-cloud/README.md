# Kubernetes
# Google Kubernetes Engine(GKE)

(1) Authenticate Google Cloud
gcloud auth login

(2) Set project
gcloud config set project [PROJECT_ID]

(3) Set region
gcloud config set compute/zone [COMPUTE_ZONE]
where [COMPUTE_ZONE] is the desired geographical compute zone, such as us-west1-a.

(4) Create cluster
gcloud container clusters create [CLUSTER_NAME]

(5) Authenticate local machine to GKE API Server (Kubernetes Cluster)
gcloud container clusters get-credentials [CLUSTER_NAME]

(6) Delete cluster
gcloud container clusters delete [CLUSTER_NAME]