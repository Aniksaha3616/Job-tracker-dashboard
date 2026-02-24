1. Understanding the differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById() is used to select a single element by its unique ID. It either returns that element or null. This method is quite fast since IDs are unique within the DOM.
getElementsByClassName() allows you to select elements based on their class name. It returns a live HTMLCollection, which means it updates automatically whenever the DOM changes.
querySelector() retrieves the first element that matches a given CSS selector. This method offers more flexibility compared to the previous two.
querySelectorAll() provides all elements that match the specified selector as a static NodeList. Unlike getElementsByClassName, it does not update automatically when the DOM changes. use getElementById() for selecting a single ID, getElementsByClassName() for live collections of classes, and querySelector / querySelectorAll() for versatile CSS-based selections.


2. Steps to create and insert a new element into the DOM:
To start, create an element using document.createElement().Next, add content to the element using either textContent or innerHTML.Then, if necessary, add any classes or attributes to the element.After that, select the parent element where you wish to insert the new element.Finally, use methods like append(), appendChild(), or prepend() to place it into the DOM.

3. What is Event Bubbling?
Event bubbling refers to the default event flow in JavaScript.When an event occurs on a specific element, it first executes on that element.This process continues up through the ancestor elements until it reaches the document.This mechanism allows parent elements to respond to events triggered by their child elements.

4. What is Event Delegation? Why is it beneficial?
Event delegation involves attaching a single event listener to a parent element.
This method takes advantage of event bubbling.Instead of adding individual listeners to multiple child elements, we manage events at the parent level.We can identify the actual clicked element using event.target.This approach enhances performance and is particularly effective for elements added dynamically.

5.The distinction between preventDefault() and stopPropagation()
The preventDefault() method halts the default actions of the browser.For instance, it can stop a form from being submitted or a link from being followed.
On the other hand, stopPropagation() prevents the event from bubbling up to its parent elements.
