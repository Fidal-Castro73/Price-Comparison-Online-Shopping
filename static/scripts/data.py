from selenium import webdriver
from bs4 import BeautifulSoup
import time
import mysql.connector

def fetch_product_data(url, site):
    print("Starting Selenium WebDriver...")  # Indicating Selenium is starting
    driver = webdriver.Chrome()

    driver.get(url)

    time.sleep(5)  

    soup = BeautifulSoup(driver.page_source, "lxml")

    product_data = {
        "title": "Title not found",
        "price": "Price not found",
        "review": "Review not found",
        "image_url": "Image not found"
    }

    if site == "flipkart":
        try:
            product_data['title'] = soup.find('h1', class_="_6EBuvT").get_text()
        except AttributeError:
            pass

        try:
            product_data['price'] = soup.find('div', class_="Nx9bqj CxhGGd").get_text()
        except AttributeError:
            pass

        try:
            product_data['review'] = soup.find('div', class_="XQDdHH").get_text()
        except AttributeError:
            pass

        try:
            image = soup.find('img', class_="DByuf4 IZexXJ jLEJ7H")
            product_data['image_url'] = image['src'] if image else "Image not found"
        except AttributeError:
            pass

    elif site == "reliance":
        try:
            product_data['title'] = soup.find('h1', class_="pdp__title").get_text()
        except AttributeError:
            pass

        try:
            product_data['price'] = soup.find('span', class_="TextWeb__Text-sc-1cyx778-0 kFBgPo").get_text()
        except AttributeError:
            pass

        try:
            product_data['review'] = soup.find('div', class_="TextWeb__Text-sc-1cyx778-0 cXyRgU Block-sc-u1lygz-0 cnTNbt").get_text()
        except AttributeError:
            pass

        try:
            image = soup.find('img')
            product_data['image_url'] = image['src'] if image else "Image not found"
        except AttributeError:
            pass

        print(f"Data fetched successfully for {site}!")  # Success message

    driver.quit()

    return product_data

urls = [
    {"url": "https://www.flipkart.com/apple-iphone-15-yellow-128-gb/p/itm825e4ad0b80ca?pid=MOBGTAGPDTKHHHZU&lid=LSTMOBGTAGPDTKHHHZUTQZRMS&marketplace=FLIPKART&q=Apple+iPhone+15+128GB+Yellow&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=ed003e75-21d3-458d-b1e0-23a72a28fd9b.MOBGTAGPDTKHHHZU.SEARCH&ppt=sp&ppn=sp&ssid=8yuizwpl000000001724932065576&qH=0c5d5c6fa72747ef", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/apple-iphone-15-128gb-yellow/p/493839311", "site": "reliance"},
    {"url": "https://www.flipkart.com/samsung-galaxy-watch-ultra-lte/p/itmc66e51faa52df?pid=SMWH2EHFNBFCBXFK&lid=LSTSMWH2EHFNBFCBXFKVBUCWQ&marketplace=FLIPKART&q=Samsung+galaxy+ultra+watch&store=ajy%2Fbuh&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=c24624ce-807e-48d1-b09e-18e8c31297ff.SMWH2EHFNBFCBXFK.SEARCH&ppt=sp&ppn=sp&ssid=q4ssl9iwg00000001724952515804&qH=053e1f352370f665", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/samsung-galaxy-watch-ultra-smart-watch-upto-100-h-battery-3nm-processor-dual-gps-quick-button-siren-sapphire-glass-titanium-10atm-ip68-bp-ecg-monitor-energy-score-ages-titanium-gray-sm-l705fdaains/p/494421976", "site": "reliance"},
    {"url": "https://www.flipkart.com/whirlpool-192-l-direct-cool-single-door-3-star-refrigerator-base-drawer/p/itm884087fe72a3f?pid=RFRGGYR3REZ4NGZA&lid=LSTRFRGGYR3REZ4NGZAOLWDOM&marketplace=FLIPKART&q=whirlpool+refrigerator+3+stars+192+single+door&store=j9e%2Fabm%2Fhzg&srno=s_1_13&otracker=AS_Query_OrganicAutoSuggest_1_62_na_pm_ps&otracker1=AS_Query_OrganicAutoSuggest_1_62_na_pm_ps&fm=search-autosuggest&iid=d8819289-ebf0-48f3-b4ac-9a20358654e6.RFRGGYR3REZ4NGZA.SEARCH&ppt=sp&ppn=sp&ssid=ecg4tr2qzk0000001725353812366&qH=99164ba65312d412", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/whirlpool-192-litre-3-star-direct-cool-single-door-refrigerator-wine-flower-rain/p/493715199", "site": "reliance"},
    {"url": "https://www.flipkart.com/lg-8-kg-ai-direct-drive-technology-fully-automatic-front-load-washing-machine-black/p/itm93f2650ab8678?pid=WMNGHVFEZGWFGYMH&lid=LSTWMNGHVFEZGWFGYMHJUXNYE&marketplace=FLIPKART&q=washing+machine+full+automatic+front+door&store=j9e%2Fabm%2F8qx&srno=s_1_4&otracker=search&otracker1=search&fm=search-autosuggest&iid=a5c85dd3-2714-48db-89cb-d311f95dc9aa.WMNGHVFEZGWFGYMH.SEARCH&ppt=sp&ppn=sp&ssid=2hb3cofny80000001725354221835&qH=950ef1df205c1dd4", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/lg-8-kg-front-load-fully-automatic-washing-machine-fhv1408z2m-middle-black/p/493620600", "site": "reliance"},
    {"url": "https://www.flipkart.com/daikin-1-ton-5-star-split-inverter-ac-white/p/itm14efa40cf544a?pid=ACNGCBREP8MNEHQK&lid=LSTACNGCBREP8MNEHQKASHAZU&marketplace=FLIPKART&q=daikin+1+ton+5+star+inverter+ac&store=j9e%2Fabm%2Fc54&srno=s_1_2&otracker=AS_Query_OrganicAutoSuggest_1_22_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_1_22_na_na_ps&fm=Search&iid=1ae7502c-9d73-4de1-ba5b-de44d528d940.ACNGCBREP8MNEHQK.SEARCH&ppt=sp&ppn=sp&ssid=l851n4sb000000001725354589890&qH=677020f7d02b8c86", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/daikin-1-ton-5-star-inverter-split-ac-ftkm35u-3d-airflow-100-percent-copper-hepta-sense-cools-upto-54-degree-celsius-white-2023-/p/581026891", "site": "reliance"},
    {"url": "https://www.flipkart.com/sony-playstation5-digital-slim-cfi-2008b01x-1024-gb/p/itma8e52b2e97a4a?pid=GMCGZCYP4NEKPPYM&lid=LSTGMCGZCYP4NEKPPYMASPKUN&marketplace=FLIPKART&q=Sony+Playstation+PS5+Slim+Digital+Console&store=4rr%2Fx1m&spotlightTagId=BestsellerId_4rr%2Fx1m&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=1f040cf8-ffa6-4554-b996-c92cb4d54547.GMCGZCYP4NEKPPYM.SEARCH&ppt=sp&ppn=sp&ssid=ad9tft0gc00000001725354900390&qH=3a785869603bb2bc", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/sony-playstation-ps5-slim-digital-console/p/494410333", "site": "reliance"},
    {"url": "https://www.flipkart.com/apple-watch-se-gps-2nd-gen-heart-rate-monitor-crash-detection-sleep-tracking/p/itmd520200ff88c9?pid=SMWGHWZ2ZGFZGZYG&lid=LSTSMWGHWZ2ZGFZGZYG9FY3QX&marketplace=FLIPKART&q=Apple+Watch+SE+%282nd+Generation%29+GPS+44mm+Midnight+Aluminium+Case+with+Midnight+Sport+Band%2C+3rd+Gen+Optical+Heart+Sensor%2C+Crash+Detection%2C+Fall+Detection%2C+32+GB+Capacity%2C+64-bit+dual-core+processor&store=ajy%2Fbuh&srno=s_1_12&otracker=search&otracker1=search&fm=Search&iid=fef04e85-975d-42e4-8386-a1ceb841d360.SMWGHWZ2ZGFZGZYG.SEARCH&ppt=sp&ppn=sp&ssid=xsfa6azxps0000001725355241540&qH=fed1e4c295446f0b", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/apple-watch-se-2nd-generation-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-3rd-gen-optical-heart-sensor-crash-detection-fall-detection-32-gb-capacity-64-bit-dual-core-processor/p/493177922", "site": "reliance"},
    {"url": "https://www.flipkart.com/redmi-10000-mah-10-w-power-bank/p/itm22a1cbda7da7f?pid=PWBFU2HWEFEYHYX5&lid=LSTPWBFU2HWEFEYHYX5FAZPDI&marketplace=FLIPKART&q=redmi+10000+A+power+bank&store=tyy%2F4mr%2Ffu6&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=0f6f0117-a89f-4910-9b11-b6e44202ec3f.PWBFU2HWEFEYHYX5.SEARCH&ppt=sp&ppn=sp&ssid=zcnqom1ze80000001725355561445&qH=73e35c6d3bb2c8d0", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/redmi-10000-mah-power-bank/p/491894411", "site": "reliance"},
    {"url": "https://www.flipkart.com/govo-gosurround-900-200w-2-1-6-5-wired-subwoofer-200-w-bluetooth-soundbar/p/itm441a0192c21f8?pid=ACCGHFZPSP7ZEYDP&lid=LSTACCGHFZPSP7ZEYDPYAUBLT&marketplace=FLIPKART&q=govo+gosurrounnd+900+soundbar&store=0pm%2F0o7&spotlightTagId=BestsellerId_0pm%2F0o7&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=d50c9a19-793e-47b6-ab3b-b3a92646d436.ACCGHFZPSP7ZEYDP.SEARCH&ppt=sp&ppn=sp&ssid=7lfhf0teww0000001725355912293&qH=b7f4f3cb613fdd3c", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/govo-gosurround-900-soundbar-2-1-channel-home-theatre-6-5-inch-wired-subwoofer-hdmi-aux-usb-bluetooth-4-equalizer-modes-stylish-remote-led-display-platinum-black-200-watts/p/493666908", "site": "reliance"},
    {"url": "https://www.flipkart.com/samsung-32-l-convection-grill-microwave-oven/p/itm417eb79d2a3bc?pid=MRCGJZYUGHVKUNVK&lid=LSTMRCGJZYUGHVKUNVKRE887M&marketplace=FLIPKART&q=Samsung+MC28M6036CC%2FTL+28+Litres+Convection+Microwave+Oven%2C+Multiple+Cooking+Modes%2C+Black+-+Flower+Pattern&store=j9e%2Fm38%2Fo49&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=ef3e19a2-455a-4e63-919f-7e69dbb48da1.MRCGJZYUGHVKUNVK.SEARCH&ppt=sp&ppn=sp&ssid=m40hpijt000000001725356159882&qH=fa4a93afb2d4d3d4", "site": "flipkart"},
    {"url": "https://www.reliancedigital.in/samsung-32-litre-wi-fi-model-connectivity-with-smart-things-masala-tadka-and-sun-dry-convection-microwave-oven-mc32b7382qc/p/493620757", "site": "reliance"}
    ]

all_products_data = []

for item in urls:
    product_data = fetch_product_data(item['url'], item['site'])
    all_products_data.append(product_data)

for product in all_products_data:
    print(f"Title: {product['title']}")
    print(f"Price: {product['price']}")
    print(f"Review: {product['review']}")
    print(f"Image URL: {product['image_url']}")
    print("-" * 50)


def update_database(products):
    conn = mysql.connector.connect(host="localhost", user="root", password="password", database="your_db")
    cursor = conn.cursor()

    for product in products:
        # Check if the product already exists
        cursor.execute("SELECT id FROM products WHERE title = %s", (product['title'],))
        result = cursor.fetchone()

        if result:
            # Update existing product
            cursor.execute("""
                UPDATE products
                SET price = %s, review = %s, image_url = %s
                WHERE id = %s
            """, (product['price'], product['review'], product['image_url'], result[0]))
        else:
            # Insert new product
            cursor.execute("""
                INSERT INTO products (title, price, review, image_url)
                VALUES (%s, %s, %s, %s)
            """, (product['title'], product['price'], product['review'], product['image_url']))

    conn.commit()
    conn.close()
