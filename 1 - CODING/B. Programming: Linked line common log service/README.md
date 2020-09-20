# Crypto Linked LOG

### Install & run

```Bash
cd api && npm install
DEBUG=api:* PORT=3000 npm start
```

1. Puedo seleccionar en que puerto quiero correr el servicio, por defecto utiliza el 3000, de lo contrario setear la variable -PORT-
2. Para loguear mensajes de debug utilizar -DEBUG=api:*-
3. El web service corre en "localhost:PORT"
4. Se definieron dos rutas:
    1. GET "localhost:PORT/log" lo cual devuelve la última entrada del log
    2. POST "localhost:PORT/log" con un body que tenga el mensaje que quiero loggear en un atributo msg para agregar una nueva entrada al log

```JSON
{
    msg: "Mensaje para loggear"
}
```

### Debug

```Bash
cd api && npm install
```

1. Run all Test
```Bash
npm test
```
2. Run Unit Test
```Bash
npm run unit-test
```
3. Run Integration Test
```Bash
npm run integration-test
```
