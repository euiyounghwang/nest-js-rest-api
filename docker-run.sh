#!/bin/bash

set -eu

SCRIPTDIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"


docker run --rm --platform linux/amd64 -it -d \
  --name fn-nestjs-api --publish 9082:8081 --expose 8081 \
  --network bridge \
  -v "$SCRIPTDIR:/app/FN-BEES-Services/" \
  fn-nestjs-search-api:es