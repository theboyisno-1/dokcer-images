# Terraform on alpine
This is based on alpine3 and contains terraform + git for CI/CD purposes.

## Usage

### Use individually 
```BASH
$ docker pull theboyisno1/terraform:latest
$ docker run --name terrafrom --entrypoint true --rm -d theboyisno1/terraform:latest
$ docker exec -it terraform /bin/sh
```

### Use with Jenkins pipeline
```GROOVY
pipeline {
    environment {
        CI = true
    }
    agent { 
        docker "theboyisno1/terraform:latest"
    }
    stages { ... }
}

```

## Docker hub URL
You can visit docker hub repository page of this image -> [DockerHub Link](https://hub.docker.com/r/theboyisno1/terraform)

## GitHub Repository
Feel free to raise issues on [GitHub](https://github.com/theboyisno-1/dokcer-images)