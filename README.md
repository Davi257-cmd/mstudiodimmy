# M Studio Dimmy - Site Institucional Premium

Um site institucional premium e elegante para o M Studio Dimmy (@mstudiodimmy), desenvolvido com React + Vite + TypeScript, valorizando a trajetória, os diferenciais e a personalidade da artista Dimmy Marinho.

## 🌟 Sobre o Projeto

O M Studio Dimmy é um site institucional que transmite exclusividade, modernidade, confiança e acessibilidade. O projeto foi desenvolvido seguindo rigorosamente as diretrizes da base de conhecimento fornecida, com foco em:

- Estabelecer autoridade e credibilidade no mercado de beleza
- Facilitar agendamentos via WhatsApp Business
- Apresentar portfólio profissional com galeria de resultados
- Reforçar parcerias com marcas premium (JO's Professional)
- Experiência mobile-first com carregamento rápido e SEO otimizado

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Primárias**: Preto (#000000), Branco (#FFFFFF)
- **Neutras**: Tons de cinza (#F5F5F5, #E5E5E5, #A0A0A0, #404040)
- **Destaques**: Dourado (#D4AF37), Sépia (#CD853F), Magenta (#FF00FF, #C2185B)

### Tipografia
- **Títulos**: Playfair Display (elegante serifada)
- **Corpo**: Inter (sans-serif moderna)

### Características Visuais
- Design minimalista mas impactante
- Animações suaves e transições elegantes
- Layout responsivo mobile-first
- Alto contraste para acessibilidade
- Elementos visuais premium com toques dourados

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18+** com TypeScript para type safety
- **Vite** para desenvolvimento rápido e build otimizado
- **Tailwind CSS** para estilização consistente
- **Framer Motion** para animações fluidas
- **Lucide React** para ícones consistentes

### Performance e SEO
- **SEO otimizado** com meta tags dinâmicas
- **Lazy loading** de imagens e componentes
- **Code splitting** para bundles otimizados
- **WebP format** com fallback para imagens
- **Core Web Vitals** otimizados

### Integrações
- **WhatsApp Business API** para agendamentos
- **Instagram Basic Display API** para feed integrado
- **Google Maps Embed** para localização
- **Google Analytics 4** para tracking

## 📋 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── common/          # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Typography.tsx
│   │   └── SEO.tsx
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── sections/        # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Partners.tsx
│   │   └── Contact.tsx
│   └── ui/              # Componentes de UI específicos
│       ├── ServiceCard.tsx
│       └── TestimonialCard.tsx
├── pages/               # Páginas completas
│   └── Home.tsx
├── hooks/               # Custom hooks
├── store/               # Estado global Zustand
├── utils/               # Funções utilitárias
├── types/               # Definições TypeScript
└── styles/              # Estilos globais
```

## 🎯 Funcionalidades Principais

### 1. Hero Section Impactante
- Foto profissional de Dimmy Marinho
- Título inspirador: "Realce sua beleza com quem é referência no mercado"
- CTA principal para agendamento via WhatsApp
- Animações suaves de entrada

### 2. Sobre o Studio & Artista
- Storytelling da trajetória profissional
- Valores: excelência, educação constante, inovação, personalização
- Destaque de reconhecimentos e cases de sucesso
- CTA secundário para conhecer mais

### 3. Serviços & Especialidades
- Cards elegantes para cada serviço:
  - Design de Sobrancelhas
  - Maquiagem Profissional
  - Consultoria de Imagem
  - Design e Estética
  - Workshops e Cursos
- Ícones premium e micro animações
- Botões "Solicitar Orçamento" com mensagens pré-formatadas

### 4. Depoimentos de Clientes
- Carrossel responsivo com avaliações reais
- Fotos, nomes e serviços realizados
- Sistema de 5 estrelas
- Estatísticas de satisfação

### 5. Galeria Visual
- Grid responsivo 3-4 colunas (desktop) / 1-2 colunas (mobile)
- Integração com Instagram @mstudiodimmy
- Efeitos hover suaves
- Botão "Siga @mstudiodimmy"

### 6. Parceiros & Marcas
- Destaque especial para JO's Professional
- Logos e descrições de parceiros
- CTA para propor parcerias

### 7. Agendamento/Orçamento
- Formulário institucional completo
- Integração direta com WhatsApp
- Campos: nome, telefone, serviço, mensagem
- Validação e envio otimizado

### 8. Localização
- Mapa integrado Google Maps
- Endereço completo: Rua Oliveira Sobrinho, Bonsucesso
- Botão "Ver no Google Maps"
- Informações de acesso e estacionamento

### 9. Footer Completo
- Logo compacta
- Links rápidos de navegação
- Redes sociais (Instagram, WhatsApp)
- Informações de contato
- Política de privacidade

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mstudio-dimmy.git

# Entre no diretório
cd mstudio-dimmy

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Build otimizado
npm run build

# Preview do build
npm run preview
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Acessibilidade, SEO)
- **Core Web Vitals**: 
  - LCP < 2.5s
  - FID < 100ms  
  - CLS < 0.1
- **Bundle Size**: Otimizado com code splitting
- **Loading**: Lazy loading de imagens e componentes

## 🔧 Configurações Adicionais

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_INSTAGRAM_TOKEN=seu_token_instagram
VITE_GOOGLE_MAPS_KEY=sua_chave_google_maps
VITE_GOOGLE_ANALYTICS_ID=seu_id_ga4
```

### Integrações
- **WhatsApp**: Configure o número de telefone em `src/utils/constants.ts`
- **Instagram**: Adicione o token de acesso no arquivo `.env`
- **Google Maps**: Configure a chave de API no arquivo `.env`

## 🎨 Customização

### Cores
Edite as variáveis CSS em `src/index.css` ou `tailwind.config.js`

### Fontes
Altere as fontes em `src/index.css` e atualize o Tailwind config

### Conteúdo
Modifique os textos e informações nos arquivos de seções

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais oficiais do M Studio Dimmy:

- **WhatsApp**: (85) 99616-3468
- **Instagram**: @mstudiodimmy
- **Email**: contato@mstudiodimmy.com.br

## 📄 Licença

Este projeto é desenvolvido exclusivamente para o M Studio Dimmy. Todos os direitos reservados.

---

Desenvolvido com ♥ por Studio Web
Última atualização: Novembro 2024
