#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

DIR="/home/ec2-user/shopping-app"
if [ -d "$DIR" ]; then 
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory" mkdir ${DIR}
fi
