import axios from "axios";

const msgWebhook = async (req, res) => {
  const { msg, to } = req.body;

  if (!msg || !to) {
    return res.status(400).json({ error: 'Campos "msg" e "to" são obrigatórios.' });
  }

  const numeroLimpo = to.replace(/\D/g, '');

  const payload = {
    phone: numeroLimpo,
    message: msg
  };

  try {
      const response = await axios.post(
      `https://api.z-api.io/instances/${process.env.ZAPI_INSTANCE_ID}/token/${process.env.ZAPI_TOKEN}/send-text`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'client-token': process.env.ZAPI_CLIENT_TOKEN 
          }
        }
      );
  
      res.status(200).json({ status: 'ok', enviado: true, response: response.data });
  } catch (err) {
      console.error('Erro ao enviar mensagem:', err.response?.data || err.message);
      res.status(500).json({ error: 'Erro ao enviar mensagem', detalhes: err.response?.data });
  }
}

export default msgWebhook;