
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
        "image": "https://m.media-amazon.com/images/I/61jlFEwSt+L._SY355_.jpg",
        "features": "Upto 70 Hours Playback, 40mm Drivers",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹2,200", "discount": "10%", "delivery": "₹0", "total": "₹2,200", "link": "https://amzn.in/d/bihH0Z1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,235", "discount": "11%", "delivery": "₹0", "total": "₹2,235", "link": "https://www.flipkart.com/boat-rockerz-450-pro-upto-70-hours-playback-bluetooth-headset/p/itm61f7284f7fdff" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹2,180", "discount": "12%", "delivery": "₹0", "total": "₹2,180", "link": "https://www.meesho.com/boat-rockerz-450-pro-bluetooth-headphones/p/28y0em?srsltid=AfmBOornQM5oQxq140FasQKVMb3beiUZ4lKrPz2Z0M0AOKKKBjreP4Zs" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,250", "discount": "9%", "delivery": "₹50", "total": "₹2,300", "link": "https://www.myntra.com/headphones/boat/boat-rockerz-450-pro-m-bluetooth-on-ear-headphone-with-mic-black/14150500/buy" }
        ]
    },
    {
        id: "sony-wh-ch520",
        "name": "Sony WH-CH520",
        "image": "https://m.media-amazon.com/images/I/318RvHnDwHL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "50 Hours Playtime, DSEE Upscale",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹4,250", "discount": "7%", "delivery": "₹0", "total": "₹4,250", "link": "https://amzn.in/d/eFL8gT8" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹4,269", "discount": "7%", "delivery": "₹0", "total": "₹4,269", "link": "https://www.flipkart.com/sony-wh-ch520-50-hrs-playtime-dsee-upscale-multipoint-connection-dual-pairing-bluetooth/p/itm29e4c2b8a0883" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹4,180", "discount": "8%", "delivery": "₹0", "total": "₹4,180", "link": "https://www.meesho.com/sony-wh-ch520/p/dummy-link2" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹4,300", "discount": "5%", "delivery": "₹50", "total": "₹4,350", "link": "https://www.myntra.com/sony-wh-ch520/p/dummy-link2" }
        ]
    },
    {
        id: "jbl-tune-520-bt",
        "name": "JBL Tune 520 BT",
        "image": "https://m.media-amazon.com/images/I/41j9J1vnovL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Pure Bass, Multi-Connect",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹3,999", "discount": "15%", "delivery": "₹0", "total": "₹3,999", "link": "https://amzn.in/d/2OJdnpw" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹3,950", "discount": "16%", "delivery": "₹0", "total": "₹3,950", "link": "https://www.flipkart.com/jbl-tune-520-bt-57hr-playtime-pure-bass-multi-connect-bluetooth-headset-5-3le-headset/p/itmb401dd03aaa49?pid=ACCGQZVZ2MH4QDHZ" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹3,900", "discount": "17%", "delivery": "₹0", "total": "₹3,900", "link": "https://www.meesho.com/jbl-tune-520-bt/p/dummy-link3" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹4,000", "discount": "14%", "delivery": "₹50", "total": "₹4,050", "link": "https://www.myntra.com/headphones/jbl/jbl-black-tune-520-bt-57hr-playtime-pure-bass-bt-53le-multi-connect-on-ear-bt-headset/25958288/buy" }
        ]
    },
    {
        id: "noise-buds-vs102",
        "name": "Noise Buds VS102",
        "image": "https://m.media-amazon.com/images/I/41tPHnezJTL._SY355_.jpg",
        "features": "50 Hours Playtime, IPX5 Water Resistance",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,099", "discount": "45%", "delivery": "₹0", "total": "₹1,099", "link": "https://amzn.in/d/4cZFKNX" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,149", "discount": "40%", "delivery": "₹0", "total": "₹1,149", "link": "https://www.flipkart.com/noise-buds-vs102-50-hrs-playtime-11mm-driver-ipx5-unique-flybird-design-bluetooth-headset/p/itm6a32c17afbbe5" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,099", "discount": "45%", "delivery": "₹0", "total": "₹1,099", "link": "https://www.meesho.com/noise-buds-vs-102-no-bluetooth-only-cover-blue-shock-proof-silicon-case/p/24ivw4?srsltid=AfmBOopzdnltmNQFDbGQ5A8ek5g1nYf8jatD91WvibTZJP07DsITelwd" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,200", "discount": "38%", "delivery": "₹50", "total": "₹1,250", "link": "https://www.myntra.com/headphones/noise/noise-buds-vs102-with-50hrs-playtime-instacharge-and-11mm-driver-truly-wireless-earbuds-/15622444/buy" }
        ]
    },
    {
        id: "boult-astra",
        "name": "Boult Astra",
        "image": "https://m.media-amazon.com/images/I/71aBAPCVc8L._SX522_.jpg",
        "features": "Quad Mic ENC, 48 Hours Battery, Low Latency",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,499", "discount": "57%", "delivery": "₹0", "total": "₹1,499", "link": "https://amzn.in/d/9zWHM0M" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,550", "discount": "55%", "delivery": "₹0", "total": "₹1,550", "link": "https://www.flipkart.com/boult-audio-astra-quad-mic-enc-48hrs-battery-low-latency-gaming-made-india-5-3v-bluetooth-headset/p/itme9b78ae82a613?pid=ACCGS2VSYQFQ4HTZ&lid=LSTACCGS2VSYQFQ4HTZF0TSMT&marketplace=FLIPKART&store=0pm%2Ffcn%2F821" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,480", "discount": "58%", "delivery": "₹0", "total": "₹1,480", "link": "https://www.meesho.com/boult-astra-neo-70hrs-playtime-4-mic-enc-bt-54-40ms-low-latency-grip-case-bluetooth-black-true-wireless/p/7cd9ot?srsltid=AfmBOoqQOqKrcvyTL4UyGNMlV0xlporkhsHPmUME-25pOIHmJvIrUbHL" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,600", "discount": "54%", "delivery": "₹50", "total": "₹1,650", "link": "https://www.myntra.com/headphones/boultaudio/boult-audio-astra-earbuds-with-quad-mic-enc--48-hrs-battery/29218804/buy" }
        ]
    },
    {
        id: "oneplus-bullets-wireless-z2",
        "name": "OnePlus Bullets Wireless Z2",
        "image": "https://m.media-amazon.com/images/I/51UhwaQXCpL._SX522_.jpg",
        "features": "Fast Charging, High Bass",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,799", "discount": "30%", "delivery": "₹0", "total": "₹1,799", "link": "https://amzn.in/d/6JdjSoY" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,850", "discount": "28%", "delivery": "₹0", "total": "₹1,850", "link": "https://www.flipkart.com/oneplus-bullets-wireless-z2-fast-charge-30-hrs-battery-life-earphones-mic-bluetooth-headset/p/itm1b9cd98911a2a" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,780", "discount": "32%", "delivery": "₹0", "total": "₹1,780", "link": "https://www.meesho.com/oneplus-bullets-z2-bluetooth-wireless-in-ear-earphones-with-mic-bombastic-bass-124-mm-drivers-10-mins-charge-20-hrs-music-30-hrs-battery-life-ip55-dust-and-water-resistant-magico-black/p/2x5jbw?" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,850", "discount": "28%", "delivery": "₹50", "total": "₹1,900", "link": "https://www.myntra.com/headphones/oneplus/oneplus-bullets-wireless-z2-with-45db-hybrid-anc--28-hours-playback-neckband-earphones/24085338/buy" }
        ]
    },
    {
        id: "cmf-by-nothing-buds",
        "name": "CMF by Nothing Buds",
        "image": "https://m.media-amazon.com/images/I/61myoZJJ1FL._SX522_.jpg",
        "features": "42dB ANC, Ultra Bass Technology",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹1,999", "discount": "33%", "delivery": "₹0", "total": "₹1,999", "link": "https://amzn.in/d/ipC6zWN" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹2,050", "discount": "31%", "delivery": "₹0", "total": "₹2,050", "link": "https://www.flipkart.com/cmf-by-nothing-buds/p/dummy-link7" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹1,950", "discount": "35%", "delivery": "₹0", "total": "₹1,950", "link": "https://www.meesho.com/cmf-by-nothing-buds/p/dummy-link7" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹2,100", "discount": "30%", "delivery": "₹50", "total": "₹2,150", "link": "https://www.myntra.com/headphones/cmfbynothing/cmf-by-nothing-42-db-active-noise-cancellation-ultra-bass-technology-buds-/27909168/buy" }
        ]
    },
    {
        id: "boat-airdopes-161",
        "name": "boAt Airdopes 161",
        "image": "https://m.media-amazon.com/images/I/415gjmPuNrL._SX522_.jpg",
        "features": "ASAP Charge, 40 Hours Playback",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹899", "discount": "63%", "delivery": "₹0", "total": "₹899", "link": "https://amzn.in/d/0V7w9Of" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹950", "discount": "60%", "delivery": "₹0", "total": "₹950", "link": "https://www.flipkart.com/boat-airdopes-161-40-hours-playback-asap-charge-10mm-drivers-bluetooth-headset/p/itm44896573d8f03?pid=ACCG6DS7Z2Z8SEAF" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹899", "discount": "63%", "delivery": "₹0", "total": "₹899", "link": "https://www.meesho.com/boat-airdopes-161/p/790sw1?srsltid=AfmBOoo2OzBuU6tih8uZNvZV5lK3e3gw2n5v_FQyBZPXDCcmNK7BppJ3" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹1,000", "discount": "59%", "delivery": "₹50", "total": "₹1,050", "link": "https://www.myntra.com/headphones/boat/boat-airdopes-161-anc-w-active-noise-cancellation-50h-playtime--beast-mode/30694183/buy" }
        ]
    },
    {
        id: "triggr-trinity-1",
        name: "Triggr Trinity 1",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/1/m/e/-original-imah4fhrbbfvjpkj.jpeg?q=90&crop=false",
        features: "Wireless Over-Ear Headphones, Noise Cancellation, Bluetooth 5.4, 50 Hours Playback, USB Type-C Charging.",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹999", discount: "0%", delivery: "₹40", total: "₹1,039", link: "https://www.amazon.in/dp/example" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹999", discount: "0%", delivery: "₹50", total: "₹1,049", link: "https://www.flipkart.com/triggr-trinity-1-bluetooth-headset/p/itm7fc55c9cfce90?pid=ACCH3CZ2VBGZGZNU&lid=LSTACCH3CZ2VBGZGZNUUOMHNG&marketplace=FLIPKART&cmpid=content_headphone_8965229628_gmc" },
            { store: "Meesho", logo: "meesho-logo.png", price: "₹1,099", discount: "0%", delivery: "₹0", total: "₹1,099", link: "https://www.meesho.com/triggr-trinity-1/p/example" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹1,199", discount: "10%", delivery: "₹50", total: "₹1,149", link: "https://www.myntra.com/triggr-trinity-1/p/example" }
        ]
    },
    {
        id: "realme-techlife-studio-h1",
        name: "realme TechLife Studio H1",
        image: "https://m.media-amazon.com/images/I/715wH-KhfYL._SX679_.jpg",
        features: "Studio-Grade Sound, Bluetooth 5.3, Noise Cancellation, Over-Ear Design, USB-C Fast Charging, 45 Hours Battery.",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹2,499", discount: "5%", delivery: "₹40", total: "₹2,539", link: "https://amzn.in/d/eV7ObT1" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹2,450", discount: "4%", delivery: "₹50", total: "₹2,500", link: "https://www.flipkart.com/realme-techlife-studio-h1-43db-anc-hi-res-audio-40mm-driver-70hrs-playback-bluetooth/p/itma28640c82a67f?pid=ACCH5FH5BJJ5B4SG&lid=LSTACCH5FH5BJJ5B4SG88VSTI&marketplace=FLIPKART&cmpid=content_headphone_8965229628_gmc" },
            { store: "Meesho", logo: "meesho-logo.png", price: "₹2,400", discount: "3%", delivery: "₹0", total: "₹2,400", link: "https://www.meesho.com/realme-techlife-studio-h1/p/example" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹2,499", discount: "5%", delivery: "₹50", total: "₹2,549", link: "https://www.myntra.com/headphones/realme/realme-techlife-studio-true-wireless-over-ear-h1-headphones/31219471/buy" }
        ]
    },
    {
        "id": "apple-mac-mini-m4",
        "name": "Apple Mac Mini M4",
        "image": "https://m.media-amazon.com/images/I/61hpKVB9X2L._SX679_.jpg",
        "features": "Compact design, Apple M4 chip, 16GB RAM, 512GB SSD, macOS Sequoia.",
        "webstores": [
            { "store": "Amazon", "price": "₹49,999", "discount": "5%", "delivery": "₹40", "total": "₹50,039", "link": "https://amzn.in/d/7cjdQY1" },
            { "store": "Flipkart", "price": "₹50,499", "discount": "4%", "delivery": "₹50", "total": "₹50,549", "link": "https://www.flipkart.com/apple-m1-chip-8-gb-ram-integrated-8-core-gpu-graphics-512-ssd-capacity-mac-os-big-sur-microtower/p/itm593548a959292" },
            { "store": "Meesho", "price": "₹48,999", "discount": "3%", "delivery": "₹0", "total": "₹48,999", "link": "https://www.meesho.com/apple-mac-mini-m4/p/example" },
            { "store": "Myntra", "price": "₹51,499", "discount": "2%", "delivery": "₹50", "total": "₹51,549", "link": "https://www.myntra.com/apple-mac-mini-m4/p/example" }
        ]
    },
    {
        "id": "hp-envy-desktop-te01",
        "name": "HP Envy Desktop TE01",
        "image": "https://m.media-amazon.com/images/I/51aQrHPnw6L._AC_SX355_.jpg",
        "features": "Intel Core i7, 16GB RAM, 1TB HDD + 256GB SSD, NVIDIA GTX 1650.",
        "webstores": [
            { "store": "Amazon", "price": "₹72,999", "discount": "8%", "delivery": "₹50", "total": "₹73,049", "link": "https://a.co/d/ibMCFS9" },
            { "store": "Flipkart", "price": "₹74,499", "discount": "7%", "delivery": "₹50", "total": "₹74,549", "link": "https://www.flipkart.com/hp-envy-desktop-te01/p/example" },
            { "store": "Meesho", "price": "₹71,499", "discount": "6%", "delivery": "₹0", "total": "₹71,499", "link": "https://www.meesho.com/hp-envy-desktop-te01/p/example" },
            { "store": "Myntra", "price": "₹75,499", "discount": "5%", "delivery": "₹50", "total": "₹75,549", "link": "https://www.myntra.com/hp-envy-desktop-te01/p/example" }
        ]
    },
    {
        "id": "dell-xps-desktop",
        "name": "Dell XPS Desktop",
        "image": "https://m.media-amazon.com/images/I/71YeA5dsEdL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "features": "12th Gen Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA RTX 3060 Ti.",
        "webstores": [
            { "store": "Amazon", "price": "₹1,24,999", "discount": "6%", "delivery": "₹40", "total": "₹1,25,039", "link": "https://a.co/d/aruw86Y" },
            { "store": "Flipkart", "price": "₹1,25,999", "discount": "5%", "delivery": "₹50", "total": "₹1,26,049", "link": "https://www.flipkart.com/q/dell-xps" },
            { "store": "Meesho", "price": "₹1,22,999", "discount": "4%", "delivery": "₹0", "total": "₹1,22,999", "link": "https://www.meesho.com/dell-xps-desktop/p/example" },
            { "store": "Myntra", "price": "₹1,26,499", "discount": "3%", "delivery": "₹50", "total": "₹1,26,549", "link": "https://www.myntra.com/dell-xps-desktop/p/example" }
        ]
    },
    {
        "id": "lenovo-ideacentre-5",
        "name": "Lenovo IdeaCentre 5",
        "image": "https://m.media-amazon.com/images/I/71XY+Mk-dTL._AC_SY300_SX300_.jpg",
        "features": "AMD Ryzen 7, 16GB RAM, 512GB SSD, Radeon Graphics.",
        "webstores": [
            { "store": "Amazon", "price": "₹64,999", "discount": "10%", "delivery": "₹50", "total": "₹65,049", "link": "https://www.amazon.com/Lenovo-IdeaCentre-Business-i5-10400T-Wireless/dp/B0BVGWNLMV" },
            { "store": "Flipkart", "price": "₹66,499", "discount": "8%", "delivery": "₹50", "total": "₹66,549", "link": "https://www.flipkart.com/lenovo-ideacentre-gaming-5-amd-ryzen-5600g-8-gb-ram-nvidia-geforce-gtx-1660-graphics-512-ssd-capacity-windows-11-home-64-bit-6-graphics-memory-full-tower/p/itm3de36c2aaef97?pid=CPUGCCFUMZYUQ8HS&lid=LSTCPUGCCFUMZYUQ8HSKUVL9H&marketplace=FLIPKART&cmpid=content_cpu_8965229628_gmc" },
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
    },
    {
        "id": "lipstick-rouge",
        "name": "Matte Lipstick Rouge",
        "image": "https://m.media-amazon.com/images/I/51qAPi6TUeL._SY355_.jpg",
        "features": "Long-lasting, Matte Finish, 3.9g.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹227", "discount": "31%", "delivery": "₹50", "total": "₹277", "link": "https://www.amazon.in/Maybelline-Color-Sensational-Creamy-Scarlet3-9g/dp/B00N6Z09DE/ref=sr_1_3?crid=3TT20BF1M09FN&dib=eyJ2IjoiMSJ9.1O9De03H6wa5ua_1gP_VABl3q5x8uXFBKteUcIksQUR6XXZE-OzXWEvZBJ8PQMqSmB3M5TSiIU0lh3DKJQGgh5vYknZpGA55fhcDF6TWXqJrClreERHONMJxuuyDKG5FpamMiWw9Dsov5JGrbIcpPc0Gev6uY-uUnBAJnwPVr2rgscge4iAHshgwik_KIuVB_pSsFQgn1yLRFeiMF4t6q6NVyJCPwcqAgyOQMz0yYFHzeHKsigQgXW86waa033Pjn8rk1o5XRPBDafzEx5w471Ytkwjgsba05wvnSZoj2Ho.gIbeo4XPzClHTI5LacG2dLkGiihYwwleELY54vp94g0&dib_tag=se&keywords=Matte+Lipstick+Rouge&qid=1731919259&refinements=p_123%3A236425&rnid=91049095031&s=beauty&sprefix=matte+lipstick+rouge%2Caps%2C299&sr=1-3" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹282", "discount": "14%", "delivery": "₹50", "total": "₹332", "link": "https://www.flipkart.com/maybelline-new-york-color-sensational-creamy-matte-lipstick/p/itm9b3629d76cf6c?pid=LSKEPZFJHMBYB4MP&lid=LSTLSKEPZFJHMBYB4MP4BAJWX&marketplace=FLIPKART&q=Matte+Lipstick+Rouge&store=g9b%2Fffi%2Ftv5%2Funa&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=b34fe14d-4cbd-4daa-8fed-b14d70920122.LSKEPZFJHMBYB4MP.SEARCH&ppt=sp&ppn=sp&ssid=f51ai9dkls0000001731919194574&qH=642bf00edf17b1b1" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹250", "discount": "20%", "delivery": "₹30", "total": "₹280", "link": "https://www.meesho.com/dummy-link" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹260", "discount": "18%", "delivery": "₹40", "total": "₹300", "link": "https://www.myntra.com/dummy-link" }
        ]
    },
    {
        "id": "eyeliner-glam",
        "name": "Waterproof Eyeliner Glam",
        "image": "https://m.media-amazon.com/images/I/41zfLER302L._SY741_.jpg",
        "features": "Precision Tip, Waterproof, 2ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹47", "discount": "8%", "delivery": "₹40", "total": "₹87", "link": "https://www.amazon.in/Eyeliner-Smudge-proof-Water-resistant-Lightweight-sharpener/dp/B0BWFFX7WD/ref=sr_1_4_sspa?crid=HM3UKFRUJHCN&dib=eyJ2IjoiMSJ9.Q0a6Xk3Bw4D90F3S_09xbPvB1DYIN8aBzPMjHY-5kB1xStEyTTvwPwYMwcglaOkGaPLYmSOqvsHKbYNdcCb_XpCX7Qxce6TzRrab9-Oa-ecnxtC434BToYQJWmKNnCjuZwprQaCb8ejjUmQPLH3qCzLNsGh6ocxhETeuS8Az979JBWcG6LX-mbWUsaywjLS6vBRdF4wUAja2XDleAILcGvA--M3SVaOXpW5qpodSQhro_GcCTZ-AVAzA_3l2ZjsswcKia5_hbxxR9lIILvmDngPvavOuplcbdwcNLD2ybnI.1RqjBv_HO_90ExA5nd7fyKHbetmF-M_9JbPEpRSFjM0&dib_tag=se&keywords=Dazller%2BEyeliner%2BPencil%2C%2B1.5g%2C%2BJet%2BBlack%2BMatte%2C%2BSmudge-proof%2C%2BWater-resistant%2C%2BLightweight%2C%2BLong%2Bstay%2C%2BSmooth%2Bgliding%2C%2BBuilt-in%2Bsharpener&nsdOptOutParam=true&qid=1731919770&s=beauty&sprefix=dazller%2Beyeliner%2Bpencil%2C%2B1.5g%2C%2Bjet%2Bblack%2Bmatte%2C%2Bsmudge-proof%2C%2Bwater-resistant%2C%2Blightweight%2C%2Blong%2Bstay%2C%2Bsmooth%2Bgliding%2C%2Bbuilt-in%2Bsharpener%2Cbeauty%2C319&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" },
           {"store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹50", "discount": "7%", "delivery": "₹20", "total": "₹70", "link": "https://www.flipkart.com/eyeliner-glam-waterproof-black/p/itmfglblack"},
           { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹43", "discount": "5%", "delivery": "₹0", "total": "₹43", "link": "https://www.meesho.com/dazller-eyeliner-pencil-15g-jet-black-matte-smudge-proof-water-resistant-lightweight-long-stay-smooth-gliding-built-in-sharpener/p/59avbg" },
           {"store": "Myntra", "logo": "myntra-logo.png", "price": "₹65", "discount": "10%", "delivery": "₹30", "total": "₹95", "link": "https://www.myntra.com/eyeliner-glam-waterproof"}   
        ]
    },
    {
        "id": "foundation-flawless",
        "name": "Liquid Foundation Flawless",
        "image": "https://m.media-amazon.com/images/I/41Gd38Yk+oL._SX522_.jpg",
        "features": "SPF 15, Full Coverage, 30ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹671", "discount": "16%", "delivery": "₹50", "total": "₹721", "link": "https://www.amazon.in/Mamaearth-Hydra-Glow-Foundation-Turmeric-Non-Drying/dp/B0D3F9F5QY/ref=sr_1_fkmr1_2?crid=2E6A393KHUUE&dib=eyJ2IjoiMSJ9.AzdulTu4-F3Y20xdcC_IhRgAW_MC-s4Om6k9n-DLoFwkcB31W4b29I99nk7UYnrcUsPLfjN0Rttmct645ybt85dndSaoQrFq2un3JthadtudA1Z5UjZhggixfn6uR6Ri.rX26V8NNxeetZIMWc-cP7Rd-G9nH7TbGuYLhUh_EGu0&dib_tag=se&keywords=Liquid%2BFoundation%2BFlawless&qid=1731920118&refinements=p_123%3A211925&rnid=91049095031&s=beauty&sprefix=liquid%2Bfoundation%2Bflawless%2Cbeauty%2C252&sr=1-2-fkmr1&th=1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹686", "discount": "14%", "delivery": "₹60", "total": "₹746", "link": "https://www.flipkart.com/mamaearth-hydra-glow-full-coverage-vitamin-c-turmeric-gives-3x-instant-glow-foundation/p/itm0171cdf51d7db?pid=FNDHYP8Z3P9GFMGE&lid=LSTFNDHYP8Z3P9GFMGEYPIXVV&marketplace=FLIPKART&q=Liquid+Foundation+Flawless&store=g9b%2Fffi%2Fdzu%2Fgru&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=ac6cfe3d-c507-41a0-820f-9307319b3528.FNDHYP8Z3P9GFMGE.SEARCH&ppt=sp&ppn=sp&ssid=sandnub76o0000001731920078376&qH=0cf1eeebbf07b253" },
	    {"store": "Meesho", "logo": "meesho-logo.png", "price": "₹660", "discount": "15%", "delivery": "₹0", "total": "₹660", "link": "https://www.meesho.com/mamaearth-hydra-glow-foundation/p/abc123"},
            {"store": "Myntra", "logo": "myntra-logo.png", "price": "₹700", "discount": "12%", "delivery": "₹40", "total": "₹740", "link": "https://www.myntra.com/liquid-foundation-flawless-mamaearth"}
        ]
    },
    {
        "id": "mascara-volume",
        "name": "Volumizing Mascara",
        "image": "https://images.meesho.com/images/products/96288050/qarzm_512.jpg",
        "features": "Smudge-proof, Blackest Black, 8ml.",
        "webstores": [                 
            {"store": "Amazon", "logo": "amazon-logo.png", "price": "₹240", "discount": "12%", "delivery": "₹50", "total": "₹290", "link": "https://www.amazon.in/dp/B09L6QZ3QQ?tag=your-affiliate-link"},
            {"store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹229", "discount": "10%", "delivery": "₹50", "total": "₹279", "link": "https://www.flipkart.com/mars-double-trouble-mascara-2-step-volumizing-lengthening-jet-black/p/itm4d7c6ee1c76bb"},
	    { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹252", "discount": "8%", "delivery": "₹0", "total": "₹252", "link": "https://www.meesho.com/mars-2in1-volumizing-and-lengthening-long-lasting-mars-mascara-15-ml-black/p/1lbsc2" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹200", "discount": "33%", "delivery": "₹50", "total": "₹250", "link": "https://www.myntra.com/mascara/mars/mars-double-trouble-mascara---2-step-volumizing--lengthening---jet-black/17301372/buy" }
        ]
    },
    {
        "id": "blush-pink",
        "name": "Cheek Blush - Pink Blossom",
        "image": "https://m.media-amazon.com/images/I/612FdWZyMBL._SX522_.jpg",
        "features": "Natural Finish, Lightweight, 8g.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹319", "discount": "20%", "delivery": "₹30", "total": "₹349", "link": "https://www.amazon.in/Beauty-Lumi-Matte-Lightweight-Blendable-Showstopper/dp/B0CR1HYQB9/ref=sr_1_2?crid=ICY1QQPNWMYV&dib=eyJ2IjoiMSJ9.HRwOZEOHp898h2aI-WUD8MgqvADIwIiM6y6PaepBtatUYE9d3uh9K_F7gQTCF0mYzSlEU1nwjBKhD3xv9ibfX3MVm19Yun5ZWqahgnliFO39KIaugPXo21MF3wwoyKmLhDkpNK2TKfcXe5v2ioHBkEXzDqNzazN2Y-cMLcN7ajrb54EvfI21LKFgiH_VlJXxOmSqHOk6HcQgZUChWBwij4-D2CZzR9-CVUIrjPIy502Uj785dwsoejRRUg0QwDUXhsFkurCokVcHcGggxytEWsaMePTvVA3bQu5wYEkgSmw.25RTf9ZzCVU5d0pCexWAntL5IJEXG51JH5qlsUYxuHY&dib_tag=se&keywords=Cheek+Blush+-+Pink+Blossom&nsdOptOutParam=true&qid=1731920585&refinements=p_123%3A654265&rnid=91049095031&s=beauty&sprefix=cheek+blush+-+pink+blossom%2Cbeauty%2C308&sr=1-2" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹319", "discount": "20%", "delivery": "₹50", "total": "₹369", "link": "https://www.flipkart.com/swiss-beauty-cheek-up-blush/p/itm084e63c635667?pid=BLUGWZYBNZKJGRP9&lid=LSTBLUGWZYBNZKJGRP9CHWUOX&marketplace=FLIPKART&q=Cheek+Blush+-+Pink+Blossom&store=g9b%2Fffi%2Fdzu%2Fyk7&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_FFL1aCnal8OVk9p--xPXjDr2iH9x4jhGVjy9YMlehCIun9qXcP_XoJ748FRCCMRJY-l3c_bTuhfFHIz1TOBKpg%3D%3D&ppt=sp&ppn=sp&ssid=yxdiovoc800000001731920534898&qH=f62b18ec35baaaa9" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹299","discount": "25%","delivery": "₹0","total": "₹299", "link": "https://www.meesho.com/cheek-blush/p/1k9d3"},
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹310","discount": "22%","delivery": "₹50","total": "₹360","link": "https://www.myntra.com/cheek-blush/p/abc123"}
        ]
    },
    {
        "id": "highlighter-gold",
        "name": "Shimmer Highlighter - Gold Glow",
        "image": "https://m.media-amazon.com/images/I/610kJL-JT9L._SX522_.jpg",
        "features": "Illuminating Finish, 18ml.",
        "webstores": [
           { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹336", "discount": "25%", "delivery": "₹50", "total": "₹386", "link": "https://www.amazon.in/Beauty-Liquid-Highlighter-Makeup-Illuminating/dp/B07T2DSY48/ref=sr_1_1?crid=GUVQRMJXC5JO&dib=eyJ2IjoiMSJ9.HZsCPRUM2re65Bqjxbs8TVcrBZ5JtyydyC92kAFcqYuh2CgLMpryBmnFk7rZ6ss5Knn7iCVYuidbQlc9CX-5sNkymYNiijgu1lk2-lABYjZo11EIO-WB-YbaPHH-nW5lG-XeKp1wi5tGks0MzpO26D8yNOnwmXsNKt8pDM_iWMGYjeKBFcqxYWilJekLaRIfiKGk4MP7CNvJTSZBhu4GMFF3x0guK59F5rqaMGUlm7Q893V2LTZvjuXWn7aSBuN-.ZGWUUnK29b2LCKpgS-RF5CCVhrgIyD5xKJghf78A4zw&dib_tag=se&keywords=Shimmer%2BHighlighter%2B-%2BGold%2BGlow%2B-%2Bplum&qid=1731921016&refinements=p_123%3A654265&rnid=91049095031&s=beauty&sprefix=shimmer%2Bhighlighter%2B-%2Bgold%2Bglow%2B-%2Bplu%2Cbeauty%2C207&sr=1-1&th=1" },
           { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹337", "discount": "24%", "delivery": "₹40", "total": "₹377", "link": "https://www.flipkart.com/swiss-beauty-liquid-highlighter-illuminater-drop-glow/p/itm1a9308223e32e?pid=HGLFPYWPYQFUUUGY&lid=LSTHGLFPYWPYQFUUUGYSRKKZU&marketplace=FLIPKART&q=Shimmer+Highlighter+-+Gold+Glow&store=g9b%2Fffi%2Fdzu%2Fy2c&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_fpXAvmmYMyVqbzT7pw_5uBe0umfDmWNy69p5hVGSaxiHv1QktJXRzh88kmofHQS_x2IuA0EGXAcVea5OTQSIOA%3D%3D&ppt=sp&ppn=sp&ssid=xial1b444g0000001731920977552&qH=bbfba7d1101d6680" },
	   { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹329", "discount": "26%", "delivery": "₹0", "total": "₹329", "link": "https://www.meesho.com/shimmer-highlighter-gold-glow/p/1k9d4" },
           { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹330", "discount": "25%", "delivery": "₹50", "total": "₹380", "link": "https://www.myntra.com/shimmer-highlighter-gold-glow/p/abc123" }
        ]
    },
    {
        "id": "nail-polish-red",
        "name": "Glossy Nail Polish",
        "image": "https://images.meesho.com/images/products/342279233/qwn00_512.jpg",
        "features": "Quick-dry, High Gloss Finish, 13ml.",
        "webstores": [
      	    { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹150", "discount": "15%", "delivery": "₹30", "total": "₹180", "link": "https://www.amazon.in/dp/B07VY8SZ8Y" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹155", "discount": "13%", "delivery": "₹30", "total": "₹185", "link": "https://www.flipkart.com/colors-queen-affair-matte-nail-lacquer-chip-resisting-long-lasting-quick-dry-polish-01-regal-ruby/p/itm84645045fad7c?pid=NLPGTVZPAUZTJWBA&lid=LSTNLPGTVZPAUZTJWBAJFLNRH&marketplace=FLIPKART&q=Glossy+Nail+Polish+-+Red+Velvet-+miscos+studio&store=g9b%2Fffi%2Fbhh%2Fhb8&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_9qmjz57amAS1ZflsQdrzM9Fk5Lg0tibas2anW85T4hpSqGghhgi96nQaXk5Q9p84_vPtW5iKaF6PWMoR6ZywlQ%3D%3D&ppt=sp&ppn=sp&ssid=k5c9m0xp6o0000001731921359387&qH=2a7467565869508b" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹120", "discount": "33%", "delivery": "₹0", "total": "₹120", "link": "https://www.meesho.com/colors-queen-affair-nail-polish-burnt-maroon-13ml/p/5ns8ch" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹160", "discount": "10%", "delivery": "₹40", "total": "₹200", "link": "https://www.myntra.com/nail-polish" }
        ]
    },
    {
        "id": "makeup-remover",
        "name": "Gentle Makeup Remover",
        "image": "https://m.media-amazon.com/images/I/41W6M9M+HJL._SX522_.jpg",
        "features": "Oil-free, For Sensitive Skin, 100ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹359", "discount": "10%", "delivery": "₹50", "total": "₹409", "link": "/ref=sr_1_8?crid=1T82EN1D5XN48&dib=eyJ2IjoiMSJ9.IInAeudBSyfPLOKEMm5szLxM3egNXpIfbdQi1Vq81Urb2ejo7eX7NBoXrARQUUG76tS-4juPNRKwSzxuV7SCqZMzSXq9KMhgkOG3TPyRydlMbeAqmDFdEutsMEGpA_qRcJZMK9pQpXXMhQ2PJ6Q_9UrB7nMZ1ThZwfSSXjIYnYGGO0nCRXY08DYFIANA3Cn8MUOTLZjAK5-0zKvKXkD7E6bzxT51FQceZ1UOShcOJRw31cPpy3sLhQ6d8xOG0FkqR92Z5F9v6QAJ5OBG49-W5E7OfOvaGRExBwNgr0eojSI.7PgS2geYpKftQJb-kJ-L7jaH4m4LpxMWHbBU479cr14&dib_tag=se&keywords=Gentle%2BMakeup%2BRemover&qid" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹399", "discount": "12%", "delivery": "₹40", "total": "₹439", "link": "https://www.flipkart.com/bioderma-sensibio-h2o-micellar-water-sensitive-skin-makeup-remover/p/itmda43831b09b81?pid=MURFXCJDWMKWDUZF&lid=LSTMURFXCJDWMKWDUZFDZVXJI&marketplace=FLIPKART&q=Gentle+Makeup+Remover+-+bioderma&store=g9b%2Fffi%2Fdzu%2Fdqh&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=1e7e515c-7456-49fd-8c46-0098d419c6d9.MURFXCJDWMKWDUZF.SEARCH&ppt=sp&ppn=sp&ssid=2n0zib8e9s0000001731921698251&qH=d4f27adfbfeaa12d" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹349", "discount": "5%", "delivery": "₹0", "total": "₹349", "link": "https://www.meesho.com/gentle-makeup-remover/p/1stqfs" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹399", "discount": "10%", "delivery": "₹50", "total": "₹449", "link": "https://www.myntra.com/makeup-remover/brands/gentle-makeup-remover/p/abc12345" }
        ]
    },
    {
        "id": "primer-smooth",
        "name": "Silk Finish Primer",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/primer/n/1/a/20-lumi-silk-lightweight-makeup-primer-for-poreless-smooth-long-original-imahykngfgt7zchg.jpeg?q=70",
        "features": "Pore Minimizing, Oil Control, 20ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹399", "discount": "20%", "delivery": "₹40", "total": "₹439", "link": "https://www.amazon.in/Colors-Queen-Lumi-Silk-Primer/dp/B08KFP71KL?keywords=Silk+Finish+Primer&qid=1731922402&sr=8-1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹380", "discount": "23%", "delivery": "₹50", "total": "₹430", "link": "https://www.flipkart.com/colors-queen-lumi-silk-lightweight-makeup-primer-poreless-smooth-long-lasting-20-ml/p/itm9abf318e31024?pid=PRMGYMKGKJRXZFAH&lid=LSTPRMGYMKGKJRXZFAH8KC0QD&marketplace=FLIPKART&q=Silk+Finish+Primer&store=g9b%2Fffi%2Fdzu%2Fsa5&srno=s_1_16&otracker=search&otracker1=search&fm=Search&iid=e25fc84c-d9db-413c-9cdf-02daa4ec7227.PRMGYMKGKJRXZFAH.SEARCH&ppt=sp&ppn=sp&qH=5aecd74db7af262c" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹310", "discount": "38%", "delivery": "₹0", "total": "₹310", "link": "https://www.meesho.com/colors-queen-lumi-silk-primer/p/2hg34j" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹324", "discount": "35%", "delivery": "₹50", "total": "₹374", "link": "https://www.myntra.com/face-primer/colors+queen/colors-queen-lumi-silk-primer---20g/30097333/buy" }
        ]
    },
    {
        "id": "perfume-bloom",
        "name": "Floral Perfume - Bloom Essence",
        "image": "https://m.media-amazon.com/images/I/61oP6MAjPlL._SX522_.jpg",
        "features": "Long-lasting Fragrance, 50ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹499", "discount": "17%", "delivery": "₹50", "total": "₹549", "link": "https://www.amazon.in/RENEE-Parfum-Premium-Lasting-Perfume/dp/B0B5NBF5RR/ref=sr_1_5?crid=38RFADZ58F0&dib=eyJ2IjoiMSJ9._IraJPiLf-CMjBvuSAtSvUFUUrw1uDrR0hXfvLQN2uoP2AxQMwjutmCvW4SGFl2dBJyoZYmpf7eLBo4FPZvm_eE_ZaqWk8OjBlincoId5CAu16zNAb05eyTqIurxVaCiVrghGvtXw-2y5168sshtwxU0md2GGY4Rp3aRemh1M66UIhCUIskc7sar2gfvYqCSFlJ7zp7U-ZE-t46fEIYOfAOd_u8FuXVYiqILNIdrpn_1B0AfjV5BZjP3tn1hXMcXCHz3dBeyQCP_5BuYJCvvFaaEWx3UEzcpwdrwdWCqv_M.PiCtvctoHF_ikFvxU2Jo7OPd5b_KTzRbAwqqv60ggLA&dib_tag=se&keywords=Floral%2BPerfume%2B-%2BBloom%2BEssence%2Brenee&qid=1731922480&s=beauty&sprefix=floral%2Bperfume%2B-%2Bbloom%2Bessence%2Brenee%2Cbeauty%2C236&sr=1-5&th=1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹470", "discount": "22%", "delivery": "₹40", "total": "₹510", "link": "https://www.flipkart.com/renee-bloom-essence-floral-perfume-50ml/p/itmreneeperfumebloom" },
	    { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹473", "discount": "21%", "delivery": "₹0", "total": "₹473", "link": "https://www.meesho.com/renee-eau-de-parfum-bloom-50ml-premium-long-lasting-luxury-perfume-notes-of-almond-scent-for-all-occasions/p/3yfznj" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹450", "discount": "25%", "delivery": "₹30", "total": "₹480", "link": "https://www.myntra.com/renee-perfume-bloom-essence-50ml" }
         ]
    },
    {
        "id": "compact-powder-glow",
        "name": "Compact Powder - Natural Glow",
        "image": "https://m.media-amazon.com/images/I/4173kwipRPL._SX300_SY300_QL70_FMwebp_.jpg",
        "features": "Nourishing, SPF 15, 4.5g.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹164", "discount": "27%", "delivery": "₹40", "total": "₹204", "link": "https://amzn.in/d/j5ZGza8" },
            { "store": "Flipkart", "logo": "flipkart.png", "price": "₹164", "discount": "27%", "delivery": "₹50", "total": "₹214", "link": "https://www.flipkart.com/faces-canada-weightless-stay-matte-powder-oil-control-compact/p/itm437259dfc481b?pid=CMPFJX6FY6K5N7TE&lid=LSTCMPFJX6FY6K5N7TEA6TDPS&marketplace=FLIPKART&q=compact+powder&store=g9b%2Fffi%2Fdzu%2Fypp&spotlightTagId=BestsellerId_g9b%2Fffi%2Fdzu%2Fypp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=571206ad-3712-4e9d-9927-46f82c0ff884.CMPFJX6FY6K5N7TE.SEARCH&ppt=sp&ppn=sp&ssid=7strl9me0g0000001731944814465&qH=28d1963028c0ec9a" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹160", "discount": "29%", "delivery": "₹0", "total": "₹160", "link": "https://www.meesho.com/faces-canada-weightless-stay-matte-finish-compact-powder-natural-02-9-g/p/3716gq" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹171", "discount": "24%", "delivery": "₹40", "total": "₹212", "link": "https://www.myntra.com/compact/faces+canada/faces-canada-weightless-stay-matte-compact-spf20-with-vitamin-e--shea-butter---natural-02/10924310/buy" }
        ]
    },
    {
        "id": "makeup-brush-kit",
        "name": "Professional Makeup Brush Kit",
        "image": "https://m.media-amazon.com/images/I/81r6KIx6YyL._SX522_.jpg",
        "features": "6-piece set, Soft Bristles, Travel Case Included.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹714", "discount": "35%", "delivery": "₹40", "total": "₹750", "link": "https://amzn.in/d/1CbVesx" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹1,099", "discount": "12%", "delivery": "₹50", "total": "₹1,149", "link": "https://www.flipkart.com/swiss-beauty-premium-synthetic-bristle-professional-face-eye-brushes-set-6/p/itmd9a9b9050869c?pid=BARFXCB6TCP86YK3&lid=LSTBARFXCB6TCP86YK37OB7BO&marketplace=FLIPKART&q=Professional+Makeup+Brush+Kit&store=g9b%2Fffi&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=955cd185-5c69-489e-8f2e-084f07789aec.BARFXCB6TCP86YK3.SEARCH&ppt=sp&ppn=sp&qH=459159c40c038c67" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹325", "discount": "3%", "delivery": "₹0", "total": "₹325", "link": "https://www.meesho.com/professional-makeup-brush-for-woman-premium-brush-easy-to-hold-precise-application-for-face-eyesbrows-cruelty-free-uniquely-designed-super-soft-bristles6pcs/p/7a8c3k" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹695", "discount": "42%", "delivery": "₹40", "total": "₹737", "link": "https://www.meesho.com/professional-makeup-brush-for-woman-premium-brush-easy-to-hold-precise-application-for-face-eyesbrows-cruelty-free-uniquely-designed-super-soft-bristles6pcs/p/7a8c3k" },
        ]
    },
    {
        "id": "bb-cream-fairness",
        "name": "BB Cream - Instant Fairness",
        "image": "https://m.media-amazon.com/images/I/51pcr85LYGL._SX522_.jpg",
        "features": "All-in-one, SPF 30, 30ml.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹240", "discount": "13%", "delivery": "₹40", "total": "₹280", "link": "https://amzn.in/d/2l66H85" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹315", "discount": "5%", "delivery": "₹50", "total": "₹365", "link": "https://www.flipkart.com/pond-s-bb-cream-instant-spot-coverage-light-make-up-glow-30g-30g/p/itm94d3f54622025?pid=FRNGVZF8TMNZSVZH&lid=LSTFRNGVZF8TMNZSVZHEKT5Z8&marketplace=FLIPKART&q=BB+Cream+-+Instant+Fairness&store=g9b%2Fema%2F5la&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=ac06092d-2522-45fb-94a2-5945389f6526.FRNGVZF8TMNZSVZH.SEARCH&ppt=sp&ppn=sp&ssid=k5zfe4mw8w0000001731946198516&qH=14a3f1c1c88e62fa" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹325", "discount": "3%", "delivery": "₹0", "total": "₹325", "link": "htts://www.mesho.com/bb-cream-instantfairness/" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹173", "discount": "42%", "delivery": "₹40", "total": "₹213", "link": "https://www.myntra.com/bb-and-cc-cream/ponds/ponds-spf-30-pa-instant-spot-coverage-bb--cream-with-vitamin-b3-30-g---natural/14470528/buy" },
        ]
    },
    {
        "id": "kajal-smudgeproof",
        "name": "Smudge-proof Kajal",
        "image": "https://m.media-amazon.com/images/I/413Ct7TGLFL._SX522_.jpg",
        "features": "Bold Black, 12-hour Stay, 0.35g.",
        "webstores": [
            { "store": "Amazon", "logo": "amazon-logo.png", "price": "₹198", "discount": "6%", "delivery": "₹30", "total": "₹228", "link": "https://www.amazon.in/Eyeconic-Pencil-Waterproof-Smudgeproof-Lasting/dp/B09L7QVYTZ/ref=sr_1_1?crid=11UIKVXM1UFFJ&dib=eyJ2IjoiMSJ9.U4S2fPk2Y9daaMxqZj9rYNej33KGLJuLzCyqGZRm5u_F3MzihIIFgoJ92Q0OysEZPiulrtbA175KhcktO3yklmmwBOlB3jcwPmGdOvKdHQ6ToEH9pdRXAhAJCg7HZ6EzgqHEhPJbFRvrxq_OK8aazdgOSRu4RDjglvbUUPwLpw90JZwmjX-Y2XClJjA2x4K_eA8Qc00LyNIcGFuPBjdQ7kzY8Zjp4FXVrxgqRTlGfYmaiUO86XhG-3eq0ShXYQWhOzNmnkSAjqGhw90IUAiEgLx9XR7hYRQEfVHntvNPU68.i-GGAyz1xzkODCwaIqJHR6Gg5nDM9Fk0o7abqgdCwto&dib_tag=se&keywords=Smudge-proof+Kajal&qid=1731922662&refinements=p_123%3A456549&rnid=91049095031&s=beauty&sprefix=smudge-proof+kajal%2Cbeauty%2C332&sr=1-1" },
            { "store": "Flipkart", "logo": "flipkart-logo.png", "price": "₹179", "discount": "10%", "delivery": "₹20", "total": "₹199", "link": "https://www.flipkart.com/lakm-eyeconic-smudgeproof-waterproof-kajal-pencil-deep-black-0-35-g/p/itm764ced6bdfd47?pid=KJLH43B5CEDGZTKD&lid=LSTKJLH43B5CEDGZTKD4RHN37&marketplace=FLIPKART&q=Smudge-proof+Kajal&store=g9b%2Fffi%2Fttr%2Fdbs&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=07765e05-8c57-4c01-a8b9-058bb37f7c38.KJLH43B5CEDGZTKD.SEARCH&ppt=sp&ppn=sp&ssid=k9bg78340w0000001731922630042&qH=8d87757d6982d220" },
            { "store": "Meesho", "logo": "meesho-logo.png", "price": "₹169", "discount": "15%", "delivery": "₹0", "total": "₹169", "link": "https://www.meesho.com/lakme-eyeconic-kajal-smudge-proof-long-lasting/p/1jhy68" },
            { "store": "Myntra", "logo": "myntra-logo.png", "price": "₹185", "discount": "8%", "delivery": "₹40", "total": "₹225", "link": "https://www.myntra.com/kajal/lakme/lakme-eyeconic-kajal---black-035g/1234567/buy" }
        ]
    },
    {
        id: "air-max-solo",
        name: "Air Max Solo Running Shoes For Men (White, 8)",
        image: "https://m.media-amazon.com/images/I/61mhTbrh+WL._SX500_.jpg",
        features: "Lightweight Design, Durable Build, Comfortable Fit",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹5,217", discount: "40%", delivery: "₹0", total: "₹5,217", link: "https://www.amazon.in/Nike-Running-Shoes-Solo-White-White-White-White-Dx3666-104-8Uk/dp/B0CZHR1VDC/ref=sr_1_48" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹6,086", discount: "30%", delivery: "₹0", total: "₹6,086", link: "https://www.flipkart.com/nike-air-max-solo-running-shoes-men/p/itm5c54bdbccbcb3" },
            { store: "Meesho", logo: "meesho-logo.png", price: "-", discount: "-", delivery: "-", total: "-", link: "-" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹8,695", discount: "15%", delivery: "₹0", total: "₹8,695", link: "https://www.myntra.com/casual-shoes/nike/nike-air-max-solo-mens-shoes/28511748/buy" }
        ]
    },
    {
        id: "adidas-ultraboost-22",
        name: "Adidas Ultraboost 22 Core Black",
        image: "https://m.media-amazon.com/images/I/71Zp0NeBxZL._SX500_.jpg",
        features: "Responsive Cushioning, Lightweight Design, Stylish Look",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹7,410", discount: "61%", delivery: "₹0", total: "₹7,410", link: "https://www.amazon.in/Adidas-Women-Textile-Ultraboost-Running/dp/B0BPD4R7HZ/ref=sr_1_2" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹9,689", discount: "49%", delivery: "₹0", total: "₹9,689", link: "https://www.flipkart.com/adidas-ultraboost-23-running-shoes-men/p/itm922a3a5c9c913" },
            { store: "Meesho", logo: "meesho-logo.png", price: "-", discount: "-", delivery: "-", total: "-", link: "-" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹7,599", discount: "60%", delivery: "₹0", total: "₹7,599", link: "https://www.myntra.com/sports-shoes/adidas/adidas-women-woven-design-round-toe-ultraboost-light-running-shoes/21032628/buy" }
        ]
    },
    {
        id: "carbonado-rock-sling-bag",
        name: "Carbonado Rock Unisex Hardshell Sling Bag",
        image: "https://m.media-amazon.com/images/I/51JvD1HVPwL._SY500_.jpg",
        features: "RFID Blocker, Durable Hardshell, Compact Design",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹1,701", discount: "10%", delivery: "₹0", total: "₹1,701", link: "https://www.amazon.in/Carbonado-Hardshell-Sling-Travel-Commute/dp/B0CKBYZ4NP/ref=sr_1_1_sspa" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹1,709", discount: "30%", delivery: "₹0", total: "₹1,709", link: "https://www.flipkart.com/carbonado-rock-unisex-hardshell-sling-bag-travel-daily-commute-rfid-blocker-cross-body/p/itm940c1191e187b" },
            { store: "Meesho", logo: "meesho-logo.png", price: "-", discount: "-", delivery: "-", total: "-", link: "-" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹2,190", discount: "-", delivery: "₹0", total: "₹2,190", link: "https://www.myntra.com/waist-pouch/carbonado/carbonado-hardshell-waist-pouch/28276036/buy" }
        ]
    },
    {
        id: "rayban-pilot-sunglasses",
        name: "Ray-Ban Unisex UV Protected Green Lens Pilot Sunglasses",
        image: "https://m.media-amazon.com/images/I/51iEZoPcpuL._SX679_.jpg",
        features: "UV Protection, Durable Frame, Stylish Design",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹6,379", discount: "6%", delivery: "₹0", total: "₹6,379", link: "https://www.amazon.in/Ray-Ban-Unisex-Protected-Green-Sunglasses/dp/B00KVC10H4/ref=sr_1_11" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹7,009", discount: "10%", delivery: "₹0", total: "₹7,009", link: "https://www.flipkart.com/ray-ban-aviator-sunglasses/p/itmf3yhfpc9gzzyq" },
            { store: "Meesho", logo: "meesho-logo.png", price: "-", discount: "-", delivery: "-", total: "-", link: "-" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹6,735", discount: "5%", delivery: "₹0", total: "₹6,735", link: "https://www.myntra.com/sunglasses/ray-ban/ray-ban-unisex-uv-protected-lens-pilot-sunglasses---0rb3026iw202762/255559/buy" }
        ]
    },
    {
        id: "tommy-hilfiger-polo",
        name: "Tommy Hilfiger Modern Essentials Slim Fit Polo Shirt",
        image: "https://m.media-amazon.com/images/I/61WFnYMB0xL._SX522_.jpg",
        features: "Soft Fabric, Slim Fit, Classic Style",
        webstores: [
            { store: "Amazon", logo: "amazon-logo.png", price: "₹3,999", discount: "-", delivery: "₹0", total: "₹3,999", link: "https://www.amazon.in/Tommy-Hilfiger-Collar-Sleeves-T-Shirt/dp/B0D7PV33SC/ref=sr_1_41" },
            { store: "Flipkart", logo: "flipkart-logo.png", price: "₹3,219", discount: "30%", delivery: "₹0", total: "₹3,219", link: "https://www.flipkart.com/tommy-hilfiger-modern-essentials-slim-fit-polo-shirt/p/itmf3yhfpc9gzzyq" },
            { store: "Meesho", logo: "meesho-logo.png", price: "-", discount: "-", delivery: "-", total: "-", link: "-" },
            { store: "Myntra", logo: "myntra-logo.png", price: "₹3,799", discount: "5%", delivery: "₹0", total: "₹3,799", link: "https://www.myntra.com/sunglasses/ray-ban/ray-ban-unisex-uv-protected-lens-pilot-sunglasses---0rb3026iw202762/255559/buy" }
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
