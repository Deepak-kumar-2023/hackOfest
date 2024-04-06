import React, { useEffect, useState } from "react";
import './App.css'
const { ethers } = require("ethers");




  
 
function App() {
  // const [likes, setCount] = useState(0) 
  const [dislikes, setCount1] = useState(0) 
  const walletAddress = "0x660B3e5F4aae325eE70D36beDF41A4F98e1C092e"; //contract wallet
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
     // const writeContract = async () => {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum); //window.ethereum is injected by metamask
    //   await provider.send("eth_requestAccounts", []); //request user to connect with metamask
    //   const signer = provider.getSigner();  //get signer
    //   const contract = new ethers.Contract(walletAddress, walletAbi, signer); //contract instance
      
    //   await contract.setter(); //call contract function name of function is setter to write data on blockchain
    // };
    // writeContract(); //call writeContract function

    const constractRead= async () => {  //function to read contract data from blockchain
      const walletContract =new ethers.Contract( //contract instance
          walletAddress,
          walletAbi,
          provider
      )
      // console.log(walletContract);
  
      const Name= await walletContract.getpoints(1); //call contract function name of function is getter
      console.log("points : ", Name.toString()); //print the result of getter function
  
  }
  constractRead();
  }, []);

  console.log("dislikes")
  return (
    <>
      <h1>learning react</h1>
      <div className="card">
      
      
        <button onClick={() => setCount1( dislikes + 1)}>
          dislikes {dislikes}
        </button>
        
      </div>
      
    </>
  )
}

export default App
