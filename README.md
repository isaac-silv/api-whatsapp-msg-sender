# 📲 WhatsApp Sender API com Z-API

Este projeto é uma API REST feita em Node.js e Express que envia mensagens via WhatsApp utilizando a plataforma [Z-API](https://z-api.io/), o projeto foi feito para integrar com SGP tsmx (Sistema de Gerenciamento para Provedores), para automatizar alertas e lembrentes dos cliente de um provedor de internet, como lembrente de fatura em aberto.

## ✨ Funcionalidades

- Envio de mensagens de texto via WhatsApp
- Integração com a API Z-API
- Uso de variáveis de ambiente para segurança
- Integração com SGP (Ou outro sistemas)

---

## 📦 Requisitos

- Node.js >= 14.x
- Conta na [Z-API](https://z-api.io/)
- Instância e Token válidos


### Instruções de Instalação
- Instale as dependências:

Renomeie o arquivo .env_exemple para .env, adicione as seguintes variáveis (substitua pelos seus dados):

```bash
ZAPI_INSTANCE_ID=SEU_ID_DA_INSTANCIA
ZAPI_TOKEN=SEU_TOKEN
ZAPI_CLIENT_TOKEN=SEU_CLIENT_TOKEN
```

```bash
npm install
npm start
```

### 🚀 Rotas
`POST /msg-webhook`

Envia uma mensagem via WhatsApp.

Corpo da Requisição (JSON):

### Header 
Content-Type: application/x-www-form-urlencoded

### Body 
Form Url Enconded

```bash
{
  "to": "5511999999999",
  "msg": "Olá! Gostaríamos de saber como está o nosso atendimento. 😊"
}
```