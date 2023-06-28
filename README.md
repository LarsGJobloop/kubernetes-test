# Kubernetes Setup

## Content

- [Design](#design)
  - [Application](#application)
  - [Administration](#administration)
- [Steps](#steps)
- [Resources](#resources)
- [Lessons learned](#lessons-learned)

## Design

Mind this is focused on learning DevOps/Platform Engineering/GitOps+++.
Which means that the design is going to be skewed,
with the application itself there to just provide obstacles to overcome.

### Application

- Frontend - Web, React
- Backend - Web Server, Express
- Database - SQL, Postgress

### Administration

- Container - Docker
- Orchestrator - k3d
- 


## Steps

1. Install a container runtime. [Docker Desktop](), [Rancher]()
2. Install a local container orchestration platform. [Docker Desktop](), [Rancher](), [k3s]()
3. Install kubectl. [kubectl]()
4. Create a set of specification files, so you do not have to type everything in through the command line.
5. Create a cluster with your tool of choice.
```sh
k3d create cluster
```

## Resources

- [pnpm workspaces](https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e)<br>
  Basic tool for managing monorepositories
- [pnpm base setup](https://adamcoster.com/blog/pnpm-config)<br>
- [pnpm fetch, optimized containerization](https://pnpm.io/cli/fetch)<br>
  Nice to have, due to how pnpm symlinks packages from a *global* store into projects

- [Container: Docker]()<br>
  The primitives
- [Container Engine: ???]()<br>
  Running the individual bits
- Container Orchestrator<br>
  Connecting many bits together
  - [k3d]()<br>
    For running cluster locally
  - [kubectl]()<br>
    CLI tool for communicating with the clusters

- [Kubernetes Dashboard UI]()<br>
  Overview and administration through a GUI
- [Comparison of local kubernetes tools](https://www.youtube.com/watch?v=_jTEB5nz7lE)<br>

- TechWorld with Nana<br>
  - [Web Application with a Database](https://www.youtube.com/watch?v=EQNO_kM96Mo)<br>
    Reminder. Leave the persistance of information you do not want to lose to an experienced 3rd party.

## Lessons learned

### #1
- Lesson:
  Building Containers in a monorepo is not trivial
- Solution
  Do not bother to extract dependencies that are used when building into root workspace.
  Formatter (prettier) is fine, Linter (ESLint) might be
- Caveats
  Find some other way to controll dependency version differences in packages

### #2
- Lesson:
  Having tool split up configs into multiple files is not the best when they need to be included in the building of containers
- Solution
  Copy each required config into the container.
  Avoid further splitting up configs. Possibly look into (/create) tooling for combining configs.
- Thoughts
  Inheritance based configs are nice in monorepos. I do not see any way to combine the requirements of container specifications
  with that niceness outside of introducing yet another tool.