What is Nodejs?

Node is an open source javascript runtime environment which is used to execute the js code outside the web browser.

What is express?

express is back-end web application framework of nodejs that provides us with broad features for building web and mobile applications.It is faster,unopinionated and minimalistic.

What is middleware?

A middleware is a function which is used for handling requests.it takes three arguments,i.e,request,response,next.Basically,at first,the client request will go to the middleware,not directly to the server.if the condition specified in the middleware is fulfilled,then only middleware will send the request to server using next(),otherwise the request will be redirected.there are two types of middleware,global middleware and local middleware.

What is module?

A module is similar to a js library.it has set of functions or reusable code writen over there that we can use in our application.we import a module in nodejs by using the require() method.

What is route?

Routing is how the client requests are handled by the application endpoints.in nodejs,we can create diffrent routes by using conditionals,which is a very cumbersome task.hence,we use express framework which has an app object corresponding to http.