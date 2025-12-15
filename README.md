## Visão Geral

Projeto minimalista focado em aprendizado e uso pessoal.  
O bot escuta mensagens e, ao detectar um comando específico, envia o texto para uma API de IA e retorna a resposta no canal.

## Funcionamento

- Monitora mensagens no Discord  
- Comando `!ia` captura o prompt  
- Envia o prompt para a OpenRouter API  
- Retorna a resposta gerada pelo modelo GPT-4.0 Mini  

## Exemplo

```text
!ia O que é inteligência artificial?
```

## Tecnologias

```text
Node.js
Discord.js
OpenRouter API
GPT-4.0 Mini
```

## Configuração

Arquivo `.env`:

```text
DISCORD_TOKEN=seu_token_do_discord
OPENROUTER_API_KEY=sua_api_key_da_openrouter
```

## Observações

* Estrutura simples e direta
* Sem moderação avançada ou cache
* Ideal para testes e aprendizado
