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

## O que trocar antes de publicar

Tudo está marcado com valores de exemplo. Busque e substitua em `index.html`:

| Procurar | Trocar por |
|---|---|
| `5511999999999` | número do WhatsApp com DDI+DDD, só dígitos (aparece em todos os links `wa.me`) |
| `(11) 99999-9999` | WhatsApp formatado |
| `(11) 3333-3333` | telefone fixo (ou remova o bloco) |
| `Rua Exemplo, 123, Sala 45` / `Bairro, Cidade, UF` | endereço |
| `Segunda a sexta, 8h às 19h` / `Sábado, 8h às 13h` | horário (também no rodapé e no JSON-LD) |
| `4,9` | nota real do Google (aparece no hero e no contato) |
| `LINK_AVALIACOES_GOOGLE` | link do perfil da clínica no Google (Maps > Compartilhar) |
| `Odont` | nome completo desse convênio |

**Mapa:** no Google Maps, abra a clínica > Compartilhar > Incorporar um mapa, copie o `src` do iframe e cole no `<iframe>` da seção de contato.

**Fotos:** o site foi desenhado para funcionar sem fotos, mas as cápsulas do hero (`.hero__mark`) e o card "Como funciona" (`.steps`) são bons lugares para receber fotos da clínica ou da equipe depois.

## Fontes

Fraunces (títulos) e Figtree (texto) via Google Fonts. Se quiser servir localmente, baixe os arquivos e troque o `<link>` no `<head>`.
