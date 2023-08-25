#!/bin/bash

set -eu

#docker build --no-cache \

docker build \
  -f "$(dirname "$0")/Dockerfile" \
  -t fn-nestjs-search-api:es \
  --target build \
  "$(dirname "$0")/."


