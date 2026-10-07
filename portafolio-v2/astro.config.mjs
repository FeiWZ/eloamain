import { defineConfig } from 'astro/config';

// La base se toma del nombre del repositorio donde corre GitHub Actions.
// Así funciona igual en eloadev/proyects (/proyects/) y en eloadev/proyects0 (/proyects0/)
// sin tener que cambiar este archivo. En local (npm run dev) usa /proyects/.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? 'eloadev/proyects').split('/');

export default defineConfig({
  site: `https://${owner.toLowerCase()}.github.io`,
  base: `/${repo}/`,
});
