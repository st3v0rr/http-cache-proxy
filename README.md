# http-cache-proxy
Simple express based http-cache-proxy

Docker hub: st3v0rr/http-cache-proxy
```bash
docker pull st3v0rr/http-cache-proxy
```

Example
```bash
docker run --rm \
	--publish 8080:8080 \
	-e "PROXYHOST=https://google.de" \
	--name http-cache-proxy \
	st3v0rr/http-cache-proxy:latest
```

## Configuration options

| Option              | Description
|-----------------    |-----------
| `PROXYHOST`         | *Required* Proxy target url
| `PORT`              | *Optional* Proxy port (default is 8080)
| `CACHETIME`         | *Optional* Proxy cachetime (default is 60 seconds)

