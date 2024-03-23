from bs4 import BeautifulSoup
import requests
import psycopg2
import json
from datetime import datetime

def inputDataSS(url):
    html_text = requests.get(url, timeout=3, verify = True, headers= headers)
    soup = BeautifulSoup(html_text.content,'html.parser') #obtain html
    articles = soup.find_all('div', class_='plp-products__product-tile') #obtain the product details

    for x in articles:
        json_script = str(x.find('script').get_text).replace('<bound method PageElement.get_text of <script type="application/ld+json">', '').replace('</script>>','')
        info = json.loads(json_script)
        insert_values = (int(info["productID"]), info["brand"]["name"], info["name"], int(info["offers"]["price"]), info["image"], "ss")
        cur.execute(script, insert_values) #execute command
        conn.commit()

def inputDataFF(url):
    html_text = requests.get(url, timeout=3, verify = True, headers= headers)
    soup = BeautifulSoup(html_text.content,'html.parser') #obtain html
    articles = soup.find('div', class_='ltr-113ivyq elu6vcm0') #obtain the product details}
    json_data = str(articles.find('script')).replace('<script type="application/ld+json">', '').replace('</script>','')

    info = json.loads(json_data)
    for x in info['itemListElement']:
        item_url = x['offers']['url']
        id = item_url[item_url.index('item-')+5:item_url.index(".as")]
        insert_values = (int(id), x["brand"]["name"], x["name"], int(x["offers"]["price"]), x["image"][0],"ff")
        cur.execute(script, insert_values) #execute command'''
        conn.commit()


start_time = datetime.now()


''' connect to postgresql'''
conn = psycopg2.connect(host="localhost", dbname="thriftscraping", user="postgres",
                        password="postgres", port=5432)

cur = conn.cursor()


headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

script = '''
        CREATE TABLE IF NOT EXISTS femaleItems (
            product_id SERIAL PRIMARY KEY,
            brand       VARCHAR(255),
            name        VARCHAR(255),
            price       INT,
            img         VARCHAR(255),
            seller      VARCHAR(2)
        );

        CREATE TABLE favorite_female (
            user_id uuid REFERENCES users(user_id),
            product_id INT REFERENCES femaleItems(product_id),
            PRIMARY KEY (user_id, product_id)
        );         
        '''
cur.execute(script)

cur.execute('''
                DELETE FROM femaleItems;
            ''')

script  = '''
INSERT INTO femaleItems
VALUES (%s,%s,%s,%s,%s,%s)
ON CONFLICT (product_id) DO NOTHING
'''

'''patch 1.1 : we are no longer sexist. Women clothing will be included.'''
for x in range(1,6):
        url = 'https://www.ssense.com/en-ca/women/sale?page='+str(x)
        inputDataSS(url)

for x in range(1,6):
        url = "https://www.farfetch.com/ca/shopping/women/sale/all/items.aspx?page="+str(x)+"&view=96&sort=3"
        inputDataFF(url)

end_time = datetime.now()
print('Duration: {}'.format(end_time - start_time))

cur.close()
conn.close()