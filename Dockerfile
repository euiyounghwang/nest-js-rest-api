

FROM --platform=linux/amd64 python:3.9.7 as build
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Copy Dependencies



FROM --platform=linux/amd64 python:3.9.7 as runtime


