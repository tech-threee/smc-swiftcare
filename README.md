# Setup Management Console
This repository contains the console for the Information Technology staff/department of the hospital like the Chief Technical officer , system support specialists and so on. This console is primarily for creating staff under the authorization of the users of the [Sudo Management Console](https://github.com/tech-threee/sudo-swiftcare), communicating with other users of the application, sending relevant announcements, creating blog posts and health tips.


NB: For the first release of this software, the features currently available are
- Viewing employees
- Viewing patient details
- Account authentication and management


## How To Access
The software is hosted using Netlify using [this url](https://smc-swiftcare.netlify.app)

## How To Use 
1. In order to get access to the application, one would have to login by providing a `Staff ID` and a `pin`
![](/screenshots/login.png)

2. After logging in, the user will see the Dashoard page which is a summary of the statistics of the system.
![](/screenshots/dashboard.png)

3. From there, they can visit the messages page to view in-app messages sent from other users of the application by using the navigation bar on the left hand side

4. The can visit the staff page to view details about the staff of the hospital

5. They can also visit the blog page to view previous blogs and create new blogs

The long-term goal of the software is to include features to allow the users manafe hospital website content, perform system checks across other consoles, provide technical support to other users and other relevant system support functionalities.


## Stack
This software was built using 
1. [Next.js](https://nextjs.org/)
2. [TailwindCSS](https://tailwindcss.org/)
3. [Shadcn UI](https://ui.shadcn.com/)

## Design System
Because this system is part of a software suite (SwiftCare Connec+), it shares the same design and components as the other consoles of the software suite however, the only different is that the primary color is green - `#4CAF50`