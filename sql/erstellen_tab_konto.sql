CREATE TABLE KONTO(
    ID INT NOT NULL AUTO_INCREMENT,
    BENUTZER INT NOT NULL,
    KONTO VARCHAR(12) NOT NULL,
    BILANZ DECIMAL(20,2) DEFAULT 0,
    WAHRUNG INT DEFAULT 0,
    PRIMARY KEY(ID)
);
