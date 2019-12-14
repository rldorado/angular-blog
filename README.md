# LetsGetChecked front end challenge REST API
> Starter REST API for LetsGetChecked front end coding challenge

## Getting started

### Prerequisites

* [Node.js](https://nodejs.org/en/) v6 or higher

## What is required to complete the challenge

You are required to create a blog application that interfaces with the provided REST API. The application should have a home page that shows all blog posts, sorted by publish date. Users should be able to view individual posts in a separate page. Within that page they should be able to read comments and add a new comment.


### Business Requirements:

_We are looking for **all of the requirements to be submitted**.  This is your chance to impress us so feel free to add additional functionality or design_

* Blog feed should list all posts and associated title, author, date and description, sorted by publish date from newest first
* Users can view individual blog posts in a separate page
* Users can view comments for a blog post
* Users can add a comment to a blog post
* Form validation

### Technical Requirements

Depending the role please complete one of the following

#### Frontend Developer

Create a web application which runs in the browser and satisfies the following requirements:

* Connects with the API using js / jquery
* The use of Bootstrap 3/4 for page elements
* The use of a CSS pre-processing tool like SCSS/LESS
* Semantic, accessible markup
* SEO friendly urls, titles, metadata

*OR*

#### Angular Developer

Create an Angular 2+ application which runs in the browser and satisfies the following requirements:

* Two or more distinct components demonstrating component hierarchy
* At least one service that interfaces with the REST API
* At least one unit test per component
* The use of a CSS pre-processing tool like SCSS/LESS
* Consideration of semantic markup, SEO and accessibility

*OR*

#### Android Developer

Create an android application which satisfies the following requirements:

* Built with Kotlin
* Multiple components which show the correct usage of Fragments and Activities
* The use of a ViewModel for persisting data
* The use of a Web Service that interfaces with the REST API
* At least one unit test per component

*OR*

#### iOS Developer

Create an iOS application which satisfies the following requirements:

* Built with Swift
* Multiple components which show the correct usage of MVC pattern
* The use of a client networking model that interfaces with the REST API
* At least three unit tests

## API

> This starter kit provides the basic API you will need to complete your coding challenge. See [Using the REST API](#using-the-rest-api) for more information.

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get the API up and running.

#### 2. Run `npm run api`

`npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9001`.

## Using the REST API

> Note: Ensure that you've started the API server with `npm run api`.

A REST API is provided with seed data for blog posts and comments.  The REST API returns and accepts JSON.  Changes made to the "database" will persist as long as the API is running on `localhost:9001`.

**Base path:** http://localhost:9001

**GET** `/posts` *List all blog posts*<br>
**GET** `/posts/{id}` *View single blog post*<br>
**GET** `/posts/{id}/comments` *List all comments for single blog post*<br>
**POST** `/posts/{id}/comments` *Add comment to single blog post*<br>
**PUT** `/comments/{id}` *Update single comment*<br>

## Delivering to LetsGetChecked

You may zip up your entire application directly and deliver the source code to LetsGetChecked. Ensure that extraneous folders, eg. `/node_modules`, are not included in the zip file. If you've initialized Git in the application directory locally, you may use [git clean](https://git-scm.com/docs/git-clean) to remove uncommitted and ignored files before compressing the project.

Alternatively you can provide a link to a git/bitbucket/etc repository which contains the application code.

If you wish to go a step further you may host the final product for demo purposes, eg. with AWS S3. However, this is not required for completion of the code challenge.

**Thank you, and enjoy the challenge!**
