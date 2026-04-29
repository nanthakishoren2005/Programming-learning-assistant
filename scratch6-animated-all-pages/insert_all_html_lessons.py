"""
Script to insert all HTML lessons (beginner, intermediate, advanced) into MongoDB.
Lessons are organized by level in a single file for clarity and maintainability.
"""
import json
from pymongo import MongoClient

html_lessons = {
    "beginner": [
        # ...existing 10 beginner lessons...
    ],
    "intermediate": [
        # ...existing 10 intermediate lessons...
    ],
    "advanced": [
        # ...existing 10 advanced lessons...
    ]
}

# --- Insert the actual lessons below ---

html_lessons["beginner"] = [
  {
    "language": "html",
    "level": "beginner",
    "title": "Introduction to HTML",
    "module": "Basics",
    "topics": [
      {"title": "What is HTML?", "content": "HTML (HyperText Markup Language) is used to structure content on the web using elements called tags."},
      {"title": "How Browsers Use HTML", "content": "Browsers read HTML files and render them into visual web pages."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "HTML Document Structure",
    "module": "Basics",
    "topics": [
      {"title": "Basic Structure", "content": "Every HTML document starts with <!DOCTYPE html> followed by html, head, and body tags."},
      {"title": "Head vs Body", "content": "Head contains metadata, body contains visible content."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Headings and Paragraphs",
    "module": "Text",
    "topics": [
      {"title": "Headings", "content": "HTML provides <h1> to <h6> tags for headings."},
      {"title": "Paragraph", "content": "<p> tag is used to define text paragraphs."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Text Formatting",
    "module": "Text",
    "topics": [
      {"title": "Bold and Italic", "content": "<b> and <i> tags are used for styling text."},
      {"title": "Semantic Tags", "content": "<strong> and <em> provide meaning along with style."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Links",
    "module": "Elements",
    "topics": [
      {"title": "Anchor Tag", "content": "<a href='url'>Link</a> is used to create hyperlinks."},
      {"title": "Target Attribute", "content": "target='_blank' opens link in new tab."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Images",
    "module": "Elements",
    "topics": [
      {"title": "Image Tag", "content": "<img src='image.jpg' alt='desc'> is used to display images."},
      {"title": "Alt Attribute", "content": "Provides alternate text for accessibility."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Lists",
    "module": "Elements",
    "topics": [
      {"title": "Ordered List", "content": "<ol> creates numbered lists."},
      {"title": "Unordered List", "content": "<ul> creates bullet lists."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Tables",
    "module": "Elements",
    "topics": [
      {"title": "Table Structure", "content": "<table>, <tr>, <td> define tables."},
      {"title": "Headers", "content": "<th> defines header cells."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Forms",
    "module": "Forms",
    "topics": [
      {"title": "Form Tag", "content": "<form> is used to collect user input."},
      {"title": "Input Types", "content": "text, password, email are common input types."}
    ]
  },
  {
    "language": "html",
    "level": "beginner",
    "title": "Semantic HTML",
    "module": "Structure",
    "topics": [
      {"title": "Semantic Tags", "content": "<header>, <footer>, <article> improve readability."},
      {"title": "Benefits", "content": "Improves SEO and accessibility."}
    ]
  }
]

html_lessons["intermediate"] = [
  {"language": "html", "level": "intermediate", "title": "Advanced Forms", "module": "Forms", "topics": [ {"title": "Input Types", "content": "HTML5 introduced input types like email, date, number.\nExample:\n<input type='email' placeholder='Enter email'>"}, {"title": "Form Validation", "content": "Use attributes like required, minlength.\nExample:\n<input type='text' required>"} ]},
  {"language": "html", "level": "intermediate", "title": "Audio and Video", "module": "Media", "topics": [ {"title": "Audio Tag", "content": "<audio controls>\n <source src='audio.mp3'>\n</audio>"}, {"title": "Video Tag", "content": "<video controls width='300'>\n <source src='video.mp4'>\n</video>"} ]},
  {"language": "html", "level": "intermediate", "title": "Iframes", "module": "Embedding", "topics": [ {"title": "What is iframe?", "content": "Used to embed another webpage.\nExample:\n<iframe src='https://example.com'></iframe>"}, {"title": "Attributes", "content": "width, height, title improve usability."} ]},
  {"language": "html", "level": "intermediate", "title": "Meta Tags", "module": "Head", "topics": [ {"title": "Viewport", "content": "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"}, {"title": "SEO Meta", "content": "<meta name='description' content='Learn HTML'>"} ]},
  {"language": "html", "level": "intermediate", "title": "Block vs Inline", "module": "Layout", "topics": [ {"title": "Block Elements", "content": "Take full width.\nExamples: div, p"}, {"title": "Inline Elements", "content": "Take only needed space.\nExamples: span, a"} ]},
  {"language": "html", "level": "intermediate", "title": "Div and Span", "module": "Layout", "topics": [ {"title": "Div", "content": "Used for block-level grouping.\nExample:\n<div>Content</div>"}, {"title": "Span", "content": "Used for inline grouping.\nExample:\n<span>Text</span>"} ]},
  {"language": "html", "level": "intermediate", "title": "HTML Entities", "module": "Text", "topics": [ {"title": "Special Characters", "content": "&lt; &gt; &amp; are HTML entities."}, {"title": "Usage", "content": "Used to display reserved symbols."} ]},
  {"language": "html", "level": "intermediate", "title": "Responsive Images", "module": "Media", "topics": [ {"title": "srcset", "content": "<img src='img.jpg' srcset='img-small.jpg 500w'>"}, {"title": "sizes", "content": "Defines image size for different screens."} ]},
  {"language": "html", "level": "intermediate", "title": "Data Attributes", "module": "Attributes", "topics": [ {"title": "Custom Data", "content": "Use data-* attributes.\nExample:\n<div data-id='123'></div>"}, {"title": "Access with JS", "content": "element.dataset.id"} ]},
  {"language": "html", "level": "intermediate", "title": "Accessibility Basics", "module": "Accessibility", "topics": [ {"title": "Alt Text", "content": "Helps screen readers.\nExample:\n<img alt='description'>"}, {"title": "ARIA Labels", "content": "Improves accessibility.\nExample:\n<button aria-label='Close'></button>"} ]}
]

html_lessons["advanced"] = [
  {"language": "html", "level": "advanced", "title": "Canvas API", "module": "Graphics", "topics": [ {"title": "Canvas Element", "content": "<canvas id='c'></canvas>"}, {"title": "Drawing", "content": "Use JavaScript to draw shapes."} ]},
  {"language": "html", "level": "advanced", "title": "SVG", "module": "Graphics", "topics": [ {"title": "SVG Basics", "content": "<svg width='100' height='100'><circle cx='50' cy='50' r='40'></circle></svg>"}, {"title": "Advantages", "content": "Scalable without losing quality."} ]},
  {"language": "html", "level": "advanced", "title": "Drag and Drop", "module": "APIs", "topics": [ {"title": "Draggable", "content": "<div draggable='true'>Drag me</div>"}, {"title": "Events", "content": "dragstart, dragover, drop"} ]},
  {"language": "html", "level": "advanced", "title": "Web Storage", "module": "APIs", "topics": [ {"title": "LocalStorage", "content": "localStorage.setItem('key','value')"}, {"title": "SessionStorage", "content": "Stores data for session only."} ]},
  {"language": "html", "level": "advanced", "title": "Geolocation", "module": "APIs", "topics": [ {"title": "Get Location", "content": "navigator.geolocation.getCurrentPosition()"}, {"title": "Usage", "content": "Used in maps and apps."} ]},
  {"language": "html", "level": "advanced", "title": "HTML Templates", "module": "Structure", "topics": [ {"title": "Template Tag", "content": "<template><p>Hidden content</p></template>"}, {"title": "Usage", "content": "Used with JavaScript for dynamic content."} ]},
  {"language": "html", "level": "advanced", "title": "Performance Optimization", "module": "Optimization", "topics": [ {"title": "Minimize HTML", "content": "Reduce unnecessary tags."}, {"title": "Lazy Loading", "content": "<img loading='lazy'>"} ]},
  {"language": "html", "level": "advanced", "title": "SEO Basics", "module": "SEO", "topics": [ {"title": "Meta Tags", "content": "Use proper title and description."}, {"title": "Semantic HTML", "content": "Improves ranking."} ]},
  {"language": "html", "level": "advanced", "title": "Best Practices", "module": "Optimization", "topics": [ {"title": "Clean Code", "content": "Use indentation and comments."}, {"title": "Validation", "content": "Use W3C validator."} ]},
  {"language": "html", "level": "advanced", "title": "Project: Build Webpage", "module": "Project", "topics": [ {"title": "Structure", "content": "Create header, main, footer layout."}, {"title": "Integration", "content": "Combine HTML with CSS and JS."} ]}
]

# Flatten all lessons into a single list
all_html_lessons = html_lessons["beginner"] + html_lessons["intermediate"] + html_lessons["advanced"]

# Save lessons to lessons.json
with open("lessons.json", "w", encoding="utf-8") as f:
    json.dump(all_html_lessons, f, indent=2)

# Connect to MongoDB
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client["learning_platform"]
collection = db["lessons"]

# Clear existing HTML lessons and insert new ones
collection.delete_many({"language": "html"})
collection.insert_many(all_html_lessons)

print("Inserted all HTML lessons (beginner, intermediate, advanced) into MongoDB and saved to lessons.json.")
 