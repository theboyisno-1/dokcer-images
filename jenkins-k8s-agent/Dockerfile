FROM alpine:3.14

# Arguments
ARG KUBECTL_VERSION=1.21.5
ARG HELM_VERSION=3.7.1
ARG ARCH=amd64

# Install utility tools
RUN apk add --update --no-cache jq vim gawk git openssh-client wget curl

# Install kubectl
RUN curl -sLO https://storage.googleapis.com/kubernetes-release/release/v${KUBECTL_VERSION}/bin/linux/${ARCH}/kubectl && \
    mv kubectl /usr/bin/kubectl && \
    chmod +x /usr/bin/kubectl

# Install helm
RUN apk add --update --no-cache curl ca-certificates bash git && \
    curl -sL https://get.helm.sh/helm-v${HELM_VERSION}-linux-${ARCH}.tar.gz  | tar -xvz && \
    mv linux-${ARCH}/helm /usr/bin/helm && \
    chmod +x /usr/bin/helm && \
    rm -rf linux-${ARCH}

# Install aws-cli
RUN apk add --update --no-cache python3 && \
    python3 -m ensurepip && \
    pip3 install --upgrade pip && \
    pip3 install awscli boto3 && \
    pip3 cache purge

WORKDIR /homec