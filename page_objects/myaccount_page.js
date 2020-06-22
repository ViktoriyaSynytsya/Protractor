
class MyAccountPage {
    async getTitle() {
        expect(await browser.getTitle()).toEqual('My account - My Store');
    }
}

module.exports = new MyAccountPage();
