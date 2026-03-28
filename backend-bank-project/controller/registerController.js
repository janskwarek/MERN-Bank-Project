export const registerController = (req,res) => {
    // const {FirstName,LastName,PersonalIdType,PersonalIdNumber,Email,DateOfBirth,PhoneNumber,City,Country,Street,PostalCode} = req.body;
    res.json({message:"Registration successful", data:req.body});

}