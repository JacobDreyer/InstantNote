import { Configuration, OpenAIApi } from "openai"
import {OPENAI_API_KEY} from 'env'

// Remember to rename these classes and interfaces!
const configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: any, file: File) {
    let res = "";
    console.log("reached generate.js");
    console.log(process.env.OPENAI_API_KEY)
    try{
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(file),
            temperature: 0.6,
        });
        res = completion.data.choices[0].text?.toString();
        console.log("res: " + res);
        return res;
    }
    catch(error){
        console.error(`Error with OpenAI API request: ${error.message}`);
        res = "error"
    }
    return "an error happened";
}

function generatePrompt(file: File){
    let title = file.name;
    title = title.replace('.md', '');
    console.log(title);
    return "Generate an overview of " + title;
}