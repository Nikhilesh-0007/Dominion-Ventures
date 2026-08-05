'use server';

import fs from 'fs';
import path from 'path';

export async function ensureInfographicImages() {
  const src1 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919243268.jpg';
  const src2 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919259401.jpg';
  const dest1 = path.join(process.cwd(), 'public', 'fmcg_product_framework.jpg');
  const dest2 = path.join(process.cwd(), 'public', 'running_a_brand_framework.jpg');

  try {
    if (fs.existsSync(src1)) {
      fs.copyFileSync(src1, dest1);
    }
    if (fs.existsSync(src2)) {
      fs.copyFileSync(src2, dest2);
    }
  } catch (err) {
    console.error('Error copying infographics:', err);
  }
}
