const parityContractAbi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "token",
    "outputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "tla",
        "type": "string"
      },
      {
        "name": "base",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_new",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_addr",
        "type": "address"
      },
      {
        "name": "_tla",
        "type": "string"
      },
      {
        "name": "_base",
        "type": "uint256"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_fee",
        "type": "uint256"
      }
    ],
    "name": "setFee",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_key",
        "type": "bytes32"
      }
    ],
    "name": "meta",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_addr",
        "type": "address"
      },
      {
        "name": "_tla",
        "type": "string"
      },
      {
        "name": "_base",
        "type": "uint256"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "registerAs",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_tla",
        "type": "string"
      }
    ],
    "name": "fromTLA",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "base",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "drain",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tokenCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "unregister",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "fromAddress",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "tla",
        "type": "string"
      },
      {
        "name": "base",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_key",
        "type": "bytes32"
      },
      {
        "name": "_value",
        "type": "bytes32"
      }
    ],
    "name": "setMeta",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fee",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "tla",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "Registered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "tla",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "Unregistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "key",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "bytes32"
      }
    ],
    "name": "MetaChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "old",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "current",
        "type": "address"
      }
    ],
    "name": "NewOwner",
    "type": "event"
  }
];

module.exports = parityContractAbi;
