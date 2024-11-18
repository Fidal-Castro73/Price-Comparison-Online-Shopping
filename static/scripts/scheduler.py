import schedule
import time
from data import scrape_and_update_db  # Import your scraping function

def products():
    print("Fetching data and updating the database...")
    scrape_and_update_db()  # This function will fetch new data and update the DB
schedule.every(2).minutes.do(products)


while True: 
    schedule.run_pending()
    time.sleep(1)
