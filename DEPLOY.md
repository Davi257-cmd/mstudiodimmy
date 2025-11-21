# 🚀 Guia de Deploy na Vercel

Este guia contém as instruções para fazer deploy do projeto M Studio Dimmy na Vercel.

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Git configurado
- Projeto no GitHub, GitLab ou Bitbucket (recomendado)

## 🔧 Passo a Passo

### 1. Preparar o Repositório

```bash
# Certifique-se de que todas as mudanças estão commitadas
git add .
git commit -m "Preparando para deploy na Vercel"
git push origin main
```

### 2. Deploy via Dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"** ou **"New Project"**
3. Conecte seu repositório (GitHub, GitLab ou Bitbucket)
4. Selecione o repositório do projeto
5. Configure o projeto:
   - **Framework Preset**: Vite (detectado automaticamente)
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: `npm run build` (já configurado no vercel.json)
   - **Output Directory**: `dist` (já configurado no vercel.json)
   - **Install Command**: `npm install`

### 3. Variáveis de Ambiente (Opcional)

Se você usar variáveis de ambiente, adicione-as no painel da Vercel:

1. Vá para **Settings** > **Environment Variables**
2. Adicione as variáveis necessárias:
   ```
   VITE_INSTAGRAM_TOKEN=seu_token
   VITE_GOOGLE_MAPS_KEY=sua_chave
   VITE_GOOGLE_ANALYTICS_ID=seu_id
   ```

### 4. Deploy Automático

Após a primeira configuração:
- **Cada push para `main`** fará deploy automático para produção
- **Pull requests** terão preview deployments automáticos

### 5. Deploy via CLI (Alternativa)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy (primeira vez - configuração interativa)
vercel

# Deploy para produção
vercel --prod
```

## ✅ Verificações Pós-Deploy

1. ✅ Verificar se o site está acessível
2. ✅ Testar todas as rotas (SPA routing)
3. ✅ Verificar responsividade mobile
4. ✅ Testar integrações (WhatsApp, Instagram)
5. ✅ Verificar performance (Lighthouse)

## 🔄 Atualizações

Para atualizar o site:
```bash
# Fazer mudanças localmente
git add .
git commit -m "Descrição das mudanças"
git push origin main

# Deploy automático será executado
```

## 📝 Notas Importantes

- O arquivo `vercel.json` já está configurado para SPA routing
- O build usa `npm run build` que gera o bundle otimizado
- O diretório de saída é `dist/`
- Todos os arquivos necessários estão no `.gitignore`

## 🐛 Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Execute `npm run build` localmente para testar

### Erro de Roteamento (404)
- Verifique se o `vercel.json` está na raiz
- Confirme que as rotas estão configuradas corretamente

### Imagens não aparecem
- Verifique os caminhos das imagens em `/public`
- Certifique-se que as imagens estão no repositório

## 📞 Suporte

Para mais informações sobre deploy na Vercel:
- [Documentação Vercel](https://vercel.com/docs)
- [Vite + Vercel](https://vercel.com/docs/frameworks/vite)

