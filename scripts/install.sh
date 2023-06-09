#!/bin/bash
source /home/ec2-user/.bash_profile
cd /home/ec2-user

DIR1="backend"
if [ ! -d "$DIR1" ]; then
  echo "${DIR1} does not exist. Creating.."
  mkdir backend
fi

DIR2="logs"
if [ ! -d "$DIR2" ]; then
  echo "${DIR2} does not exist. Creating.."
  mkdir logs
fi

DIR3="resources"
if [ ! -d "$DIR3" ]; then
  echo "${DIR3} does not exist. Creating.."
  mkdir resources
fi

node --version
if [ $? -ne 0 ]
then
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
   . ~/.nvm/nvm.sh
   nvm install 4.3.2
fi