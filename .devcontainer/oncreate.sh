#!/usr/bin/env bash

set -euo pipefail
set -x

# Run from repo root
cat .devcontainer/bashrc_epilog.sh >> ~/.bashrc

# Env
cp .env.example .env

# Install nodejs
# curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - &&\
# sudo apt-get install -y nodejs
