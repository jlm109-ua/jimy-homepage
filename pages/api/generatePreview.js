import puppeteer from "puppeteer";

export default async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('Missing URL query parameter');
    }

    if (req.method === 'GET') {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://www.jimy-homepage.vercel.app', { waitUntil: 'networkidle2' });
            const screenshot = await page.screenshot();
            await browser.close();
            res.setHeader('Content-Type', 'image/png');
            res.end(screenshot);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error generating screenshot');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}