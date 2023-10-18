# OpenAI function Boilerplate

<!-- [English Version](README.md)｜中文版 -->
<p align="center"><small><b><a href="README.md">English</a> | 中文</b></small></p>


创建一个可以被OpenAI函数调用机制调用的函数的最小化开发框架，使用NodeJS编写并部署到Vercel上，并使用[ConsoleX.ai](https://consolex.ai)测试函数调用。

我们将以创建一个用于解答关于2022年世界杯相关问题的函数为例（由于ChatGPT模型训练数据目前的截止时间为2022年1月，所以需要调用函数才能给出正确的回答），通过简单的步骤，即可完成函数的创建、部署和测试。

## 创建和部署函数

首先，将代码克隆到本地
```
git clone https://github.com/quentinzhang/OpenAI-function-boilerplate.git
```

接下来，进入项目根目录
```
cd OpenAI-function-boilerplate
```

如果你尚未安装Vercel，首先全局安装vercel
```
npm i -g vercel
```

然后，初始化一个Vercel项目，按照提示一步步完成设置即可。
```
vercel
```

最后，将项目部署到生产环境

```
vercel --prod
```

操作完成后，终端上应该会显示出你的生产环境域名：
```https://<your-vercel-domain>```

到这里，你已经完成了serverless函数部署的过程，你的函数调用路径为：
```https://<your-vercel-domain>/api/fifa_worldcup_2022_info```

由于这个函数无需传递任何参数，通过浏览器输入即可看到函数返回的JSON信息。在本地测试时，可以使用```vercel dev```命令启动本地开发服务器，然后通过```http://localhost:3000/api/get_current_weather```来访问该函数。

该函数的描述信息包含在```function_description.json```文件中，在调用OpenAI的API时可以放在functions参数中传入。

### 测试函数调用

函数调用的调试由于涉及到了中间步骤，所以可能比较麻烦，以下提供了通过[ConsoleX.ai](https://consolex.ai)测试函数调用的快捷方法。

打开```function_description.json```文件，复制其中关于fifa_worldcup_2022_info函数的描述信息，并将其粘贴到ConsoleX.ai的函数描述配置中并点击保存按钮。

然后，复制你的生产环境域名，在后面加上 ```/api``` 即：```https://<your-vercel-domain>/api```。将其填写到ConsoleX.ai首页的base path配置中。如果你为函数的调用设置了API Key，那么你还需要将API Key填写到ConsoleX.ai首页的函数调用API Key配置中。

接下来，打开启用OpenAI function calling的开关，向OpenAI的GPT模型提问一个关于2022年世界杯的简单问题：
```
Which team won the 2022 FIFA World Cup?
```

你应该已经可以看到OpenAI的API通过函数调用给出的正确回答了。

### 开发新的函数

你可以通过类似的方法开发新的函数，只需要将```function_description.json```中的函数描述信息替换为你的函数描述信息，然后将函数的实现代码写在```api```目录下的对应文件中即可。

你也可以参考[Vercel文档](https://vercel.com/docs/functions/serverless-functions)了解更多关于如何开发serverless函数的信息。

示例中还包含了一个```get_current_weather```函数的实现代码，你可以参考它来实现一个需要调用第三方Restful API接口的函数。

首先在项目根目录下运行```npm install```安装asios依赖，然后在Vercel的项目设置中添加一个名为```OPEN_WEATHER_MAP_API_KEY```的环境变量，将你在[openweathermap](https://openweathermap.org/)申请的API Key作为值填入即可。

在本地开发时，可以将.env.example文件复制为.env文件，并将你的API Key填入其中，这样就可以在本地调试时使用了。
```
cp .env.example .env
```

如果你希望要给开发的函数加密，可以将环境变量```EXPECTED_API_KEY```的值设置为一个随机字符串，然后在调用函数时将该字符串作为header中authorization的bearer token传入，这样就可以保证只有知道该字符串的人才能调用你的函数。