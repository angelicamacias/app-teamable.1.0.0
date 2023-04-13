# app arquitecure 



![Diagrama sin título drawio](https://user-images.githubusercontent.com/114703394/231842767-3f7d7360-e171-4c35-ab65-4555b32584c5.png)




The frontend sends a GET request to the /get-profile endpoint when the page is loaded or when the "Edit Profile" button is clicked. This endpoint returns the user profile information stored in the database.

When the user clicks the "Update Profile" button, the handleUpdateProfile() method is called. This method sends a POST request to the /update-profile endpoint with the updated user profile data.

The backend receives the POST request to the /update-profile endpoint with the new user profile data. It then validates the data using the isInvalidEmail() and isEmptyPayload() functions to ensure that the data is in the correct format. If the data is valid, the backend updates the user profile data in the database using the updateOne() function.

After the database is updated, the backend sends a response to the frontend indicating whether the update was successful or not.

Once the update is completed, the frontend updates the user interface by hiding the edit form and showing the user profile information with the updated data.
