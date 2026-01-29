import React from 'react';
import SimpleTree from './simple-tree';
import CustomTree from './custom-tree';
import CustomTreeTwo from './custom-tree-2';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <header className="app-header">
        <h1>React Custom Tree</h1>
        <p className="subtitle">A fully customizable tree component for React</p>
      </header>

      <section className="demo-section">
        <h2>Simple Usage</h2>
        <p className="description">Basic tree with default styling and collapse/expand functionality</p>
        <SimpleTree />
      </section>

      <section className="demo-section">
        <h2>Default Open</h2>
        <p className="description">Tree with all nodes expanded by default</p>
        <SimpleTree open />
      </section>

      <section className="demo-section">
        <h2>Custom Parent & Child Component 1</h2>
        <p className="description">Tree with custom styled components using Font Awesome icons</p>
        <CustomTree />
      </section>

      <section className="demo-section">
        <h2>Custom Parent & Child Component 2</h2>
        <p className="description">Advanced customization with margin control and code preview</p>
        <CustomTreeTwo />
      </section>

      <footer className="app-footer">
        <p>
          Made with ❤️ by{' '}
          <a href="https://github.com/sojinantony01" target="_blank" rel="noopener noreferrer">
            Sojin Antony
          </a>
        </p>
        <p>
          <a href="https://github.com/sojinantony01/react-custom-tree" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          {' | '}
          <a href="https://www.npmjs.com/package/react-custom-tree" target="_blank" rel="noopener noreferrer">
            View on NPM
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

