# Jenkins k8s Agent

This [docker image](https://hub.docker.com/r/theboyisno1/jenkins-k8s-agent) can be used as build deploy agent with jenkin's [kubernetes](https://plugins.jenkins.io/kubernetes/) plugin. This image consists below tools: 
- Utility commands like [jq](https://stedolan.github.io/jq/), [vim](https://github.com/vim/vim), [gawk](https://www.gnu.org/software/gawk/manual/), [git](https://git-scm.com/),   [openssh-client](https://www.openssh.com/), [wget](https://www.gnu.org/software/wget/manual/wget.html), [curl](https://curl.se/).
- AWS useful tools like [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) and [boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)
- k8s deployment / management tools like [kubectl](https://kubernetes.io/docs/tasks/tools/) and [helm](https://helm.sh/)


## Usage

- Pull the image `docker pull theboyisno1/jenkins-k8s-agent:<TAG>`
- Jenkins pipeline whihch will use this image as deployment container may looklike below:
    ```BASH
    pipeline {
        agent {
            kubernetes {
                cloud '<MY_K8S_JENKINS_CLOUD_NAME>'
                defaultContainer 'build-agent'
                yaml '''
                    kind: Pod
                    spec:
                    containers:
                    - name: build-agent
                        image: theboyisno1/jenkins-k8s-agent:latest
                        imagePullPolicy: Always
                        command:
                        - sleep
                        args:
                        - 99d
                '''
            }
        }
        stages {    
            stage('Build') {
                steps {
                    container('build-agent') {
                        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: '<MY-AWS-CREDS-ID>', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                            sh '''#!/bin/bash
                            aws eks --region <CLUSTER_REGION> update-kubeconfig --name <MY_CLUSTER_NAME>
                            
                            #test commands
                            kubectl get po -n kube-system
                            helm version
                            kubectl version 
                            '''
                        }
                    }
                }
            }
        }
    }
    ```


> **_GitHub:_**  https://github.com/theboyisno-1/dokcer-images
