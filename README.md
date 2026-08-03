<div align="center">

# 🎭 VFR Catalog

**Vitrine de customizações do provador virtual — uma página por cliente, cada uma com o próprio visual do widget rodando de verdade.**

Feito para mostrar, lado a lado, o quanto o mesmo provador pode mudar de cara.

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

</div>

---

## 📖 Sobre o projeto

Explicar que o provador virtual é customizável funciona muito melhor mostrando do que descrevendo. O problema é que cada exemplo vive na loja de um cliente diferente — abrir cinco abas e navegar até a página de produto de cada uma não é uma demonstração, é uma peregrinação.

O **VFR Catalog** junta tudo em um lugar: uma home com cards por cliente e, dentro de cada página, o widget real daquela customização carregado e pronto para abrir.

Cada página carrega os prescripts de **desktop e mobile** daquela variação, então o comportamento responsivo também aparece na demonstração.

## 🗂️ Páginas

| Rota | Cliente | Direção visual |
| ---- | ------- | -------------- |
| `/` | — | Home com os cards do catálogo |
| `/cea` | C&A | O clássico com bordas mais suaves |
| `/purusha` | Purusha People | Inspiração na natureza |
| `/nature` | — | Variação temática |

Cada página de cliente segue a mesma anatomia: hero com título, seções descritivas explicando a parceria e o widget carregado via prescript.

## ✨ Funcionalidades

- 🏠 **Home em cards** com imagem, nome e descrição por cliente
- 🎨 **Uma página por customização**, cada uma com o CSS real do cliente
- 📱 **Prescripts de desktop e mobile** carregados juntos, cobrindo os dois comportamentos
- 🧭 **NavBar e Footer compartilhados** entre as páginas
- ✨ **Animações com GSAP**
- 🧩 **CSS por rota** (`VFRPage.css`, `Home.css`) — cada página tem seus próprios estilos

## 🛠️ Stack

| Tecnologia | Versão | Uso |
| ---------- | ------ | --- |
| [Next.js](https://nextjs.org/) | 15 | Framework React (App Router + Turbopack) |
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [GSAP](https://gsap.com/) | 3 | Animações |
| [Lucide React](https://lucide.dev/) | 0.476 | Ícones |
| CSS puro | — | Um arquivo por página/componente |

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm, yarn, pnpm ou bun

### Instalação e execução

```bash
git clone https://github.com/Jlvieira0909/vfr-catalog.git
cd vfr-catalog
npm install

npm run dev      # desenvolvimento (Turbopack)
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # ESLint
```

Abra [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura

```
vfr-catalog/
├── src/
│   ├── app/
│   │   ├── page.tsx           # home com os cards
│   │   ├── layout.tsx
│   │   ├── home/Home.css
│   │   ├── cea/               # customização C&A
│   │   ├── purusha/           # customização Purusha People
│   │   └── nature/            # variação temática
│   └── components/
│       ├── VFRCard/           # card da home
│       ├── NavBar/
│       └── Footer/
└── next.config.ts
```

## ➕ Adicionando uma customização

1. Crie a pasta da rota em `src/app/<cliente>/` com `page.tsx` e `VFRPage.css`
2. No `page.tsx`, carregue os dois prescripts daquela variação (desktop e mobile)
3. Adicione um `<VFRCard />` na home apontando para a nova rota

## ⚠️ Notas

- **Os cards da home referenciam uma rota `/og`** que não existe no repositório; o card de Calzedonia leva a um 404. Vale criar a página ou remover o card.
- **`id="sizebay-vfr-v4"` está duplicado** nas tags de desktop e mobile de cada página. Funciona, mas IDs de HTML devem ser únicos — vale diferenciar (`...-desktop` / `...-mobile`).
- **As imagens de C&A e Calzedonia são a mesma** (`CEAHeader.png`) na home.
- Este projeto **não tem deploy público** configurado. Rode localmente ou publique na Vercel.

## 🧩 Projeto relacionado

Para editar visualmente o CSS de uma customização em vez de escrevê-lo à mão, veja o [**szb-css-creator**](https://github.com/Jlvieira0909/szb-css-creator).

---

<div align="center">

Feito com ❤️ por [João Luiz Vieira](https://github.com/Jlvieira0909)

</div>
