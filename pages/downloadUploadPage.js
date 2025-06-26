const fs = require('fs');

exports.downloadUploadPage = class downloadUploadPage {

    constructor(page) {
        this.page = page;
        this.uploadAndDownloadMenuElement = page.locator('text = Upload and Download');
        this.downloadElement = page.locator('#downloadButton');
        this.selectFileElement = page.locator('#uploadFile');
        this.uploadedFilePathElement = page.locator('#uploadedFilePath');
    }

    async selectUploadAndDownloadFromMenu() {
        await this.uploadAndDownloadMenuElement.click();
    }

    async download(page) {
        const [download] = await Promise.all
            ([
                page.waitForEvent('download'),
                await this.downloadElement.click()
            ]);
        const downloadPath = 'downloads/downloadedFile.jpeg';
        await download.saveAs(downloadPath);
    }

    async selectFileToUpload() {
        await this.selectFileElement.setInputFiles('C:\\Users\\kisha\\Pictures\\Screenshots\\Kohli.png');
    }

    async getUploadedFileName() {
        return this.uploadedFilePathElement.textContent();
    }

    async verifyFileDownload(downloadPath) {
        if (fs.existsSync(downloadPath)) {
            return 'File successfully downloaded';
        }
        else {
            return 'File was not found';
        }

        fs.unlinkSync(downloadPath);
    }
}