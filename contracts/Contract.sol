pragma solidity >=0.5.0;

contract Contract {
    string public name = "Contract";

    address[] public addresses;

    mapping(uint256 => Swap) public swaps;

    struct Swap {
        uint256 id;
        string description;
        uint256 amount;
        address payable contractor;
        address creator;
        bool doneContractor;
        bool doneCreator;
        bool done;
    }
    
    function createNewSwap(
        string memory _description,
        uint256 _amount,
        address payable _contractor
    ) public payable {
        require(_amount > 0, "amount cannot be 0");
        // check validity of swap info

        require(bytes(_description).length != 0);
        // Check that contract address exists
        require(_contractor != address(0));
        // Make sure uploader address exists
        require(msg.sender != address(0));

    
    
    }
}
