# a.

```SQL
SELECT u.*
FROM Usuario u
INNER JOIN Persona p ON u.id = p.idUsuario
WHERE p.nombre LIKE 'Jorg%'
```

# b.

No hay definiciones en el enunciado, pero asumo que p.idUsuario nunca e null y podria tener más de un usuario cada persona.

```SQL
SELECT MONTH(p.fechaNac)
FROM Persona p
GROUP BY MONTH(p.fechaNac)
HAVING COUNT(1) > 10
```