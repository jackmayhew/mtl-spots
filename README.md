# MTL Spots
* MTL Spots is a platform for skateboarders to share and find skate spots in Montreal
* [ Visit MTL Spots ](https://mtlspots.ca/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Final Thoughts](#final-thoughts)
* [Contact](#contact)


## General Information
- Finding places to skateboard can be a challenge. MTL Spots is meant to give local skateboarders a platform to share spots with eachother
- I decided against user authentication for this project, as it will be used by a fairly small/niche community, and I don't want to potentially lose any users by forcing them to sign up 

## Technologies Used
- Next.js
- TypeScript
- SCSS
- MongoDB
- Mongoose
- Amazon S3
- Imgix


## Features

Share page:
- Users share spots by filling out the form
- Users set spot location by clicking google map component (google-map-react)
- Info gets saved to MongoDB, and images get uploaded to S3
- Considered using a library for the form + form validation (formik w/ yup), but decided against it as the form is relatively small and I try to avoid unnecessary dependencies

Find page:
- API call to render all spots
- Drop down select to filter categories
- Search bar to search by title or category
- Image optimization done with Imgix

Map page:
- Simple page with google map component
- Render all saved spots with lat/lng coordinates
- Category tabs to filter spots


## Setup

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


## Project Status

Project is: _complete_


## Room for Improvement

Room for improvement:
- Design (color schemes, fonts etc.)

To do:
- Add french translation option
- Add a comments section to spot pages


## Final Thoughts
- Next.js with TypeScript is awesome!
- Looking back, I wish I had used a SQL database, as I've already worked with MongoDB in the past
- I regret not translating the website during development, since it will be a huge job to go back and do all at once 
- I had a lot of fun building this project, and I'm proud of the final result!


## Contact
Created by [@jackmayhew](https://www.jackmayhew.com/) - feel free to contact me!
