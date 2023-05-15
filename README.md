# Gerenciador de Preços

Esta é o front-end do Gerenciador de Preços, desenvolvida com React.js e Vite. A aplicação permite que o usuário envie um arquivo .csv contendo preços de produtos, valide os preços e atualize o banco de dados com os novos preços.

## Índice

- [Instalação](#instalação)
- [Como usar](#como-usar)
- [API](#api)
- [Ferramentas utilizadas](#ferramentas-utilizadas)
- [Licença](#licença)

## Instalação

Para instalar a aplicação, siga as seguintes etapas:

1. Crie um diretório para o projeto;
2. Clone esse repositório;

```
git clone https://github.com/savioferraz/price-manager-front.git
```

3. Instale as dependências (Certifique-se de ter o Node.js instalado);

```
npm i
```

4. Inicie a aplicação;

```
npm run dev
```

5. Acesse a url no seu navegador para visualizar a aplicação;

```
http://localhost:5173/
```

## Como usar

1. Na página inicial você encontrará um campo de upload de arquivo .csv.
2. Selecione um arquivo .csv válido contendo os dados a serem validados.
3. Clique em "Validar" para realizar a validação dos novos preços.
4. Será exibida uma tabela com os resultados da validação.
5. O botão "Atualizar" ficará ativado apenas quando todos os novos preços atenderem as regras de negócio.
6. Clique em "Atualizar" para atualizar os preços no banco de dados.
7. Em caso de sucesso, a página é recarregada e fica preparada para a próxima validação.

### Formato do .csv

O arquivo .csv (comma separated values) deve conter o cabeçalho e tipo de dados separados por "," exatamente como no exemplo a seguit:

| product_code | new_price |
| ------------ | --------- |
| number       | number    |

## API

### Rota "/stock"

| Rota      | Descrição                                                                            |
| --------- | ------------------------------------------------------------------------------------ |
| /validate | Valida o arquivo .csv e gera uma planilha contendo as informações e regra de negócio |
| /update   | Envia o csv para ser atualizado no banco de dados                                    |

## Ferramentas Utilizadas

- React
- Vite
- Axios
- Styled Components

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
