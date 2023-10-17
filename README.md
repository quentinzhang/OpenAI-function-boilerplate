# OpenAI function Boilerplate

<p><center><small><b>English | <a href="README-zh_CN.md">中文</a></b></small></center></p>

A minimally viable framework for demonstrating how to create a function that can be invoked by OpenAI's function calling mechanism. It is written in NodeJS and deployed on Vercel, and tested with ConsoleX.ai for function invocation.

We will use an example of creating a function to answer questions about the 2022 FIFA World Cup (since the training data cutoff for ChatGPT models is currently January 2022, calling a function is needed to give correct answers). With simple steps, you can complete the creation, deployment and testing of the function.

## Create and Deploy the Function

First, clone the code locally:
```
git clone https://github.com/quentinzhang/OpenAI-function-boilerplate.git
```

Next, enter your project directory
```
cd OpenAI-function-boilerplate
```

If you have not installed Vercel, first install it globally:
```
npm i -g vercel
```

Then initialize a Vercel project in the root directory of the project:
```
vercel
```
Finally, deploy the project to production:

```
vercel --prod
```
After the operation is complete, your production domain name should be displayed in the terminal:
```https://<your-vercel-domain>```

At this point, you have completed the serverless function deployment process. Your function invocation path is:
```
https://<your-vercel-domain>/api/fifa_worldcup_2022_info
```

Since this function does not require any parameters, you can see the JSON information returned by the function by entering it in a browser.

The description of the function is contained in the ```function_description.json``` file, which can be passed as a parameter defining the function when invoking OpenAI's API.

## Testing Function Invocation
Debugging function invocation can be cumbersome as it involves several intermediate steps. Below is a shortcut to test function invocation with ConsoleX.ai.

Open the ```function_description.json``` file, copy the description information about the fifa_worldcup_2022_info function, and paste it into ConsoleX.ai's function description configuration and click the Save button.

Then, copy your production domain name, append ```/api``` to it as: ```https://<your-vercel-domain>/api```. Fill it in as the base path configuration on ConsoleX.ai's homepage.

Next, turn on the switch to enable OpenAI function calling, and ask GPT a simple question about the 2022 World Cup:

```
Which team won the 2022 FIFA World Cup?
```

You should now be able to see the correct answer returned by OpenAI's API through function invocation.

## Develop New Functions

You can develop new functions in a similar way - simply replace the function description information in ```function_description.json``` with your own, and write the function implementation code under the api directory in the corresponding file.

The example also contains implementation code for a ```get_current_weather``` function. You can refer to it to implement a function that needs to call third-party RESTful API interfaces.

Since an API Key from openweathermap.org is needed to get weather data, you need to add an environment variable named OPEN_WEATHER_MAP_API_KEY in Vercel's project settings, and fill in the API Key you applied from openweathermap as the value.

During local development, you can copy the .env.example file to .env, and fill in your API Keys in it. This allows you to use it when debugging locally.
```
cp .env.example .env
```

If you want to encrypt the function you are developing, you can set the value of the environment variable ```EXPECTED_API_KEY``` to a random string, and then pass that string in the authorization bearer token in the header when calling the function. This ensures that only those who know that string can invoke your function.