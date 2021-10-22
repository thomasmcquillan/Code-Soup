# MakeUse | Zero-Waste Fashion | Studio Helper App

[View the live website here.](https://thomasmcquillan.github.io/MakeUse/index.html)

Created for makeuse.nz, this project is a radical reimagining of the 'MAKE' pages from their existing website. The Make/Use site is an online toolset and education hub for Zero-Waste Fashion, launched alongside an exhibition and workshop series. The site's 'MAKE' pages each document the required steps, materials and patterns needed to create your own versions of garments featured in the exhibition. The resources are rich in detail but take some effort from users to decipher exactly what pattern pieces and downloads they need for their selected style - and how their finished garment may look. 

 The brief was to streamline the delivery of these resources to improve the user experience and further engage site visitors. Adopting the Make/Use 'Cropped Tshirt' and 'Coat' as pilot project, the new page supplements text instructions and download links with interactive elements. These include a customisable rendered model of the garment which allows users to switch the style of neckline, body and sleeve by clicking on garment tiles. Changes made by the user are reflected in the displayed fabric size required, and pattern downloads are filtered to display only those that are needed for the selected style. Upon settling on a style, users may enter their email address to have a summary of their selection along with instructions and download links sent to their inbox.

<!-- Placeholder for mockup images of finished page:

<p align="center">
    <img width="100%" src="https://thomasmcquillan.github.io/makeuse/documentation/makeusemockup.png" alt="mockup of finished website showing responsivity across devices">
</p>

-->

## User Experience (UX)

* ## User Stories

    * ### first time visitor Goals

        * As a first time visitor I would like to discover a page that is intuitive to use, with a good balance of imagery and useful information.

        * As a first time visitor I want to be provided with easy navigation to the information and resources I need to make my chosen garment.

        * As a first time visitor I would like to see images that give an indication of how the finished garment will look before I commit to making it. 

        * As a site visitor I would like to know how much fabric I will require to sew my selected style. 

        * As a first time visitor I expect a site that displays well across devices.

        * As a first time visitor I would like any downloads to open in a separate window/tab to avoid accidental navigation away from the site.

        * As a site visitor I would like the option of being emailed a detailed description of my selected garment, including any resources or documentation required to make it.  


    * ### Returning Visitor Goals

        * As a returning visitor I would like to attempt a new modification of the design and gather the appropriate resources to do so.

        * As a returning visitor I would find it helpful if the site remembers details of my previous selection.

    <!-- * ### Frequent Visitor Goals

        *  -->

* ## Client Stories

    * ### Client Goals

        * As the Creator and Project Lead for MakeUse I would like to significantly reduce the number of emails I receive from confused site visitors, asking questions about which downloads they need to create the garments shown.

        * As the client I would like to see a better balance of text and supporting images.

        * As the client I want the new page to match the aesthetic of the rest of the MakeUse site, including colors, fonts, branding etc.

        * As the client, it is important that page navigation is intuitive and that all links and functions work as intended.

        * As the client, the page needs to be easy to maintain.

        * As the client, it is important that the code is structured clearly so that it can serve as a template for bringing the same functionality to the other garments/garment-patterns on the MakeUse site.

## Design

* ### Colour Scheme

    * Given that the project is a reimagining of an existing page on a live website it is critical that the color scheme matches the rest of the site design and branding. Key colors have been borrowed from the site's existing CSS styles and applied in a manner consistent with the aesthetic of the site as a whole. 

    <!-- Thumbnails / color-swatches / screenshots here -->

    * The color scheme is also applied in more subtle ways, such as CSS :hover states for navigation links and JQuery 'mouseenter' event listeners to alert users that they can interact with the garment model.

    <!-- Sceenshot of hovered garment tile here -->

<p align="center">
    <img width="" src="https://thomasmcquillan.github.io/makeuse/documentation/_____.jpeg" alt="">
</p>

* ### Typography
    * For consistency with MakeUse website, my project uses 'Ubuntu', and 'MakeUse' typefaces.

    * I sourced Ubuntu from Google Fonts. It is used for the majority of text elements across the site, including body, links and headings etc.

    * MakeUse font is a bespoke typeface created for the project by designers, Jo Bailey and Thomas Le Bas. It was made available open-source and can be downloaded here: <src="https://makeuse.nz/articles/2016/makeuse-typeface-2/">

<!-- Insert screenshot examples of MakeUse and Ubuntu fonts here -->

* ### Imagery
    * Photographs by Jason O'Hara and Bonny Stewart-MacDonald. Interactive garment tiles rendered by Holly McQuillan in Clo3D.

## Wireframes
* I made the wireframes for the project using Adobe XD.

* See below for an overview of the page structure. 

<!-- Insert screenshot of wireframes. -->

*   # User Journey

<!-- Existing page: https://makeuse.nz/make/crop-t-shirt/ -->

<!-- ![Crop T shirt](https://thomasmcquillan.github.io/makeuse/documentation/wireframes/____.png) -->







## Features
* The page has been stripped down and rebuilt from the ground up, considering the user's journey when setting out to make a given garment. This starts with the creation and implementation of a bespoke interactive garment model which changes appearance as the user clicks the garment's neckline, body or left/right sleeves. As the garment tiles change, so too does the stated fabric width and length requirement to account for the changes in pattern size and shape. In addition, the list of required pattern downloads is filtered to match the resources needed for the changing garment. This avoids overwhelming the user with a long list of downloads to sort through, avoiding confusion and reducing cognitive load. The relevant downloads are displayed as thumbnail images, rather than plain text-links for more visually descriptive and engaging experience. 

Clicking on the image tiles to change garment style will also provide users with key measurements relating to the garment style and proportion which they can compare with their needs. This will be sufficient for most users, but for the seasoned sewist I have made it possible to enter custom values for the body length and body and arm circumference. Users are warned that when entering custom values, these values won't be represented in the rendered garment model as the possible variations are literally endless. However it will provide them with the fabric width and length requirements for their input values.

Pending:  Upon settling on a given style, the user may, if desired, enter their email address. Upon clicking submit, they can be sent a summary of their selected options - providing them with the instructions, download links and fabric requirements needed to complete the construction.

* The page has been designed to be responsive across devices from the 2016 iPhone-SE to a 27" 4k monitor. 

## Technologies Used
### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JQuery](https://en.wikipedia.org/wiki/JQuery)

### Frameworks, Libraries and Programs Used
1. [Bootstrap 5.1.3](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
* Bootstrap was used to style key page elements such as the navigation bar and for its responsive layout tools such as row and column classes.
2. [Google Fonts](https://fonts.google.com/)
* Google Fonts was used for typography across the site.
3. [Adobe Color](https://color.adobe.com/)
* Adobe Color was used when considering the color-scheme. This helped with matching my page to the rest of the MakeUse site.
4. [Adobe Photoshop](https://www.adobe.com/products/photoshop.html)
* Adobe Photoshop was used in the editing, resampling and export of the projects many image assets.
5. [jQuery](https://jquery.com/)
* jQuery was used extensively for declaring and calling variables, functions, objects etc. It was also used to power some of Bootstrap's responsive elements. Also used for Javascript's smooth scroll function.
6. [Git](https://git-scm.com/)
* Git was utilised for version control via the Gitpod terminal for commiting file changes to Git before pushing to the GitHub repository.
7. [GitHub](https://github.com/)
* GitHub provided a place to store the projects various files and assets after being commited and pushed from Git.
8. [Adobe XD](https://www.adobe.com/products/xd.html)
* Adobe XD was used to create the wireframes for the initial design, to show the layout and basic site elements.
9. [EmailJS](https://www.emailjs.com/)
* EmailJS was used for ....

## Testing

* ### W3C Markup Validator W3C CSS Validator

    * [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

        * [Results:](https://validator.w3.org/nu/_____.html)
     
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
        
        * [Results:](https://jigsaw.w3.org/css-validator/)

* ### Testing User Stories from User Experience (UX) Section 

* #### First Time Visitor Goals
    
    * #### ".."
 
        * Upon arrival at the site....
 
    * #### "As a first time visitor, ..."
        * Upon arrival at the site...
 
    * #### "As a first time visitor, ...
 
        * The site ...
 
    * #### "As a first time visitor, ..."
 
        * 
    
    * #### "As a first time visitor, ..."
 
        * 
 
    * #### "As a first time visitor I would like any downloads to open in a separate window/tab to avoid accidental navigation away from the site."
 
        * All downloads are instructed to open in a new tab using the target="_blank" syntax.


* #### Returning Visitor Goals
    * #### "As a returning visitor, ..
        
        * ....

    * #### "..
            
        * ..

* #### Client Goals

    * #### "."
         
        * ....
