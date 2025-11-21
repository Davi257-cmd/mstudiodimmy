## 1. Diretrizes de Design

O design do M Studio Dimmy deve transmitir **sofisticação, modernidade e exclusividade**, refletindo a qualidade premium dos serviços oferecidos. A abordagem é minimalista mas impactante, com foco na experiência visual inspiradora que valoriza o trabalho do profissional e facilita a jornada do usuário.

## 2. Paleta de Cores

### 2.1 Cores Primárias
| Cor | Hex | Uso | Significado |
|-----|-----|-----|-------------|
| Preto | `#000000` | Fundos, textos, bordas | Sofisticação, elegância, autoridade |
| Branco | `#FFFFFF` | Fundos principais, contraste | Pureza, limpeza, profissionalismo |

### 2.2 Cores Neutras
| Cor | Hex | Uso | Significado |
|-----|-----|-----|-------------|
| Cinza Claro | `#F5F5F5` | Fundos secundários, cards | Neutralidade, equilíbrio |
| Cinza Médio | `#E5E5E5` | Bordas, divisórias | Subtileza, organização |
| Cinza Escuro | `#A0A0A0` | Textos secundários, ícones | Sofisticação, legibilidade |
| Cinza Muito Escuro | `#404040` | Textos principais, hover | Profundidade, contraste |

### 2.3 Cores de Destaque
| Cor | Hex | Uso | Significado |
|-----|-----|-----|-------------|
| Dourado | `#D4AF37` | CTA principal, highlights | Luxo, premium, qualidade |
| Sépia | `#CD853F` | Detalhes, acentos | Calor, sofisticação, beleza |
| Magenta | `#FF00FF` | Pontos de atenção, badges | Energia, feminilidade, modernidade |
| Magenta Escuro | `#C2185B` | Hover states, bordas | Profundidade, elegância |

### 2.4 Aplicação das Cores
```css
/* Exemplos de aplicação */
.hero-title { color: #000000; } /* Títulos principais */
.hero-subtitle { color: #404040; } /* Subtítulos */
.cta-button { 
  background: #D4AF37; 
  color: #FFFFFF;
} /* Botões principais */
.service-card { 
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
} /* Cards de serviços */
.footer { background: #000000; } /* Rodapé */
```

## 3. Tipografia

### 3.1 Hierarquia Tipográfica
| Elemento | Fonte | Tamanho | Peso | Cor |
|----------|--------|---------|------|-----|
| H1 Hero | Playfair Display | 48-64px | 700 | #000000 |
| H2 Seções | Playfair Display | 36-48px | 600 | #000000 |
| H3 Cards | Playfair Display | 24-32px | 500 | #000000 |
| Body Text | Inter | 16-18px | 400 | #404040 |
| Small Text | Inter | 14px | 300 | #A0A0A0 |
| CTAs | Inter | 16-18px | 600 | #FFFFFF ou #D4AF37 |

### 3.2 Estilos de Texto
```css
/* Estilos base */
.font-elegant { font-family: 'Playfair Display', serif; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Títulos */
.text-hero { 
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Corpo de texto */
.text-body {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

/* CTAs */
.text-cta {
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 3.3 Espaçamento e Alinhamento
- **Line-height**: 1.4-1.6 para legibilidade ótima
- **Letter-spacing**: -0.02em para títulos grandes, 0.05em para CTAs
- **Text-align**: Centralizado para hero e seções principais, left-aligned para conteúdo longo
- **Max-width**: 65-75 caracteres por linha para textos de parágrafo

## 4. Componentes de UI

### 4.1 Botões
```css
/* Botão Primário */
.btn-primary {
  background: linear-gradient(135deg, #D4AF37, #CD853F);
  color: #FFFFFF;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
}

/* Botão Secundário */
.btn-secondary {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
  padding: 10px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #000000;
  color: #FFFFFF;
}
```

### 4.2 Cards de Serviços
```css
.service-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #E5E5E5;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  border-color: #D4AF37;
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #D4AF37, #CD853F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
```

### 4.3 Formulários
```css
.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #E5E5E5;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #FFFFFF;
}

.form-input:focus {
  outline: none;
  border-color: #D4AF37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-input.error {
  border-color: #FF00FF;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #404040;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## 5. Animações e Transições

### 5.1 Animações de Entrada
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.8s ease-out;
}

/* Scale In */
@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.5s ease-out;
}
```

### 5.2 Transições de Hover
```css
/* Transições suaves */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Glow effect */
.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  filter: brightness(1.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}
```

### 5.3 Animações de Scroll
- **Trigger on scroll**: Elementos animam quando entram na viewport
- **Stagger animation**: Animações sequenciais para listas
- **Parallax suave**: Movimento sutil no hero section
- **Progress indicators**: Barra de progresso durante scroll

## 6. Princípios Mobile-First

### 6.1 Breakpoints
```css
/* Mobile First Approach */
/* Mobile: 320px - 767px (default) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

### 6.2 Touch-Friendly Elements
- **Touch targets**: Mínimo 44x44px para botões
- **Spacing**: Espaçamento generoso entre elementos clicáveis
- **Gestures**: Suporte para swipe em carrosséis
- **Viewport**: Meta tags apropriadas para viewport

### 6.3 Performance Mobile
- **Lazy loading**: Imagens carregam sob demanda
- **Progressive enhancement**: Funcionalidade básica sem JavaScript
- **Optimized images**: WebP com fallback, múltiplos tamanhos
- **Minimal JavaScript**: Bundle otimizado para mobile

## 7. Layout e Grid System

### 7.1 Container e Grid
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
  gap: 24px;
}

/* Grid responsivo para serviços */
.grid-services {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-services {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 7.2 Sistema de Espaçamento
```css
/* Espaçamento consistente */
.section {
  padding: 80px 0;
}

@media (max-width: 767px) {
  .section {
    padding: 48px 0;
  }
}

/* Utility classes */
.spacing-xs { margin: 8px; }
.spacing-sm { margin: 16px; }
.spacing-md { margin: 24px; }
.spacing-lg { margin: 48px; }
.spacing-xl { margin: 80px; }
```

## 8. Componentes Específicos

### 8.1 Hero Section
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%);
  position: relative;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
```

### 8.2 Navigation
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #E5E5E5;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-link {
  color: #404040;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #D4AF37;
}
```

### 8.3 WhatsApp Float Button
```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.6);
}

@media (max-width: 767px) {
  .whatsapp-float {
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 56px;
  }
}
```

## 9. Dark Mode (Opcional)

### 9.1 Variáveis CSS para Temas
```css
:root {
  --color-background: #FFFFFF;
  --color-text: #404040;
  --color-primary: #000000;
  --color-accent: #D4AF37;
  --color-border: #E5E5E5;
}

[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-text: #e5e5e5;
  --color-primary: #ffffff;
  --color-accent: #FFD700;
  --color-border: #404040;
}
```

## 10. Design Tokens

### 10.1 Variáveis CSS Globais
```css
:root {
  /* Cores */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gray-50: #F5F5F5;
  --color-gray-100: #E5E5E5;
  --color-gray-200: #A0A0A0;
  --color-gray-800: #404040;
  --color-gold: #D4AF37;
  --color-sepia: #CD853F;
  --color-magenta: #FF00FF;
  --color-magenta-dark: #C2185B;
  
  /* Tipografia */
  --font-elegant: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
  
  /* Espaçamento */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 80px;
  
  /* Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 50%;
  
  /* Sombras */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.16);
  
  /* Transições */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

## 11. Acessibilidade Visual

### 11.1 Contraste de Cores
- **Ratio mínimo**: 4.5:1 para texto normal
- **Ratio mínimo**: 3:1 para texto grande (18pt+)
- **Ratio mínimo**: 7:1 para texto importante
- **Teste**: Verificar todas as combinações de cores

### 11.2 Estados Visuais
```css
/* Focus states */
.focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}

/* Hover states */
.hover-state {
  transition: all 0.3s ease;
}

/* Active states */
.active-state {
  transform: scale(0.98);
}

/* Disabled states */
.disabled-state {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 11.3 Suporte a Preferências do Usuário
```css
/* Respeitar preferências de movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Alto contraste */
@media (prefers-contrast: high) {
  :root {
    --color-text: #000000;
    --color-background: #FFFFFF;
    --color-border: #000000;
  }
}
```