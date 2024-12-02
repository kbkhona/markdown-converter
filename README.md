# MarkDown To HTML Converter
This system converts Markdown text to html in real time.

## Features and Additions
--  Accepts markdown text in a text-box. Displays converted html below in real-time.
--  Textbox is height adjustable.
--  Uses debounce for throttled API calls.
--  Received HTML from server is sanitised before insertion into DOM.
--  A loading message appears during API calls on the top right corner of the output html space, just below the text-box.

## How to Run
--  download this git repository
--  cd into me-backend and run command on terminal -- npm start. This will start the Express server on port 3001.
--  cd into me-frontend and run command on terminal -- nom start. This will start the React application accessible at http://localhost:3000/ on your browser.

Note: .env files have been shipped with the package for ease of testing.