# Loopback

## Prerequisites

Requires Docker to be started.

## Installation

Provide step-by-step instructions on how to get the development environment running.

### Prepare backend
```bash
git clone https://github.com/xk1234/tmbackend.git
cd tmbackend
npm install
```

### Start database and migrate
```bash
docker run --rm -P -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD="1234" --name pgres postgres
node bin/am2.js
node bin/automigrate.js
```

### Start backend
```bash
node server/server.js
```

Now go to http://localhost:3000/explorer

