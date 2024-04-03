# Application Description

The application presents a paginated table of tags from the StackOverflow API along with the number of associated posts (count field).

## Installation

To get started, follow these steps:

0. Clone the repo

   ```sh
   git clone https://github.com/Emkerix/stack-overflow-tag-explorer.git
   ```

1. Install dependencies:

   ```sh
   npm ci
   ```

2. Start the development server:

   ```sh
   npm start
   ```

   &ensp; The application will be running on `http://localhost:5173` by default.

3. Optionally, you can run Storybook to visualize and develop UI components:<br>

   ```sh
   npm run storybook
   ```

   &ensp; Storybook will be running on `http://localhost:6006` by default.

## API Limitations (Without Authentication)

- Maximum results per page: 100.
- Query limit per specific IP address: 300.
- Maximum number of pages to browse is 25, regardless of the configurable number of records per page.

## Features

- Paginated table of tags with the count of associated posts, utilizing MUI components.
- Configurable dynamic number of elements per page via a numeric field positioned above the table. The numeric input field is debounced to limit the frequency of API requests. Utilized Unstable_NumberInput component from MUI to prevent invalid input.
- A MUI element for sorting by the `name` tag.
- Utilized Redux library for state management, handling loading states and error conditions during data retrieval.
- Utilized Axios library for data fetching.

## Default Settings

- Default number of records per page: 10.
- Default sorting: ascending by tag name.

## Libraries

![Vite][Vite]
![React][React.js]
![TypeScript][TypeScript]
![Redux][Redux]
![ESLint][ESLint]
![Storybook][Storybook]
![Material UI][Material UI]
![Axios][Axios]
![Lodash][Lodash]

[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[ESLint]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[Storybook]: https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white
[Material UI]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[Axios]: https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white
[Lodash]: https://img.shields.io/badge/-3492FF?style=for-the-badge&logo=lodash&logoColor=white

## Screenshots
![Untitled](https://github.com/Emkerix/stack-overflow-tag-explorer/assets/92579344/e5702b14-3459-4ed8-9546-f93dc1a9767f)
![Screenshot 2024-04-01 at 23-02-17 TagTableHead - Docs ⋅ Storybook](https://github.com/Emkerix/stack-overflow-tag-explorer/assets/92579344/5a3b537c-34ed-44ea-8f96-4a57912a3535)


