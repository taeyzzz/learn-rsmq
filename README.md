# How to install
```bash
yarn
```

# How to use docker redis
```bash
docker run --name redis-queue -p 6379:6379 -d redis
```

# How to run
1. Create Queue
```bash
node emailque.js
```
2. Run Send Data to queue
```bash
node mail.js
```
3. Run Watch worker
```bash
node emailworker.js
```
