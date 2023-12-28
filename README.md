# Loopback

## Prerequisites

Requires Docker to be started.

## Installation

Provide step-by-step instructions on how to get the development environment running.

```bash
git clone https://github.com/xk1234/tmbackend.git
cd tmbackend
npm install
docker run --rm -P -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD="1234" --name pgres postgres
node server/server.js
