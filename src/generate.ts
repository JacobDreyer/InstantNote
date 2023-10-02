import { Configuration, OpenAIApi } from "openai"

// Remember to rename these classes and interfaces!
const configuration = new Configuration({
	apiKey: "",
});
const openai = new OpenAIApi(configuration);

export default async function (req: any) {
    let res = "";
    console.log("reached generate.js");
    console.log(process.env.OPENAI_API_KEY)
    try{
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "generate a random 5 digit number",
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