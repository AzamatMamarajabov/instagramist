
import { GoogleGenAI, Type } from "@google/genai";
import { InstagramStrategy, StrategyDetails } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    pageName: { type: Type.STRING, description: "Instagram sahifasi uchun unikal va esda qolarli nom." },
    bio: { type: Type.STRING, description: "150 belgidan oshmaydigan, emojilar bilan bezatilgan kuchli bio." },
    profilePhotoIdea: { type: Type.STRING, description: "Profil rasmi uchun g'oya (uslub, ranglar, kayfiyat)." },
    contentStrategy: {
      type: Type.OBJECT,
      properties: {
        posts: { type: Type.ARRAY, items: { type: Type.STRING }, description: "10 ta post uchun g'oyalar." },
        reels: { type: Type.ARRAY, items: { type: Type.STRING }, description: "10 ta Reels uchun g'oyalar." },
        stories: { type: Type.ARRAY, items: { type: Type.STRING }, description: "5 ta Stories uchun g'oyalar." },
      },
      required: ["posts", "reels", "stories"]
    },
    captions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Post sarlavhasi yoki qisqa tavsifi." },
          text: { type: Type.STRING, description: "Post uchun tayyor matn (emoji va CTA bilan)." },
        },
        required: ["title", "text"]
      },
      description: "3 ta tayyor post matni (caption)."
    },
    hashtags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "15 ta relevant o'zbekcha va inglizcha heshteglar." },
    toneOfVoice: { type: Type.STRING, description: "Sahifaning 'ovoz toni' va xarakteri." },
    postingSchedule: { type: Type.STRING, description: "Postlarni joylash chastotasi va o'zbek auditoriyasi uchun eng yaxshi vaqt." },
    growthTips: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Organik ravishda 10 ming obunachiga erishish uchun maslahatlar." },
  },
  required: ["pageName", "bio", "profilePhotoIdea", "contentStrategy", "captions", "hashtags", "toneOfVoice", "postingSchedule", "growthTips"]
};

export const generateInstagramStrategy = async (details: StrategyDetails): Promise<InstagramStrategy> => {
  const prompt = `
    Sen professional ijtimoiy media strategisti va Instagram kontent yaratuvchisisan.

    Til: Barcha ma'lumotlar FAQAT o'zbek tilida (lotin alifbosida) bo'lishi kerak. Rus tilini ISHLATMA. Tillarni aralashtirma. Hamma narsa O'zbekiston uchun to'liq moslashtirilgan bo'lishi kerak.

    ASOSIY MA'LUMOTLAR:
    - ASOSIY YO'NALISH (NICHE): ${details.niche}
    - MAQSADLI AUDITORIYA: ${details.targetAudience}
    - SAHIFANING MAQSADI: ${details.goal}
    - USLUB VA TON: ${details.style}

    Quyidagi vazifalarni yuqoridagi ma'lumotlar asosida bajar:
    1. Noyob va esda qolarli Instagram sahifa nomi.
    2. Kuchli bio (maksimum 150 belgi), emojilar va aniq taklif bilan.
    3. Profil rasmi uchun g'oya (uslub, ranglar, kayfiyat).
    4. Kontent strategiyasi:
       - 10 ta Instagram post g'oyasi
       - 10 ta Reels g'oyasi (viralga yo'naltirilgan)
       - 5 ta Story g'oyasi
    5. O'zbek tilida 3 ta tayyor post matni (emoji va CTA bilan).
    6. 15 ta relevant o'zbekcha va inglizcha heshteglar.
    7. Sahifaning ovoz toni va xarakterini aniqlash.
    8. O'zbekiston uchun postlarni joylash chastotasi va eng yaxshi vaqt.
    9. Organik ravishda 10,000 obunachiga erishish uchun o'sish bo'yicha maslahatlar.

    KONTENT QOIDALARI:
    - Qisqa, hissiyotli va qiziqarli matnlar
    - Zamonaviy Instagram uslubi
    - Emojilarni me'yorida ishlatish
    - Qiymat berish va ishonch uyg'otishga e'tibor qaratish
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const strategyData: InstagramStrategy = JSON.parse(jsonText);
    return strategyData;

  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to generate strategy from Gemini API.");
  }
};
