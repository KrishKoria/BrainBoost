# BrainBoost

BrainBoost is an online learning platform designed to enhance your skills and knowledge through a variety of courses. The platform supports both students and teachers, providing a comprehensive environment for learning and teaching.

## Features

- **User Authentication**: Secure user authentication using Clerk.
- **Course Management**: Teachers can create, update, and delete courses.
- **User Profiles**: Users can view and edit their profiles.
- **Course Progress Tracking**: Track user progress through courses.
- **Video Uploads**: Support for uploading and managing course videos.
- **Notifications**: Manage notification settings for course updates and alerts.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Role-Based Access Control**: Different access levels for students, teachers, and admins.
- **Payment Integration**: Secure payment processing using Stripe.
- **Search Functionality**: Easily search for courses using various filters.
- **Course Reviews and Ratings**: Users can leave reviews and ratings for courses.
- **Discussion Forums**: Engage in discussions with other students and teachers.

## Project Structure

### Client

The client-side code is located in the `brainboost-client` directory and is built using Next.js, React, and Tailwind CSS.

```
brainboost-client/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── (nondashboard)/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── AppSidebar.tsx
│   ├── ChapterModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── SignUp.tsx
│   ├── SignIn.tsx
│   ├── Completion.tsx
│   ├── LandingPage.tsx
│   ├── ChaptersSidebar.tsx
│   ├── SharedNotificationSettings.tsx
│   ├── CheckoutDetails.tsx
│   ├── CustomFormField.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
├── hooks/
│   ├── useCarousel.ts
│   ├── useCheckoutNavigation.ts
│   ├── useCourseProgressData.ts
│   ├── useCurrentCourse.ts
│   ├── use-mobile.ts
├── lib/
│   ├── providers.ts
│   ├── schemas.ts
│   ├── utils.ts
├── state/
│   ├── api.ts
│   ├── index.ts
├── types/
│   ├── index.d.ts
├── public/
│   ├── ...
├── next.config.ts
├── package.json
├── tsconfig.json
```

### Server

The server-side code is located in the `brainboost-server` directory and is built using Node.js, Express, and DynamoDB.

```
brainboost-server/
├── src/
│   ├── controllers/
│   │   ├── courseController.ts
│   │   ├── userClerkController.ts
│   ├── models/
│   │   ├── courseModel.ts
│   │   ├── userCourseProgressModel.ts
│   ├── seed/
│   │   ├── data/
│   │   │   ├── courses.json
│   │   ├── seedDynamodb.ts
│   ├── utils/
│   │   ├── utils.ts
│   ├── index.ts
│   ├── routes/
│   │   ├── courseRoutes.ts
│   │   ├── userClerkRoutes.ts
│   │   ├── transactionRoutes.ts
│   │   ├── userCourseProgressRoutes.ts
├── .dockerignore
├── Dockerfile
├── package.json
├── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```sh
git clone https://github.com/KrishKoria/BrainBoost.git
cd brainboost
```

2. Install client dependencies:

```sh
cd brainboost-client
npm install
```

3. Install server dependencies:

```sh
cd ../brainboost-server
npm install
```

### Running the client

1. Start the development server:

```sh
cd brainboost-client
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

### Running the Server

1. Start the server:

```sh
cd brainboost-server
npm run dev
```

2. The server will be running on `http://localhost:3001`.

## Seeding the Database

1. Seed the DynamoDB database

```sh
cd brainboost-server
npm run seed
```
