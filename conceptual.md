### Conceptual Exercise

Answer the following questions below:

1.  What is the purpose of the React Router?

 - React Router creates a client-side webpage that allows for users to navigate like a server-side site, without having to reload the page.

2.  What is a single page application?

 - A single-page application is any site or app that does not have to resend http information for data.

3.  What are some differences between client side and server side routing?

 - Client side servers can be faster and create a better user experience where server side routing has more flexibility to work well with databases and storing data not just on the local level.

4.  What are two ways of handling redirects with React Router? When would you use each?

  - You can use the Redirect component in React Router which would be used to redirect from an unknown page. Using the browser History with REact Router's History allows you to push on to the end of the history array.

5.  What are two different ways to handle page-not-found user experiences using React Router? 

 - You can Redirect to a page that does exist for any page not found, or you can create a 404 handler that shows a 404 page with access back to the application.

6.  How do you grab URL parameters from within a component using React Router?

 - To use URL parameters, you name the route the same as express 'home/:param' where param is a variable for any parameter passed in. The param can then be extracted with the useParams hook.

7.  What is context in React? When would you use it?

 - Context can create a Provider for a given prop to pass the prop down to children of the Component without having to add the prop in to each child on it's way "down". This is useful if you need a piece of state or function in the current component and 3 or 4 child components away, but not used in between.

8.  Describe some differences between class-based components and function
  components in React.

 - In general they can accomplish the same things with diffrent syntax. Class based components use Mounting and the LifeCycle to update at each stage of the render. Function components use hooks that can be easier to implement over larger applications, especially in HOC.

9.  What are some of the problems that hooks were designed to solve?

 - Hooks were created to make syntax easier between creating state, updates on a new render of Components, and creation of your own hooks can make ease of writing applications. 