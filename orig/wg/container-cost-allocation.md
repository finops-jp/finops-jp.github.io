# Container Cost Allocation Labels and Dictionary

## Introduction

Our Container Cost Allocation project focuses on creating guidance and best practices to practitioners around allocating cost of containers.

This first output provides suggested container labels that are ready to use and can be combined into useful schemas. We also want this resource to encourage community debate about container cost allocation labeling, schemas, and best practices, inspiring contribution and future improvements.

_During the September 2022 Summit, the Working Group presented their container cost allocation label schema tool._

Our group decided to transform the most important parts of that presentation into an interactive tool for our FinOps community.

## How to use this resource

Use this interactive dictionary to learn common container labeling that the Working Group (WG) has sourced from community contributions. Use combinations of these dictionary cards to build out schemas, and to learn of possible mapping variants via “Label alias”, where similarly named labels might have similar purposes to one distinct label.

  * **Click each filter** to sort cards by the parameters that you choose.
  * **Unclick filters** to change how you’re sorting the cards, e.g. unclicking the _crawl_ parameter will remove the filter seeking cards with the _crawl_ label.

**NOTE:** Container Cost Allocation labeling and schema may greatly differ between different organizations with different use cases, goals, optimizations, and cloud service providers. The goal here is to provide an opinionated example about how to tackle the challenge of allocating container costs.

**Filter by FinOps Persona:**

ExecutivesBusiness/Product OwnerEngineers/OperationsFinance/Procurement

**Filter by FinOps Maturity Level:**

CrawlWalkRun

Check out our community documentation on [FinOps Personas](</framework/personas>) and [Maturity Model](</framework/maturity-model>) for more information.  

### application

Label that supports organizing your spend around application architecture hierarchy.

**crawl**

**executive**

**business**

**Context:** App / Service Hierarchy

**Common Resources:** namespace, pod, deployment

**Aliases:** _application, app, application-name, application-id_

**Example:** `ACME Fitness`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml>)

### cost-center

Cost-centers aligns to a business structure and help define the various areas that are driving the company expenses.

**crawl**

**finance**

**Context:** Business organization

**Common Resources:** namespace, pod, deployment

**Aliases:** _psp-element, cost-center_

**Example:** `Can be seen as alpha-numeric codes`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml>)

### team

Team Label help identify groups within an organization that are responsible for this spend.

**crawl**

**executive**

**business**

**engineering**

**finance**

**Context:** Business organization

**Common Resources:** namespace, pod, deployment

**Aliases:** _team, squad, group, owner, maintainer, contact_

**Example:** `[team name] [team id]`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml>)

### product

Product label organizes spend to align on the ‘products’ a firm customer consume. This label helps organize applications and services that support the product.

**walk**

**business**

**finance**

**Context:** App / Service Hierarchy

**Common Resources:** namespace, pod, deployment

**Aliases:** _product, workload, project_

**Example:** `ACME Fitness Store, ACME Fitness + Video Streaming`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml>)

### department

Department applies to business organization. Some organization use terms like Business Unit. The meaning is very organization dependent.

**walk**

**business**

**finance**

**Context:** Business organization

**Common Resources:** namespace, pod, deployment

**Aliases:** _business-unit, department, business-domain, domain_

**Example:** `retail BU, streaming BU`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml>)

### environment

Environment support calculating Cost of Good Sold (COGS) and aligns how organization deploy code. e.g. production versus development.

**walk**

**business**

**engineering**

**Context:** Platform + Operations

**Common Resources:** namespace, pod, deployment

**Aliases:** _stage, environment, env_

**Example:** `dev, staging, prod`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml>)

### customer

Customer label can identify that that are consuming a product/service. This can support multi-tenant environment as well as silo tenant environments.

**walk**

**business**

**engineering**

**Context:** Business organization

**Common Resources:** namespace, pod, deployment

**Aliases:** _customer_

**Example:** `[customer id] or [customer name]`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml>)

### service

Service label adds a layer to app/service hierarchy around how firms organize product/applications into sub-components.

**run**

**engineering**

**finance**

**Context:** App / Service Hierarchy

**Common Resources:** pod, deployment

**Aliases:** _service, service-id_

**Example:** `Point of Sale, Store Shopping Cart, Store Catalog`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml>)

### component

Component label adds a layer to app/service hierarchy around how firms organize “Microservice / Component / Function” that support application or services.

**run**

**business**

**engineering**

**Context:** App / Service Hierarchy

**Common Resources:** namespace, pod

**Aliases:** _component, tier_

**Example:** `database, storage`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml>)

### tech-stack

Tech-stack helps bring context of spend to the view of platform or operations by purpose.

**run**

**business**

**engineering**

**finance**

**Context:** Platform + Operations

**Common Resources:** namespace, pod, deployment

**Aliases:** _stack, servicegroup_

**Example:** `observability, build-tools, automation, security`

[On GitHub](<https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml>)

### Container cloud service provider

For hybrid and multi-cloud deployments, add a tag to identify the cloud service provider or data center where the container is running.

**walk**

**engineering**

**Context:** Engineering and those who orchestrate containerization services

### call-for-contribution

What kind of container labeling helps add information and context for run-stage executives? Contribute it here!

**run**

**executive**

**Context:** Business organization

**Common Resources:** namespace, pod, deployment

**Aliases:** _TBD_

**Example:** `TBD`

## Ways to contribute

FinOps practitioners can contribute in two ways. This collection of cards is maintained separately from the working group repository that handles more of the raw information and scripts. While we work on a future where we’ll source all of this content from one source of truth, everyone’s welcome to contribute to either of these repos.

**In short:**

  * Contributing to [this repo](<https://github.com/finopsfoundation/framework>) edits the website content (the above cards)
  * Contributing to [this repo](<https://github.com/finopsfoundation/sig-containers>) edits source code examples and raw Working Group content

Feel free to fill out issues to communicate your recommendations or Make a Suggestion to suggest edits to the site.

## Acknowledgements

The FinOps Foundation extends its gratitude to the hard-working members of the Working Group:

[ ![Erik Peterson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Erik Peterson CloudZero ](<https://www.linkedin.com/in/erikpeterson/>) [ ![Stephen Arthur](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Arthur Coinbase ](<https://www.linkedin.com/in/stephenarthursaur/>) [ ![Stuart Davidson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stuart Davidson Skyscanner ](<https://www.linkedin.com/in/spedge/>) [ ![Pavan Chavva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pavan Chavva VMware ](<https://www.linkedin.com/in/pkchavva/>) [ ![David Sterz](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Sterz Mindcurv ](<https://www.linkedin.com/in/david-sterz-679a938/>) [ ![Noah Abrahams](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noah Abrahams Oracle ](<https://www.linkedin.com/in/noahabrahams/>) [ ![Dhanabalaji \(Bala\) Kaliamurthy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dhanabalaji (Bala) Kaliamurthy IBM Cloudability ](<https://www.linkedin.com/in/dhanabalaji-kaliamurthy-20156ab/>) [ ![Roi Ravhon](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Roi Ravhon Finout ](<https://www.linkedin.com/in/roiravhon/>) [ ![Hannah Raikes](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Hannah Raikes Cisco ](<https://www.linkedin.com/in/hannah-raikes/>) [ ![Sean Pomeroy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sean Pomeroy Stackwatch ](<https://www.linkedin.com/in/srpomeroy/>) [ ![Jonathan Morin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jonathan Morin Datadog ](<https://www.linkedin.com/in/jonathanmorin/>) [ ![Dan Casson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dan Casson Pivot Technology ](<https://www.linkedin.com/in/dancasson2022/>) [ ![Laila Majidi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laila Majidi Georgia-Pacific ](<https://www.linkedin.com/in/lailamajidi/>) [ ![Kevin Mueller](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Mueller CloudZero ](<https://www.linkedin.com/in/kevinmueller/>) [ ![Casey Doran](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Casey Doran Apptio, an IBM Company ](<https://www.linkedin.com/in/dcdoran/>)

![Mike Giacommetti](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E)

#### Mike Giacommetti

[ ![Rachel Dines](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rachel Dines Chronosphere ](<https://www.linkedin.com/in/rdines/>) [ ![Peter Treese](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Peter Treese DXC ](<https://www.linkedin.com/in/peter-treese/>) [ ![Matt Leonard](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Leonard Oracle ](<https://www.linkedin.com/in/mgl001/>) [ ![Chris Aniszczyk](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Chris Aniszczyk CNCF ](<https://www.linkedin.com/in/caniszczyk/>) [ ![Debo Aderibigbe](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Debo Aderibigbe Netflix ](<https://www.linkedin.com/in/deboaderibigbe/>)

Lastly, a big thank you to the FinOps Foundation support team for helping us bring our work to life: Ashley Hromatko (Staff Sponsor), Samantha White (Program Management), Tom Sharpe (Design), and Andrew Nhem (Content).

Last updated: March 16, 2026

##### Related FinOps Capabilities

[ Allocation ](<https://www.finops.org/framework/capabilities/allocation/>)