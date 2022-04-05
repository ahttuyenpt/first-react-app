# Image duoc build tren moi truong (da duoc build thanh image) nao
FROM node:latest as build-stage

# Tao 1 folder va vao folder (tuong duong voi mkdir /app && cd /app) 
WORKDIR /app

# Copy toàn bộ code ở môi trường gốc, tức ở folder docker-node hiện tại vào bên trong Image ở đường dẫn /app
COPY . .

# RUN để chạy một câu lệnh nào đó khi build Docker Image
RUN npm install
RUN npm run build

# CMD để chỉ câu lệnh mặc định khi mà 1 container được khởi tạo từ Image này. CMD sẽ luôn được chạy khi 1 container được khởi tạo từ Image
FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html