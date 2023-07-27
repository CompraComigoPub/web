# On2 React Project

This project has been generated using the On2 React template.

## Documentation

### Design

This space is reserved for links to the design of the project.

## Configuring

First of all, you need to configure your project.  
You need to do this only once.

```
# update the repo
git pull origin main

# install dependencies (in case there is any new dependency)
yarn --frozen-lockfile

# copy the .env.tpl file into .env file
# DO THIS ONLY IF YOU DO NOT HAVE A .env FILE YET IN THE ROOT DIRECTORY
# You can make changes to the .env file and variables created there will
# be passed along to the node service but will NOT be versioned by git.
echo "$(cat .env.tpl)" > .env
```

## Developing

There are currently **3 different ways** you can develop in this project:
You can start the server with a watch tool, or start storybook, or start them both with Docker. You decide.

### 1) Storybook

If you are working on isolated components, you need to run this command.
This uses the port `9009`.

```sh
yarn storybook
# or
npm run storybook
```

You can also use the `sb` alias:

```sh
yarn sb
# or
npm run sb
```

### 2) Watch

If you are **not** working on isolated components and want to test a combination of components on pages, run this command.  
This uses the port `3000`.

```sh
yarn dev
# or
npm run dev
```

### 3) Docker

If you want to use Docker to work on the project, you need to go in the root directory of the project and run:

```sh
docker-compose up
```

> This will start both `storybook` and `dev`.

## Testing

To test, you need to create a copy of the `.env` file, named as `.test.env`.  
Then you can run:

```sh
yarn test
# or
npm run test
```

## Building for production

To create a build/bundle to be published in a production environment, you need to create a copy of the `.env` file, named as `.production.env`.  
Then you can run:

```sh
yarn build
# or
npm run build
```

> Resulting files are in the `./build/` directory.

In order for routes to work properly, you should start the server:

```sh
npm start
# or
yarn start
```

## Tools

### Creating new components

You can execute the following command to create new components based on a boilerplate:

```sh
npm run creator
# or
yarn run creator
```

Then, follow the steps answering the questions.

### SVG To Icons

You can convert all .svg icons into react components automatically.  
To do so, you can run the command:

```sh
yarn creator:icons
# or
npm run creator:icons
```

This will grap all the .svg files from `/docs/icons` and generate them straight into your `src/components/icons/` directory.  
It will also add stories to it and auto import/export them all from this directory index.
