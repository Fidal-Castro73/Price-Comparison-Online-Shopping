from flask import Flask, render_template, redirect,url_for
import mysql.connector
import subprocess

app = Flask(__name__)
@app.route('/update_data')
def update_data():
    try:
        # Run the Selenium script (data.py) using subprocess
        subprocess.run(['python', 'data.py'], check=True)

        # Redirect back to the homepage to reflect updated data
        return redirect(url_for('index'))

    except Exception as e:
        return f"An error occurred while updating data: {str(e)}"
     
@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/custom')
def custom():
    return render_template('ic.html')

@app.route('/index')
def home():
    return render_template('index.html')

@app.route('/product')
def product():
    return render_template('product.html')

@app.route('/')
def index():
    # Connect to MySQL database
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Mysql@123',
        database='products'
    )
    
    cursor = connection.cursor(dictionary=True)

    # Fetch product details ordered by title and price to get the lowest price first
    query = """
    SELECT id, title, review, price, image_url
    FROM products
    ORDER BY title, price;
    """
    cursor.execute(query)
    products = cursor.fetchall()

    unique_products = {}
    
    # Iterate over products to filter unique products with numeric reviews
    for product in products:
        title = product['title']
        review = product['review']

        # Check if the review is a valid number
        try:
            review_value = float(review)  # Try converting the review to a float
        except ValueError:
            continue  # Skip products with non-numeric reviews

        # Only add products that have not been added already
        if title not in unique_products:
            # Determine the source based on the image_url or review
            if "flipkart" in product['image_url'] or review_value:
                product['source'] = 'Flipkart'
            else:
                product['source'] = 'Reliance Digital'
            
            # Add to unique_products dictionary with least price entry
            unique_products[title] = product
    
    cursor.close()
    connection.close()

    # Render the template with the unique product details
    return render_template('index.html', products=unique_products.values())

if __name__ == '__main__':
    app.run(debug=True)  