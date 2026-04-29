// Lesson Data - auto-generated

export const lessonData = {

  "python": {

    "beginner": [

      {

        "id": "py-b-1",

        "title": "Lesson 1 - Introduction to Python",

        "text": "Python is a high-level, easy-to-learn programming language used for web development, data science, automation, and more. It has simple syntax, which makes it beginner-friendly and widely popular.",

        "code": "Example:\nprint('Hello World')\n\nThis code prints 'Hello World' on the screen. The print() function is used to display output in Python.",

        "language": "python",

        "callout": "What is Python? - Basics module.",

        "tryIt": "# Try it yourself!\nExample:\nprint('Hello World')\n\nThis code prints 'Hello World' on the screen. The print() function is used to display output in Python.",

        "expectedOutput": null

      },

      {

        "id": "py-b-2",

        "title": "Lesson 2 - Variables",

        "text": "Variables are used to store data values in a program. In Python, you do not need to declare the type of a variable explicitly.",

        "code": "x = 10\ny = 'Hello'\n\nprint(x)\nprint(y)",

        "language": "python",

        "callout": "Here, x stores a number and y stores a string. Python automatically detects the type.",

        "tryIt": "# Try it yourself!\nx = 10\ny = 'Hello'\n\nprint(x)\nprint(y)",

        "expectedOutput": null

      },

      {

        "id": "py-b-3",

        "title": "Lesson 3 - Data Types",

        "text": "Python has different data types such as int (numbers), float (decimal numbers), str (text), and bool (True/False).",

        "code": "x = 5\nprint(type(x))",

        "language": "python",

        "callout": "This will output <class 'int'> showing that x is an integer.",

        "tryIt": "# Try it yourself!\nx = 5\nprint(type(x))",

        "expectedOutput": null

      },

      {

        "id": "py-b-4",

        "title": "Lesson 4 - Input and Output",

        "text": "The input() function is used to take user input from the keyboard. It always returns data as a string.",

        "code": "name = input('Enter your name: ')\nprint('Hello', name)",

        "language": "python",

        "callout": "This takes input from user and prints a greeting message.",

        "tryIt": "# Try it yourself!\nname = input('Enter your name: ')\nprint('Hello', name)",

        "expectedOutput": null

      },

      {

        "id": "py-b-5",

        "title": "Lesson 5 - Operators",

        "text": "Python supports arithmetic (+, -, *, /), comparison (==, !=), and logical (and, or, not) operators.",

        "code": "x = 10\ny = 5\nprint(x + y)\nprint(x > y)",

        "language": "python",

        "callout": "This performs addition and comparison operations.",

        "tryIt": "# Try it yourself!\nx = 10\ny = 5\nprint(x + y)\nprint(x > y)",

        "expectedOutput": null

      },

      {

        "id": "py-b-6",

        "title": "Lesson 6 - Conditional Statements",

        "text": "Conditional statements are used to make decisions in a program. Code runs based on whether a condition is true or false.",

        "code": "x = 10\nif x > 5:\n    print('Greater')\nelse:\n    print('Smaller')",

        "language": "python",

        "callout": "This checks condition and executes code accordingly.",

        "tryIt": "# Try it yourself!\nx = 10\nif x > 5:\n    print('Greater')\nelse:\n    print('Smaller')",

        "expectedOutput": null

      },

      {

        "id": "py-b-7",

        "title": "Lesson 7 - Loops",

        "text": "Loops are used to repeat a block of code. Python has for loops and while loops.",

        "code": "for i in range(5):\n    print(i)",

        "language": "python",

        "callout": "This prints numbers from 0 to 4.",

        "tryIt": "# Try it yourself!\nfor i in range(5):\n    print(i)",

        "expectedOutput": null

      },

      {

        "id": "py-b-8",

        "title": "Lesson 8 - Functions",

        "text": "Functions are reusable blocks of code that perform a specific task. They help in organizing code and avoiding repetition.",

        "code": "def greet():\n    print('Hello')\n\ngreet()",

        "language": "python",

        "callout": "This defines and calls a function.",

        "tryIt": "# Try it yourself!\ndef greet():\n    print('Hello')\n\ngreet()",

        "expectedOutput": null

      },

      {

        "id": "py-b-9",

        "title": "Lesson 9 - Lists",

        "text": "A list is a collection of items stored in a single variable. Lists are ordered and changeable.",

        "code": "nums = [1, 2, 3]\nprint(nums[0])",

        "language": "python",

        "callout": "This prints the first element of the list.",

        "tryIt": "# Try it yourself!\nnums = [1, 2, 3]\nprint(nums[0])",

        "expectedOutput": null

      },

      {

        "id": "py-b-10",

        "title": "Lesson 10 - Tuples and Sets",

        "text": "Tuples are ordered and cannot be changed. Sets are unordered and do not allow duplicate values.",

        "code": "t = (1,2,3)\ns = {1,2,2,3}\nprint(s)",

        "language": "python",

        "callout": "This removes duplicate values in set.",

        "tryIt": "# Try it yourself!\nt = (1,2,3)\ns = {1,2,2,3}\nprint(s)",

        "expectedOutput": null

      }

    ],

    "intermediate": [

      {

        "id": "py-i-1",

        "title": "Lesson 1 - Dictionaries",

        "text": "A dictionary stores data in key-value pairs. It is useful when you want to associate values with unique keys. Dictionaries are unordered and mutable.",

        "code": "student = {'name': 'John', 'age': 20}\nprint(student['name'])",

        "language": "python",

        "callout": "This retrieves the value associated with the key 'name'.",

        "tryIt": "# Try it yourself!\nstudent = {'name': 'John', 'age': 20}\nprint(student['name'])",

        "expectedOutput": null

      },

      {

        "id": "py-i-2",

        "title": "Lesson 2 - String Handling",

        "text": "Strings are sequences of characters. Python provides many methods like upper(), lower(), replace(), and slicing for string manipulation.",

        "code": "text = 'hello'\nprint(text.upper())",

        "language": "python",

        "callout": "This converts the string to uppercase.",

        "tryIt": "# Try it yourself!\ntext = 'hello'\nprint(text.upper())",

        "expectedOutput": null

      },

      {

        "id": "py-i-3",

        "title": "Lesson 3 - File Handling",

        "text": "File handling allows you to read data from files stored on your system. This is useful for working with large datasets.",

        "code": "f = open('file.txt', 'r')\nprint(f.read())\nf.close()",

        "language": "python",

        "callout": "This reads the content of a file.",

        "tryIt": "# Try it yourself!\nf = open('file.txt', 'r')\nprint(f.read())\nf.close()",

        "expectedOutput": null

      },

      {

        "id": "py-i-4",

        "title": "Lesson 4 - Exception Handling",

        "text": "Exception handling is used to handle runtime errors so that the program does not crash. It improves program stability.",

        "code": "try:\n    x = 10 / 0\nexcept:\n    print('Error occurred')",

        "language": "python",

        "callout": "This catches division by zero error.",

        "tryIt": "# Try it yourself!\ntry:\n    x = 10 / 0\nexcept:\n    print('Error occurred')",

        "expectedOutput": null

      },

      {

        "id": "py-i-5",

        "title": "Lesson 5 - Modules and Packages",

        "text": "Modules are files containing Python code that can be reused. Packages are collections of modules.",

        "code": "import math\nprint(math.sqrt(16))",

        "language": "python",

        "callout": "This imports math module and uses sqrt function.",

        "tryIt": "# Try it yourself!\nimport math\nprint(math.sqrt(16))",

        "expectedOutput": null

      },

      {

        "id": "py-i-6",

        "title": "Lesson 6 - Object-Oriented Programming",

        "text": "OOP is a programming approach based on objects and classes. It helps organize code and model real-world entities.",

        "code": "class Person:\n    pass",

        "language": "python",

        "callout": "This creates a simple class.",

        "tryIt": "# Try it yourself!\nclass Person:\n    pass",

        "expectedOutput": null

      },

      {

        "id": "py-i-7",

        "title": "Lesson 7 - Classes and Objects",

        "text": "A class is a blueprint for creating objects. Objects are instances of a class with properties and methods.",

        "code": "class Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person('John')\nprint(p.name)",

        "language": "python",

        "callout": "This creates an object with a name.",

        "tryIt": "# Try it yourself!\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person('John')\nprint(p.name)",

        "expectedOutput": null

      },

      {

        "id": "py-i-8",

        "title": "Lesson 8 - Inheritance",

        "text": "Inheritance allows one class to inherit properties and methods from another class. It promotes code reuse.",

        "code": "class A:\n    def show(self):\n        print('Hello')\n\nclass B(A):\n    pass\n\nb = B()\nb.show()",

        "language": "python",

        "callout": "Class B inherits method from class A.",

        "tryIt": "# Try it yourself!\nclass A:\n    def show(self):\n        print('Hello')\n\nclass B(A):\n    pass\n\nb = B()\nb.show()",

        "expectedOutput": null

      },

      {

        "id": "py-i-9",

        "title": "Lesson 9 - Lambda Functions",

        "text": "Lambda functions are small anonymous functions defined using lambda keyword. They are used for short operations.",

        "code": "add = lambda x, y: x + y\nprint(add(2,3))",

        "language": "python",

        "callout": "This returns the sum of two numbers.",

        "tryIt": "# Try it yourself!\nadd = lambda x, y: x + y\nprint(add(2,3))",

        "expectedOutput": null

      },

      {

        "id": "py-i-10",

        "title": "Lesson 10 - List Comprehension",

        "text": "List comprehension provides a concise way to create lists. It makes code shorter and more readable.",

        "code": "nums = [x for x in range(5)]\nprint(nums)",

        "language": "python",

        "callout": "This creates a list from 0 to 4.",

        "tryIt": "# Try it yourself!\nnums = [x for x in range(5)]\nprint(nums)",

        "expectedOutput": null

      }

    ],

    "advanced": [

      {

        "id": "py-a-1",

        "title": "Lesson 1 - Decorators",

        "text": "Decorators are functions that modify the behavior of other functions without changing their code. They are useful for adding functionality like logging, authentication, or timing.",

        "code": "def my_decorator(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello')\n\nsay_hello()",

        "language": "python",

        "callout": "This adds extra behavior before and after the function call.",

        "tryIt": "# Try it yourself!\ndef my_decorator(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello')\n\nsay_hello()",

        "expectedOutput": null

      },

      {

        "id": "py-a-2",

        "title": "Lesson 2 - Generators",

        "text": "Generators are functions that return values one at a time using the yield keyword. They are memory efficient because they generate values on the fly.",

        "code": "def count():\n    for i in range(3):\n        yield i\n\nfor num in count():\n    print(num)",

        "language": "python",

        "callout": "This generates numbers one by one instead of storing them in memory.",

        "tryIt": "# Try it yourself!\ndef count():\n    for i in range(3):\n        yield i\n\nfor num in count():\n    print(num)",

        "expectedOutput": null

      },

      {

        "id": "py-a-3",

        "title": "Lesson 3 - Multithreading",

        "text": "Multithreading allows multiple threads to run concurrently, improving performance for tasks like downloading files or handling multiple users.",

        "code": "import threading\n\ndef task():\n    print('Running thread')\n\nthread = threading.Thread(target=task)\nthread.start()",

        "language": "python",

        "callout": "This runs a function in a separate thread.",

        "tryIt": "# Try it yourself!\nimport threading\n\ndef task():\n    print('Running thread')\n\nthread = threading.Thread(target=task)\nthread.start()",

        "expectedOutput": null

      },

      {

        "id": "py-a-4",

        "title": "Lesson 4 - Working with APIs",

        "text": "An API allows communication between applications. In Python, APIs are used to fetch data from external services like weather or social media.",

        "code": "import requests\nresponse = requests.get('https://api.example.com')\nprint(response.json())",

        "language": "python",

        "callout": "This fetches data from an API.",

        "tryIt": "# Try it yourself!\nimport requests\nresponse = requests.get('https://api.example.com')\nprint(response.json())",

        "expectedOutput": null

      },

      {

        "id": "py-a-5",

        "title": "Lesson 5 - Database Connection",

        "text": "Python can connect to databases like MongoDB or MySQL to store and retrieve data. This is important for real-world applications.",

        "code": "from pymongo import MongoClient\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['test']",

        "language": "python",

        "callout": "This connects Python to MongoDB.",

        "tryIt": "# Try it yourself!\nfrom pymongo import MongoClient\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['test']",

        "expectedOutput": null

      },

      {

        "id": "py-a-6",

        "title": "Lesson 6 - Virtual Environments",

        "text": "A virtual environment is used to create isolated Python environments. It helps manage dependencies separately for different projects.",

        "code": "python -m venv myenv\nsource myenv/bin/activate",

        "language": "python",

        "callout": "This creates and activates a virtual environment.",

        "tryIt": "# Try it yourself!\npython -m venv myenv\nsource myenv/bin/activate",

        "expectedOutput": null

      },

      {

        "id": "py-a-7",

        "title": "Lesson 7 - Testing with Pytest",

        "text": "Testing ensures that your code works correctly and helps detect bugs early. Pytest is a popular testing framework in Python.",

        "code": "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2,3) == 5",

        "language": "python",

        "callout": "This checks if the function returns correct result.",

        "tryIt": "# Try it yourself!\ndef add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2,3) == 5",

        "expectedOutput": null

      },

      {

        "id": "py-a-8",

        "title": "Lesson 8 - Performance Optimization",

        "text": "Optimizing code improves speed and efficiency. Techniques include using efficient data structures and avoiding unnecessary loops.",

        "code": "Use list comprehension instead of loops:\n[x for x in range(10)]",

        "language": "python",

        "callout": "This is faster and more readable.",

        "tryIt": "# Try it yourself!\nUse list comprehension instead of loops:\n[x for x in range(10)]",

        "expectedOutput": null

      },

      {

        "id": "py-a-9",

        "title": "Lesson 9 - Asynchronous Programming",

        "text": "Asynchronous programming allows tasks to run without blocking the program. It is useful for I/O operations like API calls.",

        "code": "import asyncio\n\nasync def main():\n    print('Hello')\n\nasyncio.run(main())",

        "language": "python",

        "callout": "This runs an async function.",

        "tryIt": "# Try it yourself!\nimport asyncio\n\nasync def main():\n    print('Hello')\n\nasyncio.run(main())",

        "expectedOutput": null

      },

      {

        "id": "py-a-10",

        "title": "Lesson 10 - Project: CLI Application",

        "text": "A CLI (Command Line Interface) application allows users to interact with a program using text commands.",

        "code": "name = input('Enter name: ')\nprint('Hello', name)",

        "language": "python",

        "callout": "This creates a simple command-line program.",

        "tryIt": "# Try it yourself!\nname = input('Enter name: ')\nprint('Hello', name)",

        "expectedOutput": null

      }

    ]

  },

  "html": {

    "beginner": [

      {

        "id": "html-b-1",

        "title": "Lesson 1 - Introduction to HTML",

        "text": "HTML (HyperText Markup Language) is used to structure content on the web using elements called tags.",

        "code": "Browsers read HTML files and render them into visual web pages.",

        "language": "html",

        "callout": "Browsers read HTML files and render them into visual web pages.",

        "tryIt": "Browsers read HTML files and render them into visual web pages.",

        "expectedOutput": null

      },

      {

        "id": "html-b-2",

        "title": "Lesson 2 - HTML Document Structure",

        "text": "Every HTML document starts with <!DOCTYPE html> followed by html, head, and body tags.",

        "code": "Head contains metadata, body contains visible content.",

        "language": "html",

        "callout": "Head contains metadata, body contains visible content.",

        "tryIt": "Head contains metadata, body contains visible content.",

        "expectedOutput": null

      },

      {

        "id": "html-b-3",

        "title": "Lesson 3 - Headings and Paragraphs",

        "text": "HTML provides <h1> to <h6> tags for headings.",

        "code": "<p> tag is used to define text paragraphs.",

        "language": "html",

        "callout": "Headings - Text module.",

        "tryIt": "<p> tag is used to define text paragraphs.",

        "expectedOutput": null

      },

      {

        "id": "html-b-4",

        "title": "Lesson 4 - Text Formatting",

        "text": "<b> and <i> tags are used for styling text.",

        "code": "<strong> and <em> provide meaning along with style.",

        "language": "html",

        "callout": "Bold and Italic - Text module.",

        "tryIt": "<strong> and <em> provide meaning along with style.",

        "expectedOutput": null

      },

      {

        "id": "html-b-5",

        "title": "Lesson 5 - Links",

        "text": "<a href='url'>Link</a> is used to create hyperlinks.",

        "code": "target='_blank' opens link in new tab.",

        "language": "html",

        "callout": "Anchor Tag - Elements module.",

        "tryIt": "target='_blank' opens link in new tab.",

        "expectedOutput": null

      },

      {

        "id": "html-b-6",

        "title": "Lesson 6 - Images",

        "text": "<img src='image.jpg' alt='desc'> is used to display images.",

        "code": "Provides alternate text for accessibility.",

        "language": "html",

        "callout": "Provides alternate text for accessibility.",

        "tryIt": "Provides alternate text for accessibility.",

        "expectedOutput": null

      },

      {

        "id": "html-b-7",

        "title": "Lesson 7 - Lists",

        "text": "<ol> creates numbered lists.",

        "code": "<ul> creates bullet lists.",

        "language": "html",

        "callout": "Ordered List - Elements module.",

        "tryIt": "<ul> creates bullet lists.",

        "expectedOutput": null

      },

      {

        "id": "html-b-8",

        "title": "Lesson 8 - Tables",

        "text": "<table>, <tr>, <td> define tables.",

        "code": "<th> defines header cells.",

        "language": "html",

        "callout": "Table Structure - Elements module.",

        "tryIt": "<th> defines header cells.",

        "expectedOutput": null

      },

      {

        "id": "html-b-9",

        "title": "Lesson 9 - Forms",

        "text": "<form> is used to collect user input.",

        "code": "text, password, email are common input types.",

        "language": "html",

        "callout": "Form Tag - Forms module.",

        "tryIt": "text, password, email are common input types.",

        "expectedOutput": null

      },

      {

        "id": "html-b-10",

        "title": "Lesson 10 - Semantic HTML",

        "text": "<header>, <footer>, <article> improve readability.",

        "code": "Improves SEO and accessibility.",

        "language": "html",

        "callout": "Improves SEO and accessibility.",

        "tryIt": "Improves SEO and accessibility.",

        "expectedOutput": null

      }

    ],

    "intermediate": [

      {

        "id": "html-i-1",

        "title": "Lesson 1 - Advanced Forms",

        "text": "HTML5 introduced input types like email, date, number.\nExample:\n<input type='email' placeholder='Enter email'>",

        "code": "Use attributes like required, minlength.\nExample:\n<input type='text' required>",

        "language": "html",

        "callout": "Input Types - Forms module.",

        "tryIt": "Use attributes like required, minlength.\nExample:\n<input type='text' required>",

        "expectedOutput": null

      },

      {

        "id": "html-i-2",

        "title": "Lesson 2 - Audio and Video",

        "text": "<audio controls>\n <source src='audio.mp3'>\n</audio>",

        "code": "<video controls width='300'>\n <source src='video.mp4'>\n</video>",

        "language": "html",

        "callout": "Audio Tag - Media module.",

        "tryIt": "<video controls width='300'>\n <source src='video.mp4'>\n</video>",

        "expectedOutput": null

      },

      {

        "id": "html-i-3",

        "title": "Lesson 3 - Iframes",

        "text": "Used to embed another webpage.\nExample:\n<iframe src='https://example.com'></iframe>",

        "code": "width, height, title improve usability.",

        "language": "html",

        "callout": "What is iframe? - Embedding module.",

        "tryIt": "width, height, title improve usability.",

        "expectedOutput": null

      },

      {

        "id": "html-i-4",

        "title": "Lesson 4 - Meta Tags",

        "text": "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",

        "code": "<meta name='description' content='Learn HTML'>",

        "language": "html",

        "callout": "Viewport - Head module.",

        "tryIt": "<meta name='description' content='Learn HTML'>",

        "expectedOutput": null

      },

      {

        "id": "html-i-5",

        "title": "Lesson 5 - Block vs Inline",

        "text": "Take full width.\nExamples: div, p",

        "code": "Take only needed space.\nExamples: span, a",

        "language": "html",

        "callout": "Block Elements - Layout module.",

        "tryIt": "Take only needed space.\nExamples: span, a",

        "expectedOutput": null

      },

      {

        "id": "html-i-6",

        "title": "Lesson 6 - Div and Span",

        "text": "Used for block-level grouping.\nExample:\n<div>Content</div>",

        "code": "Used for inline grouping.\nExample:\n<span>Text</span>",

        "language": "html",

        "callout": "Div - Layout module.",

        "tryIt": "Used for inline grouping.\nExample:\n<span>Text</span>",

        "expectedOutput": null

      },

      {

        "id": "html-i-7",

        "title": "Lesson 7 - HTML Entities",

        "text": "&lt; &gt; &amp; are HTML entities.",

        "code": "Used to display reserved symbols.",

        "language": "html",

        "callout": "Used to display reserved symbols.",

        "tryIt": "Used to display reserved symbols.",

        "expectedOutput": null

      },

      {

        "id": "html-i-8",

        "title": "Lesson 8 - Responsive Images",

        "text": "<img src='img.jpg' srcset='img-small.jpg 500w'>",

        "code": "Defines image size for different screens.",

        "language": "html",

        "callout": "Defines image size for different screens.",

        "tryIt": "Defines image size for different screens.",

        "expectedOutput": null

      },

      {

        "id": "html-i-9",

        "title": "Lesson 9 - Data Attributes",

        "text": "Use data-* attributes.\nExample:\n<div data-id='123'></div>",

        "code": "element.dataset.id",

        "language": "html",

        "callout": "Custom Data - Attributes module.",

        "tryIt": "element.dataset.id",

        "expectedOutput": null

      },

      {

        "id": "html-i-10",

        "title": "Lesson 10 - Accessibility Basics",

        "text": "Helps screen readers.\nExample:\n<img alt='description'>",

        "code": "Improves accessibility.\nExample:\n<button aria-label='Close'></button>",

        "language": "html",

        "callout": "Alt Text - Accessibility module.",

        "tryIt": "Improves accessibility.\nExample:\n<button aria-label='Close'></button>",

        "expectedOutput": null

      }

    ],

    "advanced": [

      {

        "id": "html-a-1",

        "title": "Lesson 1 - Canvas API",

        "text": "<canvas id='c'></canvas>",

        "code": "Use JavaScript to draw shapes.",

        "language": "html",

        "callout": "Use JavaScript to draw shapes.",

        "tryIt": "Use JavaScript to draw shapes.",

        "expectedOutput": null

      },

      {

        "id": "html-a-2",

        "title": "Lesson 2 - SVG",

        "text": "<svg width='100' height='100'><circle cx='50' cy='50' r='40'></circle></svg>",

        "code": "Scalable without losing quality.",

        "language": "html",

        "callout": "Scalable without losing quality.",

        "tryIt": "Scalable without losing quality.",

        "expectedOutput": null

      },

      {

        "id": "html-a-3",

        "title": "Lesson 3 - Drag and Drop",

        "text": "<div draggable='true'>Drag me</div>",

        "code": "dragstart, dragover, drop",

        "language": "html",

        "callout": "Draggable - APIs module.",

        "tryIt": "dragstart, dragover, drop",

        "expectedOutput": null

      },

      {

        "id": "html-a-4",

        "title": "Lesson 4 - Web Storage",

        "text": "localStorage.setItem('key','value')",

        "code": "Stores data for session only.",

        "language": "html",

        "callout": "Stores data for session only.",

        "tryIt": "Stores data for session only.",

        "expectedOutput": null

      },

      {

        "id": "html-a-5",

        "title": "Lesson 5 - Geolocation",

        "text": "navigator.geolocation.getCurrentPosition()",

        "code": "Used in maps and apps.",

        "language": "html",

        "callout": "Used in maps and apps.",

        "tryIt": "Used in maps and apps.",

        "expectedOutput": null

      },

      {

        "id": "html-a-6",

        "title": "Lesson 6 - HTML Templates",

        "text": "<template><p>Hidden content</p></template>",

        "code": "Used with JavaScript for dynamic content.",

        "language": "html",

        "callout": "Used with JavaScript for dynamic content.",

        "tryIt": "Used with JavaScript for dynamic content.",

        "expectedOutput": null

      },

      {

        "id": "html-a-7",

        "title": "Lesson 7 - Performance Optimization",

        "text": "Reduce unnecessary tags.",

        "code": "<img loading='lazy'>",

        "language": "html",

        "callout": "Minimize HTML - Optimization module.",

        "tryIt": "<img loading='lazy'>",

        "expectedOutput": null

      },

      {

        "id": "html-a-8",

        "title": "Lesson 8 - SEO Basics",

        "text": "Use proper title and description.",

        "code": "Improves ranking.",

        "language": "html",

        "callout": "Meta Tags - SEO module.",

        "tryIt": "Improves ranking.",

        "expectedOutput": null

      },

      {

        "id": "html-a-9",

        "title": "Lesson 9 - Best Practices",

        "text": "Use indentation and comments.",

        "code": "Use W3C validator.",

        "language": "html",

        "callout": "Clean Code - Optimization module.",

        "tryIt": "Use W3C validator.",

        "expectedOutput": null

      },

      {

        "id": "html-a-10",

        "title": "Lesson 10 - Project: Build Webpage",

        "text": "Create header, main, footer layout.",

        "code": "Combine HTML with CSS and JS.",

        "language": "html",

        "callout": "Combine HTML with CSS and JS.",

        "tryIt": "Combine HTML with CSS and JS.",

        "expectedOutput": null

      }

    ]

  },

  "css": {

    "beginner": [

      {

        "id": "css-b-1",

        "title": "Lesson 1 - Introduction to CSS",

        "text": "CSS (Cascading Style Sheets) is used to style and design web pages. While HTML is used to create structure, CSS controls how elements look such as colors, fonts, spacing, and layout. This separation makes websites easier to manage and maintain.",

        "code": "Example:\np {\n  color: blue;\n}",

        "language": "css",

        "callout": "This code selects all paragraph (<p>) elements and changes their text color to blue. CSS rules always have a selector and a declaration block.",

        "tryIt": "Example:\np {\n  color: blue;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-b-2",

        "title": "Lesson 2 - Types of CSS",

        "text": "Inline CSS is applied directly inside an HTML element using the style attribute. It is useful for quick styling but not recommended for large projects.\n\nExample:\n<p style='color:red;'>Hello</p>",

        "code": "Internal CSS is written inside <style> tag in the head section. External CSS is written in a separate .css file and linked using <link> tag. External CSS is best for large projects.\n\nExample:\n<link rel='stylesheet' href='style.css'>",

        "language": "css",

        "callout": "Inline CSS - Basics module.",

        "tryIt": "Internal CSS is written inside <style> tag in the head section. External CSS is written in a separate .css file and linked using <link> tag. External CSS is best for large projects.\n\nExample:\n<link rel='stylesheet' href='style.css'>",

        "expectedOutput": null

      },

      {

        "id": "css-b-3",

        "title": "Lesson 3 - Selectors",

        "text": "Selectors are used to target HTML elements that you want to style. They tell the browser which elements the CSS rules should apply to.",

        "code": "Element selector:\np { color: red; }\n\nClass selector:\n.myClass { color: green; }\n\nID selector:\n#myId { color: blue; }",

        "language": "css",

        "callout": "Class can be reused, ID should be unique.",

        "tryIt": "Element selector:\np { color: red; }\n\nClass selector:\n.myClass { color: green; }\n\nID selector:\n#myId { color: blue; }",

        "expectedOutput": null

      },

      {

        "id": "css-b-4",

        "title": "Lesson 4 - Colors",

        "text": "CSS supports different color formats like named colors, HEX, RGB.\n\nExample:\ncolor: red;\ncolor: #ff0000;\ncolor: rgb(255,0,0);",

        "code": "You can set background color using background-color property.\n\nExample:\nbody {\n  background-color: lightblue;\n}",

        "language": "css",

        "callout": "This sets the entire page background color.",

        "tryIt": "You can set background color using background-color property.\n\nExample:\nbody {\n  background-color: lightblue;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-b-5",

        "title": "Lesson 5 - Background",

        "text": "You can add images as background using background-image property.\n\nExample:\nbody {\n  background-image: url('image.jpg');\n}",

        "code": "You can control background behavior using properties like repeat, size, and position.\n\nExample:\nbackground-repeat: no-repeat;\nbackground-size: cover;",

        "language": "css",

        "callout": "Background Image - Styling module.",

        "tryIt": "You can control background behavior using properties like repeat, size, and position.\n\nExample:\nbackground-repeat: no-repeat;\nbackground-size: cover;",

        "expectedOutput": null

      },

      {

        "id": "css-b-6",

        "title": "Lesson 6 - Borders",

        "text": "Borders are used to create outlines around elements.\n\nExample:\ndiv {\n  border: 2px solid black;\n}\n\nThis creates a solid black border.",

        "code": "You can create rounded corners using border-radius.\n\nExample:\nborder-radius: 10px;",

        "language": "css",

        "callout": "Higher value = more rounded corners.",

        "tryIt": "You can create rounded corners using border-radius.\n\nExample:\nborder-radius: 10px;",

        "expectedOutput": null

      },

      {

        "id": "css-b-7",

        "title": "Lesson 7 - Margin and Padding",

        "text": "Margin creates space outside an element. It controls distance between elements.\n\nExample:\nmargin: 20px;",

        "code": "Padding creates space inside the element, between content and border.\n\nExample:\npadding: 10px;",

        "language": "css",

        "callout": "This makes content look less crowded.",

        "tryIt": "Padding creates space inside the element, between content and border.\n\nExample:\npadding: 10px;",

        "expectedOutput": null

      },

      {

        "id": "css-b-8",

        "title": "Lesson 8 - Text Styling",

        "text": "You can align text using text-align property.\n\nExample:\ntext-align: center;\n\nThis centers the text.",

        "code": "Used to style text lines like underline or remove default styles.\n\nExample:\ntext-decoration: underline;\ntext-decoration: none;",

        "language": "css",

        "callout": "Text Alignment - Typography module.",

        "tryIt": "Used to style text lines like underline or remove default styles.\n\nExample:\ntext-decoration: underline;\ntext-decoration: none;",

        "expectedOutput": null

      },

      {

        "id": "css-b-9",

        "title": "Lesson 9 - Fonts",

        "text": "Font family defines the style of text.\n\nExample:\nfont-family: Arial, sans-serif;\n\nFallback fonts ensure compatibility.",

        "code": "Font size controls text size and weight controls boldness.\n\nExample:\nfont-size: 16px;\nfont-weight: bold;",

        "language": "css",

        "callout": "Font Family - Typography module.",

        "tryIt": "Font size controls text size and weight controls boldness.\n\nExample:\nfont-size: 16px;\nfont-weight: bold;",

        "expectedOutput": null

      },

      {

        "id": "css-b-10",

        "title": "Lesson 10 - Display Property",

        "text": "Display property defines how elements behave.\n\nblock → full width\ninline → only content width\ninline-block → mix of both",

        "code": "You can hide elements using display property.\n\nExample:\ndisplay: none;",

        "language": "css",

        "callout": "Element will not be visible or take space.",

        "tryIt": "You can hide elements using display property.\n\nExample:\ndisplay: none;",

        "expectedOutput": null

      }

    ],

    "intermediate": [

      {

        "id": "css-i-1",

        "title": "Lesson 1 - Position Property",

        "text": "The position property defines how an element is placed on a webpage. Common values include static, relative, absolute, fixed, and sticky. These help control layout and overlapping of elements.",

        "code": "div {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}",

        "language": "css",

        "callout": "This positions the element 20px from the top and 30px from the left of its nearest positioned ancestor.",

        "tryIt": "div {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-2",

        "title": "Lesson 2 - Flexbox",

        "text": "Flexbox is a layout model used to design flexible and responsive layouts. It allows easy alignment of elements horizontally and vertically within a container.",

        "code": ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",

        "language": "css",

        "callout": "This centers all items inside the container both horizontally and vertically.",

        "tryIt": ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-3",

        "title": "Lesson 3 - Grid Layout",

        "text": "CSS Grid is a two-dimensional layout system used to create complex layouts with rows and columns. It is more powerful than Flexbox for full-page designs.",

        "code": ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}",

        "language": "css",

        "callout": "This creates a two-column layout with spacing between items.",

        "tryIt": ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-4",

        "title": "Lesson 4 - Responsive Design",

        "text": "Responsive design ensures that a website looks good on all devices such as mobile, tablet, and desktop. It uses flexible layouts and units.",

        "code": "img {\n  max-width: 100%;\n  height: auto;\n}",

        "language": "css",

        "callout": "This ensures images resize properly on smaller screens.",

        "tryIt": "img {\n  max-width: 100%;\n  height: auto;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-5",

        "title": "Lesson 5 - Media Queries",

        "text": "Media queries allow you to apply different styles based on screen size or device type. They are essential for building responsive websites.",

        "code": "@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}",

        "language": "css",

        "callout": "This changes background color when screen width is 600px or less.",

        "tryIt": "@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-6",

        "title": "Lesson 6 - Pseudo Classes",

        "text": "Pseudo classes define a special state of an element such as hover, focus, or active. They are used to add interactivity without JavaScript.",

        "code": "a:hover {\n  color: red;\n}",

        "language": "css",

        "callout": "This changes link color when the user hovers over it.",

        "tryIt": "a:hover {\n  color: red;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-7",

        "title": "Lesson 7 - Pseudo Elements",

        "text": "Pseudo elements are used to style specific parts of an element, such as the first line or adding content before/after elements.",

        "code": "p::before {\n  content: 'Note: ';\n}",

        "language": "css",

        "callout": "This adds text before every paragraph.",

        "tryIt": "p::before {\n  content: 'Note: ';\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-8",

        "title": "Lesson 8 - Z-index",

        "text": "Z-index controls the vertical stacking order of elements. Elements with higher values appear on top of others.",

        "code": "div {\n  position: absolute;\n  z-index: 10;\n}",

        "language": "css",

        "callout": "This places the element above elements with lower z-index.",

        "tryIt": "div {\n  position: absolute;\n  z-index: 10;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-9",

        "title": "Lesson 9 - Overflow",

        "text": "The overflow property controls what happens when content is too large for its container. It can be hidden, scrolled, or automatically handled.",

        "code": "div {\n  overflow: scroll;\n}",

        "language": "css",

        "callout": "This adds scrollbars when content overflows.",

        "tryIt": "div {\n  overflow: scroll;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-i-10",

        "title": "Lesson 10 - Transitions",

        "text": "CSS transitions allow smooth changes between styles over time. They improve user experience by making animations smooth.",

        "code": "div {\n  transition: background-color 0.5s ease;\n}\n\ndiv:hover {\n  background-color: red;\n}",

        "language": "css",

        "callout": "This smoothly changes background color on hover.",

        "tryIt": "div {\n  transition: background-color 0.5s ease;\n}\n\ndiv:hover {\n  background-color: red;\n}",

        "expectedOutput": null

      }

    ],

    "advanced": [

      {

        "id": "css-a-1",

        "title": "Lesson 1 - CSS Animations",

        "text": "CSS animations allow elements to gradually change from one style to another. Unlike transitions, animations can have multiple steps using keyframes and can run automatically.",

        "code": "@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\ndiv {\n  animation: fade 2s;\n}",

        "language": "css",

        "callout": "This creates a fade-in effect over 2 seconds.",

        "tryIt": "@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\ndiv {\n  animation: fade 2s;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-a-2",

        "title": "Lesson 2 - CSS Variables",

        "text": "CSS variables (custom properties) allow you to store values like colors or sizes and reuse them throughout your stylesheet. This makes code easier to maintain.",

        "code": ":root {\n  --main-color: blue;\n}\n\ndiv {\n  color: var(--main-color);\n}\n\nYou define variables using -- and access them using var().",

        "language": "css",

        "callout": "What are Variables? - Advanced module.",

        "tryIt": ":root {\n  --main-color: blue;\n}\n\ndiv {\n  color: var(--main-color);\n}\n\nYou define variables using -- and access them using var().",

        "expectedOutput": null

      },

      {

        "id": "css-a-3",

        "title": "Lesson 3 - Advanced Grid Layout",

        "text": "Grid areas allow you to name sections of a layout and position elements easily. This helps create complex page layouts in a readable way.",

        "code": ".container {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'main sidebar';\n}",

        "language": "css",

        "callout": "You can assign elements using grid-area property.",

        "tryIt": ".container {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'main sidebar';\n}",

        "expectedOutput": null

      },

      {

        "id": "css-a-4",

        "title": "Lesson 4 - Advanced Flexbox",

        "text": "Advanced Flexbox properties like flex-grow, flex-shrink, and flex-basis help control how elements resize and distribute space inside a container.",

        "code": ".item {\n  flex-grow: 1;\n}",

        "language": "css",

        "callout": "This allows the item to grow and fill available space equally with other items.",

        "tryIt": ".item {\n  flex-grow: 1;\n}",

        "expectedOutput": null

      },

      {

        "id": "css-a-5",

        "title": "Lesson 5 - CSS Architecture (BEM)",

        "text": "BEM (Block Element Modifier) is a naming convention used to organize CSS code. It makes styles more readable and reusable in large projects.",

        "code": ".button {}\n.button__text {}\n.button--primary {}",

        "language": "css",

        "callout": "Block = main component, Element = part, Modifier = variation.",

        "tryIt": ".button {}\n.button__text {}\n.button--primary {}",

        "expectedOutput": null

      },

      {

        "id": "css-a-6",

        "title": "Lesson 6 - Dark Mode Design",

        "text": "Dark mode changes the color scheme of a website to darker tones. It improves readability in low-light environments and reduces eye strain.",

        "code": "@media (prefers-color-scheme: dark) {\n  body {\n    background: black;\n    color: white;\n  }\n}",

        "language": "css",

        "callout": "This automatically applies dark theme based on user preference.",

        "tryIt": "@media (prefers-color-scheme: dark) {\n  body {\n    background: black;\n    color: white;\n  }\n}",

        "expectedOutput": null

      },

      {

        "id": "css-a-7",

        "title": "Lesson 7 - CSS Performance Optimization",

        "text": "Optimizing CSS improves page load speed and performance. Clean and efficient CSS reduces file size and improves user experience.",

        "code": "Use external CSS files and avoid inline styles.\nMinify CSS by removing spaces and comments.\nCombine multiple CSS files into one.",

        "language": "css",

        "callout": "Use external CSS files and avoid inline styles. Minify CSS by removing spaces and comments. Combine multiple CSS files into one.",

        "tryIt": "Use external CSS files and avoid inline styles.\nMinify CSS by removing spaces and comments.\nCombine multiple CSS files into one.",

        "expectedOutput": null

      },

      {

        "id": "css-a-8",

        "title": "Lesson 8 - Cross Browser Compatibility",

        "text": "Different browsers may render CSS differently. Ensuring compatibility helps your website work consistently across all browsers.",

        "code": "Use vendor prefixes:\n-webkit-, -moz-\n\nExample:\n-webkit-border-radius: 10px;\nborder-radius: 10px;",

        "language": "css",

        "callout": "Why Compatibility Matters? - Best Practices module.",

        "tryIt": "Use vendor prefixes:\n-webkit-, -moz-\n\nExample:\n-webkit-border-radius: 10px;\nborder-radius: 10px;",

        "expectedOutput": null

      },

      {

        "id": "css-a-9",

        "title": "Lesson 9 - Introduction to Tailwind CSS",

        "text": "Tailwind CSS is a utility-first CSS framework that provides ready-to-use classes for styling. It speeds up development and reduces custom CSS writing.",

        "code": "<div class='bg-blue-500 text-white p-4'>Hello</div>",

        "language": "css",

        "callout": "This applies background color, text color, and padding using utility classes.",

        "tryIt": "<div class='bg-blue-500 text-white p-4'>Hello</div>",

        "expectedOutput": null

      },

      {

        "id": "css-a-10",

        "title": "Lesson 10 - Project: Build Responsive Website",

        "text": "Create a layout using header, main, and footer sections. Use Flexbox or Grid for layout and apply proper spacing and colors.",

        "code": "Use media queries and flexible units to make the website responsive on mobile, tablet, and desktop screens.",

        "language": "css",

        "callout": "Use media queries and flexible units to make the website responsive on mobile, tablet, and desktop screens.",

        "tryIt": "Use media queries and flexible units to make the website responsive on mobile, tablet, and desktop screens.",

        "expectedOutput": null

      }

    ]

  },

  "javascript": {

    "beginner": [

      {

        "id": "js-b-1",

        "title": "Lesson 1 - Intro to JS",

        "text": "JavaScript is the programming language of the Web. It can update and change both HTML and CSS.",

        "code": "console.log('Hello, JavaScript!');",

        "language": "javascript",

        "callout": "Use console.log() to print messages.",

        "tryIt": "console.log('Hello, JavaScript!');",

        "expectedOutput": null

      },

      {

        "id": "js-b-2",

        "title": "Lesson 2 - Variables",

        "text": "Variables store data. Use 'let' for variables that change, and 'const' for ones that don't.",

        "code": "let name = 'Alice';\nconst age = 25;\nconsole.log(name, age);",

        "language": "javascript",

        "callout": "Variables store data.",

        "tryIt": "let name = 'Alice';\nconst age = 25;\nconsole.log(name, age);",

        "expectedOutput": null

      },

      {

        "id": "js-b-3",

        "title": "Lesson 3 - Data Types",

        "text": "JS has Strings, Numbers, Booleans, Null, Undefined, and Objects.",

        "code": "let s = 'Hello';\nlet n = 42;\nlet b = true;\nconsole.log(typeof s, typeof n, typeof b);",

        "language": "javascript",

        "callout": "Type detection using typeof.",

        "tryIt": "let s = 'Hello';\nlet n = 42;\nlet b = true;\nconsole.log(typeof s, typeof n, typeof b);",

        "expectedOutput": null

      },

      {

        "id": "js-b-4",

        "title": "Lesson 4 - Operators",

        "text": "Operators allow math, comparisons, and logic.",

        "code": "let x = 10 + 5;\nlet y = 10 > 5;\nconsole.log(x, y);",

        "language": "javascript",

        "callout": "Arithmetic and comparisons.",

        "tryIt": "let x = 10 + 5;\nlet y = 10 > 5;\nconsole.log(x, y);",

        "expectedOutput": null

      },

      {

        "id": "js-b-5",

        "title": "Lesson 5 - Conditionals",

        "text": "Use if/else to execute code based on conditions.",

        "code": "let age = 18;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",

        "language": "javascript",

        "callout": "Decision making in code.",

        "tryIt": "let age = 18;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",

        "expectedOutput": null

      },

      {

        "id": "js-b-6",

        "title": "Lesson 6 - Functions",

        "text": "Functions are reusable blocks of code.",

        "code": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Alice'));",

        "language": "javascript",

        "callout": "Function definition and calling.",

        "tryIt": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Alice'));",

        "expectedOutput": null

      },

      {

        "id": "js-b-7",

        "title": "Lesson 7 - Arrow Functions",

        "text": "A shorter syntax for writing functions.",

        "code": "const add = (a, b) => a + b;\nconsole.log(add(5, 3));",

        "language": "javascript",

        "callout": "ES6 Arrow functions.",

        "tryIt": "const add = (a, b) => a + b;\nconsole.log(add(5, 3));",

        "expectedOutput": null

      },

      {

        "id": "js-b-8",

        "title": "Lesson 8 - Arrays",

        "text": "Arrays store lists of data.",

        "code": "let fruits = ['apple', 'banana'];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);",

        "language": "javascript",

        "callout": "Working with lists.",

        "tryIt": "let fruits = ['apple', 'banana'];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);",

        "expectedOutput": null

      },

      {

        "id": "js-b-9",

        "title": "Lesson 9 - Loops",

        "text": "Loops repeat code multiple times.",

        "code": "for (let i = 0; i < 3; i++) {\n  console.log('Iteration: ' + i);\n}",

        "language": "javascript",

        "callout": "For loops basics.",

        "tryIt": "for (let i = 0; i < 3; i++) {\n  console.log('Iteration: ' + i);\n}",

        "expectedOutput": null

      },

      {

        "id": "js-b-10",

        "title": "Lesson 10 - Objects",

        "text": "Objects store data in key-value pairs.",

        "code": "let person = { name: 'Bob', age: 30 };\nconsole.log(person.name);",

        "language": "javascript",

        "callout": "Storing structured data.",

        "tryIt": "let person = { name: 'Bob', age: 30 };\nconsole.log(person.name);",

        "expectedOutput": null

      }

    ],

    "intermediate": [

      {

        "id": "js-i-1",

        "title": "Lesson 1 - DOM Manipulation",

        "text": "The Document Object Model lets JS interact with HTML.",

        "code": "// Select element and change text\ndocument.getElementById('title').textContent = 'Updated!';",

        "language": "javascript",

        "callout": "Accessing the DOM.",

        "tryIt": "// Select element and change text\ndocument.getElementById('title').textContent = 'Updated!';",

        "expectedOutput": null

      },

      {

        "id": "js-i-2",

        "title": "Lesson 2 - Events",

        "text": "Events make webpages interactive.",

        "code": "const btn = document.getElementById('myBtn');\nbtn.onclick = () => console.log('Clicked!');",

        "language": "javascript",

        "callout": "Handling user interaction.",

        "tryIt": "const btn = document.getElementById('myBtn');\nbtn.onclick = () => console.log('Clicked!');",

        "expectedOutput": null

      },

      {

        "id": "js-i-3",

        "title": "Lesson 3 - Array Methods (Map)",

        "text": "Map creates a new array by transforming elements.",

        "code": "const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);",

        "language": "javascript",

        "callout": "Functional array processing.",

        "tryIt": "const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);",

        "expectedOutput": null

      },

      {

        "id": "js-i-4",

        "title": "Lesson 4 - Array Methods (Filter)",

        "text": "Filter keeps elements that meet a condition.",

        "code": "const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);",

        "language": "javascript",

        "callout": "Filtering data lists.",

        "tryIt": "const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);",

        "expectedOutput": null

      },

      {

        "id": "js-i-5",

        "title": "Lesson 5 - Template Literals",

        "text": "Embed variables directly in strings.",

        "code": "let name = 'Alice';\nconsole.log(`Hello, ${name}!`);",

        "language": "javascript",

        "callout": "Modern string interpolation.",

        "tryIt": "let name = 'Alice';\nconsole.log(`Hello, ${name}!`);",

        "expectedOutput": null

      },

      {

        "id": "js-i-6",

        "title": "Lesson 6 - Destructuring",

        "text": "Unpack values from arrays or objects.",

        "code": "const user = { n: 'Alice', a: 25 };\nconst { n, a } = user;\nconsole.log(n, a);",

        "language": "javascript",

        "callout": "Clean variable assignment.",

        "tryIt": "const user = { n: 'Alice', a: 25 };\nconst { n, a } = user;\nconsole.log(n, a);",

        "expectedOutput": null

      },

      {

        "id": "js-i-7",

        "title": "Lesson 7 - Spread & Rest",

        "text": "Spread (...) expands elements; Rest collects them.",

        "code": "const arr = [1, 2];\nconst combined = [...arr, 3, 4];\nconsole.log(combined);",

        "language": "javascript",

        "callout": "Powerful element handling.",

        "tryIt": "const arr = [1, 2];\nconst combined = [...arr, 3, 4];\nconsole.log(combined);",

        "expectedOutput": null

      },

      {

        "id": "js-i-8",

        "title": "Lesson 8 - Error Handling",

        "text": "Use try/catch to prevent crashes.",

        "code": "try {\n  nonExistentFunction();\n} catch (e) {\n  console.log('Error: ' + e.message);\n}",

        "language": "javascript",

        "callout": "Safe code execution.",

        "tryIt": "try {\n  nonExistentFunction();\n} catch (e) {\n  console.log('Error: ' + e.message);\n}",

        "expectedOutput": null

      },

      {

        "id": "js-i-9",

        "title": "Lesson 9 - SetTimeout",

        "text": "Run code after a delay.",

        "code": "console.log('Wait...');\nsetTimeout(() => console.log('Done!'), 1000);",

        "language": "javascript",

        "callout": "Basic async behavior.",

        "tryIt": "console.log('Wait...');\nsetTimeout(() => console.log('Done!'), 1000);",

        "expectedOutput": null

      },

      {

        "id": "js-i-10",

        "title": "Lesson 10 - Modules (Intro)",

        "text": "Break code into multiple files.",

        "code": "// export const PI = 3.14;\n// import { PI } from './math.js';",

        "language": "javascript",

        "callout": "Code organization.",

        "tryIt": "// export const PI = 3.14;\n// import { PI } from './math.js';",

        "expectedOutput": null

      }

    ],

    "advanced": [

      {

        "id": "js-a-1",

        "title": "Lesson 1 - Promises",

        "text": "Promises handle future values.",

        "code": "const p = new Promise(resolve => resolve('Success!'));\np.then(val => console.log(val));",

        "language": "javascript",

        "callout": "Asynchronous foundations.",

        "tryIt": "const p = new Promise(resolve => resolve('Success!'));\np.then(val => console.log(val));",

        "expectedOutput": null

      },

      {

        "id": "js-a-2",

        "title": "Lesson 2 - Async/Await",

        "text": "Write async code that looks synchronous.",

        "code": "async function test() {\n  const val = await Promise.resolve('Async Done!');\n  console.log(val);\n}\ntest();",

        "language": "javascript",

        "callout": "Clean async syntax.",

        "tryIt": "async function test() {\n  const val = await Promise.resolve('Async Done!');\n  console.log(val);\n}\ntest();",

        "expectedOutput": null

      },

      {

        "id": "js-a-3",

        "title": "Lesson 3 - Fetch API",

        "text": "Get data from servers.",

        "code": "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(r => r.json())\n  .then(data => console.log(data.title));",

        "language": "javascript",

        "callout": "Web networking.",

        "tryIt": "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(r => r.json())\n  .then(data => console.log(data.title));",

        "expectedOutput": null

      },

      {

        "id": "js-a-4",

        "title": "Lesson 4 - Classes",

        "text": "Blueprint for creating objects.",

        "code": "class User {\n  constructor(name) { this.name = name; }\n  hello() { console.log('Hi ' + this.name); }\n}\nnew User('Alice').hello();",

        "language": "javascript",

        "callout": "OOP in JavaScript.",

        "tryIt": "class User {\n  constructor(name) { this.name = name; }\n  hello() { console.log('Hi ' + this.name); }\n}\nnew User('Alice').hello();",

        "expectedOutput": null

      },

      {

        "id": "js-a-5",

        "title": "Lesson 5 - Inheritance",

        "text": "Extend classes to reuse logic.",

        "code": "class Animal { speak() { console.log('Noise'); } }\nclass Dog extends Animal { speak() { console.log('Woof'); } }\nnew Dog().speak();",

        "language": "javascript",

        "callout": "Class hierarchies.",

        "tryIt": "class Animal { speak() { console.log('Noise'); } }\nclass Dog extends Animal { speak() { console.log('Woof'); } }\nnew Dog().speak();",

        "expectedOutput": null

      },

      {

        "id": "js-a-6",

        "title": "Lesson 6 - Closures",

        "text": "Functions that remember their environment.",

        "code": "function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c(), c());",

        "language": "javascript",

        "callout": "Advanced scope concept.",

        "tryIt": "function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c(), c());",

        "expectedOutput": null

      },

      {

        "id": "js-a-7",

        "title": "Lesson 7 - This Keyword",

        "text": "The context of function execution.",

        "code": "const obj = {\n  val: 42,\n  show: function() { console.log(this.val); }\n};\nobj.show();",

        "language": "javascript",

        "callout": "Execution context.",

        "tryIt": "const obj = {\n  val: 42,\n  show: function() { console.log(this.val); }\n};\nobj.show();",

        "expectedOutput": null

      },

      {

        "id": "js-a-8",

        "title": "Lesson 8 - Prototypes",

        "text": "The underlying mechanism of JS objects.",

        "code": "const animal = { eats: true };\nconst rabbit = Object.create(animal);\nconsole.log(rabbit.eats);",

        "language": "javascript",

        "callout": "Prototypal inheritance.",

        "tryIt": "const animal = { eats: true };\nconst rabbit = Object.create(animal);\nconsole.log(rabbit.eats);",

        "expectedOutput": null

      },

      {

        "id": "js-a-9",

        "title": "Lesson 9 - Event Loop",

        "text": "How JS handles concurrency.",

        "code": "console.log('Start');\nsetTimeout(() => console.log('Timer'), 0);\nconsole.log('End');",

        "language": "javascript",

        "callout": "Execution order.",

        "tryIt": "console.log('Start');\nsetTimeout(() => console.log('Timer'), 0);\nconsole.log('End');",

        "expectedOutput": null

      },

      {

        "id": "js-a-10",

        "title": "Lesson 10 - Project: App Logic",

        "text": "Combine concepts to build logic.",

        "code": "const state = { count: 0 };\nconst update = () => {\n  state.count++;\n  console.log('Count: ' + state.count);\n};\nupdate(); update();",

        "language": "javascript",

        "callout": "State management basics.",

        "tryIt": "const state = { count: 0 };\nconst update = () => {\n  state.count++;\n  console.log('Count: ' + state.count);\n};\nupdate(); update();",

        "expectedOutput": null

      }

    ]

  }
};