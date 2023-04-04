## Employee Management Application

This is an application for managing employee records, tracking their attendance, and allowing them to clock in and out. The application has been built using the following technologies and packages:

* Next.js: A React-based web framework for building server-side rendered (SSR) web applications
* Chakra UI: A modular and accessible React UI component library
* ApexCharts: A modern charting library that helps to visualize data in an interactive way
* React Hook Form: A lightweight form library that enables easy form validation and management
* Yup: A JavaScript schema validation library
* Mirage.js: A client-side mock API library that allows developers to easily build and test applications without the need for a real backend

## Installation

To install this application, you need to have Node.js and npm installed on your computer. Once you have those installed, you can follow these steps:
1* Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/employee-management.git
```
2* Change into the project directory:

```bash
cd employee-management-attendance
```

3* Install the project dependencies:

```bash
yarn
```

4* Start the development server:

```bash
yarn dev
```
5* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Features

The application has the following features:

* Employee registration: Allows you to add new employees to the system, including their personal information, job title, and contact details.

* Attendance monitoring: Tracks employee attendance and punctuality, providing an overview of their clock-in and clock-out times and total hours worked.

* Time clock: Enables employees to clock in and out, either by scanning a QR code or entering their credentials manually.

## Usage

To learn more about Next.js, take a look at the following resources:

```bash
{
  "dependencies": {
    "@chakra-ui/icons": "^2.0.9",
    "@chakra-ui/react": "^2.3.1",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "@hookform/resolvers": "^2.9.7",
    "apexcharts": "^3.35.5",
    "axios": "^0.27.2",
    "framer-motion": "^6",
    "jwt-decode": "^3.1.2",
    "next": "12.2.5",
    "nookies": "^2.5.2",
    "react": "18.2.0",
    "react-apexcharts": "^1.4.0",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.34.2",
    "react-icons": "^4.4.0",
    "react-query": "^3.39.2",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@faker-js/faker": "^7.5.0",
    "@types/node": "^18.7.14",
    "@types/react": "^18.0.18",
    "@typescript-eslint/eslint-plugin": "^5.36.1",
    "@typescript-eslint/parser": "^5.36.1",
    "eslint": "8.23.0",
    "eslint-config-next": "12.2.5",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-import-helpers": "^1.2.1",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-perf": "^3.3.1",
    "git-commit-msg-linter": "^4.1.3",
    "miragejs": "^0.1.45",
    "prettier": "^2.7.1",
    "typescript": "^4.8.

```

Once the application is running, you can access it at [http://localhost:3000] and then connect the backend api. From there, you can register new employees, view their attendance records, and allow them to clock in and out. The application also provides various charts to visualize employee attendance data.

## Dependencies

Here are the dependencies used in this application:

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
