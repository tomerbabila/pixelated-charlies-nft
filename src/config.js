const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'Pixelated Charlies';
const description = "Gotta Catch 'Em All";
const baseUri = 'ipfs://Qmek6bLTP64DGfghi95Vn126vfhvmo38w5eBt68vnxXcWS'; // Change CID if needed

const solanaMetadata = {
  symbol: 'YC',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://www.youtube.com/c/hashlipsnft',
  creators: [
    {
      address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: 'Skeleton' },
      { name: 'Pants' },
      { name: 'Shirts' },
      { name: 'Mouths' },
      { name: 'Eyes' },
      { name: 'Heads' },
      { name: 'Accessories' },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000',
};

const extraMetadata = {
  creator: 'Tomer B',
  artist: 'Tomer B',
};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 100,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
};

const preview_gif = {
  numberOfImages: 10,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
