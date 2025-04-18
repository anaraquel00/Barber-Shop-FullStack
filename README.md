# Barber-Shop-FullStack ✂️💈

![Java](https://img.shields.io/badge/Java-17-%23ED8B00?logo=openjdk)
![Spring](https://img.shields.io/badge/Spring_Boot-3.1.5-%236DB33F?logo=spring)
![Angular](https://img.shields.io/badge/Angular-15-%23DD0031?logo=angular)
![MySQL](https://img.shields.io/badge/MySQL-8.0-%234479A1?logo=mysql)
![Postman](https://img.shields.io/badge/Postman-API_Testing-%23FF6C37?logo=postman)

> Sistema completo para gestão de barbearias com agendamentos, controle de produtos e clientes.

---

## 📌 Índice
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Testes com Postman](#-testes-com-postman)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Funcionalidades
| Módulo          | Descrição                                                                 |
|-----------------|---------------------------------------------------------------------------|
| **Agendamentos** | Agendamento online com seleção de barbeiros e serviços.                  |
| **Produtos**     | CRUD completo para produtos da barbearia.                                |
| **Clientes**     | Cadastro com histórico de serviços.                                      |
| **Dashboard**    | Relatórios de faturamento (em desenvolvimento).                          |

---

## 🛠️ Tecnologias
**Backend**:
- Java 17
- Spring Boot 3.1.5
- Spring Data JPA
- MySQL 8.0
- Lombok
- MapStruct (DTOs)

**Frontend**:
- Angular 15
- Angular Material
- RxJS
- SCSS

**Ferramentas**:
- Postman (Testes de API)
- Swagger (Documentação)

---

## 📋 Pré-requisitos
- JDK 17+
- Maven 3.9+
- Node.js 18+
- MySQL 8.0+
- Angular CLI 15
- Postman (opcional)

---

## 🚀 Instalação
```bash
# Clone o repositório
git clone https://github.com/anaraquel00/Barber-Shop-FullStack.git
cd Barber-Shop-FullStack

# Backend (Spring Boot + MySQL)
cd barbershop
mvn install

# Frontend (Angular)
cd ../barber-shop-ui
npm install
```

---

## ▶️ Execução
**Backend**:
```bash
cd barbershop
mvn spring-boot:run
```
> Acesse: [http://localhost:8080](http://localhost:8080)  
> Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

**Frontend**:
```bash
cd barber-shop-ui
ng serve
```
> Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🚨 Testes com Postman
1. Importe a coleção:  
   [`docs/BarberShop-API.postman_collection.json`](docs/BarberShop-API.postman_collection.json)
2. Configure as variáveis:
   ```json
   {
     "baseUrl": "http://localhost:8080/api",
     "authToken": "seu-token-jwt"
   }
   ```

---

## 📂 Estrutura do Projeto
```
Barber-Shop-FullStack/
├── barbershop/                          # Backend (Spring Boot)
│   ├── src/main/java/com/barbershop/
│   │   ├── controller/                  # Endpoints REST
│   │   ├── entity/                      # Entidades JPA
│   │   ├── service/                     # Lógica de negócio
│   │   ├── exception/                   # Tratamento de exceções
│   │   ├── dto/                         # Data Transfer Objects
│   │   └── repository/                  # Repositórios JPA
│   └── pom.xml
│
└── barber-shop-ui/                      # Frontend (Angular)
    ├── src/app/
    │   ├── home/                        # Página principal
    │   ├── produtos/                    # CRUD de produtos
    │   ├── loja/                        # Vitrine de serviços
    │   ├── sobre/                       # Página institucional
    │   ├── shared/                      # Componentes reutilizáveis
    │   └── assets/                      # Imagens/fontes
    └── angular.json
```

---

## 🤝 Contribuição
1. Faça um `fork` do projeto
2. Crie uma branch:  
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações:  
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. Envie para o repositório:  
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um `Pull Request`

---

## 📜 Licença
Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

<p align="center">
  <sub>Desenvolvido com ❤️ por <a href="https://github.com/anaraquel00">Ana Raquel</a></sub>
</p>
