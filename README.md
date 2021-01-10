# All things money! (FDE Assignment 2 - S10206177C)

Highlighted by the name of the project, this website consists of features that revolve around money, or more specifically, _**currency**_. It is designed to help users with converting a set amount of money, from one currency to another. Additionally, it also provides a comparison feature, that allows users to pit two currencies together and view their exchange rate side-by-side. 

It is a rather simple idea that makes use of [Currencyscoop's API](https://currencyscoop.com) and localStorage functions to readily provide the user with information as simple and clean as possible, while helping with visual aspects by making use of [Highcharts' chart function](https://www.highcharts.com).

## **Design Process**

My target audience is rather broad, but essentially, any citizen who requires easy and quick information. This means that the website isn't for those who require deep, detailed information that is documented extensively with references and whatnot. It's more of a handy tool that can be quickly accessed and referred to at any given moment in time. Thus, those that are currency enthusiasts or are of that like are not part of the target audience.

### **User stories**
- As someone preparing to travel abroad, I can use this to gauge the amount required for the trip and its different needs.
- As someone preparing to purchase something online, I can use this to quickly check how much is something in my own currency.
- As a student, I can use this to check the currency rates and how they fare against each other.

To help these be achieved successfully, this project was made using an API that is up-to-date and accurate with their information. It provides the necessary information while not flooding the screen and being too messy.

This would be the final wireframe I worked with: [Final Wireframe](https://xd.adobe.com/view/31a90860-fa2c-4212-9bdb-3b5ef9ed8935-64fa/)

## **Features**

### **Existing features**
Name | Description
------------ | -------------
Conversion of money | User can input an amount to be converted, currency to be converted from and currency to be converted to, to receive the converted amount.
Comparison of currency| User can input two different currency codes to compare the two currencies, with the former currency at a set value of 1 as a basis for comparison.
Navigation bar| User can use this to navigate between the two previous features and the 'Contact' section.

### **Features left to implement**

Currently, the project hasn't _really_ differentiated itself from other applications/website in its genre. Therefore, there are quite the number of ideas for features that will truly help the target audience and provide pull factors for using the website.
1. Viewing a currency's value throughout the years
    * Complement this by using a graph to appropriately visualise the data

1. Tracking their spending
    * Monthly, based off daily spending
    * Daily, based off what they spent it on (Food, travel, etc.) 

1. Add customization options
    * Currently, there isn't any customization options. An idea adding an option to pick a secondary colour (_currently goldenrod_) and add a light theme

## **Technologies used**

### **Languages**

- [HTML](https://html.spec.whatwg.org)
    - The project uses **HTML** as a foundation to the entire website.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - The project uses **CSS** as a method of attributing the elements in the HTML.
- [Javascript](https://www.javascript.com)
    - The project uses **JS** to make the website interactive.

### **Libraries**

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation, and display information on the website accordingly.

- [Bootstrap](https://getbootstrap.com)
    - The project uses **Bootstrap** to simplify the design process, especially with its responsive grid functions and extensive prebuilt components.

- [Font Awesome](https://fontawesome.com/?from=io)
    - The project uses **Font Awesome** for its compatibility with Twitter Bootstrap and helpful toolkit.

- [Google Fonts](https://fonts.google.com)
    - The project uses **Google Fonts** for an additional library of font options.

### **Tools**

- [Currencyscoop](https://currencyscoop.com)
    - The project uses **Currencyscoop's API** to calculate and compare all the information input by the user, and returns it to the website.

- [Highcharts](https://www.highcharts.com)
    - The project uses **Highcharts** to display a chart that makes use of the JSON data returned by the API.

### **Framework**
 - [Start Bootstrap's Grayscale](https://startbootstrap.com/theme/grayscale)
    - A free, multipurpose, one page Bootstrap theme featuring a dark color scheme and smooth scrolling animations.

## **Testing**

### **Convert form**

1. Go to the convert currency section of the page.
2. Try to submit the form empty and verify that converted value is displayed as zero.
3. Try to submit the form with a negative value or a value that isn't numerical and verify that the script that has been implemented to prevent that from happening is functioning.
4. Try to submit the form with all inputs valid and verify that an accurate conversion is displayed on the website via JQuery.

### **Compare form**

1. Go to the compare currency section of the page.
2. Try to submit the form empty and verify that an error message is displayed.
3. Try to submit the form with invalid currency codes on one AND both inputs and verify that an error message is displayed.
4. Try to submit the form with all inputs valid and verify that a graph is displayed, accurately indicating the values of the currency.

Since this project makes use of a template that is built upon Bootstrap, the device and screen compatibility works perfectly. The project looks adequately similar to the wireframe of the different devices.

![Wireframe Image](/images/wireframeImage.png)

There _aren't_ any interesting bugs or problems faced during my testing.


## **Credits**

### **Content**
- A majority of the CSS and initial design was taken from the [Grayscale framework](https://startbootstrap.com/theme/grayscale) mentioned earlier, provided for free by [Start Bootstrap](https://startbootstrap.com).

### **Media**
- The photo used for the masthead image is from [Pixabay](https://pixabay.com/photos/stock-trading-monitor-business-1863880/). For the website icon, [pngitem](https://www.pngitem.com/middle/JoixiT_exchange-dollar-icon-money-icon-png-transparent-png/).

### **Acknowledgements**
- In a sense, I received inspiration for this project from the assignment brief. It started from a project about managing money, to looking for APIs relating to money, to what it is currently.
