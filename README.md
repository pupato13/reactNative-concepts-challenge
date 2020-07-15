# React-Native Concepts Challenge

## :dart: The Challenge

You need to create a mobile app using React-Native to interact with your backend application created during the [NodeJS Challenge](https://github.com/pupato13/nodejs-concepts-challenge).

### Functionalities

-   **`List repositories from your API`**: You should be able to create a list of all repositories that are registered in your API with the **title**, **techs** and number of **likes** fields following the \${repository.likes} likes pattern, just changing the number to be dynamic.

-   **`Like a repository from your API`**: You must be able to like an item in your API through a button with the text **Like**, and you must update the number of likes in the listing on the mobile.

### Tests Specifications

For this challenge we have the following tests:

-   **`should add a like to the like counter of the repository`**: In order for this test to pass, your application must allow, by clicking on the **Like** button, to add a like to your listed repository, and that this update can be viewed on the screen.

# :rocket: Releasing the Kraken

## Requirements

In order to setup your environment to emulate the app, you can follow that amazing walkthrough from Rocketseat

[Rocketseat awesome Walkthrough](https://react-native.rocketseat.dev/)

## :computer: Install

Open your terminal, choose an awesome place to keep this project and type the commands below:

    $ git clone https://github.com/pupato13/reactNative-concepts-challenge.git
    $ cd reactNative-concepts-challenge
    $ yarn install

## Configure app

To run React-Native Challenge, you will need to start the project NodeJS Challenge before.
You can get the walkthrough clicking [here](https://github.com/pupato13/nodejs-concepts-challenge#rocket-releasing-the-kraken).

After being sure your backend is running correctly, **AND** you prepared your environment to emulate mobile apps, you can go ahead.

## :checkered_flag: Running the project

If you are running Android Emulator
\$ npx react-native run-android

or if you are running IOS Emulator
\$ npx react-native run-ios

## :white_check_mark: Running tests

    $ yarn test
