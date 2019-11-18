# What is this?

This is a react application template generator,which is based on react.js + next.js + express.js。
You can deploy a simple isomorphic react application fastly with it。 

## Installation

```bash
npm intall -g voyager-cross 
```

## How to use it

```bash
# generate your project
voyager -i <YOUR_PROJECT_NAME>
# enter your project
cd <YOUR_PROJECT_NAME>
# start then open localhost:3000
npm run dev
# or
yarn dev
```

## Why did I write it?

Someone may ask me that Next.js and React have provided so many tools for initiating a new project. Why did you do the same thing?

I don't think those tools suit our daily work. For example, SPA (Single Page Application ) is not suited for some countries' network search engines, such as China, North Korea. On the other hand, although SPA provides smooth user experiences to us, it brought a new problem that is white page。In some developing countries or areas, it may spend much time to load web content. So that is why we need to build an isomorphic web application but a single SSR or SAP web application.

When I used the next.js official tool to generate a web application, I found that there are too many essential functions that need to add, such as dynamic routes, faster style render, sitemap, progress bar, code compression and so on. In my philosophy, front-ending engineers should focus on UI design, UX and creating fantastic functions for our users, but waste time to resolve problems for suiting browsers。

That's why I created this tool.

# Connection

If you have any question, please contact me: cloudwave.suzhou@gmail.com
