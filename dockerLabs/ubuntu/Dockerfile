FROM ubuntu:latest

## User
RUN apt-get update && apt-get install --no-install-recommends --yes python3 git wget nano make gcc sudo ca-certificates
RUN useradd ubuntu && \
    usermod -aG sudo ubuntu && \
    mkdir -p /builds/core/.meteor /home/ubuntu && \
    chown -Rh ubuntu:ubuntu /builds/core/.meteor && \
    chown -Rh ubuntu:ubuntu /home/ubuntu 
RUN echo 'ubuntu:j4r' | chpasswd
USER ubuntu