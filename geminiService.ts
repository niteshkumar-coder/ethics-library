
import { GoogleGenAI, Type } from "@google/genai";
import { CONTACT_INFO } from "./constants.tsx";

// Robust API key extraction for Vite environments
const getApiKey = () => {
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  return "";
};

export async function askRoyalSage(query: string) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "I apologize, Esteemed Seeker. The archives are currently veiled (API Key missing). Please check your configuration.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the "Royal Sage," the elite AI custodian of Ethics Library. 
        Your mission is "Dedicated to Moral & Intellectual Mastery." 
        Your voice is highly sophisticated, encouraging, and deeply respectful. 
        Refer to users as "Esteemed Seeker of Virtue." 
        Always emphasize that mastery is the result of self-discipline, integrity, and unwavering dedication to one's principles.
        Provide analytical, high-level insights rather than just basic facts.
        
        Information about our physical sanctuary in Patna:
        - Address: ${CONTACT_INFO.SANCTUARY.ADDRESS}
        - Hours: ${CONTACT_INFO.HOURS}
        - Phone: ${CONTACT_INFO.PHONE}
        If asked about visiting, describe it as a premium sanctuary for focused scholarship and ethical growth located behind Visvesvaraya Bhawan at Punaichak.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, Esteemed Seeker. The archives are temporarily veiled. Please attempt your inquiry again.";
  }
}

export async function getEliteRecommendations(interest: string) {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Recommend 3 elite areas of study for a master learner interested in: ${interest}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              description: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["topic", "description", "reason"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    return [];
  }
}
