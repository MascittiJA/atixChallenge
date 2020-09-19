# a

```SQL
SELECT u.username
FROM usuaruo u
INNER JOIN persona p ON u.id = p.idUsuario
WHERE p.nombre LIKE 'Jorg%'
```

# b

```SQL
SELECT MES
FROM (
    SELECT MONTH(p.fechaNac) as MES, COUNT(p.id)
    FROM persona p
    GROUP BY MONTH(p.fechaNac)
    HAVING COUNT(p.id) > 10
)
```