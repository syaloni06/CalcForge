# CalcForge - A Calculator Builder
The Calculator Builder is an interactive React-based web application that allows users to create a custom calculator layout using drag-and-drop functionality. Users can add, remove, and rearrange number buttons, operations, and the result display to personalize their calculator. The app is built using React, Zustand for state management, and Tailwind CSS for styling, ensuring a seamless and responsive user experience.
## Features
1. Drag & Drop Components – Users can dynamically add, remove, and reposition calculator buttons.
2. Predefined Components – Includes number buttons (0-9), arithmetic operators (+, -, *, /), and a display screen.
3. Custom Layout – Users have full control over how the buttons are arranged.
4. Functional Calculation Logic – Performs calculations based on user input and displays the results.
5. State Management with Zustand – Ensures smooth data handling for user interactions.
6. Tailwind CSS Styling – Provides a clean, modern, and responsive UI.
7. Dark Mode Toggle – Allows users to switch between light and dark themes.
8. Persistence with Local Storage – Saves the calculator layout for future use.
9. Undo/Redo Functionality – Enables users to revert or redo layout changes.
## Setup and Installation
1. `Clone` the Repository
``` bash
git clone https://github.com/syaloni06/CalcForge.git
cd CalcForge
```
2. Install Dependencies
- Ensure you have `Node.js` and `npm` installed.
``` bash
npm install
```
3. Start the development server
- This will open the application in your default browser at http://localhost:5173/
``` bash
npm run dev
```
## Usage
1. Drag & Drop: Users can drag buttons and operations from a panel and drop them onto the calculator area.
2. Customize Layout: They can arrange components freely, creating a personalized calculator.
3. Perform Calculations: After setting up the layout, they can use the calculator to perform arithmetic operations.
4. Save & Restore Layout: If local storage is enabled, users can revisit their saved layout.
5. Dark Mode & Undo/Redo: Enhances usability with theme switching and layout versioning.
## Project Demo
### Deployed Link - https://calcforge.netlify.app/