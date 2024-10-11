#!/usr/bin/env bash

set -euo pipefail
set -x

# Run from repo root
cat .devcontainer/bashrc_epilog.sh >> ~/.bashrc

# Install git and X11 clipboard tools (required for the application)
apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

git config --global --add safe.directory /workspaces/react-example

pip install --no-cache git+https://$GITLAB_USR:$GITLAB_TKN@gitlab.com/codematos/pluscoder.git

git config --global user.email "ednar.echev@gmail.com"
git config --global user.name "Ednar"


# Install nodejs
# curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - &&\
# sudo apt-get install -y nodejs

# Install python dependencies
# apt-get update && apt-get install -y \
#     wget \
#     build-essential \
#     zlib1g-dev \
#     libncurses5-dev \
#     libgdbm-dev \
#     libnss3-dev \
#     libssl-dev \
#     libsqlite3-dev \
#     libreadline-dev \
#     libffi-dev \
#     curl \
#     libbz2-dev

# # Install python
# wget https://www.python.org/ftp/python/3.12.0/Python-3.12.0a7.tgz \
#     && tar xzf Python-3.12.0a7.tgz \
#     && cd Python-3.12.0a7 \
#     && ./configure --enable-optimizations \
#     && make altinstall \
#     && cd .. \
#     && rm -rf Python-3.12.0a7 Python-3.12.0a7.tgz

