FROM node:14.17.5-alpine3.14

WORKDIR /home/node

COPY . .

RUN wget -qO- https://raw.githubusercontent.com/eficode/wait-for/v2.1.3/wait-for > wait-for.sh \
  && chmod 500 wait-for.sh \
  && npm install \
  && chown -R node.node /home/node

USER node

EXPOSE 5000

CMD ["npm", "start"]