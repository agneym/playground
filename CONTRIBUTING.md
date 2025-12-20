# Contributing to Playground

Thank you for your interest in contributing to Playground!

## Getting Started

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm start
   ```

## Development

- `pnpm start` - Start the playground package in watch mode
- `pnpm start-example` - Start the example app
- `pnpm build` - Build the playground package
- `pnpm test` - Run tests

## Adding a Changeset

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

When you make changes that should be released, you need to add a changeset:

```bash
pnpm changeset
```

This will prompt you to:

1. **Select the packages** that have changed (use space to select)
2. **Choose the bump type** for each package:
   - `patch` - Bug fixes, documentation updates
   - `minor` - New features (backwards compatible)
   - `major` - Breaking changes
3. **Write a summary** of the changes (this appears in the changelog)

A markdown file will be created in the `.changeset` directory. Commit this file along with your changes.

### When to add a changeset

- Bug fixes
- New features
- Breaking changes
- Dependency updates that affect the public API

### When NOT to add a changeset

- Documentation-only changes
- Internal refactoring that doesn't affect the public API
- Test updates
- CI/tooling changes

## Pull Request Process

1. Create a branch for your changes
2. Make your changes and add tests if applicable
3. Run `pnpm changeset` if your changes should trigger a release
4. Commit your changes (including the changeset file)
5. Open a pull request

## Release Process

Releases are automated via GitHub Actions:

1. When PRs with changesets are merged to `master`, a "Version Packages" PR is automatically created
2. This PR updates package versions and changelogs based on the changesets
3. When the "Version Packages" PR is merged, the packages are automatically published to npm

## Code Style

This project uses Prettier for code formatting. Your code will be automatically formatted on commit via a pre-commit hook.
