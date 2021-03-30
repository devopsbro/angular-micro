Just install nginx and docker in the ubuntu server.
sudo apt-get update

#For installing essentials ubuntu packages
sudo apt-get install -y htop net-tools language-pack-en-base apt-transport-https build-essential curl git bmon apt-utils software-properties-common

#For installing nginx web server
sudo apt-get install -y nginx

#Install Docker and add the current user to docker group
sudo apt-get -y  update && curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
sudo useradd -aG docker $USER

#Install docker-compose and give file permission to execute
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose

Then change the nginx default file under path /etc/nginx/sites-enabled/default to this

START OF FILE ---------------

server {

        listen 80;
        listen [::]:80;
        server_name _;

location / {
        proxy_pass http://127.0.0.1:4200;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
        proxy_read_timeout 600;
        }
}


-----------   END OF FILE
