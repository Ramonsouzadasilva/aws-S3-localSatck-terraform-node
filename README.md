# Upload de Arquivos com Node, LocalStack, S3 e Terraform

Este projeto demonstra um fluxo completo para **upload, listagem e download de arquivos** utilizando:

- **Node (Express)** para a API HTTP
- **AWS S3** como armazenamento de arquivos
- **LocalStack** emulando serviços AWS localmente
- **Terraform** provisionando infraestrutura
- **Docker** gerenciando o ambiente

---

## Provisionando Infra com Terraform

- cd terraform
- terraform init
- terraform apply -auto-approve

---

## Rodando a API

- cd api-s3
- pnpm install
- pnpm run dev
