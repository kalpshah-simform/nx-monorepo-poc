# 🚀 Nx Monorepo Management Guide

## Quick Commands

### 🏗️ Building Applications
```bash
# Build all applications
npm run build:all

# Build specific applications
npm run build:web        # Build web app
npm run build:admin      # Build admin app
npm run build:libs       # Build all libraries
```

### 🖥️ Development Servers
```bash
# Serve applications locally
npm run serve:web        # Web app on port 4200
npm run serve:admin      # Admin app on port 4201
```

### 🚀 Deployment
```bash
# Deploy web app to Netlify
npm run deploy:web

# Deploy admin app to Netlify  
npm run deploy:admin

# Or manually setup configs
npm run deploy:setup-web    # Copy web app netlify config
npm run deploy:setup-admin  # Copy admin app netlify config
```

### 🧪 Testing & Linting
```bash
npm run test:all         # Run all tests
npm run lint:all         # Lint all projects
```

### 🧹 Maintenance
```bash
npm run clean            # Clean Nx cache
npm run graph            # View dependency graph
./tools/scripts/cleanup.sh --full  # Full cleanup with reinstall
```

## 📁 Project Structure

```
nx-monorepo-poc/
├── 🚀 apps/                    # Deployable applications
│   ├── web-app/               # Customer website (port 4200)
│   └── admin-app/             # Admin dashboard (port 4201)
│
├── 📚 libs/                    # Shared libraries
│   ├── shared/ui/             # UI component library  
│   ├── mylib/                 # Business logic
│   └── logger/                # Logging utilities
│
├── 📦 deploy/                  # Deployment configurations
│   ├── netlify/               # Netlify configs per app
│   └── scripts/               # Deployment scripts
│
├── 🛠️ tools/                   # Development tools
│   └── scripts/               # Utility scripts
│
└── 🔧 config/                  # Configuration files
    └── environments/          # Environment variables
```

## 🎯 Deployment Strategy

### Web App (Customer Site)
- **URL**: Your main website domain
- **Config**: `deploy/netlify/web-app.toml`
- **Command**: `npm run deploy:web`

### Admin App (Dashboard)
- **URL**: admin.yourdomain.com or subdirectory
- **Config**: `deploy/netlify/admin-app.toml`  
- **Command**: `npm run deploy:admin`

## 🔄 Workflow

1. **Development**: Work on features using `nx generate` and `nx serve`
2. **Testing**: Run `npm run test:all` before commits
3. **Building**: Use `npm run build:web` or `npm run build:admin`
4. **Deployment**: Run deployment commands or push to trigger CI/CD

## 📖 Additional Resources

- [Nx Documentation](https://nx.dev)
- [Netlify Documentation](https://docs.netlify.com)
- Project Architecture: `MONOREPO_STRUCTURE.md`
