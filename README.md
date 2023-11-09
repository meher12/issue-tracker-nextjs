# Build a Full-stack App with Next.js, Tailwind, Radix UI, and Prisma

## 1. Create a New project:
***Using npx create-next-app***
## 2. Build the NavBar :
  1. Using React Components snippets Like ***rfce*** and ***rafce***
  2. Using <b>ul>li*2</b>
  3. Using Tailwind CSS and [React Icons](https://react-icons.github.io/react-icons/)
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
     
