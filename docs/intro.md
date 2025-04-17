# Bem-vindo à documentação da Engenharia de Dados Corretora

Este portal centraliza visão, arquitetura, pipelines e guias de operação do ecossistema de dados da corretora.

```mermaid
graph TD
  A[CRM] -->|EL| B(Cloud Run)
  B --> C(BigQuery Raw)
  C -->|dbt| D(BigQuery Curado)
  D --> E[Power BI]
```
