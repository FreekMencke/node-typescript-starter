#!/bin/bash

NAME=$(node -p "require('./package.json').name");
VERSION=$(node -p "require('./package.json').version");

read -p "Docker username: " DOCKER_USERNAME

docker build -t "$DOCKER_USERNAME/$NAME:$VERSION" -t "$DOCKER_USERNAME/$NAME:latest" .

docker login -u "$DOCKER_USERNAME"

docker push "$DOCKER_USERNAME/$NAME:$VERSION"
docker push "$DOCKER_USERNAME/$NAME:latest"
