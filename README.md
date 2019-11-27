## Projeto Matéria **Desenvolvimento Web**

Para iniciar o projeto você deve utilizar o seguinte comando:

### `npm install`
em seguida,
### `npm start`

Inicia o app em modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

## Backend

O Backend se encontra  no seguinte link:<br>
[https://github.com/murilo-kronbauer/api-agendamento-web](https://github.com/murilo-kronbauer/api-agendamento-web)

## Possiveis erros
Resolução problema Error: ENOSPC: System limit for number of file watchers reached, watch '/home/foldername/abcrypto/static' 
rodar comando: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p