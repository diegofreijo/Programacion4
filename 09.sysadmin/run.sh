#!/bin/bash

# Print the container's IP address
IP_ADDRESS=$(hostname -I | awk '{print $1}')
echo "The container's IP address is: $IP_ADDRESS"

# Keep the container running
while true; do sleep 86400; done
