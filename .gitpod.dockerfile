FROM gitpod/workspace-full

RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg 

RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

RUN echo 'deb http://archive.ubuntu.com/ubuntu/ maverick-updates main universe restricted \
deb-src http://archive.ubuntu.com/ubuntu/ maverick-updates main universe restricted \
deb http://security.ubuntu.com/ubuntu maverick-security main restricted \
deb-src http://security.ubuntu.com/ubuntu maverick-security main restricted \
deb http://security.ubuntu.com/ubuntu maverick-security universe \
deb-src http://security.ubuntu.com/ubuntu maverick-security universe \
deb http://security.ubuntu.com/ubuntu maverick-security multiverse \
deb-src http://security.ubuntu.com/ubuntu maverick-security multiverse' | sudo tee -a /etc/apt/sources.list >/dev/null

RUN sudo apt update && sudo apt install -y neovim gh && sudo rm -rf /var/lib/apt/lists/*

RUN sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libatk-bridge2.0-0 libgbm-dev

