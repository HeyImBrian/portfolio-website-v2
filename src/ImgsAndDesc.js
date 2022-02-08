
function importAllPictures(pictures) {
    return pictures.keys().map(pictures);
}

const imagesAppointmentProgram = importAllPictures(require.context("./components/images/projects/appointment-customer-program/", false, /\d+.+\.(png)$/));
const imagesInventoryProgram = importAllPictures(require.context("./components/images/projects/inventory-program/", false, /\d+.+\.(png)$/));
const imagesmooloolabaSite = importAllPictures(require.context("./components/images/projects/mooloolaba-site/", false, /\d+.+\.(png)$/));

const overviewAppointmentProgram = ["Appointment Scheduler", "This program allows an employee to log in using their stored credentials. Once logged in, the employee can create, read, update, and delete customers and appointments. Data is stored in a mySQL database."];
const linkAppointmentProgram = "https://github.com/HeyImBrian/appointment-scheduler"
const descsAppointmentProgram = [
    "This is the form that users use to log in. The username and password is checked using an SQL query to check the mySQL database.", 
    "Input validation is used to tell the user why the log in didn't work.", 
    "When successfully logged in, an alert tells the user if they have any upcoming appointments.",
    "The navigation menu is shown after the log in page.", 
    "The customers page allows users to add, update, and delete customers.", 
    "Add customer page.",
    "Input validation tells the user which information is required to create a customer.", 
    "On the add customer page, the division choices change depending on which country is selected.", 
    "The added customer can be seen on the list of customers.",
    "When updating a customer, all the customer's information is autofilled.", 
    "The appointment page allows users to add, update, and delete appointments. All of the appointments are connected to a customer, contact, and user. Custom report gives general information about the collective appointments.", 
    "When adjusting the view between Month, Week, and All, an alert will pop up if there aren't any appointments in the selected time frame.",
    "Add appointment page.", 
    "Date selection on the add appointment page.", 
    "Along with the normal input validation as seen on the add customer page, the time input also needs to be in a certain format.",
    "On the appointment page, a customer must be selected from existing customers in the database.", 
    "Appointment's start and stop time must take place within the company's EST business hours. The program takes into account the user's current time zone and converts the time to EST.", 
    "The appointment has been added.",
    "The MySQL database.", 
    "A log of log in activity is saved.", 
]

const overviewInventoryProgram = ["Inventory Manangement", "This program allows a user to create, read, update, and delete parts and products. Each product is composed of at least one part."];
const linkInventoryProgram = "https://github.com/HeyImBrian/inventory-software"
const descsInventoryProgram = [
    "This is the main page of the inventory program. The parts and the products tables can be seen at the same time. Both tables have search bars and add, modify, and delete buttons.", 
    "Demonstrating searching by name, and searching by ID.", 
    "Add part page.",
    "Input validation makes sure that required fields are acceptable. The In-House and Outsourced radio buttons change an input field label.", 
    "Input validation for the Max, Min, and Inventory fields.", 
    "Added the Steering Wheel part.",
    "The modify part button allows the user to modify the selected part.", 
    "The add product page allows the user to fill in related fields, and add parts that create a product.", 
    "The upper table is where parts are selected and added to the product.",
    "The Hybrid Go-Kart product has been added to the products table.", 
    "The modify product autofills the product information and allows the user to change the values.", 
]

const overviewMooloolabaSite = ["Temperature Prediction Website", "A website that uses machine learning to predict the water temperature of Australia's Mooloolaba bay for a given date and time. Several graphs are shown to get a better idea of how date and time has an impact on the bay's water temperature."];
const linkMooloolabaSite = "https://github.com/HeyImBrian/MooloolabaWaves"
const descsMooloolabaSite = [
    "Date picker", 
    "Time picker", 
    "After submitting the date and time, the machine learning algorithm predicts the water temperature at the Mooloolaba bay in Australia.",
    "Radial graph of the top temperatures of each month for 2017 and 2018.", 
    "Line graph showing the relationship between the time of day and temperature.", 
    "This graph shows all of the different temperatures throughout each month for 2017 and 2018.",
    "The data was stored in CSV format. missing values were stored as -99.9. This is the code I created to fill in the missing gaps. In other contexts, removing the value would be a better choice. In this context, I believe finding the average between the surrounding rows produces a better result.", 
]




module.exports = {
    overviewAppointmentProgram: overviewAppointmentProgram,
    linkAppointmentProgram : linkAppointmentProgram ,    
    overviewInventoryProgram: overviewInventoryProgram,
    linkInventoryProgram: linkInventoryProgram,
    overviewMooloolabaSite: overviewMooloolabaSite,
    linkMooloolabaSite: linkMooloolabaSite,

    imagesAppointmentProgram: imagesAppointmentProgram,
    imagesInventoryProgram: imagesInventoryProgram,
    imagesmooloolabaSite: imagesmooloolabaSite,

    descsAppointmentProgram: descsAppointmentProgram,
    descsInventoryProgram: descsInventoryProgram,
    descsMooloolabaSite: descsMooloolabaSite
}