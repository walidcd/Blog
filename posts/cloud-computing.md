---
created: 2023-11-19T13:20:28 (UTC +01:00)
tags: []
source: https://www.atlassian.com/fr/microservices/cloud-computing
author: Atlassian
title: "Cloud Computing"
subtitle: "An overview of the cloud"
date: "2023-11-19"
---

# What is cloud computing? An overview of the cloud

> ## Excerpt
>
> Cloud computing is an internet-based model of data storage and management. In this article we explain how it works and why it's important.

---

# What is cloud computing? An overview of the cloud

A guide to cloud computing and how it benefits the modern enterprise

---

Cloud computing is the delivery of computing resources over the internet. It offers cost savings, scalability, high performance, economies of scale, and more. For many companies, a cloud migration is directly related to data and IT modernization.

When the phrase “the cloud” first began popping up in the early 2000s, it had an esoteric ring. The idea of accessing computing resources from somewhere other than an on-premise IT infrastructure (the sky?) sounded like science fiction. The reality was much more profound and forever changed technology and how we conduct business.

## What is cloud computing?

---

Cloud computing is the delivery of computing resources — including storage, processing power, databases, networking, analytics, artificial intelligence, and software applications — over the internet (the cloud). By outsourcing these resources, companies can access the computational assets they need, when they need them, without needing to purchase and maintain a physical, on-premise IT infrastructure. This provides flexible resources, faster innovation, and economies of scale. For many companies, a cloud migration is directly related to data and IT modernization.

## Characteristics of cloud computing

---

Before cloud computing, organizations purchased and maintained an on-premise IT infrastructure. Though cost-savings drove much of the initial shift to the cloud, many organizations find that public, private, or a hybrid cloud infrastructure offers a host of benefits.

For [agile](https://www.atlassian.com/agile) and [DevOps](https://www.atlassian.com/devops/what-is-devops) teams, cloud computing provides the ability to simplify and accelerate the development process.

The following is a list of characteristics that define cloud computing.

### On-demand self service

Cloud computing providers offer APIs that users access to requisition new resources or scale existing resources whenever needed. Teams can automate their infrastructure provisioning in a simple way with [infrastructure as code](https://www.atlassian.com/microservices/cloud-computing/infrastructure-as-code) tools from the likes of Terraform and Ansible.

### Broad network access

Physical hardware location is a significant concern when delivering the optimal end-user experience. Cloud computing provides a huge boon by offering globally-distributed physical hardware, which allows organizations to strategically provision location-targeted hardware.

### Resource pooling

Computing resources in a cloud infrastructure platform are dynamically divided and allocated on demand. Since a cloud host’s physical machines are dynamically provisioned and shared between multiple tenants, cloud hardware is thoroughly optimized for maximum usage.

### Rapid elasticity

Cloud infrastructures can grow and shrink dynamically, allowing users to request that their computational resources auto-scale with traffic demands. Elasticity can happen on a per-machine basis, where an allocation of resources grows to maximize the available machine resources, or multi-machine basis, in which an application automatically scales to multi-networked machines.

### Measured service

Cloud infrastructure providers give detailed usage metrics that are used to communicate usage costs. For example, [Amazon Web Services (AWS)](https://www.atlassian.com/partnerships/aws) provides usage for each service category in hourly or daily line items. Cloud service providers generally take a utility style pay-as-you-go billing model that is measured and delivered, so customers are charged for the exact amount of computing resources used.

## Types of cloud deployments

---

There are three primary types of cloud deployments. Each has unique benefits and organizations often benefit from using more than one.

![Diagram of cloud deployments](https://wac-cdn.atlassian.com/dam/jcr:0f791cd5-c80c-4641-b10c-09c9c9b9a8b7/Cloud%20computing.png?cdnVersion=1324)

### Public cloud

Public clouds deliver computing resources -- servers, storage, applications, etc. -- over the internet from a cloud service provider, such as AWS and Microsoft Azure. Cloud providers own and operate all hardware, software, and other supporting infrastructure.

### Private cloud

A private cloud is computing resources dedicated exclusively to an organization. It can be physically located at an organization’s on-site data center, or hosted by a cloud provider. A  private cloud delivers a higher level of security and privacy than  public clouds by offering dedicated resources to companies.

Private cloud customers get the primary benefits of a public cloud, including self-service, scalability, and elasticity, but with the added benefit of additional control and customization. Plus, private clouds can have a higher level of security and privacy because they are housed on private networks not accessible to public traffic.

### Hybrid cloud

Hybrid clouds are a combination of private and public clouds (for example, [IBM Hybrid Cloud](https://www.ibm.com/cloud/hybrid), powered by Red Hat), connected together with technology that enables data and application to work together. Sensitive services and applications can be kept in the secure private cloud while publicly-accessible web servers and customer-facing endpoints can live in the public cloud. Most popular third-party cloud providers offer a hybrid cloud model, allowing users to combine private and public clouds to satisfy their needs. This allows businesses greater flexibility to deploy the specific infrastructure requirements of their application.

## Cloud computing services

---

![IaaS, PaaS, SaaS Diagram](https://wac-cdn.atlassian.com/dam/jcr:24991a7a-efa0-4ebc-8c2f-65d13741f535/paas-diagram.png?cdnVersion=1324)

The dynamic properties of cloud computing sets the foundation for novel higher-level services. These services can help not only complement, but often provide necessary services for agile and DevOps teams.

### Infrastructure as a service

[Infrastructure as a service (IaaS)](https://www.atlassian.com/microservices/cloud-computing/infrastructure-as-a-service) is a foundational cloud service layer that allows organizations to rent IT infrastructure -- servers, storage, networks, operating systems -- from a cloud provider. IaaS lets users reserve and provision the resources they need out of raw physical server warehouses. In addition, IaaS lets users reserve pre-configured machines for specialized tasks like load balancers, databases, email servers, distributed queues.

DevOps teams can use IaaS as an underlying platform from which to build a [DevOps toolchain](https://www.atlassian.com/devops/devops-tools/choose-devops-tools), which can include the use of various third-party tools.

### Platform as a service

[Platform as a service (PaaS)](https://www.atlassian.com/microservices/cloud-computing/platform-as-a-service) is a cloud infrastructure built on IaaS that provides resources to build user-level tools and applications. It provides the underlying infrastructure including compute, network, and storage resources, as well as development tools, database management systems, and middleware.

PaaS leverages IaaS to automatically allocate the resources needed to power a language-based tech stack. Popular language tech stacks are Ruby On Rails, Java Spring MVC, MEAN, and JAM stacks. PaaS customers can then simply upload an artifact of their application code that is automatically deployed to the infrastructure of the PaaS. This is a novel and powerful workflow that allows teams to focus completely on their specific business application code and not worry about hosting and infrastructure concerns. The PaaS automatically handles scaling and monitoring of the infrastructure to grow or shrink resources with observed traffic loads.

### Software as a service

Software as a service (SaaS) delivers software applications over the internet, on-demand and typically by subscription. The cloud providers host and manage the application, addressing software upgrades and security patching as needed. Examples of SaaS are CRM systems, webmail applications, productivity tools like [Jira](https://www.atlassian.com/software/jira) and [Confluence](https://www.atlassian.com/software/confluence), analytics tools, monitoring tools, chat applications, and more.

### Function as a service

Function as a service (FaaS) is a cloud computing service that offers a platform where customers can develop, run, and manage applications. This alleviates the need for developers to build and maintain the infrastructure needed to develop and launch an app. Cloud providers offer cloud resources, execute a block of code, return the result, and then destroy the resources that were used.

## Benefits of cloud computing

---

The unique properties of cloud infrastructures provide several novel technical and business benefits. The following are the key cloud computing benefits for agile teams.

### Reduced cost

Teams that use cloud resources do not have to purchase their own hardware assets. Beyond hardware costs, cloud providers do their best to maximize and optimize hardware usage. This transforms hardware and computing resources into a commodity, and cloud providers compete to offer the lowest bottom line.

### Increased scalability

Since cloud computing is elastic by default, organizations can scale resources on demand. Cloud computing enables auto-scaling features for teams. Cloud applications can automatically shrink and grow their infrastructure resources in response to spikes of traffic.

### Better performance

Cloud computing offers the latest and greatest computational resources. Users can access the newest machines with extreme, multi-core CPUs designed for heavy parallel processing tasks. Additionally, major cloud providers offer cutting-edge GPU and TPU hardware machines for intense graphical, matrix, and artificial intelligence processing tasks. These cloud providers consistently update with the latest in processor technology.

Major cloud computing providers have globally distributed hardware locations that ensure high performance connections depending upon the physical connection location. Additionally, cloud providers offer global content delivery networks that cache user requests and content by location.

### Improved execution speed

Teams that use cloud infrastructures can more rapidly execute and deliver value to their customers. Agile software teams can leverage a cloud infrastructure to rapidly spin up new virtual machines to experiment and validate unique ideas, and automate the testing and deployment phases of the pipeline.

### Increased security

Private cloud hosting offers isolated firewalled infrastructure that improves security. In addition, cloud providers offer many security mechanisms and technologies to help build secure applications. User access control is an important security concern, and most cloud providers offer tools to limit granular user access.

### Continuous integration and delivery

[Continuous integration and continuous delivery (CI/CD)](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) is a key practice for DevOps practitioners that helps to increase team velocity and reduce time to market. Cloud-based CI/CD, such as [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines), allows teams to automatically build, test and deploy code, without worrying about the management or maintenance of the CI infrastructure. Bitbucket Pipelines relies on Docker containers to provide isolation and reproducibility of the release pipeline. Teams can run commands similar like they might on a local machine, but with all the advantages of a fresh and reproducible setup for each build.

### Comprehensive monitoring and incident management

Cloud deployments allow teams to connect their tools from end to end, making it easier to monitor all parts of the pipeline. Comprehensive monitoring is another key capability for organizations practicing DevOps because it allows them to [address issues and incidents faster](https://www.atlassian.com/incident-management/devops). Cloud providers share metrics about the health of the system, including application and server CPU, memory, request rate, error rate, average response time, etc. For example, monitoring the load across many [virtual machines (VMs)](https://www.atlassian.com/microservices/cloud-computing/containers-vs-vms) means that teams can add more capacity if there is an increase in demand, or teams can automate the scaling (up/down) based on those metrics to reduce human intervention and costs. [Read more about DevOps monitoring](https://www.atlassian.com/devops/devops-tools/devops-monitoring).
