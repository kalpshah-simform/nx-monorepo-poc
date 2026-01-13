# Nx Monorepo POC

## 1. Summary
This repository demonstrates a modern Nx monorepo setup for scalable React applications. It showcases best practices for code sharing, modular architecture, and streamlined developer workflows.

## 2. Live Links

### Production (Vercel - Main Branch)
- [Web App](https://web-app-kalpshah.vercel.app/)
- [Admin App](https://admin-app-kalpshah.vercel.app/)

### Staging (Netlify - Branch Deploys)
- [Web App Staging](https://remote-app-kalpshah.netlify.app) - `remote-app` branch
- [Admin App Staging](https://admin-app-kalpshah.netlify.app) - `admin-app` branch

## 3. Project Structure
```
.
├── apps/
│   ├── web-app/        # Main user-facing React app
│   └── admin-app/      # Admin dashboard React app
├── libs/
│   ├── shared/         # Shared UI components
│   ├── mylib/          # Example feature library
│   └── logger/         # Logging utilities
├── deploy/             # Deployment scripts & configs
├── config/             # Environment configs
├── tools/              # Custom Nx tools
├── .github/            # CI/CD workflows & instructions
└── ...                 # Nx, VSCode, and other configs
```

## 4. Features

### Why Nx Workspaces?

Nx provides powerful tools for managing monorepos and modular applications. It helps us organize our code in a better and more scalable way.

With Nx, we can:

- Split the application into independent and reusable modules  
- Maintain clear boundaries between features and shared code  
- Improve build and test speed using smart caching and affected commands  
- Scale the codebase without adding unnecessary complexity  

This approach is especially useful for large applications, multiple teams, or systems with different domains and microfrontend-style architecture.

---

### Modular Code Organization with Nx Workspaces  
*"A structure that actually makes sense"*

Earlier, our codebase was hard to manage. Files were mixed together, and changes in one area often affected other parts of the app. It was difficult to understand ownership, and small changes sometimes caused unexpected issues.

After moving to **Nx Workspaces**, everything became more organized.

Each application now lives in its own place:
- `apps/web-app` for the customer-facing website  
- `apps/admin-app` for the admin panel  
- Shared logic and UI components live inside `libs/`

This separation helps developers work independently without interfering with each other’s work. Adding a new application is also simple because it can reuse existing shared libraries instead of starting from scratch.

---

### Shared UI Library for Consistent Design  
*"Build once, use everywhere"*

Maintaining design consistency across multiple applications was a big challenge. Buttons, inputs, and layouts looked different in different apps, and updating them took a lot of effort.

To solve this, we created a **shared UI library**.

Now, common components like buttons, cards, inputs, and layouts are defined in one place and reused across all applications. When a design change is needed, we update it once, and it reflects everywhere.

Benefits of this approach:
- Consistent look and feel across all apps  
- Faster development without duplicate UI work  
- Easy maintenance and updates  
- New developers can quickly follow design standards  

---

### Separate Apps for Web and Admin  
*"Different users, different needs"*

Earlier, we tried to manage both customer and admin functionality in a single application. Over time, this made the app heavy and difficult to maintain.

We decided to split them into two separate applications:
- **Web App**: Focused on customers, performance, and user experience  
- **Admin App**: Focused on internal users, management tools, and data handling  

This separation allows each app to grow independently. It also reduces the risk of admin-related changes affecting the customer experience and improves overall performance.

---

### Fast Builds and Tests with Nx Caching  
*"Less waiting, more building"*

Build and test times used to be slow, especially as the project grew. Developers often had to wait even when they changed only a small part of the code.

Nx caching solved this problem.

Nx understands which parts of the code are affected by a change and runs tasks only for those parts. Unchanged projects use cached results, which makes builds and tests much faster.

```bash
# First build
npx nx build web-app

# Same build with no changes (uses cache)
npx nx build web-app
```

---

### Automated Deployment Scripts (Netlify-Ready)

Deployments earlier required multiple manual steps and were error-prone. Remembering environment variables, build steps, and deployment order often caused issues in production.

To solve this, we introduced **automated deployment scripts** that follow a consistent and reliable process.

Key benefits:
- Single command deployment for each application  
- Automatic environment setup for web and admin apps  
- Clear error messages if something goes wrong  
- Same deployment flow every time, regardless of who deploys  

```bash
# Deploy web application
npm run deploy:setup-web && npm run deploy:web

# Deploy admin application
npm run deploy:setup-admin && npm run deploy:admin
```
---

### Hybrid Deployment Strategy: Vercel + Netlify

We use a **dual-platform deployment strategy** to optimize for production reliability and staging flexibility.

**Deployment Architecture:**
- **Production (Vercel)**: `main` branch automatically deploys both web-app and admin-app to Vercel
- **Staging (Netlify)**: Feature branches deploy to Netlify for preview testing
  - `remote-app` branch → Web App staging
  - `admin-app` branch → Admin App staging

**Benefits:**
- ✅ **Zero-downtime deployments**: Vercel's atomic deployments ensure seamless updates
- ✅ **Instant rollbacks**: Deployment history available for quick recovery
- ✅ **Branch previews**: Test features on Netlify before merging to main
- ✅ **Parallel builds**: Both apps build and deploy simultaneously
- ✅ **Smart caching**: Nx + platform caches reduce build times
- ✅ **Cost-effective**: Free tiers support our scale

**Push Flow:**
```
main branch push
  ↓
Vercel auto-deploys (main triggers)
  ↓
Both apps live at production URLs

remote-app branch push
  ↓
Netlify deploys to staging
  ↓
Web app available at staging URL

admin-app branch push
  ↓
Netlify deploys to staging
  ↓
Admin app available at staging URL
```

---

### Integrated CI/CD Workflow

Our project uses an integrated CI/CD workflow to ensure code quality and fast delivery.

Whenever a developer pushes code, the pipeline automatically starts and handles all required checks without manual effort.

**What happens on every code push:**
1. **Immediate feedback** – Tests start running automatically  
2. **Parallel execution** – Linting, testing, and builds run at the same time  
3. **Smart caching** – Nx Cloud reuses cached results to speed up builds  
4. **Automatic deployment** – If all checks pass, the application is deployed  
5. **Audit history** – Every deployment and change can be tracked  

This workflow ensures that broken or untested code never reaches production. It also reduces deployment time from hours to minutes and gives developers confidence in every release.

---

### Custom Nx Plugins and Generators

Creating new components, features, or applications manually often requires repetitive setup work such as folder creation, imports, and test configuration.

To avoid this, we use **custom Nx plugins and generators** that automate these tasks and enforce a consistent structure across the codebase.

**Example commands:**
```bash
# Generate a new UI component
npx nx g @mycompany/ui:component UserProfile

# Generate a feature library
npx nx g @mycompany/feature:lib notifications

# Generate a new application
npx nx g @nx/react:app mobile-app
```
---

## 5. Setup & Configuration
```sh
# Install dependencies
npm install

# Run development server
npx nx serve web-app

# Build all apps and libs
npx nx run-many -t build --all

# Run tests
npx nx test web-app
npx nx test admin-app

# Lint code
npx nx lint web-app
npx nx lint admin-app

# Deploy (see deploy/ for scripts)
./deploy/scripts/deploy-web-app.sh
```

## 6. Alternatives Comparison
| Approach         | Pros                        | Cons                       |
|------------------|----------------------------|----------------------------|
| Nx Monorepo      | Fast builds, code sharing, scalable | Learning curve, Nx-specific |
| Yarn Workspaces  | Simple, good for packages   | Less tooling for apps      |
| Lerna            | Good for JS libs            | Not focused on apps        |
| Standalone Apps  | Simple for small projects   | Hard to share code         |

## 7. Concepts Covered
- Nx workspace and project graph
- React app and library generation
- Code sharing via libraries
- CI/CD with Nx Cloud and GitHub Actions
- Deployment automation (Netlify)
- Custom Nx generators

## 8. Limitation
- Only supports React (can be extended)
- Deployment scripts tailored for Netlify
- No backend integration in this POC
- Limited authentication/authorization features

## 9. Technical Requirement
- Node.js >= 18.x
- npm >= 9.x
- Nx CLI >= 21.x
- Netlify CLI (for deployment)
- VSCode (recommended for Nx Console extension)

## 10. Resources
- [Nx Documentation](https://nx.dev)
- [React Documentation](https://react.dev)
- [Nx Cloud](https://nx.app)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Nx Console Extension](https://nx.dev/getting-started/editor-setup)
- [Nx Monorepo Tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)

---

> _Carefully crafted with Nx, React, and ❤️. Explore, learn, and scale your projects!_