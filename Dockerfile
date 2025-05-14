# Крок 1: Встановлюємо базовий образ
FROM node:18-alpine AS base

# Крок 2: Встановлюємо робочий каталог
WORKDIR /app

# Крок 3: Копіюємо package.json і package-lock.json (якщо є) в контейнер
COPY package*.json ./

# Крок 4: Встановлюємо залежності
RUN npm install

# Крок 5: Копіюємо всі файли з вашого проекту в контейнер
COPY . .

# Крок 6: Будуємо додаток Next.js
RUN npm run build

# Крок 7: Відкриваємо порт, на якому буде працювати додаток
EXPOSE 3000

# Крок 8: Запускаємо додаток
CMD ["npm", "start"]

#  Побудуй Docker-образ:
# docker build -t nextjs-ui .
#  Запусти контейнер:
# docker run -p 3000:3000 nextjs-ui
#   (Опціонально) Якщо потрібно переглядати зміни під час розробки:
# docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules nextjs-ui