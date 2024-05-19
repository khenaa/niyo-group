# Task Management System for HTTP Endpoint

![Niyo group logo](https://www.niyo.co/static/media/niyo-logo-white.524b0f2492177a0b2d14e30ff61520c8.svg)

## Description

This application is a task management system that saves data in the database and allows authenticated users to perform various task management operations.

## Application Architecture

| ![Nest](https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png) | ![Mongo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aOjcYFmDp1hlRpaRO46pY5POiz2EiDTvvkuLMP5h6w&s) | ![AWS](https://partner.zoom.us/wp-content/uploads/2022/12/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.png) |
| :---------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|                                     **NestJS**                                      |                                                  **MongoDB**                                                   |                                                      **AWS**                                                      |

### Components

1. **Database Layer - MongoDB**

   - A NoSQL database known for its flexibility and scalability.
   - Managed using MongoDB Atlas, which provides automated backups, monitoring, and more.

2. **Backend Layer - NestJS**

   - A progressive Node.js framework for building efficient and scalable server-side applications.
   - Utilizes TypeScript and follows a modular architecture, making the codebase maintainable and easy to manage.

3. **Infrastructure**

   - **Database**: Managed MongoDB Atlas.
   - **Hosting Server**: AWS EC2 Ubuntu box (2 vCPUs, t2 micro, 8GB RAM).
   - **Cloud Service Provider**: AWS.
   - **Source Code Management / CI/CD**: GitHub / GitHub Actions.

## Application Infrastructure

![Application deployment](https://res.cloudinary.com/dxrdiyms4/image/upload/v1716153025/WhatsApp_Image_2024-05-19_at_22.06.13_zs9pu7.jpg)

1. **Database**:
   - Managed MongoDB Atlas provides a highly available and secure NoSQL database service.
2. **Hosting Server**:
   - AWS EC2 instance (Ubuntu, 2 vCPUs, t2 micro, 8GB RAM) for reliable and scalable hosting.
3. **Cloud Service Provider**:
   - Amazon Web Services (AWS) offers robust cloud services, including EC2 for compute capacity, and S3 for storage.
4. **Source Code Management / CI/CD**:
   - GitHub for version control and repository management.
   - GitHub Actions for continuous integration and continuous deployment (CI/CD), enabling automated testing and deployment workflows.

# API Documentation

![Postman](https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png)

## API Routes

| Endpoint                                 | Route Action | Description         |
| ---------------------------------------- | ------------ | ------------------- |
| `http://3.69.233.223:9000/user/register` | POST         | Register a new user |
| `http://3.69.233.223:9000/user/login`    | POST         | Login a user        |
| `http://3.69.233.223:9000/tasks`         | GET          | Get all tasks       |
| `http://3.69.233.223:9000/tasks`         | POST         | Create a new task   |
| `http://3.69.233.223:9000/tasks/{id}`    | GET          | Get a specific task |
| `http://3.69.233.223:9000/tasks/{id}`    | PATCH        | Update a task       |
| `http://3.69.233.223:9000/tasks/{id}`    | DELETE       | Delete a task       |

Full documentation can be found [here](https://documenter.getpostman.com/view/17142725/2sA3QmDZy3#73984e71-4c1f-4487-aa3a-dcb4b6ea6c8b).

## Installation

```bash
$ npm install

## Running the app

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
