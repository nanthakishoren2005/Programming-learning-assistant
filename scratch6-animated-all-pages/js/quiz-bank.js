// ============================================

// Quiz Bank  questions per language

// ============================================

export const quizBank = {

  "python": {

    "beginner": [

      {

        "id": 1,

        "question": "What is Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A snake",

          "A programming language",

          "A text editor",

          "An operating system"

        ],

        "correct": 1,

        "explanation": "Python is a high-level programming language."

      },

      {

        "id": 2,

        "question": "How do you print something in Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "echo('Hello')",

          "console.log('Hello')",

          "print('Hello')",

          "System.out.println('Hello')"

        ],

        "correct": 2,

        "explanation": "Python uses the print() function to output text."

      },

      {

        "id": 3,

        "question": "Which of these is a valid variable name?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "1st_name",

          "first-name",

          "first_name",

          "first name"

        ],

        "correct": 2,

        "explanation": "Variable names cannot start with a number, contain spaces or hyphens. Underscores are allowed."

      },

      {

        "id": 4,

        "question": "What data type is 5.5?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "int",

          "float",

          "str",

          "bool"

        ],

        "correct": 1,

        "explanation": "Decimal numbers are stored as floats in Python."

      },

      {

        "id": 5,

        "question": "Which function gets input from the user?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "get()",

          "input()",

          "read()",

          "scan()"

        ],

        "correct": 1,

        "explanation": "The input() function reads a line from input."

      },

      {

        "id": 6,

        "question": "What is the result of 10 > 5?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "True",

          "False",

          "10",

          "5"

        ],

        "correct": 0,

        "explanation": "10 is greater than 5, so the expression evaluates to True."

      },

      {

        "id": 7,

        "question": "What keyword is used for conditional statements?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "if",

          "when",

          "case",

          "check"

        ],

        "correct": 0,

        "explanation": "The 'if' keyword is used to start a conditional statement."

      },

      {

        "id": 8,

        "question": "Which loop repeats a block of code a specific number of times?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "while loop",

          "for loop",

          "do-while loop",

          "repeat loop"

        ],

        "correct": 1,

        "explanation": "A for loop iterates over a sequence or a specific range of numbers."

      },

      {

        "id": 9,

        "question": "How do you define a function?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "function myFunc()",

          "def myFunc():",

          "define myFunc()",

          "func myFunc():"

        ],

        "correct": 1,

        "explanation": "In Python, 'def' is used to define a function."

      },

      {

        "id": 10,

        "question": "What kind of bracket is used to create a list?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "()",

          "{}",

          "[]",

          "<>"

        ],

        "correct": 2,

        "explanation": "Square brackets [] are used to create a list in Python."

      }

    ],

    "intermediate": [

      {

        "id": 1,

        "question": "What is a dictionary in Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "An ordered list of items",

          "A collection of key-value pairs",

          "A set of unique elements",

          "A type of string"

        ],

        "correct": 1,

        "explanation": "Dictionaries store data values in key:value pairs."

      },

      {

        "id": 2,

        "question": "Which string method converts all characters to lowercase?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "lower()",

          "lowercase()",

          "toLower()",

          "casefold()"

        ],

        "correct": 0,

        "explanation": "The lower() method returns a string where all characters are lower case."

      },

      {

        "id": 3,

        "question": "How do you open a file for reading in Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "open('file.txt', 'w')",

          "open('file.txt', 'a')",

          "open('file.txt', 'r')",

          "open('file.txt', 'x')"

        ],

        "correct": 2,

        "explanation": "The 'r' mode opens a file for reading."

      },

      {

        "id": 4,

        "question": "Which keyword is used to handle exceptions?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "catch",

          "except",

          "handle",

          "error"

        ],

        "correct": 1,

        "explanation": "The 'except' block lets you handle the error generated in the 'try' block."

      },

      {

        "id": 5,

        "question": "How do you import a module named 'math'?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "include math",

          "require math",

          "import math",

          "using math"

        ],

        "correct": 2,

        "explanation": "The 'import' statement is used to import modules."

      },

      {

        "id": 6,

        "question": "What does OOP stand for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Object-Oriented Programming",

          "Only Object Programming",

          "Object Oriented Python",

          "Order Of Precedence"

        ],

        "correct": 0,

        "explanation": "OOP stands for Object-Oriented Programming."

      },

      {

        "id": 7,

        "question": "What keyword is used to create a class?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "object",

          "def",

          "class",

          "struct"

        ],

        "correct": 2,

        "explanation": "The 'class' keyword is used to create a class."

      },

      {

        "id": 8,

        "question": "What is inheritance?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Creating a new instance",

          "A class acquiring properties of another class",

          "Deleting a class",

          "Hiding data"

        ],

        "correct": 1,

        "explanation": "Inheritance allows us to define a class that inherits all the methods and properties from another class."

      },

      {

        "id": 9,

        "question": "What is a lambda function?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A function inside a class",

          "A long function",

          "An anonymous, inline function",

          "A built-in Python module"

        ],

        "correct": 2,

        "explanation": "A lambda function is a small anonymous function defined with the lambda keyword."

      },

      {

        "id": 10,

        "question": "What is list comprehension?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A way to compress lists",

          "A shorter syntax to create a new list based on an existing list",

          "Understanding what a list is",

          "Sorting a list"

        ],

        "correct": 1,

        "explanation": "List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list."

      }

    ],

    "advanced": [

      {

        "id": 1,

        "question": "What is a decorator in Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A tool to style UI",

          "A function that modifies another function",

          "A way to comment code",

          "A data structure"

        ],

        "correct": 1,

        "explanation": "A decorator takes in a function, adds some functionality and returns it."

      },

      {

        "id": 2,

        "question": "Which keyword is used to create a generator?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "yield",

          "return",

          "generate",

          "produce"

        ],

        "correct": 0,

        "explanation": "The yield keyword pauses function execution and sends a value back to the caller, making it a generator."

      },

      {

        "id": 3,

        "question": "What is the primary benefit of multithreading?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Less memory usage",

          "Running tasks concurrently",

          "Removing bugs",

          "Faster syntax"

        ],

        "correct": 1,

        "explanation": "Multithreading allows multiple threads to run concurrently, useful for I/O bound tasks."

      },

      {

        "id": 4,

        "question": "What does the 'requests' library do?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Manages database connections",

          "Makes HTTP requests",

          "Handles file uploads",

          "Creates user interfaces"

        ],

        "correct": 1,

        "explanation": "The requests module allows you to send HTTP requests using Python."

      },

      {

        "id": 5,

        "question": "Which database is commonly used with Python via the pymongo library?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "MySQL",

          "PostgreSQL",

          "MongoDB",

          "SQLite"

        ],

        "correct": 2,

        "explanation": "PyMongo is a Python distribution containing tools for working with MongoDB."

      },

      {

        "id": 6,

        "question": "What is the purpose of a virtual environment?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "To run code faster",

          "To isolate project dependencies",

          "To hide source code",

          "To connect to the cloud"

        ],

        "correct": 1,

        "explanation": "Virtual environments isolate package installations so projects don't interfere with each other."

      },

      {

        "id": 7,

        "question": "What is pytest?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A Python linter",

          "A testing framework",

          "A package manager",

          "A web framework"

        ],

        "correct": 1,

        "explanation": "Pytest is a popular framework that makes it easy to write small, readable tests."

      },

      {

        "id": 8,

        "question": "Which of these is a way to optimize Python performance?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Using list comprehensions instead of loops",

          "Adding more comments",

          "Using longer variable names",

          "Removing all functions"

        ],

        "correct": 0,

        "explanation": "List comprehensions are generally faster than equivalent for loops in Python."

      },

      {

        "id": 9,

        "question": "What module is used for asynchronous programming in Python?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "multiprocessing",

          "threading",

          "asyncio",

          "socket"

        ],

        "correct": 2,

        "explanation": "The asyncio module provides infrastructure for writing single-threaded concurrent code using coroutines."

      },

      {

        "id": 10,

        "question": "What is a CLI?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Command Line Interface",

          "Common Language Interpreter",

          "Central Logic Instance",

          "Core Library Inclusion"

        ],

        "correct": 0,

        "explanation": "CLI stands for Command Line Interface, a text-based interface used to operate software and OS."

      }

    ]

  },

  "html": {

    "beginner": [

      {

        "id": 1,

        "question": "What does HTML stand for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Hyper Text Preprocessor",

          "Hyper Text Markup Language",

          "Hyper Tool Multi Language",

          "Hyperlinks Text Mark Language"

        ],

        "correct": 1,

        "explanation": "HTML stands for Hyper Text Markup Language."

      },

      {

        "id": 2,

        "question": "What is the correct declaration for HTML5?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<html5>",

          "<!DOCTYPE html>",

          "<?xml html>",

          "<doctype html5>"

        ],

        "correct": 1,

        "explanation": "<!DOCTYPE html> is the standard declaration for HTML5 documents."

      },

      {

        "id": 3,

        "question": "Which tag creates the largest heading?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<head>",

          "<h6>",

          "<heading>",

          "<h1>"

        ],

        "correct": 3,

        "explanation": "<h1> defines the most important and largest heading."

      },

      {

        "id": 4,

        "question": "Which tag is used for emphasizing text (italic)?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<i>",

          "<em>",

          "<strong>",

          "<bdo>"

        ],

        "correct": 1,

        "explanation": "<em> is the semantic tag for emphasized text, typically rendered as italic."

      },

      {

        "id": 5,

        "question": "What is the correct HTML for creating a hyperlink?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<a>http://www.w3c.org</a>",

          "<a url='http://www.w3c.org'>W3C</a>",

          "<a href='http://www.w3c.org'>W3C</a>",

          "<link src='http://www.w3c.org'>W3C</link>"

        ],

        "correct": 2,

        "explanation": "The href attribute specifies the URL of the page the link goes to."

      },

      {

        "id": 6,

        "question": "How can you insert an image?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<img href='image.gif' alt='MyImage'>",

          "<image src='image.gif' alt='MyImage'>",

          "<img src='image.gif' alt='MyImage'>",

          "<img alt='MyImage'>image.gif</img>"

        ],

        "correct": 2,

        "explanation": "The <img> tag uses the src attribute to specify the image source."

      },

      {

        "id": 7,

        "question": "Which tag creates a numbered list?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<ul>",

          "<dl>",

          "<list>",

          "<ol>"

        ],

        "correct": 3,

        "explanation": "<ol> stands for Ordered List, which creates a numbered list."

      },

      {

        "id": 8,

        "question": "Which tag creates a table row?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<td>",

          "<tr>",

          "<th>",

          "<table>"

        ],

        "correct": 1,

        "explanation": "<tr> defines a row in an HTML table."

      },

      {

        "id": 9,

        "question": "Which tag is used to create an HTML form?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<form>",

          "<input>",

          "<button>",

          "<fieldset>"

        ],

        "correct": 0,

        "explanation": "The <form> element is used to create an HTML form for user input."

      },

      {

        "id": 10,

        "question": "What is a semantic HTML element?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "An element with a specific color",

          "An element that clearly describes its meaning to both browser and developer",

          "An element used only for styling",

          "A deprecated element"

        ],

        "correct": 1,

        "explanation": "Semantic elements (like <header>, <article>) provide meaning about the content they enclose."

      }

    ],

    "intermediate": [

      {

        "id": 1,

        "question": "Which input type is best for email addresses?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "type='text'",

          "type='string'",

          "type='email'",

          "type='url'"

        ],

        "correct": 2,

        "explanation": "type='email' provides automatic validation for email addresses."

      },

      {

        "id": 2,

        "question": "Which tag is used to embed audio in HTML?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<sound>",

          "<mp3>",

          "<music>",

          "<audio>"

        ],

        "correct": 3,

        "explanation": "The <audio> element is used to embed sound content in documents."

      },

      {

        "id": 3,

        "question": "What does an iframe do?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Creates a frame around an image",

          "Embeds another document within the current HTML document",

          "Plays a video frame by frame",

          "Splits the screen into two halves"

        ],

        "correct": 1,

        "explanation": "An inline frame (iframe) is used to embed another document within the current HTML document."

      },

      {

        "id": 4,

        "question": "Where do meta tags typically go?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Inside <body>",

          "Inside <head>",

          "Inside <footer>",

          "Outside <html>"

        ],

        "correct": 1,

        "explanation": "Meta tags provide metadata and are placed inside the <head> element."

      },

      {

        "id": 5,

        "question": "Which of these is a block-level element?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<span>",

          "<a>",

          "<div>",

          "<img>"

        ],

        "correct": 2,

        "explanation": "<div> is a block-level element, taking up the full width available."

      },

      {

        "id": 6,

        "question": "Which element is used to group inline elements?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<div>",

          "<section>",

          "<article>",

          "<span>"

        ],

        "correct": 3,

        "explanation": "<span> is an inline container used to mark up a part of a text or document."

      },

      {

        "id": 7,

        "question": "What does the HTML entity &amp; represent?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<",

          ">",

          "&",

          "\""

        ],

        "correct": 2,

        "explanation": "&amp; is the HTML entity for the ampersand (&) symbol."

      },

      {

        "id": 8,

        "question": "What does the 'srcset' attribute do in an <img> tag?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Sets the image width",

          "Provides multiple image sources for different screen sizes",

          "Adds a border to the image",

          "Makes the image a link"

        ],

        "correct": 1,

        "explanation": "srcset allows you to specify different images for different screen resolutions."

      },

      {

        "id": 9,

        "question": "What are data-* attributes used for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Styling elements",

          "Linking to a database",

          "Storing custom data private to the page or application",

          "Defining variables in HTML"

        ],

        "correct": 2,

        "explanation": "data-* attributes allow you to store extra information on standard, semantic HTML elements."

      },

      {

        "id": 10,

        "question": "Which attribute is crucial for image accessibility?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "title",

          "alt",

          "src",

          "href"

        ],

        "correct": 1,

        "explanation": "The 'alt' attribute provides alternative text for screen readers."

      }

    ],

    "advanced": [

      {

        "id": 1,

        "question": "Which tag is used to draw graphics on the fly via scripting?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<svg>",

          "<canvas>",

          "<graphics>",

          "<draw>"

        ],

        "correct": 1,

        "explanation": "The <canvas> element is used to draw graphics, on the fly, via JavaScript."

      },

      {

        "id": 2,

        "question": "What does SVG stand for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Standard Vector Graphics",

          "Scalable Vector Graphics",

          "Simple Vector Graphics",

          "Static Vector Graphics"

        ],

        "correct": 1,

        "explanation": "SVG stands for Scalable Vector Graphics, used to define vector-based graphics for the Web."

      },

      {

        "id": 3,

        "question": "Which attribute makes an element draggable?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "drag='true'",

          "draggable='true'",

          "move='true'",

          "ondrag='true'"

        ],

        "correct": 1,

        "explanation": "Setting draggable='true' allows the user to drag the element."

      },

      {

        "id": 4,

        "question": "Which Web Storage object stores data with no expiration date?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "sessionStorage",

          "localStorage",

          "cookieStorage",

          "globalStorage"

        ],

        "correct": 1,

        "explanation": "localStorage stores data with no expiration date, unlike sessionStorage."

      },

      {

        "id": 5,

        "question": "Which API allows you to get the user's geographical position?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Map API",

          "Location API",

          "Geolocation API",

          "Navigation API"

        ],

        "correct": 2,

        "explanation": "The Geolocation API is used to locate a user's position."

      },

      {

        "id": 6,

        "question": "What does the <template> tag do?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Defines a CSS template",

          "Holds client-side content that is not rendered immediately",

          "Creates a boilerplate HTML structure",

          "Loads a template engine"

        ],

        "correct": 1,

        "explanation": "Content inside a <template> tag is hidden from the user until instantiated by JavaScript."

      },

      {

        "id": 7,

        "question": "What attribute defers the loading of an image until it is near the viewport?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "defer='true'",

          "async='true'",

          "loading='lazy'",

          "wait='viewport'"

        ],

        "correct": 2,

        "explanation": "loading='lazy' defers loading the image until it reaches a calculated distance from the viewport."

      },

      {

        "id": 8,

        "question": "Why are semantic tags good for SEO?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "They make the page load faster",

          "They hide content from users",

          "They help search engines understand the content's meaning",

          "They force keywords into the page"

        ],

        "correct": 2,

        "explanation": "Semantic tags like <article> and <nav> describe their meaning to both the browser and the developer (and search engines)."

      },

      {

        "id": 9,

        "question": "Which of these is NOT an HTML5 validation tool?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "W3C Markup Validation Service",

          "JSLint",

          "Nu Html Checker",

          "HTML Validator extension"

        ],

        "correct": 1,

        "explanation": "JSLint is a tool for finding errors in JavaScript, not HTML."

      },

      {

        "id": 10,

        "question": "What is the primary role of HTML in a modern web application?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Styling and layout",

          "Client-side logic",

          "Structuring the content",

          "Server-side routing"

        ],

        "correct": 2,

        "explanation": "HTML is fundamentally responsible for describing and structuring the content of a web page."

      }

    ]

  },

  "css": {

    "beginner": [

      {

        "id": 1,

        "question": "What does CSS stand for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Colorful Style Sheets",

          "Computer Style Sheets",

          "Cascading Style Sheets",

          "Creative Style Sheets"

        ],

        "correct": 2,

        "explanation": "CSS stands for Cascading Style Sheets."

      },

      {

        "id": 2,

        "question": "How do you insert a comment in a CSS file?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "// this is a comment",

          "/* this is a comment */",

          "' this is a comment",

          "<!-- this is a comment -->"

        ],

        "correct": 1,

        "explanation": "CSS comments start with /* and end with */."

      },

      {

        "id": 3,

        "question": "Which HTML tag is used to define an internal style sheet?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "<script>",

          "<css>",

          "<style>",

          "<link>"

        ],

        "correct": 2,

        "explanation": "The <style> tag is used to define internal CSS."

      },

      {

        "id": 4,

        "question": "Which property is used to change the background color?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "color",

          "bgcolor",

          "background-color",

          "bg-color"

        ],

        "correct": 2,

        "explanation": "The background-color property sets the background color of an element."

      },

      {

        "id": 5,

        "question": "How do you add a background image in CSS?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "background-image: url('img.jpg');",

          "bg-image: 'img.jpg';",

          "background: img.jpg;",

          "image-source: url('img.jpg');"

        ],

        "correct": 0,

        "explanation": "The background-image property is used with the url() function."

      },

      {

        "id": 6,

        "question": "Which property specifies the thickness of a border?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "border-style",

          "border-width",

          "border-size",

          "border-thickness"

        ],

        "correct": 1,

        "explanation": "border-width specifies the width of the four borders."

      },

      {

        "id": 7,

        "question": "Which property creates space OUTSIDE an element's border?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "padding",

          "spacing",

          "margin",

          "border-spacing"

        ],

        "correct": 2,

        "explanation": "Margins clear an area outside the border."

      },

      {

        "id": 8,

        "question": "Which property is used to change the text color of an element?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "font-color",

          "fgcolor",

          "color",

          "text-color"

        ],

        "correct": 2,

        "explanation": "The color property specifies the color of text."

      },

      {

        "id": 9,

        "question": "Which property is used to change the font of an element?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "font-family",

          "font-weight",

          "font-style",

          "text-font"

        ],

        "correct": 0,

        "explanation": "The font-family property specifies the font for an element."

      },

      {

        "id": 10,

        "question": "How do you hide an element without taking up space on the page?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "visibility: hidden;",

          "display: none;",

          "opacity: 0;",

          "hidden: true;"

        ],

        "correct": 1,

        "explanation": "display: none; removes the element from the document flow completely."

      }

    ],

    "intermediate": [

      {

        "id": 1,

        "question": "Which position value removes an element from the normal document flow completely?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "relative",

          "static",

          "absolute",

          "sticky"

        ],

        "correct": 2,

        "explanation": "An absolutely positioned element is removed from the normal document flow."

      },

      {

        "id": 2,

        "question": "In Flexbox, which property aligns items along the main axis?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "align-items",

          "justify-content",

          "flex-direction",

          "align-content"

        ],

        "correct": 1,

        "explanation": "justify-content aligns items horizontally (by default) in a flex container."

      },

      {

        "id": 3,

        "question": "What does CSS Grid primarily provide that Flexbox does not?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Responsiveness",

          "Alignment",

          "Two-dimensional layout (rows and columns)",

          "Animations"

        ],

        "correct": 2,

        "explanation": "Grid is designed for two-dimensional layout, while Flexbox is largely one-dimensional."

      },

      {

        "id": 4,

        "question": "What is responsive design primarily concerned with?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Making a website load faster",

          "Making a website look good on all devices",

          "Responding to user clicks",

          "Database responses"

        ],

        "correct": 1,

        "explanation": "Responsive web design makes web pages render well on a variety of devices and window or screen sizes."

      },

      {

        "id": 5,

        "question": "Which rule is used to apply styles based on screen width?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "@screen",

          "@media",

          "@responsive",

          "@query"

        ],

        "correct": 1,

        "explanation": "@media is used to apply CSS rules only if certain conditions (like screen width) are true."

      },

      {

        "id": 6,

        "question": "Which pseudo-class styles an element when the user's mouse pointer is over it?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          ":active",

          ":focus",

          ":hover",

          ":visited"

        ],

        "correct": 2,

        "explanation": ":hover selects elements when you mouse over them."

      },

      {

        "id": 7,

        "question": "Which pseudo-element is used to insert content before an element?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "::first-letter",

          "::before",

          "::after",

          "::prepend"

        ],

        "correct": 1,

        "explanation": "The ::before pseudo-element inserts something before the content of the selected element(s)."

      },

      {

        "id": 8,

        "question": "What does the z-index property control?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "The zoom level",

          "The width of an element",

          "The vertical stacking order of elements",

          "The opacity of an element"

        ],

        "correct": 2,

        "explanation": "z-index specifies the stack order of an element (which element should be in front of, or behind, the others)."

      },

      {

        "id": 9,

        "question": "What happens when you set overflow: scroll?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "The content is clipped, and a scrollbar is added.",

          "The content spills out of the box.",

          "The box grows to fit the content.",

          "The content is hidden permanently."

        ],

        "correct": 0,

        "explanation": "overflow: scroll adds scrollbars whether they are strictly necessary or not."

      },

      {

        "id": 10,

        "question": "What do CSS transitions provide?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Page loading screens",

          "Smooth changes between property values",

          "Data transformation",

          "Keyframe animations"

        ],

        "correct": 1,

        "explanation": "CSS transitions allow you to change property values smoothly over a given duration."

      }

    ],

    "advanced": [

      {

        "id": 1,

        "question": "Which rule is used to define keyframes for a CSS animation?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "@animate",

          "@transition",

          "@keyframes",

          "@animation"

        ],

        "correct": 2,

        "explanation": "The @keyframes rule specifies the animation code."

      },

      {

        "id": 2,

        "question": "How do you declare a CSS variable (custom property)?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "$main-color: blue;",

          "--main-color: blue;",

          "var main-color = blue;",

          "@main-color: blue;"

        ],

        "correct": 1,

        "explanation": "Custom properties begin with a double hyphen (--)."

      },

      {

        "id": 3,

        "question": "In CSS Grid, what does the 'grid-template-areas' property do?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Sets the size of the grid cells",

          "Allows you to name and arrange grid areas visually in the CSS",

          "Defines the gap between rows",

          "Makes the grid responsive automatically"

        ],

        "correct": 1,

        "explanation": "grid-template-areas specifies areas within the grid layout by name."

      },

      {

        "id": 4,

        "question": "Which flex property determines how much an item will shrink relative to the rest of the flex items?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "flex-grow",

          "flex-basis",

          "flex-shrink",

          "flex-wrap"

        ],

        "correct": 2,

        "explanation": "The flex-shrink property specifies how much the item will shrink relative to the rest."

      },

      {

        "id": 5,

        "question": "What does BEM stand for in CSS architecture?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Basic Element Modeler",

          "Block Element Modifier",

          "Better Explicit Markup",

          "Binary Entity Module"

        ],

        "correct": 1,

        "explanation": "BEM stands for Block Element Modifier, a highly useful naming convention."

      },

      {

        "id": 6,

        "question": "Which media feature is used to detect if the user prefers a dark color theme?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "prefers-color-scheme",

          "theme-preference",

          "dark-mode",

          "color-theme"

        ],

        "correct": 0,

        "explanation": "The prefers-color-scheme media feature detects if the user has requested the system use a light or dark color theme."

      },

      {

        "id": 7,

        "question": "Which of these is a common CSS performance optimization technique?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Using only inline styles",

          "Importing all CSS via @import",

          "Minifying the CSS file",

          "Using !important on all rules"

        ],

        "correct": 2,

        "explanation": "Minification removes whitespace and comments, reducing file size and improving load times."

      },

      {

        "id": 8,

        "question": "What are vendor prefixes (e.g., -webkit-, -moz-) used for?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "Making CSS secure",

          "Ensuring cross-browser compatibility for experimental features",

          "Defining variables",

          "Connecting to a database"

        ],

        "correct": 1,

        "explanation": "Vendor prefixes allow browsers to support experimental CSS features before they are fully standardized."

      },

      {

        "id": 9,

        "question": "What is Tailwind CSS?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "A JavaScript framework",

          "A preprocessor like Sass",

          "A utility-first CSS framework",

          "A database engine"

        ],

        "correct": 2,

        "explanation": "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."

      },

      {

        "id": 10,

        "question": "Which unit is based on the width of the viewport?",

        "hasCode": false,

        "codeSnippet": null,

        "options": [

          "vh",

          "rem",

          "vw",

          "em"

        ],

        "correct": 2,

        "explanation": "vw stands for viewport width (1vw = 1% of the viewport width)."

      }

    ]

  },
  "javascript": {

    "beginner": [

      {

        "id": 1,

        "question": "Which keyword is used to declare a variable that can be reassigned?",

        "hasCode": false,

        "options": ["let", "const", "int", "varible"],

        "correct": 0,

        "explanation": "let is used to declare block-scoped variables that can be reassigned."

      },

      {

        "id": 2,

        "question": "What is the correct way to write a JavaScript array?",

        "hasCode": true,

        "codeSnippet": "A) var colors = (1:'red', 2:'green')\nB) var colors = ['red', 'green']\nC) var colors = 'red', 'green'",

        "options": ["A", "B", "C", "None"],

        "correct": 1,

        "explanation": "Arrays in JavaScript are written with square brackets []."

      },

      {

        "id": 3,

        "question": "Which HTML tag is used for JavaScript?",

        "hasCode": false,

        "options": ["<js>", "<scripting>", "<script>", "<javascript>"],

        "correct": 2,

        "explanation": "The <script> tag is used to embed JavaScript."

      },

      {

        "id": 4,

        "question": "How do you write 'Hello World' in an alert box?",

        "hasCode": false,

        "options": ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "console.log('Hello World')"],

        "correct": 2,

        "explanation": "The alert() function displays an alert box with a message."

      },

      {

        "id": 5,

        "question": "How do you create a function in JavaScript?",

        "hasCode": false,

        "options": ["function myFunction()", "function:myFunction()", "function = myFunction()", "new function()"],

        "correct": 0,

        "explanation": "Functions are defined using the 'function' keyword followed by the name."

      },

      {

        "id": 6,

        "question": "How do you call a function named 'myFunction'?",

        "hasCode": false,

        "options": ["call myFunction()", "myFunction()", "call function myFunction()", "run(myFunction)"],

        "correct": 1,

        "explanation": "Call a function by using its name followed by parentheses."

      },

      {

        "id": 7,

        "question": "How to write an IF statement in JavaScript?",

        "hasCode": false,

        "options": ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],

        "correct": 2,

        "explanation": "IF statements use parentheses for conditions."

      },

      {

        "id": 8,

        "question": "How does a FOR loop start?",

        "hasCode": false,

        "options": ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],

        "correct": 1,

        "explanation": "A for loop includes initialization, condition, and increment."

      },

      {

        "id": 9,

        "question": "How can you add a comment in JavaScript?",

        "hasCode": false,

        "options": ["' This is a comment", "<!-- This is a comment -->", "// This is a comment", "# This is a comment"],

        "correct": 2,

        "explanation": "// is used for single-line comments in JS."

      },

      {

        "id": 10,

        "question": "What is the correct way to write an object?",

        "hasCode": false,

        "options": ["var p = {name:'Joe'}", "var p = [name:'Joe']", "var p = (name:'Joe')", "var p = 'name:Joe'"],

        "correct": 0,

        "explanation": "Objects use curly braces {} with key-value pairs."

      }

    ],

    "intermediate": [

      {

        "id": 1,

        "question": "What will `typeof []` return?",

        "hasCode": true,

        "codeSnippet": "console.log(typeof []);",

        "options": ["array", "object", "undefined", "null"],

        "correct": 1,

        "explanation": "Arrays are objects in JavaScript."

      },

      {

        "id": 2,

        "question": "Which method removes the last element from an array?",

        "hasCode": false,

        "options": ["shift()", "pop()", "push()", "slice()"],

        "correct": 1,

        "explanation": "pop() removes the last element and returns it."

      },

      {

        "id": 3,

        "question": "What is the correct syntax for a Template Literal?",

        "hasCode": false,

        "options": ["'Value: ${x}'", "`Value: ${x}`", "\"Value: ${x}\"", "(Value: ${x})"],

        "correct": 1,

        "explanation": "Template literals use backticks ` and ${}."

      },

      {

        "id": 4,

        "question": "What does `JSON.stringify()` do?",

        "hasCode": false,

        "options": ["Parses a string into JSON", "Converts an object into a JSON string", "Checks if a string is valid JSON", "None"],

        "correct": 1,

        "explanation": "It converts a JavaScript object into a JSON formatted string."

      },

      {

        "id": 5,

        "question": "Which keyword is used for constants?",

        "hasCode": false,

        "options": ["const", "constant", "fixed", "let"],

        "correct": 0,

        "explanation": "const declares a variable that cannot be reassigned."

      },

      {

        "id": 6,

        "question": "What is the use of `addEventListener`?",

        "hasCode": false,

        "options": ["To create a new tag", "To listen for user actions like clicks", "To add a new CSS rule", "To define a function"],

        "correct": 1,

        "explanation": "It attaches an event handler to an element without overwriting existing ones."

      },

      {

        "id": 7,

        "question": "Which array method transforms every element?",

        "hasCode": false,

        "options": ["filter()", "find()", "map()", "every()"],

        "correct": 2,

        "explanation": "map() creates a new array by applying a function to each element."

      },

      {

        "id": 8,

        "question": "What will `1 + '1'` return?",

        "hasCode": false,

        "options": ["2", "'11'", "undefined", "NaN"],

        "correct": 1,

        "explanation": "JavaScript performs string concatenation when one operand is a string."

      },

      {

        "id": 9,

        "question": "What does `isNaN()` check?",

        "hasCode": false,

        "options": ["If a value is a number", "If a value is Not-a-Number", "If a value is null", "If a value is zero"],

        "correct": 1,

        "explanation": "It returns true if the value is NaN."

      },

      {

        "id": 10,

        "question": "What is the spread operator?",

        "hasCode": false,

        "options": ["...", "===", "&&", "||"],

        "correct": 0,

        "explanation": "... allows an iterable to be expanded."

      }

    ],

    "advanced": [

      {

        "id": 1,

        "question": "What is a Promise?",

        "hasCode": false,

        "options": ["A function that never ends", "An object representing future completion", "A type of loop", "A variable that changes"],

        "correct": 1,

        "explanation": "A Promise represents the eventual result of an asynchronous operation."

      },

      {

        "id": 2,

        "question": "What is the purpose of `async/await`?",

        "hasCode": false,

        "options": ["To speed up the CPU", "To write cleaner asynchronous code", "To create animations", "To handle CSS"],

        "correct": 1,

        "explanation": "It makes asynchronous code easier to read and write."

      },

      {

        "id": 3,

        "question": "What is a closure?",

        "hasCode": false,

        "options": ["When a function is finished", "When a function remembers its outer scope", "A way to close a tab", "A secure variable type"],

        "correct": 1,

        "explanation": "A closure is a function having access to its lexical environment even when executed outside."

      },

      {

        "id": 4,

        "question": "What is the Event Loop?",

        "hasCode": false,

        "options": ["A loop for clicking buttons", "The mechanism handling async callbacks", "A recursive function", "A type of for loop"],

        "correct": 1,

        "explanation": "The event loop handles the execution of multiple chunks of your program over time."

      },

      {

        "id": 5,

        "question": "What is Prototypal Inheritance?",

        "hasCode": false,

        "options": ["Copying all properties", "Objects inheriting from other objects via prototypes", "Class-based inheritance", "None"],

        "correct": 1,

        "explanation": "In JS, objects can inherit properties from other objects directly via a prototype chain."

      },

      {

        "id": 6,

        "question": "What does `this` refer to in a global context?",

        "hasCode": false,

        "options": ["The current function", "The window object (in browser)", "undefined", "The object it belongs to"],

        "correct": 1,

        "explanation": "In the global scope, this refers to the global object (window)."

      },

      {

        "id": 7,

        "question": "Which method is used to combine multiple promises?",

        "hasCode": false,

        "options": ["Promise.all()", "Promise.join()", "Promise.combine()", "Promise.sync()"],

        "correct": 0,

        "explanation": "Promise.all() waits for all promises to resolve or any to reject."

      },

      {

        "id": 8,

        "question": "What is the difference between `==` and `===`?",

        "hasCode": false,

        "options": ["None", "== checks value, === checks value and type", "=== is faster", "== is for strings"],

        "correct": 1,

        "explanation": "Strict equality (===) does not perform type coercion."

      },

      {

        "id": 9,

        "question": "What is 'hoisting'?",

        "hasCode": false,

        "options": ["Moving elements in DOM", "Variable declarations being moved to the top of their scope", "Deleting unused variables", "None"],

        "correct": 1,

        "explanation": "Declarations are moved to the top of the scope during the compile phase."

      },

      {

        "id": 10,

        "question": "What is a 'Pure Function'?",

        "hasCode": false,

        "options": ["A function with no errors", "A function that always returns the same output for the same input with no side effects", "A function inside a class", "A built-in function"],

        "correct": 1,

        "explanation": "Pure functions are deterministic and don't modify external state."

      }

    ]

  }
};