require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    networks: {
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    
  },
};
