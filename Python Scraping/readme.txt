Requirements:

    postgresql
    python 3.12
    beautifulsoup4
    requests
    psycopg2

    Notes:
    beautifulsoup4 is the tool used to scape
    requests extracts html code and registers a connection
    psycopg2 connects to postgresql

postgresql config:

    host="localhost", dbname="postgres", user="postgres",
    password="postgres", port=5432

To run, make sure to download all required packages. Then, type in console : "python femaleItems.py" or "python maleItems.py" or just run it in vscode.
This should change the postgresql tables. This table is called SSitems.

