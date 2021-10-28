# tasks-backend

Rodar o serviço backend
```
npm start
```

## Preparação do ambiente

Instalar knex globalmente na estação de desenvolvimento
```
npm install knex -g
```

Criar migrate com knex
```
knex migrate:make create_table_users
```

Executar migrations knex
```
knex migrate:latest
```