serviceName="k3d-test-homepage-service"
mode="dev"

# Generate a tag based on the date
export IMAGE="$serviceName":"$mode"-"$(date +%s)"
# Setting a temp environment variable that will be accessible in the call to kubectl


echo "Building service: $IMAGE"
docker build -t "$IMAGE" ./apps/homepage

k3d image import "$IMAGE"

echo "Starting up the services inside the cluster"
cat k3s-specification/homepage-service.yaml | envsubst | kubectl apply -f -

# Port forwarding is a simple solution for exposing the application to the localhost
kubectl port-forward svc/homepage 8000:80