# Unique Odontologia e Estética — site

Site estático (HTML + CSS + um JS pequeno), sem build. É só abrir o `index.html` ou subir a pasta em qualquer hospedagem.

**No ar:** https://gbrvalerio.github.io/unique-odontologia/ (GitHub Pages, publica direto da branch `main`). Todo push na `main` atualiza o site em cerca de 1 minuto.

Quando for para o domínio próprio, troque a URL absoluta de `assets/og.png` no `<head>` (meta `og:image` e JSON-LD) pelo novo endereço.

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
