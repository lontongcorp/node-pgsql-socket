NodeJS + PostgreSQL + Socket.io
===============================

Commonly using polling connection between apps to database server, this method using PostgreSQL with PL/Python pushing new or modified data to the app otherwise through web socket via node.js.

This one is from tutorial at my blog. More info [here](http://www.lontongcorp.com/2013/01/18/real-time-connection-dengan-postgresql-nodejs/).

Installation
------------

### Node.js ###
```
$> git clone git://github.com/lontongcorp/node-pgsql-socket.git
$> cd node-pgsql-socket
$> npm install
```

### Python ###
```
$> sudo apt-get install postgresql-plpython-9.4
$> sudo pip install -U socketIO-client
```

### PostgreSQL ###
```
$> createdb -U username mydb
$> psql -c 'CREATE LANGUAGE plpythonu' -U <username> -d mydb
$> psql -U <username> -d mydb -f SendSocket.sql
```


Testing
-------

```
$> node server.js
```

Open http://localhost:3000 and try to insert data to PostgreSQL directly.
```
INSERT INTO nama_tabel ("label", the_geom) VALUES ('test', ST_SetSRID(ST_Point(107.623590, -6.894190), 4326) );

UPDATE nama_tabel SET the_geom = ST_SetSRID(ST_Point(107.617247, -6.891333), 4326) WHERE "label" = 'test';
```


License
-------
Whatever you want!
