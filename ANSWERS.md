What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to check with DevTools and see if the props being passed down are in the correct form, so that they can be rendered to the screen the way that the developers want. It's an important tool for debugging, as apps get bigger and props are passed more and more it serves as a blueprint to show how props should be handled. 

 Describe a life-cycle event in React?

Life-Cycle events are events that change the state of the page and the information that's rendered througout points of the users experince. there are three stages of a life-cycle in react the mount or birth of a component, the render or growth of a component and the dismount or death of a componenet. 

 Explain the details of a Higher Order Component?

A Higher order component is an advaced react JS pattern that consisits of a Component that takes in another component as part of it's argument. The way that we saw them used this week was to conditonally render protected content. 

 What are three different ways to style components in React? Explain some of the benefits of each.

Css- importing css file(s) and styling the rendered content. it's benefit is it doesn't take a lot of time to set up, and keeps all of the styling off the component pages, which makes the code easier to navigate in my opinion

Inline-styling, allows you to format divs,images, or any other html-style element as components and put the styling on them directly on the page the component is listed, or import from another component page, you can also set a type argument on the component that represents the html like element so it can be resued and take arguments with other types. 

Importing a library- Bringing in something like ReactStrap or a different third party library allows you to create a very detailed, polished layout for the component it's used with, with reletively little to no work. 
