
const { expect } = require("chai");

describe("NFT Marketplace", function () {
  it("should create and execute market sales", async () => {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits('100', 'ether');

    await nft.createToken("https://www.mytokenlocation.com");
    await nft.createToken("https://www.mytokenlocation2.com");

    await market.creatMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice });
    await market.creatMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice });

    const [_, buyerAddress] = await ethers.getSigners();

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice });

    const items = await market.fetchMarketItems();

    console.log('items: ', items);
  });
});


