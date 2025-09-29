# MANGA COIN 🎌

The ultimate meme token celebrating manga culture with AI-generated content, staking rewards, and fair governance by token holders!

## 🚀 Live Website

Visit our landing page: [https://manga-shido.casa/](https://manga-shido.casa/)

## 📋 Token Information

- **Name:** MANGA-COIN
- **Symbol:** MANGA
- **Total Supply:** 69,000,000,000 MANGA
- **Contract Address:** `0x2987D36a348F5D9b94B1A21B956D7E936Bd5Ba13`
- **Network:** Shido Blockchain
- **Founders:** CoinKami
- **OT Members:** CREAZY-CHICKEN, CoinKami

## 🎯 Our Philosophy

- **Community First:** Building a fun, engaged Meme Shido network community
- **NFT Marketplace & Staking Rewards:** Earn while having fun
- **Fair Governance:** Token holders govern for a trustworthy token
- **Exclusive Fan Events:** Connect and celebrate manga culture
- **AI-Generated Memes:** Sharing joy through AI because we can!
- **Unite Through Fun:** A project to bring people together

## 📊 Tokenomics

- **Founders:** 35%
- **Treasury:** 20%
- **Staking Reserve:** 15%
- **OTC Sales:** 10%
- **Liquidity Pool:** 10%
- **Partnerships:** 5%
- **Listings:** 5%

## 🔗 Important Links

- [Shido Explorer](https://shidoscan.net/token/0x2987D36a348F5D9b94B1A21B956D7E936Bd5Ba13)
- [Swap Tokens](https://pool.shido.io/swap)
- [Shido DEX](https://app.shido.io/)
- [Liquidity Pool](https://pool.shido.io/pools)

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Deployment:** GitHub Pages with GitHub Actions
- **Custom Domain:** manga-shido.casa
- **Features:**
  - Responsive design
  - Interactive SVG pie chart for tokenomics
  - Smooth animations and transitions
  - Mobile-friendly navigation
  - Copy-to-clipboard functionality
  - SEO optimized

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

### Local Development

1. Clone the repository
2. Create dev ssl certificate:
   ```bash
   openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes -subj "/C=KY/ST=Grand Cayman/L=George Town/O=MANGA-COIN/OU=Development/CN=localhost" -addext "subjectAltName=DNS:localhost,IP:127.0.0.1,IP:::1"
   ```
3. Serve the files using python web server:
   ```bash
   python3 -c "import http.server, ssl, socketserver; httpd = socketserver.TCPServer(('', 8080), http.server.SimpleHTTPRequestHandler); httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./server.pem', server_side=True); print('🚀 HTTPS Server: https://localhost:8080'); httpd.serve_forever()"
   ```
4. Open `http://localhost:8080` in your browser

## 📱 Features

- **Responsive Design:** Looks great on all devices
- **Interactive Elements:** Hover effects, animations, and clickable elements
- **Performance Optimized:** No external dependencies for core functionality
- **SEO Ready:** Meta tags, sitemap, and robots.txt included
- **Accessibility:** Semantic HTML and proper contrast ratios

## 🎨 Design

The website features a manga/anime-inspired design with:
- Dark theme with colorful accents
- Gradient backgrounds and effects
- Cute animated manga character
- Fun emoji-based icons
- Smooth transitions and hover effects

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the MANGA COIN community! 🚀🌙