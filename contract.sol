// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Democracy {
    // Struct for Complaints
    struct Complaint {
        string description;
        string timestamp;
        string response; // Use a timestamp for time recording
    }

    // Struct for Politicians
    struct Politician {
        uint256 points;
        uint256 complaintCount; // Track total complaints
        Complaint[] complaints;
    }

    // Struct for Protests
    struct Protest {
        string title;
        string description;
        string location;
        string date; // Store date as a timestamp for sorting or searching
        uint256 participants;
    }

    // Constructor: Initialize politicians with starting points (consider security audits for initial values)
    constructor() {
        politicians[1].points = 5000;
        politicians[2].complaintCount = 0; // 'numbers' is not used, remove or clarify its purpose
    }

    // Mapping for politicians (consider using a more descriptive name like `politicians`)
    mapping(uint256 => Politician) public politicians;

    // Mapping for protests
    mapping(uint256 => Protest) public protests;
    uint count2=0;
    // Function to register a complaint
    function setComplaint(uint256 politicianId, string memory description, string memory times) public payable {
        require(politicianId > 0, "Invalid politician ID"); // Validate politician ID
        politicians[politicianId].points -= 100;
        politicians[politicianId].complaintCount += 1;
        Complaint memory newComplaint = Complaint(description, times , "not responded"); // Create new complaint
        politicians[politicianId].complaints.push(newComplaint); // Add complaint to array
    }

    // Function to create a protest
    function setProtest(
        string memory title,
        string memory description,
        string memory location,
        string memory date // Use a timestamp for date
    ) public {
        count2 = count2 + 1;
        protests[count2].title = title;
        protests[count2].description = description;
        protests[count2].location = location;
        protests[count2].date = date;
        protests[count2].participants = 1;
    }

    // Function to join a protest
    function addMe(uint256 protestId) public {// Validate protest ID
        protests[protestId].participants += 1;
    }

    // Function to retrieve a complaint description (consider returning an entire Complaint struct)
    function getComplaintdes(uint256 politicianId,uint compindex) public view returns (string memory) {
        require(politicianId > 0, "Invalid politician ID"); // Validate politician ID
        require(politicians[politicianId].complaintCount > 0, "No complaints for this politician");
        return politicians[politicianId].complaints[compindex].description;
    }
        function getComplaintresp(uint256 politicianId,uint compindex) public view returns (string memory) {
        require(politicianId > 0, "Invalid politician ID"); // Validate politician ID
        require(politicians[politicianId].complaintCount > 0, "No complaints for this politician");
        return politicians[politicianId].complaints[compindex].response;
    }
            function getComplainttime(uint256 politicianId,uint compindex) public view returns (string memory) {
        require(politicianId > 0, "Invalid politician ID"); // Validate politician ID
        require(politicians[politicianId].complaintCount > 0, "No complaints for this politician");
        return politicians[politicianId].complaints[compindex].timestamp;
    }

    function protitle(uint protestid) public view returns(string memory){
      return  protests[protestid].title;
    }
     function prodesc(uint protestid) public view returns(string memory){
      return  protests[protestid].description;
    }
     function proloc(uint protestid) public view returns(string memory){
      return  protests[protestid].location;
    }
     function prodate(uint protestid) public view returns(string memory){
      return  protests[protestid].date;
    }
     function participants(uint protestid) public view returns(uint){
      return  protests[protestid].participants;
    }
    function getpoints(uint poli_num) view public returns(uint){
        return politicians[poli_num].points;
    }
        function getcompno(uint poli_num) view public returns(uint){
        return politicians[poli_num].complaintCount;
    }
        function giveresp(uint poli,string memory resp, uint compid)public{
        politicians[poli].points+=50;  
        politicians[poli].complaints[compid].response=resp;
    }

}
