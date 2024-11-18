
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
        image: "https://m.media-amazon.com/images/I/61NGnpjoRDL._SX522_.jpg",
        features: "10.2-inch Retina Display, A13 Bionic Chip, 64GB Storage, Wi-Fi Only.",
        webstores: [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹29,900", "discount": "5%", "delivery": "₹0", "total": "₹29,900", link: "https://amzn.in/d/85cU0tx"},
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹28,999", "discount": "6%", "delivery": "₹50", "total": "₹29,049", "link": "https://www.flipkart.com/apple-ipad-9th-gen-64-gb-rom-10-2-inch-wi-fi-only-space-grey/p/itmd7d2c4840fa04" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹30,200", "discount": "4%", "delivery": "₹0", "total": "₹30,200", "link": "https://www.meesho.com/apple-ipad-102-2019-ipad-102-2020-ipad-102-2021-9th-generation-tablet-360-degree-rotating-standy-flip/p/1nayat?srsltid=AfmBOoppQRG2RTsQ7Lp2Ls3TEJ3w6iknIwMeOqxku6XgFYP1TF_KLRR-" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹31,000", "discount": "3%", "delivery": "₹50", "total": "₹31,050", "link": "https://www.myntra.com/apple-ipad-10.2/p/ghi789" }
        ]
    },
    {
        id: "fitbit-versa-4",
        "name": "Fitbit Versa 4",
        "image": "https://m.media-amazon.com/images/I/61Uicbb64GL._SX522_.jpg",
        "features": "24/7 Heart Rate, Fitness & Sleep Tracking, Built-in GPS, Water Resistant.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹19,999", "discount": "10%", "delivery": "₹0", "total": "₹19,999", "link": "https://amzn.in/d/3fN2eJG" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹19,500", "discount": "12%", "delivery": "₹50", "total": "₹19,550", "link": "https://www.flipkart.com/fitbit-versa-4-fitness-watch-6-month-membership-smartwatch/p/itm31b5a4e52432d" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹20,000", "discount": "8%", "delivery": "₹0", "total": "₹20,000", "link": "https://www.meesho.com/fitbit-versa-4-fitness-watch-pink-sand-copper-rose-aluminium-with-6-month-premium-membership/p/3iw7n6?srsltid=AfmBOooF6VJnQebsj7TskiOnSCskQy4WAMO91KuN70Geke-lK3rioG4w" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹20,500", "discount": "5%", "delivery": "₹50", "total": "₹20,550", "link": "https://www.myntra.com/smart-watches/fitbit/fitbit-versa-4-fitness-watch-with-daily-readiness-score--call--google-asst/20414998/buy" }
        ]
    },
    {
        id: "ninja-air-fryer-pro",
        "name": "Ninja Air Fryer Pro",
        "image": "https://m.media-amazon.com/images/I/71QwoGmcfUL._SX679_.jpg",
        "features": "5.5-Quart Capacity, Multi-Functional Cooking, 75% Less Fat, Easy Clean Basket.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹15,499", "discount": "7%", "delivery": "₹0", "total": "₹15,499", "link": "https://www.amazon.in/Ninja-AF141-Capacity-Dehydrate-Technology/dp/B0CSZ7WBYW" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹15,000", "discount": "9%", "delivery": "₹50", "total": "₹15,050", "link": "https://www.flipkart.com/ninja-smart-wifi-air-fryer-100-recipes-digital-touchscreen-13-cooking-functions-frying-roasting-keep-warm-preheat-shake-remind-works-alexa-google-assistant" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹15,800", "discount": "6%", "delivery": "₹0", "total": "₹15,800", "link": "https://www.meesho.com/ninja-air-fryer-pro/p/xyz789" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹16,000", "discount": "4%", "delivery": "₹50", "total": "₹16,050", "link": "https://www.myntra.com/air-fryer/glen/glen-sa-3045-black--silver-toned-800-watt-mini-air-fryer--2-l/30233320/buy" }
        ]
    },
    {
        id: "irobot-roomba-i5-plus",
        "name": "iRobot Roomba i5+",
        "image": "https://m.media-amazon.com/images/I/813GaWpuEQL._AC_SX679_.jpg",
        "features": "Self-Emptying Robot Vacuum, Wi-Fi Connected, Cleans Dirt, Pet Hair.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹54,999", "discount": "5%", "delivery": "₹0", "total": "₹54,999", "link": "amazon https://a.co/d/c6KRYtg" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹54,499", "discount": "6%", "delivery": "₹50", "total": "₹54,549", "link": "https://www.flipkart.com/irobot-roomba-combo-i5-i5178-wet-dry-vacuum-cleaner-wifi-connectivity-google-assistant-alexa/p/itmcca476ceb9091?pid=VCLGTEVJVHMQR5MQ&lid=LSTVCLGTEVJVHMQR5MQZZOQEO&marketplace=FLIPKART&cmpid=content_vacuum-cleaner_8965229628_gmc" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹55,000", "discount": "4%", "delivery": "₹0", "total": "₹55,000", "link": "https://www.meesho.com/irobot-roomba-i5-plus/p/def456" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹56,000", "discount": "3%", "delivery": "₹50", "total": "₹56,050", "link": "https://www.myntra.com/irobot-roomba-i5-plus/p/ghi789" }
        ]
    },
    {
        id: "samsung-galaxy-buds-2-pro",
        "name": "Samsung Galaxy Buds 2 Pro",
        "image": "https://m.media-amazon.com/images/I/61KVX-MbIUL._SX522_.jpg",
        "features": "Noise Cancelling, 360 Audio, Water Resistant, Up to 8 Hours Playtime.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹16,499", "discount": "8%", "delivery": "₹0", "total": "₹16,499", "link": "https://amzn.in/d/6Srks8N" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹16,000", "discount": "10%", "delivery": "₹50", "total": "₹16,050", "link": "https://www.flipkart.com/samsung-galaxy-buds2-pro-sm-r510nzwains-bluetooth-headset/p/itm72ba67178d40c" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹16,800", "discount": "6%", "delivery": "₹0", "total": "₹16,800", "link": "https://www.meesho.com/samsung-galaxy-buds2-pro-bluetooth-truly-wireless-in-ear-earbuds-with-noise-cancellation-bora-purple-with-mic/p/4k8zxd?srsltid=AfmBOop36V0y18EylOmgqhZ0v45yr4HRVttb2zp335xFqtDo7G6KBFy" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹17,200", "discount": "5%", "delivery": "₹50", "total": "₹17,250", "link": "https://www.myntra.com/headphones/cmf+by+nothing/cmf-by-nothing-buds-pro-2-with-50-db-anc-dual-drivers-smart-dial--spatial-audio-earbuds/30119409/buy" }
        ]
    },
    {
        id: "lg-ultragear-gaming-monitor",
        "name": "LG Ultragear Gaming Monitor",
        "image": "https://m.media-amazon.com/images/I/41cdb870LEL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "27-inch QHD, 1ms Response Time, 165Hz Refresh Rate, NVIDIA G-Sync Compatible.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹34,999", "discount": "10%", "delivery": "₹0", "total": "₹34,999", "link": "https://amzn.in/d/4Oe8jBB" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹34,500", "discount": "12%", "delivery": "₹50", "total": "₹34,550", "link": "https://www.flipkart.com/pelonis-as823e4j-s-23-l-convection-microwave-oven/p/itme7mye5tnyk3n9?pid=MONH2GQUAFJHZUFF" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹35,200", "discount": "9%", "delivery": "₹0", "total": "₹35,200", "link": "https://www.meesho.com/lg-ultragear-gaming-monitor/p/def123" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹35,800", "discount": "7%", "delivery": "₹50", "total": "₹35,850", "link": "https://www.myntra.com/lg-ultragear-gaming-monitor/p/ghi456" }
        ]
    },
    {
        id: "blink-outdoor-camera",
        "name": "Blink Outdoor Camera",
        "image": "https://m.media-amazon.com/images/I/61jUUHua5nL._SY450_.jpg",
        "features": "Wireless, Weather Resistant, Motion Detection, 2-Year Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹8,499", "discount": "15%", "delivery": "₹0", "total": "₹8,499", "link": "https://amzn.in/d/7UbBept" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹8,000", "discount": "18%", "delivery": "₹50", "total": "₹8,050", "link": "https://www.flipkart.com/blink-security-camera/p/itm99071ab430d8f" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹8,700", "discount": "12%", "delivery": "₹0", "total": "₹8,700", "link": "https://www.meesho.com/blink-outdoor-camera/p/ghi123" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹9,000", "discount": "10%", "delivery": "₹50", "total": "₹9,050", "link": "https://www.myntra.com/blink-outdoor-camera/p/uvw789" }
        ]
    },
    {
        id: "ninja-creami-ice-cream-maker",
        "name": "Ninja Creami Ice Cream Maker",
        "image": "https://m.media-amazon.com/images/I/71O-PzOILrL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "features": "7 Programs, Frozen Treats, Sorbet, Smoothie Bowls, Easy to Clean.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹18,499", "discount": "7%", "delivery": "₹0", "total": "₹18,499", "link": "https://a.co/d/cmeLEhL" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹18,000", "discount": "10%", "delivery": "₹50", "total": "₹18,050", "link": "https://www.flipkart.com/ninja-creami-ice-cream-maker/p/xyz456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹18,800", "discount": "5%", "delivery": "₹0", "total": "₹18,800", "link": "https://www.meesho.com/ninja-creami-ice-cream-maker/p/abc789" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹19,200", "discount": "4%", "delivery": "₹50", "total": "₹19,250", "link": "https://www.myntra.com/ninja-creami-ice-cream-maker/p/def123" }
        ]
    },
    {
        id: "apple-airpods-pro",
        name: "Apple AirPods Pro",
        image: "https://m.media-amazon.com/images/I/31gtbqaQ1nL._SY445_SX342_QL70_FMwebp_.jpg",
        features: "Active Noise Cancellation, Transparency Mode, Spatial Audio, Water and Sweat Resistance.",
        webstores: [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹26,900", "discount": "10%", "delivery": "₹0", "total": "₹26,900", "link": "https://amzn.in/d/0LURcWB" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹26,000", "discount": "12%", "delivery": "₹50", "total": "₹26,050", "link": "https://www.flipkart.com/apple-airpods-pro-magsafe-charging-case-bluetooth-headset/p/itm0847811966368" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹25,999", "discount": "11%", "delivery": "₹50", "total": "₹26,049", "link": "https://www.meesho.com/airpod-pro-2-2nd-generation-with-ios-handset-white-true-wireless-with-speaker-free-data-cable/p/72rsyf" },
           { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/headphones/apple/apple-airpods-pro-2nd-generation-with-magsafe-case-usb-c-anc--spatial-audio/25565108/buy" }
           ]
    },
    {
        id: "kindle-paperwhite",
        "name": "Kindle Paperwhite",
        "image": "https://m.media-amazon.com/images/I/5183wSEJFLL._SY300_SX300_.jpg",
        "features": "6.8-inch Display, Adjustable Warm Light, Waterproof, 10 Weeks Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹12,999", "discount": "8%", "delivery": "₹0", "total": "₹12,999", "link": "https://amzn.in/d/5jpRA77" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹12,500", "discount": "10%", "delivery": "₹50", "total": "₹12,550", "link": "https://www.flipkart.com/kindle-paperwhite-3rd-wifi-white-e-reader/p/itmemv7rw4apvfgu" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹12,200", "discount": "6%", "delivery": "₹50", "total": "₹12,250", "link": "https://www.meesho.com/kindle-paperwhite-leather-cover-10th-genred/p/33ggww?srsltid=AfmBOor2bZBWYMNEcWOged4Zhdw2FA6NJ72QDP977wLM9iLkRqbqZN3h" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" } 
        ]
    },
    {
        id: "dyson-airwrap-styler",
        "name": "Dyson Airwrap Styler",
        "image": "https://m.media-amazon.com/images/I/61uM6EQMzML._SX679_.jpg",
        "features": "Multi-Styler with Coanda Technology, Quick Drying, Easy to Use.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹44,900", "discount": "5%", "delivery": "₹0", "total": "₹44,900", "link": "https://amzn.in/d/fSHIlNT" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹44,000", "discount": "6%", "delivery": "₹50", "total": "₹44,050", "link": "https://www.flipkart.com/dyson-airwrap-hair-styler-complete-nickel-fuchsia/p/itmb89733036afcf" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹43,500", "discount": "4%", "delivery": "₹50", "total": "₹43,550", "link": "https://www.meesho.com/dyson-airwrap-styler/p/abc456" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/straighteners/dyson/dyson-airwrap-multi-styler-complete-long---prussian-blue-copper/19737772/buy" }        ]
    },
    {
        id: "canon-eos-r50",
        "name": "Canon EOS R50",
        "image": "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
        "features": "24.2MP APS-C Sensor, 4K Video, Dual Pixel CMOS AF II, Lightweight Design.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹92,999", "discount": "8%", "delivery": "₹0", "total": "₹92,999", "link": "https://amzn.in/d/3xoDZw3" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹91,500", "discount": "10%", "delivery": "₹50", "total": "₹91,550", "link": "https://www.flipkart.com/canon-eos-r50-mirrorless-camera-body-rf-s-18-45-mm-f-4-5-6-3-stm/p/itm11c9ef1da0ba0" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹91,000", "discount": "9%", "delivery": "₹50", "total": "₹91,050", "link": "https://www.meesho.com/canon-eos-r50/p/uvw678" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/cameras/fujifilm/fujifilm-black-instax-square-sq40-/28234278/buy" }        ]
    },
    {
        id: "bose-soundlink-flex",
        "name": "Bose SoundLink Flex",
        "image": "https://m.media-amazon.com/images/I/71eLvseXOmL._SX522_.jpg",
        "features": "Portable Bluetooth Speaker, Waterproof, Long Battery Life, Built-in Microphone.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹15,999", "discount": "9%", "delivery": "₹0", "total": "₹15,999", "link": "https://amzn.in/d/gILX4NM" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹15,500", "discount": "12%", "delivery": "₹50", "total": "₹15,550", "link": "https://www.flipkart.com/bose-soundlink-flex-bluetooth-party-speaker/p/itmf556a019a11b8" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹15,200", "discount": "7%", "delivery": "₹50", "total": "₹15,250", "link": "https://www.meesho.com/bose-soundlink-flex/p/jkl890" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/speakers/bose/bose-soundlink-flex-bluetooth-portable-waterproof-speaker-for-outdoor-travel/25921294/buy" }        ]
    },
    {
        id: "xbox-series-s",
        "name": "Xbox Series S",
        "image": "https://m.media-amazon.com/images/I/71NBQ2a52CL._SX522_.jpg",
        "features": "Next-Gen Gaming, 1440p Resolution, 120 FPS, 512GB SSD, All-Digital Console.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹27,990", "discount": "5%", "delivery": "₹0", "total": "₹27,990", "link": "https://www.amazon.in/Xbox-Series-S/dp/B08J89D6BW?th=1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹28,490", "discount": "8%", "delivery": "₹50", "total": "₹28,540", "link": "https://www.flipkart.com/microsoft-xbox-series-s-512-gb/p/itm13c51f9047da8" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹27,999", "discount": "6%", "delivery": "₹0", "total": "₹27,999", "link": "https://www.meesho.com/xbox-series-s/p/qwert" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "gopro-hero-11-black",
        "name": "GoPro Hero 11 Black",
        "image": "https://m.media-amazon.com/images/I/51JwcRWiefL._SX679_.jpg",
        "features": "5.3K Video, 23MP Photos, HyperSmooth 5.0, Waterproof, Front LCD Screen.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹53,000", "discount": "7%", "delivery": "₹0", "total": "₹53,000", "link": "https://amzn.in/d/5CJRxVh" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹54,999", "discount": "10%", "delivery": "₹50", "total": "₹55,049", "link": "https://www.flipkart.com/gopro-hero11-waterproof-sports-action-camera/p/itm7f9efdd5d3c30" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹52,999", "discount": "5%", "delivery": "₹0", "total": "₹52,999", "link": "https://www.meesho.com/gopro-action-camera-go-pro-actioncamera-4k-16mp-wifi-waterproof-action-camera-dv-camcorder-sports-and-action-camera-black-16-mp/p/3twlo2?srsltid=AfmBOooVqUWoI4Luej5xzBB60kWruB3Qmu8X04-etlsXySkJyMjcnVGa" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/cameras/gopro/gopro-hero11-waterproof-action-camera/28024148/buy" }        ]
    },
    {
        id: "gaming-laptop-rtx-3070",
        "name": "Gaming Laptop with RTX 3070 GPU",
        "image": "https://m.media-amazon.com/images/I/61CR2Rf9v7L._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
        "features": "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch FHD Display, NVIDIA GeForce RTX 3070.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,30,000", "discount": "12%", "delivery": "₹0", "total": "₹1,30,000", "link": "https://amzn.in/d/2uattT6" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,25,000", "discount": "10%", "delivery": "₹100", "total": "₹1,25,100", "link": "https://www.flipkart.com/gaming-laptop-rtx-3070/p/ghi456" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,29,999", "discount": "7%", "delivery": "₹0", "total": "₹1,29,999", "link": "https://www.meesho.com/gaming-laptop-rtx-3070/p/abc123" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/redmi-note-12/p/67890xyz" }        ]
    },
    {
        id: "jbl-charge-5",
        "name": "JBL Charge 5",
        "image": "https://m.media-amazon.com/images/I/719nhErutkL._SX522_.jpg",
        "features": "Portable Bluetooth Speaker, 30 Hours Playtime, IP67 Waterproof, JBL PartyBoost.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹13,999", "discount": "8%", "delivery": "₹0", "total": "₹13,999", "link": "https://amzn.in/d/lmn123" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹14,500", "discount": "10%", "delivery": "₹50", "total": "₹14,550", "link": "https://www.flipkart.com/jbl-charge-5-20hr-playtime-ip67-rating-7500-mah-powerbank-portable-40-w-bluetooth-speaker/p/itmdd7bed70eff4e" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹13,500", "discount": "7%", "delivery": "₹0", "total": "₹13,500", "link": "https://www.meesho.com/jbl-charge-5/p/xyz456" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹16,200", discount: "8%", delivery: "₹50", total: "₹16,250", link: "https://www.myntra.com/speakers/jbl/jbl-black-charge-5-wireless-portable-bluetooth-speaker/16207762/buy" }        ]
    },
    {
        id: "apple-macbook-air-m2",
        "name": "Apple MacBook Air M2",
        "image": " https://m.media-amazon.com/images/I/71RDgtHsREL._SX679_.jpg",
        "features": "Apple M2 Chip, 13.6-inch Retina Display, 16GB RAM, 512GB SSD, 18 Hours Battery Life.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,19,900", "discount": "5%", "delivery": "₹0", "total": "₹1,19,900", "link": "https://amzn.in/d/4CpvNTS" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,20,000", "discount": "6%", "delivery": "₹50", "total": "₹1,20,050", "link": "https://www.flipkart.com/apple-2022-macbook-air-m2-8-gb-256-gb-ssd-mac-os-monterey-mly33hn-a/p/itm0946c05e6335c" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,18,000", "discount": "7%", "delivery": "₹0", "total": "₹1,18,000", "link": "https://www.meesho.com/laptop-cover-set-compatible-with-macbook-air-m2-2022-air-136-inch-a2681-sleek-black-transparent-laptop-case-protective-cover-with-keyboard-dustproof-skin-cover-screen-portector/p/70lyk4?srsltid=AfmBOoqMPEIQ6FUmgk6lbT6wRjGjErhkbjnROJotWaRVXM-ERQ0o3YjC" },
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
    {
        id: "fluo-m-running-shoes-for-men",
        "name": "Fluo M Running Shoes For Men",
        "image": "https://m.media-amazon.com/images/I/819WiwyBE+L._SX695_.jpg",
        "features": "High-quality running shoes for men.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,727", "discount": "42%", "delivery": "₹0", "total": "₹1,727", "link": "https://www.amazon.in/Adidas-Synthetic-CORERACER-Running-Shoes/dp/B08BG5B678/" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,840", "discount": "53% off", "delivery": "₹0", "total": "₹1,840", "link": "https://www.flipkart.com/adidas-fluo-m-running-shoes-men/p/itmfhwpda5mug3zk" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,750", "discount": "40% off", "delivery": "₹0", "total": "₹1,750", "link": "https://www.meesho.com/fluo-m-running-shoes-for-men/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,780", "discount": "42% off", "delivery": "₹0", "total": "₹1,780", "link": "https://www.myntra.com/fluo-m-running-shoes-for-men/p/abc" }
        ]
    },
    {
        "id": "jack-jones-mens-solid-classic-fit-tshirt",
        "name": "Jack & Jones Men's Solid Classic Fit T-Shirt",
        "image": "https://m.media-amazon.com/images/I/517TS9aCUeL._SY741_.jpg",
        "features": "Classic solid black T-shirt.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,104", "discount": "15%", "delivery": "₹0", "total": "₹1,104", "link": "https://www.amazon.in/Jack-Jones-Classic-12261193-Jet-Black_Jet/dp/B0CNKJ6JK4/" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,498", "discount": "0%", "delivery": "₹0", "total": "₹1,498", "link": "https://www.flipkart.com/jack-jones-solid-men-round-neck-black-t-shirt/p/itmb144ad0271f13" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,550", "discount": "20% off", "delivery": "₹0", "total": "₹1,550", "link": "https://www.meesho.com/jack-jones-solid-classic-fit-t-shirt/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,560", "discount": "15% off", "delivery": "₹0", "total": "₹1,560", "link": "https://www.myntra.com/jack-jones-mens-solid-classic-fit-tshirt/p/abc" }
        ]
    },
    {
        "id": "puma-boys-polyester-standard-length-jacket",
        "name": "Puma Boys Polyester Standard Length Jacket",
        "image": "https://m.media-amazon.com/images/I/51+b4u7hGEL._SX679_.jpg",
        "features": "Stylish varsity green jacket for boys.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,199", "discount": "70%", "delivery": "₹0", "total": "₹1,199", "link": "https://www.amazon.in/Puma-Boys-Line-67277424_Varsity-Green_128/dp/B0BFXG3XTG/" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,199", "discount": "70% off", "delivery": "₹0", "total": "₹1,199", "link": "https://www.flipkart.com/puma-full-sleeve-printed-boys-jacket/p/itm945f4cabb30b8" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,220", "discount": "68% off", "delivery": "₹0", "total": "₹1,220", "link": "https://www.meesho.com/puma-boys-polyester-standard-length-jacket/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,250", "discount": "70% off", "delivery": "₹0", "total": "₹1,250", "link": "https://www.myntra.com/puma-boys-polyester-standard-length-jacket/p/abc" }
        ]
    },
    {
        "id": "tommy-hilfiger-mens-polo-slim-fit-shirt",
        "name": "Tommy Hilfiger Men's Polo Slim Fit Shirt",
        "image": "https://m.media-amazon.com/images/I/51VNzteXvjL._SX679_.jpg",
        "features": "Premium slim fit polo shirt.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹3,599", "discount": "0%", "delivery": "₹0", "total": "₹3,599", "link": "https://www.amazon.in/Tommy-Hilfiger-White-Cotton-T-Shirt/dp/B0D8LCST2M/" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,099", "discount": "30% off", "delivery": "₹0", "total": "₹2,099", "link": "https://www.flipkart.com/tommy-hilfiger-solid-men-polo-neck-white-t-shirt/p/itm84da909028a7b" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹2,120", "discount": "25% off", "delivery": "₹0", "total": "₹2,120", "link": "https://www.meesho.com/tommy-hilfiger-mens-polo-slim-fit-shirt/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,150", "discount": "25% off", "delivery": "₹0", "total": "₹2,150", "link": "https://www.myntra.com/tommy-hilfiger-mens-polo-slim-fit-shirt/p/abc" }
        ]
    },

     {
        "id": "casio-g-shock-ga-2110su-3adr-black-green-analog-digital-dial-green-resin-strap-mens-watch-shock-and-200m-water-resistant-g1065",
        "name": "Casio G-Shock GA-2110SU-3ADR Black & Green Analog-Digital Dial Green Resin Strap Men's Watch Shock And 200M Water Resistant G1065",
        "image": "https://m.media-amazon.com/images/I/71zABZqq78L._SX679_.jpg",
        "features": "Shock and 200M Water Resistant",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹8,816", "discount": "-10%", "delivery": "₹0", "total": "₹8,816", "link": "https://amzn.to/3YXbE7M" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹9,795", "discount": "N/A", "delivery": "₹0", "total": "₹9,795", "link": "https://bit.ly/3XsWnpG" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹9,799", "discount": "N/A", "delivery": "₹0", "total": "₹9,799", "link": "https://meesho.com/16w06" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹10,200", "discount": "N/A", "delivery": "₹0", "total": "₹10,200", "link": "https://bit.ly/3XyFZd1" }
        ]
    },
    {
        "id": "being-better-tony-stark-steampunk-metal-round-sunglasses-for-women-men",
        "name": "Being Better Tony Stark Steampunk Metal Round Sunglasses for Women Men",
        "image": "https://m.media-amazon.com/images/I/51juzdik41L._SX679_.jpg",
        "features": "Steampunk Metal Round Sunglasses",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹379", "discount": "-62%", "delivery": "₹0", "total": "₹379", "link": "https://amzn.to/3XzkYHT" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹999", "discount": "-33%", "delivery": "₹0", "total": "₹999", "link": "https://bit.ly/3sZ3tM9" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,000", "discount": "N/A", "delivery": "₹0", "total": "₹1,000", "link": "https://meesho.com/16w06" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,200", "discount": "N/A", "delivery": "₹0", "total": "₹1,200", "link": "https://bit.ly/3YrRg3n" }
        ]
    },
    {
        id: "mokobara-the-transit-backpack",
        "name": "MOKOBARA The Transit Backpack 2.0 30L Premium Nylon15.6\" Unisex Multipurpose Laptop Backpack for Men and Women (Crypto Sunray)",
        "image": "https://m.media-amazon.com/images/I/615SAenBHFL._SY450_.jpg",
        "features": "Multipurpose Laptop Backpack for Men and Women",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹5,998", "discount": "-33%", "delivery": "₹0", "total": "₹5,998", "link": "https://www.amazon.in/MOKOBARA-Transit-Backpack-Nylon15-6-Multipurpose/dp/B0BBFHXHSV/ref=sr_1_1_sspa?crid=3ISXBR7C7LQXM" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹5,999", "discount": "40% off", "delivery": "₹0", "total": "₹5,999", "link": "https://www.flipkart.com/mokobara-transit-backpack-30l-30-l/p/itm4755bc5d9a0d0?pid=BKPHYRA3KSY7HNFR" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹5,800", "discount": "32% off", "delivery": "₹0", "total": "₹5,800", "link": "https://www.meesho.com/mokobara-transit-backpack/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹6,100", "discount": "30% off", "delivery": "₹0", "total": "₹6,100", "link": "https://www.myntra.com/mokobara-transit-backpack/p/abc" }
        ]
    },
    {
        "id": "solid-men-black-running-shorts",
        "name": "Solid Men Black Running Shorts",
        "image": "https://m.media-amazon.com/images/I/71+vEi0nwmL._SX522_.jpg",
        "features": "Running Shorts for Men",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹399", "discount": "-33%", "delivery": "₹0", "total": "₹399", "link": "https://www.amazon.in/GYMIFIC-Sports-Training-Running-Shorts/dp/B0BYSJ7X1W/ref=sr_1_6" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹365", "discount": "51% off", "delivery": "₹0", "total": "₹365", "link": "https://www.flipkart.com/kyk-solid-men-blue-black-running-shorts/p/itm2985a6058b343?pid=SRTGNCWXTA84JE32" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹370", "discount": "40% off", "delivery": "₹0", "total": "₹370", "link": "https://www.meesho.com/solid-men-black-running-shorts/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹350", "discount": "45% off", "delivery": "₹0", "total": "₹350", "link": "https://www.myntra.com/solid-men-black-running-shorts/p/abc" }
        ]
    },
    {
        "id": "puma-unisex-adult-backpack",
        "name": "Puma Unisex-Adult Backpack",
        "image": "https://m.media-amazon.com/images/I/514O5tNUKtL._SX522_.jpg",
        "features": "Phase Small Backpack",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹619", "discount": "-52%", "delivery": "₹0", "total": "₹619", "link": "https://www.amazon.in/Puma-Unisex-Adult-Phase-Backpack-7548755/dp/B08BP8QG5V/ref=sr_1_3" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹649", "discount": "50% off", "delivery": "₹0", "total": "₹649", "link": "https://www.flipkart.com/puma-phase-backpack-22-l/p/itm344dc3b29e634?pid=BKPFZ4SYVW9UJTYZ" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹630", "discount": "48% off", "delivery": "₹0", "total": "₹630", "link": "https://www.meesho.com/puma-unisex-adult-backpack/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹640", "discount": "47% off", "delivery": "₹0", "total": "₹640", "link": "https://www.myntra.com/puma-unisex-adult-backpack/p/abc" }
        ]
    },
    {
        "id": "tommy-hilfiger-leather-wallet-for-men",
        "name": "Tommy Hilfiger Leather Wallet for Men",
        "image": "https://m.media-amazon.com/images/I/51PKFhV+1QL._SY450_.jpg",
        "features": "Genuine Leather Wallet for Men",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹2,145", "discount": "-35%", "delivery": "₹0", "total": "₹2,145", "link": "https://www.amazon.in/Tommy-Hilfiger-Stallion-Leather-Global/dp/B0BX9L3541/ref=sr_1_3_sspa" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,144", "discount": "35% off", "delivery": "₹0", "total": "₹2,144", "link": "https://www.flipkart.com/tommy-hilfiger-men-casual-brown-genuine-leather-wallet/p/itmf3cd666c00014?pid=WCWGHDZGCD5D3JJD" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹2,120", "discount": "30% off", "delivery": "₹0", "total": "₹2,120", "link": "https://www.meesho.com/tommy-hilfiger-leather-wallet-for-men/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,150", "discount": "33% off", "delivery": "₹0", "total": "₹2,150", "link": "https://www.myntra.com/tommy-hilfiger-leather-wallet-for-men/p/abc" }
        ]
    },
    {
        "id": "yoho-comfortable-boots-for-men-extra-cushioned-footbed-ankle-boot-low-heel-boots-for-men",
        "name": "YOHO Comfortable Boots for Men | Extra Cushioned Footbed | Ankle Boot Low Heel Boots For Men",
        "image": "https://m.media-amazon.com/images/I/61ym1grBkHL._SY500_.jpg",
        "features": "Comfortable Ankle Boots for Men",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,599", "discount": "-60%", "delivery": "₹0", "total": "₹1,599", "link": "https://www.amazon.in/YOHO-Comfortable-Cushioned-Friendly-Stylish/dp/B0CJBVVWM2/ref=sr_1_21_sspa" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,899", "discount": "52% off", "delivery": "₹0", "total": "₹1,899", "link": "https://www.flipkart.com/yoho-comfortable-boots-men-extra-cushioned-footbed-ankle-boot-low-heel-boots-men/p/itm4741e4b3a432d" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,580", "discount": "58% off", "delivery": "₹0", "total": "₹1,580", "link": "https://www.meesho.com/yoho-comfortable-boots-for-men/p/xyz" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,650", "discount": "60% off", "delivery": "₹0", "total": "₹1,650", "link": "https://www.myntra.com/yoho-comfortable-boots-for-men/p/abc" }
        ]
    }
]

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
