class projectContent {
    constructor(imgs, desc, overview, link) {
        this.imgs = imgs;
        this.desc = desc;
        this.overview = overview;
        this.link = link;
        this.currIndex = 0;
        this.maxIndex = imgs.length - 1;
    }

    getCurrIndex() {
        return this.currIndex;
    }

    getCurrImgDesc() {
        return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
    }

    getNextCurrIndexValues() {
        if (this.currIndex === this.maxIndex){
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        } else {
            this.currIndex += 1;
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        }
    }

    getPrevCurrIndexValues() {
        if (this.currIndex === 0){
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        } else {
            this.currIndex -= 1;
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        }
    }

    getImgs() {
        return this.imgs;
    }

    setImgs(inputImgs) {
        this.imgs = inputImgs;
    }

    getDesc() {
        return this.desc;
    }

    setDesc(inputDesc) {
        this.desc = inputDesc;
    }
}

export default projectContent;