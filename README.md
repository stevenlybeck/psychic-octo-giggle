# Reproduction Steps

1. Install dependencies:
```bash
pnpm install
```

2. Run the app with NODE_ENV=production which ensures UntrustedHost error will happen:
```bash
pnpm repro_dev
```

3. Visit http://localhost:3000
4. Note that it triggers logged-in flow (i.e. session object is truthy) in spite of errors in the auth config.
