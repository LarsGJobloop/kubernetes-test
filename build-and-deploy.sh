# Tag information
serviceName="k3d-test-homepage-service"
mode="dev"

# Generate a tag based on the date and exporting it as an environment variable
export IMAGE="$serviceName":"$mode"-"$(date +%s)"

# Build the frontend
echo "Building service: $IMAGE"
docker build -t "$IMAGE" ./apps/homepage

# k3d needs to import the container image
k3d image import "$IMAGE"

echo "Starting up the services inside the cluster"
# Read the spec file and use envsubst to replace any variables with env variables then apply
cat k3s-specification/homepage-service.yaml | envsubst | kubectl apply -f -

# Expose the port to the localhost
kubectl port-forward svc/homepage 8000:80