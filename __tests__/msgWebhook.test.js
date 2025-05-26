import request from 'supertest';
import app from '../app';

describe('POST /msg-webhook', () => {
  it('deve retornar erro se "msg" ou "to" estiverem ausentes', async () => {
    const res = await request(app)
      .post('/msg-webhook')
      .send({ msg: '[TESTE] Mensagem automática enviada pelo sistema de integração.' }); // sem "to"

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('deve retornar sucesso com dados válidos', async () => {
    const res = await request(app)
      .post('/msg-webhook')
      .send({ msg: '[TESTE] Mensagem automática enviada pelo sistema de integração.', to: '5583980000000' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
