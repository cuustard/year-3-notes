---
title: Lecture 2 - Databases, SQL & SQLite
description: Slide-adjacent notes prototype.
---
## Databases

![Relevant slide: 6](/slides/server-side-web/L02/slide-06.png)

A database is an organised collection of structured data.

Relational databases store data in tables.

Each table is made up of rows and columns.

| Term | Meaning |
|---|---|
| Table | A collection of related records |
| Row | One record in a table |
| Column | A named attribute |
| Primary key | A value that uniquely identifies a row |

```sql
SELECT name, email
FROM users
WHERE role = 'student'
ORDER BY name ASC;
```

