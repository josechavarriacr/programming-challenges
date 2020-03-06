# Fito Sanitario DB
SFE_USERNAME=fitosanitario
SFE_PASSWORD=eK47MjJv13
SFE_DATABASE=fitosanitariodev
SFE_HOST=postgresqldev2.cfxwd2oauf8n.us-east-1.rds.amazonaws.com
SFE_PORT=5432
SFE_SSL=fals

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

#BackUp FitoDev
export PGPASSWORD='eK47MjJv13'; pg_dump -h postgresqldev2.cfxwd2oauf8n.us-east-1.rds.amazonaws.com -p 5432 -U fitosanitario fitosanitariodev > fitosanitariodev.sql

# Example Restore
pg_dump -h localhost -p 5432 -U postgres -F c -b -v -f  "/usr/local/backup/10.70.0.61.backup" old_db

#Restore FitoDev
export PGPASSWORD='j4r'; pg_dump -h localhost -p 5432 -U postgres -F c -b -v -f  "fitosanitariodev.bak" fitosanitariodev