import React, { useEffect, useState } from "react";
import './App.css'
import { ethers } from "ethers";

// import { constractRead } from './readSmartContract';


  
 
function App() {
  // const [likes, setCount] = useState(0) 
  const [dislikes, setCount1] = useState(0) 
  let [num, setCount] = useState(0) 
  let lol;
  
  const walletAddress = "0xCd500E89BB2FB655249b0651Ba1b30811ce6b4F0"; //contract wallet
  const provider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/f4ba41cf8b1d49148dba75054987eced");
  useEffect(() => {
    const walletAbi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestId",
            "type": "uint256"
          }
        ],
        "name": "addMe",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplaintdes",
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
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplaintresp",
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
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplainttime",
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
            "internalType": "uint256",
            "name": "poli_num",
            "type": "uint256"
          }
        ],
        "name": "getcompno",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "poli_num",
            "type": "uint256"
          }
        ],
        "name": "getpoints",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "poli",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "resp",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "compid",
            "type": "uint256"
          }
        ],
        "name": "giveresp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "participants",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "politicians",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "points",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "complaintCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "prodate",
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
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "prodesc",
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
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "proloc",
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
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "protests",
        "outputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "participants",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "protitle",
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
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "times",
            "type": "string"
          }
        ],
        "name": "setComplaint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          }
        ],
        "name": "setProtest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]


     const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum); //window.ethereum is injected by metamask
      await provider.send("eth_requestAccounts", []); //request user to connect with metamask
      const signer = provider.getSigner();  //get signer
      const contract = new ethers.Contract(walletAddress, walletAbi, signer); //contract instance
      await contract.setProtest("a","b","c","d"); //call contract function name of function is setter to write data on blockchain
      console.log("setter is running");
    };
    // writeContract(); //call writeContract function



    const constractRead= async () => {  //function to read contract data from blockchain
      const walletContract =new ethers.Contract( //contract instance
          walletAddress,
          walletAbi,
          provider
      )
      console.log("walletContract");
  
    //   num= await walletContract.protitle(1); //call contract function name of function is getter
    //   console.log("points : ", num.toString()); //print the result of getter function
    //   // lol=num.toString();
    //   // return lol;
      
    }
    
    constractRead();
   
  }, []);

  return (
    <>
      <h1>learning react</h1>
      <div className="card">
      
      
        <button onClick={() => setCount1( dislikes + 1)}>
          dislikes {dislikes}
        </button>
        <button onClick={() => setCount(num.toString())}>
          like {(num.toString())}
        </button>
        
      </div>
      
    </>
  )
}

export default App
