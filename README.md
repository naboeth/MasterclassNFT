Version with ABI in separate json file and incomplete check, whether adress is on a whitelist. 
Problems: cannot read output value of isParticipant()
Should return true if msg.sender is on whitelist --> use events? how to read output value of events?
Another challenge is that isParticipant() uses a modifier isWhitelisted(address _address) How does isParticipant() get the current account without input paramter?


