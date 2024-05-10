CREATE TABLE Ciudad (
	id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
   	temperatura INTEGER NOT NULL
);

INSERT INTO Ciudad (nombre, temperatura) VALUES ("Buenos Aires", 27);
INSERT INTO Ciudad (nombre, temperatura) VALUES ("Katmandu", 44);
INSERT INTO Ciudad (nombre, temperatura) VALUES ("Osaka", 13);
INSERT INTO Ciudad (nombre, temperatura) VALUES ("Vancouver", -6);

SELECT * FROM Ciudad;