# OpenAI function Boilerplate

A minimum framework for creating a function to be invoked by OpenAI function calling mechanisum, using NodeJS and hosted on Vercel.

## Quick start

First, clone the project to your local enviornment:
首先，克隆代码到本地
```
git clone https://github.com/quentinzhang/OpenAI-function-boilerplate.git
```

Next, enter your project directory, and create a .env file using the sample file
接下来，进入你的项目目录，并通过示例文件创建一个.env文件
```
cd OpenAI-function-boilerplate
cp .env.example .env
```

if you have not installed Vercel, install it globally first:
然后，全局安装vercel，并初始化一个新项目，如果是第一次使用则会提示你创建用户
```
npm i -g vercel
```

Then initialize a Vercel project in the root directory of the project:
下一步，初始化一个Vercel项目
```
vercel
```
Follow the guided steps to complete the setup.
按照提示一步步完成设置即可。

```
vercel --prod
```

到这里，你已经创建并部署了一个可供调用的简单函数。

### Test the function

There are two functions pre-created.

Enter Vercel dashboard, and find the project that you just created, copy your project path, and paste it in the "function base path" input box on ConsoleX, turn on the 'Enable OpenAI function calling' switch, and now you can try invoking your function by API or using ConsoleX.ai



You can ask the OpenAI's GPT model a question related to local weather:
```
What's the weather like in London today?
```
In most cases, OpenAI's GPT model will call the weather function getCurrentWeather to answer your question. If the function call works, a green message box will appear under the AI's answer. Clicking on the message box will open a pop-up window with detailed information about the function call process.

Once local debugging is successful, you can release the function to the internet via:
```
vercel --prod
```
After successful release, you need to replace the function call path in the ConsoleOne Workbench with the domain name of the Vercel production environment and set the environment variables used in the .env file in the environment variable settings of the Vercel project. You can then call the function more conveniently without relying on the local environment.