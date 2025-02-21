# @osdk/api

## 2.0.0-beta.13

### Minor Changes

- 1488144: Renamed definition types to metadata
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- @osdk/shared.net@2.0.0-beta.4

## 2.0.0-beta.12

## 2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 1252d94: ESM Only
- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- dc25fb4: Rename MinimumActionDefinition to MinActionDef

### Patch Changes

- Updated dependencies [1252d94]
  - @osdk/shared.net@2.0.0-beta.3

## 2.0.0-beta.9

### Minor Changes

- b946e00: Emitted action definition is minimal size now

### Patch Changes

- Updated dependencies [01724ae]
  - @osdk/shared.net@2.0.0-beta.2

## 2.0.0-beta.8

### Patch Changes

- Updated dependencies [64818dc]
  - @osdk/shared.net@2.0.0-beta.1

## 2.0.0-beta.7

### Major Changes

- 9b0617d: Legacy types were removed

## 2.0.0-beta.6

### Major Changes

- 3affe49: Placeholder for breaking changes

### Patch Changes

- Updated dependencies [5d6d5ab]
  - @osdk/gateway@2.5.0-beta.0
  - @osdk/shared.net@1.13.0-beta.0

## 1.10.0-beta.1

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

## 1.10.0-beta.0

### Minor Changes

- 7c2db00: Updates QueryDefinition to include an optional generic argument

## 1.9.0

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret
- d8edf10: Fix primary key types
- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [bc89b62]
  - @osdk/shared.net@1.12.0
  - @osdk/gateway@2.4.0

## 1.9.0-beta.1

### Minor Changes

- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [bc89b62]
  - @osdk/shared.net@1.12.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 1.9.0-beta.0

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/shared.net@1.12.0-beta.0

## 1.8.0

### Minor Changes

- c9f3214: Interfaces are now mapped as views

### Patch Changes

- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/shared.net@1.11.0

## 1.7.0

### Patch Changes

- Updated dependencies [9906a41]
  - @osdk/shared.net@1.10.0

## 1.1.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1

## 1.1.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/shared.net@1.1.0
  - @osdk/gateway@1.1.0

## 1.0.2

### Patch Changes

- 25dd12ae: Restore files for legacy to .js instead of .cjs
- Updated dependencies [25dd12ae]
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2

## 1.0.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1

## 1.0.0

### Major Changes

- bfd4d9a: Stable 1.0 version

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.17

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10

## 0.0.16

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9

## 0.0.15

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8

## 0.0.14

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7

## 0.0.13

### Patch Changes

- 11ac931: Adding groupBy for Array types, using primary keys for actions and queries, and re-exporting more types
- 25de57b: Small fixes
- Updated dependencies [25de57b]
  - @osdk/gateway@0.0.6

## 0.0.12

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5

## 0.0.11

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4

## 0.0.10

### Patch Changes

- 9167059: Fixing GeoJson import from namespace

## 0.0.9

### Patch Changes

- 0860ae9: Adds type information for geopoint and geoshape

## 0.0.8

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/gateway@0.0.3

## 0.0.7

### Patch Changes

- a2b7874: Add in TimeSeries support and fixing issues during code-gen time with Queries

## 0.0.6

### Patch Changes

- 90cc3ae: Adding Object, Object Set, Attachments, and Actions implementations for OSDK V1.1
- Updated dependencies [90cc3ae]
  - @osdk/gateway@0.0.2

## 0.0.5

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies [d2e9964]
  - @osdk/gateway@0.0.1

## 0.0.4

### Patch Changes

- 8790640: Adds generated types, errors, and requests for public api endpoints

## 0.0.3

### Patch Changes

- 45fa1aa: Test changeset

## 0.0.2

### Patch Changes

- 9e3b32b: Initial implementation of api
