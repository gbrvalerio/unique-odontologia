# Unique Odontologia e Estética — site

Site estático (HTML + CSS + um JS pequeno), sem build. É só abrir o `index.html` ou subir a pasta em qualquer hospedagem.

**Domínio:** https://uniqueodontologiabsb.com.br/ (GitHub Pages, publica direto da branch `main`). Todo push na `main` atualiza o site em cerca de 1 minuto.

O arquivo `CNAME` mantém o domínio personalizado no GitHub Pages. O DNS é gerenciado no Registro.br: o domínio principal usa os quatro registros A do GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`); `www` usa CNAME para `gbrvalerio.github.io`. O endereço com `www` e a URL antiga do GitHub Pages redirecionam para o domínio principal após a configuração do DNS. HTTPS deve permanecer obrigatório assim que o certificado estiver disponível.

## Estrutura

```
index.html        página única
css/style.css     estilos
js/main.js        menu mobile, header ao rolar, animações de entrada
assets/           logos com fundo transparente, favicon, imagem de compartilhamento
```

## Dados da clínica

Contato, endereço, horário, mapa, Instagram e nota do Google já estão preenchidos com os dados reais. Para alterar qualquer um deles, edite o `index.html`:

| O quê | Onde |
|---|---|
| WhatsApp `5561982212650` | todos os links `wa.me` (header, hero, cards, contato, botão flutuante) |
| Telefone fixo `(61) 3039-5443` | seção Contato, rodapé e `telephone` no JSON-LD |
| Endereço | seção Contato, rodapé e `address` no JSON-LD |
| Horário | seção Contato, rodapé e `openingHours` no JSON-LD |
| Nota do Google `4,6` | hero (cápsula creme) e seção Contato. Não atualiza sozinha: confira no perfil de vez em quando |
| Mapa | `src` do `<iframe>` na seção Contato |
| Instagram | seção Contato, rodapé e `sameAs` no JSON-LD |

**Pendência:** confirmar o nome completo do convênio "Odont" na seção Convênios.

## Fontes

Fraunces (títulos) e Figtree (texto) via Google Fonts. Se quiser servir localmente, baixe os arquivos e troque o `<link>` no `<head>`.
