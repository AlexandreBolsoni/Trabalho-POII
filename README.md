
# Projeto de Consumo de API com TypeScript e Orientação a Objetos

Este projeto foi desenvolvido para consumir a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) e armazenar os dados em um sistema orientado a objetos utilizando **TypeScript**. O foco está em aplicar os conceitos de **polimorfismo**, **interfaces**, e os princípios **SOLID** e **GRASP**.

## Tecnologias Utilizadas

- **TypeScript**
- **Axios** (para consumo da API)
- **Node.js** (para execução do projeto)
- **npm** (para gerenciar as dependências)

## Objetivo

O objetivo deste projeto é consumir os dados da API e armazená-los em uma estrutura de classes, mantendo um relacionamento de "1-para-muitos" entre as entidades. Por exemplo, o usuário (`User`) pode ter vários posts (`Post`), e esses dados são manipulados pelo controlador `UserController`.

## Estrutura de Arquivos

```bash
src/
│
├── controllers/
│   └── UserController.ts   # Lógica de controle de usuários e consumo da API
├── models/
│   ├── User.ts             # Classe para representar os usuários
│   ├── Address.ts          # Classe para representar o endereço do usuário
│   ├── Company.ts          # Classe para representar a empresa do usuário
│   ├── Post.ts             # Classe para representar os posts do usuário
│   └── Comment.ts          # Classe para representar os comentários nos posts
├── services/
│   └── ApiService.ts       # Serviço de API (opcional, dependendo da abordagem)
├── interfaces/
│   └── ISearchable.ts      # Interface para itens pesquisáveis
└── index.ts                # Arquivo principal para inicializar o sistema
```

## Conceitos Aplicados

### 1. **SOLID**

- **S**: Single Responsibility Principle (SRP): Cada classe tem uma única responsabilidade, como a classe `User` que é responsável por representar um usuário, e o `UserController` que gerencia a lógica de negócios e manipulação dos dados.
  
- **O**: Open/Closed Principle (OCP): O sistema está aberto para extensão, permitindo a adição de novas entidades e funcionalidades sem modificar o código existente.

- **L**: Liskov Substitution Principle (LSP): As subclasses (`Post`, `Comment`, etc.) podem ser usadas em qualquer lugar onde seus tipos base (`ISearchable`) são esperados.

- **I**: Interface Segregation Principle (ISP): Foi usada a interface `ISearchable` para garantir que todas as classes que implementem a pesquisa tenham apenas os métodos necessários.

- **D**: Dependency Inversion Principle (DIP): O `UserController` depende de abstrações (interfaces), e não de implementações concretas, facilitando a manutenção e testes.

### 2. **GRASP**

- **Controller**: O `UserController` é responsável por gerenciar a lógica do sistema, como o consumo de API, adição, remoção e pesquisa de usuários.

- **Creator**: O `UserController` instancia e manipula as entidades principais do sistema (`User`, `Post`, `Comment`).

- **Polimorfismo**: A interface `ISearchable` permite que todas as classes que implementam esse contrato possam ser pesquisadas por critérios comuns.

### 3. **Relacionamento 1-para-muitos**

Há um relacionamento de 1-para-muitos entre os `User` e os `Post`. Cada usuário pode ter múltiplos posts, conforme demonstrado na estrutura de classes e manipulado pelo `UserController`.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/Trabalho-POII.git
```

2. Navegue até o diretório do projeto:

```bash
cd Trabalho-POII
```

3. Instale as dependências necessárias:

```bash
npm install
```

## Como Executar

1. Execute o projeto para consumir os dados da API e realizar operações:

```bash
npm run start
```

2. O `UserController` irá fazer o consumo da API, criar instâncias de `User` e realizar operações como listagem e pesquisa.


## Melhorias Futuras

- Implementar outras entidades da API como `Post` e `Comment` e criar o relacionamento entre elas.
- Desenvolver uma interface gráfica para listar os dados e realizar as operações de forma interativa.
- Expandir o sistema para consumir mais APIs ou manipular dados adicionais da própria API do JSONPlaceholder.

## Contribuindo

Se você quiser contribuir com este projeto, por favor abra um pull request ou issue no GitHub. Após Avaliações Todos os tipos de contribuições são bem-vindos!

---
