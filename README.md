
<img width="1672" alt="Litolist" src="https://github.com/samiesmilz/litolist/assets/3438049/ed955c45-09c2-43e2-8b79-e0e44b55e85d">

# Welcome To The LitoList

Lito-List Manager is a simple web application that allows you to...
- Create, edit, and delete items in three different lists: "Day," "Week," and "Year." 
- You can also toggle a cross-out effect on list items and change their text.

### Getting Started:

- Open the web page with your lists.
- You'll see "Day," "Week," and "Year" lists.

### Adding Items:

- Find the input box in each list.
- Type your item and press "Enter" or click "Add."

### Managing Items:

- Delete: Click the "-" button to remove an item.
- Complete: Click an item's text to mark it as done.
- Edit: Click "Edit" to modify item text, then "Save."

### Extras:

- The slogan alternates between "Lito-List..." and "Big Champs!"
- Your lists auto-save, even if you refresh the page.

## Returning:

- Your lists will reappear when you return.
- Enjoy effortless list management with Lito-List Manager!

## Usage Instructions

1. **Select Elements:** In your HTML file, make sure you have a container element with the class "timeline" that contains your lists. This program adds event listeners to this container.

   ```javascript
   const timelineDiv = document.querySelector(".timeline");
   ```

2. **Click Event Handling:** The program listens for click events within the "timeline" container. Depending on which element you click within a list item, various actions are taken:
   
   - Clicking the "-" button (with class "delete") removes the list item.
   - Clicking the text (inside a <span> element) toggles a cross-out effect on the text.
   - Clicking the "edit" button (with class "edit") allows you to edit the text.
   - Clicking the "save" button (with class "save") saves your edits.

   Make sure you have HTML elements structured in this way for the program to work correctly.

3. **Adding New Items:** The program also allows you to add new items to your lists. Make sure you have one or more forms (with class "lito-form") containing an input box (with class "input-box") and an ordered list (<ol>) where the new items will be appended.

   ```javascript
   const litoForm = document.querySelectorAll(".lito-form");
   ```

   When you submit a form, a new list item is created with the provided text. You can then interact with it using the click event handling described above.

4. **Slogan Oscillation:** The program includes a fun feature that oscillates a slogan. It alternates between "Lito-List..." and "Big Champs!" every 2.8 seconds. The slogan is identified using the class "slogan."

   ```javascript
   const litoSlogan = document.querySelector(".slogan");
   ```

5. **Local Storage:** The program has functions to save and retrieve your lists from local storage. When you refresh the page, your lists will be loaded from local storage if data is available.

   - `saveLists()`: Save your lists to local storage.
   - `getLists()`: Retrieve your lists from local storage when the page loads.

   Ensure you have three separate lists in your HTML with the IDs "day-list," "week-list," and "year-list" for this feature to work correctly.

```javascript
// Call getLists when the page loads
window.addEventListener("load", getLists);
```

## Getting Started

1. Include the JavaScript code in your HTML file.

2. Make sure your HTML structure follows the requirements mentioned above.

3. Customize the program to fit your project's styling and functionality as needed.

4. Enjoy managing your lists with Lito-List Manager!

###### LitoList By Samie Smilz
