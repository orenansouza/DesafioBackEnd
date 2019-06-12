## Instalação

- npm install

- Faça download do Postman para fazer as requisições.
Link Download para Windowns, Linux e MacOs: https://www.getpostman.com/downloads/
  
## Executar

- npm start

### POST `http://localhost:4000/products/`

Esse método deve receber um produto novo e inseri-lo em um banco de dados para ser consumido pela própria API.

- Exemplo:

 ```json
{
   "id": 1,
   "sku": 8552515751438644,
   "name": "Casaco Jaqueta Outletdri Inverno Jacquard",
   "price": 109.90,
   "created_at": "2018-08-27T02:11:43Z",
   "updated_at": "2018-08-27T02:11:43Z"
}
```
### GET `http://localhost:4000/products/`

Esse método da API deve retornar o seguinte JSON.

```json
[
  {
    "id": 1,
    "sku": 8552515751438644,
    "name": "Casaco Jaqueta Outletdri Inverno Jacquard",
    "price": 109.90,
    "created_at": "2018-08-27T02:11:43Z",
    "updated_at": "2018-08-27T02:30:20Z"
  },
  {
    "id": 2,
    "sku": 8552515751438645,
    "name": "Camiseta Colcci Estampada Azul",
    "price": 79.90,
    "created_at": "2018-08-27T02:11:43Z",
    "updated_at": "2018-08-27T02:30:20Z"
  }
]
```

### POST `http://localhost:4000/customers/`

Esse método deve receber um cliente novo e inseri-lo em um banco de dados para ser consumido pela própria API.

- Exemplo:

```json
{
   "id": 0,
   "name": "Maria Aparecida de Souza",
   "cpf": "81258705044",
   "email": "mariasouza@email.com",
   "created_at": "2018-08-27T02:11:43Z",
   "updated_at": "2018-08-27T02:30:20Z"
}
```

### GET `http://localhost:4000/customers/`

Esse método da API deve retornar o seguinte JSON.

```json
[
    {
        "_id": "5d002ad9f3b85d2f38a5da2d",
        "id": 1,
        "name": "Maria Aparecida de Souza",
        "cpf": "81258705044",
        "email": "mariasouza@email.com",
        "created_at": "2018-08-27T02:11:43.000Z",
        "updated_at": "2018-08-27T02:30:20.000Z"
    }
]
```

### POST `http://localhost:4000/orders`

Esse método deve receber um pedido de venda novo e inseri-lo em um banco de dados para ser consumido pela própria API.

```json
{
  "id": 1,
  "created_at": "2018-08-27T02:11:43Z",
  "status": "CONCLUDED",
  "total": 189.80,
  "customer_id": "5d002ad9f3b85d2f38a5da2d",
  "items": [
    {
		 "id": 1,
		 "sku":8552515751438645,
		 "order_id": 1,
		 "amount": 1,
		 "price_unit": 109.90,
		 "total": 109.90,
		 "product_id":  "5d00321221f5a3124484bc5a"
      },
    {
		"id":2,
		"sku":8552515751438644,
		"order_id": 1,
		"amount": 1,
		"price_unit": 79.90,
		"total": 79.90,
		"product_id": "5d00323621f5a3124484bc5c"
    }
  ]
}
```

### PUT `http://localhost:4000/orders/{{ID_ORDER}}`

Esse método atualiza o status para "CANCELED" o pedido de venda informado.

```json
{
  "order_id": 1,
  "status": "CANCELED"
}
```

### GET `http://localhost:4000/orders`

Esse método da API deve retornar o seguinte JSON.

```json
[
  {
    "id": 1,
    "created_at": "2018-08-27T02:11:43Z",
    "cancelDate": "2018-08-30T03:15:42Z",
    "status": "CANCELED",
    "total": 189.80,
    "buyer": {
      "id": 1,
      "name": "Maria Aparecida de Souza",
      "cpf": "81258705044",
      "email": "mariasouza@email.com"
    },
    "items": [
      {
        "product": {
          "id": 1,
          "sku": 8552515751438644,
          "title": "Casaco Jaqueta Outletdri Inverno Jacquard"
        },
        "amount": 1,
        "price_unit": 109.90,
        "total": 109.90
      },
      {
        "product": {
          "id": 2,
          "sku": 8552515751438645,
          "title": "Camiseta Colcci Estampada Azul"
        },
        "amount": 1,
        "price_unit": 79.90,
        "total": 79.90
      }
    ]
  },
  {
    "id": 2,
    "created_at": "2018-08-27T02:11:43Z",
    "cancelDate": null,
    "status": "CONCLUDED",
    "total": 109.90,
    "buyer": {
      "id": 1,
      "name": "Lurdes da Silva",
      "cpf": "46793282077",
      "email": "lurdesdasilva@email.com"
    },
    "items": [
      {
        "product": {
          "id": 1,
          "sku": 8552515751438644,
          "title": "Casaco Jaqueta Outletdri Inverno Jacquard"
        },
        "amount": 1,
        "price_unit": 109.90,
        "total": 109.90
      }
    ]
  }
]
```
