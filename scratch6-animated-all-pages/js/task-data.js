// ============================================

// Task Data - coding challenges per language and level

// ============================================

export const tasks = {

  "python": {

    "beginner": [

      {

        "id": "py-beg-1",

        "title": "Hello World & Variables",

        "description": "Write a script that prints 'Hello World', then creates a variable called 'name' with your name and prints a greeting.",

        "difficulty": "easy",

        "concepts": [

          "print",

          "variables",

          "strings"

        ],

        "estimatedTime": "10 min",

        "starter": "# Write your code here\n"

      },

      {

        "id": "py-beg-2",

        "title": "Basic Calculator",

        "description": "Ask the user for two numbers using input() and print their sum, difference, product, and quotient.",

        "difficulty": "easy",

        "concepts": [

          "input",

          "math",

          "type casting"

        ],

        "estimatedTime": "15 min",

        "starter": "num1 = int(input('Enter first number: '))\nnum2 = int(input('Enter second number: '))\n# Add your calculations\n"

      },

      {

        "id": "py-beg-3",

        "title": "Even or Odd",

        "description": "Write a script that checks if a given number is even or odd using the modulo operator (%).",

        "difficulty": "easy",

        "concepts": [

          "conditionals",

          "modulo"

        ],

        "estimatedTime": "10 min",

        "starter": "number = 7\n# Write an if/else statement\n"

      }

    ],

    "intermediate": [

      {

        "id": "py-int-1",

        "title": "Build a Number Guessing Game",

        "description": "Use a while loop, random module, and input() to create a game where the user guesses a number 1-100.",

        "difficulty": "medium",

        "concepts": [

          "loops",

          "random",

          "conditionals"

        ],

        "estimatedTime": "25 min",

        "starter": "import random\nsecret = random.randint(1, 100)\n# Write your guessing loop here\n"

      },

      {

        "id": "py-int-2",

        "title": "FizzBuzz",

        "description": "Print numbers 1-50. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', both print 'FizzBuzz'.",

        "difficulty": "medium",

        "concepts": [

          "loops",

          "modulo",

          "conditionals"

        ],

        "estimatedTime": "15 min",

        "starter": "for i in range(1, 51):\n    # Your logic here\n    pass\n"

      },

      {

        "id": "py-int-3",

        "title": "Word Frequency Counter",

        "description": "Write a function that takes a string and returns a dictionary counting the frequency of each word.",

        "difficulty": "medium",

        "concepts": [

          "dictionaries",

          "strings",

          "functions"

        ],

        "estimatedTime": "20 min",

        "starter": "def word_count(text):\n    # Your code here\n    pass\n\nprint(word_count('hello world hello'))\n"

      }

    ],

    "advanced": [

      {

        "id": "py-adv-1",

        "title": "File Word Counter",

        "description": "Write a function that reads a text file and returns the top 5 most common words.",

        "difficulty": "hard",

        "concepts": [

          "file I/O",

          "sorting",

          "dictionaries"

        ],

        "estimatedTime": "30 min",

        "starter": "def top_words(filename):\n    # Read file and count words\n    pass\n"

      },

      {

        "id": "py-adv-2",

        "title": "Simple Bank Account Class",

        "description": "Create a class BankAccount with deposit, withdraw, and get_balance methods.",

        "difficulty": "hard",

        "concepts": [

          "OOP",

          "classes",

          "methods"

        ],

        "estimatedTime": "25 min",

        "starter": "class BankAccount:\n    def __init__(self, initial_balance=0):\n        self.balance = initial_balance\n    # Add methods here\n"

      },

      {

        "id": "py-adv-3",

        "title": "API Data Fetcher",

        "description": "Use the requests module (or simulate it) to fetch data from a JSON API and extract specific fields.",

        "difficulty": "hard",

        "concepts": [

          "APIs",

          "JSON",

          "requests"

        ],

        "estimatedTime": "30 min",

        "starter": "import json\n# Simulate API response\ndata = '{\"users\":[{\"name\":\"Alice\"},{\"name\":\"Bob\"}]}'\n# Parse JSON and print names\n"

      }

    ]

  },

  "html": {

    "beginner": [

      {

        "id": "html-beg-1",

        "title": "Basic Document Structure",

        "description": "Create a standard HTML5 boilerplate with a title and an h1 heading.",

        "difficulty": "easy",

        "concepts": [

          "boilerplate",

          "headings",

          "structure"

        ],

        "estimatedTime": "10 min",

        "starter": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>"

      },

      {

        "id": "html-beg-2",

        "title": "Links and Images",

        "description": "Add an image to your page and a hyperlink that opens in a new tab.",

        "difficulty": "easy",

        "concepts": [

          "img",

          "a",

          "attributes"

        ],

        "estimatedTime": "15 min",

        "starter": "<!-- Add an image and a link below -->\n"

      },

      {

        "id": "html-beg-3",

        "title": "Ordered and Unordered Lists",

        "description": "Create an unordered list of your favorite foods, and an ordered list of your top 3 movies.",

        "difficulty": "easy",

        "concepts": [

          "ul",

          "ol",

          "li"

        ],

        "estimatedTime": "10 min",

        "starter": "<h2>Favorite Foods</h2>\n<!-- Add lists here -->\n"

      }

    ],

    "intermediate": [

      {

        "id": "html-int-1",

        "title": "Build a Personal Profile Page",

        "description": "Create a page with your name, a bio paragraph, a list of skills, and a contact link.",

        "difficulty": "medium",

        "concepts": [

          "headings",

          "paragraphs",

          "lists",

          "links"

        ],

        "estimatedTime": "20 min",

        "starter": "<!-- Build your profile page here -->\n"

      },

      {

        "id": "html-int-2",

        "title": "Create a Registration Form",

        "description": "Build a form with name, email, password fields, a country dropdown, and a submit button.",

        "difficulty": "medium",

        "concepts": [

          "forms",

          "inputs",

          "labels",

          "select"

        ],

        "estimatedTime": "25 min",

        "starter": "<h1>Register</h1>\n<form>\n  <!-- Form fields here -->\n</form>"

      },

      {

        "id": "html-int-3",

        "title": "Table of Data",

        "description": "Create an HTML table containing 3 rows and 3 columns, with a table header row.",

        "difficulty": "medium",

        "concepts": [

          "table",

          "tr",

          "td",

          "th"

        ],

        "estimatedTime": "20 min",

        "starter": "<!-- Create a table -->\n"

      }

    ],

    "advanced": [

      {

        "id": "html-adv-1",

        "title": "Semantic HTML Layout",

        "description": "Design a page layout using semantic tags: header, nav, main, section, article, and footer.",

        "difficulty": "hard",

        "concepts": [

          "semantic tags",

          "layout"

        ],

        "estimatedTime": "30 min",

        "starter": "<!-- Build a semantic layout -->\n"

      },

      {

        "id": "html-adv-2",

        "title": "Multimedia Embeds",

        "description": "Embed a video and an audio element on your page with standard controls.",

        "difficulty": "hard",

        "concepts": [

          "video",

          "audio",

          "embeds"

        ],

        "estimatedTime": "25 min",

        "starter": "<!-- Add multimedia tags -->\n"

      },

      {

        "id": "html-adv-3",

        "title": "Complex Form with Validation",

        "description": "Create a complex form utilizing HTML5 validation attributes like required, min, max, and pattern.",

        "difficulty": "hard",

        "concepts": [

          "HTML5 validation",

          "forms",

          "patterns"

        ],

        "estimatedTime": "30 min",

        "starter": "<!-- Complex form here -->\n"

      }

    ]

  },

  "css": {

    "beginner": [

      {

        "id": "css-beg-1",

        "title": "Colors and Fonts",

        "description": "Select an h1 element, change its text color to blue, and its font-family to Arial.",

        "difficulty": "easy",

        "concepts": [

          "color",

          "font-family",

          "selectors"

        ],

        "estimatedTime": "10 min",

        "starter": "<style>\n  /* Add your CSS here */\n</style>\n<h1>Hello CSS</h1>"

      },

      {

        "id": "css-beg-2",

        "title": "The Box Model",

        "description": "Create a div with a border, padding of 20px, and margin of 10px.",

        "difficulty": "easy",

        "concepts": [

          "padding",

          "margin",

          "border"

        ],

        "estimatedTime": "15 min",

        "starter": "<style>\n  .box {\n    /* Box model styles here */\n  }\n</style>\n<div class=\"box\">Box Model Content</div>"

      },

      {

        "id": "css-beg-3",

        "title": "Classes and IDs",

        "description": "Style an element using a class selector and another using an ID selector.",

        "difficulty": "easy",

        "concepts": [

          "class selector",

          "ID selector"

        ],

        "estimatedTime": "10 min",

        "starter": "<style>\n  /* Your selectors here */\n</style>\n<p class=\"highlight\">Highlight me!</p>\n<p id=\"unique\">Unique styling</p>"

      }

    ],

    "intermediate": [

      {

        "id": "css-int-1",

        "title": "Recreate a CSS Card",

        "description": "Build a card with an image placeholder, title, and button. Use hover effects.",

        "difficulty": "medium",

        "concepts": [

          "box-shadow",

          "border-radius",

          "hover"

        ],

        "estimatedTime": "25 min",

        "starter": "<style>\n  .card {\n    /* Styles here */\n  }\n</style>\n<div class=\"card\">\n  <h3>Card Title</h3>\n  <button>Learn More</button>\n</div>"

      },

      {

        "id": "css-int-2",

        "title": "Flexbox Layout",

        "description": "Use Flexbox to align three boxes evenly in a row, centered horizontally and vertically.",

        "difficulty": "medium",

        "concepts": [

          "flexbox",

          "justify-content",

          "align-items"

        ],

        "estimatedTime": "20 min",

        "starter": "<style>\n  .container {\n    /* Flexbox styles here */\n  }\n</style>\n<div class=\"container\">\n  <div>1</div><div>2</div><div>3</div>\n</div>"

      },

      {

        "id": "css-int-3",

        "title": "CSS Transitions",

        "description": "Create a button that smoothly changes its background color and scales up slightly when hovered over.",

        "difficulty": "medium",

        "concepts": [

          "transitions",

          "transform",

          "hover"

        ],

        "estimatedTime": "15 min",

        "starter": "<style>\n  .animated-btn {\n    /* Transition styles here */\n  }\n</style>\n<button class=\"animated-btn\">Hover Me</button>"

      }

    ],

    "advanced": [

      {

        "id": "css-adv-1",

        "title": "CSS Grid Dashboard",

        "description": "Use CSS Grid to create a 3x3 layout with a header spanning all columns, a sidebar, and a main content area.",

        "difficulty": "hard",

        "concepts": [

          "css grid",

          "grid-template",

          "spanning"

        ],

        "estimatedTime": "30 min",

        "starter": "<style>\n  .grid {\n    /* Grid layout styles here */\n  }\n</style>\n<div class=\"grid\">\n  <header>Header</header>\n  <aside>Sidebar</aside>\n  <main>Main Content</main>\n</div>"

      },

      {

        "id": "css-adv-2",

        "title": "Responsive Nav Bar",

        "description": "Create a nav bar that uses media queries to change from a horizontal list to a vertical stack on small screens.",

        "difficulty": "hard",

        "concepts": [

          "media queries",

          "responsive design",

          "flexbox"

        ],

        "estimatedTime": "30 min",

        "starter": "<style>\n  /* Responsive styles here */\n</style>\n<nav><ul><li>Home</li><li>About</li></ul></nav>"

      },

      {

        "id": "css-adv-3",

        "title": "Keyframe Animations",

        "description": "Write a custom @keyframes animation that makes an element pulse (grow and shrink infinitely).",

        "difficulty": "hard",

        "concepts": [

          "keyframes",

          "animation",

          "transform"

        ],

        "estimatedTime": "25 min",

        "starter": "<style>\n  .pulse {\n    /* Animation styles here */\n  }\n</style>\n<div class=\"pulse\">Pulsing Element</div>"

      }

    ]

  },
  "javascript": {

    "beginner": [

      {

        "id": "js-beg-1",

        "title": "Hello World Alert",

        "description": "Write a JavaScript program that shows an alert box with the text 'Hello World!'.",

        "difficulty": "easy",

        "concepts": ["alert", "strings"],

        "estimatedTime": "5 min",

        "starter": "// Write your code here"

      },

      {

        "id": "js-beg-2",

        "title": "Variables and Addition",

        "description": "Create two variables a and b with values 5 and 10. Log their sum to the console.",

        "difficulty": "easy",

        "concepts": ["variables", "math", "console"],

        "estimatedTime": "5 min",

        "starter": "let a = 5;\n\n// Your code here"

      },

      {

        "id": "js-beg-3",

        "title": "Basic Function",

        "description": "Write a function named 'greet' that takes a name as a parameter and returns 'Hello ' + name.",

        "difficulty": "easy",

        "concepts": ["functions", "parameters"],

        "estimatedTime": "10 min",

        "starter": "function greet(name) {\n\n  // Your code here\n\n}"

      }

    ],

    "intermediate": [

      {

        "id": "js-int-1",

        "title": "DOM Element Selection",

        "description": "Use document.querySelector to select the element with ID 'title' and change its text to 'JavaScript is Awesome!'.",

        "difficulty": "medium",

        "concepts": ["DOM", "selection", "text modification"],

        "estimatedTime": "10 min",

        "starter": "// Your code here"

      },

      {

        "id": "js-int-2",

        "title": "Array Filtering",

        "description": "Given an array of numbers [1, 2, 3, 4, 5, 6], use the filter method to return an array of only the even numbers.",

        "difficulty": "medium",

        "concepts": ["arrays", "filter", "callbacks"],

        "estimatedTime": "15 min",

        "starter": "const nums = [1, 2, 3, 4, 5, 6];\n\n// const evens = ..."

      },

      {

        "id": "js-int-3",

        "title": "Event Listener",

        "description": "Add a click event listener to a button with ID 'myBtn' that logs 'Button was clicked!' to the console.",

        "difficulty": "medium",

        "concepts": ["events", "DOM"],

        "estimatedTime": "15 min",

        "starter": "// Your code here"

      }

    ],

    "advanced": [

      {

        "id": "js-adv-1",

        "title": "Fetch API",

        "description": "Use the fetch API to make a GET request to 'https://jsonplaceholder.typicode.com/posts/1' and log the title of the post.",

        "difficulty": "hard",

        "concepts": ["fetch", "promises", "JSON"],

        "estimatedTime": "20 min",

        "starter": "// Your code here"

      },

      {

        "id": "js-adv-2",

        "title": "Async/Await",

        "description": "Rewrite the previous fetch request using async/await syntax inside an async function.",

        "difficulty": "hard",

        "concepts": ["async", "await", "promises"],

        "estimatedTime": "20 min",

        "starter": "async function getPost() {\n\n  // Your code here\n\n}"

      },

      {

        "id": "js-adv-3",

        "title": "Object-Oriented JavaScript",

        "description": "Create a class 'Car' with a constructor that takes 'make' and 'model'. Add a method 'start()' that logs '[make] [model] started'.",

        "difficulty": "hard",

        "concepts": ["classes", "OOP", "methods"],

        "estimatedTime": "25 min",

        "starter": "class Car {\n\n  // Your code here\n\n}"

      }

    ]

  }
};