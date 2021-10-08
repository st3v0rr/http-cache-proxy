docker build -t http-cache-proxy:latest .
docker run --rm \
	--publish 8080:8080 \
	--name http-cache-proxy \
	http-cache-proxy:latest
