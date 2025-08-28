let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
  alert("You clicked the button!");
});
let box = document.querySelector(".box");
box.addEventListener("click", () => {
  alert("You clicked the box!");
});
box.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.body.addEventListener("click", () => {
  alert("You clicked the body!");
});
setInterval(() => {
  console.log("This message is logged every 2 seconds");
}, 2000);
setTimeout(() => {
  alert("This alert is shown after 5 seconds");
}, 5000);

/*  
===============================
   🌟 JavaScript Events Notes 🌟
===============================

🔹 1. Adding Events
   - element.onclick = fn          // Old way ❌
   - element.addEventListener("click", fn); ✅

🔹 2. Common Mouse Events
   click       → Single click
   dblclick    → Double click
   mouseenter  → Hover in
   mouseleave  → Hover out
   contextmenu → Right click

🔹 3. Keyboard Events
   keydown   → Key pressed
   keyup     → Key released
   keypress  → Key held down

🔹 4. Form Events
   submit    → Form submitted
   input     → User typing
   change    → Value changed
   focus     → Input selected
   blur      → Input lost focus

🔹 5. Event Bubbling & Capturing
   - Bubbling (default): child → parent → body
   - Capturing: parent → child (add true)
   - e.stopPropagation() → Stops bubbling/capturing

🔹 6. Event Object (e)
   e.type      → Event type
   e.target    → Element clicked
   e.clientX   → X position of click
   e.clientY   → Y position of click

🔹 7. setTimeout & setInterval
   setTimeout(fn, ms)    → Runs fn once after delay
   setInterval(fn, ms)   → Runs fn repeatedly
   clearTimeout(id)      → Stops timeout
   clearInterval(id)     → Stops interval

🔹 8. Best Practices
   ✅ Always use addEventListener()
   ✅ Use stopPropagation() when needed
   ✅ Clean up setInterval & setTimeout

===============================
*/
