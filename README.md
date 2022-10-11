# MTL Spots
* MTL Spots is a platform for skateboarders to share and find skate spots in Montreal
* [ Visit MTL Spots ](https://mtlspots.ca/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Final Thoughts](#final-thoughts)
* [Contact](#contact)


## General Information
- MTL Spots is built to give local skateboarders in Montreal a platform to share skate spots with eachother
- I decided against user authentication for this project, as it will be used by a fairly small/niche community, and I don't want to potentially lose any users by forcing them to sign up


## Technologies Used
- Next.js
- TypeScript
- SCSS
- MongoDB
- Mongoose
- Amazon S3
- Auth0
- Imgix


## Features

Share page:
- Users share spots by filling out the form
- Users set spot location by clicking google map component (google-map-react)
- Info gets saved to MongoDB, and images get uploaded to S3
- I considered using a library for the form + validation (formik w/ yup), but decided against it as the form is relatively small and I wanted to avoid any unnecessary dependencies

Find page:
- Call API to render all spots
- Drop down select to filter categories
- Search bar to search by title or category
- Image optimization done with Imgix

Spot page:
- Find specific info for spots
- Share or Save the spot
- Comment Section for additional info

Saved spots:
- Users can "save" spots while viewing them
- Since there's no user authentication, localStorage is used to store users saved spots

Map page:
- Simple page with google maps component
- Render all saved spots with lat/lng coordinates
- Category tabs to filter spots


## Project Status

Project is: _complete_


## Room for Improvement

Room for improvement:
- Design (color schemes, fonts etc)
- Map markers flicker on drag - known issue with google-map-react (https://github.com/google-map-react/google-map-react/issues/1117)

To do:
- Add french translation option


## Final Thoughts
- Next.js with TypeScript is amazing
- I regret not using using a SQL database, as I've already worked with MongoDB in the past
- I had a lot of fun building this project, and I'm proud of the final product!


## Contact
Created by [@jackmayhew](https://www.jackmayhew.com/) - feel free to contact me!
