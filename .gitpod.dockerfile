FROM gitpod/workspace-full

RUN sudo mkdir -p /scripts
COPY install.sh /scripts
WORKDIR /scripts
RUN chmod +x install.sh
RUN ./install.sh