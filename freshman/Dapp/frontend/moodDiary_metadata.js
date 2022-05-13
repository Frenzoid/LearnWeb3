const moodDiaryMeta = {
    "compiler": {
        "version": "0.8.7+commit.e28d00a7"
    },
    "language": "Solidity",
    "output": {
        "address": "0x0D5B285b55B3721BBD0FE529f93Dad13b3b9f3D2",
        "abi": [
            {
                "inputs": [],
                "name": "getMood",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_mood",
                        "type": "string"
                    }
                ],
                "name": "setMood",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "devdoc": {
            "kind": "dev",
            "methods": {
                "setMood(string)": {
                    "params": {
                        "_mood": "new value to set to the mood variable."
                    }
                }
            },
            "version": 1
        },
        "userdoc": {
            "kind": "user",
            "methods": {
                "getMood()": {
                    "notice": "Getter"
                },
                "setMood(string)": {
                    "notice": "Setter"
                }
            },
            "version": 1
        }
    },
    "settings": {
        "compilationTarget": {
            "contracts/1_Storage.sol": "MoodDiary"
        },
        "evmVersion": "london",
        "libraries": {},
        "metadata": {
            "bytecodeHash": "ipfs"
        },
        "optimizer": {
            "enabled": false,
            "runs": 200
        },
        "remappings": []
    },
    "sources": {
        "contracts/1_Storage.sol": {
            "keccak256": "0xa4aef124c1513aef17ac3e85b0ef6daa709ff60f5f661b0340820e4c2ae3af4d",
            "license": "MIT",
            "urls": [
                "bzz-raw://7d85f5fd4da4793ee6fc77170e7e7020123b6842dada16485ba202fdb98e389f",
                "dweb:/ipfs/QmUn4JTJsEK2xzYYR3aHQL5dbm5vgY2tzFgYoP5omfq8Pk"
            ]
        }
    },
    "version": 1
};