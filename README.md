# Portfolio Website

A self-hosted portfolio website showcasing education, employment history, and creative work.

- **Domain**: [portfolio.musicat.me](https://portfolio.musicat.me)
- **Hosted on**: Raspberry Pi with Apache2
- **Media storage**: BackBlaze B2
- **Tunnel**: Cloudflare Tunnel

## Tech Stack

- HTML / CSS / JavaScript
- Apache2 web server
- BackBlaze B2 (public bucket for media assets)
- Cloudflare Tunnel (for external access)

## Deployment

Files are deployed via `scp` to the Raspberry Pi:

```bash
scp -r ./* ben@100.75.232.46:/var/www/portfolio/
```
