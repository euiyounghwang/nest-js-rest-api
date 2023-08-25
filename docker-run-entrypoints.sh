#!/bin/bash
set -ex

# source /app/conda/bin/activate fn_bees_services
# cd /app/FN-BEES-Services
# exec gunicorn -w 2 -b 0.0.0.0:8081 basic.wsgi


SCRIPTDIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTDIR
npm run start:dev