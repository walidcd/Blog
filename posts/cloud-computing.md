---
created: 2023-11-19T13:20:28 (UTC +01:00)
tags: []
source: https://www.atlassian.com/fr/microservices/cloud-computing
author: Atlassian
title: "Cloud Computing"
subtitle: "C est quoi le cloud ? ses caracteristiques ? Les Types de déploiements cloud"
date: "2023-11-19"
---

# Qu'est-ce que le cloud computing ? Aperçu du cloud

> ## Excerpt
>
> Le cloud computing est un modèle de stockage et de gestion des données basé sur Internet. Dans cet article, nous expliquons son fonctionnement et son importance.

---

## Caractéristiques du cloud computing

---

Avant le cloud computing, les entreprises achetaient et maintenaient une infrastructure informatique sur site. Bien que les économies aient été à l'origine de la transition initiale vers le cloud, de nombreuses entreprises trouvent que l'infrastructure de cloud public, privé ou hybride offre de nombreux avantages.

Pour les équipes [Agile](https://www.atlassian.com/fr/agile) et [DevOps](https://www.atlassian.com/fr/devops/what-is-devops), le cloud computing permet de simplifier et d'accélérer le processus de développement.

Voici une liste de caractéristiques qui définissent le cloud computing.

### Libre-service à la demande

Les fournisseurs de cloud computing proposent des API auxquelles les utilisateurs accèdent pour demander de nouvelles ressources ou faire évoluer des ressources existantes dès que nécessaire. Les équipes peuvent automatiser le provisionnement de leur infrastructure de manière simple grâce aux outils d'[Infrastructure-as-Code (IaC)](https://www.atlassian.com/fr/microservices/cloud-computing/infrastructure-as-code) tels que Terraform et Ansible.

### Accès réseau étendu

L'emplacement physique du matériel est une préoccupation importante pour proposer une expérience optimale à l'utilisateur final. Le cloud computing est une incroyable opportunité qui propose du matériel physique distribué à l'échelle mondiale, permettant ainsi aux organisations de provisionner stratégiquement du matériel ciblé sur l'emplacement.

### Regroupement des ressources

Les ressources informatiques d'une plateforme d'infrastructure cloud sont divisées dynamiquement et allouées à la demande. Étant donné que les machines physiques d'un hôte cloud sont provisionnées et partagées dynamiquement entre plusieurs locataires, le matériel cloud est entièrement optimisé pour une utilisation maximale.

### Flexibilité rapide

Les infrastructures cloud peuvent croître ou décroître de manière dynamique, ce qui permet aux utilisateurs de demander une mise à l'échelle automatique de leurs ressources informatiques aux demandes de trafic. La flexibilité peut intervenir sur une base par machine, où une allocation de ressources évolue de sorte à maximiser les ressources disponibles de la machine, ou sur une base multi-machine, dans laquelle une application évolue automatiquement sur plusieurs machines en réseau.

### Service mesuré

Les fournisseurs d'infrastructure cloud fournissent des métriques d'utilisation détaillées qui sont utilisées pour communiquer les coûts d'utilisation. Par exemple, [Amazon Web Services (AWS)](https://www.atlassian.com/fr/partnerships/aws) fournit une utilisation pour chaque catégorie de service en lignes horaires ou quotidiennes. Les fournisseurs de services cloud utilisent généralement un modèle de facturation à l'utilisation qui est mesuré et fourni, de sorte que les clients sont facturés pour le montant exact des ressources informatiques utilisées.

## Types de déploiements cloud

---

Il existe trois types principaux de déploiements cloud. Chacun présente des avantages uniques, et les organisations en utilisent souvent plusieurs à profit.

![Diagramme des déploiements cloud](https://wac-cdn.atlassian.com/dam/jcr:0f791cd5-c80c-4641-b10c-09c9c9b9a8b7/Cloud%20computing.png?cdnVersion=1324)

### Cloud public

Les clouds publics fournissent des ressources informatiques (serveurs, stockage, applications, etc.) sur Internet à partir d'un fournisseur de services cloud, tel qu'AWS et Microsoft Azure. Les fournisseurs cloud possèdent et exploitent tous les matériels, logiciels et autres infrastructures de support.

### Cloud privé

Un cloud privé comprend des ressources informatiques dédiées exclusivement à une organisation. Il peut être localisé physiquement dans le data center sur site d'une organisation ou être hébergé par un fournisseur cloud. Un cloud privé offre un niveau de sécurité et de confidentialité supérieur à celui des clouds publics parce qu'il propose des ressources dédiées aux entreprises.

Les clients d'un cloud privé bénéficient des principaux avantages d'un cloud public, notamment le libre-service, l'évolutivité et l'élasticité, mais avec l'avantage supplémentaire d'un contrôle et d'une personnalisation ajoutée. De plus, les clouds privés peuvent avoir un niveau de sécurité et de confidentialité plus élevé parce qu'ils sont hébergés sur des réseaux privés non accessibles au trafic public.

### Cloud hybride

Les clouds hybrides sont une combinaison de clouds privés et publics (par exemple, [IBM Hybrid Cloud](https://www.ibm.com/cloud/hybrid), optimisé par Red Hat), connectés avec une technologie qui permet aux données et aux applications de travailler ensemble. Les services et applications sensibles peuvent être conservés dans le cloud privé sécurisé, tandis que les serveurs web accessibles au public et les terminaux orientés client peuvent être hébergés dans le cloud public. Les fournisseurs cloud tiers les plus populaires proposent un modèle de cloud hybride, permettant aux utilisateurs de combiner des clouds privés et publics pour répondre à leurs besoins. Les entreprises disposent ainsi d'une plus grande flexibilité pour déployer les besoins spécifiques de leur application en matière d'infrastructure.
