# React Custom Tree

[![npm version](https://img.shields.io/npm/v/react-custom-tree.svg)](https://www.npmjs.com/package/react-custom-tree)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A fully customizable, recursive tree component for React with support for custom parent and child components.

## ✨ Features

- 🎨 **Fully Customizable** - Bring your own components for parents and children
- 🔄 **Recursive Rendering** - Handles deeply nested tree structures
- ⚡ **Lightweight** - Minimal dependencies
- 🎯 **TypeScript Ready** - Written with modern React patterns
- 📦 **Easy to Use** - Simple API with sensible defaults
- 🎭 **Flexible Styling** - Control margins and layout
- 🔌 **Event Handling** - Built-in click handlers for child nodes

## 📦 Installation

```bash
npm install react-custom-tree
```

or

```bash
yarn add react-custom-tree
```

## 🚀 Quick Start

```jsx
import React from 'react';
import Tree from 'react-custom-tree';

const data = [
  {
    id: 1,
    name: 'Parent 1',
    child: [
      {
        id: 2,
        name: 'Child 1'
      },
      {
        id: 3,
        name: 'Child 2'
      }
    ]
  }
];

function App() {
  return (
    <Tree
      data={data}
      onChidClick={(child) => console.log('Clicked:', child)}
    />
  );
}

export default App;
```

## 📖 API Reference

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `data` | `Array` | `[]` | ✅ | Array of tree node objects |
| `onChidClick` | `Function` | `undefined` | ❌ | Callback fired when a child node is clicked |
| `childComponent` | `Component` | Built-in | ❌ | Custom component for rendering child nodes |
| `parentComponent` | `Component` | Built-in | ❌ | Custom component for rendering parent nodes |
| `isDefaultOpen` | `Boolean` | `false` | ❌ | Whether parent nodes are expanded by default |
| `noLeftMargin` | `Boolean` | `false` | ❌ | Remove left margin from tree nodes |

### Data Structure

Each node in the data array should follow this structure:

```javascript
{
  id: number | string,        // Unique identifier (required)
  name: string,               // Display name (required)
  child: Array,               // Array of child nodes (optional)
  // ... any other custom properties
}
```

## 💡 Examples

### Basic Usage

```jsx
import React from 'react';
import Tree from 'react-custom-tree';
import data from './data.json';

function BasicExample() {
  return (
    <Tree
      data={data}
      onChidClick={(child) => console.log(child)}
    />
  );
}
```

### Default Open State

```jsx
function DefaultOpenExample() {
  return (
    <Tree
      data={data}
      isDefaultOpen={true}
      onChidClick={(child) => console.log(child)}
    />
  );
}
```

### Custom Components

```jsx
import React from 'react';
import Tree from 'react-custom-tree';
import data from './data.json';

// Custom child component
const CustomChild = (props) => (
  <div className="custom-child">
    📄 {props.name}
  </div>
);

// Custom parent component
const CustomParent = (props) => (
  <div className="custom-parent">
    <span className="icon">
      {props.open ? '📂' : '📁'}
    </span>
    <span className="name">{props.name}</span>
  </div>
);

function CustomExample() {
  return (
    <Tree
      data={data}
      onChidClick={(child) => console.log(child)}
      parentComponent={CustomParent}
      childComponent={CustomChild}
    />
  );
}
```

### With Font Awesome Icons

```jsx
const CustomParent = (props) => (
  <div className="custom-parent">
    <span className="icon">
      {props.open ? (
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-caret-right" aria-hidden="true"></i>
      )}
    </span>
    {props.name}
  </div>
);

function FontAwesomeExample() {
  return (
    <Tree
      data={data}
      parentComponent={CustomParent}
      onChidClick={(child) => console.log(child)}
    />
  );
}
```

### Without Left Margin

```jsx
function NoMarginExample() {
  return (
    <Tree
      data={data}
      noLeftMargin={true}
      onChidClick={(child) => console.log(child)}
    />
  );
}
```

## 🎨 Styling

The component comes with minimal default styles. You can override them by targeting these CSS classes:

```css
.tree-margin-left-15 {
  margin-left: 15px;
}

.tree-parent-component {
  cursor: pointer;
  padding: 5px;
}

.tree-child-component {
  cursor: pointer;
  padding: 5px;
}
```

## 📝 Sample Data Structure

```json
[
  {
    "id": 1,
    "name": "Parent 1",
    "child": [
      {
        "id": 2,
        "name": "Parent 1.1",
        "child": [
          {
            "id": 3,
            "name": "Child 1"
          }
        ]
      },
      {
        "id": 4,
        "name": "Parent 1.2",
        "child": [
          {
            "id": 5,
            "name": "Child 2"
          },
          {
            "id": 6,
            "name": "Child 3"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Parent 2",
    "child": []
  }
]
```

## 🌐 Live Demo

Check out the [live demo](https://sojinantony01.github.io/react-custom-tree/) to see the component in action with various configurations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sojin Antony**

- GitHub: [@sojinantony01](https://github.com/sojinantony01)
- npm: [react-custom-tree](https://www.npmjs.com/package/react-custom-tree)

## 🙏 Acknowledgments

Special thanks to [Viswanath Lekshmanan](https://viswanathl.in/) for contributions and support.

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚙️ Requirements

- React >= 16.8.0 (hooks support required)
- React-DOM >= 16.8.0

**Note:** While the package works with React 16.8.0+, we recommend using React 18+ for optimal performance and latest features.

## 🔄 Changelog

### Version 2.0.0
- ✨ Modernized with React functional components and hooks
- 🔄 Maintained backward compatibility with React 16.8.0+
- 📚 Enhanced documentation with comprehensive examples
- 🎨 Improved demo with modern UI and more examples
- 🚀 Added GitHub Actions for automated deployment
- 🎯 Better TypeScript support and modern patterns

### Version 1.0.5
- Initial stable release
- Basic tree functionality
- Custom component support

---

Made with ❤️ by [Sojin Antony](https://github.com/sojinantony01)