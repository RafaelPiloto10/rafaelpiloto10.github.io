FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .
RUN bun run build

FROM build as run

WORKDIR /app

COPY --from=build /app/build .

EXPOSE 3000
ENTRYPOINT [ "bun", "./build" ]
