"""
Script to insert all CSS lessons (beginner, intermediate, advanced) into MongoDB.
Lessons are organized by level in a single file for clarity and maintainability.
"""
import json
from pymongo import MongoClient

css_lessons = {
  "beginner": [
    {
      "language": "css",
      "level": "beginner",
      "title": "Introduction to CSS",
      "module": "Basics",
      "topics": [
        {
          "title": "What is CSS?",
          "content": "CSS (Cascading Style Sheets) is used to style and design web pages. While HTML is used to create structure, CSS controls how elements look such as colors, fonts, spacing, and layout. This separation makes websites easier to manage and maintain."
        },
        {
          "title": "Basic Example",
          "content": "Example:\np {\n  color: blue;\n}\n\nThis code selects all paragraph (<p>) elements and changes their text color to blue. CSS rules always have a selector and a declaration block."
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Types of CSS",
      "module": "Basics",
      "topics": [
        {
          "title": "Inline CSS",
          "content": "Inline CSS is applied directly inside an HTML element using the style attribute. It is useful for quick styling but not recommended for large projects.\n\nExample:\n<p style='color:red;'>Hello</p>"
        },
        {
          "title": "Internal and External CSS",
          "content": "Internal CSS is written inside <style> tag in the head section. External CSS is written in a separate .css file and linked using <link> tag. External CSS is best for large projects.\n\nExample:\n<link rel='stylesheet' href='style.css'>"
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Selectors",
      "module": "Basics",
      "topics": [
        {
          "title": "What are Selectors?",
          "content": "Selectors are used to target HTML elements that you want to style. They tell the browser which elements the CSS rules should apply to."
        },
        {
          "title": "Examples",
          "content": "Element selector:\np { color: red; }\n\nClass selector:\n.myClass { color: green; }\n\nID selector:\n#myId { color: blue; }\n\nClass can be reused, ID should be unique."
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Colors",
      "module": "Styling",
      "topics": [
        {
          "title": "Color Values",
          "content": "CSS supports different color formats like named colors, HEX, RGB.\n\nExample:\ncolor: red;\ncolor: #ff0000;\ncolor: rgb(255,0,0);"
        },
        {
          "title": "Background Color",
          "content": "You can set background color using background-color property.\n\nExample:\nbody {\n  background-color: lightblue;\n}\n\nThis sets the entire page background color."
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Background",
      "module": "Styling",
      "topics": [
        {
          "title": "Background Image",
          "content": "You can add images as background using background-image property.\n\nExample:\nbody {\n  background-image: url('image.jpg');\n}"
        },
        {
          "title": "Background Properties",
          "content": "You can control background behavior using properties like repeat, size, and position.\n\nExample:\nbackground-repeat: no-repeat;\nbackground-size: cover;"
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Borders",
      "module": "Box Model",
      "topics": [
        {
          "title": "Border Styles",
          "content": "Borders are used to create outlines around elements.\n\nExample:\ndiv {\n  border: 2px solid black;\n}\n\nThis creates a solid black border."
        },
        {
          "title": "Rounded Borders",
          "content": "You can create rounded corners using border-radius.\n\nExample:\nborder-radius: 10px;\n\nHigher value = more rounded corners."
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Margin and Padding",
      "module": "Box Model",
      "topics": [
        {
          "title": "Margin",
          "content": "Margin creates space outside an element. It controls distance between elements.\n\nExample:\nmargin: 20px;"
        },
        {
          "title": "Padding",
          "content": "Padding creates space inside the element, between content and border.\n\nExample:\npadding: 10px;\n\nThis makes content look less crowded."
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Text Styling",
      "module": "Typography",
      "topics": [
        {
          "title": "Text Alignment",
          "content": "You can align text using text-align property.\n\nExample:\ntext-align: center;\n\nThis centers the text."
        },
        {
          "title": "Text Decoration",
          "content": "Used to style text lines like underline or remove default styles.\n\nExample:\ntext-decoration: underline;\ntext-decoration: none;"
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Fonts",
      "module": "Typography",
      "topics": [
        {
          "title": "Font Family",
          "content": "Font family defines the style of text.\n\nExample:\nfont-family: Arial, sans-serif;\n\nFallback fonts ensure compatibility."
        },
        {
          "title": "Font Size and Weight",
          "content": "Font size controls text size and weight controls boldness.\n\nExample:\nfont-size: 16px;\nfont-weight: bold;"
        }
      ]
    },
    {
      "language": "css",
      "level": "beginner",
      "title": "Display Property",
      "module": "Layout",
      "topics": [
        {
          "title": "Display Types",
          "content": "Display property defines how elements behave.\n\nblock → full width\ninline → only content width\ninline-block → mix of both"
        },
        {
          "title": "Hide Elements",
          "content": "You can hide elements using display property.\n\nExample:\ndisplay: none;\n\nElement will not be visible or take space."
        }
      ]
    }
  ],
  "intermediate": [
      {
      "language": "css",
      "level": "intermediate",
      "title": "Position Property",
      "module": "Layout",
      "topics": [
        {
          "title": "Position Types",
          "content": "The position property defines how an element is placed on a webpage. Common values include static, relative, absolute, fixed, and sticky. These help control layout and overlapping of elements."
        },
        {
          "title": "Example",
          "content": "div {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}\n\nThis positions the element 20px from the top and 30px from the left of its nearest positioned ancestor."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Flexbox",
      "module": "Layout",
      "topics": [
        {
          "title": "What is Flexbox?",
          "content": "Flexbox is a layout model used to design flexible and responsive layouts. It allows easy alignment of elements horizontally and vertically within a container."
        },
        {
          "title": "Example",
          "content": ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nThis centers all items inside the container both horizontally and vertically."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Grid Layout",
      "module": "Layout",
      "topics": [
        {
          "title": "What is Grid?",
          "content": "CSS Grid is a two-dimensional layout system used to create complex layouts with rows and columns. It is more powerful than Flexbox for full-page designs."
        },
        {
          "title": "Example",
          "content": ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\nThis creates a two-column layout with spacing between items."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Responsive Design",
      "module": "Responsive",
      "topics": [
        {
          "title": "What is Responsive Design?",
          "content": "Responsive design ensures that a website looks good on all devices such as mobile, tablet, and desktop. It uses flexible layouts and units."
        },
        {
          "title": "Example",
          "content": "img {\n  max-width: 100%;\n  height: auto;\n}\n\nThis ensures images resize properly on smaller screens."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Media Queries",
      "module": "Responsive",
      "topics": [
        {
          "title": "What are Media Queries?",
          "content": "Media queries allow you to apply different styles based on screen size or device type. They are essential for building responsive websites."
        },
        {
          "title": "Example",
          "content": "@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}\n\nThis changes background color when screen width is 600px or less."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Pseudo Classes",
      "module": "Selectors",
      "topics": [
        {
          "title": "What are Pseudo Classes?",
          "content": "Pseudo classes define a special state of an element such as hover, focus, or active. They are used to add interactivity without JavaScript."
        },
        {
          "title": "Example",
          "content": "a:hover {\n  color: red;\n}\n\nThis changes link color when the user hovers over it."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Pseudo Elements",
      "module": "Selectors",
      "topics": [
        {
          "title": "What are Pseudo Elements?",
          "content": "Pseudo elements are used to style specific parts of an element, such as the first line or adding content before/after elements."
        },
        {
          "title": "Example",
          "content": "p::before {\n  content: 'Note: ';\n}\n\nThis adds text before every paragraph."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Z-index",
      "module": "Layout",
      "topics": [
        {
          "title": "What is Z-index?",
          "content": "Z-index controls the vertical stacking order of elements. Elements with higher values appear on top of others."
        },
        {
          "title": "Example",
          "content": "div {\n  position: absolute;\n  z-index: 10;\n}\n\nThis places the element above elements with lower z-index."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Overflow",
      "module": "Layout",
      "topics": [
        {
          "title": "Overflow Property",
          "content": "The overflow property controls what happens when content is too large for its container. It can be hidden, scrolled, or automatically handled."
        },
        {
          "title": "Example",
          "content": "div {\n  overflow: scroll;\n}\n\nThis adds scrollbars when content overflows."
        }
      ]
    },
    {
      "language": "css",
      "level": "intermediate",
      "title": "Transitions",
      "module": "Effects",
      "topics": [
        {
          "title": "What are Transitions?",
          "content": "CSS transitions allow smooth changes between styles over time. They improve user experience by making animations smooth."
        },
        {
          "title": "Example",
          "content": "div {\n  transition: background-color 0.5s ease;\n}\n\ndiv:hover {\n  background-color: red;\n}\n\nThis smoothly changes background color on hover."
        }
      ]
    }
  ],
  "advanced": [
    {
      "language": "css",
      "level": "advanced",
      "title": "CSS Animations",
      "module": "Effects",
      "topics": [
        {
          "title": "What are Animations?",
          "content": "CSS animations allow elements to gradually change from one style to another. Unlike transitions, animations can have multiple steps using keyframes and can run automatically."
        },
        {
          "title": "Example",
          "content": "@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\ndiv {\n  animation: fade 2s;\n}\n\nThis creates a fade-in effect over 2 seconds."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "CSS Variables",
      "module": "Advanced",
      "topics": [
        {
          "title": "What are Variables?",
          "content": "CSS variables (custom properties) allow you to store values like colors or sizes and reuse them throughout your stylesheet. This makes code easier to maintain."
        },
        {
          "title": "Example",
          "content": ":root {\n  --main-color: blue;\n}\n\ndiv {\n  color: var(--main-color);\n}\n\nYou define variables using -- and access them using var()."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Advanced Grid Layout",
      "module": "Layout",
      "topics": [
        {
          "title": "Grid Areas",
          "content": "Grid areas allow you to name sections of a layout and position elements easily. This helps create complex page layouts in a readable way."
        },
        {
          "title": "Example",
          "content": ".container {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'main sidebar';\n}\n\nYou can assign elements using grid-area property."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Advanced Flexbox",
      "module": "Layout",
      "topics": [
        {
          "title": "Flex Properties",
          "content": "Advanced Flexbox properties like flex-grow, flex-shrink, and flex-basis help control how elements resize and distribute space inside a container."
        },
        {
          "title": "Example",
          "content": ".item {\n  flex-grow: 1;\n}\n\nThis allows the item to grow and fill available space equally with other items."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "CSS Architecture (BEM)",
      "module": "Best Practices",
      "topics": [
        {
          "title": "What is BEM?",
          "content": "BEM (Block Element Modifier) is a naming convention used to organize CSS code. It makes styles more readable and reusable in large projects."
        },
        {
          "title": "Example",
          "content": ".button {}\n.button__text {}\n.button--primary {}\n\nBlock = main component, Element = part, Modifier = variation."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Dark Mode Design",
      "module": "Advanced",
      "topics": [
        {
          "title": "What is Dark Mode?",
          "content": "Dark mode changes the color scheme of a website to darker tones. It improves readability in low-light environments and reduces eye strain."
        },
        {
          "title": "Example",
          "content": "@media (prefers-color-scheme: dark) {\n  body {\n    background: black;\n    color: white;\n  }\n}\n\nThis automatically applies dark theme based on user preference."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "CSS Performance Optimization",
      "module": "Optimization",
      "topics": [
        {
          "title": "Why Optimize CSS?",
          "content": "Optimizing CSS improves page load speed and performance. Clean and efficient CSS reduces file size and improves user experience."
        },
        {
          "title": "Example",
          "content": "Use external CSS files and avoid inline styles.\nMinify CSS by removing spaces and comments.\nCombine multiple CSS files into one."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Cross Browser Compatibility",
      "module": "Best Practices",
      "topics": [
        {
          "title": "Why Compatibility Matters?",
          "content": "Different browsers may render CSS differently. Ensuring compatibility helps your website work consistently across all browsers."
        },
        {
          "title": "Example",
          "content": "Use vendor prefixes:\n-webkit-, -moz-\n\nExample:\n-webkit-border-radius: 10px;\nborder-radius: 10px;"
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Introduction to Tailwind CSS",
      "module": "Frameworks",
      "topics": [
        {
          "title": "What is Tailwind?",
          "content": "Tailwind CSS is a utility-first CSS framework that provides ready-to-use classes for styling. It speeds up development and reduces custom CSS writing."
        },
        {
          "title": "Example",
          "content": "<div class='bg-blue-500 text-white p-4'>Hello</div>\n\nThis applies background color, text color, and padding using utility classes."
        }
      ]
    },
    {
      "language": "css",
      "level": "advanced",
      "title": "Project: Build Responsive Website",
      "module": "Project",
      "topics": [
        {
          "title": "Project Structure",
          "content": "Create a layout using header, main, and footer sections. Use Flexbox or Grid for layout and apply proper spacing and colors."
        },
        {
          "title": "Responsiveness",
          "content": "Use media queries and flexible units to make the website responsive on mobile, tablet, and desktop screens."
        }
      ]
    }
  ]
}

# Flatten all lessons into a single list
all_css_lessons = css_lessons["beginner"] + css_lessons["intermediate"] + css_lessons["advanced"]

# Save lessons to lessons.json
with open("lessons.json", "w", encoding="utf-8") as f:
  json.dump(all_css_lessons, f, indent=2)

# Connect to MongoDB
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client["learning_platform"]
collection = db["lessons"]

# Clear existing CSS lessons and insert new ones
collection.delete_many({"language": "css"})
if all_css_lessons:
  collection.insert_many(all_css_lessons)

print("Inserted all CSS lessons (beginner, intermediate, advanced) into MongoDB and saved to lessons.json.")
