# Build a Full-stack App with Next.js, Tailwind, Radix UI, and Prisma

## 1. Create a New project:
***Using npx create-next-app***
## 2. Build the NavBar :
  1. Using React Components snippets Like ***rfce*** and ***rafce***
  2. Using <b>ul>li*2</b>
  3. Using Tailwind CSS and [React Icons](https://react-icons.github.io/react-icons/)
   ***NB: In VS-code, if we want to find all occurrence of the currently selected word, we can just hit Ctrl+D command***
## 3. Style the active link in the NavBar 
  ***Active link*** <br/>
  1. First Method:

```
  {`${link.href === currentPath ? "text-zinc-900" : "text-zinc-500" hover:text-zinc-800 transition-colors`}
```
  2. Second method with classnames Lib:
   
```
   npm i classnames@2.3.2 
```  
```
        className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true, 
              })}
```  
## Setting Up MySQL And Prisma 
1. Install prisma
```
npm i prisma@5.3.1
```
2. Initialize prisma in this project
```
npx prisma init
```
## Creating the Issue Model 
1. After create prisma schema to format it write: 
```
npx prisma format
```
2. In a development environment, use the migrate dev command to generate and apply migrations:
```
npx prisma migrate dev
```
## Building an API for creating issue:
1. Install [Zod](https://zod.dev/): Is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type: 
   ```
   npm i zod@3.22.2
   ```
2. Nextjs with prisma client(***[Best practice for instantiating PrismaClient with Next.js](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices)***)
   
3. Using Postman to test API for creating issue
## Setting Up [Radix UI](https://www.radix-ui.com/)
1. Install Radix Themes
```
npm install @radix-ui/themes
```
2. Import the CSS file
```
import '@radix-ui/themes/styles.css';
```
3. Add the Theme component

## Building the New Issue Page
## Customizing Radix UI Theme
1. Use the <ThemePanel/> Component
2. [Typography](https://www.radix-ui.com/themes/docs/theme/typography)
   
## Adding a Markdown Editor
  1. Install [React SimpleMDE (EasyMDE)](https://www.npmjs.com/package/react-simplemde-editor?activeTab=readme)
```
npm install --save react-simplemde-editor easymde
```
## Handling Form Submission
1. Install [React Hook Form](https://react-hook-form.com/)
```
npm i react-hook-form@7.46.1
```
2. Create form in new issue
3. Install Axios, ***is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints***
```
npm i axios@1.5.0
```
## Handling Errors
- Install [Radix Icon] (https://www.radix-ui.com/icons)
```
npm i @radix-ui/react-icons
```
## Implementing Client-Side Validation
- Install [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
```
npm install @hookform/resolvers@3.3.1
```
## Extracting the ErrorMessage Component 



     
