import { GoogleGenAI } from "@google/genai";



const ai = new GoogleGenAI({apiKey:"AIzaSyCx762k1ewY7kyGw9UQdYSa-mrquf31PdQ"});



async function main(prompt) {

  const response = await ai.models.generateContent({

    model: "gemini-2.5-pro",
    contents: "Explain how AI works in a few words",
 
  });
return response.text
 
 

}



export default main;