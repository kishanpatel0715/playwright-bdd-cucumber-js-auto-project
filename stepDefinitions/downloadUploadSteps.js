import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getdownloadUploadPage } from '../helper/objectHelper';

const { Given, When, Then } = createBdd();
let downloadPath;

Given('user selects Upload and Download from sub-menu', async ({page}) => {
    const _downloadUploadPage = getdownloadUploadPage(page);
    await _downloadUploadPage.selectUploadAndDownloadFromMenu();
});

When('the user downloads the file', async ({page}) => {
    const _downloadUploadPage = getdownloadUploadPage(page);
    await _downloadUploadPage.download(page);
});

Then('the file is downloaded successfully', async ({page}) => {
    const _downloadUploadPage = getdownloadUploadPage(page);
    expect(await _downloadUploadPage.verifyFileDownload('downloads/downloadedFile.jpeg')).toBe('File successfully downloaded');
});

When('the user uploads the file', async ({page}) => {
    const _downloadUploadPage = getdownloadUploadPage(page);
    await _downloadUploadPage.selectFileToUpload();
});

Then('the file is uploaded successfully', async ({page}) => {
    const _downloadUploadPage = getdownloadUploadPage(page);
    expect(await _downloadUploadPage.getUploadedFileName()).toContain('Kohli.png');
});