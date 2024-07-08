import puppeteer from "puppeteer";

const handler = async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('Missing URL query parameter');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const screenshot = await page.screenshot({ encoding: 'base64' });

    await browser.close();

    res.status(200).json({ screenshot });
}

export default handler;