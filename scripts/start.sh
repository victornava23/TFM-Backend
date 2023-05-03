#!/bin/bash
source /home/ec2-user/.bash_profile
ec2-metadata --availability-zone | sed 's/placement: //' | sed 's/.$//' > /home/ec2-user/resources/ec2_region.txt
ec2-metadata -i | cut -d ':' -f 2 | xargs > /home/ec2-user/resources/ec2_id.txt
export EC2_REGION=$(</home/ec2-user/resources/ec2_region.txt)
export EC2_ID=$(</home/ec2-user/resources/ec2_id.txt)
aws ec2 describe-instances --instance-ids "$EC2_ID" --query 'Reservations[].Instances[].Tags[?Key==`Environment`].Value' --output text --region $EC2_REGION > /home/ec2-user/resources/environment.txt
export ENVIRONMENT=$(</home/ec2-user/resources/environment.txt)
cd /home/ec2-user
chmod +x -R backend/
killall -9 node
cd /home/ec2-user/backend
if [ "$ENVIRONMENT" == "Dev" ];then
    echo "Starting environment Dev!"
    npm run dev > /home/ec2-user/logs/nodejsapp.log 2> /dev/null < /dev/null &
fi
if [ "$ENVIRONMENT" == "Prod" ];then
    echo "Starting environment Prod!"
    npm run dev > /home/ec2-user/logs/nodejsapp.log 2> /dev/null < /dev/null &
fi

