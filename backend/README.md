# AgriScope Backend API

Production-ready Node.js/Express backend for AgriScope agricultural market platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start development server
npm run dev

# Start production server
npm start
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── server.js           # Main entry point
│   ├── config/
│   │   ├── index.js        # App configuration
│   │   └── database.js     # PostgreSQL connection
│   └── routes/
│       ├── index.js        # Route aggregator
│       ├── prices.js       # /api/v1/prices
│       ├── demand.js       # /api/v1/demand
│       └── alerts.js       # /api/v1/alerts
├── ecosystem.config.js     # PM2 configuration
├── .env.example            # Environment template
└── package.json
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `HOST` | Bind address | `0.0.0.0` |
| `NODE_ENV` | Environment | `development` |
| `DATABASE_URL` | PostgreSQL connection string | Required in production |
| `CORS_ORIGINS` | Allowed origins (comma-separated) | `http://localhost:3000` |

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/api/v1/prices` | Get all mandi prices |
| `GET` | `/api/v1/prices/:id` | Get single price |
| `GET` | `/api/v1/demand` | Get demand summary |
| `POST` | `/api/v1/demand` | Submit buyer demand |
| `GET` | `/api/v1/alerts` | Get all alerts |
| `PATCH` | `/api/v1/alerts/:id/read` | Mark alert as read |

## 🚢 AWS EC2 Deployment

### 1. Connect to EC2
```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
```

### 2. Install Node.js
```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

### 3. Install PM2
```bash
sudo npm install -g pm2
```

### 4. Clone and Setup
```bash
git clone <your-repo> /home/ec2-user/agriscope
cd /home/ec2-user/agriscope/backend
npm install --production
cp .env.example .env
nano .env  # Configure environment variables
```

### 5. Start with PM2
```bash
# Start in cluster mode
pm2 start ecosystem.config.js --env production

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Run the command it outputs
```

### 6. PM2 Commands
```bash
pm2 status              # Check status
pm2 logs agriscope-api  # View logs
pm2 monit               # Real-time monitoring
pm2 restart agriscope-api
pm2 stop agriscope-api
```

### 7. Configure Security Group
Allow inbound traffic on port `5000` (or your configured port):
- Type: Custom TCP
- Port: 5000
- Source: 0.0.0.0/0 (or your frontend IP)

## 🔒 Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure `DATABASE_URL` with production database
- [ ] Set strong database password
- [ ] Configure `CORS_ORIGINS` with production frontend URL
- [ ] Enable HTTPS (use nginx as reverse proxy)
- [ ] Set up log rotation
- [ ] Configure monitoring (CloudWatch, etc.)
- [ ] Set up automated backups

## 🔄 Nginx Reverse Proxy (Recommended)

```nginx
server {
    listen 80;
    server_name api.agriscope.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Health Check

```bash
curl http://localhost:5000/health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2026-02-08T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```
