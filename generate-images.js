import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error('❌ GOOGLE_API_KEY not found in .env file');
  process.exit(1);
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

// Prompts for mystical spiritual art
const prompts = [
  "A mystical painting of Radha and Krishna in a serene garden, surrounded by soft pink and white lotus flowers, ethereal golden light, divine love, spiritual art, highly detailed, dreamlike atmosphere, soft colors, intricate details",
  "A powerful spiritual artwork featuring divine figures in meditation, cosmic background with deep purples and golds, mystical energy, ethereal glow, sacred geometry, spiritual art, vibrant colors, transcendent beauty",
  "An ethereal landscape with floating lotus petals, soft pink and white flowers, golden hour lighting, mystical atmosphere, spiritual sanctuary, peaceful meditation scene, divine beauty, soft brushstrokes",
  "A beautiful spiritual art piece with mandala patterns, cosmic elements, deep indigo and gold colors, mystical symbols, sacred geometry, transcendent beauty, intricate details, powerful energy",
  "A serene spiritual painting of a divine figure with peacock feathers, soft pastel colors, ethereal light, mystical atmosphere, spiritual art, delicate details, peaceful meditation, beautiful composition"
];

async function generateImage(prompt, index) {
  try {
    console.log(`\n🎨 Generating image ${index + 1}/5...`);
    console.log(`   "${prompt.substring(0, 80)}..."`);
    
    // Try using the image generation model
    // Note: The model name might be 'gemini-2.5-flash-image' or similar
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash-image'
    });
    
    // Generate image using the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Check if response contains image data
    if (response.candidates && response.candidates[0]) {
      const candidate = response.candidates[0];
      
      // Check for image in parts
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            console.log(`✅ Successfully generated image ${index + 1}!`);
            return part.inlineData.data;
          }
        }
      }
    }
    
    // Alternative: Check if response has image directly
    if (response.image) {
      console.log(`✅ Successfully generated image ${index + 1}!`);
      return response.image;
    }
    
    // If no image found, log the response structure
    console.log(`⚠️  No image data found in response`);
    console.log(`   Response structure: ${JSON.stringify(Object.keys(response)).substring(0, 200)}`);
    return null;
    
  } catch (error) {
    console.error(`❌ Error generating image ${index + 1}:`);
    console.error(`   ${error.message}`);
    if (error.message.includes('404')) {
      console.error(`   Model 'gemini-2.5-flash-image' not found. Trying alternative...`);
    }
    return null;
  }
}

async function main() {
  console.log('✨ Starting Mystical Art Generation with Gemini 2.5 Flash Image...\n');
  console.log(`🔑 API Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(API_KEY.length - 4)}`);
  console.log(`🎨 Model: gemini-2.5-flash-image\n`);
  
  // Check if assets directory exists
  const assetsDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  
  // Try to generate images
  const results = [];
  for (let i = 0; i < prompts.length; i++) {
    const imageBase64 = await generateImage(prompts[i], i);
    
    if (imageBase64) {
      // Save the image
      const imageBuffer = Buffer.from(imageBase64, 'base64');
      const filename = `mystical-art-${i + 1}.png`;
      const filepath = path.join(assetsDir, filename);
      fs.writeFileSync(filepath, imageBuffer);
      console.log(`💾 Saved: ${filename} (${(imageBuffer.length / 1024).toFixed(2)} KB)`);
      results.push(filepath);
    } else {
      console.log(`⚠️  Could not generate image ${i + 1}`);
    }
    
    // Add delay to avoid rate limiting
    if (i < prompts.length - 1) {
      console.log(`   Waiting 3 seconds before next generation...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  console.log('\n' + '='.repeat(60));
  if (results.length > 0) {
    console.log(`\n🎉 SUCCESS! Generated ${results.length} mystical art images!`);
    console.log(`📁 Images saved to: ${assetsDir}/`);
    console.log(`\n✨ Your spiritual art gallery is ready!`);
  } else {
    console.log(`\n⚠️  No images were generated.`);
    console.log(`\n💡 The model might need a different API call format.`);
    console.log(`   Check: https://ai.google.dev/gemini-api/docs`);
  }
  console.log('='.repeat(60));
}

main().catch(console.error);
