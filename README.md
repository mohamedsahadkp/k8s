# Kubernetes

Kubernetes is a container orchestration system from Google and has emerged as the platform of choice for deploying cloud-native applications.

Elastic Kubernetes Service (EKS) is the Kubernetes solution managed by AWS.

In this short blog, we will walk through how to setup kubectl and eksctl on workstation, and from there we can use one line command to create an EKS cluster.

Setting up a workstation in AWS
From which we can create and interact with EKS cluster.

(1) Launch an EC2 instance as a workstation

Provisioning an EC2 instance in AWS as a workstation to manage all AWS resources including EKS.

Login to the AWS console and launch an Amazon Linux EC2, ssh login then configure AWS CLI, then we can start to install kubectl and eksctl.

(2) Install kubectl

$curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
$chmod +x ./kubectl
$sudo mv ./kubectl /usr/local/bin/kubectl
Verify that kubectl is installed correctly.

$ kubectl version
Client Version: version.Info{Major:”1", Minor:”13", GitVersion:”v1.13.1", GitCommit:”eec55b9ba98609a46fee712359c7b5b365bdd920", GitTreeState:”clean”, BuildDate:”2018–12–13T10:39:04Z”, GoVersion:”go1.11.2", Compiler:”gc”, Platform:”linux/amd64"}
(3) Download aws-iam-authenticator

$ curl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.11.5/2018-12-06/bin/linux/amd64/aws-iam-authenticator
$ chmod +x ./aws-iam-authenticator
$ mkdir bin
$ cp ./aws-iam-authenticator $HOME/bin/aws-iam-authenticator && export PATH=$HOME/bin:$PATH
(4) Install eksctl

$ curl --silent --location "https://github.com/weaveworks/eksctl/releases/download/latest_release/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
$ sudo mv /tmp/eksctl /usr/local/bin
The workstation is ready after above steps.

Creating an EKS cluster
We use eksctl to create and EKS cluster using one line command.

More options about using eksctl refer Here.

$ eksctl create cluster --name=demo-eks-cluster --nodes=2 --region=us-west-2
This creates an EKS control plane and two worker nodes within about 10 minutes.

Issuing a command to verify the cluster readiness.

