Overview

This repository contains two React applications focusing on different functionalities: a Bitcoin Rates application and an Emoji Mood application. The exercises build upon each other, adding complexity and features in each step. Below are the details for each exercise.

Bitcoin Rates Application

Exercise 1

	•	Objective: Complete the BitcoinRates component to fetch and display the current price of Bitcoin in the selected currency.
	•	Implementation:
	•	Utilized the useEffect hook to fetch data from the CoinGecko API.
	•	Ensured cleanup and set appropriate dependencies for optimal performance.

Exercise 2

	•	Objective: Refactor the BitcoinRates component to use a custom hook for data fetching and implement state management using useReducer.
	•	Implementation:
	•	Created a custom hook called useBitcoinPrice to handle the data fetching logic.
	•	Implemented the useReducer hook to manage loading, success, and error states efficiently.

Exercise 3

	•	Objective: Modify the existing Emoji component to create a context for storing the current emoji/mood and integrate it with the BitcoinRates component.
	•	Implementation:
	•	Created a context to manage the current emoji/mood state.
	•	Updated the BitcoinRates component to display the current emoji and implement a button to change the mood, reflecting the change immediately.

Multi-Page Application with Navigation

Exercise 4

	•	Objective: Create an application with three different pages: Home, Login, and Bitcoin Rates. Include a navbar for navigation.
	•	Implementation:
	•	Used React Router to set up navigation between the pages.
	•	Created Home, Login, and BitcoinRates components.
	•	Added a responsive navbar for easy navigation across the pages.

Exercise 5

	•	Objective: Enhance the application from Exercise 4 by using Material-UI (MUI) components for styling.
	•	Implementation:
	•	Integrated MUI components such as AppBar, Toolbar, and form elements for a polished UI.
	•	Created a PostList component styled with MUI cards and grids for displaying posts.
	•	Developed a custom theme using createTheme to ensure a consistent look and feel across the application.