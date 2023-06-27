# Kubernetes Setup

## Design

Mind this is focused on learning DevOps/Platform Engineering/GitOps+++.
Which means that the design is going to be skewed,
with the application itself there to just provide obstacles to overcome.

### Application

- Frontend - Web, React
- Backend - Web Server, Express
- Database - SQL, Postgress

### Administration

- 


## Steps

1. Install a container runtime. [Docker Desktop](), [Rancher]()
2. Install a local container orchestration platform. [Docker Desktop](), [Rancher](), [k3s]()
3. Install kubectl. [kubectl]()
4. Create a set of specification files, so you do not have to type everything in through the command line.
4. Create a cluster with your tool of choice.
```sh
k3d create cluster
```

## Resources

- [Container: Docker]()
  The primitives
- [Container Engine: ???]()
  Running the individual bits
- Container Orchestrator
  Connecting many bits together
  - [k3d]()
    For running cluster locally
  - [kubectl]()
    CLI tool for communicating with the clusters

- [Kubernetes Dashboard UI]()
  Overview and administration through a GUI
- [Comparison of local kubernetes tools](https://www.youtube.com/watch?v=_jTEB5nz7lE)

- TechWorld with Nana
  - [Web Application with a Database](https://www.youtube.com/watch?v=EQNO_kM96Mo)
    Reminder. Leave the persistance of information you do not want to lose to an experienced 3rd party.