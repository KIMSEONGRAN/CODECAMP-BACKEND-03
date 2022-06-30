# FROM ~~~ : ~~~를 다운받아와라!  
# RUN ~~~ : ~~~명령어 실행해줘!(CMD도 같은데 한번만 씀!)


FROM node:14

WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/
RUN yarn build
CMD yarn start:prod