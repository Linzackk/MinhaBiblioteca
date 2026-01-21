# MinhaBiblioteca

MinhaBiblioteca é uma plataforma desenvolvida em **React com Vite** para que usuários possam armazenar, gerenciar e acompanhar informações sobre livros. O projeto possui um design simples e funcional, focado na experiência do usuário.

**Demo Online:** [Acesse aqui na Vercel](https://minha-biblioteca-wine.vercel.app)

---

## Funcionalidades

1. **Busca de livros**
   - Permite procurar livros pelo título usando a **Google Books API**.
   - Exibe até 20 resultados com base no termo pesquisado.
   - Cada resultado mostra:
     - Capa do livro
     - Título
     - Quantidade de páginas
     - **Botão de adicionar** para incluir o livro na lista do usuário
   - Caso o livro já esteja na lista salva do usuário, o resultado exibe:
     - Páginas lidas / Páginas totais
     - Status do livro (Lido, Lendo, Quero Ler)
     - Nota do usuário (0 a 5)
     - **Botão de remover** da lista

2. **Livros salvos**
   - Tela principal que exibe os livros salvos pelo usuário.
   - Cada livro renderizado em forma de lista com as seguintes informações:
     - Capa do Livro
     - Título
     - Autor
     - Gêneros
     - Sinopse
     - Páginas lidas pelo usuário
     - Páginas totais do livro
     - Status do usuário (Lido, Lendo, Quero Ler)
     - Nota do usuário (0 a 5)
   - **Detalhes adicionais**:
     - Cada item da lista pode ser clicado para abrir um **Modal**
     - O Modal exibe **todas as informações do livro**, exceto o ID

---

## Tecnologias Utilizadas

- **React** com **Vite** para construção do projeto.
- **TypeScript** como linguagem principal.
- **React Router DOM** para navegação sem reload de página.
- **States e Context** para gerenciamento de dados e renderização dinâmica.
- **Componentes de única responsabilidade** para organização e reutilização.
- **Páginas** compostas por múltiplos componentes.

---

## Deploy

O projeto está hospedado na **Vercel** para acesso online.

---

## Próximos Passos

O projeto continuará sendo desenvolvido com foco em:

- Adicionar um **backend** e **banco de dados** para persistência de informações (projeto full-stack).  
- Criar funcionalidades de **análise de livros** baseada nas opiniões dos usuários.  
- Melhorar o **design e a interface** do aplicativo, tornando-o mais atraente e intuitivo.

---

## Como Rodar Localmente

1. Clone o repositório:

```bash

git clone https://github.com/SEU_USUARIO/minha-biblioteca.git

```

Entre na pasta do projeto:

```bash

cd minha-biblioteca

```

Instale as dependências:

```bash

npm install

```

Rode o projeto:

```bash

npm run dev

```

O site estará disponível no endereço exibido no terminal (padrão http://localhost:5173).

---

## Observações

O projeto foi desenvolvido com foco em aprendizado de React e TypeScript, organização de estados e context, além de boas práticas de componentes. 

Futuramente será expandido para um projeto full-stack com persistência de dados, análise dos livros e melhorias na interface do usuário.
