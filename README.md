# Tracking API Backend (TypeScript)

## Endpoints

### Auth
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login (returns JWT)

### Tracking
- POST `/api/components/track` - Track component interaction
- GET `/api/components/stats` - Get usage stats
- GET `/api/components/export` - Export usage data (requires JWT)

### Health
- GET `/api/health` - Health check

## Run the project

```bash
npm install
npm run dev
```
