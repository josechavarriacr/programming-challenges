FROM ubuntu:latest

## User
RUN apt-get update && apt-get install -y git wget nano make gcc
RUN useradd ubuntu && \
    usermod -aG sudo ubuntu && \
    mkdir -p /builds/core/.meteor /home/ubuntu && \
    chown -Rh ubuntu:ubuntu /builds/core/.meteor && \
    chown -Rh ubuntu:ubuntu /home/ubuntu
USER ubuntu