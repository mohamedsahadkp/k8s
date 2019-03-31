# Kubernetes
# Elastic Kubernetes Service (EKS)

Elastic Kubernetes Service (EKS) is the Kubernetes solution managed by AWS.

We will walk through how to setup kubectl and eksctl on workstation, and from there we can use one line command to create an EKS cluster.

Setting up a workstation in AWS / local machine
From which we can create and interact with EKS cluster.

(1) Launch an EC2 instance as a workstation / local machine

Provisioning an EC2 instance in AWS as a workstation to manage all AWS resources including EKS.

Login to the AWS console and launch an Amazon Linux EC2, ssh login then configure AWS CLI, then we can start to install kubectl and eksctl.

(2) Install kubectl
$curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
$chmod +x ./kubectl
$sudo mv ./kubectl /usr/local/bin/kubectl

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
$ eksctl create cluster -f cluster.yml

OR

$ eksctl create cluster --name=exp-eks-cluster3 --nodes=2 --region=us-east-1 --vpc-public-subnets=subnet-00000,subnet-00000 --node-type=t2.micro
