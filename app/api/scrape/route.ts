import { load } from "cheerio";
import { NextRequest, NextResponse, userAgent } from "next/server";
import puppeteer from "puppeteer";

function delay(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function runScraper(url: string) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    if (!url.startsWith("http")) url = `https://${url}`;
    await page.goto(url);
    const htmlContent = await page.content();
    const $ = load(htmlContent);
    await browser.close();
    return $("title").text().trim();
  } catch (error) {
    throw Error(`${error}`);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { data } = await request.json();
    console.log(await runScraper(data));
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({}, { status: 200 });
}
