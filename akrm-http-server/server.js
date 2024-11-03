const http = require('http');

const products = [
    {
      "id": 0,
      "img": "img/product/product1.jpg",
      "img_hover": "img/product/product-1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 185,
      "old_price": 225
    },
    {
      "id": 1,
      "img": "img/product/product2.jpg",
      "img_hover": "img/product/product-2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 100,
      "old_price": 120
    },
    {
      "id": 2,
      "img": "img/product/product3.jpg",
      "img_hover": "img/product/product-3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 140,
      "old_price": 200
    },
    {
      "id": 3,
      "img": "img/product/product4.jpg",
      "img_hover": "img/product/product-4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90,
      "old_price": 110
    },
    {
      "id": 4,
      "img": "img/product/product5.jpg",
      "img_hover": "img/product/product-5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 350,
      "old_price": 420
    },
    {
      "id": 5,
      "img": "img/product/product6.jpg",
      "img_hover": "img/product/product-6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 115,
      "old_price": 235
    },
    {
      "id": 6,
      "img": "img/product/product7.jpg",
      "img_hover": "img/product/product-7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 225,
      "old_price": 280
    },
    {
      "id": 7,
      "img": "img/product/product8.jpg",
      "img_hover": "img/product/product-8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 150,
      "old_price": 200
    },
    {
      "id": 8,
      "img": "img/product/product-1.jpg",
      "img_hover": "img/product/product1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 9,
      "img": "img/product/product-2.jpg",
      "img_hover": "img/product/product2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 300
    },
    {
      "id": 10,
      "img": "img/product/product-3.jpg",
      "img_hover": "img/product/product3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 250
    },
    {
      "id": 11,
      "img": "img/product/product-4.jpg",
      "img_hover": "img/product/product4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 120
    },
    {
      "id": 12,
      "img": "img/product/product-5.jpg",
      "img_hover": "img/product/product5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90
    },
    {
      "id": 13,
      "img": "img/product/product-6.jpg",
      "img_hover": "img/product/product6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 129
    },
    {
      "id": 14,
      "img": "img/product/product-7.jpg",
      "img_hover": "img/product/product7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180
    },
    {
      "id": 15,
      "img": "img/product/product-8.jpg",
      "img_hover": "img/product/product8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 60
    }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/products') {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow GET requests
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow certain headers

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 2024;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/products`);
});

