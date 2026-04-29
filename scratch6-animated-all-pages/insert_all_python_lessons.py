"""
Script to insert all Python lessons (beginner, intermediate, advanced) into MongoDB.
Lessons are organized by level in a single file for clarity and maintainability.
"""
import json
from pymongo import MongoClient

python_lessons = {
  "beginner": [
    {
      "language": "python",
      "level": "beginner",
      "title": "Introduction to Python",
      "module": "Basics",
      "topics": [
        {
          "title": "What is Python?",
          "content": "Python is a high-level, easy-to-learn programming language used for web development, data science, automation, and more. It has simple syntax, which makes it beginner-friendly and widely popular."
        },
        {
          "title": "Basic Example",
          "content": "Example:\nprint('Hello World')\n\nThis code prints 'Hello World' on the screen. The print() function is used to display output in Python."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Variables",
      "module": "Basics",
      "topics": [
        {
          "title": "What are Variables?",
          "content": "Variables are used to store data values in a program. In Python, you do not need to declare the type of a variable explicitly."
        },
        {
          "title": "Example",
          "content": "x = 10\ny = 'Hello'\n\nprint(x)\nprint(y)\n\nHere, x stores a number and y stores a string. Python automatically detects the type."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Data Types",
      "module": "Basics",
      "topics": [
        {
          "title": "Types of Data",
          "content": "Python has different data types such as int (numbers), float (decimal numbers), str (text), and bool (True/False)."
        },
        {
          "title": "Example",
          "content": "x = 5\nprint(type(x))\n\nThis will output <class 'int'> showing that x is an integer."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Input and Output",
      "module": "Basics",
      "topics": [
        {
          "title": "Taking Input",
          "content": "The input() function is used to take user input from the keyboard. It always returns data as a string."
        },
        {
          "title": "Example",
          "content": "name = input('Enter your name: ')\nprint('Hello', name)\n\nThis takes input from user and prints a greeting message."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Operators",
      "module": "Basics",
      "topics": [
        {
          "title": "Types of Operators",
          "content": "Python supports arithmetic (+, -, *, /), comparison (==, !=), and logical (and, or, not) operators."
        },
        {
          "title": "Example",
          "content": "x = 10\ny = 5\nprint(x + y)\nprint(x > y)\n\nThis performs addition and comparison operations."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Conditional Statements",
      "module": "Control Flow",
      "topics": [
        {
          "title": "What is if-else?",
          "content": "Conditional statements are used to make decisions in a program. Code runs based on whether a condition is true or false."
        },
        {
          "title": "Example",
          "content": "x = 10\nif x > 5:\n    print('Greater')\nelse:\n    print('Smaller')\n\nThis checks condition and executes code accordingly."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Loops",
      "module": "Control Flow",
      "topics": [
        {
          "title": "Types of Loops",
          "content": "Loops are used to repeat a block of code. Python has for loops and while loops."
        },
        {
          "title": "Example",
          "content": "for i in range(5):\n    print(i)\n\nThis prints numbers from 0 to 4."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Functions",
      "module": "Functions",
      "topics": [
        {
          "title": "What are Functions?",
          "content": "Functions are reusable blocks of code that perform a specific task. They help in organizing code and avoiding repetition."
        },
        {
          "title": "Example",
          "content": "def greet():\n    print('Hello')\n\ngreet()\n\nThis defines and calls a function."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Lists",
      "module": "Data Structures",
      "topics": [
        {
          "title": "What is a List?",
          "content": "A list is a collection of items stored in a single variable. Lists are ordered and changeable."
        },
        {
          "title": "Example",
          "content": "nums = [1, 2, 3]\nprint(nums[0])\n\nThis prints the first element of the list."
        }
      ]
    },
    {
      "language": "python",
      "level": "beginner",
      "title": "Tuples and Sets",
      "module": "Data Structures",
      "topics": [
        {
          "title": "Tuples vs Sets",
          "content": "Tuples are ordered and cannot be changed. Sets are unordered and do not allow duplicate values."
        },
        {
          "title": "Example",
          "content": "t = (1,2,3)\ns = {1,2,2,3}\nprint(s)\n\nThis removes duplicate values in set."
        }
      ]
    }
  ],
  "intermediate": [
    {
      "language": "python",
      "level": "intermediate",
      "title": "Dictionaries",
      "module": "Data Structures",
      "topics": [
        {
          "title": "What is a Dictionary?",
          "content": "A dictionary stores data in key-value pairs. It is useful when you want to associate values with unique keys. Dictionaries are unordered and mutable."
        },
        {
          "title": "Example",
          "content": "student = {'name': 'John', 'age': 20}\nprint(student['name'])\n\nThis retrieves the value associated with the key 'name'."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "String Handling",
      "module": "Data Types",
      "topics": [
        {
          "title": "String Operations",
          "content": "Strings are sequences of characters. Python provides many methods like upper(), lower(), replace(), and slicing for string manipulation."
        },
        {
          "title": "Example",
          "content": "text = 'hello'\nprint(text.upper())\n\nThis converts the string to uppercase."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "File Handling",
      "module": "IO Operations",
      "topics": [
        {
          "title": "Reading Files",
          "content": "File handling allows you to read data from files stored on your system. This is useful for working with large datasets."
        },
        {
          "title": "Example",
          "content": "f = open('file.txt', 'r')\nprint(f.read())\nf.close()\n\nThis reads the content of a file."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Exception Handling",
      "module": "Error Handling",
      "topics": [
        {
          "title": "What is Exception Handling?",
          "content": "Exception handling is used to handle runtime errors so that the program does not crash. It improves program stability."
        },
        {
          "title": "Example",
          "content": "try:\n    x = 10 / 0\nexcept:\n    print('Error occurred')\n\nThis catches division by zero error."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Modules and Packages",
      "module": "Advanced Basics",
      "topics": [
        {
          "title": "What are Modules?",
          "content": "Modules are files containing Python code that can be reused. Packages are collections of modules."
        },
        {
          "title": "Example",
          "content": "import math\nprint(math.sqrt(16))\n\nThis imports math module and uses sqrt function."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Object-Oriented Programming",
      "module": "OOP",
      "topics": [
        {
          "title": "What is OOP?",
          "content": "OOP is a programming approach based on objects and classes. It helps organize code and model real-world entities."
        },
        {
          "title": "Example",
          "content": "class Person:\n    pass\n\nThis creates a simple class."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Classes and Objects",
      "module": "OOP",
      "topics": [
        {
          "title": "Classes and Objects",
          "content": "A class is a blueprint for creating objects. Objects are instances of a class with properties and methods."
        },
        {
          "title": "Example",
          "content": "class Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person('John')\nprint(p.name)\n\nThis creates an object with a name."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Inheritance",
      "module": "OOP",
      "topics": [
        {
          "title": "What is Inheritance?",
          "content": "Inheritance allows one class to inherit properties and methods from another class. It promotes code reuse."
        },
        {
          "title": "Example",
          "content": "class A:\n    def show(self):\n        print('Hello')\n\nclass B(A):\n    pass\n\nb = B()\nb.show()\n\nClass B inherits method from class A."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "Lambda Functions",
      "module": "Functions",
      "topics": [
        {
          "title": "What is Lambda?",
          "content": "Lambda functions are small anonymous functions defined using lambda keyword. They are used for short operations."
        },
        {
          "title": "Example",
          "content": "add = lambda x, y: x + y\nprint(add(2,3))\n\nThis returns the sum of two numbers."
        }
      ]
    },
    {
      "language": "python",
      "level": "intermediate",
      "title": "List Comprehension",
      "module": "Data Structures",
      "topics": [
        {
          "title": "What is List Comprehension?",
          "content": "List comprehension provides a concise way to create lists. It makes code shorter and more readable."
        },
        {
          "title": "Example",
          "content": "nums = [x for x in range(5)]\nprint(nums)\n\nThis creates a list from 0 to 4."
        }
      ]
    }
  ],
  "advanced": [
    {
      "language": "python",
      "level": "advanced",
      "title": "Decorators",
      "module": "Advanced Concepts",
      "topics": [
        {
          "title": "What are Decorators?",
          "content": "Decorators are functions that modify the behavior of other functions without changing their code. They are useful for adding functionality like logging, authentication, or timing."
        },
        {
          "title": "Example",
          "content": "def my_decorator(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello')\n\nsay_hello()\n\nThis adds extra behavior before and after the function call."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Generators",
      "module": "Advanced Concepts",
      "topics": [
        {
          "title": "What are Generators?",
          "content": "Generators are functions that return values one at a time using the yield keyword. They are memory efficient because they generate values on the fly."
        },
        {
          "title": "Example",
          "content": "def count():\n    for i in range(3):\n        yield i\n\nfor num in count():\n    print(num)\n\nThis generates numbers one by one instead of storing them in memory."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Multithreading",
      "module": "Concurrency",
      "topics": [
        {
          "title": "What is Multithreading?",
          "content": "Multithreading allows multiple threads to run concurrently, improving performance for tasks like downloading files or handling multiple users."
        },
        {
          "title": "Example",
          "content": "import threading\n\ndef task():\n    print('Running thread')\n\nthread = threading.Thread(target=task)\nthread.start()\n\nThis runs a function in a separate thread."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Working with APIs",
      "module": "Web",
      "topics": [
        {
          "title": "What is an API?",
          "content": "An API allows communication between applications. In Python, APIs are used to fetch data from external services like weather or social media."
        },
        {
          "title": "Example",
          "content": "import requests\nresponse = requests.get('https://api.example.com')\nprint(response.json())\n\nThis fetches data from an API."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Database Connection",
      "module": "Database",
      "topics": [
        {
          "title": "Connecting to Database",
          "content": "Python can connect to databases like MongoDB or MySQL to store and retrieve data. This is important for real-world applications."
        },
        {
          "title": "Example",
          "content": "from pymongo import MongoClient\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['test']\n\nThis connects Python to MongoDB."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Virtual Environments",
      "module": "Environment",
      "topics": [
        {
          "title": "What is Virtual Environment?",
          "content": "A virtual environment is used to create isolated Python environments. It helps manage dependencies separately for different projects."
        },
        {
          "title": "Example",
          "content": "python -m venv myenv\nsource myenv/bin/activate\n\nThis creates and activates a virtual environment."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Testing with Pytest",
      "module": "Testing",
      "topics": [
        {
          "title": "Why Testing?",
          "content": "Testing ensures that your code works correctly and helps detect bugs early. Pytest is a popular testing framework in Python."
        },
        {
          "title": "Example",
          "content": "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2,3) == 5\n\nThis checks if the function returns correct result."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Performance Optimization",
      "module": "Optimization",
      "topics": [
        {
          "title": "Improving Performance",
          "content": "Optimizing code improves speed and efficiency. Techniques include using efficient data structures and avoiding unnecessary loops."
        },
        {
          "title": "Example",
          "content": "Use list comprehension instead of loops:\n[x for x in range(10)]\n\nThis is faster and more readable."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Asynchronous Programming",
      "module": "Concurrency",
      "topics": [
        {
          "title": "What is Async?",
          "content": "Asynchronous programming allows tasks to run without blocking the program. It is useful for I/O operations like API calls."
        },
        {
          "title": "Example",
          "content": "import asyncio\n\nasync def main():\n    print('Hello')\n\nasyncio.run(main())\n\nThis runs an async function."
        }
      ]
    },
    {
      "language": "python",
      "level": "advanced",
      "title": "Project: CLI Application",
      "module": "Project",
      "topics": [
        {
          "title": "What is CLI App?",
          "content": "A CLI (Command Line Interface) application allows users to interact with a program using text commands."
        },
        {
          "title": "Example",
          "content": "name = input('Enter name: ')\nprint('Hello', name)\n\nThis creates a simple command-line program."
        }
      ]
    }
  ]
}

# Flatten all lessons into a single list
all_python_lessons = python_lessons["beginner"] + python_lessons["intermediate"] + python_lessons["advanced"]

# Save lessons to lessons.json
with open("lessons.json", "w", encoding="utf-8") as f:
    json.dump(all_python_lessons, f, indent=2)

# Connect to MongoDB
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client["learning_platform"]
collection = db["lessons"]

# Clear existing Python lessons and insert new ones
collection.delete_many({"language": "python"})
if all_python_lessons:
    collection.insert_many(all_python_lessons)

print("Inserted all Python lessons (beginner, intermediate, advanced) into MongoDB and saved to lessons.json.")
