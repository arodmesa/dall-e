export const all_help_messages={
    "Text Completion" : "Creates a completion for the provided prompt and parameters",
    "Text Edition" : "Creates a new edit for the provided input, instruction, and parameters",
    "Text Moderation" : "Classifies if text violates OpenAI's Content Policy",
    "Image Generation" : "Creates an image given a prompt"
};
export const fields_data = {
    "Text Completion" : 
      {
        "max_tokens" : "number",
        "number_of_results" : "number"
      },
    "Text Edition" :
      {
        "instruction" : "text",
        "number_of_results" : "number"
      },
    "Text Moderation" : 
      {

      },
    "Image Generation" : 
      {
        "number_images_generated" : "number"
      }
};
export const default_parameters={
    "max_tokens" : "50",
    "temperature": 1, //this one is constant
    "number_of_results": "1",
    "instruction": "",
    "number_images_generated": "1"
}
export const api_urls={
  "Text Completion" : "https://dall-e-suht.onrender.com/text/completion",
  "Text Edition" : "https://dall-e-suht.onrender.com/text/edit",
  "Text Moderation" : "https://dall-e-suht.onrender.com/moderation",
  "Image Generation" : "https://dall-e-suht.onrender.com/image"
}
export const input_labels={
  "max_tokens": "Maximum number of tokens (max 100)",
  "instruction": "Instruction",
  "number_images_generated": "Number of images you want to generate (max 5)",
  "number_of_results": "Number of results you want to generate (max 5)"
}