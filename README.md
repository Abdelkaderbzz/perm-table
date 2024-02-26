# PermTable Component

Welcome to the PermTable component README! This document provides a comprehensive guide to understanding and utilizing the PermTable component within your React projects. PermTable is a powerful table interface designed for managing and displaying permission data in a structured format.

## Features

- **Dynamic Table Structure**: Customize table structures with dynamic entity and action props.
- **Permission Management**: Manage permissions effortlessly with intuitive checkbox controls.
- **Row Selection**: Select rows of permissions for efficient management.
- **Accessibility**:  Accessible design with ARIA roles for improved screen reader support.

## Dependencies

The `PermTable` component relies on the following dependencies:

- **Antd**:  `Utilizes Antd's CheckboxComponent for checkbox functionality`.
- **scss**:  `Styling powered by SCSS for enhanced customization`.
- **React**: Built with React for efficient component-based architecture.

## Installation

To use the `PermTable` component, ensure that you have the following dependencies installed in your project:

## Usage

To incorporate the `PermTable` component into your application, import it into your parent component and configure it with the required props. See the example below:
```js
import React from 'react';
import PermTable from 'perm-table';

const App = () => {
  const handleRbacChange = (permissions) => {
    console.log(permissions);
  };

  return (
    <PermTable
      actions={['create', 'update', 'get', 'delete']}
      roles={['user', 'role', 'post', 'comment']}
      onRbacChange={handleRbacChange}
      rowSelectAll={true}
      rowSelectAllLabel={'All'}
      specialChar={'_'}
    />
  );
};

export default App;
```

## Props

- actions: An array of strings representing available actions for entities.
- roles: An array of strings representing entities for permission management.
- rowSelectAll: Boolean indicating whether to include a row selection checkbox.
- rowSelectAllLabel: Label for the row selection checkbox.
- specialChar: Character used to separate action and role.
- onRbacChange: Callback function for handling permission changes.
- permissions: Array containing all permissions.

## Styling

Customize the appearance of PermTable using Antd's styling solutions and SCSS.

## Contributing

Contributions to the `perm-table` are welcome! Please ensure that your code adheres to the existing coding style and maintains test coverage.

## GitHub Repository

You can find the source code for the `PermTable` component on GitHub at [https://github.com/Abdelkaderbzz/perm-table](https://github.com/Abdelkaderbzz/perm-table).

## License

This project is licensed under the MIT License.