.net corejax javascript library

A dynamic DOM manipulation/rendering library for use with dotnetcore.

Provide support for dynamic 


This library is designed to make dynamic apps easier to create using c# .netcore razor pages and the corejax.js library.

This library is built in two parts.

corejax - The javascript frontend which connets to netcorejax running inside a dotnet core application.
netcorejax - The dotnetcore c# library which provides the dynamic server side rendering support.



--- BRAINSTORMING ---

Client side we have:
    - The TypeScript Browser WebSocket & Ajax Client.

Server side we have:
    - The Message Server

Shared state:
    data: { }
    MVC: { }

Messages(AKA Packets): 
    Messages are sent between the client and server.

    There is two main types of messages.

        DOM CRUD Action Messages.
            Document object model create, read, update and delete actions.

        State CRUD Messages.
            State create, read, update and delete changes.

State synchronization:

Server side validation:

Client side validation: