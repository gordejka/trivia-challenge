# Trivia Challenge

## App description
This application allows you to test your knowledge in different categories of knowledge.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

## User manual
1. To start the test, you need to select the difficulty and the number of questions in the appropriate fields.
2. Press the start button
3. Answer the questions
4. Enjoy the result

## Notes

* All buttons have been brought to the same style because of the design. Long story short, the different versions of the application buttons have different displays.

* Sizes of the elements, fonts, some paddings, images have been brought to the value multiple of 4. You can see dimensioning in the file “src/assets/styles/common.scss.”

* In the mobile version all the content parts were aligned vertically to the center in case that in the design was researched only one client’s way.

* Error handling was developed when we get data from the server. If we catch some error, it shows you a modal window with warning that something goes wrong.

* The spinner was added to show the process of loading the page.

* On the second screen, button “X” was added which provide possibility to start process from the beginning without answering the questions twice.

* On the last screen,Vertical scroll was attached to the block with answers in condition that questions do not fit on the screen.

* On the last screen, rating is formed by this condition: 
(correctAnswers / totalQuestions) * 10
