# Tag information
serviceName="database-api-service"
mode="dev"

# Generate a tag based on the date and exporting it as an environment variable
IMAGE="$serviceName":"$mode"-"$(date +%s)"

# Build the database-api
echo "Building service $IMAGE"
docker build -t $IMAGE --build-arg PORT=8989 .

docker run --rm -p 9000:8989 --name test-server $IMAGE
