#!/bin/bash
# For Ubuntu 18
#CONF_DIR=~/deps/nvim
#mkdir -p ~/deps

sudo add-apt-repository -y ppa:neovim-ppa/stable
sudo apt install -y software-properties-common
sudo apt update -y
sudo apt install -y neovim
#sudo apt install -y python-dev python-pip python3-dev python3-pip
#sudo apt autoremove -y

#git clone https://github.com/hiyali/nvim $CONF_DIR
#mkdir -p ~/.config
#ln -s $CONF_DIR ~/.config/nvim

#sudo update-alternatives --config editor
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update -y
sudo apt install -y gh

echo "added githubcli"

sudo echo $'deb http://archive.ubuntu.com/ubuntu/ maverick-updates main universe restricted 
deb-src http://archive.ubuntu.com/ubuntu/ maverick-updates main universe restricted 
deb http://security.ubuntu.com/ubuntu maverick-security main restricted 
deb-src http://security.ubuntu.com/ubuntu maverick-security main restricted 
deb http://security.ubuntu.com/ubuntu maverick-security universe 
deb-src http://security.ubuntu.com/ubuntu maverick-security universe 
deb http://security.ubuntu.com/ubuntu maverick-security multiverse 
deb-src http://security.ubuntu.com/ubuntu maverick-security multiverse' | sudo tee -a /etc/apt/sources.list > /dev/null

echo "added long list of sources"

sudo apt update && sudo apt install -y \
  neovim \
  gconf-service \
  libasound2 \
  libatk1.0-0 \
  libc6 \
  libcairo2 \
  libcups2 \
  libdbus-1-3 \
  libexpat1 \
  libfontconfig1 \
  libgcc1 \
  libgconf-2-4 \
  libgdk-pixbuf2.0-0 \
  libglib2.0-0 \
  libgtk-3-0 \
  libnspr4 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libstdc++6 \
  libx11-6 \
  libx11-xcb1 \
  libxcb1 \
  libxcomposite1 \
  libxcursor1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxi6 \
  libxrandr2 \
  libxrender1 \
  libxss1 \
  libxtst6 \
  ca-certificates \
  fonts-liberation \
  libappindicator1 \
  libnss3 \
  lsb-release \
  xdg-utils \
  wget \
  libatk-bridge2.0-0 \
  libgbm-dev

echo "installed shit!"

sudo rm -rf /var/lib/apt/lists/*

echo "finished!"
