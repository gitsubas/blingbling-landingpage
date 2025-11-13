// server.js - Bling Bling Landing Page
try {
  require('dotenv').config();
} catch (_) {}

const express = require('express');
const path = require('path');

const app = express();

// Config
const CFG = {
  SITE_NAME: process.env.SITE_NAME || 'Bling Bling',
  FACEBOOK_URL: process.env.FACEBOOK_URL || '#',
  INSTAGRAM_URL: process.env.INSTAGRAM_URL || '#',
  TIKTOK_URL: process.env.TIKTOK_URL || '#',
  ADDRESS: process.env.ADDRESS || 'Bhaktapur, Nepal',
  PHONE: process.env.PHONE || '+977-0000000000',
  EMAIL: process.env.EMAIL || 'info@example.com',
  MAP_URL: process.env.MAP_URL || '#',
  GOOGLE_REVIEW_URL: process.env.GOOGLE_REVIEW_URL || '#',
  LAUNCH_MESSAGE: process.env.LAUNCH_MESSAGE || 'We are launching our online store soon.',
  PORT: process.env.PORT || 3000,
};

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Landing page route
app.get('/', (_, res) => {
  const theme = {
    primary: '#d84a7d',
    primaryDark: '#b63f6a',
    textOnPrimary: '#ffffff',
    backdrop: 'rgba(0,0,0,0.35)',
  };

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${CFG.SITE_NAME}</title>
<link rel="icon" href="/public/images/logo.jpg" />
<style>
  :root{
    --primary:${theme.primary};
    --primaryDark:${theme.primaryDark};
    --textOnPrimary:${theme.textOnPrimary};
    --backdrop:${theme.backdrop};
  }
  *{box-sizing:border-box}
  html,body{height:100%;margin:0;font-family:system-ui,Roboto,Arial,sans-serif;color:#222}
  body{
    background: linear-gradient(var(--backdrop), var(--backdrop)),
                url('/public/images/background-img.jpg') center/cover no-repeat fixed;
    display:flex; align-items:center; justify-content:center;
    padding: 24px;
  }
  .card{
    width: min(100%, 980px);
    background:rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    overflow:hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,.25);
  }
  .hero{
    padding:48px 28px 28px; text-align:center;
  }
  .brand{
    display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap;
  }
  .brand img{height:86px; width:auto; object-fit:contain}
  .brand h1{font-size: clamp(28px, 4.5vw, 52px); margin:0; color:#333}
  .tag{
    margin-top:16px; display:inline-block; padding:10px 16px; border-radius:999px;
    background:var(--primary); color:var(--textOnPrimary); font-weight:900;
  }
  .content{padding: 24px; display:grid; grid-template-columns:1fr; gap:24px}
  @media(min-width:840px){ .content{grid-template-columns: 1.2fr .8fr} }
  .panel{
    background:rgba(255, 255, 255, 0.5); border:1px solid #eee; border-radius:16px; padding:18px;
  }
  .panel h2{margin:0 0 10px; font-size:20px}
  a.btn{
    display:inline-block; text-decoration:none; font-weight:600;
    padding:12px 16px; border-radius:12px; border:2px solid var(--primary);
    color:var(--primary); transition: .2s;
  }
  a.btn:hover{ background:var(--primary); color:rgba(255, 255, 255, 0.5); border-color:var(--primaryDark) }
  .socials{ display:flex; gap:12px; flex-wrap:wrap }
  .socials a{ display:inline-flex; align-items:center; gap:8px; text-decoration:none;
    padding:10px 12px; border:1px solid #eee; border-radius:12px; color:#333; background:#fafafa}
  .socials a:hover{ border-color:var(--primary); color:var(--primary) }
  .footer{
    padding:14px 22px; display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;
    background:#f9f9fb; border-top:1px solid #eee;
  }
  .footer small{color:#666}
</style>
</head>
<body>
  <main class="card">
    <section class="hero">
      <div class="brand">
        <img src="/public/images/logo.jpg" alt="${CFG.SITE_NAME} logo" />
        
      </div>
      <div class="tag">${CFG.LAUNCH_MESSAGE}</div>
    </section>

    <section class="content">
      <div class="panel">
        <h2>Find Us</h2>
        <p><strong>Address:</strong> ${CFG.ADDRESS}</p>
        <p><strong>Phone:</strong> <a href="tel:${CFG.PHONE.replace(/\s+/g,'')}" class="btn">${CFG.PHONE}</a></p>
        
        <p style="margin-top:12px;">
          <a class="btn" href="${CFG.MAP_URL}" target="_blank">Open Map</a>
          &nbsp;
          <a class="btn" href="${CFG.GOOGLE_REVIEW_URL}" target="_blank">Leave a Review</a>
        </p>
      </div>

      <div class="panel">
        <h2>Follow Us</h2>        
        <div class="socials">
          <a href="${CFG.FACEBOOK_URL}" target="_blank">Facebook</a>
          <a href="${CFG.INSTAGRAM_URL}" target="_blank">Instagram</a>
          <a href="${CFG.TIKTOK_URL}" target="_blank">TikTok</a>
        </div>
       
      </div>
    </section>

    <footer class="footer">
      <small>© ${new Date().getFullYear()} ${CFG.SITE_NAME}. All rights reserved.</small>
      <small>Theme color inspired by our logo.</small>
    </footer>
  </main>
</body>
</html>`);
});

app.listen(CFG.PORT, () => {
  console.log(`✅ ${CFG.SITE_NAME} landing running on http://localhost:${CFG.PORT}`);
});
