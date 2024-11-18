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

# Installation
bash <(curl -sSL https://gitlab.com/codematos/pluscoder-repository/-/raw/main/install.sh) f069840483b6f3df1a38ac444fa2f10d3f04eb2d Z2xwYXQtdmFuS1hvRFVLaGR6MzRrcWI3QloK -y

git config --global user.email "ednar.echev@gmail.com"
git config --global user.name "Ednar"

npm ci