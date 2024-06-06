CONTAINER_NAME=api

# Build the Docker image
docker build -t progra4/api .


if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi


# Stop and remove any running containers using the previous image version
# docker ps -q --filter "ancestor=progra4/api" | xargs -r docker stop
# docker ps -a -q --filter "ancestor=progra4/api" | xargs -r docker rm

# Run a new container from the updated image
docker run -it --name $CONTAINER_NAME --hostname $CONTAINER_NAME -p 8000:8000 progra4/api
