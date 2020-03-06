
# Total size Database
SELECT pg_size_pretty( pg_database_size('dbname') );

# Total Size by table
SELECT nspname || '.' || relname AS "relation",
    pg_size_pretty(pg_total_relation_size(C.oid)) AS "total_size"
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema')
    AND C.relkind <> 'i'
    AND nspname !~ '^pg_toast'
    ORDER BY total_size DESC
--  ORDER BY pg_total_relation_size(C.oid) DESC
--  LIMIT 5;

# Example Backup
pg_dump -h 198.51.100.0 -p 5432 dbname > dbname.bak


# Example Restore
pg_dump -h localhost -p 5432 -U postgres -F c -b -v -f  "/usr/local/backup/10.70.0.61.backup" old_db
