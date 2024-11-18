
const products = [
    {
        id: "redmi-note-12",
        name: "Redmi Note 12",
        image: "https://m.media-amazon.com/images/I/41G0gF0kEwL._SX300_SY300_QL70_FMwebp_.jpg",
        features: "AMOLED Display, Snapdragon 685, 8GB RAM, 128GB Storage, 50MP Camera, 5000mAh Battery.",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹15,999", discount: "10%", delivery: "₹50", total: "₹16,049", link: "https://amzn.in/d/1i7mPj6" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹15,499", discount: "15%", delivery: "₹100", total: "₹15,599", link: "https://www.flipkart.com/redmi-note-12-sunrise-gold-64-gb/p/itm5d170187bcbf0" },
            { store: "Meesho", logo: "meesho-logo.png", price: "₹15,800", discount: "12%", delivery: "₹0", total: "₹15,800", link: "https://www.meesho.com/redmi-note-12/p/12345abc" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }
        ]
    },
    {
        id: "apple-ipad-10.2",
        name: "Apple iPad 10.2",
        image: "https://m.media-amazon.com/images/I/71rKi4R+xHL._SX679_.jpg",
        features: "10.2-inch Retina Display, A13 Bionic Chip, 64GB Storage, Wi-Fi Only.",
        webstores: [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹29,900", "discount": "5%", "delivery": "₹0", "total": "₹29,900", "link": "https://amzn.in/d/xyz123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹28,999", "discount": "6%", "delivery": "₹50", "total": "₹29,049", "link": "https://www.flipkart.com/apple-ipad-10.2/p/abc123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹30,200", "discount": "4%", "delivery": "₹0", "total": "₹30,200", "link": "https://www.meesho.com/apple-ipad-10.2/p/def456" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹31,000", "discount": "3%", "delivery": "₹50", "total": "₹31,050", "link": "https://www.myntra.com/apple-ipad-10.2/p/ghi789" }
        ]
    },
    {
        id: "fitbit-versa-4",
        "name": "Fitbit Versa 4",
        "image": "https://m.media-amazon.com/images/I/61DE+IscTqL._SX679_.jpg",
        "features": "24/7 Heart Rate, Fitness & Sleep Tracking, Built-in GPS, Water Resistant.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹19,999", "discount": "10%", "delivery": "₹0", "total": "₹19,999", "link": "https://amzn.in/d/uvw345" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹19,500", "discount": "12%", "delivery": "₹50", "total": "₹19,550", "link": "https://www.flipkart.com/fitbit-versa-4/p/xyz456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹20,000", "discount": "8%", "delivery": "₹0", "total": "₹20,000", "link": "https://www.meesho.com/fitbit-versa-4/p/abc789" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹20,500", "discount": "5%", "delivery": "₹50", "total": "₹20,550", "link": "https://www.myntra.com/fitbit-versa-4/p/def123" }
        ]
    },
    {
        id: "ninja-air-fryer-pro",
        "name": "Ninja Air Fryer Pro",
        "image": "https://m.media-amazon.com/images/I/71+zqM9bHXL._SX679_.jpg",
        "features": "5.5-Quart Capacity, Multi-Functional Cooking, 75% Less Fat, Easy Clean Basket.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹15,499", "discount": "7%", "delivery": "₹0", "total": "₹15,499", "link": "https://amzn.in/d/mno789" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹15,000", "discount": "9%", "delivery": "₹50", "total": "₹15,050", "link": "https://www.flipkart.com/ninja-air-fryer-pro/p/ghi456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹15,800", "discount": "6%", "delivery": "₹0", "total": "₹15,800", "link": "https://www.meesho.com/ninja-air-fryer-pro/p/xyz789" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹16,000", "discount": "4%", "delivery": "₹50", "total": "₹16,050", "link": "https://www.myntra.com/ninja-air-fryer-pro/p/uvw123" }
        ]
    },
    {
        id: "irobot-roomba-i5-plus",
        "name": "iRobot Roomba i5+",
        "image": "https://m.media-amazon.com/images/I/61RoKlkoXPL._SX679_.jpg",
        "features": "Self-Emptying Robot Vacuum, Wi-Fi Connected, Cleans Dirt, Pet Hair.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹54,999", "discount": "5%", "delivery": "₹0", "total": "₹54,999", "link": "https://amzn.in/d/xyz456" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹54,499", "discount": "6%", "delivery": "₹50", "total": "₹54,549", "link": "https://www.flipkart.com/irobot-roomba-i5-plus/p/abc123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹55,000", "discount": "4%", "delivery": "₹0", "total": "₹55,000", "link": "https://www.meesho.com/irobot-roomba-i5-plus/p/def456" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹56,000", "discount": "3%", "delivery": "₹50", "total": "₹56,050", "link": "https://www.myntra.com/irobot-roomba-i5-plus/p/ghi789" }
        ]
    },
    {
        id: "samsung-galaxy-buds-2-pro",
        "name": "Samsung Galaxy Buds 2 Pro",
        "image": "https://m.media-amazon.com/images/I/71kKJTuDDSL._SX679_.jpg",
        "features": "Noise Cancelling, 360 Audio, Water Resistant, Up to 8 Hours Playtime.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹16,499", "discount": "8%", "delivery": "₹0", "total": "₹16,499", "link": "https://amzn.in/d/xyz123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹16,000", "discount": "10%", "delivery": "₹50", "total": "₹16,050", "link": "https://www.flipkart.com/samsung-galaxy-buds-2-pro/p/abc123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹16,800", "discount": "6%", "delivery": "₹0", "total": "₹16,800", "link": "https://www.meesho.com/samsung-galaxy-buds-2-pro/p/def456" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹17,200", "discount": "5%", "delivery": "₹50", "total": "₹17,250", "link": "https://www.myntra.com/samsung-galaxy-buds-2-pro/p/ghi789" }
        ]
    },
    {
        id: "lg-ultragear-gaming-monitor",
        "name": "LG Ultragear Gaming Monitor",
        "image": "https://m.media-amazon.com/images/I/81No-K4FFeL._SX679_.jpg",
        "features": "27-inch QHD, 1ms Response Time, 165Hz Refresh Rate, NVIDIA G-Sync Compatible.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹34,999", "discount": "10%", "delivery": "₹0", "total": "₹34,999", "link": "https://amzn.in/d/uvw456" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹34,500", "discount": "12%", "delivery": "₹50", "total": "₹34,550", "link": "https://www.flipkart.com/lg-ultragear-gaming-monitor/p/xyz123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹35,200", "discount": "9%", "delivery": "₹0", "total": "₹35,200", "link": "https://www.meesho.com/lg-ultragear-gaming-monitor/p/def123" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹35,800", "discount": "7%", "delivery": "₹50", "total": "₹35,850", "link": "https://www.myntra.com/lg-ultragear-gaming-monitor/p/ghi456" }
        ]
    },
    {
        id: "blink-outdoor-camera",
        "name": "Blink Outdoor Camera",
        "image": "https://m.media-amazon.com/images/I/71xkeFRRBML._SX679_.jpg",
        "features": "Wireless, Weather Resistant, Motion Detection, 2-Year Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹8,499", "discount": "15%", "delivery": "₹0", "total": "₹8,499", "link": "https://amzn.in/d/abc456" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹8,000", "discount": "18%", "delivery": "₹50", "total": "₹8,050", "link": "https://www.flipkart.com/blink-outdoor-camera/p/def789" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹8,700", "discount": "12%", "delivery": "₹0", "total": "₹8,700", "link": "https://www.meesho.com/blink-outdoor-camera/p/ghi123" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹9,000", "discount": "10%", "delivery": "₹50", "total": "₹9,050", "link": "https://www.myntra.com/blink-outdoor-camera/p/uvw789" }
        ]
    },
    {
        id: "ninja-creami-ice-cream-maker",
        "name": "Ninja Creami Ice Cream Maker",
        "image": "https://m.media-amazon.com/images/I/81vOAlU1CzL._SX679_.jpg",
        "features": "7 Programs, Frozen Treats, Sorbet, Smoothie Bowls, Easy to Clean.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹18,499", "discount": "7%", "delivery": "₹0", "total": "₹18,499", "link": "https://amzn.in/d/uvw123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹18,000", "discount": "10%", "delivery": "₹50", "total": "₹18,050", "link": "https://www.flipkart.com/ninja-creami-ice-cream-maker/p/xyz456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹18,800", "discount": "5%", "delivery": "₹0", "total": "₹18,800", "link": "https://www.meesho.com/ninja-creami-ice-cream-maker/p/abc789" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹19,200", "discount": "4%", "delivery": "₹50", "total": "₹19,250", "link": "https://www.myntra.com/ninja-creami-ice-cream-maker/p/def123" }
        ]
    },
    {
        id: "apple-airpods-pro",
        name: "Apple AirPods Pro",
        image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._SX679_.jpg",
        features: "Active Noise Cancellation, Transparency Mode, Spatial Audio, Water and Sweat Resistance.",
        webstores: [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹26,900", "discount": "10%", "delivery": "₹0", "total": "₹26,900", "link": "https://amzn.in/d/xyz123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹26,000", "discount": "12%", "delivery": "₹50", "total": "₹26,050", "link": "https://www.flipkart.com/apple-airpods-pro/p/abc456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹25,999", "discount": "11%", "delivery": "₹50", "total": "₹26,049", "link": "https://www.meesho.com/apple-airpods-pro/p/xyz789" },
           { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }
           ]
    },
    {
        id: "kindle-paperwhite",
        "name": "Kindle Paperwhite",
        "image": "https://m.media-amazon.com/images/I/61DM0Jw8baL._SX679_.jpg",
        "features": "6.8-inch Display, Adjustable Warm Light, Waterproof, 10 Weeks Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹12,999", "discount": "8%", "delivery": "₹0", "total": "₹12,999", "link": "https://amzn.in/d/uvw456" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹12,500", "discount": "10%", "delivery": "₹50", "total": "₹12,550", "link": "https://www.flipkart.com/kindle-paperwhite/p/def789" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹12,200", "discount": "6%", "delivery": "₹50", "total": "₹12,250", "link": "https://www.meesho.com/kindle-paperwhite/p/uvw123" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" } 
        ]
    },
    {
        id: "dyson-airwrap-styler",
        "name": "Dyson Airwrap Styler",
        "image": "https://m.media-amazon.com/images/I/81csN4f8oBL._SX679_.jpg",
        "features": "Multi-Styler with Coanda Technology, Quick Drying, Easy to Use.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹44,900", "discount": "5%", "delivery": "₹0", "total": "₹44,900", "link": "https://amzn.in/d/abc123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹44,000", "discount": "6%", "delivery": "₹50", "total": "₹44,050", "link": "https://www.flipkart.com/dyson-airwrap-styler/p/ghi123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹43,500", "discount": "4%", "delivery": "₹50", "total": "₹43,550", "link": "https://www.meesho.com/dyson-airwrap-styler/p/abc456" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "canon-eos-r50",
        "name": "Canon EOS R50",
        "image": "https://m.media-amazon.com/images/I/81-udnRuGrL._SX679_.jpg",
        "features": "24.2MP APS-C Sensor, 4K Video, Dual Pixel CMOS AF II, Lightweight Design.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹92,999", "discount": "8%", "delivery": "₹0", "total": "₹92,999", "link": "https://amzn.in/d/uvw123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹91,500", "discount": "10%", "delivery": "₹50", "total": "₹91,550", "link": "https://www.flipkart.com/canon-eos-r50/p/def123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹91,000", "discount": "9%", "delivery": "₹50", "total": "₹91,050", "link": "https://www.meesho.com/canon-eos-r50/p/uvw678" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "bose-soundlink-flex",
        "name": "Bose SoundLink Flex",
        "image": "https://m.media-amazon.com/images/I/81FGlTw+gNL._SX679_.jpg",
        "features": "Portable Bluetooth Speaker, Waterproof, Long Battery Life, Built-in Microphone.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹15,999", "discount": "9%", "delivery": "₹0", "total": "₹15,999", "link": "https://amzn.in/d/ghi456" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹15,500", "discount": "12%", "delivery": "₹50", "total": "₹15,550", "link": "https://www.flipkart.com/bose-soundlink-flex/p/uvw789" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹15,200", "discount": "7%", "delivery": "₹50", "total": "₹15,250", "link": "https://www.meesho.com/bose-soundlink-flex/p/jkl890" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "xbox-series-s",
        "name": "Xbox Series S",
        "image": "https://m.media-amazon.com/images/I/71CV2iv2RDL._SX679_.jpg",
        "features": "Next-Gen Gaming, 1440p Resolution, 120 FPS, 512GB SSD, All-Digital Console.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹27,990", "discount": "5%", "delivery": "₹0", "total": "₹27,990", "link": "https://amzn.in/d/xyz123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹28,490", "discount": "8%", "delivery": "₹50", "total": "₹28,540", "link": "https://www.flipkart.com/xbox-series-s/p/abc456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹27,999", "discount": "6%", "delivery": "₹0", "total": "₹27,999", "link": "https://www.meesho.com/xbox-series-s/p/qwert" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "gopro-hero-11-black",
        "name": "GoPro Hero 11 Black",
        "image": "https://m.media-amazon.com/images/I/81QqK13n4TL._SX679_.jpg",
        "features": "5.3K Video, 23MP Photos, HyperSmooth 5.0, Waterproof, Front LCD Screen.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹53,000", "discount": "7%", "delivery": "₹0", "total": "₹53,000", "link": "https://amzn.in/d/uvw123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹54,999", "discount": "10%", "delivery": "₹50", "total": "₹55,049", "link": "https://www.flipkart.com/gopro-hero-11-black/p/def123" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹52,999", "discount": "5%", "delivery": "₹0", "total": "₹52,999", "link": "https://www.meesho.com/gopro-hero-11-black/p/xyz789" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "gaming-laptop-rtx-3070",
        "name": "Gaming Laptop with RTX 3070 GPU",
        "image": "https://m.media-amazon.com/images/I/91pVd5Iu4vL._SX679_.jpg",
        "features": "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch FHD Display, NVIDIA GeForce RTX 3070.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,30,000", "discount": "12%", "delivery": "₹0", "total": "₹1,30,000", "link": "https://amzn.in/d/ijk123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,25,000", "discount": "10%", "delivery": "₹100", "total": "₹1,25,100", "link": "https://www.flipkart.com/gaming-laptop-rtx-3070/p/ghi456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,29,999", "discount": "7%", "delivery": "₹0", "total": "₹1,29,999", "link": "https://www.meesho.com/gaming-laptop-rtx-3070/p/abc123" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "jbl-charge-5",
        "name": "JBL Charge 5",
        "image": "https://m.media-amazon.com/images/I/61qZUJdH6RL._SX679_.jpg",
        "features": "Portable Bluetooth Speaker, 30 Hours Playtime, IP67 Waterproof, JBL PartyBoost.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹13,999", "discount": "8%", "delivery": "₹0", "total": "₹13,999", "link": "https://amzn.in/d/lmn123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹14,500", "discount": "10%", "delivery": "₹50", "total": "₹14,550", "link": "https://www.flipkart.com/jbl-charge-5/p/abc789" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹13,500", "discount": "7%", "delivery": "₹0", "total": "₹13,500", "link": "https://www.meesho.com/jbl-charge-5/p/xyz456" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "apple-macbook-air-m2",
        "name": "Apple MacBook Air M2",
        "image": "https://m.media-amazon.com/images/I/81jkJbzFUEL._SX679_.jpg",
        "features": "Apple M2 Chip, 13.6-inch Retina Display, 16GB RAM, 512GB SSD, 18 Hours Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,19,900", "discount": "5%", "delivery": "₹0", "total": "₹1,19,900", "link": "https://amzn.in/d/opq123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,20,000", "discount": "6%", "delivery": "₹50", "total": "₹1,20,050", "link": "https://www.flipkart.com/apple-macbook-air-m2/p/uvw456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,18,000", "discount": "7%", "delivery": "₹0", "total": "₹1,18,000", "link": "https://www.meesho.com/apple-macbook-air-m2/p/xyz789" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "boat-rockerz-450-pro",
        "name": "boAt Rockerz 450 Pro",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Upto 70 Hours Playback, 40mm Drivers",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹2,200", "discount": "10%", "delivery": "₹0", "total": "₹2,200", "link": "https://www.amazon.in/boat-rockerz-450-pro/p/dummy-link1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,235", "discount": "11%", "delivery": "₹0", "total": "₹2,235", "link": "https://www.flipkart.com/boat-rockerz-450-pro/p/dummy-link1" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹2,180", "discount": "12%", "delivery": "₹0", "total": "₹2,180", "link": "https://www.meesho.com/boat-rockerz-450-pro/p/dummy-link1" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,250", "discount": "9%", "delivery": "₹50", "total": "₹2,300", "link": "https://www.myntra.com/boat-rockerz-450-pro/p/dummy-link1" }
        ]
    },
    {
        id: "sony-wh-ch520",
        "name": "Sony WH-CH520",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "50 Hours Playtime, DSEE Upscale",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹4,250", "discount": "7%", "delivery": "₹0", "total": "₹4,250", "link": "https://www.amazon.in/sony-wh-ch520/p/dummy-link2" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹4,269", "discount": "7%", "delivery": "₹0", "total": "₹4,269", "link": "https://www.flipkart.com/sony-wh-ch520/p/dummy-link2" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹4,180", "discount": "8%", "delivery": "₹0", "total": "₹4,180", "link": "https://www.meesho.com/sony-wh-ch520/p/dummy-link2" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹4,300", "discount": "5%", "delivery": "₹50", "total": "₹4,350", "link": "https://www.myntra.com/sony-wh-ch520/p/dummy-link2" }
        ]
    },
    {
        id: "jbl-tune-520-bt",
        "name": "JBL Tune 520 BT",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Pure Bass, Multi-Connect",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹3,999", "discount": "15%", "delivery": "₹0", "total": "₹3,999", "link": "https://www.amazon.in/jbl-tune-520-bt/p/dummy-link3" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹3,950", "discount": "16%", "delivery": "₹0", "total": "₹3,950", "link": "https://www.flipkart.com/jbl-tune-520-bt/p/dummy-link3" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹3,900", "discount": "17%", "delivery": "₹0", "total": "₹3,900", "link": "https://www.meesho.com/jbl-tune-520-bt/p/dummy-link3" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹4,000", "discount": "14%", "delivery": "₹50", "total": "₹4,050", "link": "https://www.myntra.com/jbl-tune-520-bt/p/dummy-link3" }
        ]
    },
    {
        id: "noise-buds-vs102",
        "name": "Noise Buds VS102",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "50 Hours Playtime, IPX5 Water Resistance",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,099", "discount": "45%", "delivery": "₹0", "total": "₹1,099", "link": "https://www.amazon.in/noise-buds-vs102/p/dummy-link4" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,149", "discount": "40%", "delivery": "₹0", "total": "₹1,149", "link": "https://www.flipkart.com/noise-buds-vs102/p/dummy-link4" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,099", "discount": "45%", "delivery": "₹0", "total": "₹1,099", "link": "https://www.meesho.com/noise-buds-vs102/p/dummy-link4" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,200", "discount": "38%", "delivery": "₹50", "total": "₹1,250", "link": "https://www.myntra.com/noise-buds-vs102/p/dummy-link4" }
        ]
    },
    {
        id: "boult-astra",
        "name": "Boult Astra",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Quad Mic ENC, 48 Hours Battery, Low Latency",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,499", "discount": "57%", "delivery": "₹0", "total": "₹1,499", "link": "https://www.amazon.in/boult-astra/p/dummy-link5" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,550", "discount": "55%", "delivery": "₹0", "total": "₹1,550", "link": "https://www.flipkart.com/boult-astra/p/dummy-link5" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,480", "discount": "58%", "delivery": "₹0", "total": "₹1,480", "link": "https://www.meesho.com/boult-astra/p/dummy-link5" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,600", "discount": "54%", "delivery": "₹50", "total": "₹1,650", "link": "https://www.myntra.com/boult-astra/p/dummy-link5" }
        ]
    },
    {
        id: "oneplus-bullets-wireless-z2",
        "name": "OnePlus Bullets Wireless Z2",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Fast Charging, High Bass",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,799", "discount": "30%", "delivery": "₹0", "total": "₹1,799", "link": "https://www.amazon.in/oneplus-bullets-wireless-z2/p/dummy-link6" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,850", "discount": "28%", "delivery": "₹0", "total": "₹1,850", "link": "https://www.flipkart.com/oneplus-bullets-wireless-z2/p/dummy-link6" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,780", "discount": "32%", "delivery": "₹0", "total": "₹1,780", "link": "https://www.meesho.com/oneplus-bullets-wireless-z2/p/dummy-link6" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,850", "discount": "28%", "delivery": "₹50", "total": "₹1,900", "link": "https://www.myntra.com/oneplus-bullets-wireless-z2/p/dummy-link6" }
        ]
    },
    {
        id: "cmf-by-nothing-buds",
        "name": "CMF by Nothing Buds",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "42dB ANC, Ultra Bass Technology",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,999", "discount": "33%", "delivery": "₹0", "total": "₹1,999", "link": "https://www.amazon.in/cmf-by-nothing-buds/p/dummy-link7" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,050", "discount": "31%", "delivery": "₹0", "total": "₹2,050", "link": "https://www.flipkart.com/cmf-by-nothing-buds/p/dummy-link7" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,950", "discount": "35%", "delivery": "₹0", "total": "₹1,950", "link": "https://www.meesho.com/cmf-by-nothing-buds/p/dummy-link7" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,100", "discount": "30%", "delivery": "₹50", "total": "₹2,150", "link": "https://www.myntra.com/cmf-by-nothing-buds/p/dummy-link7" }
        ]
    },
    {
        id: "boat-airdopes-161",
        "name": "boAt Airdopes 161",
        "image": "https://m.media-amazon.com/images/I/71fV36WVNsL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "ASAP Charge, 40 Hours Playback",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹899", "discount": "63%", "delivery": "₹0", "total": "₹899", "link": "https://www.amazon.in/boat-airdopes-161/p/dummy-link8" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹950", "discount": "60%", "delivery": "₹0", "total": "₹950", "link": "https://www.flipkart.com/boat-airdopes-161/p/dummy-link8" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹899", "discount": "63%", "delivery": "₹0", "total": "₹899", "link": "https://www.meesho.com/boat-airdopes-161/p/dummy-link8" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,000", "discount": "59%", "delivery": "₹50", "total": "₹1,050", "link": "https://www.myntra.com/boat-airdopes-161/p/dummy-link8" }
        ]
    },
    {
        id: "triggr-trinity-1",
        name: "Triggr Trinity 1",
        image: "https://m.media-amazon.com/images/I/51-JzrnCZKL._SX679_.jpg",
        features: "Wireless Over-Ear Headphones, Noise Cancellation, Bluetooth 5.4, 50 Hours Playback, USB Type-C Charging.",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹999", discount: "0%", delivery: "₹40", total: "₹1,039", link: "https://www.amazon.in/dp/example" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹999", discount: "0%", delivery: "₹50", total: "₹1,049", link: "https://www.flipkart.com/triggr-trinity-1/p/example" },
            { store: "Meesho", logo: "meesho-logo.png", price: "₹1,099", discount: "0%", delivery: "₹0", total: "₹1,099", link: "https://www.meesho.com/triggr-trinity-1/p/example" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹1,199", discount: "10%", delivery: "₹50", total: "₹1,149", link: "https://www.myntra.com/triggr-trinity-1/p/example" }
        ]
    },
    {
        id: "realme-techlife-studio-h1",
        name: "realme TechLife Studio H1",
        image: "https://m.media-amazon.com/images/I/example.jpg",
        features: "Studio-Grade Sound, Bluetooth 5.3, Noise Cancellation, Over-Ear Design, USB-C Fast Charging, 45 Hours Battery.",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹2,499", discount: "5%", delivery: "₹40", total: "₹2,539", link: "https://www.amazon.in/dp/example" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹2,450", discount: "4%", delivery: "₹50", total: "₹2,500", link: "https://www.flipkart.com/realme-techlife-studio-h1/p/example" },
            { store: "Meesho", logo: "meesho-logo.png", price: "₹2,400", discount: "3%", delivery: "₹0", total: "₹2,400", link: "https://www.meesho.com/realme-techlife-studio-h1/p/example" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹2,499", discount: "5%", delivery: "₹50", total: "₹2,549", link: "https://www.myntra.com/realme-techlife-studio-h1/p/example" }
        ]
    },
    {
        "id": "apple-mac-mini-m4",
        "name": "Apple Mac Mini M4",
        "image": "https://m.media-amazon.com/images/I/81dJ6z3yQ-L._SX679_.jpg",
        "features": "Compact design, Apple M4 chip, 16GB RAM, 512GB SSD, macOS Sequoia.",
        "webstores": [
            { "store": "Amazon", "price": "₹49,999", "discount": "5%", "delivery": "₹40", "total": "₹50,039", "link": "https://www.amazon.in/dp/example" },
            { "store": "Flipkart", "price": "₹50,499", "discount": "4%", "delivery": "₹50", "total": "₹50,549", "link": "https://www.flipkart.com/apple-mac-mini-m4/p/example" },
            { "store": "Meesho", "price": "₹48,999", "discount": "3%", "delivery": "₹0", "total": "₹48,999", "link": "https://www.meesho.com/apple-mac-mini-m4/p/example" },
            { "store": "Myntra", "price": "₹51,499", "discount": "2%", "delivery": "₹50", "total": "₹51,549", "link": "https://www.myntra.com/apple-mac-mini-m4/p/example" }
        ]
    },
    {
        "id": "hp-envy-desktop-te01",
        "name": "HP Envy Desktop TE01",
        "image": "https://m.media-amazon.com/images/I/81tDaMUsXQL._SX679_.jpg",
        "features": "Intel Core i7, 16GB RAM, 1TB HDD + 256GB SSD, NVIDIA GTX 1650.",
        "webstores": [
            { "store": "Amazon", "price": "₹72,999", "discount": "8%", "delivery": "₹50", "total": "₹73,049", "link": "https://www.amazon.in/dp/example" },
            { "store": "Flipkart", "price": "₹74,499", "discount": "7%", "delivery": "₹50", "total": "₹74,549", "link": "https://www.flipkart.com/hp-envy-desktop-te01/p/example" },
            { "store": "Meesho", "price": "₹71,499", "discount": "6%", "delivery": "₹0", "total": "₹71,499", "link": "https://www.meesho.com/hp-envy-desktop-te01/p/example" },
            { "store": "Myntra", "price": "₹75,499", "discount": "5%", "delivery": "₹50", "total": "₹75,549", "link": "https://www.myntra.com/hp-envy-desktop-te01/p/example" }
        ]
    },
    {
        "id": "dell-xps-desktop",
        "name": "Dell XPS Desktop",
        "image": "https://m.media-amazon.com/images/I/81gtENvESFL._SX679_.jpg",
        "features": "12th Gen Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA RTX 3060 Ti.",
        "webstores": [
            { "store": "Amazon", "price": "₹1,24,999", "discount": "6%", "delivery": "₹40", "total": "₹1,25,039", "link": "https://www.amazon.in/dp/example" },
            { "store": "Flipkart", "price": "₹1,25,999", "discount": "5%", "delivery": "₹50", "total": "₹1,26,049", "link": "https://www.flipkart.com/dell-xps-desktop/p/example" },
            { "store": "Meesho", "price": "₹1,22,999", "discount": "4%", "delivery": "₹0", "total": "₹1,22,999", "link": "https://www.meesho.com/dell-xps-desktop/p/example" },
            { "store": "Myntra", "price": "₹1,26,499", "discount": "3%", "delivery": "₹50", "total": "₹1,26,549", "link": "https://www.myntra.com/dell-xps-desktop/p/example" }
        ]
    },
    {
        "id": "lenovo-ideacentre-5",
        "name": "Lenovo IdeaCentre 5",
        "image": "https://m.media-amazon.com/images/I/81Sxq7o1UYL._SX679_.jpg",
        "features": "AMD Ryzen 7, 16GB RAM, 512GB SSD, Radeon Graphics.",
        "webstores": [
            { "store": "Amazon", "price": "₹64,999", "discount": "10%", "delivery": "₹50", "total": "₹65,049", "link": "https://www.amazon.in/dp/example" },
            { "store": "Flipkart", "price": "₹66,499", "discount": "8%", "delivery": "₹50", "total": "₹66,549", "link": "https://www.flipkart.com/lenovo-ideacentre-5/p/example" },
            { "store": "Meesho", "price": "₹63,999", "discount": "7%", "delivery": "₹0", "total": "₹63,999", "link": "https://www.meesho.com/lenovo-ideacentre-5/p/example" },
            { "store": "Myntra", "price": "₹67,499", "discount": "6%", "delivery": "₹50", "total": "₹67,549", "link": "https://www.myntra.com/lenovo-ideacentre-5/p/example" }
        ]
    },
];

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// Find product data
const product = products.find(p => p.id === productId);

if (product) {
    document.querySelector('.product-image img').src = product.image;
    document.querySelector('.product-details h1').textContent = product.name;
    document.querySelector('.product-details .product-features').textContent = product.features;

    const tableBody = document.querySelector('.product-table tbody');
    tableBody.innerHTML = product.webstores.map(store => `
        <tr>
            <td><img src="${getStoreLogo(store.store)}" class="store-logo" alt="${store.store} logo">${store.store}</td>
            <td>${store.price}</td>
            <td>${store.discount}</td>
            <td>${store.delivery}</td>
            <td>${store.total}</td>
            <td><a href="${store.link}" target="_blank">Visit</a></td>
        </tr>
    `).join('');
} else {
    document.querySelector('main').innerHTML = "<p>Product not found.</p>";
}

function getStoreLogo(storeName) {
    const logos = {
        'Amazon': 'amazon-logo.png',
        'Flipkart': 'flipkart-logo.png',
        'Meesho': 'meesho-logo.png',
        'Myntra': 'myntra-logo.png'
    };
    return logos[storeName] || '';  // Return logo URL or empty if not found
}
