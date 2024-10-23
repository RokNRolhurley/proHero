# Create Docker network
 docker network create mongo-network

# start MongoDB
 docker run -d  -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME=admin  -e MONGO_INITDB_ROOT_PASSWORD=pass  --name mongo-dev  --net mongo-network  mongo

# start mongo express
 docker run -it --rm -d -p 8081:8081 --net mongo-network  --name mongo-express -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=pass -e ME_CONFIG_MONGODB_SERVER=mongo-dev mongo-express:latest